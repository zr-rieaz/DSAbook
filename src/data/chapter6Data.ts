import { Chapter } from '../types/syllabus';

export const CHAPTER_6_DATA: Chapter = {
  id: 6,
  code: "28542-CH06",
  titleBn: "লিংকড লিস্ট (Linked List)",
  titleEn: "Linked List Data Structure",
  status: "complete",
  learningObjectives: [
    "লিংকড লিস্ট (Linked List) এর মৌলিক ধারণা, গঠন এবং অ্যারের সাথে এর তুলনামূলক সুবিধা ব্যাখ্যা করা।",
    "সিঙ্গলি (Singly), ডাবলি (Doubly) এবং সার্কুলার (Circular) লিংকড লিস্টের গঠনচিত্র ও পার্থক্য আয়ত্ত করা।",
    "লিংকড লিস্টে ডাইনামিক মেমরি বরাদ্দকরণ (Dynamic Memory Allocation) এবং পয়েন্টারের ভূমিকা বোঝা।",
    "ফ্রি স্টোরেজ লিস্ট বা AVAIL লিস্ট (Free Storage List) এবং গারবেজ কালেকশন (Garbage Collection) মেকানিজম ব্যাখ্যা করা।",
    "লিংকড লিস্ট ট্রাভার্সিং (Traversing) এবং পয়েন্টার আপডেট (`PTR = PTR->NEXT`) অ্যালগরিদম তৈরি করতে পারা।",
    "লিংকড লিস্টে নির্দিষ্ট কোনো ডাটা অনুসন্ধান (Searching) করার অ্যালগরিদম ও টাইম কমপ্লেক্সিটি $O(n)$ বিশ্লেষণ করা।",
    "লিংকড লিস্টের বিভিন্ন স্থানে (শুরুতে, শেষে ও নির্দিষ্ট স্থানে) নতুন ডাটা সংযোজন (Insertion) অ্যালগরিদম প্রণয়ন করা।",
    "লিংকড লিস্ট থেকে নির্দিষ্ট নোড অপসারণ (Deletion) করার অ্যালগরিদম এবং মেমরি মুক্তকরণ করা।",
    "সি (C) এবং পাইথন (Python) ভাষায় সম্পূর্ণ কাজক্ষম সিঙ্গলি ও ডাবলি লিংকড লিস্ট প্রোগ্রাম তৈরি ও রান করা।"
  ],
  subtopics: [
    {
      id: "6.1",
      titleBn: "লিংকড লিস্টের সংজ্ঞা ও প্রকারভেদ",
      titleEn: "Define linked list",
      concept: `লিংকড লিস্ট (Linked List) হলো একটি ডাইনামিক রৈখিক (Linear) ডাটা স্ট্রাকচার, যা মেমরিতে এলোমেলো বা অসন্নিকটস্থ (Discontiguous) স্থানে সংরক্ষিত কতগুলো উপাদান বা **নোড (Node)** এর সমষ্টি নিয়ে গঠিত। প্রতিটি নোড একটি সংযোগকারী রেফারেন্স বা **পয়েন্টার (Pointer)** এর সাহায্যে পরবর্তী নোডের সাথে যুক্ত থেকে একটি চেইন গঠন করে। 

**নোডের গঠন (Structure of a Node):**
একটি সাধারণ নোড প্রধানত দুটি অংশে বিভক্ত:
১. **ডাটা ফিল্ড (Data Field / INFO):** যেখানে মূল উপাত্ত বা মান সংরক্ষিত থাকে।
২. **পয়েন্টার ফিল্ড (Pointer Field / NEXT / LINK):** যা পরবর্তী নোডের মেমরি অ্যাড্রেস (Memory Address) ধারণ করে।

লিংকড লিস্টের প্রথম নোডের অ্যাড্রেস ধারণ করে একটি বিশেষ পয়েন্টার, যাকে **HEAD** বা **START** বলা হয়। লিস্টের শেষ নোডের NEXT ফিল্ডে **NULL** মান থাকে, যা লিস্টের সমাপ্তি চিহ্নিত করে।`,
      realLifeAnalogy: `১. গুপ্তধনের খোজের খেলা (Treasure Hunt Game): প্রতিটি ক্লু-এর কাগজে যেমন পরের ক্লুটির গোপন ঠিকানা লেখা থাকে, তেমনি লিংকড লিস্টের প্রতিটি নোডে পরের নোডের মেমরি অ্যাড্রেস লেখা থাকে!
২. ট্রেনের পাশাপাশি সংযুক্ত বগিগুলো: প্রতিটি বগি তার পরের বগির সাথে লোহার হুক (পয়েন্টার) দিয়ে জোড়া লাগানো থাকে।`,
      technicalDetails: `লিংকড লিস্টের প্রধান প্রকারভেদসমূহ:

১. **সিঙ্গলি লিংকড লিস্ট (Singly Linked List):**
   - প্রতিটি নোডে ১টি ডাটা ফিল্ড এবং ১টি NEXT পয়েন্টার ফিল্ড থাকে।
   - শুধুমাত্র সামনের দিকে (Forward direction) ট্রাভার্স করা যায়।

২. **ডাবলি লিংকড লিস্ট (Doubly Linked List):**
   - প্রতিটি নোডে ৩টি ফিল্ড থাকে: **PREV** (পূর্ববর্তী নোডের অ্যাড্রেস), **DATA**, এবং **NEXT** (পরবর্তী নোডের অ্যাড্রেস)।
   - উভয় দিকে (Forward & Backward) ট্রাভার্স করা সম্ভব।

৩. **সার্কুলার লিংকড লিস্ট (Circular Linked List):**
   - শেষ নোডের NEXT ফিল্ডে NULL থাকার বদলে প্রথম নোডের (HEAD) অ্যাড্রেস সংরক্ষিত থাকে, ফলে এটি একটি বৃত্তাকার লুপ তৈরি করে।`,
      diagramType: "ascii",
      diagramContent: ` ┌────────────────────────────────────────────────────────────────────────┐
 │                   Singly Linked List Node Architecture                 │
 ├────────────────────────────────────────────────────────────────────────┤
 │ HEAD ──► ┌──────────┬──────────┐    ┌──────────┬──────────┐           │
 │          │ Data: 10 │ Next: 0x2│───►│ Data: 20 │ Next: 0x3│───► NULL  │
 │          └──────────┴──────────┘    └──────────┴──────────┘           │
 │          Address: 0x1000            Address: 0x2000                   │
 └────────────────────────────────────────────────────────────────────────┘`,
      tableData: {
        headers: ["বৈশিষ্ট্য / তুলনার বিষয়", "অ্যারে (Array)", "লিংকড লিস্ট (Linked List)"],
        rows: [
          ["মেমরি বিন্যাস", "ধারাবাহিক (Contiguous RAM Blocks)।", "অসংলগ্ন ও ডাইনামিক (Discontiguous Heap)।"],
          ["আকারের পরিবর্তন", "ফিক্সড সাইজ (Fixed Capacity)।", "ডাইনামিক সাইজ (রানটাইমে বাড়ে/কমে)।"],
          ["ইনসার্ট ও ডিলিট", "ধীরগতির, উপাদান শিফট (Shift) করতে হয় $O(n)$।", "অত্যন্ত দ্রুত, কেবল পয়েন্টার বদলাতে হয় $O(1)$।"],
          ["মেমরি ওভারহেড", "অতিরিক্ত পয়েন্টার মেমরি লাগে না।", "প্রতিটি নোডে পয়েন্টারের জন্য অতিরিক্ত বাইট লাগে।"],
          ["র্যান্ডম অ্যাক্সেস", "ইনডেক্স দিয়ে $O(1)$ সময়ে অ্যাক্সেস সম্ভব।", "সিরিয়াল ট্রাভার্সাল প্রয়োজন $O(n)$।"]
        ]
      },
      keyPoints: [
        "লিংকড লিস্টে ডাটা মেমরিতে পাশাপাশি থাকতে বাধ্য নয়, পয়েন্টার তাদের যুক্ত রাখে।",
        "প্রথম নোডের অ্যাড্রেস থাকে HEAD/START এ এবং শেষ নোডের NEXT ফিল্ডে থাকে NULL।",
        "ডাইনামিক সাইজের মেমরি ব্যবস্থাপনায় অ্যারের চেয়ে লিংকড লিস্ট বেশি সুবিধাজনক।"
      ]
    },
    {
      id: "6.2",
      titleBn: "লিংকড লিস্টে মেমরি বরাদ্দকরণ ও AVAIL লিস্ট",
      titleEn: "State memory allocation in linked list",
      concept: `লিংকড লিস্টের নোডসমূহ কম্পাইল টাইমে তৈরি হয় না, বরং প্রোগ্রাম চলাকালীন সময়ে অর্থাৎ রান টাইমে (Run Time) মেমরির **হিপ সেগমেন্ট (Heap Segment)** থেকে বরাদ্দ করা হয়। একে **ডাইনামিক মেমরি বরাদ্দকরণ (Dynamic Memory Allocation)** বলে।

সি ভাষায় \`malloc()\` ফাংশনের মাধ্যমে মেমরি বরাদ্দ করা হয় এবং \`free()\` ফাংশনের মাধ্যমে কাজ শেষে মেমরি সিস্টেমে ফেরত দেওয়া হয়।`,
      realLifeAnalogy: `একটি পার্কিং লটের কথা ভাবুন। গাড়ি এলে খালি পার্কিং স্লট বরাদ্দ দেওয়া হয়, আর গাড়ি চলে গেলে স্লটটি আবার 'খালি স্লটের তালিকায়' যুক্ত হয়। এই খালি স্লটের তালিকাটিই হলো মেমরির **AVAIL List**!`,
      technicalDetails: `মেমরি ব্যবস্থাপনার দুটি প্রধান কনসেপ্ট:

১. **ফ্রি স্টোরেজ লিস্ট বা AVAIL লিস্ট (AVAIL List / Free Pool):**
   - কম্পিউটার সিস্টেমের মেমরিতে অল অব্যবহৃত বা খালি নোডগুলোর একটি সংলগ্ন লিংকড লিস্ট বজায় রাখা হয়, যাকে **AVAIL List** বলা হয়।
   - নতুন নোড ইনসার্ট করার আগে সিস্টেমে খালি মেমরি আছে কিনা তা নিশ্চিত করতে \`AVAIL == NULL\` পরীক্ষা করা হয় (সত্য হলে Memory Overflow)।
   - নতুন নোড তৈরির সময় AVAIL লিস্টের প্রথম নোডটি কেটে লিংকড লিস্টে যোগ করা হয়।

২. **গারবেজ কালেকশন (Garbage Collection):**
   - কোনো নোড লিংকড লিস্ট থেকে ডিলিট করার পর যদি সেটিকে মুক্ত (free) না করা হয়, তবে মেমরি মেমরি লিক (Memory Leak) ঘটায়।
   - অপারেটিং সিস্টেম বা গারবেজ কালেক্টর পরিত্যক্ত নোডগুলোকে পুনরায় খুঁজে বের করে AVAIL লিস্টে ফেরত পাঠায়।`,
      tableData: {
        headers: ["মেমরি ফাংশন / টার্ম", "কাজ ও ভূমিকা", "সি ল্যাঙ্গুয়েজ উদাহরণ"],
        rows: [
          ["`malloc()`", "হিপ মেমরি থেকে নির্দিষ্ট সাইজের বাইট বরাদ্দ করে।", "`struct Node* ptr = (struct Node*)malloc(sizeof(struct Node));`"],
          ["`free()`", "বরাদ্দকৃত মেমরি মুছে AVAIL লিস্টে ফেরত দেয়।", "`free(ptr);`"],
          ["`AVAIL Pointer`", "হিপের প্রথম অব্যবহৃত মেমরি ব্লক নির্দেশ করে।", "যদি `AVAIL == NULL` হয় তবে মেমরি ফুল।"],
          ["`Garbage Collector`", "অপ্রয়োজনীয় মেমরি ব্লক স্বয়ংক্রিয়ভাবে মুক্ত করে।", "জাভা বা পাইথনে ব্যাকগ্রাউন্ডে স্বয়ংক্রিয়ভাবে চলে।"]
        ]
      },
      keyPoints: [
        "লিংকড লিস্টের মেমরি হিপ সেগমেন্ট থেকে রান টাইমে ডাইনামিকালি বরাদ্দ হয়।",
        "খালি নোডের মেমরি পুলকে AVAIL List বা Free Storage List বলা হয়।",
        "`malloc()` দিয়ে নতুন নোড নেওয়া হয় এবং `free()` দিয়ে ডিলিটকৃত নোড মেমরিতে ফেরত দেওয়া হয়।"
      ]
    },
    {
      id: "6.3",
      titleBn: "লিংকড লিস্ট ট্রাভার্স করার অ্যালগরিদম",
      titleEn: "Explain the algorithms to traverse a linked list",
      concept: `লিংকড লিস্টের প্রতিটি নোডে ক্রমানুসারে প্রবেশ করে তাদের সংরক্ষিত ডাটা পরিদর্শন (Visit/Process/Print) করার প্রক্রিয়াকে **ট্রাভার্সিং (Traversing)** বলা হয়। 

যেহেতু লিংকড লিস্টের নোডগুলো মেমরিতে ইনডেক্স ভিত্তিক থাকে না, তাই একটি সাময়িক পয়েন্টার (যেমন: **PTR**) ব্যবহার করে HEAD থেকে শুরু করে শেষ নোড (NULL) না পাওয়া পর্যন্ত এক নোড থেকে অন্য নোডে যাওয়া হয়।`,
      realLifeAnalogy: `একটি প্রদীপের আলো নিয়ে অন্ধকার টানেলে হেঁটে যাওয়া—প্রতিটি ক্লু পড়ে পরের ক্লু এর ঠিকানায় পৌঁছানো।`,
      technicalDetails: `### লিংকড লিস্ট ট্রাভার্সাল অ্যালগরিদম:
\`\`\`algo
Algorithm: TRAVERSE_LINKED_LIST(HEAD)
Step 1: [পয়েন্টার ইনিশিয়ালাইজেশন]
        Set PTR := HEAD.
Step 2: [লুপ লুপ নোড শেষ না হওয়া পর্যন্ত]
        Repeat Steps 3 and 4 while PTR != NULL:
Step 3:     [ডাটা প্রসেস/প্রিন্ট]
            Apply PROCESS / Print to PTR->DATA.
Step 4:     [পরবর্তী নোডে গমন]
            Set PTR := PTR->NEXT.
[End of Loop]
Step 5: Exit.
\`\`\`

**টাইম কমপ্লেক্সিটি বিশ্লেষণ:**
লিস্টে $n$ সংখ্যক নোড থাকলে লুপটি ঠিক $n$ বার ঘুরবে। সুতরাং ট্রাভার্সালের টাইম কমপ্লেক্সিটি $O(n)$ এবং স্পেস কমপ্লেক্সিটি $O(1)$।`,
      keyPoints: [
        "ট্রাভার্সাল শুরু হয় HEAD পয়েন্টার দিয়ে এবং শেষ হয় PTR == NULL হলে।",
        "পরবর্তী নোডে যাওয়ার জন্য পয়েন্টার আপডেট সূত্র: `PTR = PTR->NEXT`।",
        "ট্রাভার্সালের সময় জটিলতা $O(n)$।"
      ]
    },
    {
      id: "6.4",
      titleBn: "লিংকড লিস্টে ডাটা অনুসন্ধানের অ্যালগরিদম",
      titleEn: "Explain the algorithms for searching a linked list",
      concept: `লিংকড লিস্টে সংরক্ষিত ডাটা মানগুলোর মধ্যে কোনো একটি নির্দিষ্ট মান (**ITEM**) বিদ্যমান আছে কিনা তা খুঁজে বের করা এবং থাকলে তার নোড অ্যাড্রেস বা অবস্থান (LOCATION) নির্ণয় করাকে **সার্চিং (Searching)** বলা হয়।`,
      realLifeAnalogy: `একটি রেজিস্টার খাতায় কোনো শিক্ষার্থীর রোল খোঁজার মতো—প্রথম পাতা থেকে শুরু করে নাম মিললে রোল নম্বরটি লিখে নেওয়া।`,
      technicalDetails: `### ১. আনসর্টেড (Unsorted) লিংকড লিস্টে সার্চিং অ্যালগরিদম:
\`\`\`algo
Algorithm: SEARCH_UNSORTED(HEAD, ITEM, LOC)
Step 1: Set PTR := HEAD, LOC := NULL.
Step 2: Repeat while PTR != NULL:
            If PTR->DATA == ITEM, then:
                Set LOC := PTR, Exit.
            Else:
                Set PTR := PTR->NEXT.
Step 3: Print "ITEM not found in list".
Step 4: Exit.
\`\`\`

### ২. সর্টেড (Sorted) লিংকড লিস্টে সার্চিং অ্যালগরিদম:
যদি লিংকড লিস্টটি ছোট থেকে বড় ক্রমে সাজানো থাকে, তবে মান যদি বর্তমান নোডের চেয়ে ছোট হয় কিংবা মান পেয়ে যায়, তবে আর পুরো লিস্ট না ঘুরে আগেই অনুসন্ধান শেষ করা যায়।

**টাইম কমপ্লেক্সিটি:**
Best Case: $O(1)$ (প্রথম নোডেই পাওয়া গেলে)
Worst Case: $O(n)$ (শেষ নোডে থাকলে বা না পাওয়া গেলে)`,
      keyPoints: [
        "লিংকড লিস্টে সরাসরি Binary Search করা যায় না, Linear Search করতে হয়।",
        "ডাটা পাওয়া গেলে নোডের মেমরি অ্যাড্রেস LOC এ রিটার্ন করা হয়।",
        "সার্চিং এর Worst Case Time Complexity হলো $O(n)$।"
      ]
    },
    {
      id: "6.5",
      titleBn: "লিংকড লিস্টে ডাটা ইনসার্ট এবং ডিলিট করার অ্যালগরিদম",
      titleEn: "Express the algorithms for data insert, delete into & from linked list",
      concept: `লিংকড লিস্টের শক্তিই হলো এর অত্যন্ত দ্রুত গতিসম্পন্ন **ইনসার্শন (Insertion)** এবং **ডিলিট (Deletion)** অপারেশন। কোনো মেমরি উপাদান ডানে বা বামে সরানোর (Shift) প্রয়োজন হয় না, কেবল লিংক বা পয়েন্টারগুলোর অ্যাড্রেস পরিবর্তন করলেই কাজ সম্পন্ন হয়ে যায়!

**ইনসার্ট করার ৩টি স্থান:**
১. লিংকড লিস্টের শুরুতে (At Beginning)
২. লিংকড লিস্টের শেষে (At End)
৩. নির্দিষ্ট কোনো নোডের পর (After Specific Node)`,
      realLifeAnalogy: `মালা গাঁথার মাঝখানে একটি নতুন পুঁতি বসানো—শুধুমাত্র পুঁতির দুপাশের সুতোটি কেটে নতুন পুঁতির সাথে বেঁধে দিলেই হয়!`,
      technicalDetails: `### ১. শুরুতে নোড ইনসার্ট (Insert at Beginning):
\`\`\`algo
Algorithm: INSERT_FIRST(HEAD, AVAIL, ITEM)
Step 1: [Overflow Check]
        If AVAIL == NULL, then: Print "Overflow" and Exit.
Step 2: [AVAIL থেকে নতুন নোড গ্রহণ]
        Set NEW_NODE := AVAIL, AVAIL := AVAIL->NEXT.
Step 3: Set NEW_NODE->DATA := ITEM.
Step 4: Set NEW_NODE->NEXT := HEAD.
Step 5: Set HEAD := NEW_NODE.
Step 6: Exit.
\`\`\`

### ২. শুরু থেকে নোড ডিলিট (Delete from Beginning):
\`\`\`algo
Algorithm: DELETE_FIRST(HEAD, AVAIL)
Step 1: [Underflow Check]
        If HEAD == NULL, then: Print "Underflow" and Exit.
Step 2: Set TEMP := HEAD.
Step 3: Set HEAD := HEAD->NEXT.
Step 4: [TEMP নোডটি AVAIL লিস্টে ফেরত দেওয়া]
        Set TEMP->NEXT := AVAIL, AVAIL := TEMP.
Step 5: Exit.
\`\`\``,
      keyPoints: [
        "শুরুতে ইনসার্ট ও ডিলিট অপারেশনের টাইম কমপ্লেক্সিটি $O(1)$।",
        "শেষে ইনসার্ট করার জন্য ট্রাভার্স করে শেষ নোডে পৌঁছাতে হয় $O(n)$।",
        "ইনসার্ট করার সময় AVAIL থেকে নোড কাটা হয়, ডিলিটের সময় AVAIL এ নোড জোড়া দেওয়া হয়।"
      ],
      syntaxOrFormulas: [
        {
          label: "C Language Singly Linked List Implementation",
          lang: "c",
          codeOrFormula: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* head = NULL;

void insertFirst(int val) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->next = head;
    head = newNode;
    printf("Inserted at first: %d\\n", val);
}

void deleteFirst() {
    if (head == NULL) {
        printf("Underflow! List is empty.\\n");
        return;
    }
    struct Node* temp = head;
    head = head->next;
    printf("Deleted first node: %d\\n", temp->data);
    free(temp);
}`
        },
        {
          label: "Python Linked List Node & Operations",
          lang: "python",
          codeOrFormula: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_first(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def delete_first(self):
        if not self.head:
            print("Underflow! Empty list.")
            return
        removed = self.head.data
        self.head = self.head.next
        return removed`
        }
      ]
    }
  ],
  practicalPrograms: [
    {
      title: "সিঙ্গলি লিংকড লিস্ট (Singly Linked List)-এ ডাটা ইনসার্ট এবং ডিলিট করার C ও Python প্রোগ্রাম।",
      problemStatementBn: "C এবং Python ভাষায় একটি Singly Linked List তৈরি করে তাতে ডাটা ইনসার্ট (শুরুতে ও শেষে) এবং ডিলিট করার পূর্ণাঙ্গ অ্যালগরিদম ও কোড বাস্তবায়ন করো।",
      algorithmStepsBn: [
        "ধাপ ১: struct Node তৈরি করি যার মধ্যে data এবং next পয়েন্টার থাকে।",
        "ধাপ ২: insertFirst ফাংশনে malloc দিয়ে নোড তৈরি করি, newNode->next = head এবং head = newNode সেট করি।",
        "ধাপ ৩: insertLast ফাংশনে ট্রাভার্স করে শেষ নোডে পৌঁছাই এবং শেষ নোডের next ফিল্ডে নতুন নোড যুক্ত করি।",
        "ধাপ ৪: deleteFirst ফাংশনে head = head->next করে পূর্বের head নোডটি free() করি।",
        "ধাপ ৫: display ফাংশনে PTR = head ধরে PTR != NULL পর্যন্ত সব ডাটা প্রিন্ট করি।"
      ],
      cCode: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* head = NULL;

void insertFirst(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = head;
    head = newNode;
    printf("✅ Inserted First: %d\\n", value);
}

void insertLast(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;

    if (head == NULL) {
        head = newNode;
        return;
    }

    struct Node* temp = head;
    while (temp->next != NULL) {
        temp = temp->next;
    }
    temp->next = newNode;
    printf("✅ Inserted Last: %d\\n", value);
}

void deleteFirst() {
    if (head == NULL) {
        printf("⚠️ Underflow! লিংকড লিস্ট খালি।\\n");
        return;
    }
    struct Node* temp = head;
    head = head->next;
    printf("✅ Deleted First Node: %d\\n", temp->data);
    free(temp);
}

void display() {
    if (head == NULL) {
        printf("লিংকড লিস্ট খালি।\\n");
        return;
    }
    struct Node* temp = head;
    printf("বর্তমান লিংকড লিস্ট: HEAD ➔ ");
    while (temp != NULL) {
        printf("[%d] ➔ ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}

int main() {
    printf("--- BTEB Chapter 6: Singly Linked List Program ---\\n");
    insertFirst(30);
    insertFirst(20);
    insertFirst(10);
    display();

    insertLast(40);
    insertLast(50);
    display();

    deleteFirst();
    display();

    return 0;
}`,
      pythonCode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def insert_first(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        print(f"✅ Inserted First: {data}")

    def insert_last(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        temp = self.head
        while temp.next:
            temp = temp.next
        temp.next = new_node
        print(f"✅ Inserted Last: {data}")

    def delete_first(self):
        if not self.head:
            print("⚠️ Underflow! খালি।")
            return
        removed = self.head.data
        self.head = self.head.next
        print(f"✅ Deleted First: {removed}")

    def display(self):
        temp = self.head
        nodes = []
        while temp:
            nodes.append(str(temp.data))
            temp = temp.next
        print("HEAD ➔ " + " ➔ ".join(nodes) + " ➔ NULL")

# Program Execution
if __name__ == "__main__":
    ll = SinglyLinkedList()
    ll.insert_first(30)
    ll.insert_first(20)
    ll.insert_first(10)
    ll.display()
    ll.insert_last(40)
    ll.display()
    ll.delete_first()
    ll.display()`,
      sampleOutput: `--- BTEB Chapter 6: Singly Linked List Program ---
✅ Inserted First: 30
✅ Inserted First: 20
✅ Inserted First: 10
বর্তমান লিংকড লিস্ট: HEAD ➔ [10] ➔ [20] ➔ [30] ➔ NULL
✅ Inserted Last: 40
✅ Inserted Last: 50
বর্তমান লিংকড লিস্ট: HEAD ➔ [10] ➔ [20] ➔ [30] ➔ [40] ➔ [50] ➔ NULL
✅ Deleted First Node: 10
বর্তমান লিংকড লিস্ট: HEAD ➔ [20] ➔ [30] ➔ [40] ➔ [50] ➔ NULL`,
      explanationBn: "প্রোগ্রামটিতে সিঙ্গলি লিংকড লিস্টের মূল অপারেশনসমূহ দেখানো হয়েছে। শুরুতে ইনসার্ট ও ডিলিটে মেমরি শিফটের প্রয়োজন ছাড়াই শুধুমাত্র HEAD পয়েন্টার পরিমার্জন করে কাজটি সম্পন্ন হয়েছে।"
    },
    {
      title: "ডাবলি লিংকড লিস্ট (Doubly Linked List) বাস্তবায়নের C এবং Python প্রোগ্রাম।",
      problemStatementBn: "C এবং Python ভাষায় ৩টি ফিল্ড (prev, data, next) বিশিষ্ট ডাবলি লিংকড লিস্ট তৈরি করো যা উভয় দিকে ট্রাভার্স করা প্রদর্শন করে।",
      algorithmStepsBn: [
        "ধাপ ১: struct DNode তৈরি করি যেখানে prev, data, next ফিল্ড থাকে।",
        "ধাপ ২: insertFirstDNode এ নতুন নোডের next = head এবং prev = NULL করি।",
        "ধাপ ৩: যদি পূর্বে head থেকে থাকে, তবে পূর্বের head এর prev = newNode সেট করি।",
        "ধাপ ৪: সামনে (Forward) এবং পেছনের দিকে (Backward) ট্রাভার্স করার ফাংশন তৈরি করি।"
      ],
      cCode: `#include <stdio.h>
#include <stdlib.h>

struct DNode {
    int data;
    struct DNode* prev;
    struct DNode* next;
};

struct DNode* head = NULL;

void insertFirst(int val) {
    struct DNode* newNode = (struct DNode*)malloc(sizeof(struct DNode));
    newNode->data = val;
    newNode->prev = NULL;
    newNode->next = head;

    if (head != NULL) {
        head->prev = newNode;
    }
    head = newNode;
    printf("✅ Doubly Inserted First: %d\\n", val);
}

void displayForward() {
    struct DNode* temp = head;
    printf("Forward Traverse: NULL ◄═► ");
    while (temp != NULL) {
        printf("[%d] ◄═► ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}

int main() {
    printf("--- BTEB Chapter 6: Doubly Linked List Program ---\\n");
    insertFirst(300);
    insertFirst(200);
    insertFirst(100);
    displayForward();
    return 0;
}`,
      pythonCode: `class DNode:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def insert_first(self, data):
        new_node = DNode(data)
        new_node.next = self.head
        if self.head:
            self.head.prev = new_node
        self.head = new_node

    def display(self):
        temp = self.head
        vals = []
        while temp:
            vals.append(str(temp.data))
            temp = temp.next
        print("NULL ◄═► " + " ◄═► ".join(vals) + " ◄═► NULL")

dll = DoublyLinkedList()
dll.insert_first(300)
dll.insert_first(200)
dll.insert_first(100)
dll.display()`,
      sampleOutput: `--- BTEB Chapter 6: Doubly Linked List Program ---
✅ Doubly Inserted First: 300
✅ Doubly Inserted First: 200
✅ Doubly Inserted First: 100
Forward Traverse: NULL ◄═► [100] ◄═► [200] ◄═► [300] ◄═► NULL`,
      explanationBn: "ডাবলি লিংকড লিস্টে PREV পয়েন্টার থাকার কারণে নোডগুলোর মাধ্যমে পেছনের দিকেও সহজে যাতায়াত করা যায়।"
    }
  ],
  summaryPoints: [
    "লিংকড লিস্ট হলো এক সেট নোডের ডাইনামিক রৈখিক ডাটা স্ট্রাকচার যা মেমরিতে অসন্নিকটস্থ (Discontiguous) অবস্থায় থাকে।",
    "প্রতিটি নোডে ২টি প্রধান ফিল্ড থাকে: ডাটা ফিল্ড (INFO) এবং পয়েন্টার ফিল্ড (NEXT/LINK)।",
    "লিংকড লিস্টের প্রথম নোড নির্দেশ করে HEAD/START পয়েন্টার এবং শেষ নোডের NEXT ফিল্ড থাকে NULL।",
    "ডাইনামিক মেমরি বরাদ্দকরণ সি ল্যাঙ্গুয়েজে `malloc()` এবং মেমরি মুক্তকরণ `free()` দিয়ে করা হয়।",
    "হিপ মেমরির অব্যবহৃত খালি নোডগুলোর তালিকাকে AVAIL List (Free Storage List) বলে।",
    "অব্যবহৃত পরিত্যক্ত মেমরি পুনরোদ্ধার করাকে গারবেজ কালেকশন (Garbage Collection) বলে।",
    "লিংকড লিস্টের প্রতিটি নোডে ক্রমানুসারে প্রবেশ করে প্রসেস করাকে ট্রাভার্সিং বলে (সময়সীমা $O(n)$)।",
    "লিংকড লিস্টে সরাসরি Binary Search সম্ভব নয়, কেবল Linear Search করা যায় ($O(n)$)।",
    "শুরুতে ডাটা ইনসার্ট এবং ডিলিট করার টাইম কমপ্লেক্সিটি $O(1)$, কারণ কোনো উপাদান শিফট করতে হয় না।",
    "ডাবলি লিংকড লিস্টে ৩টি ফিল্ড (PREV, DATA, NEXT) থাকে যা উভয় দিকে ট্রাভার্স করার সুবিধা দেয়।"
  ],
  boardQuestions: [
    {
      id: "q6-1",
      type: "ati_songkhipto",
      questionBn: "লিংকড লিস্ট (Linked List) কাকে বলে?",
      answerBn: "লিংকড লিস্ট হলো ডাইনামিক মেমরিতে অসন্নিকটস্থভাবে অবস্থিত কতগুলো নোড (Node) এর সমষ্টি, যেখানে প্রতিটি নোড পয়েন্টারের সাহায্যে পরবর্তী নোডের সাথে যুক্ত থাকে।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2018", "BTEB 2015"],
      isImportant: true,
      subtopicRef: "6.1"
    },
    {
      id: "q6-2",
      type: "ati_songkhipto",
      questionBn: "একটি সিঙ্গলি নোডের গঠন সংক্ষেপে লেখো।",
      answerBn: "সিঙ্গলি লিংকড লিস্টের একটি নোডে ২টি ফিল্ড থাকে: ১. ডাটা ফিল্ড (Data Field/INFO) এবং ২. পয়েন্টার ফিল্ড (Next Pointer Field/LINK)।",
      marks: 1,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2017"],
      isImportant: true,
      subtopicRef: "6.1"
    },
    {
      id: "q6-3",
      type: "ati_songkhipto",
      questionBn: "AVAIL List বা Free Storage List কী?",
      answerBn: "কম্পিউটার মেমরির হিপ সেগমেন্টে অব্যবহৃত বা খালি নোডগুলোর ডাইনামিক তালিকাকে AVAIL List বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2019", "BTEB 2016"],
      isImportant: true,
      subtopicRef: "6.2"
    },
    {
      id: "q6-4",
      type: "ati_songkhipto",
      questionBn: "গারবেজ কালেকশন (Garbage Collection) কী?",
      answerBn: "প্রোগ্রাম এক্সিকিউশন শেষে বা ডিলিট করার পর পরিত্যক্ত অব্যবহৃত মেমরি নোডগুলোকে সনাক্ত করে পুনরায় AVAIL লিস্টে ফেরত আনার স্বয়ংক্রিয় ব্যবস্থাকে গারবেজ কালেকশন বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2022", "BTEB 2018", "BTEB 2014"],
      isImportant: true,
      subtopicRef: "6.2"
    },
    {
      id: "q6-5",
      type: "songkhipto",
      questionBn: "অ্যারে এবং লিংকড লিস্টের মধ্যে ৩টি মূল পার্থক্য লেখো।",
      answerBn: "১. **মেমরি বিন্যাস:** অ্যারে মেমরিতে ধারাবাহিক ব্লক দখল করে, কিন্তু লিংকড লিস্ট অসন্নিকটস্থ ছিটানো মেমরিতে থাকে।\n২. **সাইজ:** অ্যারের সাইজ স্থির (Static), কিন্তু লিংকড লিস্টের সাইজ গতিশীল (Dynamic)।\n৩. **ইনসার্ট/ডিলিট:** অ্যারেতে ইনসার্ট/ডিলিটে ডাটা শিফটিংয়ের প্রয়োজন হয় $O(n)$, কিন্তু লিংকড লিস্টে কেবল পয়েন্টার চেঞ্জ করতে হয় $O(1)$।",
      marks: 3,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2019"],
      isImportant: true,
      subtopicRef: "6.1"
    },
    {
      id: "q6-6",
      type: "songkhipto",
      questionBn: "সি ল্যাঙ্গুয়েজে ডাইনামিক মেমরি বরাদ্দের জন্য `malloc()` এবং `free()` এর কাজ ব্যাখ্যা করো।",
      answerBn: "১. **`malloc()`:** Memory Allocation এর সংক্ষিপ্ত রূপ। এটি হিপ মেমরি থেকে নির্দিষ্ট সাইজের বাইট স্থান বরাদ্দ করে তার পয়েন্টার রিটার্ন করে (যেমন: `struct Node* p = (struct Node*)malloc(sizeof(struct Node));`)।\n\n২. **`free()`:** এটি পূর্বে বরাদ্দকৃত ডাইনামিক মেমরি মুক্ত করে মেমরি লিক রোধ করে এবং নোডটিকে AVAIL লিস্টে ফেরত দেয় (যেমন: `free(p);`)।",
      marks: 3,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2017"],
      isImportant: true,
      subtopicRef: "6.2"
    },
    {
      id: "q6-7",
      type: "rochonamulok",
      questionBn: "চিত্রসহ লিংকড লিস্টের শুরুতে একটি নতুন নোড ইনসার্ট (Insert at Beginning) করার সম্পূর্ণ অ্যালগরিদমটি লেখো।",
      answerBn: `### অ্যালগরিদম:
\`\`\`algo
Algorithm: INSERT_FIRST(HEAD, AVAIL, ITEM)
ধাপ ১: [মেমরি ওভারফ্লো পরীক্ষা]
      If AVAIL == NULL, then:
          Print "Memory Overflow! Cannot allocate memory." and Exit.
ধাপ ২: [AVAIL লিস্ট থেকে প্রথম খালি নোড সংগ্রহ]
      Set NEW_NODE := AVAIL.
      Set AVAIL := AVAIL->NEXT.
ধাপ ৩: [ডাটা অ্যাসাইন]
      Set NEW_NODE->DATA := ITEM.
ধাপ ৪: [পয়েন্টার লিংক সংশোধন]
      Set NEW_NODE->NEXT := HEAD.
ধাপ ৫: [HEAD আপডেট]
      Set HEAD := NEW_NODE.
ধাপ ৬: Exit.
\`\`\`

**ব্যাখ্যা:** নতুন নোডটির NEXT ফিল্ডকে বর্তমান HEAD এর মেমরি অ্যাড্রেস দেওয়া হয় এবং এরপর HEAD কে নতুন নোডের দিকে পয়েন্ট করানো হয়। এতে $O(1)$ সময়ে কাজ শেষ হয়।`,
      diagramContent: `Before: HEAD ──► Node A ──► Node B ──► NULL

Step:   NEW_NODE (Item: 5) ──► Node A
After:  HEAD ──► NEW_NODE ──► Node A ──► Node B ──► NULL`,
      marks: 5,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2018", "BTEB 2015"],
      isImportant: true,
      subtopicRef: "6.5"
    },
    {
      id: "q6-8",
      type: "rochonamulok",
      questionBn: "চিত্রসহ লিংকড লিস্টের প্রথম নোড ডিলিট (Delete from Beginning) করার অ্যালগরিদম ও মেমরি মুক্তকরণ প্রক্রিয়া আলোচনা করো।",
      answerBn: `### অ্যালগরিদম:
\`\`\`algo
Algorithm: DELETE_FIRST(HEAD, AVAIL)
ধাপ ১: [মেমরি আন্ডারফ্লো পরীক্ষা]
      If HEAD == NULL, then:
          Print "Underflow! Linked List is empty." and Exit.
ধাপ ২: [প্রথম নোডের পয়েন্টার সাময়িকভাবে রাখা]
      Set TEMP := HEAD.
ধাপ ৩: [HEAD পয়েন্টারকে দ্বিতীয় নোডে স্থানান্তর]
      Set HEAD := HEAD->NEXT.
ধাপ ৪: [অপসারিত নোডটিকে AVAIL লিস্টে ফেরত দেওয়া]
      Set TEMP->NEXT := AVAIL.
      Set AVAIL := TEMP.
ধাপ ৫: Exit.
\`\`\`

**টাইম কমপ্লেক্সিটি:** $O(1)$`,
      marks: 5,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2017"],
      isImportant: true,
      subtopicRef: "6.5"
    }
  ],
  quizQuestions: [
    {
      id: 1,
      questionBn: "লিংকড লিস্টের নোডসমূহ মেমরির কোন সেগমেন্টে বরাদ্দ করা হয়?",
      options: ["Stack Segment", "Heap Segment", "Data Segment", "Register"],
      correctAnswerIndex: 1,
      explanationBn: "লিংকড লিস্ট রানটাইমে হিপ মেমরি (Heap Segment) থেকে ডাইনামিকালি বরাদ্দ পায়।",
      topicRef: "6.2"
    },
    {
      id: 2,
      questionBn: "লিংকড লিস্টের প্রথম নোডের অ্যাড্রেস ধারণ করে কোন পয়েন্টারটি?",
      options: ["REAR", "TOP", "HEAD / START", "AVAIL"],
      correctAnswerIndex: 2,
      explanationBn: "HEAD বা START পয়েন্টার লিংকড লিস্টের প্রথম নোডের মেমরি স্থান নির্দেশ করে।",
      topicRef: "6.1"
    },
    {
      id: 3,
      questionBn: "লিংকড লিস্টের শেষ নোডের NEXT ফিল্ডে কী মান থাকে?",
      options: ["0x0001", "HEAD Address", "NULL", "-1"],
      correctAnswerIndex: 2,
      explanationBn: "লিস্টের সমাপ্তি বোঝাতে শেষ নোডের NEXT ফিল্ডে NULL মান সংরক্ষিত থাকে।",
      topicRef: "6.1"
    },
    {
      id: 4,
      questionBn: "সি ল্যাঙ্গুয়েজে রানটাইমে ডাইনামিক মেমরি মুক্ত করতে কোনটি ব্যবহৃত হয়?",
      options: ["malloc()", "free()", "calloc()", "delete()"],
      correctAnswerIndex: 1,
      explanationBn: "free() ফাংশন পূর্বে বরাদ্দকৃত ডাইনামিক মেমরি নোড সিস্টেমের AVAIL লিস্টে ফেরত পাঠায়।",
      topicRef: "6.2"
    },
    {
      id: 5,
      questionBn: "অব্যবহৃত ফাঁকা মেমরি নোডগুলোর ব্লককে কী বলা হয়?",
      options: ["Stack Memory", "AVAIL List / Free Pool", "Queue Buffer", "Heap Garbage"],
      correctAnswerIndex: 1,
      explanationBn: "অব্যবহৃত মেমরি নোডগুলোর তালিকাকে AVAIL List বা Free Storage List বলে।",
      topicRef: "6.2"
    },
    {
      id: 6,
      questionBn: "ট্রাভার্সালের সময় এক নোড থেকে পরবর্তী নোডে যাওয়ার সঠিক পয়েন্টার নির্দেশ কোনটি?",
      options: ["PTR++", "PTR = PTR->NEXT", "PTR = HEAD", "PTR->DATA++"],
      correctAnswerIndex: 1,
      explanationBn: "লিংকড লিস্টে পরবর্তী নোডের অ্যাড্রেসে যেতে `PTR = PTR->NEXT` ব্যবহার করতে হয়।",
      topicRef: "6.3"
    },
    {
      id: 7,
      questionBn: "লিংকড লিস্টে ডাটা অনুসন্ধানের (Searching) Worst Case সময়কাল কত?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswerIndex: 2,
      explanationBn: "লিংকড লিস্টে সরাসরি Binary Search করা যায় না; রৈখিক অনুসন্ধানের Worst Case Time Complexity $O(n)$।",
      topicRef: "6.4"
    },
    {
      id: 8,
      questionBn: "লিংকড লিস্টের শুরুতে একটি নতুন নোড যুক্ত করার Time Complexity কত?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswerIndex: 0,
      explanationBn: "শুরুতে নোড যুক্ত করলে কোনো উপাদান সরানোর প্রয়োজন হয় না, কেবল পয়েন্টার বদলাতে হয়, তাই O(1)।",
      topicRef: "6.5"
    },
    {
      id: 9,
      questionBn: "PREV, DATA এবং NEXT—এই ৩টি ফিল্ড থাকে কোন লিংকড লিস্টে?",
      options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Header Linked List"],
      correctAnswerIndex: 1,
      explanationBn: "ডাবলি লিংকড লিস্টের প্রতিটি নোডে PREV, DATA এবং NEXT—এই ৩টি ফিল্ড থাকে।",
      topicRef: "6.1"
    },
    {
      id: 10,
      questionBn: "সার্কুলার লিংকড লিস্টের শেষ নোডের NEXT ফিল্ডে কী থাকে?",
      options: ["NULL", "HEAD Noode Address", "PREV Address", "-1"],
      correctAnswerIndex: 1,
      explanationBn: "সার্কুলার লিংকড লিস্টে শেষ নোডের NEXT ফিল্ডে প্রথম নোড (HEAD) এর অ্যাড্রেস থাকে।",
      topicRef: "6.1"
    }
  ]
};
