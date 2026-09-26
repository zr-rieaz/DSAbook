import { Chapter } from '../types/syllabus';

export const CHAPTER_7_DATA: Chapter = {
  id: 7,
  code: "28542-CH07",
  titleBn: "ট্রি (Tree)",
  titleEn: "Tree Data Structure",
  status: "complete",
  learningObjectives: [
    "ট্রি (Tree) ডাটা স্ট্রাকচারের মূল ধারণা, নন-লিনিয়ার হায়ারার্কিকাল গঠন এবং লিনিয়ার ডাটা স্ট্রাকচারের সাথে পার্থক্য অনুধাবন করা।",
    "ট্রি-এর প্রধান টার্মিনোলজিসমূহ (Root, Node, Parent, Child, Leaf, Keys, Sub-tree, Level, Depth, Height, Degree) আয়ত্ত করা।",
    "ডাটা স্ট্রাকচারে ব্যবহৃত বিভিন্ন প্রকার ট্রি (General Tree, Binary Tree, Strictly Binary Tree, Complete Binary Tree, BST, AVL Tree, Heap, B-Tree) চিহ্নিতকরণ ও এদের চিত্রে উপস্থাপন করা।",
    "বাইনারি ট্রির গাণিতিক বৈশিষ্ট্যসমূহ ($N$ নোডে $N-1$ টি edge, $L$ লেভেলে সর্বোচ্চ $2^L$ নোড, $h$ উচ্চতায় সর্বোচ্চ $2^{h+1}-1$ নোড) অনুধাবন ও প্রমাণ করতে পারা।",
    "বাইনারি সার্চ ট্রি (BST - Binary Search Tree)-এর মূলনীতি (Left < Root < Right) প্রয়োগ করা।",
    "বাইনারি সার্চ ট্রিতে নতুন ডাটা সংযোজন (Insertion) এবং ডাটা অপসারণ (Deletion - Leaf, 1-Child, 2-Children cases) করার অ্যালগরিদম ব্যাখ্যা করা।",
    "ট্রি ট্রাভার্সালের ৩টি স্ট্যান্ডার্ড অ্যালগরিদম (In-order, Pre-order, Post-order) এর ধাপ ও আউটপুট ছক তৈরি করতে পারা।",
    "সি (C) এবং পাইথন (Python) ভাষায় সম্পূর্ণ বাইনারি সার্চ ট্রি বাস্তবায়ন ও রিকার্সিভ ট্রাভার্সাল প্রোগ্রাম তৈরি ও এক্সিকিউট করা।"
  ],
  subtopics: [
    {
      id: "7.1",
      titleBn: "ট্রি ডাটা স্ট্রাকচারের সংজ্ঞা ও মূল ধারণা",
      titleEn: "State the tree",
      concept: `ট্রি (Tree) হলো একটি নন-লিনিয়ার (Non-linear) এবং হায়ারার্কিকাল (Hierarchical / স্তরভিত্তিক) ডাটা স্ট্রাকচার, যা কতগুলো নোড (Node) এবং এদের সংযোগকারী নির্দেশক বা এজ (Edge) এর সমন্বয়ে গঠিত। 

লিনিয়ার ডাটা স্ট্রাকচারের (যেমন: অ্যারে, স্ট্যাক, কিউ) ক্ষেত্রে ডাটা একটার পর একটা অনুক্রমিক অর্ডারে থাকে, কিন্তু ট্রিতে ডাটা গাছের ডালপালার মতো পিতা-সন্তান (Parent-Child) বা স্তরভিত্তিক সম্পর্কে বিন্যস্ত থাকে। প্রতিটি ট্রিতে সর্বশীর্ষে একটি অনন্য নোড থাকে, যাকে **রুট নোড (Root Node)** বলা হয়।`,
      realLifeAnalogy: `১. পারিবারিক বংশতালিকা (Family Tree): দাদা ➔ বাবা/চাচা ➔ সন্তানাদি।
২. কম্পিউটারের ফাইল সিস্টেম ডিরেক্টরি: মূল ড্রাইভ C:\\ ➔ Program Files ➔ Sub-folder ➔ MyFile.txt।
৩. পলিটেকনিকের প্রাতিষ্ঠানিক অর্গানোগ্রাম: প্রিন্সিপাল ➔ বিভাগীয় প্রধান (HoD) ➔ চিফ ইনস্ট্রাক্টর ➔ ইনস্ট্রাক্টর ➔ ছাত্রছাত্রী।`,
      technicalDetails: `ট্রি ডাটা স্ট্রাকচারের মূল বৈশিষ্ট্যসমূহ:
- ট্রিতে কখনোই কোনো চক্র বা লুপ (Cycle / Loop) গঠিত হতে পারে না।
- ট্রিতে $N$ টি নোড থাকলে তাদের যুক্তকারী শাখা বা এজের (Edges) সংখ্যা সর্বদা $N - 1$ হবে।
- প্রতিটি নোডের (রুট বাদে) ঠিক একটিমাত্র প্যারেন্ট (Parent Node) থাকে।`,
      diagramType: "ascii",
      diagramContent: ` ┌────────────────────────────────────────────────────────────────────────┐
 │                      Hierarchical Tree Structure                       │
 ├────────────────────────────────────────────────────────────────────────┤
 │                             [ Root: A ]   ◄── Level 0                  │
 │                            /           \\                               │
 │                  [ Parent: B ]       [ Parent: C ]   ◄── Level 1       │
 │                  /          \\                 \\                        │
 │           [ Leaf: D ]   [ Leaf: E ]       [ Leaf: F ] ◄── Level 2      │
 └────────────────────────────────────────────────────────────────────────┘`,
      tableData: {
        headers: ["বৈশিষ্ট্য / তুলনার বিষয়", "লিনিয়ার ডাটা স্ট্রাকচার (Array, Queue)", "নন-লিনিয়ার ডাটা স্ট্রাকচার (Tree)"],
        rows: [
          ["ডাটা সংগঠন", "উপাদানগুলো অনুক্রমিক অর্ডারে সাজানো।", "উপাদানগুলো স্তরভিত্তিক (Hierarchical)।"],
          ["সম্পর্ক", "১-টু-১ (1-to-1) অনুক্রমিক সম্পর্ক।", "১-টু-মেনি (1-to-Many) পিতা-সন্তান সম্পর্ক।"],
          ["ট্রাভার্সাল পাস", "সিঙ্গেল পাসে ট্রাভার্স করা যায়।", "রিকার্সন বা একাধিক পাসের প্রয়োজন হয়।"],
          ["প্রয়োগের ক্ষেত্র", "অর্ডার্ড উপাদান তালিকা, বাফারিং।", "ফাইল সিস্টেম, এক্সপ্রেশন ট্রাভার্সাল, BST Search।"]
        ]
      },
      keyPoints: [
        "ট্রি একটি নন-লিনিয়ার হায়ারার্কিকাল ডাটা স্ট্রাকচার।",
        "ট্রির সর্বোচ্চ স্তরের অনন্য প্রধান নোডকে Root Node বলা হয়।",
        "$N$ টি নোড বিশিষ্ট যেকোনো ট্রিতে মোট এজের সংখ্যা $N - 1$।"
      ]
    },
    {
      id: "7.2",
      titleBn: "ট্রি-এর প্রধান টার্মিনোলজিসমূহ",
      titleEn: "State Root, Node, Leaf, Keys, Sub-tree, Level of tree",
      concept: `ট্রি ডাটা স্ট্রাকচার অনুধাবন ও অ্যালগরিদম তৈরির জন্য এর সাথে যুক্ত বিভিন্ন পরিভাষা বা টার্মিনোলজি (Terminology) জানা অত্যন্ত আবশ্যক:

১. **রুট নোড (Root Node):** ট্রির সর্বশীর্ষের যে নোডের কোনো অভিভাবক বা Parent Node থাকে না।
২. **নোড (Node):** ট্রির প্রতিটি স্বতন্ত্র ডাটা উপাদান, যা ডাটা ও পয়েন্টার ফিল্ড ধারণ করে।
৩. **প্যারেন্ট ও চাইল্ড (Parent & Child):** কোনো নোডের ঠিক নিচের সংলগ্ন নোডগুলো হলো তার Child, আর নোডটির ওপরের যুক্ত নোডটি হলো Parent।
৪. **লিফ নোড (Leaf / Terminal Node):** যে নোডের কোনো চাইল্ড বা সন্তান নেই।
৫. **অভ্যন্তরীণ নোড (Internal / Non-terminal Node):** রুট ছাড়া অন্তত একটি চাইল্ড বিশিষ্ট নোড।
৬. **সাব-ট্রি (Sub-tree):** ট্রির যেকোনো নোডকে রুট ধরে তার নিচের চাইল্ডদের নিয়ে গঠিত ছোট ট্রি।
৭. **কী মান (Key Value):** নোডে সংরক্ষিত তুলনাযোগ্য নির্দিষ্ট ডাটা মান।
৮. **লেভেল (Level):** রুটের লেভেল হলো ০; রুটের চাইল্ডদের লেভেল ১, তাদের চাইল্ডদের লেভেল ২ ইত্যাদি।
৯. **উচ্চতা / গভীরতা (Height / Depth):** রুট নোড থেকে দূরতম লিফ নোড পর্যন্ত দীর্ঘতম পথের মোট এজের সংখ্যা।
১০. **ডিগ্রি (Degree of Node):** কোনো নির্দিষ্ট নোডের মোট চাইল্ড সংখ্যা।`,
      realLifeAnalogy: `একটি বাস্তব গাছের মতো—গোড়াটি হলো Root, ডালপালাগুলো হলো Sub-trees, আর ডালের একদম প্রান্তের পাতাগুলো হলো Leaf Nodes!`,
      technicalDetails: `টার্মিনোলজির গাণিতিক সম্পর্ক:
- $\\text{Height of Tree} = \\text{Maximum Level Number}$
- $\\text{Degree of Tree} = \\text{Maximum Degree among all nodes}$`,
      tableData: {
        headers: ["টার্মিনোলজি", "সংজ্ঞা (Definition)", "চিত্রের উদাহরণ"],
        rows: [
          ["Root Node", "ট্রির প্রথম ও প্রধান নোড।", "A"],
          ["Leaf Node", "যার কোনো চাইল্ড নোড নেই।", "D, E, F"],
          ["Internal Node", "যার অন্তত একটি চাইল্ড রয়েছে।", "B, C"],
          ["Siblings", "একই Parent এর সন্তান নোডগুলো।", "B এবং C হলো A এর চাইল্ড"],
          ["Height", "রুট থেকে দূরতম লিফ পর্যন্ত এজ সংখ্যা।", "উচ্চতা = ২"]
        ]
      },
      keyPoints: [
        "রুট নোডের কোনো Parent থাকে না; লিফ নোডের কোনো Child থাকে না।",
        "একই Parent এর অন্তর্গত চাইল্ড নোডগুলোকে সিবলিংস (Siblings) বলে।",
        "ট্রির উচ্চতা নির্ধারিত হয় রুট থেকে সর্বাপেক্ষা গভীর লিফ নোডের পথ দ্বারা।"
      ]
    },
    {
      id: "7.3",
      titleBn: "বিভিন্ন প্রকার ট্রি ডাটা স্ট্রাকচার",
      titleEn: "List the types of trees in data structure with diagram",
      concept: `কম্পিউটার সায়েন্সে ব্যবহারের ক্ষেত্র ও নোডের শর্তের ওপর ভিত্তি করে বিভিন্ন প্রকার ট্রি ব্যবহৃত হয়:

১. **সাধারণ ট্রি (General Tree):** যে ট্রিতে প্রতিটি নোডের যেকোনো সংখ্যক চাইল্ড থাকতে পারে।
২. **বাইনারি ট্রি (Binary Tree):** যে ট্রির প্রতিটি নোডের সর্বোচ্চ **২টি চাইল্ড** (Left Child এবং Right Child) থাকতে পারে।
৩. **স্ট্রিক্টলি বা ফুল বাইনারি ট্রি (Strictly / Full Binary Tree):** প্রতিটি নোডের ঠিক ০টি অথবা ২টি চাইল্ড থাকে।
৪. **কমপ্লিট বাইনারি ট্রি (Complete Binary Tree):** শেষ স্তর বাদে প্রতিটি স্তর সম্পূর্ণ পূর্ণ থাকে এবং শেষ স্তরের নোডগুলো বাম দিক থেকে সাজানো থাকে।
৫. **বাইনারি সার্চ ট্রি (BST - Binary Search Tree):** যে বাইনারি ট্রিতে যেকোনো নোডের বাম চাইল্ডের মান রুট থেকে ছোট ($Left < Root$) এবং ডান চাইল্ডের মান রুট থেকে বড় ($Right > Root$) হয়।
৬. **ব্যালেন্সড ট্রি (AVL Tree / Red-Black Tree):** প্রতিটি নোডের বাম ও ডান সাব-ট্রির উচ্চতার পার্থক্য সর্বোচ্চ ১ হয়।
৭. **হিপ (Heap):** Max-Heap (রুট সব চাইল্ডের চেয়ে বড়) অথবা Min-Heap (রুট সব চাইল্ডের চেয়ে ছোট)।`,
      realLifeAnalogy: `বাইনারি ট্রি হলো একজন মানুষের সর্বোচ্চ ২ জন সন্তান থাকার মতো নিয়ম। আর BST হলো একটি সুসংগঠিত আলমারি যেখানে বাম দিকে ছোট বই এবং ডান দিকে বড় বই সাজানো থাকে!`,
      technicalDetails: `বাইনারি সার্চ ট্রির (BST) মূল শর্ত:
$$\\text{Left Subtree Value} < \\text{Root Value} < \\text{Right Subtree Value}$$`,
      diagramType: "ascii",
      diagramContent: ` ┌────────────────────────────────────────────────────────────────────────┐
 │                      Binary Search Tree (BST) Layout                   │
 ├────────────────────────────────────────────────────────────────────────┤
 │                                  [ 50 ]  ◄── Root                      │
 │                                 /      \\                               │
 │           (50 এর চেয়ে ছোট) ──► [ 30 ]  [ 70 ] ◄── (50 এর চেয়ে বড়)        │
 │                               /    \\   /    \\                          │
 │                             [20]  [40][60]  [80]                       │
 └────────────────────────────────────────────────────────────────────────┘`,
      keyPoints: [
        "বাইনারি ট্রিতে যেকোনো নোডের চাইল্ড সংখ্যা সর্বোচ্চ ২ হতে পারে।",
        "BST এর মূল নীতি: $Left < Root < Right$।",
        "BST তে ডাটা সাজানো থাকলে অনুসন্ধানের গড় সময়সীমা $O(\\log n)$।"
      ]
    },
    {
      id: "7.4",
      titleBn: "ট্রি-এর গাণিতিক বৈশিষ্ট্যসমূহ",
      titleEn: "Discuss the properties of tree",
      concept: `বাইনারি ট্রির বিভিন্ন গাণিতিক সম্পর্ক অ্যালগরিদমের পারফরম্যান্স ও মেমরি সাইজ হিসাবের জন্য অত্যন্ত গুরুত্বপূর্ণ:

১. **নোড ও এজের সম্পর্ক:** $N$ টি নোড বিশিষ্ট যেকোনো ট্রিতে মোট এজের সংখ্যা সর্বদা $N - 1$ হয়।
২. **নির্দিষ্ট স্তরে সর্বোচ্চ নোড:** বাইনারি ট্রির যেকোনো স্তর $L$ এ সর্বোচ্চ নোড সংখ্যা $2^L$ হতে পারে (যেমন: Level 0 তে $2^0 = 1$, Level 1 এ $2^1 = 2$, Level 2 তে $2^2 = 4$)।
৩. **উচ্চতা $h$ হলে সর্বোচ্চ নোড সংখ্যা:** $h$ উচ্চতার একটি বাইনারি ট্রিতে সর্বমোট সর্বোচ্চ নোড সংখ্যা হতে পারে:
$$N_{\\text{max}} = 2^{h+1} - 1$$
৪. **$N$ নোড বিশিষ্ট বাইনারি ট্রির সর্বনিম্ন উচ্চতা:**
$$h_{\\text{min}} = \\lfloor \\log_2 N \\rfloor$$
৫. **লিফ নোড ও ডিগ্রি-২ নোডের সম্পর্ক:** একটি বাইনারি ট্রিতে ডিগ্রি-২ বিশিষ্ট নোডের সংখ্যা $n_2$ হলে এবং লিফ নোডের সংখ্যা $n_0$ হলে:
$$n_0 = n_2 + 1$$`,
      tableData: {
        headers: ["স্তর / লেভেল (L)", "উচ্চতা (h)", "স্তরে সর্বোচ্চ নোড ($2^L$)", "সর্বমোট সর্বোচ্চ নোড ($2^{h+1}-1$)"],
        rows: [
          ["Level 0 (Root)", "h = 0", "$2^0 = 1$", "$2^{0+1}-1 = 1$"],
          ["Level 1", "h = 1", "$2^1 = 2$", "$2^{1+1}-1 = 3$"],
          ["Level 2", "h = 2", "$2^2 = 4$", "$2^{2+1}-1 = 7$"],
          ["Level 3", "h = 3", "$2^3 = 8$", "$2^{3+1}-1 = 15$"]
        ]
      },
      keyPoints: [
        "বাইনারি ট্রিতে লেভেল $L$ এ সর্বোচ্চ নোড সংখ্যা $2^L$।",
        "উচ্চতা $h$ হলে সর্বমোট সর্বোচ্চ নোড সংখ্যা $2^{h+1} - 1$।",
        "লিফ নোডের সংখ্যা সর্বদা ডিগ্রি-২ বিশিষ্ট নোড অপেক্ষা ১ বেশি ($n_0 = n_2 + 1$)।"
      ]
    },
    {
      id: "7.5",
      titleBn: "বাইনারি সার্চ ট্রিতে ইনসার্ট ও ডিলিট অ্যালগরিদম",
      titleEn: "Explain the algorithms for data insertion, deletion into & from a tree",
      concept: `বাইনারি সার্চ ট্রিতে (BST) নতুন ডাটা **ইনসার্ট (Insert)** এবং বিদ্যমান ডাটা **ডিলিট (Delete)** করার সময় সর্বদা $Left < Root < Right$ শর্ত বজায় রাখতে হয়।

**১. BST Insertion (ইনসার্ট প্রক্রিয়া):**
নতুন উপাদানটিকে রুটের সাথে তুলনা করা হয়:
- মানটি ছোট হলে বাম সাব-ট্রিতে (Left Subtree) পাঠানো হয়।
- মানটি বড় হলে ডান সাব-ট্রিতে (Right Subtree) পাঠানো হয়।
- খালি স্থান (NULL) পেলে সেখানে নতুন নোড হিসেবে যুক্ত করা হয়।

**২. BST Deletion (ডিলিট প্রক্রিয়া - ৩টি অবস্থা):**
- **কান্ড ১ (Leaf Node Deletion):** নোডটির কোনো চাইল্ড না থাকলে সেটিকে সরাসরি মুছে ফেলা হয়।
- **কান্ড ২ (Single Child Node):** নোডটির ১টি চাইল্ড থাকলে চাইল্ডটিকে তার Parent এর সাথে সরাসরি যুক্ত করে নোডটি মোছা হয়।
- **কান্ড ৩ (Two Children Node):** নোডটির ২টি চাইল্ড থাকলে তার **In-order Successor** (ডান সাব-ট্রির সর্বনিম্ন মান) অথবা **In-order Predecessor** (বাম সাব-ট্রির সর্বোচ্চ মান) দিয়ে নোডটিকে প্রতিস্থাপন করে মুছে ফেলা হয়।`,
      technicalDetails: `### BST Insertion Algorithm:
\`\`\`algo
Algorithm: BST_INSERT(ROOT, ITEM)
Step 1: If ROOT == NULL, then:
            Create NEW_NODE with ITEM.
            Set ROOT := NEW_NODE, Exit.
Step 2: If ITEM < ROOT->DATA, then:
            Set ROOT->LEFT := BST_INSERT(ROOT->LEFT, ITEM).
Step 3: Else If ITEM > ROOT->DATA, then:
            Set ROOT->RIGHT := BST_INSERT(ROOT->RIGHT, ITEM).
Step 4: Return ROOT and Exit.
\`\`\`

**টাইম কমপ্লেক্সিটি:**
- Average Case: $O(\\log n)$
- Worst Case (Skewed Tree): $O(n)$`,
      keyPoints: [
        "BST তে ইনসার্ট ও ডিলিট করার সময় $Left < Root < Right$ প্রোপার্টি বজায় রাখতে হয়।",
        "২টি চাইল্ড বিশিষ্ট নোড ডিলিট করতে In-order Successor দিয়ে প্রতিস্থাপন করা হয়।",
        "সুগঠিত BST তে সার্চ, ইনসার্ট ও ডিলিটের গড় সময়সীমা $O(\\log n)$।"
      ]
    },
    {
      id: "7.6",
      titleBn: "ট্রি ট্রাভার্সাল অ্যালগরিদমসমূহ",
      titleEn: "Explain the algorithm for traversing a tree",
      concept: `বাইনারি ট্রির প্রতিটি নোডে সুনির্দিষ্ট নিয়মে অন্তত একবার করে প্রবেশ বা প্রসেস করার প্রক্রিয়াকে **ট্রি ট্রাভার্সাল (Tree Traversal)** বলা হয়। 

বাইনারি ট্রিতে প্রধানত ৩টি রিকার্সিভ ট্রাভার্সাল পদ্ধতি ব্যবহৃত হয়:
১. **ইন-অর্ডার ট্রাভার্সাল (In-order Traversal):** $\\text{Left Subtree} \\rightarrow \\text{Root} \\rightarrow \\text{Right Subtree}$
২. **প্রি-অর্ডার ট্রাভার্সাল (Pre-order Traversal):** $\\text{Root} \\rightarrow \\text{Left Subtree} \\rightarrow \\text{Right Subtree}$
৩. **পোস্ট-অর্ডার ট্রাভার্সাল (Post-order Traversal):** $\\text{Left Subtree} \\rightarrow \\text{Right Subtree} \\rightarrow \\text{Root}$`,
      realLifeAnalogy: `১. In-order: ছোট থেকে বড় সাজানো বই পড়ার মতো (BST-র ক্ষেত্রে ইন-অর্ডার দিলে ডাটা ছোট থেকে বড় সিরিয়ালে পাওয়া যায়)।
২. Pre-order: কোনো কোম্পানির প্রধান বসের ফাইল আগে সাইন করা, তারপর সাব-অর্ডিনেটদের কাছে পাঠানো।
৩. Post-order: সর্বকনিষ্ঠ কর্মীদের কাজ শেষ করার পর বসের কাছে রিপোর্ট আসা!`,
      technicalDetails: `### ৩টি ট্রাভার্সাল অ্যালগরিদম সমাহার:

\`\`\`algo
Algorithm: IN_ORDER(ROOT)
Step 1: If ROOT != NULL, then:
            IN_ORDER(ROOT->LEFT)
            Print ROOT->DATA
            IN_ORDER(ROOT->RIGHT)
Step 2: Exit.

Algorithm: PRE_ORDER(ROOT)
Step 1: If ROOT != NULL, then:
            Print ROOT->DATA
            PRE_ORDER(ROOT->LEFT)
            PRE_ORDER(ROOT->RIGHT)
Step 2: Exit.

Algorithm: POST_ORDER(ROOT)
Step 1: If ROOT != NULL, then:
            POST_ORDER(ROOT->LEFT)
            POST_ORDER(ROOT->RIGHT)
            Print ROOT->DATA
Step 2: Exit.
\`\`\``,
      tableData: {
        headers: ["ট্রাভার্সাল পদ্ধতি", "পরিদর্শনের ক্রম (Visit Order)", "BST এ আউটপুট বৈশিষ্ট্য"],
        rows: [
          ["In-order", "Left ➔ Root ➔ Right", "ডাটা নিখুঁত ছোট থেকে বড় (Ascending Sorted) অর্ডারে পাওয়া যায়।"],
          ["Pre-order", "Root ➔ Left ➔ Right", "ট্রি এর হুবহু কপি বা ক্লোন তৈরি করতে ব্যবহৃত হয়।"],
          ["Post-order", "Left ➔ Right ➔ Root", "ট্রি সম্পূর্ণ ডিলিট করা বা Expression Tree মূল্যায়ন করতে লাগে।"]
        ]
      },
      keyPoints: [
        "In-order: Left ➔ Root ➔ Right (BST তে ছোট থেকে বড় সাজানো পাওয়া যায়)।",
        "Pre-order: Root ➔ Left ➔ Right।",
        "Post-order: Left ➔ Right ➔ Root।",
        "সকল ট্রাভার্সাল অ্যালগরিদমের টাইম কমপ্লেক্সিটি $O(n)$।"
      ],
      syntaxOrFormulas: [
        {
          label: "C Language Recursive Tree Traversals",
          lang: "c",
          codeOrFormula: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

void inOrder(struct Node* root) {
    if (root != NULL) {
        inOrder(root->left);
        printf("%d ", root->data);
        inOrder(root->right);
    }
}

void preOrder(struct Node* root) {
    if (root != NULL) {
        printf("%d ", root->data);
        preOrder(root->left);
        preOrder(root->right);
    }
}

void postOrder(struct Node* root) {
    if (root != NULL) {
        postOrder(root->left);
        postOrder(root->right);
        printf("%d ", root->data);
    }
}`
        },
        {
          label: "Python Binary Search Tree & Traversals Class",
          lang: "python",
          codeOrFormula: `class TreeNode:
    def __init__(self, key):
        self.val = key
        self.left = None
        self.right = None

def insert(root, key):
    if root is None:
        return TreeNode(key)
    if key < root.val:
        root.left = insert(root.left, key)
    else:
        root.right = insert(root.right, key)
    return root

def inorder(root):
    if root:
        inorder(root.left)
        print(root.val, end=' ')
        inorder(root.right)`
        }
      ]
    }
  ],
  practicalPrograms: [
    {
      title: "বাইনারি সার্চ ট্রি (BST)-তে ডাটা ইনসার্ট এবং ৩টি ট্রাভার্সাল (In-order, Pre-order, Post-order) এর C ও Python প্রোগ্রাম।",
      problemStatementBn: "C এবং Python ভাষায় একটি Binary Search Tree তৈরি করে ইউজার প্রদত্ত কতগুলো সংখ্যা ইনসার্ট করো এবং তা In-order, Pre-order ও Post-order পদ্ধতিতে প্রিন্ট করে প্রদর্শন করো।",
      algorithmStepsBn: [
        "ধাপ ১: struct Node তৈরি করি যার মধ্যে data, left এবং right পয়েন্টার থাকে।",
        "ধাপ ২: insert ফাংশনে মান ছোট হলে বামে এবং বড় হলে ডানে রিকার্সিভলি ইনসার্ট করি।",
        "ধাপ ৩: inOrder ফাংশনে (Left, Root, Right) রিকার্সিভলি কল করে মান প্রিন্ট করি।",
        "ধাপ ৪: preOrder এবং postOrder ফাংশনে যথাক্রমে (Root, Left, Right) এবং (Left, Right, Root) প্রিন্ট করি।"
      ],
      cCode: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

struct Node* createNode(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

struct Node* insert(struct Node* root, int value) {
    if (root == NULL) return createNode(value);
    if (value < root->data)
        root->left = insert(root->left, value);
    else if (value > root->data)
        root->right = insert(root->right, value);
    return root;
}

void inOrder(struct Node* root) {
    if (root != NULL) {
        inOrder(root->left);
        printf("[%d] ", root->data);
        inOrder(root->right);
    }
}

void preOrder(struct Node* root) {
    if (root != NULL) {
        printf("[%d] ", root->data);
        preOrder(root->left);
        preOrder(root->right);
    }
}

void postOrder(struct Node* root) {
    if (root != NULL) {
        postOrder(root->left);
        postOrder(root->right);
        printf("[%d] ", root->data);
    }
}

int main() {
    printf("--- BTEB Chapter 7: Binary Search Tree Program ---\\n");
    struct Node* root = NULL;
    root = insert(root, 50);
    insert(root, 30);
    insert(root, 70);
    insert(root, 20);
    insert(root, 40);

    printf("In-order Traversal (Sorted): ");
    inOrder(root);
    printf("\\n");

    printf("Pre-order Traversal: ");
    preOrder(root);
    printf("\\n");

    printf("Post-order Traversal: ");
    postOrder(root);
    printf("\\n");

    return 0;
}`,
      pythonCode: `class Node:
    def __init__(self, key):
        self.data = key
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self, root, key):
        if root is None:
            return Node(key)
        if key < root.data:
            root.left = self.insert(root.left, key)
        elif key > root.data:
            root.right = self.insert(root.right, key)
        return root

    def inorder(self, root):
        if root:
            self.inorder(root.left)
            print(f"[{root.data}]", end=" ")
            self.inorder(root.right)

    def preorder(self, root):
        if root:
            print(f"[{root.data}]", end=" ")
            self.preorder(root.left)
            self.preorder(root.right)

    def postorder(self, root):
        if root:
            self.postorder(root.left)
            self.postorder(root.right)
            print(f"[{root.data}]", end=" ")

# Execution
tree = BST()
root = tree.insert(None, 50)
for val in [30, 70, 20, 40]:
    tree.insert(root, val)

print("In-order :", end=" ")
tree.inorder(root)
print("\\nPre-order :", end=" ")
tree.preorder(root)
print("\\nPost-order:", end=" ")
tree.postorder(root)`,
      sampleOutput: `--- BTEB Chapter 7: Binary Search Tree Program ---
In-order Traversal (Sorted): [20] [30] [40] [50] [70] 
Pre-order Traversal: [50] [30] [20] [40] [70] 
Post-order Traversal: [20] [40] [30] [70] [50]`,
      explanationBn: "প্রোগ্রামটিতে BST-র মূল প্রোপার্টি ব্যবহার করা হয়েছে। In-order ট্রাভার্সালে মানগুলো ছোট থেকে বড় সাজানো অবস্থায় আউটপুটে এসেছে।"
    }
  ],
  summaryPoints: [
    "ট্রি (Tree) একটি নন-লিনিয়ার হায়ারার্কিকাল ডাটা স্ট্রাকচার যা প্যারেন্ট-চাইল্ড সম্পর্কে বিন্যস্ত থাকে।",
    "ট্রির সর্বশীর্ষের একমাত্র অভিভাবকহীন নোডকে Root Node এবং চাইল্ডহীন প্রান্তের নোডকে Leaf Node বলে।",
    "$N$ টি নোড বিশিষ্ট যেকোনো ট্রিতে মোট এজের সংখ্যা সর্বদা $N - 1$ হয়।",
    "বাইনারি ট্রিতে (Binary Tree) যেকোনো নোডের চাইল্ড সংখ্যা সর্বোচ্চ ২ হতে পারে।",
    "বাইনারি সার্চ ট্রির (BST) মূল নীতি: $Left < Root < Right$।",
    "বাইনারি ট্রির লেভেল $L$ এ সর্বোচ্চ নোড সংখ্যা $2^L$ এবং উচ্চতা $h$ হলে সর্বমোট সর্বোচ্চ নোড $2^{h+1} - 1$।",
    "BST তে ইনসার্ট ও ডিলিটের গড় সময়সীমা $O(\\log n)$।",
    "In-order ট্রাভার্সাল (Left ➔ Root ➔ Right) করলে BST এর মানগুলো ছোট থেকে বড় সাজানো পাওয়া যায়।",
    "Pre-order ট্রাভার্সাল: Root ➔ Left ➔ Right।",
    "Post-order ট্রাভার্সাল: Left ➔ Right ➔ Root।"
  ],
  boardQuestions: [
    {
      id: "q7-1",
      type: "ati_songkhipto",
      questionBn: "ট্রি (Tree) ডাটা স্ট্রাকচার কাকে বলে?",
      answerBn: "ট্রি হলো একটি নন-লিনিয়ার হায়ারার্কিকাল ডাটা স্ট্রাকচার, যা কতগুলো নোড এবং তাদের যুক্তকারী এজের সমন্বয়ে পিতা-সন্তান সম্পর্কে স্তরভিত্তিক বিন্যস্ত থাকে।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2018", "BTEB 2015"],
      isImportant: true,
      subtopicRef: "7.1"
    },
    {
      id: "q7-2",
      type: "ati_songkhipto",
      questionBn: "বাইনারি ট্রি (Binary Tree) কাকে বলে?",
      answerBn: "যে ট্রির প্রতিটি নোডের সর্বোচ্চ ২টি (Left Child এবং Right Child) চাইল্ড থাকতে পারে, তাকে বাইনারি ট্রি বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2017"],
      isImportant: true,
      subtopicRef: "7.3"
    },
    {
      id: "q7-3",
      type: "ati_songkhipto",
      questionBn: "লিফ নোড (Leaf Node) বা টার্মিনাল নোড কী?",
      answerBn: "ট্রির যেসকল নোডের কোনো চাইল্ড বা সন্তান নোড থাকে না, তাদেরকে লিফ নোড বা টার্মিনাল নোড বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2019", "BTEB 2016"],
      isImportant: true,
      subtopicRef: "7.2"
    },
    {
      id: "q7-4",
      type: "ati_songkhipto",
      questionBn: "বাইনারি সার্চ ট্রির (BST) মূল শর্তটি কী?",
      answerBn: "বাইনারি সার্চ ট্রির শর্ত হলো: প্রতিটি নোডের বাম চাইল্ডের মান রুট অপেক্ষা ছোট ($Left < Root$) এবং ডান চাইল্ডের মান রুট অপেক্ষা বড় ($Right > Root$) হতে হবে।",
      marks: 1,
      yearsAppeared: ["BTEB 2022", "BTEB 2018", "BTEB 2014"],
      isImportant: true,
      subtopicRef: "7.3"
    },
    {
      id: "q7-5",
      type: "songkhipto",
      questionBn: "চিত্রসহ In-order, Pre-order এবং Post-order ট্রাভার্সালের নিয়মাবলি সংক্ষেপে লেখো।",
      answerBn: "১. **In-order Traversal:** আগে বাম সাব-ট্রি, তারপর রুট, এবং শেষে ডান সাব-ট্রি ($\text{Left} \\rightarrow \\text{Root} \\rightarrow \\text{Right}$)।\n\n২. **Pre-order Traversal:** আগে রুট, তারপর বাম সাব-ট্রি, এবং শেষে ডান সাব-ট্রি ($\text{Root} \\rightarrow \\text{Left} \\rightarrow \\text{Right}$)।\n\n৩. **Post-order Traversal:** আগে বাম সাব-ট্রি, তারপর ডান সাব-ট্রি, এবং শেষে রুট ($\text{Left} \\rightarrow \\text{Right} \\rightarrow \\text{Root}$)।",
      marks: 3,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2019"],
      isImportant: true,
      subtopicRef: "7.6"
    },
    {
      id: "q7-6",
      type: "songkhipto",
      questionBn: "বাইনারি ট্রির ৩টি গুরুত্বপূর্ণ গাণিতিক বৈশিষ্ট্য উল্লেখ করো।",
      answerBn: "১. **নোড ও এজের সম্পর্ক:** $N$ টি নোড বিশিষ্ট যেকোনো ট্রিতে মোট এজের সংখ্যা $N - 1$।\n২. **স্তরে সর্বোচ্চ নোড:** বাইনারি ট্রির লেভেল $L$ এ সর্বোচ্চ নোড সংখ্যা $2^L$।\n৩. **সর্বোচ্চ মোট নোড:** উচ্চতা $h$ হলে ট্রিতে সর্বমোট সর্বোচ্চ নোড সংখ্যা $2^{h+1} - 1$।",
      marks: 3,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2017"],
      isImportant: true,
      subtopicRef: "7.4"
    },
    {
      id: "q7-7",
      type: "rochonamulok",
      questionBn: "নিচের মানগুলো নিয়ে একটি বাইনারি সার্চ ট্রি (BST) তৈরি করো এবং তার In-order ট্রাভার্সাল আউটপুট দেখাও: 45, 15, 79, 90, 10, 55, 12, 20",
      answerBn: `### BST তৈরির ধাপসমূহ:
১. রুট নোড: **45**
২. 15 < 45 ➔ 45 এর বামে **15**
৩. 79 > 45 ➔ 45 এর ডানে **79**
৪. 90 > 45, 90 > 79 ➔ 79 এর ডানে **90**
৫. 10 < 45, 10 < 15 ➔ 15 এর বামে **10**
৬. 55 > 45, 55 < 79 ➔ 79 এর বামে **55**
৭. 12 < 45, 12 < 15, 12 > 10 ➔ 10 এর ডানে **12**
৮. 20 < 45, 20 > 15 ➔ 15 এর ডানে **20**

### তৈরি হওয়া BST:
\`\`\`ascii
                [ 45 ]
               /      \\
        [ 15 ]          [ 79 ]
       /      \\        /      \\
   [ 10 ]    [ 20 ]  [ 55 ]  [ 90 ]
       \\
      [ 12 ]
\`\`\`

### In-order Traversal (Left ➔ Root ➔ Right):
**আউটপুট:** 10, 12, 15, 20, 45, 55, 79, 90 (নিখুঁত ছোট থেকে বড় সাজানো!)`,
      marks: 5,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2018", "BTEB 2015"],
      isImportant: true,
      subtopicRef: "7.5"
    }
  ],
  quizQuestions: [
    {
      id: 1,
      questionBn: "ট্রি কোন ধরনের ডাটা স্ট্রাকচার?",
      options: ["Linear Data Structure", "Non-linear Hierarchical Structure", "Homogeneous Array", "Stack Type"],
      correctAnswerIndex: 1,
      explanationBn: "ট্রি একটি নন-লিনিয়ার হায়ারার্কিকাল (স্তরীভূত) ডাটা স্ট্রাকচার।",
      topicRef: "7.1"
    },
    {
      id: 2,
      questionBn: "১৫টি নোড বিশিষ্ট কোনো ট্রিতে মোট এজের (Edges) সংখ্যা কতটি হবে?",
      options: ["15", "14", "16", "30"],
      correctAnswerIndex: 1,
      explanationBn: "N টি নোড বিশিষ্ট যেকোনো ট্রিতে মোট এজের সংখ্যা সর্বদা N - 1, অর্থাৎ 15 - 1 = 14।",
      topicRef: "7.1"
    },
    {
      id: 3,
      questionBn: "যে নোডের কোনো চাইল্ড বা সন্তান নোড থাকে না, তাকে কী বলে?",
      options: ["Root Node", "Parent Node", "Leaf / Terminal Node", "Internal Node"],
      correctAnswerIndex: 2,
      explanationBn: "যে নোডের কোনো চাইল্ড থাকে না তাকে Leaf Node বা Terminal Node বলা হয়।",
      topicRef: "7.2"
    },
    {
      id: 4,
      questionBn: "বাইনারি ট্রির যেকোনো নোডের চাইল্ড সংখ্যা সর্বোচ্চ কত হতে পারে?",
      options: ["1", "2", "3", "অসীম"],
      correctAnswerIndex: 1,
      explanationBn: "বাইনারি ট্রিতে প্রতিটি নোডের সর্বোচ্চ ২টি (Left & Right) চাইল্ড থাকে।",
      topicRef: "7.3"
    },
    {
      id: 5,
      questionBn: "বাইনারি সার্চ ট্রির (BST) মূল শর্ত কোনটি?",
      options: ["Left > Root > Right", "Left < Root < Right", "Left == Right", "Root < Left"],
      correctAnswerIndex: 1,
      explanationBn: "BST তে বাম চাইল্ড রুটের চেয়ে ছোট এবং ডান চাইল্ড রুটের চেয়ে বড় হয় ($Left < Root < Right$)।",
      topicRef: "7.3"
    },
    {
      id: 6,
      questionBn: "উচ্চতা h = 2 হলে বাইনারি ট্রিতে সর্বমোট সর্বোচ্চ কতটি নোড থাকতে পারে?",
      options: ["3", "7", "8", "15"],
      correctAnswerIndex: 1,
      explanationBn: "উচ্চতা h হলে সর্বোচ্চ নোড $2^{h+1}-1$ = $2^{2+1}-1 = 8 - 1 = 7$ টি।",
      topicRef: "7.4"
    },
    {
      id: 7,
      questionBn: "In-order ট্রাভার্সালের সঠিক কাজের ক্রম কোনটি?",
      options: ["Root ➔ Left ➔ Right", "Left ➔ Root ➔ Right", "Left ➔ Right ➔ Root", "Right ➔ Root ➔ Left"],
      correctAnswerIndex: 1,
      explanationBn: "In-order ট্রাভার্সালে আগে বাম সাব-ট্রি, তারপর রুট এবং শেষে ডান সাব-ট্রি প্রসেস হয়।",
      topicRef: "7.6"
    },
    {
      id: 8,
      questionBn: "BST-তে In-order ট্রাভার্সাল করলে ডাটার বিন্যাস কেমন পাওয়া যায়?",
      options: ["এলোমেলো", "ছোট থেকে বড় (Ascending Sorted)", "বড় থেকে ছোট", "উল্টো ক্রম"],
      correctAnswerIndex: 1,
      explanationBn: "BST এর In-order ট্রাভার্সাল সর্বদা মানগুলোকে ছোট থেকে বড় ক্রমে সাজিয়ে আউটপুট দেয়।",
      topicRef: "7.6"
    },
    {
      id: 9,
      questionBn: "Pre-order ট্রাভার্সালের সঠিক ক্রম কোনটি?",
      options: ["Root ➔ Left ➔ Right", "Left ➔ Root ➔ Right", "Left ➔ Right ➔ Root", "Right ➔ Left ➔ Root"],
      correctAnswerIndex: 0,
      explanationBn: "Pre-order ট্রাভার্সালে আগে রুট নোড, তারপর বাম এবং শেষে ডান সাব-ট্রি দেখা হয়।",
      topicRef: "7.6"
    },
    {
      id: 10,
      questionBn: "সুগঠিত Balanced BST-তে কোনো উপাদান অনুসন্ধান করার সময়সীমা (Time Complexity) কত?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correctAnswerIndex: 1,
      explanationBn: "Balanced BST-তে অনুসন্ধানের সময়সীমা O(log n)।",
      topicRef: "7.5"
    }
  ]
};
