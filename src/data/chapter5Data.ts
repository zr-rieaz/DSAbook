import { Chapter } from '../types/syllabus';

export const CHAPTER_5_DATA: Chapter = {
  id: 5,
  code: "28542-CH05",
  titleBn: "কিউ (Queue)",
  titleEn: "Queue Data Structure",
  status: "complete",
  learningObjectives: [
    "কিউ (Queue) ডাটা স্ট্রাকচারের সংজ্ঞা, মেমরি সংগঠন এবং FIFO (First In First Out) মূলনীতি সম্পূর্ণ অনুধাবন করা।",
    "ডাটা স্ট্রাকচার ও কম্পিউটার সিস্টেমে কিউ-এর বাস্তব প্রয়োগক্ষেত্রসমূহ (CPU Scheduling, Spooling, BFS, Buffer Management) ব্যাখ্যা করা।",
    "FIFO (First In First Out) এবং LIFO (Last In First Out) এর মূলনীতি, কাজের ধারা এবং বাস্তব ক্ষেত্রভিত্তিক তুলনামূলক বিশ্লেষণ আয়ত্ত করা।",
    "স্ট্যাক (Stack) এবং কিউ (Queue) ডাটা স্ট্রাকচারের মধ্যকার বিস্তৃত পার্থক্যসমূহ চিহ্নিত ও ছক আকারে উপস্থাপন করতে পারা।",
    "লিনিয়ার কিউ (Linear Queue)-তে ডাটা যোগ (Enqueue) ও অপসারণ (Dequeue) করার স্ট্যান্ডার্ড অ্যালগরিদম ও টাইম কমপ্লেক্সিটি $O(1)$ ব্যাখ্যা করা।",
    "লিনিয়ার কিউ-এর মেমরি অপচয় (False Overflow Problem) অনুধাবন করে সার্কুলার কিউ (Circular Queue) এর প্রয়োজনীয়তা জানা।",
    "মডুলো পাটিগণিত $(REAR + 1) \\pmod{MAX}$ ব্যবহার করে সার্কুলার কিউ-তে ডাটা ইনসার্ট ও ডিলিটের অ্যালগরিদম তৈরি করতে পারা।",
    "বিশেষ ধরনের কিউ—ডিকিউ (Deque: Double-Ended Queue) এবং প্রায়োরিটি কিউ (Priority Queue) এর বৈশিষ্ট্য ও প্রয়োগ জানা।",
    "সি (C) এবং পাইথন (Python) ভাষায় লিনিয়ার ও সার্কুলার কিউ বাস্তবায়নের পূর্ণাঙ্গ ব্যবহারিক প্রোগ্রাম প্রস্তুত ও এক্সিকিউট করা।"
  ],
  subtopics: [
    {
      id: "5.1",
      titleBn: "কিউ-এর সংজ্ঞা ও মূল ধারণা",
      titleEn: "Define queue",
      concept: `কিউ (Queue) হলো একটি রৈখিক (Linear) ও ক্রমভিত্তিক ডাটা স্ট্রাকচার, যেখানে ডাটা উপাদানসমূহ একটি প্রান্তে প্রবেশ (Insert) করে এবং অপর প্রান্ত দিয়ে অপসারিত (Delete) হয়। কিউ যে মূলনীতি অনুসরণ করে কাজ করে তাকে বলা হয় **FIFO (First In, First Out)**, অর্থাৎ যে উপাদানটি সবার প্রথমে কিউতে যুক্ত হয়, সেটিই সবার প্রথমে অপসারিত হয়। 

কিউতে ডাটা পরিচালনার জন্য প্রধানত দুটি নির্দেশক বা পয়েন্টার (Pointers) ব্যবহৃত হয়:
১. **FRONT (ফ্রন্ট):** কিউ-এর যে প্রান্ত দিয়ে ডাটা অপসারণ (Delete / Dequeue) করা হয়।
২. **REAR (রিয়ার):** কিউ-এর যে প্রান্ত দিয়ে নতুন ডাটা যুক্ত (Insert / Enqueue) করা হয়।`,
      realLifeAnalogy: `১. টিকিট কাউন্টারের লাইন (Ticket Counter Queue): সিনেমা হল বা বাস কাউন্টারে টিকিট কাটার জন্য মানুষ যে লাইনে দাঁড়ায়—যে ব্যক্তি লাইনে সবার আগে দাঁড়ায়, সে-ই সবার আগে টিকিট পেয়ে বের হয়ে যায়।
২. বাসের যাত্রী ওঠা ও নামার দরজা: বাসের পেছনের দরজা দিয়ে যাত্রী উঠে (REAR) এবং সামনের দরজা দিয়ে বের হয় (FRONT)।
৩. পেপারের প্রিন্ট কিউ (Printer Queue): কম্পিউটারে একের পর এক ডকুমেন্ট প্রিন্ট কমান্ড দিলে কম্পিউটার যে পেজটি আগে পাঠিয়েছে, প্রিন্টার সেটিই আগে প্রিন্ট করে।`,
      technicalDetails: `কম্পিউটার মেমরিতে কিউ মূলত দুটি উপায়ে তৈরি করা যায়:
১. **স্ট্যাটিক কিউ (Array-based Queue):**
   - ফিক্সড সাইজের ১D অ্যারে ব্যবহার করে গঠিত হয়।
   - খালি অবস্থার শর্ত: $\\text{FRONT} = -1$ এবং $\\text{REAR} = -1$ (অথবা $\\text{FRONT} > \\text{REAR}$)।
   - পূর্ণ অবস্থার শর্ত: $\\text{REAR} = \\text{MAX} - 1$।

২. **ডাইনামিক কিউ (Linked List-based Queue):**
   - ডাইনামিক নোড ও পয়েন্টার দিয়ে গঠিত, যেখানে মেমরির কোনো ফিক্সড সীমা থাকে না।

**পয়েন্টারের গতিবিধি:**
- প্রথম ডাটা যোগ করার সময় $\\text{FRONT} = 0$ এবং $\\text{REAR} = 0$ সেট হয়।
- প্রতিবার Enqueue করলে $\\text{REAR}$ এর মান ১ বৃদ্ধি পায়।
- প্রতিবার Dequeue করলে $\\text{FRONT}$ এর মান ১ বৃদ্ধি পায়।`,
      diagramType: "ascii",
      diagramContent: `                 ┌───────────────────────────────────────────────┐
                 │          ENQUEUE (Insert at REAR)             │
                 └───────────────────────┬───────────────────────┘
                                         │
                                         ▼
                 ┌─────┬─────┬─────┬─────┬─────┬─────┐
   FRONT (0) ──► │ 10  │ 20  │ 30  │ 40  │     │     │ ◄── REAR (3)
                 └─────┴─────┴─────┴─────┴─────┴─────┘
                    Index 0   1     2     3     4     5   (MAX = 6)
                    │
                    ▼
                 ┌───────────────────────────────────────────────┐
                 │          DEQUEUE (Delete from FRONT)          │
                 └───────────────────────────────────────────────┘`,
      tableData: {
        headers: ["বৈশিষ্ট্য", "স্ট্যাটিক কিউ (Array-based)", "ডাইনামিক কিউ (Linked List)"],
        rows: [
          ["মেমরি স্ট্রাকচার", "ধারাবাহিক (Contiguous) মেমরি সেগমেন্ট।", "মেমরির ছিটানো নোড (Linked Nodes)।"],
          ["আকারের নমনীয়তা", "নির্দিষ্ট সাইজ (Fixed Size MAX)।", "প্রয়োজন অনুযায়ী ডাইনামিক বৃদ্ধি পায়।"],
          ["পয়েন্টার ব্যবহায়", "ইনডেক্স নম্বর (FRONT, REAR)।", "পয়েন্টার অ্যাড্রেস (head, tail)।"],
          ["মেমরি অপচয়", "Linear Queue-তে False Overflow হতে পারে।", "কোনো মেমরি অপচয় হয় না।"],
          ["বাস্তবায়নের সহজতা", "খুবই সহজ ও সরাসরি।", "পয়েন্টার পরিচালনার জন্য সামান্য জটিল।"]
        ]
      },
      keyPoints: [
        "কিউ একটি FIFO (First In First Out) রৈখিক ডাটা স্ট্রাকচার।",
        "কিউ-এর উপাদান অপসারণের প্রান্তকে FRONT এবং সংযোজনের প্রান্তকে REAR বলে।",
        "নতুন উপাদান Enqueue করলে REAR বাড়ে, আর Dequeue করলে FRONT বাড়ে।"
      ]
    },
    {
      id: "5.2",
      titleBn: "ডাটা স্ট্রাকচারে কিউ-এর বাস্তব প্রয়োগক্ষেত্র",
      titleEn: "Write the applications of queue in data structure",
      concept: `কম্পিউটার সায়েন্স, অপারেটিং সিস্টেম, নেটওয়ার্কিং এবং রিয়েল-টাইম সফটওয়্যার সিস্টেমে যেখানেই 'সম্পদ ব্যবস্থাপনা' (Resource Sharing) এবং 'সার্ভিস অর্ডার' বজায় রাখার প্রয়োজন হয়, সেখানেই কিউ ডাটা স্ট্রাকচার ব্যবহৃত হয়। যখন একাধিক প্রসেস বা রিকোয়েস্ট একই সাথে একটি নির্দিষ্ট সম্পদ (যেমন: CPU, Printer, Network Bandwidth) ব্যবহার করতে চায়, তখন FIFO নীতিতে কিউ তাদের শৃঙ্খলা নিশ্চিত করে।`,
      realLifeAnalogy: `একটি ব্যাংকের ক্যাশ কাউন্টারের টোকেন সিস্টেমের কথা ভাবুন। কাস্টমাররা আসার সাথে সাথে ১, ২, ৩ নম্বরের টোকেন নেন এবং টোকেন নম্বর অনুযায়ী সার্ভিস পান। এই পুরো প্রক্রিয়াটি একটি রিয়েল-টাইম কিউ সিস্টেম!`,
      technicalDetails: `কিউ-এর প্রধান বাস্তব প্রয়োগক্ষেত্রসমূহ:

১. **অপারেটিং সিস্টেমের প্রসেস সিডিউলিং (CPU Scheduling):**
   - মাল্টিটাস্কিং অপারেটিং সিস্টেমে রেডি কিউ (Ready Queue) এবং আইও কিউ (I/O Queue) বজায় রাখা হয়।
   - FCFS (First Come First Served) এবং Round Robin Scheduling অ্যালগরিদমে কিউ ব্যবহৃত হয়।

২. **প্রিন্টার স্পুলিং (Printer Spooling / Print Queue):**
   - প্রিন্টারে একাধিক ফাইল প্রিন্ট দেওয়ার কমান্ড পাঠালে ফাইলগুলো হার্ডডিস্ক বা মেমরির Print Spooler কিউতে জমা থাকে এবং প্রথম কমান্ডের ফাইলটি আগে প্রিন্ট হয়।

৩. **গ্রাফ ট্রাভার্সাল (Breadth First Search - BFS):**
   - গ্রাফ বা ট্রির লেভেল-বাই-লেভেল (Level Order) উপাদানগুলো ট্রাভার্স করতে BFS অ্যালগরিদমে কিউ ডাটা স্ট্রাকচার ব্যবহার করা বাধ্যতামূলক।

৪. **ইনপুট/আউটপুট বাফার ম্যানেজমেন্ট (I/O Buffering):**
   - কিবোর্ডে দ্রুত টাইপ করলে অক্ষরের ডাটা Keyboard Buffer Queue-তে জমা থাকে।
   - অডিও/ভিডিও স্ট্রিমিংয়ে (YouTube, Netflix) ডাটা প্যাকেট বাফার কিউতে রিসিভ হয় যাতে ভিডিও মাঝপথে আটকে না যায়।

৫. **নেটওয়ার্ক প্যাকেট সিডিউলিং (Network Packet Queuing):**
   - রাউটার বা সুইচে বিভিন্ন সোর্স থেকে আসা ডাটা প্যাকেটগুলো FIFO কিউতে জমা করে সিরিয়াল অনুযায়ী গন্তব্যে পাঠানো হয়।

৬. **কল সেন্টার সাপোর্ট ও মেসেজিং সিস্টেম:**
   - কল সেন্টারে গ্রাহকের কল হোল্ডে রাখা এবং মেসেজ ব্রোকার (যেমন: RabbitMQ, Apache Kafka) এ মেসেজ প্রসেসিং।`,
      tableData: {
        headers: ["প্রয়োগের ক্ষেত্র", "ব্যবহৃত কিউ মেকানিজম", "বাস্তব সুফল"],
        rows: [
          ["CPU Scheduling", "Ready Queue (FCFS / Round Robin)", "সকল প্রসেসের জন্য সুষম CPU সময় বণ্টন"],
          ["Print Spooling", "Print Queue Buffer", "প্রিন্টারের ধীরগতির জন্য CPU আটকে থাকে না"],
          ["Graph BFS Traversal", "Level-order FIFO Queue", "সর্বনিম্ন ধাপে সংক্ষিপ্ততম পথ (Shortest Path) বের করা"],
          ["Video Streaming", "Media Packet Buffer", "নেটওয়ার্ক ওঠানামা করলেও মসৃণ স্ট্রিমিং"],
          ["Router Management", "Packet Buffer Queue", "নেটওয়ার্ক কনজেকশন ও ডাটা লস রোধ"]
        ]
      },
      keyPoints: [
        "অপারেটিং সিস্টেমে প্রসেস পরিচালনার প্রধান ভিত্তি হলো প্রসেস কিউ (Process Queue)।",
        "গ্রাফ অ্যালগরিদমে Breadth First Search (BFS) বাস্তবায়নে কিউ অপরিহার্য।",
        "মেসেজ ব্রোকার এবং ই-কমার্স অর্ডার প্রসেসিংয়ে FIFO কিউ ব্যবহৃত হয়।"
      ]
    },
    {
      id: "5.3",
      titleBn: "FIFO এবং LIFO নীতির ব্যাখ্যা ও বিশদ তুলনা",
      titleEn: "State FIFO & LIFO",
      concept: `কম্পিউটার সায়েন্সে ডাটা স্ট্রাকচারের উপাদানগুলো কীভাবে প্রবেশ করবে এবং কোন অর্ডারে বের হবে, তা দুটি বিপরীতমুখী ডাটা অর্ডারিং নীতি দ্বারা নিয়ন্ত্রিত হয়: **FIFO (First In, First Out)** এবং **LIFO (Last In, First Out)**।

- **FIFO (First In, First Out):** যে ডাটা উপাদানটি সিস্টেমে সবার আগে প্রবেশ করে, অপসারণের সময় সেটিই সবার আগে বের হয়। এটি কিউ (Queue) ডাটা স্ট্রাকচারের মূলনীতি।
- **LIFO (Last In, First Out):** যে ডাটা উপাদানটি সিস্টেমে সবার শেষে প্রবেশ করে, অপসারণের সময় সেটিই সবার আগে বের হয়। এটি স্ট্যাক (Stack) ডাটা স্ট্রাকচারের মূলনীতি।`,
      realLifeAnalogy: `১. **FIFO Analogy:** পাইপের ভেতর দিয়ে মার্বেল পাঠানো। যে মার্বেলটি প্রথমে ঢোকানো হবে, পাইপের অপর প্রান্ত দিয়ে সেটিই প্রথমে বের হবে।
২. **LIFO Analogy:** একটি সরু একমুখো নলের ভেতর মার্বেল ঢোকানো। শেষে ঢোকানো মার্বেলটি আগে বের না করলে নিচের মার্বেল বের করা সম্ভব নয়।`,
      technicalDetails: `মেমরি অ্যাক্সেসের দিক থেকে এদের তুলনা:
- **FIFO (কিউ):** উন্মুক্ত প্রান্ত থাকে ২টি (FRONT ও REAR)। ডাটা এক প্রান্ত দিয়ে ঢোকে এবং অপর প্রান্ত দিয়ে বের হয়।
- **LIFO (স্ট্যাক):** উন্মুক্ত প্রান্ত থাকে ১টি (TOP)। ডাটা একই প্রান্ত দিয়ে পুশ ও পপ হয়।`,
      diagramType: "ascii",
      diagramContent: ` ┌─────────────────────────────────────────────────────────────────────────┐
 │                      FIFO vs LIFO Structural Difference                 │
 ├─────────────────────────────────────────────────────────────────────────┤
 │ 1. FIFO (First-In-First-Out Queue):                                     │
 │    In ──► [ REAR ] ──► [ 30 ] [ 20 ] [ 10 ] ──► [ FRONT ] ──► Out       │
 │            (Insert)                             (Delete)                │
 ├─────────────────────────────────────────────────────────────────────────┤
 │ 2. LIFO (Last-In-First-Out Stack):                                      │
 │    In / Out ◄──► [ TOP ] ──► │  30  │ (Last In, First Out)              │
 │                              │  20  │                                   │
 │                              │  10  │                                   │
 │                              └──────┘                                   │
 └─────────────────────────────────────────────────────────────────────────┘`,
      tableData: {
        headers: ["তুলনার বিষয়", "FIFO (First In First Out)", "LIFO (Last In First Out)"],
        rows: [
          ["সংজ্ঞা", "প্রথম প্রবিষ্ট উপাদানটিই প্রথমে বের হয়।", "শেষ প্রবিষ্ট উপাদানটিই প্রথমে বের হয়।"],
          ["প্রযোজ্য ডাটা স্ট্রাকচার", "কিউ (Queue), সার্কুলার কিউ, ডিকিউ।", "স্ট্যাক (Stack), রিকার্শন কল-স্ট্যাক।"],
          ["অ্যাক্সেস পয়েন্টার", "২টি পয়েন্টার (FRONT এবং REAR)।", "১টি পয়েন্টার (TOP)।"],
          ["ডাটা প্রসেসিং প্রান্ত", "ইনসার্ট ও ডিলিট দুটি ভিন্ন প্রান্তে হয়।", "ইনসার্ট ও ডিলিট একই প্রান্তে (TOP) হয়।"],
          ["বাস্তব উদাহরণ", "টিকিট কাউন্টারের লাইন, প্রিন্টার কিউ।", "থালাবাসনের স্তূপ, টেক্সট এডিটরের Undo।"],
          ["কম্পিউটিং প্রয়োগ", "CPU Scheduling, BFS, Buffering।", "Expression Parsing, Call Stack, DFS।"]
        ]
      },
      keyPoints: [
        "FIFO নীতি নিশ্চিত করে公平তা (Fairness), কারণ আগে আসা অনুরোধ আগে সমাধান হয়।",
        "LIFO নীতি নিশ্চিত করে সাম্প্রতিকতা (Recency), কারণ শেষের তথ্য আগে প্রসেস হয়।",
        "BTEB পরীক্ষায় FIFO ও LIFO এর সংজ্ঞা ও পার্থক্য অতি-সংক্ষিপ্ত প্রশ্ন হিসেবে আসে।"
      ]
    },
    {
      id: "5.4",
      titleBn: "স্ট্যাক এবং কিউ এর মধ্যকার বিস্তৃত পার্থক্য",
      titleEn: "Distinguish between stack and queue",
      concept: `স্ট্যাক (Stack) এবং কিউ (Queue) উভয়ই লিনিয়ার ডাটা স্ট্রাকচার হওয়া সত্ত্বেও এদের কার্যপ্রণালী, মেমরি সংকেত, ব্যবহৃত পয়েন্টার এবং প্রয়োগক্ষেত্রের মধ্যে মৌলিক ও সুনির্দিষ্ট পার্থক্য বিদ্যমান। BTEB বোর্ড পরীক্ষার জন্য এটি অন্যতম গুরুত্বপূর্ণ একটি রচনামূলক প্রশ্ন।`,
      realLifeAnalogy: `স্ট্যাক হলো একটি একমুখো কাচের বয়ামের মতো (যেখানে নিচে পৌঁছাতে হলে ওপরের ঢাকনা দিয়ে একটির পর একটি জিনিস সরাতে হয়)। আর কিউ হলো একটি দু'মুখো খোলা পাইপের মতো (যেখানে একদিক দিয়ে প্রবেশ করে অন্যদিক দিয়ে স্বাভাবিকভাবে বের হয়ে যায়)।`,
      technicalDetails: `স্ট্যাক ও কিউ এর তুলনামূলক সারসংক্ষেপ ছক:`,
      tableData: {
        headers: ["পার্থক্যের বিষয়", "স্ট্যাক (Stack)", "কিউ (Queue)"],
        rows: [
          ["মূলনীতি (Principle)", "LIFO (Last In, First Out) নীতি মেনে চলে।", "FIFO (First In, First Out) নীতি মেনে চলে।"],
          ["পয়েন্টার (Pointers)", "শুধুমাত্র ১টি পয়েন্টার থাকে: TOP।", "২টি পয়েন্টার থাকে: FRONT এবং REAR।"],
          ["অপারেশনের নাম", "ডাটা যোগকে PUSH এবং অপসারণকে POP বলে।", "ডাটা যোগকে ENQUEUE এবং অপসারণকে DEQUEUE বলে।"],
          ["কার্যকর প্রান্ত", "একই প্রান্ত (শীর্ষ/TOP) দিয়ে সকল কাজ হয়।", "ভিন্ন প্রান্ত দিয়ে কাজ হয় (REAR এ যোগ, FRONT এ বাদ)।"],
          ["খালি অবস্থার শর্ত", "$\text{TOP} == -1$", "$\text{FRONT} == -1$ অথবা $\text{FRONT} > \text{REAR}$"],
          ["পূর্ণ অবস্থার শর্ত", "$\text{TOP} == \text{MAX} - 1$", "$\text{REAR} == \text{MAX} - 1$ (Linear Queue)"],
          ["প্রয়োগের ক্ষেত্র", "রিকার্শন, এক্সপ্রেশন রূপান্তর (Infix-Postfix), Undo।", "CPU সিডিউলিং, প্রিন্ট স্পুলিং, BFS ট্রাভার্সাল।"],
          ["উপাদান পরিদর্শন", "PEEK এর মাধ্যমে সরাসরি শীর্ষ উপাদান দেখা যায়।", "FRONT পয়েন্টারের মাধ্যমে প্রথম উপাদান দেখা যায়।"]
        ]
      },
      keyPoints: [
        "স্ট্যাকে ১টি প্রান্ত (TOP) এবং কিউতে ২ টি প্রান্ত (FRONT ও REAR) সক্রিয় থাকে।",
        "স্ট্যাকের অপারেশন PUSH/POP এবং কিউ-এর অপারেশন ENQUEUE/DEQUEUE।",
        "বোর্ড পরীক্ষায় এই পার্থক্যটি ছক আকারে লিখলে পূর্ণ নম্বর পাওয়া যায়।"
      ]
    },
    {
      id: "5.5",
      titleBn: "কিউ-তে ডাটা ইনসার্ট ও ডিলিট করার অ্যালগরিদম",
      titleEn: "Express the algorithms for data insert, delete into & from queues",
      concept: `কিউতে নতুন উপাদান যোগ করার প্রক্রিয়াকে **ENQUEUE** এবং উপাদান অপসারিত করার প্রক্রিয়াকে **DEQUEUE** বলা হয়। 

**লিনিয়ার কিউ-এর সীমাবদ্ধতা (False Overflow Problem):**
লিনিয়ার কিউতে Dequeue করার সাথে সাথে FRONT পয়েন্টার সামনে বাড়ে। ফলে আগের মেমরি সেলগুলো খালি হয়ে গেলেও REAR পয়েন্টার যদি একবার $\text{MAX} - 1$ এ পৌঁছে যায়, তবে মেমরিতে জায়গা থাকা সত্ত্বেও আর নতুন উপাদান Enqueue করা যায় না!

**সার্কুলার কিউ (Circular Queue) এর সমাধান:**
এই সমস্যা সমাধানের জন্য কিউ-এর শেষ উপাদানকে পুনরায় প্রথম উপাদানের সাথে যুক্ত করে একটি গোলাকার বৃত্তের মতো কল্পনা করা হয়। এখানে মডুলো পাটিগণিত (Modulo Arithmetic) ব্যবহার করে পয়েন্টার ঘোরানো হয়:
$$\text{REAR} = (\text{REAR} + 1) \pmod{\text{MAX}}$$
$$\text{FRONT} = (\text{FRONT} + 1) \pmod{\text{MAX}}$$`,
      realLifeAnalogy: `একটি গোলাকার ঘড়ির কাঁটার কথা চিন্তা করুন। ১২টার পর কাঁটাটি যেমন বাইরের দিকে পড়ে না গিয়ে আবার ১টায় ফিরে আসে, তেমনি সার্কুলার কিউতে শেষ ইনডেক্স $MAX-1$ অতিক্রম করলে পয়েন্টার আবার ইনডেক্স $0$-তে ফিরে আসে।`,
      technicalDetails: `### ১. লিনিয়ার কিউ Enqueue অ্যালগরিদম:
\`\`\`algo
Algorithm: ENQUEUE_LINEAR(QUEUE, FRONT, REAR, MAX, ITEM)
Step 1: [Overflow Check]
        If REAR == MAX - 1, then:
            Print "Queue Overflow" and Exit.
Step 2: [Reset Pointers if Queue is Empty]
        If FRONT == -1, then:
            Set FRONT := 0, REAR := 0.
        Else:
            Set REAR := REAR + 1.
Step 3: [Insert Element]
        Set QUEUE[REAR] := ITEM.
Step 4: Exit.
\`\`\`

### ২. লিনিয়ার কিউ Dequeue অ্যালগরিদম:
\`\`\`algo
Algorithm: DEQUEUE_LINEAR(QUEUE, FRONT, REAR, ITEM)
Step 1: [Underflow Check]
        If FRONT == -1 or FRONT > REAR, then:
            Print "Queue Underflow" and Exit.
Step 2: [Retrieve Element]
        Set ITEM := QUEUE[FRONT].
Step 3: [Update Pointers]
        If FRONT == REAR, then:
            Set FRONT := -1, REAR := -1.  (Queue becomes empty)
        Else:
            Set FRONT := FRONT + 1.
Step 4: Return ITEM and Exit.
\`\`\`

### ৩. সার্কুলার কিউ Enqueue অ্যালগরিদম (Modulo Based):
\`\`\`algo
Algorithm: ENQUEUE_CIRCULAR(CQUEUE, FRONT, REAR, MAX, ITEM)
Step 1: [Circular Overflow Check]
        If (REAR + 1) % MAX == FRONT, then:
            Print "Circular Queue Overflow" and Exit.
Step 2: [First Element Check]
        If FRONT == -1, then:
            Set FRONT := 0, REAR := 0.
        Else:
            Set REAR := (REAR + 1) % MAX.
Step 3: Set CQUEUE[REAR] := ITEM.
Step 4: Exit.
\`\`\``,
      keyPoints: [
        "ENQUEUE অপারেশনে REAR পয়েন্টার আপডেট হয়, DEQUEUE অপারেশনে FRONT আপডেট হয়।",
        "লিনিয়ার কিউতে False Overflow ঘটে যা সার্কুলার কিউতে মডুলো পাটিগণিত দিয়ে দূর হয়।",
        "উভয় অপারেশনের টাইম কমপ্লেক্সিটি $O(1)$।"
      ],
      syntaxOrFormulas: [
        {
          label: "C Language Linear Queue Implementation",
          lang: "c",
          codeOrFormula: `#include <stdio.h>
#define MAX 5

int queue[MAX];
int front = -1, rear = -1;

void enqueue(int val) {
    if (rear == MAX - 1) {
        printf("Queue Overflow!\\n");
        return;
    }
    if (front == -1) front = 0;
    rear++;
    queue[rear] = val;
    printf("Enqueued: %d\\n", val);
}

int dequeue() {
    if (front == -1 || front > rear) {
        printf("Queue Underflow!\\n");
        return -1;
    }
    int item = queue[front];
    front++;
    if (front > rear) { front = rear = -1; } // Reset
    return item;
}`
        },
        {
          label: "Python Circular Queue Enqueue/Dequeue Class",
          lang: "python",
          codeOrFormula: `class CircularQueue:
    def __init__(self, size):
        self.size = size
        self.queue = [None] * size
        self.front = -1
        self.rear = -1

    def enqueue(self, data):
        if (self.rear + 1) % self.size == self.front:
            print("Circular Queue Overflow!")
            return
        if self.front == -1:
            self.front = 0
            self.rear = 0
        else:
            self.rear = (self.rear + 1) % self.size
        self.queue[self.rear] = data

    def dequeue(self):
        if self.front == -1:
            print("Circular Queue Underflow!")
            return None
        item = self.queue[self.front]
        if self.front == self.rear:
            self.front = -1
            self.rear = -1
        else:
            self.front = (self.front + 1) % self.size
        return item`
        }
      ]
    },
    {
      id: "5.6",
      titleBn: "ডিকিউ এবং অন্যান্য বিশেষ কিউ ডাটা স্ট্রাকচার",
      titleEn: "State the de-queue data structure",
      concept: `সাধারণ লিনিয়ার কিউ ছাড়াও বাস্তব অ্যাপ্লিকেশনের বিশেষ প্রয়োজন মেটাতে আরও বেশ কিছু উন্নত কিউ ডাটা স্ট্রাকচার ব্যবহৃত হয়। এদের মধ্যে উল্লেখযোগ্য হলো:
১. **ডিকিউ (Deque - Double Ended Queue)**
২. **সার্কুলার কিউ (Circular Queue)**
৩. **প্রায়োরিটি কিউ (Priority Queue)**`,
      realLifeAnalogy: `১. **Deque Analogy:** ট্রেনের একটি বগি যার দুই প্রান্ত দিয়েই যাত্রী উঠা ও নামা করতে পারে।
২. **Priority Queue Analogy:** হাসপাতালে ডাক্তারের চেম্বারের ওয়েটিং রুম। সাধারণ রোগীরা সিরিয়াল অনুযায়ী চিকিৎসা পান, কিন্তু কোনো আশঙ্কাজনক ইমার্জেন্সি রোগী এলে তাকে আগের সব সিরিয়াল টপকে আগে চিকিৎসা দেওয়া হয়!`,
      technicalDetails: `### ১. ডিকিউ (Deque - Double Ended Queue):
এটি এমন এক বিশেষ লিনিয়ার কিউ যেখানে **উভয় প্রান্ত (Front এবং Rear)** দিয়েই ডাটা সংযোজন (Insert) এবং বিয়োজন (Delete) করা সম্ভব।
ডিকিউ প্রধানত দুই প্রকার:
- **ইনপুট-রেস্ট্রিক্টেড ডিকিউ (Input-Restricted Deque):** ডাটা ইনসার্ট কেবল একটি নির্দিষ্ট প্রান্তে (যেমন: Rear) অনুমতি দেওয়া হয়, কিন্তু ডিলিট উভয় প্রান্ত (Front ও Rear) দিয়েই করা যায়।
- **আউটপুট-রেস্ট্রিক্টেড ডিকিউ (Output-Restricted Deque):** ডাটা ডিলিট কেবল একটি প্রান্তে (যেমন: Front) অনুমতি দেওয়া হয়, কিন্তু ইনসার্ট উভয় প্রান্ত দিয়েই করা যায়।

### ২. প্রায়োরিটি কিউ (Priority Queue):
যে কিউতে প্রতিটি ডাটা উপাদানের সাথে একটি নির্দিষ্ট 'অগ্রাধিকার মান' বা **Priority Value** যুক্ত থাকে। 
- ডাটা অপসারণের সময় সাধারণ FIFO নীতি না মেনে সর্বোচ্চ বা সর্বনিম্ন অগ্রাধিকারপ্রাপ্ত উপাদানটি সবার আগে বের হয়।
- **Ascending Priority Queue:** ছোট মান বেশি প্রাধান্য পায় (Min-Heap ভিত্তিক)।
- **Descending Priority Queue:** বড় মান বেশি প্রাধান্য পায় (Max-Heap ভিত্তিক)।`,
      tableData: {
        headers: ["কিউ-এর ধরন", "ইনসার্ট প্রান্ত", "ডিলিট প্রান্ত", "প্রধান সুবিধা / প্রয়োগ"],
        rows: [
          ["Linear Queue", "কেবলমাত্র REAR", "কেবলমাত্র FRONT", "সাধারণ FIFO প্রসেস লাইনের জন্য"],
          ["Circular Queue", "Modulo (REAR+1)%MAX", "Modulo (FRONT+1)%MAX", "মেমরির পুনঃব্যবহার ও রিসোর্স অপচয় রোধ"],
          ["Input-Restricted Deque", "১টি প্রান্ত (REAR)", "২টি প্রান্ত (FRONT & REAR)", "Steal Work Scheduling, Undo-Redo"],
          ["Output-Restricted Deque", "২টি প্রান্ত (FRONT & REAR)", "১টি প্রান্ত (FRONT)", "বাম্পার ইনপুট বাফারিং"],
          ["Priority Queue", "যেকোনো অবস্থান (Priority Order)", "সর্বোচ্চ অগ্রাধিকারপ্রাপ্ত উপাদান", "OS ইমার্জেন্সি ইন্টারাপ্ট, Dijkstra's Algorithm"]
        ]
      },
      keyPoints: [
        "Deque এর পূর্ণরূপ হলো Double-Ended Queue।",
        "ইনপুট-রেস্ট্রিক্টেড ডিকিউতে ইনসার্ট ১ প্রান্তে, কিন্তু ডিলিট ২ প্রান্তে।",
        "প্রায়োরিটি কিউতে FIFO এর চেয়ে ডাটার 'Priority Value' প্রাধান্য পায়।"
      ]
    }
  ],
  practicalPrograms: [
    {
      title: "কিউ (Linear Queue)-তে ডাটা সন্নিবেশ (Enqueue) এবং অপসারণ (Dequeue) করার প্রোগ্রাম।",
      problemStatementBn: "C এবং Python ভাষায় একটি নির্দিষ্ট ধারণক্ষমতার লিনিয়ার কিউ তৈরি করে তাতে ম্যানুয়ালি এবং ইউজার ইনপুটের মাধ্যমে ডাটা Enqueue ও Dequeue করার প্রোগ্রাম তৈরি ও প্রদর্শন করো।",
      algorithmStepsBn: [
        "ধাপ ১: MAX সাইজের একটি অ্যারে এবং front = -1, rear = -1 ঘোষণা করি।",
        "ধাপ ২: Enqueue ফাংশনে rear == MAX - 1 কিনা পরীক্ষা করি; সত্য হলে Overflow প্রিন্ট করি।",
        "ধাপ ৩: প্রথম উপাদানের ক্ষেত্রে front = 0 সেট করি এবং rear বাড়িয়ে ডাটা অ্যাসাইন করি।",
        "ধাপ ৪: Dequeue ফাংশনে front == -1 অথবা front > rear হলে Underflow প্রিন্ট করি।",
        "ধাপ ৫: front ইনডেক্সের মান সংগ্রহ করে front এর মান ১ বাড়িয়ে দিই।",
        "ধাপ ৬: সব উপাদান বেরিয়ে গেলে front ও rear কে পুনরায় -1 এ রিসেট করি।"
      ],
      cCode: `#include <stdio.h>
#define MAX 5

int queue[MAX];
int front = -1;
int rear = -1;

void enqueue(int value) {
    if (rear == MAX - 1) {
        printf("⚠️ Queue Overflow! %d যোগ করা সম্ভব নয়।\\n", value);
        return;
    }
    if (front == -1) front = 0;
    rear++;
    queue[rear] = value;
    printf("✅ Enqueued: %d (FRONT = %d, REAR = %d)\\n", value, front, rear);
}

int dequeue() {
    if (front == -1 || front > rear) {
        printf("⚠️ Queue Underflow! কিউ খালি।\\n");
        return -1;
    }
    int item = queue[front];
    printf("✅ Dequeued: %d (প্রাক্তন FRONT = %d)\\n", item, front);
    front++;
    if (front > rear) {
        front = rear = -1; // Reset empty queue
    }
    return item;
}

void display() {
    if (front == -1) {
        printf("কিউ খালি!\\n");
        return;
    }
    printf("বর্তমান কিউ উপাদানসমূহ: ");
    for (int i = front; i <= rear; i++) {
        printf("[%d] ", queue[i]);
    }
    printf("\\n");
}

int main() {
    printf("--- BTEB Chapter 5: Linear Queue Program ---\\n");
    enqueue(10);
    enqueue(20);
    enqueue(30);
    display();

    dequeue();
    display();

    enqueue(40);
    enqueue(50);
    enqueue(60); // Overflow Check
    display();

    return 0;
}`,
      pythonCode: `class LinearQueue:
    def __init__(self, capacity=5):
        self.capacity = capacity
        self.queue = [None] * capacity
        self.front = -1
        self.rear = -1

    def enqueue(self, val):
        if self.rear == self.capacity - 1:
            print(f"⚠️ Queue Overflow! {val} যোগ করা সম্ভব নয়।")
            return
        if self.front == -1:
            self.front = 0
        self.rear += 1
        self.queue[self.rear] = val
        print(f"✅ Enqueued: {val} (FRONT={self.front}, REAR={self.rear})")

    def dequeue(self):
        if self.front == -1 or self.front > self.rear:
            print("⚠️ Queue Underflow! কিউ খালি।")
            return None
        val = self.queue[self.front]
        print(f"✅ Dequeued: {val}")
        self.front += 1
        if self.front > self.rear:
            self.front = -1
            self.rear = -1
        return val

    def display(self):
        if self.front == -1:
            print("কিউ সম্পূর্ণ খালি।")
            return
        items = self.queue[self.front : self.rear + 1]
        print(f"বর্তমান কিউ: {items}")

# Program Execution
if __name__ == "__main__":
    q = LinearQueue(5)
    q.enqueue(100)
    q.enqueue(200)
    q.enqueue(300)
    q.display()
    q.dequeue()
    q.display()`,
      sampleOutput: `--- BTEB Chapter 5: Linear Queue Program ---
✅ Enqueued: 10 (FRONT = 0, REAR = 0)
✅ Enqueued: 20 (FRONT = 0, REAR = 1)
✅ Enqueued: 30 (FRONT = 0, REAR = 2)
বর্তমান কিউ উপাদানসমূহ: [10] [20] [30] 
✅ Dequeued: 10 (প্রাক্তন FRONT = 0)
বর্তমান কিউ উপাদানসমূহ: [20] [30] 
✅ Enqueued: 40 (FRONT = 1, REAR = 3)
✅ Enqueued: 50 (FRONT = 1, REAR = 4)
⚠️ Queue Overflow! 60 যোগ করা সম্ভব নয়।
বর্তমান কিউ উপাদানসমূহ: [20] [30] [40] [50]`,
      explanationBn: "প্রোগ্রামটিতে লিনিয়ার কিউর FIFO নীতি বাস্তবায়ন করা হয়েছে। Enqueue করলে REAR বৃদ্ধি পায় এবং Dequeue করলে FRONT বৃদ্ধি পায়। সব ডাটা অপসারণের পর পয়েন্টার দুটিকে রিসেট করা হয়েছে।"
    },
    {
      title: "সার্কুলার কিউ (Circular Queue) বাস্তবায়ন এবং মডুলো পাটিগণিত ভিত্তিক ডাটা হ্যান্ডলিং প্রোগ্রাম।",
      problemStatementBn: "C এবং Python ভাষায় মডুলো অপারেটর `%` ব্যবহার করে সার্কুলার কিউ প্রোগ্রাম তৈরি করো যা লিনিয়ার কিউ-এর False Overflow সমস্যা দূর করে মেমরির দক্ষ ব্যবহার নিশ্চিত করে।",
      algorithmStepsBn: [
        "ধাপ ১: MAX আকারের বৃত্তাকার অ্যারে এবং front = -1, rear = -1 ঘোষণা করি।",
        "ধাপ ২: Enqueue এর সময় Overflow শর্ত `(rear + 1) % MAX == front` পরীক্ষা করি।",
        "ধাপ ৩: ফাঁকা কিউ হলে front = 0, rear = 0 করি; অন্যথায় `rear = (rear + 1) % MAX` করি।",
        "ধাপ ৪: Dequeue এর সময় Underflow শর্ত `front == -1` পরীক্ষা করি।",
        "ধাপ ৫: শেষ উপাদান হলে `front = rear = -1` সেট করি; অন্যথায় `front = (front + 1) % MAX` করি।"
      ],
      cCode: `#include <stdio.h>
#define SIZE 5

int cqueue[SIZE];
int front = -1, rear = -1;

void c_enqueue(int value) {
    if ((rear + 1) % SIZE == front) {
        printf("⚠️ Circular Queue Overflow! (%d)\n", value);
        return;
    }
    if (front == -1) {
        front = 0;
        rear = 0;
    } else {
        rear = (rear + 1) % SIZE;
    }
    cqueue[rear] = value;
    printf("🔄 Circular Enqueued: %d (FRONT = %d, REAR = %d)\n", value, front, rear);
}

int c_dequeue() {
    if (front == -1) {
        printf("⚠️ Circular Queue Underflow!\n");
        return -1;
    }
    int item = cqueue[front];
    printf("🔄 Circular Dequeued: %d\n", item);
    if (front == rear) {
        front = rear = -1; // Empty again
    } else {
        front = (front + 1) % SIZE;
    }
    return item;
}

int main() {
    printf("--- BTEB Chapter 5: Circular Queue Program ---\n");
    c_enqueue(10);
    c_enqueue(20);
    c_enqueue(30);
    c_enqueue(40);
    
    c_dequeue(); // Frees index 0
    c_dequeue(); // Frees index 1

    c_enqueue(50);
    c_enqueue(60); // Wraps around to index 0!
    c_enqueue(70); // Wraps around to index 1!

    return 0;
}`,
      pythonCode: `class CircularQueue:
    def __init__(self, size=5):
        self.size = size
        self.queue = [None] * size
        self.front = -1
        self.rear = -1

    def enqueue(self, value):
        if (self.rear + 1) % self.size == self.front:
            print(f"⚠️ Circular Overflow! {value}")
            return
        if self.front == -1:
            self.front = 0
            self.rear = 0
        else:
            self.rear = (self.rear + 1) % self.size
        self.queue[self.rear] = value
        print(f"🔄 Enqueued: {value} at REAR={self.rear}")

    def dequeue(self):
        if self.front == -1:
            print("⚠️ Circular Underflow!")
            return None
        val = self.queue[self.front]
        print(f"🔄 Dequeued: {val} from FRONT={self.front}")
        if self.front == self.rear:
            self.front = -1
            self.rear = -1
        else:
            self.front = (self.front + 1) % self.size
        return val

cq = CircularQueue(5)
cq.enqueue(10)
cq.enqueue(20)
cq.enqueue(30)
cq.dequeue()
cq.enqueue(40)
cq.enqueue(50)
cq.enqueue(60) # Uses freed space!`,
      sampleOutput: `--- BTEB Chapter 5: Circular Queue Program ---
🔄 Circular Enqueued: 10 (FRONT = 0, REAR = 0)
🔄 Circular Enqueued: 20 (FRONT = 0, REAR = 1)
🔄 Circular Enqueued: 30 (FRONT = 0, REAR = 2)
🔄 Circular Enqueued: 40 (FRONT = 0, REAR = 3)
🔄 Circular Dequeued: 10
🔄 Circular Dequeued: 20
🔄 Circular Enqueued: 50 (FRONT = 2, REAR = 4)
🔄 Circular Enqueued: 60 (FRONT = 2, REAR = 0)
🔄 Circular Enqueued: 70 (FRONT = 2, REAR = 1)`,
      explanationBn: "সার্কুলার কিউতে Dequeue এর মাধ্যমে ফাঁকা হওয়া শুরুর মেমরি ইনডেক্সগুলোতে মডুলো পাটিগণিত `%` প্রয়োগ করে পুনরায় নতুন ডাটা ঢোকানো সম্ভব হয়েছে।"
    }
  ],
  summaryPoints: [
    "কিউ (Queue) একটি রৈখিক ডাটা স্ট্রাকচার যা FIFO (First In First Out) মূলনীতি অনুসরণ করে।",
    "কিউতে ডাটা প্রবেশের প্রান্তকে REAR (ইনসার্ট/Enqueue) এবং বের হওয়ার প্রান্তকে FRONT (ডিলিট/Dequeue) বলে।",
    "অপারেটিং সিস্টেমে CPU Scheduling (FCFS), প্রিন্ট স্পুলিং (Print Queue) এবং BFS অ্যালগরিদমে কিউ প্রধান হাতিয়ার।",
    "FIFO নীতিতে আগে আসা অনুরোধ আগে মেটানো হয়; অপরদিকে LIFO (স্ট্যাক) নীতিতে শেষের ডাটা আগে বের হয়।",
    "স্ট্যাকে ১টি পয়েন্টার (TOP) থাকে, কিন্তু কিউতে ২টি পয়েন্টার (FRONT এবং REAR) প্রয়োজন হয়।",
    "লিনিয়ার কিউতে $REAR = MAX - 1$ হলে False Overflow ঘটে, যদিও সামনে মেমরি খালি থাকে।",
    "সার্কুলার কিউতে মডুলো পাটিগণিত $(REAR + 1) \\pmod{MAX}$ ব্যবহার করে False Overflow দূর করা হয়।",
    "সার্কুলার কিউর পূর্ণ অবস্থার শর্ত: $(REAR + 1) \\pmod{MAX} == FRONT$।",
    "ডিকিউ (Deque)-এর উভয় প্রান্ত (Front & Rear) দিয়েই ডাটা ইনসার্ট ও ডিলিট করা যায়।",
    "প্রায়োরিটি কিউ (Priority Queue)-তে প্রতিটি ডাটার অগ্রাধিকার মান থাকে এবং সর্বোচ্চ অগ্রাধিকারের ডাটা আগে বের হয়।"
  ],
  boardQuestions: [
    {
      id: "q5-1",
      type: "ati_songkhipto",
      questionBn: "কিউ (Queue) কাকে বলে?",
      answerBn: "কিউ হলো একটি রৈখিক (Linear) ডাটা স্ট্রাকচার যা FIFO (First In, First Out) নীতি অনুসরণ করে কাজ করে, অর্থাৎ যার এক প্রান্ত (REAR) দিয়ে নতুন ডাটা যুক্ত হয় এবং অপর প্রান্ত (FRONT) দিয়ে ডাটা অপসারিত হয়।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2018", "BTEB 2015"],
      isImportant: true,
      subtopicRef: "5.1"
    },
    {
      id: "q5-2",
      type: "ati_songkhipto",
      questionBn: "FIFO এর পূর্ণরূপ কী?",
      answerBn: "FIFO এর পূর্ণরূপ হলো **First In, First Out**।",
      marks: 1,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2017"],
      isImportant: true,
      subtopicRef: "5.3"
    },
    {
      id: "q5-3",
      type: "ati_songkhipto",
      questionBn: "কিউ-এর ডাটা ইনসার্ট এবং ডিলিট অপারেশনকে কী বলে?",
      answerBn: "কিউ-তে ডাটা ইনসার্ট করাকে **ENQUEUE** এবং ডাটা অপসারণ বা ডিলিট করাকে **DEQUEUE** বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2019", "BTEB 2016"],
      isImportant: true,
      subtopicRef: "5.1"
    },
    {
      id: "q5-4",
      type: "ati_songkhipto",
      questionBn: "Deque (ডিকিউ) এর পূর্ণরূপ কী?",
      answerBn: "Deque এর পূর্ণরূপ হলো **Double-Ended Queue** (ডাবল-এন্ডেড কিউ)।",
      marks: 1,
      yearsAppeared: ["BTEB 2022", "BTEB 2018", "BTEB 2014"],
      isImportant: true,
      subtopicRef: "5.6"
    },
    {
      id: "q5-5",
      type: "ati_songkhipto",
      questionBn: "সার্কুলার কিউ-এর Overflow শর্তটি কী?",
      answerBn: "সার্কুলার কিউ-এর Overflow শর্ত হলো: `(REAR + 1) % MAX == FRONT`।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2020", "BTEB 2017"],
      isImportant: true,
      subtopicRef: "5.5"
    },
    {
      id: "q5-6",
      type: "songkhipto",
      questionBn: "ডাটা স্ট্রাকচারে কিউ-এর ৩টি বাস্তব প্রয়োগ উল্লেখ করো।",
      answerBn: "কিউ-এর ৩টি গুরুত্বপূর্ণ বাস্তব প্রয়োগ নিচে দেওয়া হলো:\n১. **অপারেটিং সিস্টেমের প্রসেস সিডিউলিং:** CPU সময় বণ্টনে FCFS ও Round Robin Ready Queue হিসেবে।\n২. **প্রিন্টার স্পুলিং (Print Spooling):** একের পর এক ফাইল প্রিন্ট করার জন্য Print Queue বাফারে।\n৩. **গ্রাফ ট্রাভার্সাল (BFS):** গ্রাফের লেভেল-বাই-লেভেল নোড পরিদর্শনে Breadth First Search অ্যালগরিদমে।",
      marks: 3,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2019"],
      isImportant: true,
      subtopicRef: "5.2"
    },
    {
      id: "q5-7",
      type: "songkhipto",
      questionBn: "লিনিয়ার কিউ-এর সীমাবদ্ধতা এবং সার্কুলার কিউ-এর প্রয়োজনীয়তা ব্যাখ্যা করো।",
      answerBn: "### লিনিয়ার কিউ-এর সীমাবদ্ধতা (False Overflow):\nলিনিয়ার কিউতে ডাটা Dequeue করলে FRONT পয়েন্টার সামনে বাড়ে, কিন্তু পূর্বের স্থানগুলো খালি হলেও সেখানে আর ডাটা ঢোকানো যায় না। যখন REAR = MAX - 1 হয়, তখন মেমরিতে ফাঁকা জায়গা থাকা সত্ত্বেও Queue Overflow দেখায়।\n\n### সার্কুলার কিউ-এর প্রয়োজনীয়তা:\nএই মেমরি অপচয় রোধ করতে সার্কুলার কিউতে শেষ ঘরকে মডুলো পাটিগণিত `(REAR + 1) % MAX` এর মাধ্যমে আবার প্রথম ঘরের সাথে যুক্ত করা হয়। ফলে মেমরির সঠিক পুনর্ব্যবহার সম্ভব হয়।",
      marks: 3,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2018", "BTEB 2015"],
      isImportant: true,
      subtopicRef: "5.5"
    },
    {
      id: "q5-8",
      type: "songkhipto",
      questionBn: "ইনপুট-রেস্ট্রিক্টেড এবং আউটপুট-রেস্ট্রিক্টেড ডিকিউ (Deque) এর মধ্যে পার্থক্য লেখো।",
      answerBn: "১. **ইনপুট-রেস্ট্রিক্টেড ডিকিউ (Input-Restricted Deque):** এতে ডাটা সংজোযন (Insert) কেবল একটি নির্দিষ্ট প্রান্তে (যেমন REAR) হয়, কিন্তু অপসারণ (Delete) উভয় প্রান্ত (Front & Rear) দিয়েই করা যায়।\n\n২. **আউটপুট-রেস্ট্রিক্টেড ডিকিউ (Output-Restricted Deque):** এতে ডাটা অপসারণ (Delete) কেবল একটি নির্দিষ্ট প্রান্তে (যেমন FRONT) হয়, কিন্তু সংযোজন (Insert) উভয় প্রান্ত দিয়েই করা যায়।",
      marks: 3,
      yearsAppeared: ["BTEB 2021", "BTEB 2019", "BTEB 2016"],
      isImportant: true,
      subtopicRef: "5.6"
    },
    {
      id: "q5-9",
      type: "rochonamulok",
      questionBn: "ছক আকারে স্ট্যাক (Stack) এবং কিউ (Queue) ডাটা স্ট্রাকচারের বিস্তৃত পার্থক্য লেখো।",
      answerBn: `বিটিইবি সিলেবাস অনুযায়ী স্ট্যাক এবং কিউ এর পার্থক্যসমূহ নিচে তুলে ধরা হলো:

| পার্থক্যের বিষয় | স্ট্যাক (Stack) | কিউ (Queue) |
| :--- | :--- | :--- |
| **১. মূলনীতি** | LIFO (Last In First Out) মেনে চলে। | FIFO (First In First Out) মেনে চলে। |
| **২. পয়েন্টার** | ১টি পয়েন্টার থাকে: **TOP**। | ২টি পয়েন্টার থাকে: **FRONT** ও **REAR**। |
| **৩. কাজ করার প্রান্ত** | একই প্রান্তে (TOP) ইনসার্ট ও ডিলিট হয়। | ভিন্ন প্রান্তে হয় (REAR এ ইনসার্ট, FRONT এ ডিলিট)। |
| **৪. অপারেশনের নাম** | ডাটা যোগকে PUSH ও বাদকে POP বলে। | ডাটা যোগকে ENQUEUE ও বাদকে DEQUEUE বলে। |
| **৫. খালি শর্ত** | $\\text{TOP} == -1$ | $\\text{FRONT} == -1$ অথবা $\\text{FRONT} > \\text{REAR}$ |
| **৬. পূর্ণ শর্ত** | $\\text{TOP} == \\text{MAX} - 1$ | $\\text{REAR} == \\text{MAX} - 1$ (Linear) |
| **৭. প্রয়োগক্ষেত্র** | রিকার্শন, ফাংশন কল, Infix-Postfix রূপান্তর। | CPU সিডিউলিং, প্রিন্ট স্পুলিং, BFS ট্রাভার্সাল। |`,
      marks: 5,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2019", "BTEB 2017", "BTEB 2014"],
      isImportant: true,
      subtopicRef: "5.4"
    },
    {
      id: "q5-10",
      type: "rochonamulok",
      questionBn: "চিত্রসহ লিনিয়ার কিউ-তে ডাটা ইনসার্ট (Enqueue) এবং ডিলিট (Dequeue) করার পূর্ণাঙ্গ অ্যালগরিদম ও টাইম কমপ্লেক্সিটি আলোচনা করো।",
      answerBn: `### ১. Enqueue অ্যালগরিদম (ডাটা যোগকরণ):
\`\`\`algo
Algorithm: ENQUEUE(QUEUE, FRONT, REAR, MAX, ITEM)
ধাপ ১: [ওভারফ্লো পরীক্ষা]
      If REAR == MAX - 1, then:
          Print "Queue Overflow" and Exit.
ধাপ ২: [প্রথম ডাটার ক্ষেত্রে রিসেট]
      If FRONT == -1, then:
          Set FRONT := 0, REAR := 0.
      Else:
          Set REAR := REAR + 1.
ধাপ ৩: Set QUEUE[REAR] := ITEM.
ধাপ ৪: Exit.
\`\`\`

### ২. Dequeue অ্যালগরিদম (ডাটা অপসারণ):
\`\`\`algo
Algorithm: DEQUEUE(QUEUE, FRONT, REAR, ITEM)
ধাপ ১: [আন্ডারফ্লো পরীক্ষা]
      If FRONT == -1 or FRONT > REAR, then:
          Print "Queue Underflow" and Exit.
ধাপ ২: Set ITEM := QUEUE[FRONT].
ধাপ ৩: [পয়েন্টার আপডেট]
      If FRONT == REAR, then:
          Set FRONT := -1, REAR := -1.
      Else:
          Set FRONT := FRONT + 1.
ধাপ ৪: Return ITEM and Exit.
\`\`\`

**টাইম কমপ্লেক্সিটি বিশ্লেষণ:**
কিউতে একক Enqueue বা Dequeue অপারেশনে কোনো লুপ ঘুরানোর প্রয়োজন হয় না। সরাসরি FRONT বা REAR পয়েন্টার আপডেট করে ইনডেক্স অ্যাক্সেস করা যায়। ফলে এদের Time Complexity সর্বদা $O(1)$।`,
      diagramContent: `       ENQUEUE(10)                       DEQUEUE()
     ┌──────────────┐                 ┌──────────────┐
REAR │  10          │ Index 0   FRONT │  10 (Popped) │ Index 0
     └──────────────┘                 ├──────────────┤
FRONT = 0, REAR = 0                   │  20 (Front)  │ Index 1
                                      └──────────────┘`,
      marks: 5,
      yearsAppeared: ["BTEB 2023", "BTEB 2020", "BTEB 2018", "BTEB 2016"],
      isImportant: true,
      subtopicRef: "5.5"
    }
  ],
  quizQuestions: [
    {
      id: 1,
      questionBn: "কিউ (Queue) কোন মেমরি নীতি মেনে পরিচালনা করা হয়?",
      options: ["LIFO (Last In First Out)", "FIFO (First In First Out)", "Random Access", "SJF"],
      correctAnswerIndex: 1,
      explanationBn: "কিউ হলো একটি FIFO (First In First Out) ডাটা স্ট্রাকচার যেখানে আগে প্রবিষ্ট ডাটা আগে বের হয়।",
      topicRef: "5.1"
    },
    {
      id: 2,
      questionBn: "কিউ-তে নতুন উপাদান যোগ করার প্রান্তকে কী বলে?",
      options: ["FRONT", "REAR", "TOP", "HEAD"],
      correctAnswerIndex: 1,
      explanationBn: "কিউ-তে উপাদান সংযোজনের প্রান্তকে REAR এবং অপসারণের প্রান্তকে FRONT বলে।",
      topicRef: "5.1"
    },
    {
      id: 3,
      questionBn: "কিউ সম্পূর্ণ খালি থাকলে FRONT ও REAR পয়েন্টারের মান কত থাকে?",
      options: ["0, 0", "-1, -1", "MAX, MAX", "1, 1"],
      correctAnswerIndex: 1,
      explanationBn: "সি ল্যাঙ্গুয়েজে খালি কিউ এর ক্ষেত্রে FRONT = -1 এবং REAR = -1 নির্ধারিত থাকে।",
      topicRef: "5.1"
    },
    {
      id: 4,
      questionBn: "প্রিন্টার স্পুলিং (Print Spooling) এবং CPU Scheduling এ কোন ডাটা স্ট্রাকচার ব্যবহৃত হয়?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      correctAnswerIndex: 1,
      explanationBn: "প্রিন্টার স্পুলিং ও অপারেটিং সিস্টেমের প্রসেস সিডিউলিংয়ে কাজের ক্রম বজায় রাখতে কিউ ব্যবহৃত হয়।",
      topicRef: "5.2"
    },
    {
      id: 5,
      questionBn: "গ্রাফের Breadth First Search (BFS) ট্রাভার্সালে কোনটি অপরিহার্য?",
      options: ["Stack", "Queue", "Array Matrix", "Binary Heap"],
      correctAnswerIndex: 1,
      explanationBn: "BFS অ্যালগরিদমে লেভেল-বাই-লেভেল ট্রাভার্সাল করতে FIFO কিউ ব্যবহার করা বাধ্যতামূলক।",
      topicRef: "5.2"
    },
    {
      id: 6,
      questionBn: "লিনিয়ার কিউ-এর মেমরি অপচয় (False Overflow) দূর করে কোনটি?",
      options: ["Stack", "Circular Queue", "Priority Queue", "Linear Array"],
      correctAnswerIndex: 1,
      explanationBn: "সার্কুলার কিউ মডুলো পাটিগণিত ব্যবহার করে লিনিয়ার কিউ-এর ফাঁকা মেমরি পুনর্ব্যবহার নিশ্চিত করে।",
      topicRef: "5.5"
    },
    {
      id: 7,
      questionBn: "সার্কুলার কিউ-তে REAR পয়েন্টার বৃদ্ধির সঠিক গাণিতিক সূত্র কোনটি?",
      options: ["REAR = REAR + 1", "REAR = (REAR + 1) % MAX", "REAR = REAR % MAX", "REAR = FRONT + 1"],
      correctAnswerIndex: 1,
      explanationBn: "সার্কুলার কিউতে পয়েন্টার ঘোরানোর সূত্র হলো `(REAR + 1) % MAX`।",
      topicRef: "5.5"
    },
    {
      id: 8,
      questionBn: "উভয় প্রান্ত দিয়েই ডাটা ইনসার্ট এবং ডিলিট করা যায় কোন স্ট্রাকচারে?",
      options: ["Priority Queue", "Deque (Double Ended Queue)", "Linear Queue", "Stack"],
      correctAnswerIndex: 1,
      explanationBn: "Deque (Double Ended Queue) এর FRONT এবং REAR উভয় প্রান্ত দিয়েই ইনসার্ট ও ডিলিট সম্ভব।",
      topicRef: "5.6"
    },
    {
      id: 9,
      questionBn: "কোনো কিউ-এর প্রতিটি ডাটার সাথে 'Priority Value' যুক্ত থাকলে তাকে কী বলে?",
      options: ["Circular Queue", "Priority Queue", "Deque", "Double Queue"],
      correctAnswerIndex: 1,
      explanationBn: "প্রায়োরিটি কিউতে সাধারণ FIFO না মেনে সর্বোচ্চ অগ্রাধিকারপ্রাপ্ত উপাদান আগে বের হয়।",
      topicRef: "5.6"
    },
    {
      id: 10,
      questionBn: "লিনিয়ার কিউ-এর Enqueue এবং Dequeue অপারেশনের সময়কাল (Time Complexity) কত?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      correctAnswerIndex: 2,
      explanationBn: "কিউ-এর একক ইনসার্ট বা ডিলিট অপারেশনে সরাসরি পয়েন্টার আপডেট হয় বলে এর সময়সীমা O(1)।",
      topicRef: "5.5"
    }
  ]
};
