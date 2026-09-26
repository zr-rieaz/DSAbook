export interface SubTopic {
  id: string; // e.g., '1.1'
  titleBn: string;
  titleEn: string;
  concept: string; // Detailed concept explanation in Bengali with English tech terms
  realLifeAnalogy?: string; // Real-world analogy / example
  technicalDetails?: string; // Technical breakdown
  diagramType?: 'ascii' | 'custom' | 'table' | 'interactive';
  diagramContent?: string;
  tableData?: { headers: string[]; rows: string[][] };
  keyPoints: string[];
  syntaxOrFormulas?: { label: string; codeOrFormula: string; lang?: string }[];
  advantages?: string[];
  disadvantages?: string[];
}

export interface BoardQuestion {
  id: string;
  type: 'ati_songkhipto' | 'songkhipto' | 'rochonamulok';
  questionBn: string;
  questionEn?: string;
  answerBn: string;
  marks: number;
  yearsAppeared: string[]; // e.g., ['BTEB 2023', 'BTEB 2020', 'BTEB 2018']
  isImportant: boolean;
  diagramContent?: string;
  subtopicRef?: string;
}

export interface PracticalCode {
  title: string;
  problemStatementBn: string;
  algorithmStepsBn: string[];
  cCode: string;
  pythonCode: string;
  sampleInput?: string;
  sampleOutput: string;
  explanationBn: string;
}

export interface QuizQuestion {
  id: number;
  questionBn: string;
  options: string[];
  correctAnswerIndex: number;
  explanationBn: string;
  topicRef: string;
}

export interface Chapter {
  id: number;
  code: string;
  titleBn: string;
  titleEn: string;
  learningObjectives: string[];
  subtopics: SubTopic[];
  practicalPrograms: PracticalCode[];
  summaryPoints: string[];
  boardQuestions: BoardQuestion[];
  quizQuestions: QuizQuestion[];
  status: 'complete' | 'syllabus_overview';
}

export interface SyllabusSubjectInfo {
  subjectNameBn: string;
  subjectNameEn: string;
  subjectCode: string;
  probidhan: string;
  semester: string;
  technology: string;
  credits: number;
  marksDistribution: {
    theoryContinuous: number;
    theoryFinal: number;
    practicalContinuous: number;
    practicalFinal: number;
    totalMarks: number;
  };
  theoryChapters: {
    id: number;
    titleBn: string;
    titleEn: string;
    subtopicList: string[];
    isCompletedInBook: boolean;
  }[];
  practicalExperiments: {
    id: number;
    titleBn: string;
    titleEn: string;
    objectives: string[];
  }[];
  recommendedBooks?: {
    title: string;
    authors: string;
    publisher: string;
  }[];
}
