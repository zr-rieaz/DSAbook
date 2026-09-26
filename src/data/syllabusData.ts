import { Chapter, SyllabusSubjectInfo } from '../types/syllabus';
export { CHAPTER_4_DATA } from './chapter4Data';
export { CHAPTER_5_DATA } from './chapter5Data';
export { CHAPTER_6_DATA } from './chapter6Data';
export { CHAPTER_7_DATA } from './chapter7Data';
export { CHAPTER_8_DATA } from './chapter8Data';
export { CHAPTER_9_DATA } from './chapter9Data';

export const BTEB_SUBJECT_INFO: SyllabusSubjectInfo = {
  subjectNameBn: "ডাটা স্ট্রাকচার অ্যান্ড অ্যালগরিদম",
  subjectNameEn: "Data Structure & Algorithm",
  subjectCode: "28542",
  probidhan: "প্রবিধান-২০২২ (Probidhan-2022)",
  semester: "৪র্থ পর্ব (4th Semester)",
  technology: "কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি (Computer Science and Technology - CST)",
  credits: 3,
  marksDistribution: {
    theoryContinuous: 40,
    theoryFinal: 60,
    practicalContinuous: 25,
    practicalFinal: 25,
    totalMarks: 150
  },
  theoryChapters: [
    {
      id: 1,
      titleBn: "ডাটা স্ট্রাকচার (Data Structure)",
      titleEn: "Data structure",
      subtopicList: [
        "1.1 Define data & information.",
        "1.2 Mention standard data types.",
        "1.3 State Data Structure.",
        "1.4 State types of data structure.",
        "1.5 List the different types of data operation.",
        "1.6 State Static and dynamic memory allocation."
      ],
      isCompletedInBook: true
    },
    {
      id: 2,
      titleBn: "অ্যালগরিদম (Algorithm)",
      titleEn: "Algorithm",
      subtopicList: [
        "2.1 State algorithm.",
        "2.2 Mention the characteristics of algorithm.",
        "2.3 State flowchart and pseudo code.",
        "2.4 Explain algorithmic notations.",
        "2.5 Describe the Complexity of algorithm.",
        "2.6 Mention different types of algorithm."
      ],
      isCompletedInBook: true
    },
    {
      id: 3,
      titleBn: "অ্যারে, পয়েন্টার এবং স্ট্রিং (Arrays, Pointers and Strings)",
      titleEn: "Arrays, Pointers and Strings",
      subtopicList: [
        "3.1 Define Array, Pointer and String.",
        "3.2 Mention different dimension of array with diagram.",
        "3.3 Explain the initialization of Pointer.",
        "3.4 Explain String declaration and initialization.",
        "3.5 Describe the operations of String with example.",
        "3.6 Write an algorithm for traversing in array.",
        "3.7 Write an algorithm for inserting and deleting element of array."
      ],
      isCompletedInBook: true
    },
    {
      id: 4,
      titleBn: "স্ট্যাক (Stack)",
      titleEn: "Stack",
      subtopicList: [
        "4.1 Define stack.",
        "4.2 Write the applications of stack in data structure.",
        "4.3 State PUSH and POP.",
        "4.4 Write an algorithm for adding & removing data into & from Stack.",
        "4.5 Explain the concept of Infix, Postfix & Prefix expression.",
        "4.6 Convert the simple infix expression to postfix or prefix expression."
      ],
      isCompletedInBook: true
    },
    {
      id: 5,
      titleBn: "কিউ (Queue)",
      titleEn: "Queue",
      subtopicList: [
        "5.1 Define queue.",
        "5.2 Write the applications of queue in data structure.",
        "5.3 State FIFO & LIFO.",
        "5.4 Distinguish between stack and queue.",
        "5.5 Express the algorithms for data insert, delete into & from queues.",
        "5.6 State the de-queue data structure."
      ],
      isCompletedInBook: true
    },
    {
      id: 6,
      titleBn: "লিংকড লিস্ট (Linked List)",
      titleEn: "Linked list",
      subtopicList: [
        "6.1 Define linked list.",
        "6.2 State memory allocation in linked list.",
        "6.3 Explain the algorithms to traverse a linked list.",
        "6.4 Explain the algorithms for searching a linked list.",
        "6.5 Express the algorithms for data insert, delete into & from linked list."
      ],
      isCompletedInBook: true
    },
    {
      id: 7,
      titleBn: "ট্রি (Tree)",
      titleEn: "Tree",
      subtopicList: [
        "7.1 State the tree.",
        "7.2 State Root, Node, Leaf, Keys, Sub-tree, Level of tree.",
        "7.3 List the types of trees in data structure with diagram.",
        "7.4 Discuss the properties of tree.",
        "7.5 Explain the algorithms for data insertion, deletion into & from a tree.",
        "7.6 Explain the algorithm for traversing a tree."
      ],
      isCompletedInBook: true
    },
    {
      id: 8,
      titleBn: "সার্চিং অপারেশন (Searching Operation)",
      titleEn: "Searching operation",
      subtopicList: [
        "8.1 State different technics of search operation.",
        "8.2 Explain the technic of linear & binary search.",
        "8.3 Explain algorithm for linear search.",
        "8.4 Explain the algorithm for binary search.",
        "8.5 Compare between complexity of linear & binary search algorithms."
      ],
      isCompletedInBook: true
    },
    {
      id: 9,
      titleBn: "সর্টিং অপারেশন (Sorting Operation)",
      titleEn: "Sorting operation",
      subtopicList: [
        "9.1 List the sorting technics.",
        "9.2 Describe the technics of bubble sort, quick sort & merge sort.",
        "9.3 Write the algorithms for bubble sort, quick sort & merge sort.",
        "9.4 Compare among complexity of bubble sort, quick sort & merge sort algorithms."
      ],
      isCompletedInBook: true
    }
  ],
  practicalExperiments: [
    {
      id: 1,
      titleBn: "দুইটি সংখ্যার যোগ, বিয়োগ, গুণ ও ভাগ করার প্রোগ্রাম প্রণয়ন ও বাস্তবায়ন।",
      titleEn: "Addition, subtraction, multiplication & division of two numbers.",
      objectives: ["Algorithm preparation", "Flowchart design", "C/Python Coding", "Compilation & Debugging", "Execution"]
    },
    {
      id: 2,
      titleBn: "অ্যারে ট্রাভার্সিং (Traversing in array) করার প্রোগ্রাম প্রণয়ন ও বাস্তবায়ন।",
      titleEn: "Traversing in array.",
      objectives: ["Array element access", "Loop iteration", "Traversal algorithm implementation"]
    },
    {
      id: 3,
      titleBn: "অ্যারেতে নতুন উপাদান সন্নিবেশ (Insertion) এবং উপাদান মুছে ফেলা (Deletion) প্রোগ্রাম।",
      titleEn: "Inserting and deleting element of array.",
      objectives: ["Position shift logic", "Overflow & Underflow check", "Practical execution"]
    },
    {
      id: 4,
      titleBn: "স্ট্যাকে ডাটা যোগ (PUSH) এবং ডাটা অপসারণ (POP) করার প্রোগ্রাম।",
      titleEn: "Adding & removing data into/from Stack.",
      objectives: ["TOP pointer control", "Stack Overflow & Underflow condition", "LIFO execution"]
    },
    {
      id: 5,
      titleBn: "কিউ (Queue)-তে ডাটা সন্নিবেশ (Enqueue) এবং অপসারণ (Dequeue) প্রোগ্রাম।",
      titleEn: "Data insert & delete into/from queues.",
      objectives: ["FRONT and REAR pointers", "FIFO implementation", "Circular queue handling"]
    },
    {
      id: 6,
      titleBn: "লিংকড লিস্টে ডাটা ইনসার্ট এবং ডিলিট করার প্রোগ্রাম।",
      titleEn: "Data insert & delete into/from linked list.",
      objectives: ["Node structure & Pointer", "Dynamic memory allocation", "Head pointer manipulation"]
    },
    {
      id: 7,
      titleBn: "ট্রি (Tree) স্ট্রাকচারে ডাটা ইনসার্ট এবং ডিলিট করার প্রোগ্রাম।",
      titleEn: "Data insertion & deletion into/from a tree.",
      objectives: ["Binary Search Tree (BST)", "Recursive insert", "In-order traversal"]
    },
    {
      id: 8,
      titleBn: "লিনিয়ার সার্চ (Linear Search) ব্যবহার করে ডাটা খোঁজার প্রোগ্রাম।",
      titleEn: "Linear search for item, location, max/min element.",
      objectives: ["Sequential search", "Time complexity observation", "Index return"]
    },
    {
      id: 9,
      titleBn: "বাইনারি সার্চ (Binary Search) ব্যবহার করে ডাটা খোঁজার প্রোগ্রাম।",
      titleEn: "Binary search in sorted array.",
      objectives: ["Divide and conquer", "Low, High, Mid index computation", "O(log n) performance"]
    },
    {
      id: 10,
      titleBn: "বাবল সর্ট (Bubble Sort) ব্যবহার করে ডাটা সাজানোর প্রোগ্রাম।",
      titleEn: "Arrange Data Ascending & Descending using Bubble sort.",
      objectives: ["Adjacent element comparison", "Swapping logic", "Pass-by-pass visualization"]
    },
    {
      id: 11,
      titleBn: "কুইক সর্ট (Quick Sort) ও মার্জ সর্ট (Merge Sort) ব্যবহার করে ডাটা সাজানোর প্রোগ্রাম।",
      titleEn: "Arrange Data Ascending and Descending using Quick Sort and Merge sort.",
      objectives: ["Pivot element partitioning", "Divide & Merge algorithm", "Recursive execution"]
    }
  ]
};

export const CHAPTER_1_DATA: Chapter = {
  id: 1,
  code: "28542-CH01",
  titleBn: "ডাটা স্ট্রাকচার (Data Structure)",
  titleEn: "Data Structure Fundamentals",
  status: "complete",
  learningObjectives: [
    "উপাত্ত (Data) এবং তথ্য (Information) এর পরিষ্কার ধারণা ও এদের মধ্যকার পার্থক্য নির্ণয় করতে পারা।",
    "সি/সি++ এবং পাইথনের স্ট্যান্ডার্ড ডাটা টাইপসমূহ (Standard Data Types) শনাক্তকরণ ও মেমরি সাইজ জানা।",
    "ডাটা স্ট্রাকচার (Data Structure) এর সংজ্ঞা, প্রয়োজনীয়তা ও কম্পিউটারে এর কার্যকারিতা ব্যাখ্যা করা।",
    "লিনিয়ার (Linear), নন-লিনিয়ার (Non-Linear), প্রিমিটিভ ও নন-প্রিমিটিভ ডাটা স্ট্রাকচারের শ্রেণিবিন্যাস আয়ত্ত করা।",
    "ডাটার মৌলিক ৬টি অপারেশন (Traversing, Searching, Inserting, Deleting, Sorting, Merging) এর মূলনীতি অনুধাবন করা।",
    "স্ট্যাটিক মেমরি বরাদ্দকরণ (Static Memory Allocation) ও ডাইনামিক মেমরি বরাদ্দকরণ (Dynamic Memory Allocation) এর পার্থক্য ও পয়েন্টারের ভূমিকা জানা।"
  ],
  subtopics: [
    {
      id: "1.1",
      titleBn: "ডাটা ও ইনফরমেশনের সংজ্ঞা ও ধারণা",
      titleEn: "Define data & information",
      concept: `কম্পিউটার বিজ্ঞানের মূল ভিত্তি হলো 'ডাটা' (Data) এবং 'ইনফরমেশন' (Information)। কোনো প্রক্রিয়াকরণ ছাড়া যে সমস্ত একক মান, সংখ্যা, বর্ণ বা প্রতীক এলোমেলোভাবে সংগৃহীত হয়, তাকে ডাটা (উপাত্ত) বলা হয়। ডাটা হলো তথ্যের কাঁচামাল (Raw facts)। অপরদিকে, ডাটাকে যখন সুনির্দিষ্ট নিয়মে প্রক্রিয়াকরণ (Processing), বিশ্লেষণ বা সাজানো হয় এবং তা থেকে একটি অর্থপূর্ণ ও ব্যবহারযোগ্য ফলাফল পাওয়া যায়, তখন তাকে ইনফরমেশন (তথ্য) বলা হয়।`,
      realLifeAnalogy: `একটি পলিটেকনিক ইন্সটিটিউটের পরীক্ষার খাতার প্রাপ্ত নম্বর যেমন '৭৫', '৮২', '৬৩' হলো অসংগঠিত 'ডাটা'। কিন্তু যখন এই নম্বরগুলোকে ছাত্রের নাম, রোল নম্বর এবং গ্রেড পয়েন্ট সহ একটি সুন্দর 'মার্কশিট' বা 'ফলাফল বিবরণী' আকারে প্রকাশ করা হয়, তখন সেটি হয়ে যায় 'ইনফরমেশন'। যেমন: "আহমেদ রোল-১০১ পরীক্ষায় প্রথম স্থান অধিকার করেছে"।`,
      technicalDetails: `কম্পিউটার সিস্টেমে ডাটা ইনপুট হিসেবে গ্রহণ করা হয় এবং সেন্ট্রাল প্রসেসিং ইউনিট (CPU) দ্বারা প্রসেসিংয়ের পর তা আউটপুট হিসেবে অর্থপূর্ণ ইনফরমেশনে রূপান্তর হয়।
গাণিতিক সূত্র বা ফ্লো:
Data (Input) ➔ Processing (CPU Algorithm) ➔ Information (Output)`,
      tableData: {
        headers: ["বৈশিষ্ট্য / তুলনার বিষয়", "ডাটা (Data / উপাত্ত)", "ইনফরমেশন (Information / তথ্য)"],
        rows: [
          ["সংজ্ঞা (Definition)", "অসংগঠিত ও অপ্রক্রিয়াজাত কাঁচামাল (Raw facts & figures)।", "প্রক্রিয়াজাত ও সুসংগঠিত অর্থপূর্ণ ফলাফল (Processed data)।"],
          ["অর্থবোধকতা (Meaning)", "ডাটা এককভাবে সুনির্দিষ্ট অর্থ প্রকাশ করতে পারে না।", "ইনফরমেশন সবসময় সুস্পষ্ট এবং কার্যকরী অর্থ বহন করে।"],
          ["নির্ভরশীলতা (Dependency)", "ডাটা কোনো তথ্যের উপর নির্ভরশীল নয়।", "ইনফরমেশন সম্পূর্ণভাবে ডাটার ওপর নির্ভরশীল।"],
          ["প্রক্রিয়াকরণ (Processing)", "ডাটা প্রক্রিয়াকরণের পূর্বে সংগৃহীত হয় (ইনপুট)।", "ডাটা প্রক্রিয়াকরণের পর ইনফরমেশন তৈরি হয় (আউটপুট)।"],
          ["সিদ্ধান্ত গ্রহণ (Decision)", "ডাটা দেখে কোনো চূড়ান্ত সিদ্ধান্ত নেওয়া সম্ভব নয়।", "ইনফরমেশন বিশ্লেষণ করে সঠিক ও দ্রুত সিদ্ধান্ত গ্রহণ করা যায়।"],
          ["উদাহরণ (Example)", "যেমন: 'কম্পিউটার', '৫০', 'ঢাকা', 'A+' ইত্যাদি।", "যেমন: 'ঢাকা পলিটেকনিকের কম্পিউটার বিভাগের ৫০ জন ছাত্র A+ পেয়েছে।'"]
        ]
      },
      keyPoints: [
        "ডাটা ল্যাটিন শব্দ 'Datum' এর বহুবচন, যার অর্থ 'তথ্য বা জানা ঘটনা'।",
        "ইনফরমেশন হলো প্রক্রিয়াজাতকৃত ডাটা (Processed Data)।",
        "কম্পিউটার মূলত Data Processing Machine হিসেবে কাজ করে।"
      ]
    },
    {
      id: "1.2",
      titleBn: "স্ট্যান্ডার্ড ডাটা টাইপসমূহ",
      titleEn: "Mention standard data types",
      concept: `প্রোগ্রামিং ও মেমরিতে কোনো চলক বা ভেরিয়েবল কী ধরনের মান সংরক্ষণ করবে এবং মেমরিতে কতটুকু জায়গা (Byte) দখল করবে, তা নির্ধারণ করার মাধ্যমকে ডাটা টাইপ (Data Type) বলা হয়। ডাটা টাইপ কম্পাইলারকে নির্দেশ দেয় যে ভেরিয়েবলটির উপর কোন ধরনের গাণিতিক বা যৌক্তিক অপারেশন পরিচালনা করা যাবে।`,
      realLifeAnalogy: `আমাদের রান্নাঘরের কথা চিন্তা করুন: পানি বা তেল রাখার জন্য যেমন তরল পাত্র প্রয়োজন, চাল বা ডাল রাখার জন্য আলাদা বয়াম এবং মসলা রাখার জন্য ছোট কৌটা ব্যবহৃত হয়। একইভাবে কম্পিউটারের মেমরিতে পূর্ণসংখ্যা, দশমিক সংখ্যা কিংবা অক্ষরের জন্য আলাদা আলাদা সাইজের ডাটা টাইপ ব্যবহার করা হয়।`,
      technicalDetails: `স্ট্যান্ডার্ড ডাটা টাইপকে প্রধানত দুটি শ্রেণিতে বিভক্ত করা হয়:
১. প্রাইমারি বা প্রিমিটিভ ডাটা টাইপ (Primary / Primitive Data Types):
  - Integer (int): পূর্ণসংখ্যা সংরক্ষণে ব্যবহৃত হয় (যেমন: -25, 0, 100)। মেমরিতে 2 বা 4 বাইট জায়গা নেয়।
  - Character (char): যেকোনো একক বর্ণ বা ক্যারেক্টার সংরক্ষণে ব্যবহৃত হয় (যেমন: 'A', 'z', '@')। সাইজ: 1 বাইট।
  - Floating Point (float): একক সূক্ষ্মতার ভগ্নাংশ বা দশমিক সংখ্যা (যেমন: 3.1416, 99.5)। সাইজ: 4 বাইট।
  - Double Precision (double): দ্বিগুণ সূক্ষ্মতার দশমিক সংখ্যা। সাইজ: 8 বাইট।
  - Void: কোনো রিটার্ন মান না থাকলে এটি ফাংশনে ব্যবহৃত হয় (0 বাইট)।

২. ডেরাইভড বা নন-প্রিমিটিভ ডাটা টাইপ (Derived / Non-primitive Data Types):
  - Array, Pointer, Structure, Union ইত্যাদি।`,
      diagramType: "ascii",
      diagramContent: `                 ┌─────────────────────────────────────────┐
                 │       Data Types in Programming         │
                 └────────────────────┬────────────────────┘
                                      │
          ┌───────────────────────────┴───────────────────────────┐
          │                                                       │
┌─────────────────────┐                                 ┌─────────────────────┐
│  Primitive / Basic  │                                 │ Non-Primitive/User  │
└─────────┬───────────┘                                 └──────────┬──────────┘
          │                                                        │
 ┌────────┼────────┬─────────┐                           ┌─────────┼─────────┐
 │ int    │ float  │ char    │ double                    │ Array   │ Pointer │ Struct
 (4 Bytes)(4 Bytes)(1 Byte)  (8 Bytes)                   │ Class   │ Union   │ Enum`,
      keyPoints: [
        "int মেমরিতে সাধারণত 4 Bytes (32-bit architecture) দখল করে।",
        "char মেমরিতে 1 Byte (8 bits) দখল করে এবং ASCII বা UTF মান ধারণ করে।",
        "float দশমিকের পর ৬-৭ ঘর পর্যন্ত নির্ভুল মান দেয়, double ১৫-১৬ ঘর পর্যন্ত নির্ভুল মান দেয়।"
      ],
      syntaxOrFormulas: [
        {
          label: "C Language Syntax for Standard Types",
          lang: "c",
          codeOrFormula: `int student_roll = 101;       // 4 Bytes: Integer
float semester_gpa = 3.85f;   // 4 Bytes: Single Precision
double exact_pi = 3.14159265; // 8 Bytes: Double Precision
char section_group = 'A';     // 1 Byte: Character`
        },
        {
          label: "Python Dynamic Types",
          lang: "python",
          codeOrFormula: `student_roll = 101       # int type
semester_gpa = 3.85      # float type
section_group = 'A'      # str (string) type`
        }
      ]
    },
    {
      id: "1.3",
      titleBn: "ডাটা স্ট্রাকচারের সংজ্ঞা ও গুরুত্ব",
      titleEn: "State Data Structure",
      concept: `কম্পিউটারের মেমরিতে ডাটাকে এমন একটি সুশৃঙ্খল এবং সংগঠিত উপায়ে বিন্যস্ত ও সংরক্ষণ করা যাতে প্রয়োজনে ডাটাগুলোকে অত্যন্ত দ্রুত, নির্ভুলভাবে এবং কার্যকর মেমরি ব্যবহারের মাধ্যমে প্রক্রিয়াকরণ করা যায়, তাকে ডাটা স্ট্রাকচার (Data Structure) বলা হয়।
সংক্ষেপে: Data Structure = Organized Data + Operations.`,
      realLifeAnalogy: `একটি লাইব্রেরির কথা ভাবুন। হাজার হাজার বই যদি এলোমেলোভাবে মেঝের উপর স্তূপ করে রাখা হয়, তবে একটি নির্দিষ্ট বই খুঁজে বের করতে পুরো দিন লেগে যাবে। কিন্তু যদি বইগুলোকে বিষয়ভিত্তিক (কম্পিউটার, ইলেকট্রিক্যাল, সিভিল), বর্ণানুক্রমিক এবং আলমারিতে তাক নম্বর দিয়ে সাজানো হয়, তবে কয়েক সেকেন্ডেই বইটি খুঁজে পাওয়া যাবে। ডাটা স্ট্রাকচার হলো মেমরির সেই সুসংগঠিত লাইব্রেরি ব্যবস্থা!`,
      technicalDetails: `ডাটা স্ট্রাকচার নির্ধারণ করে:
১. মেমরিতে ডাটা কীভাবে ইন্টার্নালি স্টোর হবে (Contiguous নাকি Discontinuous)।
২. ডাটা উপাদানগুলোর মধ্যকার পারস্পরিক সম্পর্ক (Logical relationship)।
৩. ডাটার উপর কী কী গাণিতিক ও যৌক্তিক অপারেশন (যেমন Insert, Delete, Search) পরিচালিত হবে।

ডাটা স্ট্রাকচারের গুরুত্ব:
- প্রসেসিং স্পিড ও টাইম কমপ্লেক্সিটি হ্রাস (Time Efficiency)।
- মেমরির অপচয় রোধ ও সঠিক স্পেস ম্যানেজমেন্ট (Space Efficiency)।
- জটিল প্রোগ্রামিং অ্যালগরিদম বাস্তবায়নের ভিত্তি।`,
      keyPoints: [
        "ডাটা স্ট্রাকচার ডাটার লজিক্যাল ও ফিজিক্যাল রিপ্রেজেন্টেশন নিয়ন্ত্রণ করে।",
        "অ্যালগরিদমের কার্যক্ষমতা উপযুক্ত ডাটা স্ট্রাকচার নির্বাচনের উপর সম্পূর্ণভাবে নির্ভর করে।",
        "বিখ্যাত গণিতবিদ নিকলাউস ভির্থ এর কালজয়ী সমীকরণ: Algorithms + Data Structures = Programs."
      ]
    },
    {
      id: "1.4",
      titleBn: "ডাটা স্ট্রাকচারের প্রকারভেদ (শ্রেণিবিভাগ)",
      titleEn: "State types of data structure",
      concept: `ডাটা মেমরিতে কীভাবে অবস্থান করে এবং উপাদানগুলোর পারস্পরিক সম্পর্কের উপর ভিত্তি করে ডাটা স্ট্রাকচারকে বিভিন্ন ভাগে বিভক্ত করা যায়। প্রধানত ডাটা স্ট্রাকচারকে দুই ভাগে ভাগ করা হয়:
১. লিনিয়ার ডাটা স্ট্রাকচার (Linear Data Structure): যে ডাটা স্ট্রাকচারে উপাদানগুলো ক্রমানুসারে (Sequential order) একটির পর একটি সাজানো থাকে এবং প্রতিটি উপাদানের একটি পূর্ববর্তী (Predecessor) ও একটি পরবর্তী (Successor) উপাদান থাকে।
২. নন-লিনিয়ার ডাটা স্ট্রাকচার (Non-linear Data Structure): যে ডাটা স্ট্রাকচারে উপাদানগুলো ক্রমানুসারে না থেকে হায়ারার্কিকাল (Hierarchical) বা গ্রাফ নেটওয়ার্ক আকারে পরস্পর সংযুক্ত থাকে।`,
      realLifeAnalogy: `টিকিট কাটার জন্য লাইনে দাঁড়ানো মানুষ হলো লিনিয়ার স্ট্রাকচার (একজনের পেছনে আরেকজন)। অপরদিকে একটি বংশতালিকা বা ফ্যামিলি ট্রি (দাদা ➔ বাবা/চাচা ➔ সন্তান) অথবা ফেসবুক ফ্রেন্ডস নেটওয়ার্ক হলো নন-লিনিয়ার স্ট্রাকচার।`,
      technicalDetails: `ডাটা স্ট্রাকচারের বিস্তারিত শ্রেণিবিন্যাস:

ক. লিনিয়ার ডাটা স্ট্রাকচার (Linear Data Structure):
  ১. Array (অ্যারে): একই ডাটা টাইপের উপাদানের ধারাবাহিক মেমরি ব্লক।
  ২. Stack (স্ট্যাক): LIFO (Last-In-First-Out) নীতিতে পরিচালিত হয়।
  ৩. Queue (কিউ): FIFO (First-In-First-Out) নীতিতে পরিচালিত হয়।
  ৪. Linked List (লিংকড লিস্ট): নোড ও পয়েন্টারের সাহায্যে গঠিত ডাইনামিক চেইন।

খ. নন-লিনিয়ার ডাটা স্ট্রাকচার (Non-Linear Data Structure):
  ১. Tree (ট্রি): রুট ও চাইল্ড নোডের সমন্বয়ে গঠিত স্তরভিত্তিক ট্রি (যেমন: Binary Tree, BST, AVL)।
  ২. Graph (গ্রাফ): ভার্টেক্স (Vertices) এবং এজ (Edges) এর সমন্বয়ে গঠিত জটিল জালিকা।

গ. উপাদান উপাত্তের সাদৃশ্যের ওপর ভিত্তি করে:
  - হোমোজিনিয়াস (Homogeneous): একই ডাটা টাইপের সমন্বয়ে গঠিত (যেমন: Array)।
  - নন-হোমোজিনিয়াস (Non-homogeneous/Heterogeneous): ভিন্ন ভিন্ন ডাটা টাইপের সমন্বয়ে গঠিত (যেমন: Structure, Class)।`,
      diagramType: "ascii",
      diagramContent: `                             ┌──────────────────────────────┐
                             │        Data Structure        │
                             └──────────────┬───────────────┘
                                            │
                    ┌───────────────────────┴───────────────────────┐
                    │                                               │
        ┌───────────────────────┐                       ┌───────────────────────┐
        │ Primitive Structure   │                       │ Non-Primitive Struct  │
        │ (int, float, char...) │                       └───────────┬───────────┘
        └───────────────────────┘                                   │
                                            ┌───────────────────────┴───────────────────────┐
                                            │                                               │
                                ┌───────────────────────┐                       ┌───────────────────────┐
                                │ Linear Data Structure │                       │ Non-Linear Structure  │
                                └───────────┬───────────┘                       └───────────┬───────────┘
                                            │                                               │
                ┌──────────────┬────────────┴────────────┬──────────────┐         ┌─────────┴─────────┐
                │              │                         │              │         │                   │
         ┌─────────────┐ ┌───────────┐             ┌───────────┐ ┌────────────┐┌──────┐            ┌───────┐
         │    Array    │ │   Stack   │             │   Queue   │ │Linked List ││ Tree │            │ Graph │
         │ (Sequential)│ │  (LIFO)   │             │  (FIFO)   │ │  (Pointers)││(Hierarchical)     │(Nodes)│
         └─────────────┘ └───────────┘             └───────────┘ └────────────┘└──────┘            └───────┘`,
      tableData: {
        headers: ["পার্থক্যের বিষয়", "লিনিয়ার ডাটা স্ট্রাকচার (Linear)", "নন-লিনিয়ার ডাটা স্ট্রাকচার (Non-Linear)"],
        rows: [
          ["উপাদানের বিন্যাস", "উপাদানগুলো রৈখিক বা অনুক্রমিক অর্ডারে সাজানো থাকে।", "উপাদানগুলো স্তরীভূত (Hierarchical) বা জালিকা আকারে থাকে।"],
          ["মেমরি ট্রাভার্সাল", "একটি সিঙ্গেল পাসে সকল ডাটা পরিদর্শন করা সম্ভব।", "ট্রাভার্স করতে রিকার্সন বা জটিল অ্যালগরিদম প্রয়োজন।"],
          ["মেমরি ব্যবহার", "তুলনামূলক সহজ এবং কখনো কখনো মেমরির অপচয় হতে পারে।", "দক্ষ মেমরি ব্যবহার হয়, কোনো অপ্রয়োজনীয় স্পেস থাকে না।"],
          ["বাস্তবায়নের জটিলতা", "সহজ ও সরল (Easy to implement)।", "তুলনামূলক জটিল (Complex to implement)।"],
          ["উদাহরণ", "Array, Stack, Queue, Linked List।", "Tree (BST, AVL, Heap) এবং Graph।"]
        ]
      },
      keyPoints: [
        "লিনিয়ার স্ট্রাকচারে ডাটার মধ্যে 1-to-1 রিলেশনশিপ থাকে।",
        "নন-লিনিয়ার স্ট্রাকচারে ডাটার মধ্যে 1-to-Many অথবা Many-to-Many সম্পর্ক থাকে।",
        "BTEB বোর্ড পরীক্ষায় লিনিয়ার বনাম নন-লিনিয়ারের পার্থক্য প্রায় প্রতি বছর আসে।"
      ]
    },
    {
      id: "1.5",
      titleBn: "ডাটা অপারেশনের প্রকারভেদ",
      titleEn: "List the different types of data operation",
      concept: `ডাটা স্ট্রাকচারে সংরক্ষিত উপাত্তগুলোর ওপর বিভিন্ন ধরনের প্রয়োজনীয় ক্রিয়া বা প্রক্রিয়া সম্পাদন করা হয়। এই প্রক্রিয়াগুলোকে ডাটা অপারেশন (Data Operations) বলা হয়। ডাটা স্ট্রাকচারের মূল উদ্দেশ্যই হলো এই অপারেশনগুলোকে সর্বনিম্ন সময়ে (Time Complexity) এবং সর্বনিম্ন মেমরিতে (Space Complexity) সম্পন্ন করা।`,
      realLifeAnalogy: `একটি রেজিস্টার খাতার কথা বিবেচনা করুন:
১. খাতার সকল ছাত্রের নাম একে একে পড়া = Traversing
২. নির্দিষ্ট কোনো ছাত্রের রোল খোঁজা = Searching
৩. নতুন ভর্তি হওয়া ছাত্রের নাম খাতায় লেখা = Inserting
৪. কলেজ ছেড়ে যাওয়া ছাত্রের নাম কেটে ফেলা = Deleting
৫. রোল নম্বর অনুযায়ী সবাইকে ১ থেকে সিরিয়াল করা = Sorting
৬. দুটি আলাদা ক্লাসের খাতা একত্র করে একটি খাতা বানানো = Merging`,
      technicalDetails: `ডাটা স্ট্রাকচারের প্রধান ৬টি মৌলিক অপারেশন:

১. ট্রাভার্সিং (Traversing):
  - ডাটা স্ট্রাকচারের প্রতিটি উপাদানকে কমপক্ষে একবার করে পরিদর্শন বা প্রসেস (যেমন: প্রিন্ট করা বা ক্যালকুলেশন করা) করার প্রক্রিয়াকে ট্রাভার্সিং বলে।
  - টাইম কমপ্লেক্সিটি: $O(n)$

২. সার্চিং (Searching):
  - ডাটা স্ট্রাকচারের ভেতর একটি নির্দিষ্ট মান (Target Element বা Key) বিদ্যমান আছে কিনা তা খুঁজে বের করা এবং থাকলে তার মেমরি লোকেশন/ইনডেক্স বের করা।
  - প্রধান প্রকারভেদ: Linear Search ($O(n)$) এবং Binary Search ($O(\\log n)$)।

৩. ইনসার্টিং (Inserting):
  - বিদ্যমান ডাটা স্ট্রাকচারের যেকোনো স্থানে (শুরুতে, মাঝে বা শেষে) একটি নতুন উপাদান যুক্ত করার প্রক্রিয়াকে ইনসার্শন বলে।

৪. ডিলিটিং (Deleting):
  - ডাটা স্ট্রাকচার থেকে কোনো নির্দিষ্ট উপাদান বা নির্দিষ্ট অবস্থানের উপাদানকে অপসারণ বা মুছে ফেলার প্রক্রিয়া।

৫. সর্টিং (Sorting):
  - ডাটা উপাদানগুলোকে একটি সুনির্দিষ্ট ক্রমে (ছোট থেকে বড় - Ascending অথবা বড় থেকে ছোট - Descending) সাজানোর প্রক্রিয়াকে সর্টিং বলে।
  - উদাহরণ: Bubble Sort, Quick Sort, Merge Sort, Insertion Sort।

৬. মার্জিং (Merging):
  - একই ধরনের দুটি ভিন্ন ডাটা স্ট্রাকচারের উপাদানগুলোকে একত্রিত করে একটি নতুন একক ডাটা স্ট্রাকচারে রূপান্তর করার প্রক্রিয়াকে মার্জিং বলে।`,
      diagramType: "ascii",
      diagramContent: ` ┌─────────────────────────────────────────────────────────────────────────┐
 │                      Core Data Operations (৬টি অপারেশন)                │
 ├──────────────┬──────────────────────────────────────────────────────────┤
 │ Traversing   │ Visit every element exactly once: A[0] ➔ A[1] ➔ A[2]...  │
 │ Searching    │ Find location of ITEM in structure (Linear / Binary)     │
 │ Inserting    │ Add a new element at Index K (Requires shifting)         │
 │ Deleting     │ Remove element from Index K (Requires left shifting)     │
 │ Sorting      │ Arrange elements in order: [40, 10, 30] ➔ [10, 30, 40]   │
 │ Merging      │ Combine Array A + Array B into Array C                   │
 └──────────────┴──────────────────────────────────────────────────────────┘`,
      keyPoints: [
        "ডাটা স্ট্রাকচারের কার্যক্ষমতা নির্ধারিত হয় তার অপারেশনের অ্যালগরিদমিক গতি দ্বারা।",
        "ইনসার্ট ও ডিলিট অপারেশনে স্ট্যাটিক অ্যারেতে এলিমেন্ট শিফট (Shift) করতে হয়।",
        "লিংকড লিস্টে ইনসার্ট ও ডিলিট অপারেশনে শুধুমাত্র পয়েন্টার পরিবর্তন করতে হয়।"
      ]
    },
    {
      id: "1.6",
      titleBn: "স্ট্যাটিক এবং ডাইনামিক মেমরি বরাদ্দকরণ",
      titleEn: "State Static and dynamic memory allocation",
      concept: `একটি কম্পিউটার প্রোগ্রাম চলাকালে ভেরিয়েবল ও ডাটা স্ট্রাকচারের জন্য কম্পিউটারের প্রধান মেমরিতে (RAM) জায়গা বরাদ্দ করাকে মেমরি অ্যালোকেশন (Memory Allocation) বলে। মেমরি বরাদ্দের সময়ের উপর ভিত্তি করে একে দুটি প্রধান ভাগে ভাগ করা হয়:
১. স্ট্যাটিক মেমরি অ্যালোকেশন (Static / Compile-Time Memory Allocation)
২. ডাইনামিক মেমরি অ্যালোকেশন (Dynamic / Run-Time Memory Allocation)`,
      realLifeAnalogy: `স্ট্যাটিক মেমরি হলো একটি নির্দিষ্ট সিটের বাসের অগ্রিম টিকিট কাটার মতো—যাত্রী আসুক বা না আসুক সিট বুক থাকবে এবং অতিরিক্ত যাত্রী এলে বসানো যাবে না। অপরদিকে ডাইনামিক মেমরি হলো একটি কনফারেন্স হলের মতো—যতজন অতিথি আসবে ঠিক ততটি চেয়ার হলের ফাঁকা জায়গা থেকে এনে বসানো হবে এবং সভা শেষে চেয়ার সরিয়ে মেমরি ফ্রি করে দেওয়া যাবে।`,
      technicalDetails: `ক. স্ট্যাটিক মেমরি অ্যালোকেশন (Static Allocation):
- কম্পাইল টাইমে (Compile Time) মেমরি বরাদ্দ হয়।
- প্রোগ্রাম এক্সিকিউশনের সময় মেমরির আকার পরিবর্তন (Resize) করা যায় না।
- এটি মেমরির স্ট্যাক সেগমেন্টে (Stack Segment) কার্যকর হয়।
- উদাহরণ: সাধারণ চলক এবং ফিক্সড সাইজ অ্যারে যেমন: \`int arr[100];\`

খ. ডাইনামিক মেমরি অ্যালোকেশন (Dynamic Allocation):
- প্রোগ্রাম চলাকালীন সময়ে অর্থাৎ রান টাইমে (Run Time) মেমরি বরাদ্দ ও মুক্ত করা হয়।
- এটি মেমরির হিপ সেগমেন্টে (Heap Segment) কার্যকর হয়।
- পয়েন্টার (Pointer) এর মাধ্যমে এই মেমরি নিয়ন্ত্রণ করা হয়।
- সি ল্যাঙ্গুয়েজের ৪টি লাইব্রেরি ফাংশন (\`<stdlib.h>\`):
  ১. \`malloc()\`: নির্দিষ্ট বাইট মেমরি বরাদ্দ করে এবং প্রাথমিক মান গার্বেজ (Garbage) থাকে।
  ২. \`calloc()\`: একাধিক ব্লকে মেমরি বরাদ্দ করে এবং প্রতিটি ব্লকের মান 0 দ্বারা ইনিশিয়ালাইজ করে।
  ৩. \`realloc()\`: পূর্বে বরাদ্দকৃত মেমরির সাইজ বৃদ্ধি বা হ্রাস (Reallocate) করে।
  ৪. \`free()\`: বরাদ্দকৃত মেমরি মুছে ফেলে বা সিস্টেমকে ফেরত দেয় যাতে মেমরি লিক (Memory Leak) না ঘটে।`,
      tableData: {
        headers: ["তুলনার বিষয়", "স্ট্যাটিক মেমরি বরাদ্দকরণ (Static)", "ডাইনামিক মেমরি বরাদ্দকরণ (Dynamic)"],
        rows: [
          ["বরাদ্দের সময়", "কম্পাইল টাইমে (Compile Time) মেমরি বরাদ্দ হয়।", "রান টাইমে (Run Time) প্রোগ্রাম চলাকালে মেমরি বরাদ্দ হয়।"],
          ["মেমরি লোকেশন", "মেমরির স্ট্যাক (Stack) সেগমেন্টে সম্পন্ন হয়।", "মেমরির হিপ (Heap) সেগমেন্টে সম্পন্ন হয়।"],
          ["সাইজ পরিবর্তন", "একবার বরাদ্দ হলে সাইজ পরিবর্তন বা রিসাইজ করা যায় না।", "\`realloc()\` দিয়ে মেমরির আকার বাড়ানো বা কমানো যায়।"],
          ["মেমরির কার্যক্ষমতা", "কম ব্যবহৃত হলে মেমরি অপচয় হয়, বেশি ডাটা হলে ওভারফ্লো হয়।", "প্রয়োজন অনুযায়ী মেমরি নেওয়া যায়, ফলে অপচয় শূন্য।"],
          ["নিয়ন্ত্রণ পদ্ধতি", "কম্পাইলার স্বয়ংক্রিয়ভাবে মেমরি বরাদ্দ ও মুক্ত করে।", "প্রোগ্রামারকে পয়েন্টার ও \`free()\` দিয়ে ম্যানুয়ালি পরিচালনা করতে হয়।"],
          ["সি ফাংশনসমূহ", "সরাসরি ডিক্লারেশন যেমন: \`int a[50];\`", "\`malloc()\`, \`calloc()\`, \`realloc()\`, \`free()\`"]
        ]
      },
      diagramType: "ascii",
      diagramContent: `             ┌──────────────────────────────────────────────┐
             │            RAM Memory Architecture           │
             ├──────────────────────────────────────────────┤
             │ Stack Memory (Static Allocation)             │
             │   ├── Local Variables (int x = 10)           │
             │   ├── Fixed Arrays (int arr[5])              │
             │   └── Fast Access, Fixed Size at Compile Time│
             ├──────────────────────────────────────────────┤
             │                    ▲                         │
             │                    │ Grows dynamically       │
             │ Heap Memory (Dynamic Allocation)             │
             │   ├── malloc(sizeof(int) * N)                │
             │   ├── calloc(N, sizeof(int))                 │
             │   ├── Managed via Pointers (ptr)             │
             │   └── Requires free(ptr) to prevent Leak     │
             └──────────────────────────────────────────────┘`,
      syntaxOrFormulas: [
        {
          label: "C Language Dynamic Memory Syntax",
          lang: "c",
          codeOrFormula: `// 1. Allocate memory for 5 integers using malloc
int *ptr = (int*) malloc(5 * sizeof(int));

// 2. Allocate memory for 5 integers initialized to 0 using calloc
int *arr = (int*) calloc(5, sizeof(int));

// 3. Resize memory to 10 integers
ptr = (int*) realloc(ptr, 10 * sizeof(int));

// 4. Free the allocated memory to avoid memory leaks
free(ptr);
free(arr);`
        }
      ],
      keyPoints: [
        "ডাইনামিক মেমরি অ্যালোকেশন লিংকড লিস্ট, ট্রি এবং গ্রাফ বাস্তবায়নের জন্য অপরিহার্য।",
        "যদি ডাইনামিক মেমরি ব্যবহারের পর \`free()\` না করা হয়, তবে সিস্টেমে Memory Leak ঘটে।"
      ]
    }
  ],
  practicalPrograms: [
    {
      title: "ব্যবহারিক ১: লিনিয়ার অ্যারেতে ট্রাভার্সিং, ইনসার্টিং এবং ডিলিটিং অপারেশন",
      problemStatementBn: "একটি পূর্ণসংখ্যার ১-মাত্রিক অ্যারেতে ডাটা ইনপুট নিয়ে সকল উপাদান ট্রাভার্স (প্রিন্ট) করা, একটি নির্দিষ্ট পজিশনে নতুন উপাদান ইনসার্ট করা এবং নির্দিষ্ট পজিশন থেকে উপাদান ডিলিট করার সম্পূর্ণ সি এবং পাইথন প্রোগ্রাম তৈরি ও রান করা।",
      algorithmStepsBn: [
        "ধাপ ১: শুরু করি (Start)।",
        "ধাপ ২: অ্যারের সাইজ N এবং উপাদানসমূহ ইনপুট হিসেবে গ্রহণ করি।",
        "ধাপ ৩: [Traversing] লুপ চালিয়ে $i = 0$ থেকে $N-1$ পর্যন্ত প্রতিটি উপাদান $A[i]$ প্রিন্ট করি।",
        "ধাপ ৪: [Inserting] নতুন উপাদান ITEM এবং নির্দিষ্ট ইনসার্ট পজিশন POS গ্রহণ করি।",
        "ধাপ ৫: ডানদিকে উপাদানগুলো শিফট করার জন্য লুপ চালাই: $j = N-1$ থেকে $POS$ পর্যন্ত $A[j+1] = A[j]$।",
        "ধাপ ৬: $A[POS] = ITEM$ বসাই এবং মোট সাইজ $N = N + 1$ বৃদ্ধি করি।",
        "ধাপ ৭: [Deleting] যে পজিশন থেকে ডিলিট করতে হবে (DEL_POS) তা গ্রহণ করি।",
        "ধাপ ৮: বামদিকে উপাদানগুলো শিফট করি: $k = DEL_POS$ থেকে $N-2$ পর্যন্ত $A[k] = A[k+1]$।",
        "ধাপ ৯: মোট সাইজ $N = N - 1$ হ্রাস করি।",
        "ধাপ ১০: পরিবর্তিত অ্যারে আউটপুট প্রদর্শন করি এবং শেষ করি (Stop)।"
      ],
      cCode: `#include <stdio.h>

int main() {
    int arr[100] = {10, 20, 30, 40, 50};
    int n = 5;
    int i, pos, item, del_pos;

    // Traversing
    printf("Array elements:\n");
    for(i = 0; i < n; i++) {
        printf("Index [%d] = %d\n", i, arr[i]);
    }

    // Inserting 25 at index 2
    pos = 2;
    item = 25;
    for(i = n - 1; i >= pos; i--) {
        arr[i + 1] = arr[i];
    }
    arr[pos] = item;
    n++;

    printf("\nAfter inserting %d at index %d:\n", item, pos);
    for(i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    // Deleting element at index 3
    del_pos = 3;
    for(i = del_pos; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    n--;

    printf("\nAfter deleting element at index %d:\n", del_pos);
    for(i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}`,
      pythonCode: `arr = [10, 20, 30, 40, 50]

# Traversing
print("Array elements:")
for idx, val in enumerate(arr):
    print(f"Index [{idx}] = {val}")

# Inserting 25 at index 2
arr.insert(2, 25)
print(f"\nAfter inserting 25 at index 2:\n{arr}")

# Deleting element at index 3
del arr[3]
print(f"\nAfter deleting element at index 3:\n{arr}")`,
      sampleOutput: `Array elements:
Index [0] = 10
Index [1] = 20
Index [2] = 30
Index [3] = 40
Index [4] = 50

After inserting 25 at index 2:
10 20 25 30 40 50 

After deleting element at index 3:
10 20 25 40 50 `,
      explanationBn: "এই প্রোগ্রামে অ্যারের ৬টি মৌলিক অপারেশনের মধ্যে সবচেয়ে গুরুত্বপূর্ণ ৩টি অপারেশন (Traversing, Insertion, Deletion) প্রদর্শন করা হয়েছে। ইনসার্ট করার সময় উপাদানগুলোকে ডানদিকে ১ ঘর সরাতে হয় এবং ডিলিট করার সময় বামদিকে ১ ঘর সরাতে হয়।"
    }
  ],
  summaryPoints: [
    "ডাটা (Data) হলো প্রক্রিয়াবিহীন অপ্রক্রিয়াজাত কাঁচামাল; ইনফরমেশন (Information) হলো অর্থপূর্ণ ও সিদ্ধান্ত গ্রহণের উপযোগী ফলাফল।",
    "সি ল্যাঙ্গুয়েজের মৌলিক ডাটা টাইপ হলো int (4B), float (4B), double (8B), char (1B)।",
    "ডাটা স্ট্রাকচার হলো মেমরিতে ডাটা সুসংগঠিত রাখার একটি কাঠামো যা ডাটার কার্যক্ষমতা বহুগুণ বৃদ্ধি করে।",
    "লিনিয়ার ডাটা স্ট্রাকচারে (Array, Stack, Queue, Linked List) ডাটা ক্রমানুসারে থাকে; নন-লিনিয়ার ডাটা স্ট্রাকচারে (Tree, Graph) ডাটা শাখা-প্রশাখা আকারে থাকে।",
    "ডাটা স্ট্রাকচারের মৌলিক ৬টি অপারেশন হলো: Traversing, Searching, Inserting, Deleting, Sorting এবং Merging।",
    "স্ট্যাটিক মেমরি কম্পাইল টাইমে স্ট্যাকে বরাদ্দ হয় (আকার অপরিবর্তনীয়); ডাইনামিক মেমরি রান টাইমে হিপে বরাদ্দ হয় (আকার পরিবর্তনীয় via malloc/calloc/free)।"
  ],
  boardQuestions: [
    {
      id: "Q1-01",
      type: "ati_songkhipto",
      questionBn: "ডাটা ও ইনফরমেশন কাকে বলে?",
      answerBn: "ডাটা (Data): কোনো প্রক্রিয়াকরণ ছাড়া সংগৃহীত যে কোনো কাঁচামাল বা অসংগঠিত উপাত্তকে ডাটা বলে। যেমন: 'করিম', '৮৫', 'ঢাকা'।\nইনফরমেশন (Information): প্রক্রিয়াজাতকৃত অর্থপূর্ণ ও সুসংগঠিত ডাটাকে ইনফরমেশন বলে। যেমন: 'করিম ডাটা স্ট্রাকচার পরীক্ষায় ৮৫ নম্বর পেয়েছে' একটি পূর্ণাঙ্গ তথ্য।",
      marks: 1,
      yearsAppeared: ["BTEB 2018", "BTEB 2021", "BTEB 2023"],
      isImportant: true,
      subtopicRef: "1.1"
    },
    {
      id: "Q1-02",
      type: "ati_songkhipto",
      questionBn: "ডাটা স্ট্রাকচার (Data Structure) বলতে কী বোঝায়?",
      answerBn: "কম্পিউটারের মেমরিতে ডাটাকে অত্যন্ত কার্যকর ও সুশৃঙ্খলভাবে সংরক্ষণ, সংগঠন ও পরিচালনার যৌক্তিক ও গাণিতিক কাঠামোকে ডাটা স্ট্রাকচার বলা হয়।",
      marks: 1,
      yearsAppeared: ["BTEB 2017", "BTEB 2019", "BTEB 2022", "BTEB 2024"],
      isImportant: true,
      subtopicRef: "1.3"
    },
    {
      id: "Q1-03",
      type: "ati_songkhipto",
      questionBn: "লিনিয়ার ও নন-লিনিয়ার ডাটা স্ট্রাকচারের দুটি করে উদাহরণ দাও।",
      answerBn: "লিনিয়ার ডাটা স্ট্রাকচার: অ্যারে (Array), স্ট্যাক (Stack), কিউ (Queue)।\nনন-লিনিয়ার ডাটা স্ট্রাকচার: ট্রি (Tree), গ্রাফ (Graph)।",
      marks: 1,
      yearsAppeared: ["BTEB 2018", "BTEB 2020", "BTEB 2023"],
      isImportant: true,
      subtopicRef: "1.4"
    },
    {
      id: "Q1-04",
      type: "ati_songkhipto",
      questionBn: "ডাটা ট্রাভার্সিং (Traversing) কী?",
      answerBn: "ডাটা স্ট্রাকচারের প্রতিটি উপাদান বা নোডকে কমপক্ষে একবার করে পরিদর্শন (Visit) বা প্রক্রিয়াকরণ করার অপারেশনকে ট্রাভার্সিং বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2019", "BTEB 2022"],
      isImportant: false,
      subtopicRef: "1.5"
    },
    {
      id: "Q1-05",
      type: "ati_songkhipto",
      questionBn: "সি ভাষায় ডাইনামিক মেমরি বরাদ্দকরণে ব্যবহৃত চারটি লাইব্রেরি ফাংশনের নাম লেখ।",
      answerBn: "১. malloc() - Memory Allocation\n২. calloc() - Contiguous Allocation\n৩. realloc() - Re-allocation\n৪. free() - Memory Release",
      marks: 1,
      yearsAppeared: ["BTEB 2016", "BTEB 2020", "BTEB 2022", "BTEB 2024"],
      isImportant: true,
      subtopicRef: "1.6"
    },
    {
      id: "Q1-06",
      type: "ati_songkhipto",
      questionBn: "মেমরি লিক (Memory Leak) কী?",
      answerBn: "ডাইনামিক মেমরি বরাদ্দের পর কাজ শেষে যদি free() ফাংশন দিয়ে মেমরি অবমুক্ত না করা হয়, তবে ওই মেমরি ব্লকটি অব্যবহৃত অবস্থায় আটকে থাকে—একে Memory Leak বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2021", "BTEB 2023"],
      isImportant: true,
      subtopicRef: "1.6"
    },
    {
      id: "Q1-07",
      type: "songkhipto",
      questionBn: "ডাটা ও ইনফরমেশনের মধ্যে ৪টি প্রধান পার্থক্য লিখ।",
      answerBn: "১. ডাটা হলো অসংগঠিত কাঁচামাল (Raw facts); অন্যদিকে ইনফরমেশন হলো প্রক্রিয়াজাত ও অর্থপূর্ণ ফলাফল।\n২. ডাটা এককভাবে কোনো নির্দিষ্ট অর্থ প্রকাশ করতে পারে না; কিন্তু ইনফরমেশন সুস্পষ্ট অর্থ প্রকাশ করে।\n৩. ডাটা তথ্যের উপর নির্ভরশীল নয়; কিন্তু ইনফরমেশন সম্পূর্ণভাবে ডাটার ওপর নির্ভরশীল।\n৪. ডাটা ইনপুট হিসেবে ব্যবহৃত হয়; ইনফরমেশন আউটপুট হিসেবে পাওয়া যায়।",
      marks: 2,
      yearsAppeared: ["BTEB 2019", "BTEB 2021", "BTEB 2023"],
      isImportant: true,
      subtopicRef: "1.1"
    },
    {
      id: "Q1-08",
      type: "songkhipto",
      questionBn: "লিনিয়ার এবং নন-লিনিয়ার ডাটা স্ট্রাকচারের মধ্যে পার্থক্য লিখ।",
      answerBn: "১. লিনিয়ার স্ট্রাকচারে উপাদানগুলো ক্রমানুসারে (Sequential) সাজানো থাকে; নন-লিনিয়ারে স্তরভিত্তিক বা জালিকা আকারে সাজানো থাকে।\n২. লিনিয়ারের উপাদানগুলো সিঙ্গেল পাসে ট্রাভার্স করা যায়; নন-লিনিয়ার ট্রাভার্স করতে রিকার্সন বা একাধিক পাসের প্রয়োজন হয়।\n৩. লিনিয়ার স্ট্রাকচারে প্রতিটি নোডের একটি প্রিডিসিসর ও একটি সাকসেসর থাকে; নন-লিনিয়ারে একাধিক চাইল্ড বা এডজাসেন্ট নোড থাকতে পারে।\n৪. লিনিয়ারের উদাহরণ: Array, Stack, Queue; নন-লিনিয়ারের উদাহরণ: Tree, Graph।",
      marks: 3,
      yearsAppeared: ["BTEB 2018", "BTEB 2020", "BTEB 2022", "BTEB 2024"],
      isImportant: true,
      subtopicRef: "1.4"
    },
    {
      id: "Q1-09",
      type: "songkhipto",
      questionBn: "স্ট্যাটিক ও ডাইনামিক মেমরি বরাদ্দের মধ্যে পার্থক্য ব্যাখ্যা কর।",
      answerBn: "১. স্ট্যাটিক মেমরি কম্পাইল টাইমে বরাদ্দ হয়; ডাইনামিক মেমরি রান টাইমে বরাদ্দ হয়।\n২. স্ট্যাটিক মেমরি স্ট্যাক (Stack) সেগমেন্টে এবং ডাইনামিক মেমরি হিপ (Heap) সেগমেন্টে অবস্থান করে।\n৩. স্ট্যাটিক মেমরির সাইজ ফিক্সড (পরিবর্তন করা যায় না); ডাইনামিক মেমরির সাইজ প্রয়োজনমতো realloc() দিয়ে কমানো বা বাড়ানো যায়।\n৪. স্ট্যাটিক মেমরিতে মেমরির অপচয় হওয়ার ঝুঁকি থাকে; ডাইনামিক মেমরিতে মেমরির সর্বোচ্চ সঠিক ব্যবহার নিশ্চিত হয়।",
      marks: 3,
      yearsAppeared: ["BTEB 2017", "BTEB 2019", "BTEB 2023"],
      isImportant: true,
      subtopicRef: "1.6"
    },
    {
      id: "Q1-10",
      type: "songkhipto",
      questionBn: "ডাটা স্ট্রাকচারের মৌলিক ৬টি অপারেশন সংক্ষেপে বর্ণনা কর।",
      answerBn: "১. Traversing: প্রতিটি উপাদানকে অন্তত একবার পরিদর্শন করা।\n২. Searching: নির্দিষ্ট মানের ডাটা ও তার ইনডেক্স খুঁজে বের করা।\n৩. Inserting: স্ট্রাকচারে নির্দিষ্ট স্থানে নতুন ডাটা যুক্ত করা।\n৪. Deleting: নির্দিষ্ট স্থান বা মানের ডাটা অপসারণ করা।\n৫. Sorting: ডাটাগুলোকে ছোট থেকে বড় বা বড় থেকে ছোট ক্রমে সাজানো।\n৬. Merging: দুটি পৃথক স্ট্রাকচারের ডাটা একত্রিত করে একটি নতুন স্ট্রাকচার তৈরি করা।",
      marks: 3,
      yearsAppeared: ["BTEB 2018", "BTEB 2021", "BTEB 2024"],
      isImportant: true,
      subtopicRef: "1.5"
    },
    {
      id: "Q1-11",
      type: "rochonamulok",
      questionBn: "চিত্রসহ ডাটা স্ট্রাকচারের বিশদ শ্রেণিবিন্যাস (Classification) আলোচনা কর।",
      answerBn: `ডাটা স্ট্রাকচারকে প্রধানত দুটি শ্রেণিতে ভাগ করা যায়:
১. প্রিমিটিভ ডাটা স্ট্রাকচার (Primitive Data Structure):
সরাসরি মেশিন ইন্সট্রাকশন দ্বারা পরিচালিত সাধারণ মান। যেমন: Integer, Float, Character, Pointer, Boolean ইত্যাদি।

২. নন-প্রিমিটিভ ডাটা স্ট্রাকচার (Non-primitive Data Structure):
একাধিক প্রিমিটিভ ডাটার সমন্বয়ে গঠিত জটিল ডাটা স্ট্রাকচার। একে আবার দুই ভাগে ভাগ করা হয়:

ক) লিনিয়ার ডাটা স্ট্রাকচার (Linear Data Structure):
  - অ্যারে (Array): সমজাতীয় উপাত্তের ধারাবাহিক মেমরি ব্লক।
  - স্ট্যাক (Stack): LIFO (Last In First Out) নীতিতে পরিচালিত হয়।
  - কিউ (Queue): FIFO (First In First Out) নীতিতে পরিচালিত হয়।
  - লিংকড লিস্ট (Linked List): ডাইনামিক নোড ও পয়েন্টার ভিত্তিক চেইন।

খ) নন-লিনিয়ার ডাটা স্ট্রাকচার (Non-Linear Data Structure):
  - ট্রি (Tree): হায়ারার্কিকাল ডাটা মডেল যেখানে একটি রুট (Root) এবং একাধিক চাইল্ড (Child) নোড থাকে।
  - গ্রাফ (Graph): ভার্টেক্স (Vertices) এবং এজ (Edges) এর সমন্বয়ে গঠিত নন-লিনিয়ার নেটওয়ার্ক মডেল।

এছাড়াও মেমরি উপাদানের ধরনের উপর ভিত্তি করে Homogeneous (একই ডাটা টাইপ - Array) এবং Heterogeneous (ভিন্ন ডাটা টাইপ - Structure, Record) শ্রেণিতে ভাগ করা হয়।`,
      marks: 5,
      yearsAppeared: ["BTEB 2017", "BTEB 2019", "BTEB 2021", "BTEB 2023", "BTEB 2024"],
      isImportant: true,
      subtopicRef: "1.4",
      diagramContent: `                        ┌──────────────────────────────┐
                        │        Data Structure        │
                        └──────────────┬───────────────┘
                                       │
               ┌───────────────────────┴───────────────────────┐
               │                                               │
   ┌───────────────────────┐                       ┌───────────────────────┐
   │ Primitive Data Types  │                       │ Non-Primitive Types   │
   │ (int, float, char...) │                       └───────────┬───────────┘
   └───────────────────────┘                                   │
                                       ┌───────────────────────┴───────────────────────┐
                                       │                                               │
                           ┌───────────────────────┐                       ┌───────────────────────┐
                           │ Linear Data Structure │                       │ Non-Linear Structure  │
                           └───────────┬───────────┘                       └───────────┬───────────┘
                                       │                                               │
                   ┌──────────┬────────┴────────┬──────────┐                     ┌─────┴─────┐
                   │          │                 │          │                     │           │
                 Array      Stack             Queue   Linked List               Tree       Graph`
    },
    {
      id: "Q1-12",
      type: "rochonamulok",
      questionBn: "একটি লিনিয়ার অ্যারেতে নির্দিষ্ট স্থানে নতুন ডাটা ইনসার্ট এবং নির্দিষ্ট স্থান থেকে ডাটা ডিলিট করার অ্যালগরিদম ও কার্যপদ্ধতি ব্যাখ্যা কর।",
      answerBn: `ক. অ্যারেতে নতুন ডাটা ইনসার্ট করার অ্যালগরিদম (INSERT(A, N, K, ITEM)):
[এখানে A হলো একটি লিনিয়ার অ্যারে, N হলো মোট উপাদানের সংখ্যা, K হলো ইনসার্ট করার পজিশন এবং ITEM হলো নতুন উপাদান]
ধাপ ১: [লুপ শুরু] j = N - 1 থেকে K পর্যন্ত ধাপ ২ পুনরাবৃত্তি করি।
ধাপ ২: [ডানদিকে শিফট] A[j + 1] = A[j] নির্ধারণ করি।
       [লুপ সমাপ্ত]
ধাপ ৩: [নতুন উপাদান স্থাপন] A[K] = ITEM নির্ধারণ করি।
ধাপ ৪: [মোট সাইজ বৃদ্ধি] N = N + 1 করি।
ধাপ ৫: সম্পন্ন করে বের হই (Exit)।

খ. অ্যারে থেকে নির্দিষ্ট স্থানের ডাটা ডিলিট করার অ্যালগরিদম (DELETE(A, N, K)):
[এখানে K হলো ডিলিট করার পজিশন]
ধাপ ১: [মুছে ফেলা উপাদানের ব্যাকআপ] ITEM = A[K]।
ধাপ ২: [লুপ শুরু] j = K থেকে N - 2 পর্যন্ত ধাপ ৩ পুনরাবৃত্তি করি।
ধাপ ৩: [বামদিকে শিফট] A[j] = A[j + 1] নির্ধারণ করি।
       [লুপ সমাপ্ত]
ধাপ ৪: [মোট সাইজ হ্রাস] N = N - 1 করি।
ধাপ ৫: সম্পন্ন করে বের হই (Exit)।`,
      marks: 5,
      yearsAppeared: ["BTEB 2018", "BTEB 2020", "BTEB 2022", "BTEB 2024"],
      isImportant: true,
      subtopicRef: "1.5"
    }
  ],
  quizQuestions: [
    {
      id: 1,
      questionBn: "কোনটি লিনিয়ার (Linear) ডাটা স্ট্রাকচার নয়?",
      options: ["Stack", "Queue", "Tree", "Array"],
      correctAnswerIndex: 2,
      explanationBn: "Tree হলো একটি হায়ারার্কিকাল বা নন-লিনিয়ার ডাটা স্ট্রাকচার। Stack, Queue এবং Array হলো লিনিয়ার স্ট্রাকচার।",
      topicRef: "1.4"
    },
    {
      id: 2,
      questionBn: "প্রক্রিয়াজাত ও সুসংগঠিত ডাটাকে কী বলা হয়?",
      options: ["কাঁচামাল", "ইনফরমেশন (Information)", "ভেরিয়েবল", "পয়েন্টার"],
      correctAnswerIndex: 1,
      explanationBn: "ডাটাকে নির্দিষ্ট নিয়মে প্রক্রিয়াকরণ (Processing) করার পর অর্থপূর্ণ তথ্য বা ইনফরমেশন তৈরি হয়।",
      topicRef: "1.1"
    },
    {
      id: 3,
      questionBn: "সি ল্যাঙ্গুয়েজে মেমরি সাইজ বৃদ্ধি বা হ্রাসের জন্য কোন ডাইনামিক ফাংশন ব্যবহৃত হয়?",
      options: ["malloc()", "calloc()", "realloc()", "free()"],
      correctAnswerIndex: 2,
      explanationBn: "realloc() ফাংশনের মাধ্যমে পূর্বে বরাদ্দকৃত ডাইনামিক মেমরির সাইজ রান টাইমে রিঅ্যালোকেট (রিসাইজ) করা যায়।",
      topicRef: "1.6"
    },
    {
      id: 4,
      questionBn: "ডাটা স্ট্রাকচারের প্রতিটি উপাদানকে অন্তত একবার পরিদর্শনের প্রক্রিয়াকে কী বলে?",
      options: ["Searching", "Sorting", "Traversing", "Merging"],
      correctAnswerIndex: 2,
      explanationBn: "প্রতিটি উপাদানকে পরিদর্শন বা প্রক্রিয়া করার অপারেশনকে Traversing বলা হয়।",
      topicRef: "1.5"
    },
    {
      id: 5,
      questionBn: "ডাইনামিক মেমরি সাধারণত মেমরির কোন অংশে সংরক্ষিত হয়?",
      options: ["Stack Segment", "Heap Segment", "Code Segment", "CPU Register"],
      correctAnswerIndex: 1,
      explanationBn: "ডাইনামিক মেমরি রান টাইমে হিপ (Heap) সেগমেন্ট থেকে বরাদ্দ হয় এবং পয়েন্টার দ্বারা নিয়ন্ত্রিত হয়।",
      topicRef: "1.6"
    },
    {
      id: 6,
      questionBn: "homogenous (সমজাতীয়) ডাটা স্ট্রাকচারের প্রকৃষ্ট উদাহরণ কোনটি?",
      options: ["Structure", "Class", "Array", "Union"],
      correctAnswerIndex: 2,
      explanationBn: "Array হলো সমজাতীয় (Homogeneous) ডাটার ধারাবাহিক সংগ্রহ।",
      topicRef: "1.4"
    },
    {
      id: 7,
      questionBn: "যদি malloc() সফলভাবে মেমরি বরাদ্দ করতে না পারে তবে কী রিটার্ন করে?",
      options: ["0", "-1", "NULL", "Garbage value"],
      correctAnswerIndex: 2,
      explanationBn: "মেমরিতে পর্যাপ্ত জায়গা না থাকলে malloc() এবং calloc() উভয়ই NULL পয়েন্টার রিটার্ন করে।",
      topicRef: "1.6"
    },
    {
      id: 8,
      questionBn: "স্ট্যান্ডার্ড সি ল্যাঙ্গুয়েজে char ডাটা টাইপ মেমরিতে কত বাইট জায়গা নেয়?",
      options: ["1 Byte", "2 Bytes", "4 Bytes", "8 Bytes"],
      correctAnswerIndex: 0,
      explanationBn: "একটি একক ক্যারেক্টার (char) মেমরিতে 1 Byte (8 bits) জায়গা দখল করে।",
      topicRef: "1.2"
    }
  ]
};

export const CHAPTER_2_DATA: Chapter = {
  id: 2,
  code: "28542-CH02",
  titleBn: "অ্যালগরিদম (Algorithm)",
  titleEn: "Algorithm Concepts & Complexity Analysis",
  status: "complete",
  learningObjectives: [
    "অ্যালগরিদমের সংজ্ঞা, উৎপত্তির ইতিহাস এবং প্রোগ্রামিংয়ে এর অপরিহার্য গুরুত্ব ব্যাখ্যা করতে পারা।",
    "ডোনাল্ড নুথ (Donald Knuth) নির্দেশিত অ্যালগরিদমের ৫টি প্রধান বৈশিষ্ট্য (Finiteness, Definiteness, Input, Output, Effectiveness) বিস্তারিত বর্ণনা করা।",
    "ফ্লোচার্ট (Flowchart) এর স্ট্যান্ডার্ড প্রতীকসমূহ এবং সিউডোকোড (Pseudo-code) এর গঠন ও তুলনামূলক পার্থক্য অনুধাবন করা।",
    "অ্যালগরিদমিক নোটেশন (Notations), কন্ট্রোল স্ট্রাকচার ও লজিক্যাল সিনট্যাক্স সঠিকভাবে প্রকাশ করতে পারা।",
    "অ্যালগরিদমের জটিলতা (Time Complexity & Space Complexity) এবং অ্যাসিম্পটোটিক নোটেশনসমূহ (Big-O, Omega, Theta) নির্ণয় করতে পারা।",
    "অ্যালগরিদমের প্রধান প্রধান ডিজাইন স্ট্র্যাটেজি যেমন—Divide and Conquer, Greedy Method, Dynamic Programming ও Backtracking এর মূলনীতি শনাক্ত করা।"
  ],
  subtopics: [
    {
      id: "2.1",
      titleBn: "অ্যালগরিদমের সংজ্ঞা ও মূল ধারণা",
      titleEn: "State algorithm",
      concept: `কোনো একটি সুনির্দিষ্ট সমস্যা সমাধানের লক্ষ্যে যুক্তিযুক্ত, সুশৃঙ্খল এবং সসীম সংখ্যক সুনির্দিষ্ট নির্দেশনার বা ধাপের পর্যায়ক্রমিক লিখিত বিবরণকে অ্যালগরিদম (Algorithm) বলা হয়। 

অ্যালগরিদম শব্দের উৎপত্তি হয়েছে ৯ম শতাব্দীর পারস্যের প্রখ্যাত গণিতবিদ, জ্যোতির্বিজ্ঞানী এবং বীজগণিতের জনক "আবু জাফর মুহাম্মদ ইবনে মুসা আল-খোয়ারিজমি" (Abu Ja'far Muhammad ibn Musa al-Khwarizmi)-এর নামানুসারে। 

অ্যালগরিদম যেকোনো প্রোগ্রামিং ভাষা (C, Python, Java) থেকে সম্পূর্ণ স্বাধীন। এটি কোনো নির্দিষ্ট কোড নয়, বরং সমস্যার লজিক্যাল ব্লুপ্রিন্ট বা সমাধান পরিকল্পনা। একটি কার্যকরী অ্যালগরিদমে নির্দিষ্ট ইনপুট প্রদান করলে তা প্রক্রিয়াকরণের মাধ্যমে কাঙ্ক্ষিত ফলাফল বা আউটপুট প্রদান করে সমাপ্ত হয়।`,
      realLifeAnalogy: `একটি রান্না তৈরির সুস্বাদু রেসিপি বা নির্দেশিকার কথা বিবেচনা করুন: প্রথমে পাত্রে তেল দেওয়া, এরপর মসলা কষানো, চাল বা সবজি দেওয়া এবং নির্দিষ্ট সময় পর চুলা বন্ধ করা। ঠিক তেমনি, একটি ব্যাংকের ATM বুথ থেকে টাকা উত্তোলনের ধাপসমূহ: কার্ড প্রবেশ করানো ➔ পিন কোড যাচাই ➔ টাকার পরিমাণ নির্বাচন ➔ ক্যাশ প্রদান ➔ রসিদ প্রিন্ট—প্রতিটি সুনির্দিষ্ট ধাপই বাস্তব জীবনের একটি নিখুঁত অ্যালগরিদম!`,
      technicalDetails: `কম্পিউটার সায়েন্সে প্রোগ্রাম রচনার পূর্বে অ্যালগরিদম প্রণয়ন করার গুরুত্ব:
১. লজিক স্পষ্টতা (Clarity of Logic): প্রোগ্রাম কোডিং করার পূর্বেই সমাধানের প্রতিটি ধাপের ত্রুটি ধরা পড়ে।
২. ভাষা নিরপেক্ষতা (Language Independence): একই অ্যালগরিদমকে যেকোনো প্রোগ্রামিং ল্যাঙ্গুয়েজে রূপান্তর করা যায়।
৩. সময় ও মেমরি পরিমাপ (Efficiency Analysis): কোড লেখার আগেই অ্যালগরিদমের টাইম ও স্পেস কমপ্লেক্সিটি নির্ণয় করা যায়।
৪. সহজে ডিবাগিং ও পরিমার্জন (Easy Debugging & Modification)।

একটি আদর্শ অ্যালগরিদমের গঠন:
Step 1: Start / Initialize
Step 2: Take Input values
Step 3: Perform Operations / Calculations
Step 4: Check Conditions / Iteration (Loops)
Step 5: Display Output
Step 6: Stop / Terminate`,
      keyPoints: [
        "অ্যালগরিদম হলো সমস্যা সমাধানের সসীম ধাপভিত্তিক লজিক্যাল রূপরেখা।",
        "বিজ্ঞানী আল-খোয়ারিজমি (Al-Khwarizmi) এর নাম থেকে 'Algorithm' শব্দের উৎপত্তি।",
        "অ্যালগরিদম সর্বদা প্রোগ্রামিং ভাষা থেকে স্বাধীন এবং সার্বজনীন।"
      ],
      syntaxOrFormulas: [
        {
          label: "Simple Algorithm: Finding Maximum of Two Numbers",
          lang: "c",
          codeOrFormula: `Algorithm: FIND_MAX(A, B)
Step 1: Start
Step 2: Read two integer numbers A and B
Step 3: If A > B then
            Set MAX = A
        Else
            Set MAX = B
        [End of If]
Step 4: Print "Maximum Value is: ", MAX
Step 5: Stop`
        },
        {
          label: "Python Implementation of Same Algorithm",
          lang: "python",
          codeOrFormula: `def find_max(a, b):
    # Step 1 & 2: Process Input
    if a > b:
        maximum = a
    else:
        maximum = b
    # Step 4: Return Output
    return maximum

print("Maximum:", find_max(45, 82))`
        }
      ]
    },
    {
      id: "2.2",
      titleBn: "অ্যালগরিদমের বৈশিষ্ট্যসমূহ",
      titleEn: "Mention the characteristics of algorithm",
      concept: `যেকোনো লিখিত ধাপের সমষ্টিকেই অ্যালগরিদম বলা যায় না। বিখ্যাত কম্পিউটার বিজ্ঞানী প্রফেসর ডোনাল্ড এরভিন নুথ (Donald Ervin Knuth) তার বিখ্যাত গ্রন্থ "The Art of Computer Programming"-এ একটি আদর্শ অ্যালগরিদমের ৫টি মৌলিক এবং আবশ্যকীয় বৈশিষ্ট্যের উল্লেখ করেছেন:
১. ইনপুট (Input)
২. আউটপুট (Output)
৩. সসীমতা (Finiteness)
৪. স্পষ্টতা বা সুনির্দিষ্টতা (Definiteness / Unambiguity)
৫. কার্যকারিতা ও বাস্তবতা (Effectiveness / Feasibility)`,
      realLifeAnalogy: `একটি ওষুধের প্রেসক্রিপশন যদি অস্পষ্ট হয় বা রোগীকে বলা হয় "যতদিন ইচ্ছা ওষুধ খান" (অসীম সময়), তবে রোগী সুস্থ হওয়ার বদলে ক্ষতিগ্রস্ত হবে। একইভাবে কোনো অ্যালগরিদমে যদি অসীম লুপ (Infinite loop) থাকে বা নির্দেশিকা অস্পষ্ট হয়, তবে কম্পিউটার ক্র্যাশ করবে বা সঠিক ফল দেবে না।`,
      technicalDetails: `৫টি মৌলিক বৈশিষ্ট্যের পুঙ্খানুপুঙ্খ ব্যাখ্যা:

১. ইনপুট (Input): অ্যালগরিদমে শূন্য (০) বা ততোধিক সুনির্দিষ্ট বাহ্যিক মান ইনপুট হিসেবে গ্রহণ করার ব্যবস্থা থাকতে হবে।
২. আউটপুট (Output): অ্যালগরিদম অবশ্যই অন্তত একটি বা একাধিক অর্থপূর্ণ ফলাফল বা আউটপুট তৈরি করবে যা প্রত্যাশিত সমাধানের সাথে সামঞ্জস্যপূর্ণ।
৩. সসীমতা (Finiteness): অ্যালগরিদমের প্রতিটি ধাপ সসীম সংখ্যক বার সম্পন্ন হবে এবং একটি নির্দিষ্ট সংখ্যক এক্সিকিউশনের পর অ্যালগরিদম অবশ্যই সমাপ্ত (Terminate) হতে হবে। এটি কখনোই অসীম লুপে (Infinite Loop) আটকে থাকতে পারবে না।
৪. স্পষ্টতা (Definiteness): অ্যালগরিদমের প্রতিটি নির্দেশিকা হতে হবে পরিষ্কার, সন্দেহাতীত এবং দ্ব্যর্থহীন (Unambiguous)। যেমন: "Divide by 0" এমন কোনো নির্দেশিকা থাকতে পারবে না যা গাণিতিকভাবে অনির্ণেয়।
৫. কার্যকারিতা (Effectiveness): প্রতিটি ধাপ এত সহজ ও মৌলিক হতে হবে যাতে তা কাগজে-কলমে কিংবা কম্পিউটারে সীমিত সময়ের মধ্যে বাস্তবে সম্পাদন (Feasible) করা সম্ভব হয়।`,
      diagramType: "ascii",
      diagramContent: `                    ┌─────────────────────────────────────────┐
                    │    Characteristics of an Algorithm      │
                    │         (Donald Knuth's 5 Rules)        │
                    └────────────────────┬────────────────────┘
                                         │
       ┌───────────────┬─────────────────┼─────────────────┬───────────────┐
       │               │                 │                 │               │
┌──────────────┐┌──────────────┐  ┌──────────────┐  ┌──────────────┐┌──────────────┐
│ 1. Input     ││ 2. Output    │  │3. Finiteness │  │4.Definiteness││5Effectiveness│
│ (0 or more   ││ (At least 1  │  │(Must end in  │  │(Clear and non││(Practically  │
│ valid inputs)││ valid result)│  │ finite steps)│  │  ambiguous)  ││ doable steps)│
└──────────────┘└──────────────┘  └──────────────┘  └──────────────┘└──────────────┘`,
      tableData: {
        headers: ["বৈশিষ্ট্য (Property)", "মূল তাৎপর্য (Significance)", "ব্যর্থতার কুফল (Failure Effect)"],
        rows: [
          ["Input (ইনপুট)", "প্রক্রিয়াকরণের জন্য কাঁচামাল প্রদান।", "ইনপুট ছাড়া কিছু অ্যালগরিদম ধ্রুবক মানে কাজ করলেও জেনেরিক হয় না।"],
          ["Output (আউটপুট)", "ব্যবহারকারীর জন্য কার্যকর ফলাফল প্রদর্শন।", "আউটপুট না থাকলে অ্যালগরিদমের উদ্দেশ্যই ব্যর্থ হয়।"],
          ["Finiteness (সসীমতা)", "একটি নির্দিষ্ট সময়ে অ্যালগরিদমের সমাপ্তি।", "ইনফিনিট লুপ তৈরি হয় এবং মেমরি/সিপিইউ হ্যাং হয়ে যায়।"],
          ["Definiteness (স্পষ্টতা)", "প্রতিটি ধাপের একক ও নিখুঁত অর্থ প্রকাশ।", "কম্পাইলার বা প্রসেসর ভুল ও অপ্রত্যাশিত ফলাফল প্রদর্শন করে।"],
          ["Effectiveness (বাস্তবতা)", "ধাপসমূহ বাস্তবিক যন্ত্রে সম্পাদনযোগ্য হওয়া।", "তাত্ত্বিকভাবে সঠিক হলেও বাস্তবে রান করা সম্ভব হয় না।"]
        ]
      },
      keyPoints: [
        "ডোনাল্ড নুথ অ্যালগরিদমের ৫টি প্রধান মানদণ্ড প্রণয়ন করেন।",
        "অ্যালগরিদম অবশ্যই Finiteness মেনে শেষ হতে হবে, কখনো অনন্তকাল চলতে পারে না।",
        "প্রতিটি ধাপ Unambiguous ও গাণিতিকভাবে সুসংজ্ঞায়িত হতে হবে।"
      ]
    },
    {
      id: "2.3",
      titleBn: "ফ্লোচার্ট এবং সিউডোকোড",
      titleEn: "State flowchart and pseudo code",
      concept: `অ্যালগরিদমকে দৃশ্যমান বা টেক্সট আকারে প্রকাশের প্রধান দুটি মাধ্যম হলো 'ফ্লোচার্ট' (Flowchart) এবং 'সিউডোকোড' (Pseudo-code)।

১. ফ্লোচার্ট (Flowchart):
যে চিত্রের মাধ্যমে কোনো অ্যালগরিদমের ধাপসমূহ জ্যামিতিক প্রতীকের সাহায্যে ক্রমানুসারে প্রকাশ করা হয়, তাকে ফ্লোচার্ট বা প্রবাহচিত্র বলা হয়। এতে বিভিন্ন জ্যামিতিক আকৃতি এবং তাদের সংযোগকারী তীরচিহ্ন (Flow lines) ব্যবহার করা হয়।

২. সিউডোকোড (Pseudo-code):
'Pseudo' একটি গ্রিক শব্দ যার অর্থ 'ছদ্ম' বা 'নকল' এবং 'Code' অর্থ 'প্রোগ্রামের নির্দেশ'। কোনো অ্যালগরিদমের যুক্তিকে কোনো নির্দিষ্ট প্রোগ্রামিং ভাষার কঠিন ব্যাকরণ (Syntax) অনুসরণ না করে সহজ ইংরেজি ও গাণিতিক ভাষায় ছদ্ম কোড আকারে উপস্থাপন করাকে সিউডোকোড বলে।`,
      realLifeAnalogy: `একটি নতুন বাড়ি বানানোর ক্ষেত্রে আর্কিটেক্টের আঁকা 'নকশা বা ব্লুপ্রিন্ট' হলো ফ্লোচার্ট (যা দেখে যে কেউ কাঠামো বুঝতে পারে)। আর রাজমিস্ত্রিদের জন্য পয়েন্ট আকারে লেখা কাজের নির্দেশিকা হলো সিউডোকোড। অবশেষে ইট-সিমেন্ট দিয়ে বাড়ি তৈরি করা হলো চূড়ান্ত প্রোগ্রাম কোডিং!`,
      technicalDetails: `ক. ফ্লোচার্টের আদর্শ প্রতীকসমূহ (Standard ANSI Flowchart Symbols):
১. ডিম্বাকৃতি / ওভাল (Oval / Terminal): শুরু (Start) এবং শেষ (Stop) নির্দেশ করে।
২. সামান্তরিক (Parallelogram): ইনপুট গ্রহণ (Input) এবং আউটপুট প্রদর্শন (Output) নির্দেশ করে।
৩. আয়তক্ষেত্র (Rectangle): প্রক্রিয়াকরণ (Processing) বা গাণিতিক গণনা ($A = B + C$) নির্দেশ করে।
৪. রম্বস / ডায়মন্ড (Diamond): সিদ্ধান্ত গ্রহণ (Decision / Condition - যেমন: If A > B) নির্দেশ করে, যার দুটি শাখা থাকে (Yes / No)।
৫. বৃত্ত (Circle / Connector): ফ্লোচার্টের বিভিন্ন অংশের সংযোগ নির্দেশ করে।
৬. দিকনির্দেশক তীরচিহ্ন (Flowlines / Arrow): প্রবাহের দিক বা ধারাবাহিকতা প্রকাশ করে।

খ. সিউডোকোডের মূল সুবিধাসমূহ:
- কোনো সেমিকোলন, হেডার ফাইল বা টাইপ কাস্টিংয়ের ঝামেলা নেই।
- সহজে যেকোনো প্রোগ্রামার নিজের ভাষায় রূপান্তর করতে পারে।
- অ্যালগরিদমের টাইম কমপ্লেক্সিটি বিশ্লেষণ করা অত্যন্ত সহজ হয়।`,
      diagramType: "ascii",
      diagramContent: `┌────────────────────────────────────────────────────────────────────────┐
│                   Standard Flowchart Symbols (ANSI)                    │
├─────────────────────┬──────────────────┬───────────────────────────────┤
│    Symbol Shape     │   Symbol Name    │            Purpose            │
├─────────────────────┼──────────────────┼───────────────────────────────┤
│     ( Start/Stop )  │ Oval / Terminal  │ Program Beginning or Ending   │
│     /  Input/Out  / │ Parallelogram    │ Data Input or Output Display  │
│    ┌──────────────┐ │ Rectangle        │ Computational Processing/Math │
│    │  Process Op  │ │                  │                               │
│    └──────────────┘ │                  │                               │
│          /\\         │ Diamond          │ Conditional Decision (Yes/No) │
│         /  \\        │                  │                               │
│         \\  /        │                  │                               │
│          \\/         │                  │                               │
│          (O)        │ Circle           │ On-page Connector             │
│        ───────►     │ Arrow Lines      │ Direction of Data Flow        │
└─────────────────────┴──────────────────┴───────────────────────────────┘`,
      tableData: {
        headers: ["পার্থক্যের বিষয়", "ফ্লোচার্ট (Flowchart)", "সিউডোকোড (Pseudo-code)", "অ্যালগরিদম (Algorithm)"],
        rows: [
          ["উপস্থাপনের ধরন", "চিত্র বা জ্যামিতিক প্রতীকের মাধ্যমে দৃশ্যমান।", "ইংরেজি ও গাণিতিক চিহ্নের ছদ্ম কোড।", "ধাপভিত্তিক সাধারণ বর্ণনামূলক বাক্য।"],
          ["প্রতীকের ব্যবহার", "সুনির্দিষ্ট জ্যামিতিক স্ট্যান্ডার্ড প্রতীক বাধ্যতামূলক।", "কোনো জ্যামিতিক প্রতীক প্রয়োজন নেই।", "কোনো প্রতীক নেই, শুধু ক্রমিক ধাপ থাকে।"],
          ["পরিবর্তন ও পরিমার্জন", "বড় ফ্লোচার্ট পুনরায় আঁকা সময়সাপেক্ষ ও জটিল।", "খুব সহজে টেক্সট এডিট করে পরিবর্তন করা যায়।", "সহজে পরিমার্জন করা যায়।"],
          ["প্রোগ্রামে রূপান্তর", "লজিক দ্রুত চোখে পড়ে, তবে কোডিংয়ে অনুবাদ কিছুটা পরোক্ষ।", "প্রোগ্রামিং কোডের সবচেয়ে কাছাকাছি, সরাসরি অনুবাদযোগ্য।", "প্রাথমিক ধারণা তৈরিতে সহায়ক।"],
          ["বোঝার সুবিধা", "সাধারণ ব্যবহারকারী ও শিক্ষার্থীদের কাছে সবচেয়ে আকর্ষণীয়।", "প্রোগ্রামার ও ডেভেলপারদের নিকট অধিক জনপ্রিয়।", "যেকোনো স্তরের মানুষের জন্য সহজবোধ্য।"]
        ]
      },
      keyPoints: [
        "ফ্লোচার্ট হলো অ্যালগরিদমের চিত্ররূপ (Graphical Representation)।",
        "সিউডোকোড হলো প্রোগ্রামিং কোডের ছদ্মরূপ (Textual Representation)।",
        "রম্বস বা ডায়মন্ড প্রতীক শর্ত বা সিদ্ধান্ত (Decision Making) প্রকাশে ব্যবহৃত হয়।"
      ]
    },
    {
      id: "2.4",
      titleBn: "অ্যালগরিদমিক নোটেশনসমূহ",
      titleEn: "Explain algorithmic notations",
      concept: `অ্যালগরিদমকে মানসম্মত, সংক্ষিপ্ত এবং দ্ব্যর্থহীনভাবে লেখার জন্য যে সমস্ত আন্তর্জাতিকভাবে স্বীকৃত গাণিতিক প্রতীক, চলক ও কন্ট্রোল স্ট্রাকচার ব্যবহার করা হয়, সেগুলোকে অ্যালগরিদমিক নোটেশন (Algorithmic Notations) বলে। 

ডাটা স্ট্রাকচার ও অ্যালগরিদমের প্রখ্যাত বইসমূহে (যেমন: Seymour Lipschutz, Horowitz & Sahni) একটি সর্বজনীন নোটেশন কাঠামো অনুসরণ করা হয় যাতে বিশ্বের যেকোনো প্রকৌশলী বা শিক্ষার্থী কোডটি বুঝতে পারে।`,
      realLifeAnalogy: `সঙ্গীতশিল্পীদের যেমন নির্দিষ্ট 'স্বরলিপি' (Musical Notes) থাকে যা দেখে যেকোনো দেশের সুরকার পিয়ানো বা বেহালা বাজাতে পারেন, অ্যালগরিদমিক নোটেশন হলো কম্পিউটার সায়েন্সের সেই সার্বজনীন স্বরলিপি!`,
      technicalDetails: `অ্যালগরিদমিক নোটেশনের মূল উপাদানসমূহ:

১. নাম ও প্যারামিটার (Name & Parameters):
অ্যালগরিদমের শুরুতে বড় হাতের অক্ষরে নাম এবং বন্ধনীর ভেতর প্যারামিটার তালিকা থাকে।
যেমন: \`Algorithm: BINARY_SEARCH(DATA, LB, UB, ITEM, LOC)\`

২. অ্যাসাইনমেন্ট স্টেটমেন্ট (Assignment Notation):
কোনো ভেরিয়েবলে মান নির্ধারণ করতে \`:=\` অথবা \`<-\` তীরচিহ্ন ব্যবহার করা হয়।
যেমন: \`Set MAX := A[1]\` অথবা \`Set COUNT := COUNT + 1\`

৩. শর্তাধীন স্টেটমেন্ট (Conditional / Selection Structure):
  - \`If (Condition) then:\`
        \`[Statements]\`
    \`[End of If]\`
  - \`If (Condition) then:\`
        \`[Statements]\`
    \`Else:\`
        \`[Statements]\`
    \`[End of If]\`

৪. পুনরাবৃত্তিমূলক লুপ (Iterative / Loop Structures):
  - \`Repeat For K := 1 to N:\`
        \`[Statements]\`
    \`[End of Loop]\`
  - \`Repeat while (Condition):\`
        \`[Statements]\`
    \`[End of Loop]\`

৫. মন্তব্য বা কমেন্টস (Comments):
অ্যালগরিদমে কোনো ব্যাখ্যা দেওয়ার জন্য ব্র্যাকেট \`[This is a comment]\` ব্যবহৃত হয়।

৬. সমাপ্তি বা রিটার্ন (Exit / Return):
অ্যালগরিদম শেষ করতে \`Exit\`, \`Return LOC\` বা \`Stop\` ব্যবহৃত হয়।`,
      diagramType: "ascii",
      diagramContent: ` ┌────────────────────────────────────────────────────────────────────────┐
 │                   Standard Algorithmic Notation Matrix                 │
 ├──────────────────┬─────────────────────────────┬───────────────────────┤
 │     Category     │      Standard Notation      │      Description      │
 ├──────────────────┼─────────────────────────────┼───────────────────────┤
 │ Header & Naming  │ ALGORITHM_NAME(P1, P2...)   │ Subprogram Identifier │
 │ Assignment       │ Variable := Expression      │ Set Value into Memory │
 │ Conditional      │ If (Cond) then ... Else ... │ Branching Control     │
 │ Counted Loop     │ Repeat for I := 1 to N:     │ Fixed Iteration Loop  │
 │ Condition Loop   │ Repeat while (Cond):        │ Conditional Loop      │
 │ Comment block    │ [This explains step logic]  │ Informational Note    │
 │ Array element    │ ARR[K] or ARR[ROW, COL]     │ Subscripted Variable  │
 │ Termination      │ Exit or Return Result       │ Halts Execution       │
 └──────────────────┴─────────────────────────────┴───────────────────────┘`,
      keyPoints: [
        "অ্যাসাইনমেন্টের ক্ষেত্রে সাধারণ '=' এর পরিবর্তে ':=' ব্যবহার করা স্পষ্টতা বাড়ায়।",
        "প্রতিটি 'If' এবং 'Repeat' ব্লকের সমাপ্তি নির্দেশ করতে '[End of If]' বা '[End of Loop]' লেখা আবশ্যক।",
        "প্যারামিটার দিয়ে ইনপুট ও আউটপুট ভেরিয়েবল পরিষ্কারভাবে চিহ্নিত করা হয়।"
      ],
      syntaxOrFormulas: [
        {
          label: "Algorithmic Notation Example: Array Traversing",
          lang: "c",
          codeOrFormula: `Algorithm: TRAVERSE_ARRAY(LA, N)
[Here LA is a Linear Array with N elements]
Step 1: [Initialize Counter]
        Set K := 0
Step 2: [Loop through all elements]
        Repeat Step 3 while K < N:
Step 3:     [Visit and Process element]
            Apply PROCESS to LA[K]
            Set K := K + 1
        [End of Step 2 Loop]
Step 4: [Exit Algorithm]
        Exit`
        }
      ]
    },
    {
      id: "2.5",
      titleBn: "অ্যালগরিদমের জটিলতা (Complexity Analysis)",
      titleEn: "Describe the Complexity of algorithm",
      concept: `একটি অ্যালগরিদম কার্যকরভাবে সম্পন্ন হতে কম্পিউটারের কতটুকু সময় (Time) এবং কতটুকু মেমরি স্থান (Memory Space) প্রয়োজন হয়, তার গাণিতিক পরিমাপকে অ্যালগরিদমের জটিলতা (Complexity of Algorithm) বলে।

অ্যালগরিদম জটিলতাকে প্রধানত দুটি ভাগে ভাগ করা হয়:
১. সময় জটিলতা (Time Complexity): অ্যালগরিদমটি সম্পূর্ণরূপে এক্সিকিউট হতে প্রসেসরের মোট কতগুলো মৌলিক অপারেশন বা সময় প্রয়োজন।
২. স্থান জটিলতা (Space Complexity): অ্যালগরিদম চলাকালীন মেমরিতে ইনপুট ডাটা, অক্সিলিয়ারি ভেরিয়েবল ও স্ট্যাক ফ্রেমের জন্য মোট কতটুকু মেমরি স্থান প্রয়োজন।

অ্যালগরিদমের জটিলতা ইনপুট সাইজ $n$ এর বৃদ্ধি অনুযায়ী কেমন আচরণ করে তা পরিমাপ করতে 'অ্যাসিম্পটোটিক নোটেশন' (Asymptotic Notations) ব্যবহার করা হয়।`,
      realLifeAnalogy: `মনে করুন আপনার ঢাকা থেকে চট্টগ্রাম যেতে হবে। আপনি হেঁটে যেতে পারেন (সময় লাগবে ৩ দিন), বাসে যেতে পারেন (সময় লাগবে ৬ ঘণ্টা), বা বিমানে যেতে পারেন (সময় লাগবে ৪৫ মিনিট)। তিনটি পথেই গন্তব্যে পৌঁছানো যায়, কিন্তু সময় ও খরচের পার্থক্য অনেক। প্রোগ্রামিংয়েও একটি সমস্যা ১০ রকম অ্যালগরিদমে সমাধান করা যায়, কিন্তু যার Time ও Space Complexity সর্বনিম্ন, সেটিই বিজয়ী হয়!`,
      technicalDetails: `অ্যালগরিদমের ৩টি কেস অ্যানালাইসিস (Three Cases of Analysis):
১. বেস্ট কেস (Best Case): যখন ইনপুট ডাটা এমন অবস্থায় থাকে যাতে সর্বনিম্ন সময়ে কাজ শেষ হয় (Notation: Big-Omega $\\Omega$).
২. ওর্স্ট কেস (Worst Case): যখন ইনপুট ডাটা এমন অবস্থায় থাকে যাতে সর্বোচ্চ সময় লাগে (Notation: Big-O $O$). সফটওয়্যার ইঞ্জিনিয়ারিংয়ে সর্বদা ওর্স্ট কেস বিবেচনা করা হয়।
৩. এভারেজ কেস (Average Case): সকল সম্ভাব্য ইনপুটের গড় সময় (Notation: Big-Theta $\\Theta$).

প্রধান ৩টি অ্যাসিম্পটোটিক নোটেশন (Asymptotic Notations):
১. Big-O ($O$): এটি অ্যালগরিদমের সর্বোচ্চ সীমা (Upper Bound) নির্দেশ করে। 
   গাণিতিক সংজ্ঞা: $f(n) = O(g(n))$ যদি এমন ধনাত্মক ধ্রুবক $c$ এবং $n_0$ বিদ্যমান থাকে যাতে $0 \\le f(n) \\le c \\cdot g(n)$, সকল $n \\ge n_0$ এর জন্য।
২. Big-Omega ($\\Omega$): এটি সর্বনিম্ন সীমা (Lower Bound) নির্দেশ করে। $f(n) \\ge c \\cdot g(n)$।
৩. Big-Theta ($\\Theta$): এটি টাইট সীমা (Tight Bound) নির্দেশ করে। $c_1 \\cdot g(n) \\le f(n) \\le c_2 \\cdot g(n)$।

অ্যালগরিদমের গ্রোথ রেট (Order of Growth):
$$O(1) < O(\\log n) < O(n) < O(n \\log n) < O(n^2) < O(n^3) < O(2^n) < O(n!)$$`,
      diagramType: "ascii",
      diagramContent: `  Time Complexity / Execution Time
     ▲
     │                                                     / O(n!)
     │                                             /      /  (Factorial)
     │                                            /      /
     │                                           /  /───/ O(2^n) (Exponential)
     │                                          /  /
     │                                         /  /   O(n^2) (Quadratic)
     │                                        /  /
     │                                       /  /─/ O(n log n) (Linearithmic)
     │                                      /  / /
     │                                     /  / /── O(n) (Linear)
     │                                   ┌─┴─┴─┴─── O(log n) (Logarithmic)
     │───────────────────────────────────┴───────── O(1) (Constant Time)
     └──────────────────────────────────────────────────────────────────►
     0                           Input Size (n) ──────►`,
      tableData: {
        headers: ["জটিলতা (Notation)", "নাম (Complexity Name)", "ইনপুট $n=1000$ এ অপারেশনের সংখ্যা", "প্রচলিত বাস্তব উদাহরণ"],
        rows: [
          ["$O(1)$", "কনস্ট্যান্ট টাইম (Constant)", "১টি অপারেশন (Instant)", "অ্যারের নির্দিষ্ট ইনডেক্স থেকে ডাটা পড়া (\`A[5]\`), Stack Push/Pop"],
          ["$O(\\log n)$", "লগারিদমিক টাইম (Logarithmic)", "প্রায় ১০টি অপারেশন ($\\log_2 1000 \\approx 10$)", "বাইনারি সার্চ (Binary Search), Balanced BST Search"],
          ["$O(n)$", "লিনিয়ার টাইম (Linear)", "১,০০০টি অপারেশন", "লিনিয়ার সার্চ (Linear Search), অ্যারে ট্রাভার্সিং, একক লুপ"],
          ["$O(n \\log n)$", "লিনিয়ারিদমিক টাইম (Linearithmic)", "প্রায় ১০,০০০টি অপারেশন", "মার্জ সর্ট (Merge Sort), হিপ সর্ট (Heap Sort), কুইক সর্ট গড় মান"],
          ["$O(n^2)$", "কোয়াড্রেটিক টাইম (Quadratic)", "১,০০০,০০০টি অপারেশন (১ মিলিয়ন)", "বাবল সর্ট (Bubble Sort), সিলেকশন সর্ট, ইনসার্শন সর্ট (নেস্টেড লুপ)"],
          ["$O(2^n)$", "এক্সপোনেনশিয়াল টাইম (Exponential)", "$1.07 \\times 10^{301}$ (অকল্পনীয় বিশাল সময়)", "টাওয়ার অব হ্যানয় (Tower of Hanoi), রিকার্সিভ ফিবোনাচ্চি"],
          ["$O(n!)$", "ফ্যাক্টোরিয়াল টাইম (Factorial)", "ইনপুট ২০ হলেই শতাব্দী পার হয়ে যাবে!", "ট্রাভেলিং সেলসম্যান সমস্যা (Traveling Salesperson - Brute Force)"]
        ]
      },
      keyPoints: [
        "সফটওয়্যার ইঞ্জিনিয়ারিংয়ে নিরাপত্তা নিশ্চিতের জন্য সর্বদা Worst-Case $O(n)$ বিশ্লেষণ করা হয়।",
        "লগারিদমিক $O(\\log n)$ সময় জটিলতা লিনিয়ার $O(n)$ এর চেয়ে বহুগুণ দ্রুততর।",
        "$O(1)$ হলো শ্রেষ্ঠতম সম্ভাব্য সময় জটিলতা কারণ এটি ইনপুট সাইজের ওপর নির্ভর করে না।"
      ],
      syntaxOrFormulas: [
        {
          label: "Mathematical Proof of Loops Complexity",
          lang: "c",
          codeOrFormula: `// 1. Single Loop -> O(n)
for(int i = 0; i < n; i++) {
    // Executes n times -> O(n)
}

// 2. Nested Loop -> O(n^2)
for(int i = 0; i < n; i++) {
    for(int j = 0; j < n; j++) {
        // Executes n * n = n^2 times -> O(n^2)
    }
}

// 3. Divide by 2 Loop -> O(log n)
for(int i = n; i > 1; i = i / 2) {
    // Executes log2(n) times -> O(log n)
}`
        }
      ]
    },
    {
      id: "2.6",
      titleBn: "অ্যালগরিদমের বিভিন্ন প্রকারভেদ ও ডিজাইন কৌশল",
      titleEn: "Mention different types of algorithm",
      concept: `কম্পিউটার সায়েন্সে সমস্যা সমাধানের ধরন ও কৌশল অনুসারে অ্যালগরিদমকে বিভিন্ন প্রধান ক্যাটাগরিতে বিভক্ত করা হয়। প্রধান প্রকারভেদসমূহ হলো:
১. ব্রুট ফোর্স অ্যালগরিদম (Brute Force Algorithm)
২. ডিভাইড অ্যান্ড কনকার অ্যালগরিদম (Divide and Conquer Algorithm)
৩. গ্রিডি অ্যালগরিদম (Greedy Algorithm)
৪. ডাইনামিক প্রোগ্রামিং (Dynamic Programming - DP)
৫. ব্যাকট্র্যাকিং অ্যালগরিদম (Backtracking Algorithm)
৬. রিকার্সিভ অ্যালগরিদম (Recursive Algorithm)
৭. র‍্যান্ডমাইজড অ্যালগরিদম (Randomized Algorithm)`,
      realLifeAnalogy: `একটি ৪ ডিজিটের তালা খোলার চেষ্টা করার কথা ভাবুন:
১. ০০০০ থেকে ৯৯৯৯ পর্যন্ত প্রতিটি কম্বিনেশন একে একে ট্রাই করা = Brute Force
২. কাজটিকে বন্ধুদের মাঝে ভাগ করে দিয়ে সবার ফলাফল একত্র করা = Divide & Conquer
৩. সবচেয়ে চকচকে বা সম্ভাবনাময় চাবিটি আগে ব্যবহার করা = Greedy
৪. যে যে ভুল কোড আগে ট্রাই করা হয়েছে তা খাতায় লিখে রাখা যাতে দ্বিতীয়বার সময় নষ্ট না হয় = Dynamic Programming (Memoization)`,
      technicalDetails: `প্রধান অ্যালগরিদম ডিজাইন কৌশলের বিশদ বিবরণ:

১. ব্রুট ফোর্স (Brute Force Method):
  - সম্ভাব্য সকল অপশন একে একে পরীক্ষা করে সঠিক সমাধান বের করার সোজাসাপ্টা পদ্ধতি।
  - সুবিধা: সবসময় কাজ করে এবং সমাধান নিশ্চিত করে।
  - অসুবিধা: টাইম কমপ্লেক্সিটি অত্যন্ত বেশি। (যেমন: Linear Search, Naive String Matching).

২. ডিভাইড অ্যান্ড কনকার (Divide and Conquer):
  - একটি বড় ও জটিল সমস্যাকে কয়েকটি ছোট ছোট একই রকম সাব-প্রবলেমে বিভক্ত করা (Divide), সাব-প্রবলেমগুলো সমাধান করা (Conquer) এবং শেষে ফলাফল একত্র করা (Combine)।
  - উদাহরণ: Merge Sort, Quick Sort, Binary Search.

৩. গ্রিডি অ্যালগরিদম (Greedy Method):
  - প্রতিটি ধাপে দীর্ঘমেয়াদি ভবিষ্যতের কথা না ভেবে তাৎক্ষণিকভাবে যে সিদ্ধান্তটি সবচেয়ে লাভজনক মনে হয় (Locally Optimal Choice), সেটি গ্রহণ করা।
  - উদাহরণ: Fractional Knapsack, Dijkstra's Shortest Path, Kruskal & Prim's MST.

৪. ডাইনামিক প্রোগ্রামিং (Dynamic Programming):
  - বড় সমস্যাকে উপ-সমস্যায় ভাগ করে সাব-প্রবলেমের ফলাফল মেমরিতে সংরক্ষণ (Memoization / Tabulation) করা হয় যাতে একই হিসাব বারবার করতে না হয় (Overlapping Subproblems & Optimal Substructure).
  - উদাহরণ: 0/1 Knapsack, Floyd-Warshall Algorithm, Longest Common Subsequence (LCS).

৫. ব্যাকট্র্যাকিং (Backtracking):
  - সম্ভাব্য পথে এগিয়ে যাওয়া এবং কোনো ধাপে কাঙ্ক্ষিত ফলাফল না পেলে পেছনের ধাপে ফিরে এসে (Backtrack) বিকল্প পথে অনুসন্ধান করা।
  - উদাহরণ: N-Queens Problem, Sudoku Solver, Maze Routing.

৬. রিকার্সিভ অ্যালগরিদম (Recursive Algorithm):
  - যে অ্যালগরিদমে কোনো ফাংশন একটি নির্দিষ্ট বেইজ কন্ডিশন (Base Case) না পৌঁছানো পর্যন্ত বারবার নিজেকেই কল করতে থাকে।
  - উদাহরণ: Factorial ($n! = n \\times (n-1)!$), Tower of Hanoi, Tree Traversals.`,
      diagramType: "ascii",
      diagramContent: `                        ┌─────────────────────────────────────────┐
                        │      Major Types of Algorithms          │
                        └────────────────────┬────────────────────┘
                                             │
      ┌──────────────┬──────────────┬────────┴─────┬──────────────┬──────────────┐
      │              │              │              │              │              │
┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐
│Brute Force│  │ Divide &  │  │  Greedy   │  │  Dynamic  │  │Backtracking│ │ Recursive │
│(Try all   │  │  Conquer  │  │(Locally   │  │Programming│  │(Try, Fail │ │(Function  │
│options)   │  │(Split&Join│  │ best step)│  │(Store&use)│  │ & Rewind) │ │calls self)│
└───────────┘  └───────────┘  └───────────┘  └───────────┘  └───────────┘  └───────────┘`,
      tableData: {
        headers: ["অ্যালগরিদমের ধরন", "মূল দর্শন ও কৌশল (Core Strategy)", "টাইম কমপ্লেক্সিটি রেঞ্জ", "চিহ্নিত ব্যবহার ও উদাহরণ"],
        rows: [
          ["Divide & Conquer", "সমস্যাকে ছোট খণ্ডে ভেঙে আলাদা সমাধান করে একত্র করা।", "$O(n \\log n)$", "Merge Sort, Quick Sort, Binary Search"],
          ["Greedy Approach", "প্রতিটি ধাপে তাৎক্ষণিক সেরা অপশন বেছে নেওয়া।", "$O(n \\log n)$ বা $O(n)$", "Dijkstra, Prim's, Huffman Coding, Activity Selection"],
          ["Dynamic Programming", "সাব-প্রবলেমের মান টেবিলে স্টোর করে দ্রুত সমাধান।", "$O(n \\cdot W)$ বা $O(n^2)$", "0/1 Knapsack, Matrix Chain, Fibonacci, LCS"],
          ["Backtracking", "ভুল পথে গেলে পেছনের সিদ্ধান্তে ফিরে এসে বিকল্প খোঁজা।", "$O(2^n)$ বা $O(n!)$", "N-Queens Puzzle, Sudoku Solver, Graph Coloring"],
          ["Brute Force", "কোনো বুদ্ধি না খাটিয়ে সকল সম্ভাব্য কম্বিনেশন ট্রাই করা।", "$O(n^2)$ থেকে $O(n!)$", "Linear Search, Traveling Salesperson (Naive)"]
        ]
      },
      keyPoints: [
        "Divide and Conquer অ্যালগরিদম মূলত ৩টি ধাপে কাজ করে: Divide, Conquer এবং Combine।",
        "Dynamic Programming এর মূল প্রাণ হলো সাব-প্রবলেমের ফলাফল মেমরি ক্যাশে (Table) রাখা।",
        "Greedy পদ্ধতিতে একবার নেওয়া সিদ্ধান্ত পরবর্তীতে আর পরিবর্তন (Reconsider) করা হয় না।"
      ]
    }
  ],
  practicalPrograms: [
    {
      title: "ব্যবহারিক পরীক্ষণ ০১: দুইটি সংখ্যার যোগ, বিয়োগ, গুণ ও ভাগ এবং অ্যালগরিদম প্রণয়ন",
      problemStatementBn: "কিবোর্ড হতে যেকোনো দুইটি পূর্ণসংখ্যা গ্রহণ করে তাদের যোগফল, বিয়োগফল, গুণফল ও ভাগফল নির্ণয় করার জন্য একটি পূর্ণাঙ্গ অ্যালগরিদম প্রণয়ন, ফ্লোচার্ট অঙ্কন এবং সি ও পাইথন প্রোগ্রাম রচনা ও এক্সিকিউট করো। (BTEB Practical Experiment #01)",
      algorithmStepsBn: [
        "Step 1: Start (প্রোগ্রাম শুরু করি)।",
        "Step 2: Read two numbers Num1 and Num2 (কিবোর্ড হতে Num1 ও Num2 এর মান গ্রহণ করি)।",
        "Step 3: Calculate SUM := Num1 + Num2 (যোগফল নির্ণয় করি)।",
        "Step 4: Calculate SUB := Num1 - Num2 (বিয়োগফল নির্ণয় করি)।",
        "Step 5: Calculate MUL := Num1 * Num2 (গুণফল নির্ণয় করি)।",
        "Step 6: Check condition If Num2 != 0 then:",
        "            Calculate DIV := Num1 / Num2",
        "        Else:",
        "            Set DIV_MSG := 'Division by zero is impossible'",
        "        [End of If]",
        "Step 7: Print SUM, SUB, MUL and DIV (ফলাফলসমূহ মনিটরে প্রদর্শন করি)।",
        "Step 8: Stop (প্রোগ্রাম সমাপ্ত করি)।"
      ],
      cCode: `#include <stdio.h>

int main() {
    double num1, num2;
    double sum, sub, mul, div;

    printf("Enter first number: ");
    if (scanf("%lf", &num1) != 1) return 1;

    printf("Enter second number: ");
    if (scanf("%lf", &num2) != 1) return 1;

    sum = num1 + num2;
    sub = num1 - num2;
    mul = num1 * num2;

    printf("\nAddition: %.2lf + %.2lf = %.2lf\n", num1, num2, sum);
    printf("Subtraction: %.2lf - %.2lf = %.2lf\n", num1, num2, sub);
    printf("Multiplication: %.2lf * %.2lf = %.2lf\n", num1, num2, mul);

    if (num2 != 0) {
        div = num1 / num2;
        printf("Division: %.2lf / %.2lf = %.2lf\n", num1, num2, div);
    } else {
        printf("Division: Error (Division by zero is undefined)\n");
    }

    return 0;
}`,
      pythonCode: `def main():
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))

    addition = num1 + num2
    subtraction = num1 - num2
    multiplication = num1 * num2

    print(f"\nAddition: {num1} + {num2} = {addition:.2f}")
    print(f"Subtraction: {num1} - {num2} = {subtraction:.2f}")
    print(f"Multiplication: {num1} * {num2} = {multiplication:.2f}")

    if num2 != 0:
        division = num1 / num2
        print(f"Division: {num1} / {num2} = {division:.2f}")
    else:
        print("Division: Error (Division by zero is undefined)")

if __name__ == "__main__":
    main()`,
      sampleOutput: `Enter first number: 48
Enter second number: 12

Addition: 48.00 + 12.00 = 60.00
Subtraction: 48.00 - 12.00 = 36.00
Multiplication: 48.00 * 12.00 = 576.00
Division: 48.00 / 12.00 = 4.00`,
      explanationBn: "এই প্র্যাকটিক্যাল প্রোগ্রামে ব্যবহারকারীর নিকট হতে দুটি সংখ্যা গ্রহণ করে মৌলিক ৪টি গাণিতিক অপারেশন সফলভাবে সম্পন্ন করা হয়েছে। বিশেষ সতর্কতামূলক অংশ হিসেবে Step 6-এ শূন্য দিয়ে ভাগ (Division by Zero) করার অসম্ভবতা হ্যান্ডেল করে সম্ভাব্য রান-টাইম ক্র্যাশ (Divide By Zero Exception) রোধ করা হয়েছে।"
    }
  ],
  summaryPoints: [
    "অ্যালগরিদম হলো কোনো সমস্যা সমাধানের সসীম সংখ্যক ধারাবাহিক যৌক্তিক নির্দেশনার সমষ্টি।",
    "বিজ্ঞানী আবু জাফর মুহাম্মদ ইবনে মুসা আল-খোয়ারিজমি এর নাম থেকে 'অ্যালগরিদম' শব্দের উৎপত্তি হয়েছে।",
    "ডোনাল্ড নুথের মতে অ্যালগরিদমের ৫টি আবশ্যকীয় বৈশিষ্ট্য হলো: Input, Output, Finiteness, Definiteness এবং Effectiveness।",
    "ফ্লোচার্ট হলো অ্যালগরিদমের জ্যামিতিক চিত্ররূপ এবং সিউডোকোড হলো প্রোগ্রামিং কোডের অনানুষ্ঠানিক টেক্সট রূপ।",
    "টাইম কমপ্লেক্সিটি পরিমাপ করতে ৩টি নোটেশন ব্যবহৃত হয়: Big-O (Worst Case), Big-Omega (Best Case), এবং Big-Theta (Average Case)।",
    "অ্যালগরিদমের গ্রোথ রেটের তুলনা: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)।",
    "প্রধান অ্যালগরিদম ডিজাইন কৌশলের মধ্যে রয়েছে: Divide & Conquer, Greedy Method, Dynamic Programming ও Backtracking।",
    "সফটওয়্যার ইঞ্জিনিয়ারিংয়ে নিরাপত্তা নিশ্চিতের জন্য সর্বদা Worst Case Big-O Notation $O(n)$ বিশ্লেষণ করা হয়।"
  ],
  boardQuestions: [
    {
      id: "q2-01",
      type: "ati_songkhipto",
      questionBn: "অ্যালগরিদম (Algorithm) কাকে বলে?",
      questionEn: "Define Algorithm.",
      answerBn: "কোনো সুনির্দিষ্ট সমস্যা সমাধানের লক্ষ্যে যুক্তিযুক্ত, সুশৃঙ্খল এবং সসীম সংখ্যক সুনির্দিষ্ট নির্দেশনার বা ধাপের পর্যায়ক্রমিক লিখিত বিবরণকে অ্যালগরিদম বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2019", "BTEB 2016"],
      isImportant: true,
      subtopicRef: "2.1"
    },
    {
      id: "q2-02",
      type: "ati_songkhipto",
      questionBn: "সিউডোকোড (Pseudo-code) কী?",
      questionEn: "What is Pseudo-code?",
      answerBn: "'Pseudo' শব্দের অর্থ ছদ্ম এবং 'Code' অর্থ সংকেত। কোনো নির্দিষ্ট প্রোগ্রামিং ভাষার সিনট্যাক্স না মেনে সহজ ইংরেজি ও গাণিতিক ভাষায় অ্যালগরিদমকে সংক্ষিপ্ত নির্দেশনায় প্রকাশ করাকে সিউডোকোড বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2018"],
      isImportant: true,
      subtopicRef: "2.3"
    },
    {
      id: "q2-03",
      type: "ati_songkhipto",
      questionBn: "টাইম কমপ্লেক্সিটি (Time Complexity) বলতে কী বোঝায়?",
      questionEn: "What is Time Complexity?",
      answerBn: "একটি অ্যালগরিদম তার ইনপুট ডাটার ভিত্তিতে সম্পূর্ণরূপে কার্যকর হতে প্রসেসরের যে মোট সময় বা স্টেটমেন্ট এক্সিকিউশন সংখ্যা প্রয়োজন হয়, তাকে ওই অ্যালগরিদমের টাইম কমপ্লেক্সিটি বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2020", "BTEB 2017"],
      isImportant: true,
      subtopicRef: "2.5"
    },
    {
      id: "q2-04",
      type: "ati_songkhipto",
      questionBn: "Big-O Notation কী প্রকাশ করে?",
      questionEn: "What does Big-O notation represent?",
      answerBn: "Big-O Notation কোনো অ্যালগরিদমের পারফরম্যান্সের সর্বোচ্চ সময়সীমা অর্থাৎ ওর্স্ট-কেস (Worst Case Upper Bound) সময় জটিলতা নির্দেশ করে।",
      marks: 1,
      yearsAppeared: ["BTEB 2022", "BTEB 2019"],
      isImportant: true,
      subtopicRef: "2.5"
    },
    {
      id: "q2-05",
      type: "ati_songkhipto",
      questionBn: "অ্যালগরিদম শব্দের উৎপত্তি কার নামানুসারে হয়েছে?",
      questionEn: "Who is the originator of the word Algorithm?",
      answerBn: "পারস্যের প্রখ্যাত গণিতবিদ 'আবু জাফর মুহাম্মদ ইবনে মুসা আল-খোয়ারিজমি' (Al-Khwarizmi)-এর নাম থেকে অ্যালগরিদম শব্দের উৎপত্তি হয়েছে।",
      marks: 1,
      yearsAppeared: ["BTEB 2021", "BTEB 2018"],
      isImportant: false,
      subtopicRef: "2.1"
    },
    {
      id: "q2-06",
      type: "ati_songkhipto",
      questionBn: "ফ্লোচার্টে রম্বস বা ডায়মন্ড প্রতীক কী কাজে ব্যবহৃত হয়?",
      questionEn: "What is the purpose of diamond symbol in flowchart?",
      answerBn: "ফ্লোচার্টে রম্বস বা ডায়মন্ড (Diamond) প্রতীক শর্ত পরীক্ষা বা সিদ্ধান্ত গ্রহণের (Decision Making / Condition) জন্য ব্যবহৃত হয়।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2019"],
      isImportant: true,
      subtopicRef: "2.3"
    },
    {
      id: "q2-07",
      type: "songkhipto",
      questionBn: "অ্যালগরিদমের প্রধান বৈশিষ্ট্যসমূহ উল্লেখ করো।",
      questionEn: "Mention the characteristics of an algorithm.",
      answerBn: `ডোনাল্ড নুথ (Donald Knuth) নির্দেশিত একটি আদর্শ অ্যালগরিদমের ৫টি প্রধান বৈশিষ্ট্য রয়েছে:
১. ইনপুট (Input): অ্যালগরিদমে শূন্য বা ততোধিক সুনির্দিষ্ট ইনপুট থাকবে।
২. আউটপুট (Output): অ্যালগরিদম অবশ্যই অন্তত একটি অর্থপূর্ণ আউটপুট প্রদান করবে।
৩. সসীমতা (Finiteness): সীমিত সংখ্যক ধাপের পর অ্যালগরিদম অবশ্যই সমাপ্ত হতে হবে।
৪. স্পষ্টতা (Definiteness): প্রতিটি ধাপের অর্থ স্পষ্ট ও দ্ব্যর্থহীন হতে হবে।
৫. কার্যকারিতা (Effectiveness): ধাপগুলো বাস্তবে সম্পাদনযোগ্য ও সহজ হতে হবে।`,
      marks: 3,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2018", "BTEB 2015"],
      isImportant: true,
      subtopicRef: "2.2"
    },
    {
      id: "q2-08",
      type: "songkhipto",
      questionBn: "ফ্লোচার্ট ও সিউডোকোডের মধ্যে ৩টি মৌলিক পার্থক্য লেখো।",
      questionEn: "Distinguish between Flowchart and Pseudo-code.",
      answerBn: `ফ্লোচার্ট ও সিউডোকোডের মধ্যকার পার্থক্য:
১. উপস্থাপনা: ফ্লোচার্ট জ্যামিতিক প্রতীকের সাহায্যে দৃশ্যমানভাবে উপস্থাপিত হয়; পক্ষান্তরে সিউডোকোড সাধারণ ইংরেজি ও গাণিতিক টেক্সট আকারে উপস্থাপিত হয়।
২. প্রতীক নির্ভরতা: ফ্লোচার্টে সুনির্দিষ্ট স্ট্যান্ডার্ড প্রতীক (ANSI) মেনে চলতে হয়; কিন্তু সিউডোকোডে কোনো প্রতীকের প্রয়োজন হয় না।
৩. কোডিংয়ে রূপান্তর: সিউডোকোড প্রোগ্রামিং কোডের খুব কাছাকাছি হওয়ায় তা থেকে সরাসরি কোড লেখা সহজ; অন্যদিকে ফ্লোচার্ট অ্যালগরিদমের সামগ্রিক লজিক বুঝতে সহায়ক।`,
      marks: 3,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2017"],
      isImportant: true,
      subtopicRef: "2.3"
    },
    {
      id: "q2-09",
      type: "songkhipto",
      questionBn: "টাইম কমপ্লেক্সিটি ও স্পেস কমপ্লেক্সিটির মধ্যে পার্থক্য কী?",
      questionEn: "Compare between Time Complexity and Space Complexity.",
      answerBn: `টাইম ও স্পেস কমপ্লেক্সিটির তুলনা:
১. মূল বিষয়: টাইম কমপ্লেক্সিটি হলো প্রোগ্রাম সম্পন্ন হতে প্রসেসরের মোট সময়ের পরিমাপ; অন্যদিকে স্পেস কমপ্লেক্সিটি হলো প্রোগ্রাম চলাকালীন মেমরিতে (RAM) প্রয়োজনীয় মোট মেমরি স্পেসের পরিমাপ।
২. প্রভাবিতকারী উপাদান: লুপের সংখ্যা, রিকার্শন ডেপথ এবং অপারেশন সংখ্যা টাইম কমপ্লেক্সিটি বাড়ায়; আর ভেরিয়েবল, অ্যারের সাইজ এবং কল-স্ট্যাক স্পেস কমপ্লেক্সিটি বাড়ায়।
৩. লক্ষ্য: আধুনিক কম্পিউটারে মেমরি সহজলভ্য হলেও টাইম কমপ্লেক্সিটি সর্বনিম্ন রাখা প্রধান চ্যালেঞ্জ।`,
      marks: 3,
      yearsAppeared: ["BTEB 2023", "BTEB 2019"],
      isImportant: true,
      subtopicRef: "2.5"
    },
    {
      id: "q2-10",
      type: "songkhipto",
      questionBn: "ডিভাইড অ্যান্ড কনকার (Divide and Conquer) কৌশলের মূলনীতি কী?",
      questionEn: "Explain the concept of Divide and Conquer technique.",
      answerBn: `ডিভাইড অ্যান্ড কনকার একটি সুপরিচিত অ্যালগরিদম ডিজাইন স্ট্র্যাটেজি যা ৩টি ধাপে কাজ করে:
১. Divide (বিভাজন): মূল সমস্যাটিকে একই প্রকৃতির দুই বা ততোধিক ছোট সাব-প্রবলেমে বিভক্ত করা।
২. Conquer (জয় বা সমাধান): সাব-প্রবলেমগুলোকে রিকার্সিভভাবে সমাধান করা।
৩. Combine (একত্রিতকরণ): সমাধানগুলোকে একত্রিত করে মূল সমস্যার চূড়ান্ত সমাধান তৈরি করা।
উদাহরণ: Merge Sort, Quick Sort এবং Binary Search।`,
      marks: 3,
      yearsAppeared: ["BTEB 2022", "BTEB 2018"],
      isImportant: true,
      subtopicRef: "2.6"
    },
    {
      id: "q2-11",
      type: "rochonamulok",
      questionBn: "অ্যাসিম্পটোটিক নোটেশন কী? Big-O, Omega (Ω) এবং Theta (Θ) নোটেশন চিত্রসহ বিস্তারিত ব্যাখ্যা করো।",
      questionEn: "What is Asymptotic Notation? Explain Big-O, Omega and Theta notations with mathematical definitions and diagrams.",
      answerBn: `অ্যাসিম্পটোটিক নোটেশন (Asymptotic Notations):
ইনপুট সাইজ ($n$) যখন অত্যন্ত বড় মানের দিকে ধাবিত হয় ($n \\to \\infty$), তখন কোনো অ্যালগরিদমের সময় ও স্থান জটিলতার বৃদ্ধির হার গাণিতিকভাবে প্রকাশ করার প্রতীকী ভাষাকে অ্যাসিম্পটোটিক নোটেশন বলে।

প্রধান ৩টি অ্যাসিম্পটোটিক নোটেশন নিম্নরূপ:

১. Big-O Notation ($O$ - Worst Case / Upper Bound):
Big-O নোটেশন একটি অ্যালগরিদমের সর্বোচ্চ সম্ভাব্য সময়সীমা নির্ধারণ করে। 
গাণিতিক সংজ্ঞা: $f(n) = O(g(n))$ হবে যদি এমন দুটি ধনাত্মক ধ্রুবক $c > 0$ এবং $n_0 \\ge 1$ পাওয়া যায় যাতে:
$$0 \\le f(n) \\le c \\cdot g(n) \\quad \\text{for all } n \\ge n_0$$
তাৎপর্য: অ্যালগরিদমটি কখনোই $c \\cdot g(n)$ সময়ের বেশি সময় নেবে না।

২. Big-Omega Notation ($\\Omega$ - Best Case / Lower Bound):
Big-Omega নোটেশন একটি অ্যালগরিদমের সর্বনিম্ন সময়সীমা নির্ধারণ করে।
গাণিতিক সংজ্ঞা: $f(n) = \\Omega(g(n))$ হবে যদি এমন ধনাত্মক ধ্রুবক $c > 0$ এবং $n_0 \\ge 1$ বিদ্যমান থাকে যাতে:
$$0 \\le c \\cdot g(n) \\le f(n) \\quad \\text{for all } n \\ge n_0$$
তাৎপর্য: অ্যালগরিদম সম্পন্ন হতে অন্তত $c \\cdot g(n)$ সময় লাগবেই।

৩. Big-Theta Notation ($\\Theta$ - Average Case / Tight Bound):
Big-Theta নোটেশন অ্যালগরিদমের প্রকৃত বা টাইট বাউন্ড নির্ধারণ করে যেখানে আপার বাউন্ড ও লোয়ার বাউন্ড সমান হয়।
গাণিতিক সংজ্ঞা: $f(n) = \\Theta(g(n))$ হবে যদি দুটি ধনাত্মক ধ্রুবক $c_1, c_2 > 0$ এবং $n_0 \\ge 1$ থাকে যাতে:
$$c_1 \\cdot g(n) \\le f(n) \\le c_2 \\cdot g(n) \\quad \\text{for all } n \\ge n_0$$`,
      diagramContent: `        Big-O (Upper Bound)               Big-Omega (Lower Bound)             Big-Theta (Tight Bound)
   Time ▲                             Time ▲                             Time ▲
        │         / c*g(n)                 │             / f(n)               │          / c2*g(n)
        │        /                         │            /                     │         /   / f(n)
        │       /  / f(n)                  │           /  / c*g(n)            │        /   /
        │      /  /                        │          /  /                    │       /   /  / c1*g(n)
        │     /  /                         │         /  /                     │      /   /  /
        └────┴──/────────────────►         └────────┴──/────────────────►     └─────┴───┴──/────────►
             0  n0           n                  0   n0           n              0   n0           n`,
      marks: 5,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2019", "BTEB 2016"],
      isImportant: true,
      subtopicRef: "2.5"
    },
    {
      id: "q2-12",
      type: "rochonamulok",
      questionBn: "অ্যালগরিদম ডিজাইনের বিভিন্ন কৌশলসমূহ (Types of Algorithms) উদাহরণসহ বিস্তারিত বর্ণনা করো।",
      questionEn: "Describe different types of algorithm design techniques with examples.",
      answerBn: `কম্পিউটার সায়েন্সে জটিল সমস্যা সমাধানের জন্য বেশ কিছু সার্বজনীন অ্যালগরিদম ডিজাইন স্ট্র্যাটেজি ব্যবহার করা হয়। নিচে প্রধান পদ্ধতিগুলো বিস্তারিত বর্ণনা করা হলো:

১. ব্রুট ফোর্স পদ্ধতি (Brute Force Technique):
এটি সমস্যা সমাধানের সবচেয়ে সোজাসাপ্টা ও প্রত্যক্ষ কৌশল যেখানে সম্ভাব্য সকল বিকল্প একে একে পরীক্ষা করা হয়।
- বৈশিষ্ট্য: লজিক সহজ, তবে বড় ইনপুটে অত্যন্ত ধীরগতির।
- উদাহরণ: Linear Search ($O(n)$), Naive String Search।

২. ডিভাইড অ্যান্ড কনকার পদ্ধতি (Divide and Conquer):
বড় সমস্যাকে সমজাতীয় ছোট ছোট সাব-প্রবলেমে ভাগ করে আলাদা সমাধান করার পর ফলাফল একত্র করা হয়।
- বৈশিষ্ট্য: টাইম কমপ্লেক্সিটি কমায় এবং প্যারালাল প্রসেসিংয়ের উপযোগী।
- উদাহরণ: Merge Sort ($O(n \\log n)$), Quick Sort, Binary Search ($O(\\log n)$)।

৩. গ্রিডি মেথড (Greedy Method):
ভবিষ্যতের পরিণতি বিবেচনা না করে বর্তমান ধাপে যে সিদ্ধান্তটি সবচেয়ে লাভজনক মনে হয় (Local Optimum), তাৎক্ষণিকভাবে সেটি গ্রহণ করা হয়।
- বৈশিষ্ট্য: অত্যন্ত দ্রুত গতিসম্পন্ন, তবে সকল সমস্যায় নিখুঁত ফলাফল দেয় না।
- উদাহরণ: Fractional Knapsack, Dijkstra's Shortest Path Algorithm, Kruskal's MST।

৪. ডাইনামিক প্রোগ্রামিং (Dynamic Programming):
যখন একটি সমস্যার মধ্যে Overlapping Subproblems থাকে, তখন সাব-প্রবলেমগুলোর সমাধান মেমরি টেবিলে সংরক্ষণ (Memoization/Tabulation) করে পুনরায় ব্যবহার করা হয়।
- বৈশিষ্ট্য: অপ্রয়োজনীয় পুনরাবৃত্তি হিসাব দূর করে এক্সিকিউশন গতি বহুগুণ বৃদ্ধি করে।
- উদাহরণ: 0/1 Knapsack Problem, Floyd-Warshall Algorithm, Fibonacci Sequence।

৫. ব্যাকট্র্যাকিং মেথড (Backtracking):
সমস্যার সমাধানের জন্য বিভিন্ন সম্ভাব্য পথ বা স্টেট অনুসন্ধান করা হয়; যদি কোনো পথ ডেড-এন্ড বা ভুল প্রমাণিত হয়, তবে পেছনের ধাপে ফিরে এসে (Backtrack) বিকল্প পথে আগানো হয়।
- বৈশিষ্ট্য: ট্রায়াল অ্যান্ড এরর ভিত্তিক সম্পূর্ণ সার্চ স্পেস এক্সপ্লোরেশন।
- উদাহরণ: N-Queens Problem, Sudoku Solving, Maze Pathfinding।`,
      marks: 5,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2017", "BTEB 2014"],
      isImportant: true,
      subtopicRef: "2.6"
    }
  ],
  quizQuestions: [
    {
      id: 1,
      questionBn: "'অ্যালগরিদম' শব্দের উৎপত্তি কোন প্রখ্যাত গণিতবিদের নাম থেকে হয়েছে?",
      options: [
        "চার্লস ব্যাবেজ (Charles Babbage)",
        "আল-খোয়ারিজমি (Al-Khwarizmi)",
        "অ্যালান টুরিং (Alan Turing)",
        "জন ভন নিউম্যান (John von Neumann)"
      ],
      correctAnswerIndex: 1,
      explanationBn: "পারস্যের প্রখ্যাত গণিতবিদ আবু জাফর মুহাম্মদ ইবনে মুসা আল-খোয়ারিজমির নাম থেকে ল্যাটিন রূপান্তর হয়ে 'Algorithm' শব্দের উৎপত্তি।",
      topicRef: "2.1"
    },
    {
      id: 2,
      questionBn: "ডোনাল্ড নুথ (Donald Knuth) এর মতে একটি আদর্শ অ্যালগরিদমের মৌলিক বৈশিষ্ট্য কয়টি?",
      options: ["৩টি", "৪টি", "৫টি", "৭টি"],
      correctAnswerIndex: 2,
      explanationBn: "ডোনাল্ড নুথ এর মতে অ্যালগরিদমের ৫টি প্রধান বৈশিষ্ট্য হলো: Input, Output, Finiteness, Definiteness এবং Effectiveness।",
      topicRef: "2.2"
    },
    {
      id: 3,
      questionBn: "ফ্লোচার্টে কন্ডিশন বা সিদ্ধান্ত গ্রহণের জন্য নিচের কোন জ্যামিতিক প্রতীকটি ব্যবহৃত হয়?",
      options: ["আয়তক্ষেত্র (Rectangle)", "ডিম্বাকৃতি (Oval)", "রম্বস বা ডায়মন্ড (Diamond)", "সামান্তরিক (Parallelogram)"],
      correctAnswerIndex: 2,
      explanationBn: "রম্বস বা ডায়মন্ড (Diamond) প্রতীক কোনো শর্ত পরীক্ষা বা সিদ্ধান্ত গ্রহণে ব্যবহৃত হয়, যার দুটি শাখা (Yes/No) থাকে।",
      topicRef: "2.3"
    },
    {
      id: 4,
      questionBn: "নিচের কোন টাইম কমপ্লেক্সিটি সবচেয়ে দ্রুততম ও শ্রেষ্ঠতম পারফরম্যান্স প্রদর্শন করে?",
      options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
      correctAnswerIndex: 3,
      explanationBn: "O(1) বা কনস্ট্যান্ট টাইম কমপ্লেক্সিটি সবচেয়ে দ্রুততম কারণ এটি ইনপুট সাইজের পরিবর্তনের ওপর নির্ভর করে না।",
      topicRef: "2.5"
    },
    {
      id: 5,
      questionBn: "কোনো অ্যালগরিদমের ওর্স্ট কেস (Worst Case) সর্বোচ্চ সীমা প্রকাশে কোন নোটেশনটি ব্যবহৃত হয়?",
      options: ["Big-O (O)", "Big-Omega (Ω)", "Big-Theta (Θ)", "Little-o (o)"],
      correctAnswerIndex: 0,
      explanationBn: "Big-O Notation কোনো অ্যালগরিদমের ওর্স্ট কেস আপার বাউন্ড বা সর্বোচ্চ সময়সীমা প্রকাশ করে।",
      topicRef: "2.5"
    },
    {
      id: 6,
      questionBn: "Divide and Conquer কৌশলে কাজ করে নিচের কোন অ্যালগরিদমটি?",
      options: ["Bubble Sort", "Linear Search", "Merge Sort", "Selection Sort"],
      correctAnswerIndex: 2,
      explanationBn: "Merge Sort এবং Quick Sort হলো বিখ্যাত ডিভাইড অ্যান্ড কনকার অ্যালগরিদম।",
      topicRef: "2.6"
    },
    {
      id: 7,
      questionBn: "ডাইনামিক প্রোগ্রামিং (Dynamic Programming) এর প্রধান মূলনীতি কোনটি?",
      options: [
        "সব বিকল্প অন্ধভাবে ট্রাই করা",
        "সাব-প্রবলেমের ফলাফল মেমরি টেবিলে সংরক্ষণ ও পুনঃব্যবহার করা",
        "সবসময় তাৎক্ষণিক সবচেয়ে লোভনীয় সিদ্ধান্ত নেওয়া",
        "কোনো মেমরি ব্যবহার না করা"
      ],
      correctAnswerIndex: 1,
      explanationBn: "ডাইনামিক প্রোগ্রামিং মেমোইজেশন বা ট্যাবুলার আকারে উপ-সমস্যার সমাধান সংরক্ষণ করে重复 হিসাব দূর করে।",
      topicRef: "2.6"
    },
    {
      id: 8,
      questionBn: "একটি অ্যালগরিদমে যদি দুটি নেস্টেড লুপ (Nested Loop) প্রতিটিতে n বার ঘুরে, তবে তার টাইম কমপ্লেক্সিটি কত হবে?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
      correctAnswerIndex: 2,
      explanationBn: "বাইরের লুপ n বার এবং ভেতরের লুপ n বার চললে মোট এক্সিকিউশন সংখ্যা n * n = n², অর্থাৎ O(n²)।",
      topicRef: "2.5"
    }
  ]
};

export const CHAPTER_3_DATA: Chapter = {
  id: 3,
  code: "28542-CH03",
  titleBn: "অ্যারে, পয়েন্টার এবং স্ট্রিং (Arrays, Pointers and Strings)",
  titleEn: "Arrays, Pointers and Strings",
  status: "complete",
  learningObjectives: [
    "অ্যারে (Array), পয়েন্টার (Pointer) এবং স্ট্রিং (String) এর মৌলিক সংজ্ঞা ও মেমরি সংগঠন অনুধাবন করা।",
    "একমাত্রিক (1D), দ্বিমাত্রিক (2D) এবং বহুমাত্রিক (Multi-dimensional) অ্যারের চিত্রসহ মেমরি ম্যাপিং এবং Row-Major ও Column-Major অ্যাড্রেস নির্ণয়ের গাণিতিক সূত্র প্রয়োগ করতে পারা।",
    "পয়েন্টারের ডিক্লারেশন, ইনিশিয়ালাইজেশন, রেফারেন্সিং (`&`), ডিরেফারেন্সিং (`*`) এবং পয়েন্টার এরিথমেটিক ব্যাখ্যা করা।",
    "নাল ক্যারেক্টার (`'\\0'`) সহ স্ট্রিং ডিক্লারেশন এবং মেমরি ইনিশিয়ালাইজেশনের নিয়মাবলি জানা।",
    "স্ট্যান্ডার্ড স্ট্রিং অপারেশনসমূহ (`strlen`, `strcpy`, `strcat`, `strcmp`, `strrev`) উদাহরণসহ বাস্তবায়ন করতে পারা।",
    "অ্যারেতে ট্রাভার্সিং (Traversing), ইনসার্টিং (Inserting) এবং ডিলিটিং (Deleting) অপারেশনের অ্যালগরিদম ও ওভারফ্লো/আন্ডারফ্লো শর্তাদি প্রস্তুত করতে পারা।"
  ],
  subtopics: [
    {
      id: "3.1",
      titleBn: "অ্যারে, পয়েন্টার এবং স্ট্রিং এর সংজ্ঞা",
      titleEn: "Define Array, Pointer and String",
      concept: `ডাটা স্ট্রাকচারে ডাটা সংরক্ষণ এবং সরাসরি মেমরি নিয়ন্ত্রণের জন্য অ্যারে, পয়েন্টার এবং স্ট্রিং হলো তিনটি সর্বাধিক গুরুত্বপূর্ণ ভিত্তি:

১. অ্যারে (Array):
একই ডাটা টাইপবিশিষ্ট (Homogeneous) কতগুলো ভেরিয়েবল বা উপাদানের ধারাবাহিক (Contiguous) মেমরি ব্লকে সংরক্ষিত সুশৃঙ্খল সংগ্রহকে অ্যারে বলা হয়। অ্যারের প্রতিটি উপাদানকে একটি সাধারণ নাম এবং একটি পূর্ণসংখ্যা সূচক বা ইনডেক্স (Index/Subscript) দ্বারা নির্দেশ করা হয়।

২. পয়েন্টার (Pointer):
পয়েন্টার হলো একটি বিশেষ ধরনের চলক বা ভেরিয়েবল, যা অন্য কোনো চলকের মেমরি অ্যাড্রেস (Memory Address বা Location) ধারণ ও সংরক্ষণ করে। পয়েন্টারের সাহায্যে কম্পিউটারের র্যামে (RAM) সংরক্ষিত মেমরি অ্যাড্রেসকে সরাসরি রিড ও রাইট করা যায়।

৩. স্ট্রিং (String):
প্রোগ্রামিংয়ে কতগুলো বর্ণের বা অক্ষরের ধারাবাহিক ক্রমকে (Sequence of characters) স্ট্রিং বলা হয়। সি ল্যাঙ্গুয়েজে স্ট্রিং মূলত একটি এক-মাত্রিক ক্যারেক্টার অ্যারে (1D Character Array), যার সমাপ্তি চিহ্নিত হয় একটি বিশেষ নাল ক্যারেক্টার (\`'\\0'\` বা ASCII মান 0) দ্বারা।`,
      realLifeAnalogy: `১. অ্যারে: একটি ট্রেনের পাশাপাশি সংযুক্ত সমান বগিগুলোর মতো, যেখানে প্রতিটি বগির একটি নির্দিষ্ট নম্বর (Index 0, 1, 2...) থাকে।
২. পয়েন্টার: আপনার হাতের একটি নির্দেশক তীর বা বন্ধুর বাড়ির ঠিকানার কার্ডের মতো—যা বাড়িটি নয়, কিন্তু বাড়ির সঠিক লোকেশন নির্দেশ করে।
৩. স্ট্রিং: একটি সুতোয় গাঁথা পুঁথির মালার মতো, যার প্রতিটি পুঁতি হলো একেকটি অক্ষর এবং মালার গিটটি হলো নাল ক্যারেক্টার (\`'\\0'\`)।`,
      technicalDetails: `মেমরিতে এদের আর্কিটেকচার:
- অ্যারে মেমরিতে Contiguous বা লাগোয়া ব্লকে অবস্থান করে। ফলে ইনডেক্স ব্যবহার করে $O(1)$ কনস্ট্যান্ট সময়ে উপাদান অ্যাক্সেস করা যায়।
- পয়েন্টার মেমরিতে সাধারণত আর্কিটেকচার অনুযায়ী ৪ বাইট (32-bit OS) বা ৮ বাইট (64-bit OS) দখল করে।
- স্ট্রিং এর আকার সর্বদা ক্যারেক্টার সংখ্যার চেয়ে ১ বাইট বেশি হয় নাল টার্মিনেটরের (\`'\\0'\`) জন্য।`,
      diagramType: "ascii",
      diagramContent: ` ┌────────────────────────────────────────────────────────────────────────┐
 │                      Array, Pointer & String in RAM                    │
 ├────────────────────────────────────────────────────────────────────────┤
 │ 1. Array:    int arr[4] = {10, 20, 30, 40};                            │
 │              Index:       [0]      [1]      [2]      [3]               │
 │              Value:     ┌──────┬──────┬──────┬──────┐                  │
 │                         │  10  │  20  │  30  │  40  │                  │
 │              Address:   └──────┴──────┴──────┴──────┘                  │
 │                          0x1000 0x1004 0x1008 0x100C  (4-Bytes each)   │
 ├────────────────────────────────────────────────────────────────────────┤
 │ 2. Pointer:  int x = 25;  int *ptr = &x;                               │
 │              Variable x:       Pointer ptr:                            │
 │              Value:   [ 25 ]   Value: [ 0x2000 ] ──► (Points to x)     │
 │              Address: 0x2000   Address: 0x7FFF                         │
 ├────────────────────────────────────────────────────────────────────────┤
 │ 3. String:   char str[] = "BTEB";                                      │
 │              Indices:    [0]   [1]   [2]   [3]   [4]                   │
 │              Chars:    ┌─────┬─────┬─────┬─────┬─────┐                 │
 │                        │ 'B' │ 'T' │ 'E' │ 'B' │'\\0'│ (Null Terminator)│
 │                        └─────┴─────┴─────┴─────┴─────┘                 │
 └────────────────────────────────────────────────────────────────────────┘`,
      keyPoints: [
        "অ্যারে উপাদানগুলোর ডাটা টাইপ অবশ্যই সমজাতীয় (Homogeneous) হতে হবে।",
        "পয়েন্টার সর্বদা মেমরি লোকেশনের হেক্সাডেসিমেল বা পূর্ণসংখ্যা অ্যাড্রেস স্টোর করে।",
        "সি স্ট্রিংয়ের শেষে স্বয়ংক্রিয়ভাবে একটি '\\0' (Null character) যুক্ত হয়।"
      ]
    },
    {
      id: "3.2",
      titleBn: "অ্যারের বিভিন্ন ডাইমেনশন ও মেমরি অ্যাড্রেস গণনা",
      titleEn: "Mention different dimension of array with diagram",
      concept: `উপাদানগুলোর বিন্যাস ও প্রয়োজনীয় সূচকের (Index/Subscript) সংখ্যার ওপর ভিত্তি করে অ্যারেকে বিভিন্ন মাত্রায় বা ডাইমেনশনে বিভক্ত করা হয়:

১. একমাত্রিক অ্যারে (1D / Linear Array):
যে অ্যারেতে উপাদানগুলো একটি একক সারিতে সংরক্ষিত থাকে এবং উপাদান অ্যাক্সেস করতে কেবল একটি ইনডেক্স প্রয়োজন হয়।
- সিনট্যাক্স: \`data_type array_name[size];\` (যেমন: \`int A[5];\`)

২. দ্বিমাত্রিক অ্যারে (2D Array / Matrix):
যে অ্যারেতে উপাদানগুলো সারি (Row) এবং কলাম (Column) এর সমন্বয়ে একটি ছক বা ম্যাট্রিক্স আকারে সাজানো থাকে এবং উপাদান অ্যাক্সেস করতে দুটি সূচক প্রয়োজন হয় (\`A[row][col]\`)।
- সিনট্যাক্স: \`data_type array_name[rows][cols];\` (যেমন: \`int M[3][4];\`)

৩. বহুমাত্রিক অ্যারে (Multi-Dimensional / 3D+ Array):
যে অ্যারেতে উপাদান অ্যাক্সেস করতে তিন বা ততোধিক সূচক প্রয়োজন হয় (যেমন: 3D অ্যারে \`int cube[2][3][4];\`)।`,
      realLifeAnalogy: `১D অ্যারে হলো একটি সোজা কাগজের স্কেল বা সিঙ্গেল রো বুকশেলফ। ২D অ্যারে হলো ক্লাসরুমের টেবিল-বেঞ্চের ছক বা দাবা খেলার বোর্ড (৮ সারি × ৮ কলাম)। আর ৩D অ্যারে হলো একটি বহুতল ভবনের প্রতিটি ফ্লোরের প্রতিটি ফ্ল্যাটের প্রতিটি রুমের তালিকা!`,
      technicalDetails: `কম্পিউটারের র‍্যাম (RAM) লিনিয়ার বা ১-মাত্রিক। তাই ২D অ্যারেকে মেমরিতে স্টোর করার জন্য দুটি আন্তর্জাতিক কৌশল ব্যবহৃত হয়:

ক. রো-মেজর অর্ডার (Row-Major Order):
প্রথম সারির সকল উপাদান মেমরিতে পাশাপাশি স্টোর করা হয়, এরপর দ্বিতীয় সারি, তারপর তৃতীয় সারি ইত্যাদি। (সি, পাইথন, জাভা এই পদ্ধতি ব্যবহার করে)।
গাণিতিক সূত্র (২D অ্যারে $A[M \\times N]$ এর $A[j, k]$ এর অ্যাড্রেস):
$$\\text{LOC}(A[j, k]) = \\text{Base}(A) + w [N(j - \\text{LB}_1) + (k - \\text{LB}_2)]$$
যেখানে:
- $\\text{Base}(A) =$ অ্যারের প্রথম উপাদানের শুরুর অ্যাড্রেস
- $w =$ প্রতি উপাদানের বাইট সাইজ (যেমন: \`int\` এর জন্য $w = 4$)
- $N =$ কলাম সংখ্যা (কলাম রেঞ্জ: $\\text{UB}_2 - \\text{LB}_2 + 1$)
- $\\text{LB}_1, \\text{LB}_2 =$ রো ও কলামের লোয়ার বাউন্ড (সাধারণত 0)

খ. কলাম-মেজর অর্ডার (Column-Major Order):
প্রথম কলামের সকল উপাদান ক্রমানুসারে মেমরিতে রাখার পর দ্বিতীয় কলাম রাখা হয় (ফরট্রান ও ম্যাটল্যাব ব্যবহার করে)।
গাণিতিক সূত্র:
$$\\text{LOC}(A[j, k]) = \\text{Base}(A) + w [(j - \\text{LB}_1) + M(k - \\text{LB}_2)]$$
যেখানে $M =$ সারি সংখ্যা (Row count)।`,
      diagramType: "ascii",
      diagramContent: `┌────────────────────────────────────────────────────────────────────────┐
│               2D Array Memory Mapping: Row-Major vs Col-Major          │
├────────────────────────────────────────────────────────────────────────┤
│ Logical 2D Matrix (2 Rows x 3 Cols):                                   │
│            Col 0   Col 1   Col 2                                       │
│    Row 0: ┌──────┬───────┬──────┐                                      │
│           │ A[0,0]│ A[0,1]│ A[0,2]│                                    │
│    Row 1: ├──────┼───────┼──────┤                                      │
│           │ A[1,0]│ A[1,1]│ A[1,2]│                                    │
│           └──────┴───────┴──────┘                                      │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Row-Major Storage in RAM:                                           │
│  ┌────────┬────────┬────────┬────────┬────────┬────────┐               │
│  │ A[0,0] │ A[0,1] │ A[0,2] │ A[1,0] │ A[1,1] │ A[1,2] │               │
│  └────────┴────────┴────────┴────────┴────────┴────────┘               │
│  ◄─────── Row 0 ───────────► ◄─────── Row 1 ───────────►               │
├────────────────────────────────────────────────────────────────────────┤
│ 2. Column-Major Storage in RAM:                                        │
│  ┌────────┬────────┬────────┬────────┬────────┬────────┐               │
│  │ A[0,0] │ A[1,0] │ A[0,1] │ A[1,1] │ A[0,2] │ A[1,2] │               │
│  └────────┴────────┴────────┴────────┴────────┴────────┘               │
│  ◄───── Col 0 ─────► ◄───── Col 1 ─────► ◄───── Col 2 ─────►           │
└────────────────────────────────────────────────────────────────────────┘`,
      tableData: {
        headers: ["বৈশিষ্ট্য / তুলনার বিষয়", "একমাত্রিক অ্যারে (1D)", "দ্বিমাত্রিক অ্যারে (2D Matrix)", "বহুমাত্রিক অ্যারে (3D+)"],
        rows: [
          ["সূচকের সংখ্যা", "১টি সাবস্ক্রিপ্ট (\`A[i]\`)", "২টি সাবস্ক্রিপ্ট (\`A[i][j]\`)", "৩ বা ততোধিক সাবস্ক্রিপ্ট (\`A[i][j][k]\`)"],
          ["কাঠামো", "রৈখিক বা সরল তালিকা।", "সারণি, গ্রিড বা ম্যাট্রিক্স (Rows × Columns)।", "ঘনক বা বহুস্তরীয় ভলিউম।"],
          ["অ্যাড্রেস গণনা সূত্র", "$\\text{Base} + w(i - \\text{LB})$", "Row/Col Major ফর্মুলা", "মাল্টি-ডাইমেনশনাল প্রোডাক্ট ফর্মুলা"],
          ["প্রয়োগের ক্ষেত্র", "নম্বর তালিকা, ভেক্টর, সাধারণ স্টোরেজ।", "ইমেজ পিক্সেল, গ্রাফ অ্যাডজাসেন্সি ম্যাট্রিক্স।", "৩D গ্রাফিক্স, ভিডিও ফ্রেম, টেন্সর।"]
        ]
      },
      keyPoints: [
        "1D অ্যারেতে উপাদান গণনা: $\\text{Length} = \\text{UB} - \\text{LB} + 1$।",
        "BTEB বোর্ড পরীক্ষায় Row-Major ও Column-Major এর অ্যাড্রেস বের করার গাণিতিক সমস্যা প্রায়শই আসে।",
        "সি ল্যাঙ্গুয়েজ সর্বদা Row-Major Order অনুসরণ করে।"
      ]
    },
    {
      id: "3.3",
      titleBn: "পয়েন্টারের ডিক্লারেশন ও ইনিশিয়ালাইজেশন",
      titleEn: "Explain the initialization of Pointer",
      concept: `মেমরির কোনো নির্দিষ্ট ভেরিয়েবলের অ্যাড্রেসকে ধারণ করে তা সরাসরি নিয়ন্ত্রণের জন্য পয়েন্টার ব্যবহৃত হয়। পয়েন্টার ব্যবহারের দুটি অপরিহার্য পর্যায় রয়েছে:
১. পয়েন্টার ঘোষণা বা ডিক্লারেশন (Declaration): কম্পাইলারকে জানানো যে চলকটি একটি নির্দিষ্ট ডাটা টাইপের পয়েন্টার।
২. পয়েন্টার প্রারম্ভিকীকরণ বা ইনিশিয়ালাইজেশন (Initialization): পয়েন্টার চলকটিতে কোনো বৈধ ভেরিয়েবলের মেমরি অ্যাড্রেস বরাদ্দ করা।`,
      realLifeAnalogy: `পয়েন্টার ডিক্লেয়ার করা মানে একটি 'লেবেলহীন ঠিকানা লেখার খাম' তৈরি করা। আর ইনিশিয়ালাইজ করা মানে খামের উপর বন্ধুর বাসার সঠিক 'বাড়ি নম্বর ও রোড নম্বর' লিখে দেওয়া।`,
      technicalDetails: `ক. সিনট্যাক্স ও দুটি মৌলিক অপারেটর:
১. রেফারেন্স অপারেটর / অ্যাড্রেস-অফ অপারেটর (\`&\`): কোনো সাধারণ ভেরিয়েবলের মেমরি অ্যাড্রেস খুঁজে বের করতে ব্যবহৃত হয়।
২. ডিরেফারেন্স অপারেটর / ইনডিরেকশন অপারেটর (\`*\`): পয়েন্টার যে অ্যাড্রেস নির্দেশ করছে, সেই অ্যাড্রেসে সংরক্ষিত মূল মানটি (Value at address) পড়া বা পরিবর্তন করতে ব্যবহৃত হয়।

খ. নাল পয়েন্টার (NULL Pointer):
যে পয়েন্টার কোনো মেমরি লোকেশনকে নির্দেশ করে না, তাকে নাল পয়েন্টার বলে (\`int *ptr = NULL;\`)। এটি ওয়াইল্ড পয়েন্টার (Wild Pointer) বা মেমরি ক্র্যাশ রোধ করে।

গ. পয়েন্টার এরিথমেটিক (Pointer Arithmetic):
পয়েন্টারের সাথে ১ যোগ (\`ptr + 1\`) করলে পয়েন্টারটি পরবর্তী বাইটে যায় না, বরং তার ডাটা টাইপের সাইজ পরিমাণ বাইট সামনে এগিয়ে যায় (যেমন: \`int*\` হলে ৪ বাইট বৃদ্ধি পায়)।`,
      diagramType: "ascii",
      diagramContent: `           ┌─────────────────────────────────────────────────────────┐
           │            Pointer Operation & Dereferencing            │
           └─────────────────────────────────────────────────────────┘
                   
           Variable: age = 22                 Pointer: ptr = &age
           ┌────────────────┐                 ┌────────────────┐
           │ Value:   22    │◄────────────────│ Value:  0x30A0 │
           ├────────────────┤                 ├────────────────┤
           │ Addr:   0x30A0 │                 │ Addr:   0x7FFE │
           └────────────────┘                 └────────────────┘
           
           *ptr  = 22      (Dereference: Access value stored at 0x30A0)
           ptr   = 0x30A0  (Address stored in pointer)
           &ptr  = 0x7FFE  (Own address of the pointer variable)`,
      keyPoints: [
        "\`int *ptr;\` ঘোষণা করে যে \`ptr\` একটি পূর্ণসংখ্যার মেমরি অ্যাড্রেস রাখবে।",
        "\`ptr = &var;\` দিয়ে ভেরিয়েবলের অ্যাড্রেস পয়েন্টারে অ্যাসাইন করা হয়।",
        "\`*ptr = 50;\` লিখলে স্বয়ংক্রিয়ভাবে \`var\` এর মান পরিবর্তিত হয়ে ৫০ হয়ে যায়।"
      ],
      syntaxOrFormulas: [
        {
          label: "C Language Pointer Demonstration",
          lang: "c",
          codeOrFormula: `int number = 100;       // Regular integer variable
int *ptr;               // Pointer declaration
ptr = &number;          // Pointer initialization with address of number

printf("Value of number    : %d\\n", number);  // 100
printf("Address of number  : %p\\n", &number); // e.g., 0x7ffd5e
printf("Address in pointer : %p\\n", ptr);     // 0x7ffd5e
printf("Value via pointer  : %d\\n", *ptr);    // 100 (Dereferencing)

*ptr = 250;             // Modifying value via pointer
printf("Modified number    : %d\\n", number);  // 250`
        }
      ]
    },
    {
      id: "3.4",
      titleBn: "স্ট্রিং ডিক্লারেশন এবং ইনিশিয়ালাইজেশন",
      titleEn: "Explain String declaration and initialization",
      concept: `সি প্রোগ্রামিং ভাষায় নিজস্ব কোনো প্রিমিটিভ 'string' ডাটা টাইপ নেই। তাই ক্যারেক্টার অ্যারে (Character Array) অথবা ক্যারেক্টার পয়েন্টার (Character Pointer) এর সাহায্যে স্ট্রিং তৈরি করা হয়। 

স্ট্রিংয়ের সবচেয়ে গুরুত্বপূর্ণ বৈশিষ্ট্য হলো এর সমাপ্তিতে সর্বদা একটি নাল ক্যারেক্টার (\`'\\0'\`) থাকতে হয়, যা কম্পাইলারকে নির্দেশ করে যে স্ট্রিংটি এখানে সমাপ্ত হয়েছে।`,
      realLifeAnalogy: `একটি বাক্যের শেষে যেমন 'দাঁড়ি' বা 'ফুলস্টপ' দেখে বোঝা যায় বাক্যটি শেষ হয়েছে, তেমনি মেমরিতে নাল ক্যারেক্টার \`'\\0'\` দেখে কম্পিউটার বোঝে যে স্ট্রিংটির শেষ সীমানা এটিই।`,
      technicalDetails: `স্ট্রিং ডিক্লারেশন ও ইনিশিয়ালাইজেশনের বিভিন্ন রূপভেদ:

১. ডাবল কোটেশন ব্যবহার করে (স্বয়ংক্রিয়ভাবে \`'\\0'\` যুক্ত হয়):
\`char str[] = "BANGLADESH";\` (মেমরি সাইজ: ১১ বাইট)

২. একক ক্যারেক্টার অ্যারে আকারে (ম্যানুয়ালি \`'\\0'\` দিতে হয়):
\`char str[5] = {'B', 'T', 'E', 'B', '\\0'};\``,
      keyPoints: [
        "নাল ক্যারেক্টারের ASCII মান হলো 0 (Zero)।",
        "স্ট্রিংয়ের সাইজ নির্ধারণে নাল ক্যারেক্টারের জন্য অতিরিক্ত ১ বাইট হিসাব করতে হয়।",
        "পয়েন্টার দিয়ে ডিক্লেয়ার করলে স্ট্রিং লিটারেল সাধারণত Read-Only মেমরিতে থাকে।"
      ],
      syntaxOrFormulas: [
        {
          label: "String Declaration in C",
          lang: "c",
          codeOrFormula: `char dept[20] = "Computer";         // Character Array with fixed size
char board[] = "BTEB 2022";          // Size automatically allocated (10 bytes)
char *msg = "Data Structure Lab";    // String Pointer`
        }
      ]
    },
    {
      id: "3.5",
      titleBn: "স্ট্রিং এর বিভিন্ন অপারেশনসমূহ",
      titleEn: "Describe the operations of String with example",
      concept: `স্ট্রিং নিয়ে কাজ করার জন্য সি ল্যাঙ্গুয়েজের স্ট্যান্ডার্ড লাইব্রেরি \`<string.h>\`-এ বেশ কিছু শক্তিশালী বিল্ট-ইন ফাংশন রয়েছে। এই অপারেশনগুলোর মাধ্যমে স্ট্রিংয়ের দৈর্ঘ্য পরিমাপ, কপি, কনক্যাটেনেশন (যুক্তকরণ), তুলনা এবং বিপরীতকরণ করা যায়।`,
      realLifeAnalogy: `১. দৈর্ঘ্য মাপা (\`strlen\`): একটি ফিতা দিয়ে কাপড়ের দৈর্ঘ্য মাপা।
২. কপি করা (\`strcpy\`): একটি দলিলের হুবহু ফটোকপি করা।
৩. কনক্যাটেনেশন (\`strcat\`): নামের প্রথম অংশ 'মোঃ' এর সাথে শেষ অংশ 'করিম' জোড়া দিয়ে 'মোঃ করিম' বানানো।
৪. তুলনা (\`strcmp\`): দুটি পাসওয়ার্ড হুবহু মিলেছে কিনা ডিকশনারি ক্রমে যাচাই করা।`,
      technicalDetails: `প্রধান ৫টি স্ট্রিং অপারেশন:

১. \`strlen(str)\`: স্ট্রিংয়ের মোট অক্ষরের সংখ্যা গণনা করে (নাল ক্যারেক্টার বাদ দিয়ে)।
২. \`strcpy(dest, src)\`: \`src\` স্ট্রিংটিকে \`dest\` এ কপি করে প্রতিস্থাপন করে।
৩. \`strcat(str1, str2)\`: \`str1\` এর শেষে \`str2\` কে যুক্ত (Concatenate) করে।
৪. \`strcmp(str1, str2)\`: দুটি স্ট্রিংয়ের মধ্যে ASCII মানের ভিত্তিতে তুলনা করে:
   - 0: দুটি স্ট্রিং সমান।
   - > 0: \`str1\` বড়।
   - < 0: \`str2\` বড়।
৫. \`strrev(str)\`: স্ট্রিংটিকে উল্টো দিক থেকে সাজিয়ে বিপরীত (Reverse) করে।`,
      tableData: {
        headers: ["ফাংশনের নাম", "উদ্দেশ্য (Purpose)", "সিনট্যাক্স", "উদাহরণ ও আউটপুট"],
        rows: [
          ["\`strlen()\`", "স্ট্রিংয়ের দৈর্ঘ্য বের করা।", "\`int len = strlen(s);\`", "\`strlen(\"BTEB\")\` ➔ 4"],
          ["\`strcpy()\`", "এক স্ট্রিং অন্য স্ট্রিংয়ে কপি করা।", "\`strcpy(target, source);\`", "\`target\` এ \`source\` এর মান বসবে"],
          ["\`strcat()\`", "দুটি স্ট্রিং জোড়া লাগানো।", "\`strcat(s1, s2);\`", "\"Poly\" + \"technic\" ➔ \"Polytechnic\""],
          ["\`strcmp()\`", "দুটি স্ট্রিংয়ের সমতা তুলনা করা।", "\`int r = strcmp(s1, s2);\`", "সমান হলে 0, অসমান হলে ধনাত্মক/ঋণাত্মক"],
          ["\`strrev()\`", "স্ট্রিং রিভার্স বা উল্টানো।", "\`strrev(s);\`", "\"DATA\" ➔ \"ATAD\""]
        ]
      },
      keyPoints: [
        "সবগুলো স্ট্রিং ফাংশন ব্যবহার করতে প্রোগ্রামে \`#include <string.h>\` হেডার যুক্ত করতে হয়।",
        "\`strcat()\` করার সময় প্রথম স্ট্রিংয়ে দ্বিতীয় স্ট্রিং ধারণের পর্যাপ্ত মেমরি স্পেস থাকতে হবে।"
      ],
      syntaxOrFormulas: [
        {
          label: "String Operations in C",
          lang: "c",
          codeOrFormula: `#include <stdio.h>
#include <string.h>

int main() {
    char str1[50] = "Data ";
    char str2[] = "Structure";
    char copyStr[50];

    printf("Length of str1: %lu\\n", strlen(str1));
    strcat(str1, str2);     // str1 becomes "Data Structure"
    printf("After strcat : %s\\n", str1);

    strcpy(copyStr, str1);  // Copies to copyStr
    printf("After strcpy : %s\\n", copyStr);

    return 0;
}`
        }
      ]
    },
    {
      id: "3.6",
      titleBn: "অ্যারে ট্রাভার্সিং অ্যালগরিদম",
      titleEn: "Write an algorithm for traversing in array",
      concept: `একটি লিনিয়ার অ্যারের প্রথম উপাদান (Index 0 বা Lower Bound) থেকে শুরু করে শেষ উপাদান (Upper Bound) পর্যন্ত প্রতিটি উপাদানকে সুনির্দিষ্টভাবে কমপক্ষে একবার করে পরিদর্শন বা প্রসেস (যেমন: প্রিন্ট করা, যোগ করা বা গুণ করা) করার প্রক্রিয়াকে অ্যারে ট্রাভার্সিং বলে।`,
      realLifeAnalogy: `ক্লাসে শিক্ষক যখন হাজিরা খাতা দেখে ১ নম্বর রোল থেকে শুরু করে শেষ রোল পর্যন্ত প্রত্যেকের নাম ধরে ডাকেন এবং উপস্থিতি মার্ক করেন, এটিই হলো বাস্তব জীবনের ট্রাভার্সিং।`,
      technicalDetails: `অ্যারে ট্রাভার্সিংয়ের নিয়মাবলী:
- একটি লুপ কাউন্টার ভেরিয়েবল \`K\` কে লোয়ার বাউন্ড \`LB\` তে সেট করা হয়।
- প্রতিটি পদক্ষেপে উপাদান \`A[K]\` প্রসেস করা হয়।
- কাউন্টার \`K\` এর মান ১ বৃদ্ধি করা হয় যতক্ষণ না তা আপার বাউন্ড \`UB\` অতিক্রম করে।
- টাইম কমপ্লেক্সিটি: $O(n)$
- স্পেস কমপ্লেক্সিটি: $O(1)$`,
      keyPoints: [
        "ট্রাভার্সিং অপারেশনে কোনো উপাদান বাদ পড়ে না বা দুবার প্রসেস হয় না।",
        "টাইম কমপ্লেক্সিটি লিনিয়ার বা $O(n)$।"
      ],
      syntaxOrFormulas: [
        {
          label: "Formal Algorithm: Array Traversing",
          lang: "c",
          codeOrFormula: `Algorithm: TRAVERSE(LA, LB, UB)
[Here LA is a linear array with lower bound LB and upper bound UB]
Step 1: [Initialize counter]
        Set K := LB
Step 2: [Loop through all elements]
        Repeat Step 3 while K <= UB:
Step 3:     [Apply operation to element]
            Apply PROCESS to LA[K]
            [Increment counter]
            Set K := K + 1
        [End of Step 2 Loop]
Step 4: [Exit]
        Exit`
        }
      ]
    },
    {
      id: "3.7",
      titleBn: "অ্যারেতে নতুন উপাদান ইনসার্ট ও ডিলিট অ্যালগরিদম",
      titleEn: "Write an algorithm for inserting and deleting element of array",
      concept: `১. ইনসার্ট অপারেশন (Inserting):
বিদ্যমান কোনো লিনিয়ার অ্যারের যেকোনো কাঙ্ক্ষিত অবস্থানে (শুরুতে, মাঝে বা শেষে) একটি নতুন ডাটা উপাদান যুক্ত করা। মাঝে বা শুরুতে ইনসার্ট করতে হলে ওই অবস্থানের ডানপাশের সকল উপাদানকে এক ঘর করে ডানদিকে স্থানান্তর (Right Shift) করতে হয়।
- শর্ত: মেমরি পূর্ণ থাকলে 'Overflow' ঘটবে।

২. ডিলিট অপারেশন (Deleting):
অ্যারের নির্দিষ্ট অবস্থান থেকে কোনো উপাদান মুছে ফেলা। উপাদান মুছে নেওয়ার পর ফাঁকা স্থান পূরণ করতে তার ডানপাশের সকল উপাদানকে এক ঘর করে বামদিকে স্থানান্তর (Left Shift) করতে হয়।
- শর্ত: অ্যারে শূন্য থাকলে 'Underflow' ঘটবে।`,
      realLifeAnalogy: `একটি সোফায় ৫ জন পাশাপাশি বসে আছেন। যদি ৩ নম্বর পজিশনে একজন নতুন মানুষ বসতে চায়, তবে ৩, ৪ ও ৫ নম্বরে থাকা ব্যক্তিদের ডানদিকে ১ সিট করে সরে যেতে হবে (Insertion)। আর যদি ৩ নম্বর ব্যক্তি উঠে চলে যান, তবে ফাঁকা সিট পূরণ করতে পেছনের ব্যক্তিরা ১ সিট করে বামে সরে আসবেন (Deletion)।`,
      technicalDetails: `ইনসার্ট ও ডিলিট অপারেশনের টাইম কমপ্লেক্সিটি:
- ওর্স্ট কেস (শুরুতে ইনসার্ট/ডিলিট): $O(n)$ কারণ $n$ টি উপাদান শিফট করতে হয়।
- বেস্ট কেস (শেষে ইনসার্ট/ডিলিট): $O(1)$ কোনো শিফটিং লাগে না।`,
      diagramType: "ascii",
      diagramContent: ` ┌────────────────────────────────────────────────────────────────────────┐
 │                   Array Insertion & Deletion Mechanics                 │
 ├────────────────────────────────────────────────────────────────────────┤
 │ 1. Insertion at Index 2 with ITEM = 99:                                │
 │    Original: [10, 20, 30, 40]                                          │
 │    Step 1: Shift right from end -> [10, 20, __, 30, 40]                │
 │    Step 2: Insert ITEM at Index 2 -> [10, 20, 99, 30, 40] (N = N + 1)  │
 ├────────────────────────────────────────────────────────────────────────┤
 │ 2. Deletion at Index 1:                                                │
 │    Original: [10, 20, 99, 30, 40]                                      │
 │    Step 1: Remove value 20                                             │
 │    Step 2: Shift left from Index 2 -> [10, 99, 30, 40]    (N = N - 1)  │
 └────────────────────────────────────────────────────────────────────────┘`,
      keyPoints: [
        "ইনসার্ট করার পূর্বে অ্যারে পূর্ণ কিনা (Overflow) চেক করা বাধ্যতামূলক।",
        "ডিলিট করার পূর্বে অ্যারে শূন্য কিনা (Underflow) চেক করা আবশ্যক।",
        "মাঝখানে ইনসার্টে Right Shift এবং ডিলিটে Left Shift সংঘটিত হয়।"
      ],
      syntaxOrFormulas: [
        {
          label: "Algorithm: Array Insertion",
          lang: "c",
          codeOrFormula: `Algorithm: INSERT(LA, N, K, ITEM)
[Here LA is Linear Array, N is number of elements, K is positive position, ITEM is new value]
Step 1: [Check Overflow]
        If N >= MAX_SIZE then:
            Print "Overflow Error: Array is Full"
            Exit
Step 2: [Initialize counter for right shift]
        Set J := N - 1
Step 3: [Shift elements to the right]
        Repeat while J >= K:
            Set LA[J + 1] := LA[J]
            Set J := J - 1
        [End of Loop]
Step 4: [Insert Element]
        Set LA[K] := ITEM
Step 5: [Update size]
        Set N := N + 1
Step 6: Exit`
        },
        {
          label: "Algorithm: Array Deletion",
          lang: "c",
          codeOrFormula: `Algorithm: DELETE(LA, N, K, ITEM)
[Here LA is Linear Array, N is number of elements, K is position to delete]
Step 1: [Check Underflow]
        If N <= 0 then:
            Print "Underflow Error: Array is Empty"
            Exit
Step 2: [Save deleted item]
        Set ITEM := LA[K]
Step 3: [Shift elements to the left]
        Set J := K
        Repeat while J < N - 1:
            Set LA[J] := LA[J + 1]
            Set J := J + 1
        [End of Loop]
Step 4: [Update size]
        Set N := N - 1
Step 5: Exit`
        }
      ]
    }
  ],
  practicalPrograms: [
    {
      title: "ব্যবহারিক পরীক্ষণ ০২: লিনিয়ার অ্যারে ট্রাভার্সিং এবং উপাদান সন্নিবেশ ও অপসারণ",
      problemStatementBn: "একটি লিনিয়ার অ্যারে তৈরি করে তার সকল উপাদান ট্রাভার্স (প্রিন্ট ও গড় নির্ণয়) করো এবং ব্যবহারকারীর প্রদত্ত যেকোনো নির্দিষ্ট পজিশনে একটি নতুন ডাটা ইনসার্ট এবং নির্দিষ্ট পজিশন হতে ডাটা ডিলিট করার পূর্ণাঙ্গ C ও Python প্রোগ্রাম রচনা ও বাস্তবায়ন করো। (BTEB Practical Experiment #02 & #03)",
      algorithmStepsBn: [
        "Step 1: Start (প্রোগ্রাম শুরু করি)।",
        "Step 2: Declare an array Arr of size 50 and read N initial elements.",
        "Step 3: Traversing: Loop from i = 0 to N - 1, print Arr[i] and calculate sum.",
        "Step 4: Insertion: Read Position K and new ITEM. Check N < MAX. Shift elements right from index N-1 down to K, set Arr[K] = ITEM, increment N = N + 1.",
        "Step 5: Deletion: Read Position K to delete. Check N > 0. Shift elements left from index K up to N-2, decrement N = N - 1.",
        "Step 6: Print the updated array after each operation.",
        "Step 7: Stop (প্রোগ্রাম সমাপ্ত করি)।"
      ],
      cCode: `#include <stdio.h>

#define MAX_SIZE 50

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int arr[MAX_SIZE] = {15, 30, 45, 60, 75};
    int n = 5;
    int pos, item, sum = 0;

    printf("Initial array: ");
    printArray(arr, n);

    // 1. Traversing and Sum
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    printf("Sum = %d, Average = %.2f\n", sum, (float)sum / n);

    // 2. Insertion
    pos = 2;
    item = 99;
    if (n < MAX_SIZE) {
        for (int i = n - 1; i >= pos; i--) {
            arr[i + 1] = arr[i];
        }
        arr[pos] = item;
        n++;
        printf("\nAfter inserting %d at index %d: ", item, pos);
        printArray(arr, n);
    }

    // 3. Deletion
    pos = 4;
    if (n > 0) {
        for (int i = pos; i < n - 1; i++) {
            arr[i] = arr[i + 1];
        }
        n--;
        printf("After deleting element at index %d: ", pos);
        printArray(arr, n);
    }

    return 0;
}`,
      pythonCode: `def main():
    arr = [15, 30, 45, 60, 75]
    print(f"Initial array: {arr}")

    # 1. Traversing
    total_sum = sum(arr)
    avg = total_sum / len(arr)
    print(f"Sum = {total_sum}, Average = {avg:.2f}")

    # 2. Insertion
    insert_pos = 2
    insert_item = 99
    arr.insert(insert_pos, insert_item)
    print(f"\nAfter inserting {insert_item} at index {insert_pos}: {arr}")

    # 3. Deletion
    del_pos = 4
    arr.pop(del_pos)
    print(f"After deleting element at index {del_pos}: {arr}")

if __name__ == "__main__":
    main()`,
      sampleOutput: `Initial array: 15 30 45 60 75 
Sum = 225, Average = 45.00

After inserting 99 at index 2: 15 30 99 45 60 75 
After deleting element at index 4: 15 30 99 45 75 `,
      explanationBn: "এই প্রোগ্রামে মেমরির মৌলিক শিফটিং মেকানিজম সরাসরি কোডে প্রদর্শন করা হয়েছে। ইনসার্ট করার সময় উপাদানগুলোর ক্রম বজায় রাখতে ডানপাশে শিফট এবং ডিলিটের পর ফাঁকা স্পেস পূর্ণ করতে বামপাশে শিফট কার্যকর হয়েছে।"
    }
  ],
  summaryPoints: [
    "অ্যারে হলো একই ডাটা টাইপবিশিষ্ট উপাদানসমূহের ধারাবাহিক (Contiguous) মেমরি সংগ্রহ।",
    "পয়েন্টার হলো একটি বিশেষ চলক যা অন্য কোনো চলকের মেমরি অ্যাড্রেস ধারণ করে।",
    "সি ল্যাঙ্গুয়েজে স্ট্রিং হলো একটি 1D ক্যারেক্টার অ্যারে যার শেষে একটি নাল টার্মিনেটর ('\\0') থাকে।",
    "2D অ্যারে মেমরিতে স্টোর করার প্রধান দুটি পদ্ধতি: Row-Major Order (সি) এবং Column-Major Order (ফরট্রান)।",
    "Row-Major অ্যাড্রেস সূত্র: LOC(A[j,k]) = Base + w [N(j - LB₁) + (k - LB₂)]।",
    "পয়েন্টারের দুটি মৌলিক অপারেটর: '&' (অ্যাড্রেস-অফ) এবং '*' (ডিরেফারেন্স/মান)।",
    "অ্যারেতে নতুন উপাদান যোগ করতে Overflow কন্ডিশন এবং মুছে ফেলতে Underflow কন্ডিশন পরীক্ষা করতে হয়।",
    "স্ট্যান্ডার্ড স্ট্রিং ফাংশন: strlen (দৈর্ঘ্য), strcpy (কপি), strcat (জোড়া লাগানো), strcmp (তুলনা) এবং strrev (বিপরীতকরণ)।"
  ],
  boardQuestions: [
    {
      id: "q3-01",
      type: "ati_songkhipto",
      questionBn: "অ্যারে (Array) কাকে বলে?",
      questionEn: "Define Array.",
      answerBn: "একই ডাটা টাইপবিশিষ্ট কতগুলো উপাদানের ধারাবাহিক মেমরি ব্লকে সংরক্ষিত সুশৃঙ্খল সংগ্রহকে অ্যারে বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2018", "BTEB 2016"],
      isImportant: true,
      subtopicRef: "3.1"
    },
    {
      id: "q3-02",
      type: "ati_songkhipto",
      questionBn: "পয়েন্টার (Pointer) কী?",
      questionEn: "What is a Pointer?",
      answerBn: "পয়েন্টার হলো একটি বিশেষ চলক বা ভেরিয়েবল, যা অন্য কোনো ভেরিয়েবলের মেমরি অ্যাড্রেস (Memory Address) সংরক্ষণ করে।",
      marks: 1,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2017"],
      isImportant: true,
      subtopicRef: "3.1"
    },
    {
      id: "q3-03",
      type: "ati_songkhipto",
      questionBn: "নাল ক্যারেক্টার ('\\0') এর ASCII মান কত?",
      questionEn: "What is the ASCII value of null character?",
      answerBn: "নাল ক্যারেক্টার ('\\0') এর ASCII মান হলো 0 (Zero)। এটি স্ট্রিংয়ের সমাপ্তি নির্দেশ করে।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2019"],
      isImportant: true,
      subtopicRef: "3.4"
    },
    {
      id: "q3-04",
      type: "ati_songkhipto",
      questionBn: "রো-মেজর ও কলাম-মেজর অর্ডারের মূল পার্থক্য কী?",
      questionEn: "What is the main difference between Row-Major and Column-Major order?",
      answerBn: "রো-মেজর অর্ডারে 2D অ্যারের ডাটা সারি অনুসারে (Row by row) মেমরিতে স্টোর হয়; আর কলাম-মেজর অর্ডারে কলাম অনুসারে (Column by column) মেমরিতে স্টোর হয়।",
      marks: 1,
      yearsAppeared: ["BTEB 2022", "BTEB 2018"],
      isImportant: true,
      subtopicRef: "3.2"
    },
    {
      id: "q3-05",
      type: "ati_songkhipto",
      questionBn: "স্ট্রিং কনক্যাটেনেশন বলতে কী বোঝায়?",
      questionEn: "What is String Concatenation?",
      answerBn: "একটি স্ট্রিংয়ের শেষের সাথে অন্য একটি স্ট্রিং জোড়া লাগিয়ে একটি একক দীর্ঘ স্ট্রিং তৈরি করার প্রক্রিয়াকে স্ট্রিং কনক্যাটেনেশন (যেমন: `strcat()` ফাংশন) বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2021", "BTEB 2017"],
      isImportant: false,
      subtopicRef: "3.5"
    },
    {
      id: "q3-06",
      type: "ati_songkhipto",
      questionBn: "অ্যারে ওভারফ্লো (Overflow) কী?",
      questionEn: "What is Array Overflow?",
      answerBn: "যখন কোনো পূর্ণ মেমরি সাইজের অ্যারেতে অতিরিক্ত নতুন উপাদান যোগ করার চেষ্টা করা হয়, তখন সেই ত্রুটিপূর্ণ অবস্থাকে ওভারফ্লো বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2020"],
      isImportant: true,
      subtopicRef: "3.7"
    },
    {
      id: "q3-07",
      type: "songkhipto",
      questionBn: "পয়েন্টারের রেফারেন্স (&) এবং ডিরেফারেন্স (*) অপারেটরের কাজ উদাহরণসহ ব্যাখ্যা করো।",
      questionEn: "Explain reference (&) and dereference (*) operators with examples.",
      answerBn: `১. রেফারেন্স অপারেটর (\`&\`):
কোনো ভেরিয়েবলের নামের পূর্বে \`&\` বসালে তা ওই ভেরিয়েবলের মেমরি অ্যাড্রেস রিটার্ন করে।
উদাহরণ: \`ptr = &x;\` (এখানে x এর অ্যাড্রেস ptr এ সংরক্ষিত হয়)।

২. ডিরেফারেন্স অপারেটর (\`*\`):
কোনো পয়েন্টার ভেরিয়েবলের পূর্বে \`*\` বসালে তা পয়েন্টারের মধ্যে থাকা অ্যাড্রেসে সংরক্ষিত মূল মানটিকে অ্যাক্সেস করে।
উদাহরণ: \`int y = *ptr;\` (এখানে ptr যে অ্যাড্রেস নির্দেশ করছে তার মূল মান y তে জমা হবে)।`,
      marks: 3,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2018"],
      isImportant: true,
      subtopicRef: "3.3"
    },
    {
      id: "q3-08",
      type: "songkhipto",
      questionBn: "অ্যারেতে নতুন উপাদান ইনসার্ট করার অ্যালগরিদমটি লেখো।",
      questionEn: "Write the algorithm for inserting an element into an array.",
      answerBn: `Algorithm: INSERT(LA, N, K, ITEM)
১. [ওভারফ্লো চেক] If N >= MAX then Print "Overflow" and Exit.
২. [কাউন্টার ইনিশিয়ালাইজ] Set J := N - 1.
৩. [ডানদিকে শিফট] Repeat while J >= K:
       Set LA[J + 1] := LA[J]
       Set J := J - 1
   [End of Loop]
৪. [উপাদান স্থাপন] Set LA[K] := ITEM.
৫. [অ্যারে সাইজ বৃদ্ধি] Set N := N + 1.
৬. Exit.`,
      marks: 3,
      yearsAppeared: ["BTEB 2022", "BTEB 2019", "BTEB 2016"],
      isImportant: true,
      subtopicRef: "3.7"
    },
    {
      id: "q3-09",
      type: "songkhipto",
      questionBn: "সি ল্যাঙ্গুয়েজের ৪টি প্রধান স্ট্রিং ফাংশনের নাম ও কাজ লেখো।",
      questionEn: "Mention names and purposes of 4 main string functions in C.",
      answerBn: `১. \`strlen(s)\`: স্ট্রিংয়ের দৈর্ঘ্য (অক্ষরের সংখ্যা) নির্ণয় করে।
২. \`strcpy(d, s)\`: উৎস স্ট্রিং \`s\` কে লক্ষ্য স্ট্রিং \`d\` তে কপি করে।
৩. \`strcat(s1, s2)\`: \`s1\` এর শেষে \`s2\` কে জোড়া লাগায়।
৪. \`strcmp(s1, s2)\`: দুটি স্ট্রিং ডিকশনারি ক্রমে সমান কিনা তুলনা করে।`,
      marks: 3,
      yearsAppeared: ["BTEB 2023", "BTEB 2020"],
      isImportant: true,
      subtopicRef: "3.5"
    },
    {
      id: "q3-10",
      type: "rochonamulok",
      questionBn: "একটি দ্বিমাত্রিক (2D) অ্যারের মেমরি অ্যাড্রেস নির্ণয়ের রো-মেজর (Row-Major) এবং কলাম-মেজর (Column-Major) সূত্র চিত্র ও গাণিতিক উদাহরণসহ বিস্তারিত প্রমাণ করো।",
      questionEn: "Derive and explain Row-Major and Column-Major address calculation formulas for a 2D array with diagram and mathematical example.",
      answerBn: `ধরি, একটি ২D অ্যারে $A$ যার সারির রেঞ্জ $\\text{LB}_1$ থেকে $\\text{UB}_1$ (মোট সারি $M = \\text{UB}_1 - \\text{LB}_1 + 1$) এবং কলামের রেঞ্জ $\\text{LB}_2$ থেকে $\\text{UB}_2$ (মোট কলাম $N = \\text{UB}_2 - \\text{LB}_2 + 1$)।
অ্যারের শুরুর মেমরি অ্যাড্রেস $\\text{Base}(A)$ এবং প্রতি উপাদানের আকার $w$ বাইট।

১. রো-মেজর অর্ডার (Row-Major Order):
রো-মেজর পদ্ধতিতে $A[j, k]$ উপাদানে পৌঁছাতে হলে প্রথমে $(j - \\text{LB}_1)$ সংখ্যক সম্পূর্ণ সারি অতিক্রম করতে হয়। প্রতিটি সারিতে $N$ সংখ্যক উপাদান থাকে। এরপর বর্তমান সারির $(k - \\text{LB}_2)$ সংখ্যক কলাম পার হতে হয়।
অতএব, মোট উপাদান সংখ্যা $= N(j - \\text{LB}_1) + (k - \\text{LB}_2)$।
সুতরাং অ্যাড্রেস সূত্র:
$$\\text{LOC}(A[j, k]) = \\text{Base}(A) + w [N(j - \\text{LB}_1) + (k - \\text{LB}_2)]$$

২. কলাম-মেজর অর্ডার (Column-Major Order):
কলাম-মেজর পদ্ধতিতে প্রথমে $(k - \\text{LB}_2)$ সংখ্যক সম্পূর্ণ কলাম অতিক্রম করতে হয় (প্রতি কলামে $M$ সংখ্যক উপাদান থাকে), এরপর বর্তমান কলামের $(j - \\text{LB}_1)$ সংখ্যক সারি পার হতে হয়।
সুতরাং অ্যাড্রেস সূত্র:
$$\\text{LOC}(A[j, k]) = \\text{Base}(A) + w [(j - \\text{LB}_1) + M(k - \\text{LB}_2)]$$

গাণিতিক সমস্যা সমাধান:
ধরি $A[1:5, 1:4]$ একটি অ্যারে যার $\\text{Base} = 1000$ এবং $w = 4$ বাইট। $A[3, 2]$ এর রো-মেজর অ্যাড্রেস কত?
এখানে: $\\text{LB}_1 = 1, \\text{LB}_2 = 1, N = 4, j = 3, k = 2$।
$$\\text{LOC}(A[3, 2]) = 1000 + 4 [4(3 - 1) + (2 - 1)] = 1000 + 4 [8 + 1] = 1000 + 36 = 1036$$`,
      diagramContent: `        Logical Matrix A[M x N]                      Row-Major Linear Mapping in RAM
   ┌─────────┬─────────┬─────────┐                 ┌────────┬────────┬────────┬────────┐
Row0│ A[0,0]  │ A[0,1]  │ A[0,2]  │                 │ A[0,0] │ A[0,1] │ A[0,2] │ A[1,0] │ ...
   ├─────────┼─────────┼─────────┤                 └────────┴────────┴────────┴────────┘
Row1│ A[1,0]  │ A[1,1]  │ A[1,2]  │                 ◄─────── Row 0 ──────────► ◄ Row 1
   └─────────┴─────────┴─────────┘
        Col 0     Col 1     Col 2`,
      marks: 5,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2019", "BTEB 2017"],
      isImportant: true,
      subtopicRef: "3.2"
    },
    {
      id: "q3-11",
      type: "rochonamulok",
      questionBn: "অ্যারেতে ডাটা ট্রাভার্সিং, উপাদান সন্নিবেশ (Insertion) এবং অপসারণ (Deletion) করার সম্পূর্ণ অ্যালগরিদম ও টাইম কমপ্লেক্সিটি বিশ্লেষণ করো।",
      questionEn: "Write complete algorithms for Array Traversing, Insertion and Deletion with time complexity analysis.",
      answerBn: `১. অ্যারে ট্রাভার্সিং অ্যালগরিদম (Traversing):
Step 1: Set K := LB.
Step 2: Repeat Step 3 while K <= UB:
Step 3:     Apply PROCESS to LA[K]
            Set K := K + 1
Step 4: Exit.
- টাইম কমপ্লেক্সিটি: $O(n)$

২. অ্যারে ইনসার্ট অ্যালগরিদম (Insertion):
Step 1: If N >= MAX then Print "Overflow" and Exit.
Step 2: Set J := N - 1.
Step 3: Repeat while J >= K:
            Set LA[J + 1] := LA[J]
            Set J := J - 1
Step 4: Set LA[K] := ITEM.
Step 5: Set N := N + 1.
Step 6: Exit.
- টাইম কমপ্লেক্সিটি: Worst Case $O(n)$, Best Case $O(1)$

৩. অ্যারে ডিলিট অ্যালগরিদম (Deletion):
Step 1: If N <= 0 then Print "Underflow" and Exit.
Step 2: Set ITEM := LA[K].
Step 3: Set J := K.
Step 4: Repeat while J < N - 1:
            Set LA[J] := LA[J + 1]
            Set J := J + 1
Step 5: Set N := N - 1.
Step 6: Exit.
- টাইম কমপ্লেক্সিটি: Worst Case $O(n)$, Best Case $O(1)$`,
      marks: 5,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2018", "BTEB 2015"],
      isImportant: true,
      subtopicRef: "3.6"
    }
  ],
  quizQuestions: [
    {
      id: 1,
      questionBn: "অ্যারে কোন ধরনের ডাটা সংরক্ষণে ব্যবহৃত হয়?",
      options: [
        "সমজাতীয় ডাটা (Homogeneous)",
        "ভিন্নজাতীয় ডাটা (Heterogeneous)",
        "শুধুমাত্র ক্যারেক্টার ডাটা",
        "শুধুমাত্র দশমিক সংখ্যা"
      ],
      correctAnswerIndex: 0,
      explanationBn: "অ্যারে হলো একই ডাটা টাইপের (Homogeneous) উপাদানসমূহের ধারাবাহিক মেমরি সংগ্রহ।",
      topicRef: "3.1"
    },
    {
      id: 2,
      questionBn: "সি ল্যাঙ্গুয়েজে স্ট্রিংয়ের সমাপ্তি চিহ্নিত করতে কোন ক্যারেক্টার ব্যবহৃত হয়?",
      options: ["'\\n'", "'\\t'", "'\\0'", "EOF"],
      correctAnswerIndex: 2,
      explanationBn: "স্ট্রিংয়ের সমাপ্তি চিহ্নিত করতে নাল ক্যারেক্টার '\\0' (Null Terminator) ব্যবহৃত হয়।",
      topicRef: "3.4"
    },
    {
      id: 3,
      questionBn: "কোনো ভেরিয়েবলের মেমরি অ্যাড্রেস পেতে নিচের কোন অপারেটরটি ব্যবহৃত হয়?",
      options: ["*", "&", "->", "%"],
      correctAnswerIndex: 1,
      explanationBn: "অ্যাড্রেস-অফ অপারেটর '&' কোনো ভেরিয়েবলের মেমরি অ্যাড্রেস রিটার্ন করে।",
      topicRef: "3.3"
    },
    {
      id: 4,
      questionBn: "সি ল্যাঙ্গুয়েজ 2D অ্যারে মেমরিতে সংরক্ষণের ক্ষেত্রে কোন পদ্ধতিটি অনুসরণ করে?",
      options: ["Column-Major Order", "Row-Major Order", "Random Order", "Diagonal Order"],
      correctAnswerIndex: 1,
      explanationBn: "সি, সি++, পাইথন ও জাভা মেমরিতে Row-Major Order অনুসরণ করে সারি অনুযায়ী ডাটা রাখে।",
      topicRef: "3.2"
    },
    {
      id: 5,
      questionBn: "যদি int *ptr হয় এবং ptr এর মান 0x1000 হয়, তবে ptr + 1 এর মান কত হবে? (ধরি int = 4 Bytes)",
      options: ["0x1001", "0x1002", "0x1004", "0x1008"],
      correctAnswerIndex: 2,
      explanationBn: "পয়েন্টার এরিথমেটিকে টাইপ সাইজ গুণ হয়। ৪ বাইট পূর্ণসংখ্যার জন্য ptr + 1 হবে 0x1000 + 4 = 0x1004।",
      topicRef: "3.3"
    },
    {
      id: 6,
      questionBn: "দুটি স্ট্রিং জোড়া লাগাতে (Concatenate) কোন লাইব্রেরি ফাংশনটি ব্যবহৃত হয়?",
      options: ["strcpy()", "strcmp()", "strcat()", "strlen()"],
      correctAnswerIndex: 2,
      explanationBn: "strcat(s1, s2) ফাংশনটি প্রথম স্ট্রিংয়ের শেষে দ্বিতীয় স্ট্রিং যুক্ত করে।",
      topicRef: "3.5"
    },
    {
      id: 7,
      questionBn: "অ্যারেতে উপাদান সন্নিবেশ (Insertion) এর Worst-Case Time Complexity কত?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswerIndex: 2,
      explanationBn: "অ্যারের শুরুতে ইনসার্ট করলে বাকি n টি উপাদানকে ডানে শিফট করতে হয়, ফলে টাইম কমপ্লেক্সিটি O(n)।",
      topicRef: "3.7"
    },
    {
      id: 8,
      questionBn: "যদি একটি অ্যারের Base Address = 2000, w = 2, LB = 0 হয়, তবে A[4] এর অ্যাড্রেস কত?",
      options: ["2004", "2008", "2010", "2016"],
      correctAnswerIndex: 1,
      explanationBn: "LOC(A[4]) = Base + w(4 - LB) = 2000 + 2(4 - 0) = 2000 + 8 = 2008।",
      topicRef: "3.2"
    }
  ]
};


