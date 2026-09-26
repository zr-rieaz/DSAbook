import React from 'react';

interface CodeHighlightProps {
  code: string;
  language?: 'c' | 'python' | 'text' | 'algo';
  className?: string;
  showLineNumbers?: boolean;
}

// Token types for rich, colorful code editor syntax highlighting
type TokenType =
  | 'keyword'
  | 'type'
  | 'function'
  | 'string_text'       // Plain text inside prints/strings: standard neutral text color
  | 'string_quote'      // Quotes " or '
  | 'format_specifier'  // %d, %s, \n, \t, etc.
  | 'fstring_prefix'    // 'f' prefix in python f-strings
  | 'fstring_brace'     // { and } curly braces inside f-strings
  | 'number'
  | 'preprocessor'
  | 'comment'
  | 'operator'
  | 'punctuation'
  | 'variable'
  | 'text';

interface Token {
  type: TokenType;
  value: string;
}

const C_KEYWORDS = new Set([
  'auto', 'break', 'case', 'const', 'continue', 'default', 'do', 'else',
  'enum', 'extern', 'for', 'goto', 'if', 'inline', 'register', 'restrict',
  'return', 'sizeof', 'static', 'struct', 'switch', 'typedef', 'union',
  'volatile', 'while'
]);

const C_TYPES = new Set([
  'int', 'char', 'float', 'double', 'void', 'long', 'short', 'signed',
  'unsigned', 'bool', 'size_t', 'ssize_t', 'int8_t', 'int16_t', 'int32_t',
  'int64_t', 'uint8_t', 'uint16_t', 'uint32_t', 'uint64_t', 'FILE', 'Node',
  'Stack', 'Queue', 'Tree', 'Graph', 'Element'
]);

const PY_KEYWORDS = new Set([
  'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue',
  'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global',
  'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass',
  'raise', 'return', 'try', 'while', 'with', 'yield', 'True', 'False', 'None'
]);

const BUILTIN_FUNCS = new Set([
  'printf', 'scanf', 'malloc', 'calloc', 'realloc', 'free', 'exit', 'main',
  'strlen', 'strcpy', 'strncpy', 'strcmp', 'strcat', 'memset', 'memcpy',
  'print', 'input', 'len', 'range', 'enumerate', 'zip', 'map', 'filter',
  'list', 'dict', 'set', 'tuple', 'int', 'str', 'float', 'bool', 'max',
  'min', 'sum', 'sorted', 'abs', 'round', 'open', 'close', 'append', 'pop',
  'insert', 'remove', 'index', 'count', 'reverse', 'sort', 'clear', 'copy'
]);

// Helper to tokenize expressions inside f-string { ... }
function tokenizeExpression(expr: string, lang: 'c' | 'python'): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  const n = expr.length;

  while (i < n) {
    const startIdx = i;

    if (/\s/.test(expr[i])) {
      tokens.push({ type: 'text', value: expr[i] });
      i++;
      continue;
    }

    // Number
    if (/\d/.test(expr[i])) {
      let num = '';
      while (i < n && /[\d.]/.test(expr[i])) {
        num += expr[i];
        i++;
      }
      tokens.push({ type: 'number', value: num });
      continue;
    }

    // Identifier / Function / Keyword
    if (/[a-zA-Z_$]/.test(expr[i])) {
      let word = '';
      while (i < n && /[a-zA-Z0-9_$]/.test(expr[i])) {
        word += expr[i];
        i++;
      }

      let lookahead = i;
      while (lookahead < n && /\s/.test(expr[lookahead])) {
        lookahead++;
      }
      const isFunction = (lookahead < n && expr[lookahead] === '(') || BUILTIN_FUNCS.has(word);

      if (lang === 'python' && PY_KEYWORDS.has(word)) {
        tokens.push({ type: 'keyword', value: word });
      } else if (isFunction) {
        tokens.push({ type: 'function', value: word });
      } else {
        tokens.push({ type: 'variable', value: word });
      }
      continue;
    }

    // Operators
    const twoChars = expr.substring(i, i + 2);
    if (['==', '!=', '<=', '>=', '&&', '||', '++', '--', '->', '+=', '-=', '*=', '/='].includes(twoChars)) {
      tokens.push({ type: 'operator', value: twoChars });
      i += 2;
      continue;
    }

    if (['+', '-', '*', '/', '%', '=', '<', '>', '!', '&', '|', '^'].includes(expr[i])) {
      tokens.push({ type: 'operator', value: expr[i] });
      i++;
      continue;
    }

    // Punctuation
    if (['(', ')', '[', ']', ':', ',', '.'].includes(expr[i])) {
      tokens.push({ type: 'punctuation', value: expr[i] });
      i++;
      continue;
    }

    tokens.push({ type: 'text', value: expr[i] });
    i++;

    // Safety check to guarantee loop progression
    if (i === startIdx) {
      i++;
    }
  }

  return tokens;
}

// Tokenize a string literal (handling C format specifiers and Python f-strings)
function tokenizeStringLiteral(
  content: string,
  quote: string,
  isFString: boolean,
  lang: 'c' | 'python'
): Token[] {
  const tokens: Token[] = [];
  tokens.push({ type: 'string_quote', value: quote });

  let i = 0;
  const n = content.length;

  while (i < n) {
    const startIdx = i;

    // 1. Python F-String interpolation: {expression}
    if (isFString && content[i] === '{') {
      if (content[i + 1] === '{') {
        tokens.push({ type: 'string_text', value: '{{' });
        i += 2;
        continue;
      }
      tokens.push({ type: 'fstring_brace', value: '{' });
      i++;
      let expr = '';
      let braceDepth = 1;
      while (i < n && braceDepth > 0) {
        if (content[i] === '{') braceDepth++;
        else if (content[i] === '}') {
          braceDepth--;
          if (braceDepth === 0) break;
        }
        expr += content[i];
        i++;
      }
      if (expr.length > 0) {
        tokens.push(...tokenizeExpression(expr, lang));
      }
      if (i < n && content[i] === '}') {
        tokens.push({ type: 'fstring_brace', value: '}' });
        i++;
      }
      continue;
    }

    // 2. C Format specifiers: %d, %s, %f, %c, %lf, etc.
    if (lang === 'c' && content[i] === '%') {
      const match = content.substring(i).match(/^%[0-9.-]*[diuoxXfFeEgGaAcspn%]/);
      if (match) {
        tokens.push({ type: 'format_specifier', value: match[0] });
        i += match[0].length;
        continue;
      }
    }

    // 3. Escape sequences: \n, \t, \r, \\, \", \'
    if (content[i] === '\\' && i + 1 < n) {
      tokens.push({ type: 'format_specifier', value: content.substring(i, i + 2) });
      i += 2;
      continue;
    }

    // 4. Standard string text inside prints (neutral normal text color)
    let text = '';
    while (i < n) {
      if (isFString && content[i] === '{') break;
      if (lang === 'c' && content[i] === '%') {
        // Only break if it's actually followed by a format specifier
        if (/^%[0-9.-]*[diuoxXfFeEgGaAcspn%]/.test(content.substring(i))) {
          break;
        }
      }
      if (content[i] === '\\' && i + 1 < n) break;
      text += content[i];
      i++;
    }
    if (text.length > 0) {
      tokens.push({ type: 'string_text', value: text });
    }

    // Absolute safety guard against infinite loop
    if (i === startIdx) {
      tokens.push({ type: 'string_text', value: content[i] });
      i++;
    }
  }

  tokens.push({ type: 'string_quote', value: quote });
  return tokens;
}

function tokenizeLine(line: string, lang: 'c' | 'python' | 'text' | 'algo'): Token[] {
  if (lang === 'text') {
    return [{ type: 'text', value: line }];
  }

  const tokens: Token[] = [];
  let i = 0;
  const n = line.length;

  while (i < n) {
    const startIdx = i;

    // 1. Comments
    if (lang === 'c' && line.substring(i, i + 2) === '//') {
      tokens.push({ type: 'comment', value: line.substring(i) });
      break;
    }
    if (lang === 'python' && line[i] === '#') {
      tokens.push({ type: 'comment', value: line.substring(i) });
      break;
    }

    // 2. C Preprocessor (#include <...>, #define, etc.)
    if (lang === 'c' && line.trimStart().startsWith('#') && i === line.indexOf('#')) {
      const match = line.match(/^(\s*#\w+)(\s*(?:<[^>]+>|"[^"]+"))?/);
      if (match) {
        tokens.push({ type: 'preprocessor', value: match[1] });
        if (match[2]) {
          tokens.push({ type: 'format_specifier', value: match[2] });
        }
        i += match[0].length;
        continue;
      }
    }

    // 3. Python f-strings: f"..." or f'...'
    if (lang === 'python' && (line[i] === 'f' || line[i] === 'F') && (line[i + 1] === '"' || line[i + 1] === "'")) {
      tokens.push({ type: 'fstring_prefix', value: line[i] });
      const quote = line[i + 1];
      i += 2;
      let content = '';
      while (i < n && line[i] !== quote) {
        if (line[i] === '\\' && i + 1 < n) {
          content += line[i] + line[i + 1];
          i += 2;
        } else {
          content += line[i];
          i++;
        }
      }
      if (i < n && line[i] === quote) {
        i++;
      }
      tokens.push(...tokenizeStringLiteral(content, quote, true, 'python'));
      continue;
    }

    // 4. Standard Strings: "..." or '...'
    if (line[i] === '"' || line[i] === "'") {
      const quote = line[i];
      i++;
      let content = '';
      while (i < n && line[i] !== quote) {
        if (line[i] === '\\' && i + 1 < n) {
          content += line[i] + line[i + 1];
          i += 2;
        } else {
          content += line[i];
          i++;
        }
      }
      if (i < n && line[i] === quote) {
        i++;
      }
      tokens.push(...tokenizeStringLiteral(content, quote, false, lang === 'python' ? 'python' : 'c'));
      continue;
    }

    // 5. Numbers (decimal, hex, floats)
    if (/\d/.test(line[i]) && (i === 0 || !/[a-zA-Z0-9_$]/.test(line[i - 1]))) {
      let num = '';
      if (line.substring(i, i + 2) === '0x' || line.substring(i, i + 2) === '0X') {
        num += line.substring(i, i + 2);
        i += 2;
        while (i < n && /[0-9a-fA-F]/.test(line[i])) {
          num += line[i];
          i++;
        }
      } else {
        while (i < n && /[\d.]/.test(line[i])) {
          num += line[i];
          i++;
        }
      }
      tokens.push({ type: 'number', value: num });
      continue;
    }

    // 6. Word / Identifier / Keyword / Function / Type
    if (/[a-zA-Z_$]/.test(line[i])) {
      let word = '';
      while (i < n && /[a-zA-Z0-9_$]/.test(line[i])) {
        word += line[i];
        i++;
      }

      let lookahead = i;
      while (lookahead < n && /\s/.test(line[lookahead])) {
        lookahead++;
      }
      const isFunction = (lookahead < n && line[lookahead] === '(') || BUILTIN_FUNCS.has(word);

      if (lang === 'c') {
        if (C_KEYWORDS.has(word)) {
          tokens.push({ type: 'keyword', value: word });
        } else if (C_TYPES.has(word)) {
          tokens.push({ type: 'type', value: word });
        } else if (isFunction) {
          tokens.push({ type: 'function', value: word });
        } else {
          tokens.push({ type: 'variable', value: word });
        }
      } else if (lang === 'python') {
        if (PY_KEYWORDS.has(word)) {
          tokens.push({ type: 'keyword', value: word });
        } else if (isFunction) {
          tokens.push({ type: 'function', value: word });
        } else {
          tokens.push({ type: 'variable', value: word });
        }
      } else {
        if (isFunction) {
          tokens.push({ type: 'function', value: word });
        } else {
          tokens.push({ type: 'variable', value: word });
        }
      }
      continue;
    }

    // 7. Multi-character Operators
    const twoChars = line.substring(i, i + 2);
    if (['==', '!=', '<=', '>=', '&&', '||', '++', '--', '->', '+=', '-=', '*=', '/=', '%=', '<<', '>>'].includes(twoChars)) {
      tokens.push({ type: 'operator', value: twoChars });
      i += 2;
      continue;
    }

    // 8. Single-character Operators
    if (['+', '-', '*', '/', '%', '=', '<', '>', '!', '&', '|', '^', '~', '?', ':'].includes(line[i])) {
      tokens.push({ type: 'operator', value: line[i] });
      i++;
      continue;
    }

    // 9. Punctuation / Brackets
    if (['(', ')', '{', '}', '[', ']', ';', ',', '.'].includes(line[i])) {
      tokens.push({ type: 'punctuation', value: line[i] });
      i++;
      continue;
    }

    // 10. Whitespace and everything else
    tokens.push({ type: 'text', value: line[i] });
    i++;

    // Absolute safety guard against infinite loop
    if (i === startIdx) {
      i++;
    }
  }

  return tokens;
}

const TOKEN_COLOR_MAP: Record<TokenType, string> = {
  keyword: 'text-fuchsia-400 font-bold',               // Bright Magenta/Fuchsia for Keywords (for, while, if, return, def, del)
  type: 'text-yellow-300 font-semibold',               // Bright Gold/Yellow for Types (int, float, char, void, Node)
  function: 'text-blue-400 font-bold',                 // Bright Blue for Functions (printf, scanf, print, insert, main)
  string_text: 'text-slate-100 font-normal',           // Regular text inside prints and strings: Standard neutral text color!
  string_quote: 'text-emerald-400/90 font-medium',     // Subtle Emerald quotes
  format_specifier: 'text-amber-400 font-bold',        // Bright Amber/Orange for %d, %s, \n, \t, etc.
  fstring_prefix: 'text-fuchsia-400 font-bold',        // Pink/Fuchsia for 'f' prefix in python f-strings
  fstring_brace: 'text-pink-400 font-bold',            // Bright Pink curly braces { } in f-string
  number: 'text-orange-400 font-bold',                 // Bright Orange for Numbers (0, 10, 25, 100)
  preprocessor: 'text-pink-400 font-bold',             // Bright Pink for #include, #define
  comment: 'text-zinc-500 italic',                     // Zinc italic for Comments
  operator: 'text-rose-400 font-semibold',             // Rose/Coral for Operators (+, -, =, ->, ==)
  punctuation: 'text-zinc-400',                        // Light Zinc for brackets, commas, semicolons
  variable: 'text-cyan-300 font-medium',               // Bright Electric Cyan for Variables / Identifiers (arr, idx, val, item, pos, n)
  text: 'text-slate-300',
};

export const CodeHighlight: React.FC<CodeHighlightProps> = ({
  code,
  language = 'c',
  className = '',
  showLineNumbers = true,
}) => {
  if (!code) return null;

  const lines = code.split('\n');

  return (
    <div className={`font-mono text-xs sm:text-sm leading-relaxed select-text ${className}`}>
      {lines.map((line, lineIdx) => {
        const tokens = tokenizeLine(line, language);
        return (
          <div key={lineIdx} className="table-row group hover:bg-zinc-800/40 transition-colors">
            {showLineNumbers && (
              <span className="table-cell pr-4 sm:pr-6 text-right select-none text-zinc-600 dark:text-zinc-600 font-mono text-xs border-r border-zinc-800/80 group-hover:text-zinc-400">
                {lineIdx + 1}
              </span>
            )}
            <span className="table-cell pl-4 whitespace-pre">
              {tokens.length === 0 ? (
                '\n'
              ) : (
                tokens.map((token, tIdx) => (
                  <span key={tIdx} className={TOKEN_COLOR_MAP[token.type] || 'text-slate-200'}>
                    {token.value}
                  </span>
                ))
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
};
