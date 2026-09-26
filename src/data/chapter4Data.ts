import { Chapter } from '../types/syllabus';

export const CHAPTER_4_DATA: Chapter = {
  id: 4,
  code: "28542-CH04",
  titleBn: "স্ট্যাক (Stack)",
  titleEn: "Stack Data Structure",
  status: "complete",
  learningObjectives: [
    "স্ট্যাকের (Stack) সংজ্ঞা, মেমরি উপস্থাপনা এবং LIFO (Last In First Out) মূলনীতি সম্পূর্ণ আয়ত্ত করা।",
    "ডাটা স্ট্রাকচারে স্ট্যাকের বাস্তব প্রয়োগক্ষেত্র যেমন—Expression Evaluation, Infix to Postfix Conversion, Recursion Call Stack, Backtracking ও Undo/Redo অপারেশনের ভূমিকা ব্যাখ্যা করা।",
    "স্ট্যাকের মৌলিক অপারেশনসমূহ (PUSH, POP, PEEK/TOP, IS_EMPTY, IS_FULL) এবং TOP পয়েন্টারের কাজ অনুধাবন করা।",
    "স্ট্যাক ওভারফ্লো (Stack Overflow) ও স্ট্যাক আন্ডারফ্লো (Stack Underflow) শর্তাবলি চিহ্নিত ও হ্যান্ডেল করা।",
    "স্ট্যাকে ডাটা যোগ (PUSH) এবং অপসারণ (POP) করার স্ট্যান্ডার্ড অ্যালগরিদম ও টাইম কমপ্লেক্সিটি $O(1)$ বিশ্লেষণ করা।",
    "ইনফিক্স (Infix), পোস্টফিক্স (Postfix) ও প্রিফিক্স (Prefix) এক্সপ্রেশন বা পোলিশ নোটেশনের বিস্তারিত ধারণা জানা।",
    "স্ট্যাক ব্যবহার করে সাধারণ ও জটিল ইনফিক্স এক্সপ্রেশনকে পোস্টফিক্স ও প্রিফিক্সে রূপান্তরের অ্যালগরিদম ও টেবিল ট্র্যাকিং ব্যাখ্যা করা।",
    "সি (C) এবং পাইথন (Python) ভাষায় স্ট্যাক বাস্তবায়ন ও ইনফিক্স-টু-পোস্টফিক্স রূপান্তর প্রোগ্রাম তৈরি করতে পারা।"
  ],
  subtopics: [
    {
      id: "4.1",
      titleBn: "স্ট্যাকের সংজ্ঞা ও মূল ধারণা",
      titleEn: "Define stack",
      concept: `স্ট্যাক (Stack) হলো একটি রৈখিক (Linear) ও সীমাবদ্ধ (Restricted) ডাটা স্ট্রাকচার, যেখানে ডাটা উপাদানসমূহ একটি সুনির্দিষ্ট নিয়মে একটি মাত্র প্রান্ত বা মুখ দিয়ে প্রবেশ (Insert) এবং অপসারণ (Delete) করা হয়। স্ট্যাক যে বিশেষ নীতি অনুসরণ করে কাজ করে তাকে বলা হয় **LIFO (Last In, First Out)** অথবা **FILO (First In, Last Out)**। এর অর্থ হলো—যে উপাদানটি সবার শেষে স্ট্যাকে যোগ করা হয়, সেটিই সবার প্রথমে অপসারিত হয়। স্ট্যাকের যে উন্মুক্ত প্রান্ত দিয়ে ডাটা প্রবেশ ও বের হয় তাকে **TOP (শীর্ষ)** বলা হয়।`,
      realLifeAnalogy: `১. একটি খাবার প্লেটের স্তূপ (Stack of Plates): বিয়ে বাড়ির বুফেতে প্লেটগুলো একটার ওপর আরেকটা সাজিয়ে রাখা হয়। সবার শেষে যে প্লেটটি ওপর রাখা হয়, খাবার নেওয়ার সময় মানুষ সবার আগে সেটিই হাতে নেয়।
২. একটি একমুখো কাচের বয়ামে রাখা টেনিস বল: নিচের বলটি বের করতে হলে ওপরের বলগুলোকে ক্রমানুসারে আগে বের করে নিতে হয়।
৩. ওয়েব ব্রাউজারের 'Back' বাটন: আপনি যে ওয়েব পেজটি সবার শেষে ভিজিট করেছেন, Back বাটনে চাপলে সবার আগে সেই পেজটিই সামনে আসে।`,
      technicalDetails: `স্ট্যাক মূলত দুটি উপায়ে মেমরিতে বাস্তবায়ন (Implementation) করা যায়:
১. **স্ট্যাটিক স্ট্যাক (Array-based Stack):**
   - একটি নির্দিষ্ট সাইজের ১D অ্যারে ব্যবহার করে স্ট্যাক তৈরি করা হয়।
   - মেমরির আকার স্থির (Fixed Size) থাকে।
   - যখন অ্যারে সম্পূর্ণ পূর্ণ হয়ে যায়, তখন নতুন উপাদান যোগ করার চেষ্টাকে **Stack Overflow** বলা হয়।

২. **ডাইনামিক স্ট্যাক (Linked List-based Stack):**
   - ডাইনামিকালি নোড (Node) ও পয়েন্টার (Pointer) তৈরি করে মেমরি বরাদ্দ করা হয়।
   - মেমরি সাইজের কোনো নির্দিষ্ট সীমাবদ্ধতা থাকে না।

**TOP পয়েন্টারের মান নিয়ন্ত্রণ:**
- স্ট্যাক সম্পূর্ণ খালি থাকলে: $\\text{TOP} = -1$ (সি ল্যাঙ্গুয়েজ ০-ইনডেক্সিংয়ে)
- একটি উপাদান থাকলে: $\\text{TOP} = 0$
- স্ট্যাক পূর্ণ হলে: $\\text{TOP} = \\text{MAX} - 1$`,
      diagramType: "ascii",
      diagramContent: `                   ┌───────────────────────────────┐
                   │   PUSH (Insert at TOP)        │
                   │            ↓                  │
             TOP ➔ │ ┌───────────────────────────┐ │
                   │ │         Element 4         │ │
                   │ ├───────────────────────────┤ │
                   │ │         Element 3         │ │
                   │ ├───────────────────────────┤ │
                   │ │         Element 2         │ │
                   │ ├───────────────────────────┤ │
                   │ │         Element 1         │ │ ➔ Index 0 (Bottom)
                   │ └───────────────────────────┘ │
                   │            ↑                  │
                   │   POP (Delete from TOP)       │
                   └───────────────────────────────┘`,
      tableData: {
        headers: ["বৈশিষ্ট্য", "স্ট্যাটিক স্ট্যাক (Array-based)", "ডাইনামিক স্ট্যাক (Linked List)"],
        rows: [
          ["মেমরি বরাদ্দ", "কম্পাইল টাইমে স্ট্যাকে বরাদ্দ হয় (Static)।", "রান টাইমে হিপে প্রয়োজনমতো বরাদ্দ হয় (Dynamic)।"],
          ["আকারের সীমাবদ্ধতা", "পূর্বনির্ধারিত ফিক্সড ধারণক্ষমতা (MAX Size)।", "সীমাহীন (যতক্ষণ পর্যন্ত RAM খালি থাকে)।"],
          ["ওভারফ্লো ঝুঁকি", "অ্যারে পূর্ণ হলে Stack Overflow ঘটে।", "সাধারণত Stack Overflow ঘটে না।"],
          ["অ্যাক্সেস গতি", "অত্যন্ত দ্রুত এবং মেমরি লোকালিটি বেশি।", "পয়েন্টার রেফারেন্সিংয়ে সামান্য বেশি ওভারহেড।"],
          ["মেমরি অপচয়", "ব্যবহৃত না হলেও সম্পূর্ণ অ্যারে মেমরি দখল করে।", "প্রতিটি উপাদানের জন্য অতিরিক্ত পয়েন্টার মেমরি প্রয়োজন।"]
        ]
      },
      keyPoints: [
        "স্ট্যাক একটি LIFO (Last In First Out) লিনিয়ার ডাটা স্ট্রাকচার।",
        "স্ট্যাকের সকল অপারেশন (Insert, Delete, Inspect) শুধুমাত্র TOP প্রান্তেই সম্পন্ন হয়।",
        "খালি স্ট্যাকের TOP মান হয় -1; পূর্ণ স্ট্যাকের TOP মান হয় MAX - 1।"
      ]
    },
    {
      id: "4.2",
      titleBn: "ডাটা স্ট্রাকচারে স্ট্যাকের বাস্তব প্রয়োগক্ষেত্র",
      titleEn: "Write the applications of stack in data structure",
      concept: `আধুনিক কম্পিউটার সাইন্স, অপারেটিং সিস্টেম, কম্পাইলার ডিজাইন এবং বিভিন্ন সফটওয়্যার অ্যাপ্লিকেশনে স্ট্যাক অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে। গাণিতিক এক্সপ্রেশন রূপান্তর ও সমাধান থেকে শুরু করে মেমরি কল-স্ট্যাক ব্যবস্থাপনা পর্যন্ত প্রতিটি ক্ষেত্রে স্ট্যাকের LIFO নীতির ওপর ভিত্তি করে লজিক তৈরি করা হয়।`,
      realLifeAnalogy: `মাইক্রোসফট ওয়ার্ড বা ফটোশপে কাজ করার সময় আমরা যখন কোনো ভুল করে ফেলি, তখন \`Ctrl + Z\` চেপে Undo করি। এ ক্ষেত্রে আপনি সবার শেষে যে কাজটি করেছিলেন সেটিই আগে বাতিল হয়ে যায়—এটি ব্যাকগ্রাউন্ডে একটি Undo Stack ব্যবহার করে পরিচালিত হয়।`,
      technicalDetails: `স্ট্যাকের প্রধান বাস্তব প্রয়োগক্ষেত্রসমূহ:

১. **গাণিতিক এক্সপ্রেশন রূপান্তর ও মূল্যায়ন (Expression Parsing & Evaluation):**
   - ইনফিক্স (Infix: $A + B$) থেকে পোস্টফিক্স (Postfix / Reverse Polish: $AB+$) রূপান্তর।
   - ইনফিক্স থেকে প্রিফিক্স (Prefix / Polish Notation: $+AB$) রূপান্তর।
   - পোস্টফিক্স সমীকরণের মান সরাসরি গণনায় স্ট্যাক ব্যবহার করা হয়।

২. **বন্ধনী সমতা পরীক্ষা (Parentheses & Delimiter Matching):**
   - কম্পাইলার সোর্স কোডে ব্র্যাকেট \`(\`, \`{\`, \`[\` এর সঠিক জোড়া ও ভারসাম্য রয়েছে কিনা তা স্ট্যাকে পুশ ও পপ করে যাচাই করে।

৩. **ফাংশন কল ও রিকার্শন ম্যানেজমেন্ট (Call Stack / Recursion):**
   - একটি ফাংশন থেকে আরেকটি ফাংশন কল করলে পূর্বের ফাংশনের রিটার্ন অ্যাড্রেস ও লোকাল ভেরিয়েবলগুলো CPU কল-স্ট্যাকে জমা রাখে।
   - রিকার্সিভ অ্যালগরিদমের ব্যাকট্র্যাকিং নিয়ন্ত্রণে স্ট্যাক অপরিহার্য।

৪. **ব্যাকট্র্যাকিং অ্যালগরিদম (Backtracking Problems):**
   - গোলকধাঁধা সমাধান (Maze Pathfinding), দাবায় N-Queens সমস্যা, এবং গ্রাফ ট্রাভার্সালে Depth First Search (DFS)।

৫. **Undo / Redo মেকানিজম এবং ব্রাউজার হিস্ট্রি:**
   - যেকোনো টেক্সট এডিটর বা গ্রাফিক্স সফটওয়্যারের Undo/Redo অপারেশন এবং ওয়েব ব্রাউজারের Back ও Forward বাটন পরিচালনা।

৬. **স্ট্রিং ও ডাটা রিভার্সাল (String Reversal):**
   - কোনো শব্দ বা স্ট্রিংয়ের অক্ষরগুলোকে একে একে স্ট্যাকে পুশ করে পুনরায় পপ করলে শব্দটি সম্পূর্ণ উল্টে যায়।`,
      tableData: {
        headers: ["প্রয়োগের ক্ষেত্র", "ব্যবহৃত স্ট্যাক কৌশল", "বাস্তব ব্যবহারের উদাহরণ"],
        rows: [
          ["Expression Parsing", "Operator Stack & Precedence", "কম্পাইলার ও ক্যালকুলেটরে গাণিতিক সমাধান"],
          ["Syntax Verification", "Opening bracket PUSH, Closing POP", "VS Code / GCC তে সিনট্যাক্স এরর চেকিং"],
          ["Memory Call Stack", "Stack Frame & Activation Record", "C/C++, Java ও Python এ ফাংশন এক্সিকিউশন"],
          ["Graph Traversal", "Visited Node Stack", "Depth First Search (DFS) অ্যালগরিদম"],
          ["History Navigation", "Back Stack & Forward Stack", "Google Chrome / Firefox ব্রাউজার হিস্ট্রি"]
        ]
      },
      keyPoints: [
        "কম্পাইলার ডিজাইনে এক্সপ্রেশন পার্সিং ও সিনট্যাক্স ট্রি তৈরিতে স্ট্যাক প্রধান হাতিয়ার।",
        "ফাংশন কলের সময় লোকাল ভেরিয়েবল ও রিটার্ন অ্যাড্রেস স্ট্যাক ফ্রেমে সংরক্ষিত থাকে।",
        "ব্রাউজারের ব্যাক বাটন ও এডিটরের Undo ফিচার LIFO মেকানিজমে চলে।"
      ]
    },
    {
      id: "4.3",
      titleBn: "PUSH এবং POP অপারেশন ও ওভারফ্লো/আন্ডারফ্লো শর্ত",
      titleEn: "State PUSH and POP with Overflow & Underflow",
      concept: `স্ট্যাকের কার্যকারিতা মূলত দুটি প্রধান অপারেশনের ওপর নির্ভরশীল:
১. **PUSH:** স্ট্যাকের শীর্ষে (TOP) একটি নতুন ডাটা উপাদান যোগ বা প্রবেশ করানোর প্রক্রিয়া।
২. **POP:** স্ট্যাকের শীর্ষ (TOP) থেকে বিদ্যমান ডাটা উপাদান অপসারণ বা মুছে ফেলার প্রক্রিয়া।
এছাড়াও স্ট্যাকের শীর্ষ উপাদানটি না মুছে শুধুমাত্র দেখার জন্য **PEEK (বা TOP)** অপারেশন ব্যবহৃত হয়।`,
      realLifeAnalogy: `একটি পিস্তলের ম্যাগাজিনের কথা চিন্তা করুন: ম্যাগাজিনের মুখে একে একে বুলেট প্রবেশ করানো হলো **PUSH** অপারেশন, আর গুলি করার সময় মুখ থেকে একটি করে বুলেট বের হয়ে যাওয়া হলো **POP** অপারেশন। ম্যাগাজিন সম্পূর্ণ ভর্তি হলে আর বুলেট ঢোকানো যায় না (**Overflow**) এবং ম্যাগাজিন খালি থাকলে গুলি চালানো যায় না (**Underflow**)।`,
      technicalDetails: `**১. PUSH অপারেশনের অভ্যন্তরীণ কার্যপদ্ধতি:**
- ধাপ ১: প্রথমে পরীক্ষা করা হয় স্ট্যাকটি ইতোমধ্যে পূর্ণ কিনা (Overflow Check)।
  - শর্ত: If $\\text{TOP} == \\text{MAX} - 1$ (Overflow Error!)
- ধাপ ২: যদি পূর্ণ না থাকে, তবে TOP পয়েন্টারের মান ১ বৃদ্ধি করা হয়: $\\text{TOP} = \\text{TOP} + 1$
- ধাপ ৩: নতুন উপাদানটিকে $\\text{STACK}[\\text{TOP}]$ পজিশনে স্থাপন করা হয়।
- টাইম কমপ্লেক্সিটি: $O(1)$

**২. POP অপারেশনের অভ্যন্তরীণ কার্যপদ্ধতি:**
- ধাপ ১: প্রথমে পরীক্ষা করা হয় স্ট্যাকটি খালি কিনা (Underflow Check)।
  - শর্ত: If $\\text{TOP} == -1$ (Underflow Error!)
- ধাপ ২: $\\text{STACK}[\\text{TOP}]$ এর মানটি সংরক্ষণের জন্য তুলে নেওয়া হয়: $\\text{ITEM} = \\text{STACK}[\\text{TOP}]$
- ধাপ ৩: TOP পয়েন্টারের মান ১ কমিয়ে দেওয়া হয়: $\\text{TOP} = \\text{TOP} - 1$
- টাইম কমপ্লেক্সিটি: $O(1)$

**স্ট্যাক ওভারফ্লো ও আন্ডারফ্লোর তুলনা:**
- **Stack Overflow:** যখন কোনো স্ট্যাক তার সর্বোচ্চ ধারণক্ষমতায় (MAX) পৌঁছে যায় এবং এর পরেও অতিরিক্ত কোনো ডাটা PUSH করার চেষ্টা করা হয়, তখন সিস্টেম যে ত্রুটি বা এরর প্রদর্শন করে তাকে স্ট্যাক ওভারফ্লো বলে।
- **Stack Underflow:** যখন কোনো স্ট্যাক সম্পূর্ণ শূন্য বা খালি থাকে ($\text{TOP} = -1$) এবং সেই অবস্থা থেকে ডাটা POP বা মুছে ফেলার চেষ্টা করা হয়, তখন সিস্টেম যে ত্রুটি প্রদর্শন করে তাকে স্ট্যাক আন্ডারফ্লো বলে।`,
      diagramType: "ascii",
      diagramContent: ` PUSH Operation Trace:           POP Operation Trace:
 ┌─────┐ TOP = 1                 ┌─────┐ TOP = 2  (Popping 30)
 │ 20  │ ── PUSH(30) ──►  ┌─────┐│ 30  │ ── POP() ────►   ┌─────┐
 ├─────┤                  │ 30  │├─────┤                  │ 20  │ TOP = 1
 │ 10  │                  ├─────┤│ 20  │                  ├─────┤
 └─────┘                  │ 20  │├─────┤                  │ 10  │
                          ├─────┤│ 10  │                  └─────┘
                          │ 10  │└─────┘
                          └─────┘ TOP = 2`,
      keyPoints: [
        "PUSH করার পূর্বে সর্বদা Stack Overflow শর্ত ($\text{TOP} == \text{MAX} - 1$) পরীক্ষা করতে হয়।",
        "POP করার পূর্বে সর্বদা Stack Underflow শর্ত ($\text{TOP} == -1$) পরীক্ষা করতে হয়।",
        "PUSH এবং POP উভয় অপারেশনেরই টাইম কমপ্লেক্সিটি কনস্ট্যান্ট টাইম $O(1)$।"
      ]
    },
    {
      id: "4.4",
      titleBn: "স্ট্যাকে ডাটা যোগ (PUSH) এবং অপসারণ (POP) করার অ্যালগরিদম",
      titleEn: "Write an algorithm for adding & removing data into & from Stack",
      concept: `স্ট্যাকে ডাটা যোগ ও অপসারণের প্রক্রিয়াকে প্রোগ্রামিং ভাষায় কোডিং করার পূর্বে সুনির্দিষ্ট গাণিতিক ও লজিক্যাল ধাপে লিপিবদ্ধ করা হয়। নিচে BTEB বোর্ড পরীক্ষার জন্য বহুল ব্যবহৃত স্ট্যান্ডার্ড PUSH ও POP অ্যালগরিদম বিশদভাবে দেওয়া হলো।`,
      realLifeAnalogy: `একটি ব্যাংকের এটিএম বুথের ক্যাশ ক্যাসেটের মতো—টাকা লোড করার সময় ধারণক্ষমতা চেক করে ওপর থেকে একে একে ট্রেতে রাখা হয় (PUSH Algorithm), আর গ্রাহক টাকা তোলার সময় ওপরের নোটগুলো হিসাব করে বের করে ট্রে নিচে নামানো হয় (POP Algorithm)।`,
      technicalDetails: `নিচে স্ট্যাকের প্রধান অ্যালগরিদমসমূহ প্রদর্শিত হলো:

### অ্যালগরিদম ১: স্ট্যাকে ডাটা যোগ বা PUSH অ্যালগরিদম
\`\`\`algo
Algorithm: PUSH(STACK, TOP, MAX, ITEM)
[এখানে STACK হলো অ্যারে, TOP হলো শীর্ষ সূচক, MAX হলো সর্বোচ্চ ধারণক্ষমতা, ITEM হলো নতুন উপাদান]

ধাপ ১: [ওভারফ্লো পরীক্ষা]
      If TOP == MAX - 1, then:
          Print "Stack Overflow! স্ট্যাক পূর্ণ।"
          Exit.
      [End of If]
ধাপ ২: [TOP পয়েন্টার বৃদ্ধি]
      Set TOP := TOP + 1.
ধাপ ৩: [উপাদান প্রবেশ]
      Set STACK[TOP] := ITEM.
ধাপ ৪: [সম্পন্ন করে বের হওয়া]
      Exit.
\`\`\`
- **টাইম কমপ্লেক্সিটি:** $O(1)$
- **স্পেস কমপ্লেক্সিটি:** $O(1)$

---

### অ্যালগরিদম ২: স্ট্যাক থেকে ডাটা অপসারণ বা POP অ্যালগরিদম
\`\`\`algo
Algorithm: POP(STACK, TOP, ITEM)
[এখানে STACK হলো অ্যারে, TOP হলো শীর্ষ সূচক, ITEM হলো অপসারিত ডাটা ধারণকারী চলক]

ধাপ ১: [আন্ডারফ্লো পরীক্ষা]
      If TOP == -1, then:
          Print "Stack Underflow! স্ট্যাক খালি।"
          Exit.
      [End of If]
ধাপ ২: [শীর্ষ উপাদান সংগ্রহ]
      Set ITEM := STACK[TOP].
ধাপ ৩: [TOP পয়েন্টার হ্রাস]
      Set TOP := TOP - 1.
ধাপ ৪: [অপসারিত উপাদান ফেরত ও সমাপ্তি]
      Return ITEM and Exit.
\`\`\`
- **টাইম কমপ্লেক্সিটি:** $O(1)$
- **স্পেস কমপ্লেক্সিটি:** $O(1)$`,
      keyPoints: [
        "PUSH অপারেশনে প্রথমে TOP বাড়ে, তারপর ডাটা অ্যাসাইন হয়: STACK[++TOP] = ITEM।",
        "POP অপারেশনে প্রথমে ডাটা নেওয়া হয়, তারপর TOP কমে: ITEM = STACK[TOP--]।",
        "অ্যালগরিদমগুলোতে কোনো লুপ না থাকায় এগুলো কনস্ট্যান্ট টাইম $O(1)$-এ সম্পন্ন হয়।"
      ]
    },
    {
      id: "4.5",
      titleBn: "ইনফিক্স, পোস্টফিক্স ও প্রিফিক্স এক্সপ্রেশন (পোলিশ নোটেশন)",
      titleEn: "Explain the concept of Infix, Postfix & Prefix expression",
      concept: `গাণিতিক সমীকরণ বা এক্সপ্রেশন প্রকাশের প্রধান ৩টি রূপ রয়েছে: **ইনফিক্স (Infix)**, **প্রিফিক্স (Prefix)** এবং **পোস্টফিক্স (Postfix)**। 

মানুষ সাধারণভাবে যে সমীকরণ ব্যবহার করে যেমন $A + B$, তাকে **ইনফিক্স** বলা হয়, যেখানে অপারেটর দুটি অপার্যান্ডের মাঝে বসে। কিন্তু কম্পিউটার বা কম্পাইলারের জন্য ব্র্যাকেট এবং অপারেটর অগ্রাধিকার (Precedence) হিসাব করে ইনফিক্স মূল্যায়ন করা জটিল। 

১৯২০ সালে পোলিশ গণিতবিদ **ইয়ান লুকাসিয়েভিচ (Jan Łukasiewicz)** বন্ধনীবিহীন গাণিতিক সমীকরণ লেখার পদ্ধতি আবিষ্কার করেন, যা **পোলিশ নোটেশন (Polish Notation / Prefix)** এবং পরবর্তীতে **রিভার্স পোলিশ নোটেশন (Reverse Polish Notation / Postfix)** নামে পরিচিতি পায়।`,
      realLifeAnalogy: `১. সাধারণ মানুষের ভাষা (ইনফিক্স): "৫ যোগ ৩" ($5 + 3$) — সহজে বোধগম্য কিন্তু ব্র্যাকেট প্রয়োজন।
২. বৈজ্ঞানিক ক্যালকুলেটর (HP RPN Calculators): ইনপুট দেওয়া হয় "৫ ৩ +" — এখানে কোনো বন্ধনীর প্রয়োজন পড়ে না এবং স্ট্যাক সরাসরি প্রথম দুটি সংখ্যা তুলে যোগ করে ফেলে।`,
      technicalDetails: `**এক্সপ্রেশনের ৩টি রূপের তুলনামূলক বিশ্লেষণ:**

১. **ইনফিক্স নোটেশন (Infix Notation):**
   - ফরম্যাট: $\\text{Operand1} \\ \\mathbf{Operator} \\ \\text{Operand2}$
   - উদাহরণ: $A + B$, $(A + B) * C$, $A + B * C - D$
   - বৈশিষ্ট্য: মানুষের জন্য অত্যন্ত সহজবোধ্য, কিন্তু বন্ধনী (Parentheses) ও অগ্রাধিকারের ওপর নির্ভরশীল।

২. **প্রিফিক্স বা পোলিশ নোটেশন (Prefix / Polish Notation):**
   - ফরম্যাট: $\\mathbf{Operator} \\ \\text{Operand1} \\ \\text{Operand2}$
   - উদাহরণ: $+ A B$, $* + A B C$
   - বৈশিষ্ট্য: অপারেটরটি অপার্যান্ডের আগে অবস্থান করে। কোনো বন্ধনীর প্রয়োজন হয় না।

৩. **পোস্টফিক্স বা রিভার্স পোলিশ নোটেশন (Postfix / Reverse Polish Notation - RPN):**
   - ফরম্যাট: $\\text{Operand1} \\ \\text{Operand2} \\ \\mathbf{Operator}$
   - উদাহরণ: $A B +$, $A B + C *$
   - বৈশিষ্ট্য: অপারেটরটি অপার্যান্ডের পরে অবস্থান করে। কম্পিউটার স্ট্যাকের সাহায্যে বাম থেকে ডানে একবারে (Single Pass) সমাধান করতে পারে।

**অপারেটরের অগ্রাধিকার (Precedence) ও অ্যাসোসিয়েটিভিটি (Associativity):**
| অপারেটর | বিবরণ | অগ্রাধিকার (Precedence) | অ্যাসোসিয়েটিভিটি |
| :--- | :--- | :--- | :--- |
| \`^\` (Power) | ঘাত বা সূচক | ৩ (সর্বোচ্চ) | Right to Left |
| \`*\`, \`/\`, \`%\` | গুণ, ভাগ, ভাগশেষ | ২ (মাঝারি) | Left to Right |
| \`+\`, \`-\` | যোগ, বিয়োগ | ১ (সর্বনিম্ন) | Left to Right |`,
      diagramType: "ascii",
      diagramContent: `        ┌────────────────────────────────────────────────────────┐
        │            গাণিতিক এক্সপ্রেশনের তিন রূপ              │
        └────────────────────────────────────────────────────────┘
                       
     ইনফিক্স (Infix)      ➔        A      +      B   (মাঝে অপারেটর)
                                  └──────┬──────┘
                                         │
     প্রিফিক্স (Prefix)   ➔        +      A      B   (আগে অপারেটর - পোলিশ)
                                  └──────┬──────┘
                                         │
     পোস্টফিক্স (Postfix) ➔        A      B      +   (পরে অপারেটর - RPN)`,
      tableData: {
        headers: ["ইনফিক্স (Infix)", "প্রিফিক্স (Prefix / Polish)", "পোস্টফিক্স (Postfix / RPN)"],
        rows: [
          ["A + B", "+ A B", "A B +"],
          ["A + B * C", "+ A * B C", "A B C * +"],
          ["(A + B) * C", "* + A B C", "A B + C *"],
          ["(A + B) / (C - D)", "/ + A B - C D", "A B + C D - /"],
          ["A + B * C ^ D", "+ A * B ^ C D", "A B C D ^ * +"]
        ]
      },
      keyPoints: [
        "পোলিশ নোটেশনের জনক পোলিশ গণিতবিদ ইয়ান লুকাসিয়েভিচ (Jan Łukasiewicz)।",
        "পোস্টফিক্স ও প্রিফিক্স এক্সপ্রেশনে কোনো ব্র্যাকেট বা বন্ধনীর প্রয়োজন হয় না।",
        "কম্পিউটার ও কম্পাইলার স্ট্যাক ব্যবহার করে পোস্টফিক্স এক্সপ্রেশন সবচেয়ে দ্রুত মূল্যায়ন (Evaluate) করতে পারে।"
      ]
    },
    {
      id: "4.6",
      titleBn: "ইনফিক্সকে পোস্টফিক্স ও প্রিফিক্সে রূপান্তরের পদ্ধতি ও অ্যালগরিদম",
      titleEn: "Convert the simple infix expression to postfix or prefix expression",
      concept: `স্ট্যাক ডাটা স্ট্রাকচার ব্যবহার করে ইনফিক্স এক্সপ্রেশনকে স্বয়ংক্রিয়ভাবে পোস্টফিক্স বা প্রিফিক্স এক্সপ্রেশনে রূপান্তর করা যায়। এই রূপান্তরের জন্য অপারেটর স্ট্যাক (Operator Stack) এবং অপারেটর অগ্রাধিকারের (Operator Precedence) সুনির্দিষ্ট নিয়মাবলি অনুসরণ করা হয়। 

নিচে রূপান্তরের সম্পূর্ণ অ্যালগরিদম, ট্র্যাকিং টেবিল এবং পোস্টফিক্স মূল্যায়নের (Postfix Evaluation) কার্যপ্রণালী বিশদভাবে তুলে ধরা হলো।`,
      realLifeAnalogy: `একটি ট্রেন বা ট্রাফিকের শান্টিং ইয়ার্ডের কথা ভাবুন: বগিগুলো (Operands) সরাসরি মূল লাইনে (Output) চলে যায়, আর ইঞ্জিন বা সুইচগুলো (Operators) তাদের অগ্রাধিকার অনুসারে সাইডিং লাইনে (Stack) সাময়িক থেমে সঠিক ক্রমে মূল লাইনে যুক্ত হয়।`,
      technicalDetails: `### ১. ইনফিক্স থেকে পোস্টফিক্স রূপান্তরের স্ট্যান্ডার্ড অ্যালগরিদম:
\`\`\`algo
Algorithm: INFIX_TO_POSTFIX(INFIX, POSTFIX)
ধাপ ১: স্ট্যাকে '(' PUSH করি এবং ইনপুট INFIX এর শেষে ')' যুক্ত করি।
ধাপ ২: INFIX এক্সপ্রেশনটি বাম থেকে ডানে একটি করে চিহ্ন (Symbol) স্ক্যান করি যতক্ষণ না স্ট্যাক খালি হয়:
       ক. যদি স্ক্যানকৃত চিহ্নটি অপার্যান্ড (Operand যেমন: A, B, C বা সংখ্যা) হয়:
          - সরাসরি POSTFIX আউটপুটে যুক্ত করি।
       খ. যদি বাম বন্ধনী '(' হয়:
          - স্ট্যাকে PUSH করি।
       গ. যদি অপারেটর (+, -, *, /, ^) হয়:
          - স্ট্যাকের শীর্ষে যতক্ষণ উচ্চ বা সমান অগ্রাধিকারের অপারেটর থাকে, ততক্ষণ POP করে POSTFIX এ যোগ করি।
          - এরপর বর্তমান অপারেটরটিকে স্ট্যাকে PUSH করি।
       ঘ. যদি ডান বন্ধনী ')' হয়:
          - স্ট্যাকের শীর্ষ থেকে '(' না পাওয়া পর্যন্ত সকল অপারেটর POP করে POSTFIX এ যোগ করি।
          - সবশেষে '(' কে স্ট্যাক থেকে POP করে বর্জন করি (আউটপুটে যোগ হবে না)।
ধাপ ৩: সমাপ্তি (POSTFIX রিটার্ন করি)।
\`\`\`

---

### ২. স্টেপ-বাই-স্টেপ রূপান্তর টেবিল ট্র্যাকিং:
**উদাহরণ ১: $(A + B) * (C - D)$ রূপান্তর:**

| ক্রমিকে স্ক্যানকৃত চিহ্ন | স্ট্যাক অবস্থা (Operator Stack) | পোস্টফিক্স আউটপুট (Postfix Output) | ব্যাখ্যা |
| :---: | :--- | :--- | :--- |
| **প্রারম্ভিক** | \`(\` | ফাঁকা | স্ট্যাকে প্রারম্ভিক '(' পুশ |
| \`(\` | \`(\` \`(\` | ফাঁকা | বাম বন্ধনী পুশ |
| \`A\` | \`(\` \`(\` | \`A\` | অপার্যান্ড আউটপুটে |
| \`+\` | \`(\` \`(\` \`+\` | \`A\` | অপারেটর স্ট্যাকে পুশ |
| \`B\` | \`(\` \`(\` \`+\` | \`A B\` | অপার্যান্ড আউটপুটে |
| \`)\` | \`(\` | \`A B +\` | '(' না পাওয়া পর্যন্ত '+' পপ |
| \`*\` | \`(\` \`*\` | \`A B +\` | অপারেটর স্ট্যাকে পুশ |
| \`(\` | \`(\` \`*\` \`(\` | \`A B +\` | বাম বন্ধনী পুশ |
| \`C\` | \`(\` \`*\` \`(\` | \`A B + C\` | অপার্যান্ড আউটপুটে |
| \`-\` | \`(\` \`*\` \`(\` \`-\` | \`A B + C\` | অপারেটর স্ট্যাকে পুশ |
| \`D\` | \`(\` \`*\` \`(\` \`-\` | \`A B + C D\` | অপার্যান্ড আউটপুটে |
| \`)\` | \`(\` \`*\` | \`A B + C D -\` | '(' না পাওয়া পর্যন্ত '-' পপ |
| \`)\` [শেষ] | ফাঁকা | \`A B + C D - *\` | অবশিষ্ট '*' পপ ও সমাপ্তি |

**চূড়ান্ত পোস্টফিক্স ফলাফল:** \`A B + C D - *\`

---

### ৩. পোস্টফিক্স এক্সপ্রেশন মূল্যায়নের (Evaluation) পদ্ধতি:
পোস্টফিক্স এক্সপ্রেশন যেমন \`5 6 2 + * 12 4 / -\` এর মান বের করার নিয়ম:
1. বাম থেকে ডানে স্ক্যান করে সংখ্যা পেলে স্ট্যাকে PUSH করি।
2. অপারেটর পেলে স্ট্যাক থেকে ২টি সংখ্যা POP করি (প্রথমটি $B$, দ্বিতীয়টি $A$)।
3. $A \\text{ op } B$ হিসাব করে প্রাপ্ত ফলাফল আবার স্ট্যাকে PUSH করি।
4. স্ক্যান শেষে স্ট্যাকের শীর্ষে থাকা মানটিই চূড়ান্ত উত্তর।`,
      syntaxOrFormulas: [
        {
          lang: "c",
          label: "C ভাষায় ইনফিক্স থেকে পোস্টফিক্স রূপান্তর কোড",
          codeOrFormula: `#include <stdio.h>
#include <ctype.h>
#include <string.h>

#define MAX 100

char stack[MAX];
int top = -1;

void push(char c) {
    stack[++top] = c;
}

char pop() {
    if (top == -1) return -1;
    return stack[top--];
}

int precedence(char c) {
    if (c == '^') return 3;
    if (c == '*' || c == '/') return 2;
    if (c == '+' || c == '-') return 1;
    return 0;
}

void infixToPostfix(char infix[], char postfix[]) {
    int i = 0, j = 0;
    char token;

    while ((token = infix[i++]) != '\\0') {
        if (isalnum(token)) {
            postfix[j++] = token;
        } else if (token == '(') {
            push(token);
        } else if (token == ')') {
            while (top != -1 && stack[top] != '(') {
                postfix[j++] = pop();
            }
            pop(); // '(' মুছে ফেলা
        } else {
            while (top != -1 && precedence(stack[top]) >= precedence(token)) {
                postfix[j++] = pop();
            }
            push(token);
        }
    }

    while (top != -1) {
        postfix[j++] = pop();
    }
    postfix[j] = '\\0';
}

int main() {
    char infix[] = "(A+B)*C-(D/E)";
    char postfix[MAX];

    printf("Infix:   %s\\n", infix);
    infixToPostfix(infix, postfix);
    printf("Postfix: %s\\n", postfix);

    return 0;
}`
        },
        {
          lang: "python",
          label: "Python এ স্ট্যাক ব্যবহার করে Infix to Postfix",
          codeOrFormula: `def infix_to_postfix(expression):
    precedence = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}
    stack = []
    output = []

    for char in expression:
        if char.isalnum():
            output.append(char)
        elif char == '(':
            stack.append(char)
        elif char == ')':
            while stack and stack[-1] != '(':
                output.append(stack.pop())
            stack.pop()  # Remove '('
        elif char in precedence:
            while stack and stack[-1] != '(' and precedence.get(stack[-1], 0) >= precedence[char]:
                output.append(stack.pop())
            stack.append(char)

    while stack:
        output.append(stack.pop())

    return ''.join(output)

# টেস্ট
expr = "(A+B)*C-(D/E)"
print("Infix:", expr)
print("Postfix:", infix_to_postfix(expr))`
        }
      ],
      keyPoints: [
        "অপার্যান্ড পেলে সরাসরি আউটপুটে পাঠাতে হয়, স্ট্যাকে রাখা হয় না।",
        "স্ট্যাকে থাকা অপারেটরের অগ্রাধিকার বর্তমান স্ক্যানকৃত অপারেটরের সমান বা বেশি হলে তা পপ হয়।",
        "ডান বন্ধনী ')' পেলে পূর্বের বাম বন্ধনী '(' পর্যন্ত সকল অপারেটর পপ হয়ে যায়।"
      ]
    }
  ],
  practicalPrograms: [
    {
      title: "ব্যবহারিক পরীক্ষণ ০৪.১: সি ও পাইথনে অ্যারে ব্যবহার করে স্ট্যাক বাস্তবায়ন",
      problemStatementBn: "একটি পূর্ণাঙ্গ মেনু-চালিত প্রোগ্রাম প্রণয়ন করো যা স্ট্যাকে উপাদান PUSH, POP, PEEK এবং স্ট্যাকের বর্তমান উপাদানসমূহ DISPLAY করতে পারে এবং Overflow/Underflow পরিস্থিতি সঠিকভাবে হ্যান্ডেল করে।",
      algorithmStepsBn: [
        "একটি ধ্রুবক MAX = 5 নির্ধারণ করি এবং STACK[MAX] অ্যারে ও TOP = -1 ইনিশিয়ালাইজ করি।",
        "ব্যবহারকারীর ইনপুটের জন্য একটি লুপে মেনু প্রদর্শন করি (1. Push, 2. Pop, 3. Peek, 4. Display, 5. Exit)।",
        "Push নির্বাচনের ক্ষেত্রে TOP == MAX - 1 চেক করে Overflow বার্তা দিই, অন্যথায় TOP++ করে STACK[TOP] এ মান রাখি।",
        "Pop নির্বাচনের ক্ষেত্রে TOP == -1 চেক করে Underflow বার্তা দিই, অন্যথায় STACK[TOP] প্রিন্ট করে TOP-- করি।",
        "Peek নির্বাচনের ক্ষেত্রে শীর্ষ মান STACK[TOP] প্রদর্শন করি এবং Display তে Index 0 থেকে TOP পর্যন্ত লুপ চালাই।"
      ],
      cCode: `#include <stdio.h>
#include <stdlib.h>

#define MAX 5 // স্ট্যাকের সর্বোচ্চ ধারণক্ষমতা

int stack[MAX];
int top = -1; // স্ট্যাকের প্রারম্ভিক শীর্ষ সূচক

// PUSH অপারেশন: স্ট্যাকে ডাটা যোগ
void push(int val) {
    if (top == MAX - 1) {
        printf("⚠️ Stack Overflow! স্ট্যাক পূর্ণ, %d যোগ করা সম্ভব নয়।\\n", val);
    } else {
        top++;
        stack[top] = val;
        printf("✅ PUSH সফল: %d স্ট্যাকে যুক্ত হয়েছে (TOP = %d)\\n", val, top);
    }
}

// POP অপারেশন: স্ট্যাক থেকে ডাটা অপসারণ
void pop() {
    if (top == -1) {
        printf("⚠️ Stack Underflow! স্ট্যাক খালি, অপসারণের কিছু নেই।\\n");
    } else {
        int poppedVal = stack[top];
        top--;
        printf("✅ POP সফল: %d অপসারিত হয়েছে (নতুন TOP = %d)\\n", poppedVal, top);
    }
}

// PEEK অপারেশন: শীর্ষ উপাদান দেখা
void peek() {
    if (top == -1) {
        printf("স্ট্যাক খালি! PEEK করার মতো কোনো উপাদান নেই।\\n");
    } else {
        printf("🔍 PEEK: বর্তমান শীর্ষ উপাদান = %d (Index: %d)\\n", stack[top], top);
    }
}

// DISPLAY অপারেশন: স্ট্যাকের সকল উপাদান প্রদর্শন
void display() {
    if (top == -1) {
        printf("স্ট্যাক বর্তমানে সম্পূর্ণ খালি।\\n");
    } else {
        printf("\\n--- বর্তমান স্ট্যাকের উপাদানসমূহ (Top to Bottom) ---\\n");
        for (int i = top; i >= 0; i--) {
            if (i == top) {
                printf("│ %4d │ ◄── TOP\\n", stack[i]);
            } else {
                printf("│ %4d │\\n", stack[i]);
            }
        }
        printf("└──────┘\\n");
    }
}

int main() {
    printf("=== BTEB Data Structure Lab: Stack Implementation in C ===\\n\\n");
    
    // টেস্ট অপারেশন পরিচালনা
    push(10);
    push(20);
    push(30);
    display();
    
    peek();
    pop();
    display();
    
    push(40);
    push(50);
    push(60); // MAX পূর্ণ হবে
    push(70); // Overflow পরীক্ষা
    display();

    return 0;
}`,
      pythonCode: `class Stack:
    def __init__(self, max_size=5):
        self.stack = []
        self.max_size = max_size

    def push(self, val):
        if len(self.stack) >= self.max_size:
            print(f"⚠️ Stack Overflow! স্ট্যাক পূর্ণ, {val} যোগ করা যাবে না।")
        else:
            self.stack.append(val)
            print(f"✅ PUSH সফল: {val} যুক্ত হয়েছে (TOP = {len(self.stack)-1})")

    def pop(self):
        if len(self.stack) == 0:
            print("⚠️ Stack Underflow! স্ট্যাক খালি।")
            return None
        else:
            val = self.stack.pop()
            print(f"✅ POP সফল: {val} অপসারিত হয়েছে (নতুন TOP = {len(self.stack)-1})")
            return val

    def peek(self):
        if len(self.stack) == 0:
            print("স্ট্যাক খালি!")
            return None
        print(f"🔍 PEEK: বর্তমান শীর্ষ মান = {self.stack[-1]}")
        return self.stack[-1]

    def display(self):
        if len(self.stack) == 0:
            print("স্ট্যাক সম্পূর্ণ খালি।")
        else:
            print("\\n--- বর্তমান স্ট্যাক (Top to Bottom) ---")
            for i in range(len(self.stack)-1, -1, -1):
                pointer = " ◄── TOP" if i == len(self.stack)-1 else ""
                print(f"│ {self.stack[i]:4} │{pointer}")
            print("└──────┘")

# টেস্ট প্রোগ্রাম
if __name__ == "__main__":
    print("=== BTEB Data Structure Lab: Stack in Python ===")
    s = Stack(max_size=5)
    s.push(10)
    s.push(20)
    s.push(30)
    s.display()
    s.peek()
    s.pop()
    s.display()`,
      sampleOutput: `=== BTEB Data Structure Lab: Stack Implementation in C ===

✅ PUSH সফল: 10 স্ট্যাকে যুক্ত হয়েছে (TOP = 0)
✅ PUSH সফল: 20 স্ট্যাকে যুক্ত হয়েছে (TOP = 1)
✅ PUSH সফল: 30 স্ট্যাকে যুক্ত হয়েছে (TOP = 2)

--- বর্তমান স্ট্যাকের উপাদানসমূহ (Top to Bottom) ---
│   30 │ ◄── TOP
│   20 │
│   10 │
└──────┘
🔍 PEEK: বর্তমান শীর্ষ উপাদান = 30 (Index: 2)
✅ POP সফল: 30 অপসারিত হয়েছে (নতুন TOP = 1)

--- বর্তমান স্ট্যাকের উপাদানসমূহ (Top to Bottom) ---
│   20 │ ◄── TOP
│   10 │
└──────┘
✅ PUSH সফল: 40 স্ট্যাকে যুক্ত হয়েছে (TOP = 2)
✅ PUSH সফল: 50 স্ট্যাকে যুক্ত হয়েছে (TOP = 3)
✅ PUSH সফল: 60 স্ট্যাকে যুক্ত হয়েছে (TOP = 4)
⚠️ Stack Overflow! স্ট্যাক পূর্ণ, 70 যোগ করা সম্ভব নয়।

--- বর্তমান স্ট্যাকের উপাদানসমূহ (Top to Bottom) ---
│   60 │ ◄── TOP
│   50 │
│   40 │
│   20 │
│   10 │
└──────┘`,
      explanationBn: "এই প্রোগ্রামে স্ট্যাকের সকল মৌলিক অপারেশন যেমন PUSH, POP, PEEK ও DISPLAY সফলভাবে বাস্তবায়ন করা হয়েছে। মেমরিতে TOP পয়েন্টারের মাধ্যমে শেষ উপাদান ট্র্যাক করা হয় এবং ধারণক্ষমতা অতিক্রান্ত হলে Overflow এরর হ্যান্ডেল করা হয়।"
    },
    {
      title: "ব্যবহারিক পরীক্ষণ ০৪.২: ইনফিক্স থেকে পোস্টফিক্স এক্সপ্রেশন রূপান্তর প্রোগ্রাম",
      problemStatementBn: "স্ট্যাক ডাটা স্ট্রাকচার ব্যবহার করে সি ও পাইথন ভাষায় একটি ইনফিক্স গাণিতিক সমীকরণকে পোস্টফিক্স সমীকরণে রূপান্তরের প্রোগ্রাম তৈরি করো।",
      algorithmStepsBn: [
        "একটি ক্যারেক্টার স্ট্যাক তৈরি করি এবং অপারেটর প্রিসিডেন্স নির্ধারণের জন্য একটি ফাংশন লিখি।",
        "ইনপুট সমীকরণটি বাম থেকে ডানে প্রতিটি অক্ষরের জন্য স্ক্যান করি।",
        "অপার্যান্ড পেলে সরাসরি আউটপুটে পাঠাই, '(' পেলে স্ট্যাকে পুশ করি এবং ')' পেলে '(' না পাওয়া পর্যন্ত পপ করি।",
        "অপারেটর পেলে স্ট্যাকের শীর্ষ থেকে উচ্চ বা সমান অগ্রাধিকারের অপারেটরগুলোকে পপ করে নতুন অপারেটর পুশ করি।",
        "স্ক্যান শেষে স্ট্যাকের অবশিষ্ট সকল অপারেটর পপ করে আউটপুটে যুক্ত করি।"
      ],
      cCode: `#include <stdio.h>
#include <ctype.h>
#include <string.h>

#define MAX 100

char stack[MAX];
int top = -1;

void push(char c) {
    stack[++top] = c;
}

char pop() {
    if (top == -1) return -1;
    return stack[top--];
}

int precedence(char c) {
    if (c == '^') return 3;
    if (c == '*' || c == '/') return 2;
    if (c == '+' || c == '-') return 1;
    return 0;
}

void infixToPostfix(char infix[], char postfix[]) {
    int i = 0, j = 0;
    char token;

    while ((token = infix[i++]) != '\\0') {
        if (isalnum(token)) {
            postfix[j++] = token;
        } else if (token == '(') {
            push(token);
        } else if (token == ')') {
            while (top != -1 && stack[top] != '(') {
                postfix[j++] = pop();
            }
            pop(); // Remove '('
        } else {
            while (top != -1 && precedence(stack[top]) >= precedence(token)) {
                postfix[j++] = pop();
            }
            push(token);
        }
    }

    while (top != -1) {
        postfix[j++] = pop();
    }
    postfix[j] = '\\0';
}

int main() {
    char infix[] = "(A+B)*C-(D/E)";
    char postfix[MAX];

    printf("=== Infix to Postfix Converter ===\\n");
    printf("Infix Expression:   %s\\n", infix);
    
    infixToPostfix(infix, postfix);
    
    printf("Postfix Expression: %s\\n", postfix);
    return 0;
}`,
      pythonCode: `def infix_to_postfix(expression):
    precedence = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}
    stack = []
    output = []

    for char in expression:
        if char.isalnum():
            output.append(char)
        elif char == '(':
            stack.append(char)
        elif char == ')':
            while stack and stack[-1] != '(':
                output.append(stack.pop())
            stack.pop() # Remove '('
        elif char in precedence:
            while stack and stack[-1] != '(' and precedence.get(stack[-1], 0) >= precedence[char]:
                output.append(stack.pop())
            stack.append(char)

    while stack:
        output.append(stack.pop())

    return ''.join(output)

# টেস্ট
expr = "(A+B)*C-(D/E)"
print("Infix Expression:  ", expr)
print("Postfix Expression:", infix_to_postfix(expr))`,
      sampleOutput: `=== Infix to Postfix Converter ===
Infix Expression:   (A+B)*C-(D/E)
Postfix Expression: AB+C*DE/-`,
      explanationBn: "স্ট্যাক ব্যবহারের মাধ্যমে অপারেটরের অগ্রাধিকার (Precedence) এবং ব্র্যাকেটের নিয়ম রক্ষা করে ইনফিক্স সমীকরণকে সফলভাবে পোস্টফিক্স নোটেশনে রূপান্তর করা হয়েছে।"
    }
  ],
  summaryPoints: [
    "স্ট্যাক হলো একটি LIFO (Last In First Out) রৈখিক ডাটা স্ট্রাকচার যেখানে শুধুমাত্র TOP প্রান্ত দিয়ে ডাটা ইনসার্ট ও ডিলিট হয়।",
    "স্ট্যাকের প্রধান অপারেশন ৩টি: PUSH (ডাটা যোগ), POP (ডাটা অপসারণ), এবং PEEK (শীর্ষ ডাটা পরিদর্শন)।",
    "স্ট্যাক পূর্ণ থাকা অবস্থায় নতুন উপাদান PUSH করার চেষ্টাকে Stack Overflow বলা হয় (শর্ত: TOP == MAX - 1)।",
    "স্ট্যাক সম্পূর্ণ খালি থাকা অবস্থায় ডাটা POP করার চেষ্টাকে Stack Underflow বলা হয় (শর্ত: TOP == -1)।",
    "স্ট্যাকের PUSH, POP, এবং PEEK অপারেশনের গড় ও ওর্স্ট-কেস টাইম কমপ্লেক্সিটি সর্বদা $O(1)$।",
    "গাণিতিক এক্সপ্রেশন ৩ প্রকার: ইনফিক্স ($A+B$), প্রিফিক্স বা পোলিশ ($+AB$) এবং পোস্টফিক্স বা রিভার্স পোলিশ ($AB+$)।",
    "কম্পাইলার ডিজাইনে এক্সপ্রেশন পার্সিং, পোস্টফিক্স রূপান্তর, রিকার্শন কল-স্ট্যাক এবং টেক্সট Undo/Redo অপারেশনে স্ট্যাক অপরিহার্য।"
  ],
  boardQuestions: [
    {
      id: "q4-01",
      type: "ati_songkhipto",
      questionBn: "স্ট্যাক (Stack) কাকে বলে?",
      questionEn: "Define Stack.",
      answerBn: "স্ট্যাক হলো একটি রৈখিক (Linear) ডাটা স্ট্রাকচার যা LIFO (Last In First Out) নীতি অনুসরণ করে কাজ করে, অর্থাৎ যার শুধুমাত্র একটি প্রান্ত (TOP) দিয়ে ডাটা সন্নিবেশ ও অপসারণ করা যায়।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2019", "BTEB 2016"],
      isImportant: true,
      subtopicRef: "4.1"
    },
    {
      id: "q4-02",
      type: "ati_songkhipto",
      questionBn: "LIFO এর পূর্ণরূপ ও অর্থ কী?",
      questionEn: "What is the full form and meaning of LIFO?",
      answerBn: "LIFO এর পূর্ণরূপ হলো **Last In, First Out**। এর অর্থ হলো—ডাটা স্ট্রাকচারে যে উপাদানটি সবার শেষে প্রবেশ করানো হয়, সেটিই সবার প্রথমে অপসারিত হবে।",
      marks: 1,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2018"],
      isImportant: true,
      subtopicRef: "4.1"
    },
    {
      id: "q4-03",
      type: "ati_songkhipto",
      questionBn: "স্ট্যাক ওভারফ্লো (Stack Overflow) কী এবং এর শর্ত কী?",
      questionEn: "What is Stack Overflow and state its condition?",
      answerBn: "যখন কোনো স্ট্যাক তার সর্বোচ্চ ধারণক্ষমতায় (MAX) পৌঁছে পূর্ণ হয়ে যায় এবং এর পরেও নতুন কোনো ডাটা PUSH করার চেষ্টা করা হয়, তখন যে ত্রুটিপূর্ণ অবস্থা সৃষ্টি হয় তাকে স্ট্যাক ওভারফ্লো বলে। শর্ত: `TOP == MAX - 1`।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2020", "BTEB 2017"],
      isImportant: true,
      subtopicRef: "4.3"
    },
    {
      id: "q4-04",
      type: "ati_songkhipto",
      questionBn: "স্ট্যাক আন্ডারফ্লো (Stack Underflow) বলতে কী বোঝায়?",
      questionEn: "What is Stack Underflow?",
      answerBn: "যখন কোনো স্ট্যাক সম্পূর্ণ শূন্য বা খালি থাকে (`TOP == -1`) এবং সেই অবস্থা থেকে কোনো উপাদান POP বা অপসারণের চেষ্টা করা হয়, তখন তাকে স্ট্যাক আন্ডারফ্লো বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2022", "BTEB 2019", "BTEB 2016"],
      isImportant: true,
      subtopicRef: "4.3"
    },
    {
      id: "q4-05",
      type: "ati_songkhipto",
      questionBn: "PUSH এবং POP অপারেশনের টাইম কমপ্লেক্সিটি কত?",
      questionEn: "What is the time complexity of PUSH and POP operations?",
      answerBn: "স্ট্যাকের PUSH এবং POP উভয় অপারেশনেরই টাইম কমপ্লেক্সিটি হলো কনস্ট্যান্ট টাইম $O(1)$।",
      marks: 1,
      yearsAppeared: ["BTEB 2021", "BTEB 2018"],
      isImportant: true,
      subtopicRef: "4.3"
    },
    {
      id: "q4-06",
      type: "ati_songkhipto",
      questionBn: "পোলিশ নোটেশন (Polish Notation) ও রিভার্স পোলিশ নোটেশন কী?",
      questionEn: "What is Polish and Reverse Polish Notation?",
      answerBn: "পোলিশ নোটেশন হলো প্রিফিক্স নোটেশন (Prefix: $+AB$) যেখানে অপারেটর অপার্যান্ডের পূর্বে বসে। রিভার্স পোলিশ নোটেশন হলো পোস্টফিক্স নোটেশন (Postfix: $AB+$) যেখানে অপারেটর অপার্যান্ডের পরে বসে।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2019"],
      isImportant: true,
      subtopicRef: "4.5"
    },
    {
      id: "q4-07",
      type: "ati_songkhipto",
      questionBn: "PEEK বা TOP অপারেশনের কাজ কী?",
      questionEn: "What is the purpose of PEEK / TOP operation?",
      answerBn: "PEEK অপারেশনের কাজ হলো স্ট্যাকের শীর্ষ উপাদানটিকে (TOP Element) না মুছে বা অপসারিত না করে শুধুমাত্র তার মান প্রদর্শন বা পরিদর্শন করা।",
      marks: 1,
      yearsAppeared: ["BTEB 2022", "BTEB 2017"],
      isImportant: false,
      subtopicRef: "4.3"
    },
    {
      id: "q4-08",
      type: "songkhipto",
      questionBn: "ডাটা স্ট্রাকচারে স্ট্যাকের ৪টি প্রধান বাস্তব প্রয়োগ সংক্ষেপে লেখো।",
      questionEn: "Mention 4 main applications of stack in data structure.",
      answerBn: `স্ট্যাকের ৪টি প্রধান বাস্তব প্রয়োগ:
১. **গাণিতিক এক্সপ্রেশন রূপান্তর ও সমাধান:** ইনফিক্স সমীকরণকে পোস্টফিক্স ও প্রিফিক্সে রূপান্তর এবং তাদের মান নির্ণয়।
২. **ফাংশন কল ও রিকার্শন:** মেমরিতে ফাংশন কলের রিটার্ন অ্যাড্রেস ও লোকাল ভেরিয়েবল সংরক্ষণ (Call Stack)।
৩. **বন্ধনী সমতা পরীক্ষা:** কম্পাইলার দ্বারা কোডে ব্র্যাকেট \`()\`, \`{}\`, \`[]\` এর সঠিক ভারসাম্য যাচাই।
৪. **Undo / Redo অপারেশন ও ব্রাউজার ব্যাক বাটন:** টেক্সট এডিটরে পূর্বের কাজ বাতিল ও ওয়েব ব্রাউজারের হিস্ট্রি পরিচালনা।`,
      marks: 3,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2019", "BTEB 2017"],
      isImportant: true,
      subtopicRef: "4.2"
    },
    {
      id: "q4-09",
      type: "songkhipto",
      questionBn: "ইনফিক্স, প্রিফিক্স এবং পোস্টফিক্স এক্সপ্রেশনের মধ্যকার পার্থক্য লেখো।",
      questionEn: "Differentiate between Infix, Prefix and Postfix expressions.",
      answerBn: `ইনফিক্স, প্রিফিক্স ও পোস্টফিক্স এক্সপ্রেশনের মূল পার্থক্যসমূহ:
১. **অপারেটরের অবস্থান:**
   - ইনফিক্সে অপারেটর অপার্যান্ড দুটির মাঝে থাকে (যেমন: $A + B$)।
   - প্রিফিক্সে অপারেটর অপার্যান্ড দুটির পূর্বে থাকে (যেমন: $+ A B$)।
   - পোস্টফিক্সে অপারেটর অপার্যান্ড দুটির পরে থাকে (যেমন: $A B +$)।
২. **বন্ধনী বা ব্র্যাকেট:**
   - ইনফিক্সে অগ্রাধিকার প্রকাশের জন্য বন্ধনী আবশ্যক।
   - প্রিফিক্স ও পোস্টফিক্সে কোনো বন্ধনীর প্রয়োজন হয় না।
৩. **কম্পিউটার মূল্যায়ন:**
   - ইনফিক্স সরাসরি মূল্যায়ন করা কম্পিউটারের জন্য জটিল।
   - পোস্টফিক্স স্ট্যাকের সাহায্যে বাম থেকে ডানে সহজে মূল্যায়ন করা যায়।`,
      marks: 3,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2018"],
      isImportant: true,
      subtopicRef: "4.5"
    },
    {
      id: "q4-10",
      type: "songkhipto",
      questionBn: "স্ট্যাক ব্যবহার করে ইনফিক্স এক্সপ্রেশন (A + B) * C কে পোস্টফিক্সে রূপান্তরের ধাপসমূহ দেখাও।",
      questionEn: "Convert infix expression (A + B) * C into postfix using stack step-by-step.",
      answerBn: `ইনফিক্স: \`(A + B) * C\` এর রূপান্তর ধাপ:
১. '(' স্ক্যান ➔ স্ট্যাকে PUSH \`(\` (Stack: \`(\`, Output: ফাঁকা)
২. 'A' স্ক্যান ➔ অপার্যান্ড সরাসরি আউটপুটে (Output: \`A\`)
৩. '+' স্ক্যান ➔ স্ট্যাকে PUSH \`+\` (Stack: \`(\` \`+\`, Output: \`A\`)
৪. 'B' স্ক্যান ➔ অপার্যান্ড সরাসরি আউটপুটে (Output: \`AB\`)
৫. ')' স্ক্যান ➔ '(' পর্যন্ত সব POP (Output: \`AB+\`, Stack: ফাঁকা)
৬. '*' স্ক্যান ➔ স্ট্যাকে PUSH \`*\` (Stack: \`*\`, Output: \`AB+\`)
৭. 'C' স্ক্যান ➔ অপার্যান্ড আউটপুটে (Output: \`AB+C\`)
৮. স্ক্যান শেষ ➔ স্ট্যাকের \`*\` POP (চূড়ান্ত আউটপুট: \`AB+C*\`)`,
      marks: 3,
      yearsAppeared: ["BTEB 2023", "BTEB 2020", "BTEB 2017"],
      isImportant: true,
      subtopicRef: "4.6"
    },
    {
      id: "q4-11",
      type: "rochonamulok",
      questionBn: "চিত্রসহ স্ট্যাক ডাটা স্ট্রাকচারে ডাটা PUSH এবং POP করার সম্পূর্ণ অ্যালগরিদম ও টাইম কমপ্লেক্সিটি বিস্তারিত আলোচনা করো।",
      questionEn: "Explain complete PUSH and POP algorithms with diagram and time complexity analysis.",
      answerBn: `### ১. PUSH অ্যালগরিদম (ডাটা যোগকরণ):
\`\`\`algo
Algorithm: PUSH(STACK, TOP, MAX, ITEM)
ধাপ ১: [ওভারফ্লো পরীক্ষা]
      If TOP == MAX - 1, then:
          Print "Stack Overflow" and Exit.
ধাপ ২: [TOP বৃদ্ধি]
      Set TOP := TOP + 1.
ধাপ ৩: [উপাদান স্থাপন]
      Set STACK[TOP] := ITEM.
ধাপ ৪: Exit.
\`\`\`

### ২. POP অ্যালগরিদম (ডাটা অপসারণ):
\`\`\`algo
Algorithm: POP(STACK, TOP, ITEM)
ধাপ ১: [আন্ডারফ্লো পরীক্ষা]
      If TOP == -1, then:
          Print "Stack Underflow" and Exit.
ধাপ ২: [উপাদান সংগ্রহ]
      Set ITEM := STACK[TOP].
ধাপ ৩: [TOP হ্রাস]
      Set TOP := TOP - 1.
ধাপ ৪: Return ITEM and Exit.
\`\`\`

**টাইম কমপ্লেক্সিটি বিশ্লেষণ:**
PUSH এবং POP উভয় অপারেশনের ক্ষেত্রেই কোনো লুপ ব্যবহারের প্রয়োজন হয় না। শীর্ষ পয়েন্টার TOP এর মান ১ বাড়িয়ে বা কমিয়ে সরাসরি ইনডেক্স অ্যাক্সেসের মাধ্যমে সম্পাদন করা হয়। ফলে এদের Worst Case, Best Case ও Average Case টাইম কমপ্লেক্সিটি সর্বদা $O(1)$।`,
      diagramContent: `        PUSH(30)                              POP() ➔ Returns 30
    ┌──────────────┐                      ┌──────────────┐
TOP │  30 (New)    │ Index 2              │  30 (Popped) │
    ├──────────────┤                  TOP │  20 (Top)    │ Index 1
    │  20          │ Index 1              ├──────────────┤
    ├──────────────┤                      │  10          │ Index 0
    │  10          │ Index 0              └──────────────┘
    └──────────────┘`,
      marks: 5,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2019", "BTEB 2016"],
      isImportant: true,
      subtopicRef: "4.4"
    },
    {
      id: "q4-12",
      type: "rochonamulok",
      questionBn: "ইনফিক্স থেকে পোস্টফিক্সে রূপান্তরের সম্পূর্ণ অ্যালগরিদমটি লেখো এবং (A + B * C) / (D - E) সমীকরণটি টেবিলের সাহায্যে রূপান্তর করে দেখাও।",
      questionEn: "Write complete algorithm for Infix to Postfix and convert (A + B * C) / (D - E) using tabular trace.",
      answerBn: `### অ্যালগরিদম:
\`\`\`algo
Algorithm: INFIX_TO_POSTFIX(INFIX, POSTFIX)
ধাপ ১: স্ট্যাকে '(' PUSH করি এবং ইনপুট INFIX এর শেষে ')' যুক্ত করি।
ধাপ ২: INFIX এক্সপ্রেশনটি বাম থেকে ডানে একটি করে চিহ্ন স্ক্যান করি:
       ক. অপার্যান্ড পেলে সরাসরি POSTFIX এ যুক্ত করি।
       খ. '(' পেলে স্ট্যাকে PUSH করি।
       গ. অপারেটর পেলে স্ট্যাকের শীর্ষ থেকে উচ্চ বা সমান অগ্রাধিকারের অপারেটর POP করে POSTFIX এ দিই এবং নতুন অপারেটর PUSH করি।
       ঘ. ')' পেলে '(' পর্যন্ত সব POP করে POSTFIX এ দিই এবং '(' মুছে ফেলি।
ধাপ ৩: সমাপ্তি।
\`\`\`

### রূপান্তর টেবিল: \`(A + B * C) / (D - E)\`
| স্ক্যানকৃত চিহ্ন | স্ট্যাক অবস্থা | পোস্টফিক্স আউটপুট |
| :---: | :--- | :--- |
| \`(\` | \`(\` | ফাঁকা |
| \`A\` | \`(\` | \`A\` |
| \`+\` | \`(\` \`+\` | \`A\` |
| \`B\` | \`(\` \`+\` | \`A B\` |
| \`*\` | \`(\` \`+\` \`*\` | \`A B\` |
| \`C\` | \`(\` \`+\` \`*\` | \`A B C\` |
| \`)\` | ফাঁকা | \`A B C * +\` |
| \`/\` | \`/\` | \`A B C * +\` |
| \`(\` | \`/\` \`(\` | \`A B C * +\` |
| \`D\` | \`/\` \`(\` | \`A B C * + D\` |
| \`-\` | \`/\` \`(\` \`-\` | \`A B C * + D\` |
| \`E\` | \`/\` \`(\` \`-\` | \`A B C * + D E\` |
| \`)\` | \`/\` | \`A B C * + D E -\` |
| **সমাপ্ত** | ফাঁকা | \`A B C * + D E - /\` |

**চূড়ান্ত পোস্টফিক্স:** \`A B C * + D E - /\``,
      marks: 5,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2018", "BTEB 2015"],
      isImportant: true,
      subtopicRef: "4.6"
    }
  ],
  quizQuestions: [
    {
      id: 1,
      questionBn: "স্ট্যাক কোন মেমরি ব্যবস্থাপনা নীতি অনুসরণ করে কাজ করে?",
      options: ["FIFO (First In First Out)", "LIFO (Last In First Out)", "Random Access", "SJF (Shortest Job First)"],
      correctAnswerIndex: 1,
      explanationBn: "স্ট্যাক হলো LIFO (Last In First Out) কাঠামো যেখানে সবার শেষে প্রবেশ করা উপাদানটি সবার আগে বের হয়।",
      topicRef: "4.1"
    },
    {
      id: 2,
      questionBn: "স্ট্যাক সম্পূর্ণ খালি থাকলে TOP পয়েন্টারের মান কত থাকে?",
      options: ["0", "1", "-1", "MAX"],
      correctAnswerIndex: 2,
      explanationBn: "সি ল্যাঙ্গুয়েজে ০-ভিত্তিক ইনডেক্সিংয়ে খালি স্ট্যাকের TOP মান হয় -1।",
      topicRef: "4.1"
    },
    {
      id: 3,
      questionBn: "স্ট্যাকে নতুন উপাদান যোগ করার অপারেশনকে কী বলা হয়?",
      options: ["POP", "PUSH", "PEEK", "ENQUEUE"],
      correctAnswerIndex: 1,
      explanationBn: "স্ট্যাকের শীর্ষে উপাদান যোগ করার প্রক্রিয়াকে PUSH অপারেশন বলা হয়।",
      topicRef: "4.3"
    },
    {
      id: 4,
      questionBn: "স্ট্যাকের সর্বোচ্চ ধারণক্ষমতা MAX হলে Stack Overflow শর্ত কোনটি?",
      options: ["TOP == 0", "TOP == -1", "TOP == MAX - 1", "TOP < MAX"],
      correctAnswerIndex: 2,
      explanationBn: "যখন TOP এর মান MAX - 1 হয়, তখন স্ট্যাক সম্পূর্ণ পূর্ণ থাকে এবং অতিরিক্ত ডাটা PUSH করলে Overflow ঘটে।",
      topicRef: "4.3"
    },
    {
      id: 5,
      questionBn: "শীর্ষ উপাদান না মুছে শুধুমাত্র দেখার অপারেশনকে কী বলে?",
      options: ["DELETE", "PEEK / TOP", "POP", "VIEW"],
      correctAnswerIndex: 1,
      explanationBn: "PEEK অপারেশনের মাধ্যমে স্ট্যাক থেকে উপাদান না মুছে সরাসরি বর্তমান শীর্ষ মানটি দেখা যায়।",
      topicRef: "4.3"
    },
    {
      id: 6,
      questionBn: "ফাংশন কল ও রিকার্শন বাস্তবায়নে অপারেটিং সিস্টেম কোন ডাটা স্ট্রাকচার ব্যবহার করে?",
      options: ["Queue", "Tree", "Stack", "Graph"],
      correctAnswerIndex: 2,
      explanationBn: "ফাংশন কলের রিটার্ন অ্যাড্রেস ও লোকাল ভেরিয়েবল সংরক্ষণে CPU কল-স্ট্যাক (Call Stack) ব্যবহার করে।",
      topicRef: "4.2"
    },
    {
      id: 7,
      questionBn: "পোলিশ নোটেশন (Polish Notation) বলতে কোন এক্সপ্রেশনকে বোঝায়?",
      options: ["Infix", "Prefix", "Postfix", "Binary"],
      correctAnswerIndex: 1,
      explanationBn: "ইয়ান লুকাসিয়েভিচের নামানুসারে প্রিফিক্স নোটেশনকে পোলিশ নোটেশন এবং পোস্টফিক্সকে রিভার্স পোলিশ নোটেশন বলা হয়।",
      topicRef: "4.5"
    },
    {
      id: 8,
      questionBn: "ইনফিক্স এক্সপ্রেশন (A + B) * C এর পোস্টফিক্স রূপ কোনটি?",
      options: ["+AB*C", "AB+C*", "ABC*+", "AB*C+"],
      correctAnswerIndex: 1,
      explanationBn: "(A + B) * C রূপান্তর করলে প্রথমে ব্র্যাকেটের ভেতরের AB+ হবে, এরপর * C যুক্ত হয়ে AB+C* হবে।",
      topicRef: "4.6"
    },
    {
      id: 9,
      questionBn: "স্ট্যাকের PUSH এবং POP অপারেশনের টাইম কমপ্লেক্সিটি কত?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      correctAnswerIndex: 2,
      explanationBn: "স্ট্যাকের যেকোনো একক PUSH বা POP অপারেশন সম্পন্ন হতে নির্দিষ্ট ধ্রুব সময় লাগে, অর্থাৎ O(1)।",
      topicRef: "4.3"
    },
    {
      id: 10,
      questionBn: "নিচের কোন অপারেটরটির অগ্রাধিকার (Precedence) সবচেয়ে বেশি?",
      options: ["+", "*", "-", "^ (Power)"],
      correctAnswerIndex: 3,
      explanationBn: "গাণিতিক অপারেটরগুলোর মধ্যে ঘাত বা পাওয়ার (^) এর অগ্রাধিকার সবার উপরে (Precedence Level 3)।",
      topicRef: "4.5"
    }
  ]
};
