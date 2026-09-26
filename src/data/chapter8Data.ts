import { Chapter } from '../types/syllabus';

export const CHAPTER_8_DATA: Chapter = {
  id: 8,
  code: "28542-CH08",
  titleBn: "সার্চিং অপারেশন (Searching Operation)",
  titleEn: "Searching Operation",
  status: "complete",
  learningObjectives: [
    "ডাটা স্ট্রাকচারে সার্চিং (Searching) অপারেশনের মূল ধারণা, গুরুত্ব এবং বিভিন্ন কৌশল (Techniques) অনুধাবন করা।",
    "লিনিয়ার সার্চ (Linear / Sequential Search) এবং বাইনারি সার্চ (Binary Search / Divide & Conquer)-এর মূলনীতি জানা।",
    "অবিন্যস্ত (Unsorted) এবং সাজানো (Sorted) ডাটা সেটে সার্চিং প্রয়োগের পূর্বশর্ত ব্যাখ্যা করা।",
    "লিনিয়ার সার্চ অ্যালগরিদমের ধাপসমূহ এবং C/Python ভাষায় বাস্তবায়ন করা।",
    "বাইনারি সার্চ অ্যালগরিদমে সীমানা ও মধ্যবিন্দু ($\text{MID} = \\lfloor(\text{LOW} + \\text{HIGH})/2\\rfloor$) নিরূপণের গাণিতিক নিয়ম শেখা।",
    "লিনিয়ার সার্চ এবং বাইনারি সার্চ অ্যালগরিদমের সময় জটিলতা ($O(n)$ বনাম $O(\\log n)$) বিস্তৃত তুলনামূলক ছক আকারে বিশ্লেষণ করা।"
  ],
  subtopics: [
    {
      id: "8.1",
      titleBn: "সার্চিং অপারেশনের বিভিন্ন কৌশলসমূহ",
      titleEn: "State different technics of search operation",
      concept: `মেমরিতে সংরক্ষিত কোনো ডাটা স্ট্রাকচারের ভেতর নির্দিষ্ট কোনো কাঙ্ক্ষিত মান বা ডাটা উপাদান (**Target Key / ITEM**) বিদ্যমান আছে কিনা তা খুঁজে বের করা এবং থাকলে তার মেমরি ইনডেক্স বা অবস্থান (Location / LOC) বের করার প্রক্রিয়াকে **সার্চিং (Searching Operation)** বলে।

ডাটা সংগঠনের ধরন ও গতির ওপর ভিত্তি করে বিভিন্ন সার্চিং কৌশল ব্যবহার করা হয়:
১. **লিনিয়ার বা সিকোয়েন্সিয়াল সার্চ (Linear / Sequential Search):** ডাটা সাজানো থাকুক বা না থাকুক, প্রথম উপাদান থেকে শেষ উপাদান পর্যন্ত একে একে মিলিয়ে দেখা হয়।
২. **বাইনারি সার্চ (Binary Search):** ডাটা অবশ্যই সাজানো (Sorted) থাকতে হবে; প্রতি ধাপে সার্চ স্পেস অর্ধেক (Half) করে ডাটা খোঁজা হয়।
৩. **ইন্টারপোলেশন সার্চ (Interpolation Search):** সুষমভাবে সাজানো ডাটাতে দ্রুত অনুসন্ধানের জন্য ব্যবহৃত হয়।
৪. **হ্যাশিং সার্চ (Hashing / Hash Table Search):** হ্যাশ ফাংশনের মাধ্যমে গড় $O(1)$ ধ্রুব সময়ে ডাটা খুঁজে বের করা হয়।`,
      realLifeAnalogy: `১. এলোমেলো ছড়ানো খাতার স্তূপ থেকে নির্দিষ্ট রোল নম্বরের খাতা বের করা = Linear Search।
২. অভিধান বা ডিকশনারিতে বর্ণানুক্রমে সাজানো শব্দ খোঁজা = Binary Search।`,
      technicalDetails: `সার্চিং অপারেশনের দুই ধরনের আউটপুট থাকে:
- **Successful Search:** কাঙ্ক্ষিত উপাদান পাওয়া গেলে তার ইনডেক্স নম্বর ($LOC$) রিটার্ন করা হয়।
- **Unsuccessful Search:** পুরো ডাটা সেট খুঁজেও উপাদানটি না পাওয়া গেলে $LOC = -1$ বা $NULL$ রিটার্ন করা হয়।`,
      tableData: {
        headers: ["সার্চিং কৌশল", "ডাটা সেটের পূর্বশর্ত", "গড় সময়সীমা (Time Complexity)"],
        rows: [
          ["Linear Search", "যেকোনো ডাটা সেট (Sorted or Unsorted)।", "$O(n)$"],
          ["Binary Search", "অবশ্যই সাজানো ডাটা সেট (Must be Sorted)।", "$O(\\log_2 n)$"],
          ["Interpolation Search", "সুষমভাবে সাজানো ডাটা সেট।", "$O(\\log_2(\\log_2 n))$"],
          ["Hashing Search", "হ্যাশ টেবিল কী-ভ্যালু স্ট্রাকচার।", "$O(1)$"]
        ]
      },
      keyPoints: [
        "সার্চিং অপারেশনের মূল লক্ষ্য হলো সর্বনিম্ন সময়ে নির্দিষ্ট ডাটা খুঁজে বের করা।",
        "লিনিয়ার সার্চ অবিন্যস্ত ডাটাতেও কাজ করে, কিন্তু বাইনারি সার্চের জন্য ডাটা সর্টেড হওয়া বাধ্যতামূলক।",
        "হ্যাশিং সার্চ হলো দ্রুততম সার্চিং কৌশল ($O(1)$)।"
      ]
    },
    {
      id: "8.2",
      titleBn: "লিনিয়ার এবং বাইনারি সার্চের মূল কৌশল",
      titleEn: "Explain the technic of linear & binary search",
      concept: `কম্পিউটার সায়েন্সে সবচেয়ে বহুল ব্যবহৃত দুটি সার্চিং টেকনিক হলো লিনিয়ার সার্চ এবং বাইনারি সার্চ:

**১. লিনিয়ার সার্চের কৌশল (Linear Search Technique):**
- ডাটা স্ট্রাকচারের $0$ নম্বর ইনডেক্স থেকে শুরু করে $n-1$ নম্বর ইনডেক্স পর্যন্ত প্রতিটি উপাদানের সাথে কাঙ্ক্ষিত $ITEM$ এর সমতা পরীক্ষা ($A[i] == ITEM$) করা হয়।
- ডাটা মিলে গেলে সাথে সাথে অবস্থান প্রিন্ট করে সার্চ বন্ধ করা হয়।

**২. বাইনারি সার্চের কৌশল (Binary Search Technique - Divide & Conquer):**
- এটি **ডিভাইড অ্যান্ড কনকার (Divide & Conquer)** নীতিতে চলে।
- সর্টেড অ্যারের নিম্নসীমা $LOW = 0$ এবং ঊর্ধ্বসীমা $HIGH = n-1$ ধরে মধ্যবিন্দু বের করা হয়:
$$\text{MID} = \\lfloor (LOW + HIGH) / 2 \\rfloor$$
- যদি $A[MID] == ITEM$ হয়, তবে সার্চ সফল!
- যদি $ITEM < A[MID]$ হয়, তবে বোঝা যায় উপাদানটি বামভাগে আছে, তাই $HIGH = MID - 1$ সেট করা হয়।
- যদি $ITEM > A[MID]$ হয়, তবে বোঝা যায় উপাদানটি ডানভাগে আছে, তাই $LOW = MID + 1$ সেট করা হয়।`,
      diagramType: "ascii",
      diagramContent: ` ┌────────────────────────────────────────────────────────────────────────┐
 │                   Binary Search Divide & Conquer Logic                 │
 ├────────────────────────────────────────────────────────────────────────┤
 │ Sorted Array: [10, 20, 30, 40, 50, 60, 70, 80, 90]  (Target = 70)      │
 │ LOW = 0, HIGH = 8 ──► MID = (0+8)/2 = 4 (Value = 50)                   │
 │                                                                        │
 │ 70 > 50 ➔ Eliminate Left Half! New Range: [60, 70, 80, 90]            │
 │ LOW = 5, HIGH = 8 ──► MID = (5+8)/2 = 6 (Value = 70) ➔ FOUND!          │
 └────────────────────────────────────────────────────────────────────────┘`,
      keyPoints: [
        "লিনিয়ার সার্চ ব্রুট ফোর্স পদ্ধতিতে পরপর ডাটা তুলনা করে।",
        "বাইনারি সার্চ প্রতি ধাপে ডাটা পরিসরকে অর্ধেক করে ফেলে।",
        "বাইনারি সার্চ লিনিয়ার সার্চের তুলনায় বহুগুণ দ্রুতগতিসম্পন্ন।"
      ]
    },
    {
      id: "8.3",
      titleBn: "লিনিয়ার সার্চের অ্যালগরিদম",
      titleEn: "Explain algorithm for linear search",
      concept: `লিনিয়ার সার্চের অ্যালগরিদম অত্যন্ত সহজ ও সরল। যেকোনো ছোট ডাটা সেটে কিংবা অবিন্যস্ত উপাত্তের ক্ষেত্রে লিনিয়ার সার্চ প্রয়োগ করা হয়।`,
      technicalDetails: `### লিনিয়ার সার্চ অ্যালগরিদম:
\`\`\`algo
Algorithm: LINEAR_SEARCH(A, N, ITEM, LOC)
Step 1: Set LOC := -1, I := 0.
Step 2: Repeat Step 3 while I < N:
Step 3:     If A[I] == ITEM, then:
                Set LOC := I.
                Print "ITEM found at index ", LOC.
                Exit.
            Else:
                Set I := I + 1.
Step 4: If LOC == -1, then:
            Print "ITEM not found in array".
Step 5: Exit.
\`\`\`

**টাইম কমপ্লেক্সিটি বিশ্লেষণ:**
- Best Case: $O(1)$ (যদি কাঙ্ক্ষিত উপাদানটি অ্যারের প্রথম স্থানেই $A[0]$ পাওয়া যায়)।
- Worst Case: $O(n)$ (যদি উপাদানটি একদম শেষে থাকে বা অ্যারেতে অনুপস্থিত থাকে)।
- Average Case: $O(n)$।`,
      syntaxOrFormulas: [
        {
          label: "C Language Linear Search Function",
          lang: "c",
          codeOrFormula: `#include <stdio.h>

int linearSearch(int arr[], int size, int target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) {
            return i; // Index where found
        }
    }
    return -1; // Not found
}`
        },
        {
          label: "Python Linear Search Function",
          lang: "python",
          codeOrFormula: `def linear_search(arr, target):
    for index, value in enumerate(arr):
        if value == target:
            return index
    return -1`
        }
      ],
      keyPoints: [
        "লিনিয়ার সার্চের Best Case $O(1)$ এবং Worst Case $O(n)$।",
        "অবিন্যস্ত ডাটা সেটে লিনিয়ার সার্চ একমাত্র পথ।",
        "ডাটা সংখ্যা ছোট হলে লিনিয়ার সার্চ কার্যকর।"
      ]
    },
    {
      id: "8.4",
      titleBn: "বাইনারি সার্চের অ্যালগরিদম",
      titleEn: "Explain the algorithm for binary search",
      concept: `বাইনারি সার্চের জন্য পূর্বশর্ত হলো অ্যারেটির উপাদানসমূহ অবশ্যই ঊর্ধ্বক্রমে (Ascending) অথবা নিম্নক্রমে (Descending) সাজানো থাকতে হবে।`,
      technicalDetails: `### বাইনারি সার্চ অ্যালগরিদম:
\`\`\`algo
Algorithm: BINARY_SEARCH(A, N, ITEM, LOC)
Step 1: Set LOW := 0, HIGH := N - 1, LOC := -1.
Step 2: Repeat Steps 3 and 4 while LOW <= HIGH:
Step 3:     Set MID := (LOW + HIGH) / 2.
Step 4:     If A[MID] == ITEM, then:
                Set LOC := MID.
                Print "ITEM found at index ", LOC.
                Exit.
            Else If ITEM < A[MID], then:
                Set HIGH := MID - 1.
            Else:
                Set LOW := MID + 1.
Step 5: If LOC == -1, then:
            Print "ITEM not found in array".
Step 6: Exit.
\`\`\`

**টাইম কমপ্লেক্সিটি বিশ্লেষণ:**
প্রতিবার অনুসন্ধানের পরিসর অর্ধেক হয়ে যায়: $n \rightarrow n/2 \rightarrow n/4 \dots \rightarrow 1$
$$2^k = n \implies k = \\log_2 n$$
সুতরাং, বাইনারি সার্চের Worst & Average Case Time Complexity হলো **$O(\\log_2 n)$**।`,
      syntaxOrFormulas: [
        {
          label: "C Language Binary Search Function",
          lang: "c",
          codeOrFormula: `#include <stdio.h>

int binarySearch(int arr[], int size, int target) {
    int low = 0, high = size - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`
        },
        {
          label: "Python Binary Search Function",
          lang: "python",
          codeOrFormula: `def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`
        }
      ],
      keyPoints: [
        "বাইনারি সার্চের টাইম কমপ্লেক্সিটি $O(\\log n)$।",
        "ডাটা অবশ্যই সর্টেড হতে হবে।",
        "১০ লক্ষ উপাদানের মধ্যেও বাইনারি সার্চে সর্বোচ্চ ২০টি ধাপে ডাটা খুঁজে পাওয়া সম্ভব!"
      ]
    },
    {
      id: "8.5",
      titleBn: "লিনিয়ার এবং বাইনারি সার্চের জটিলতার তুলনা",
      titleEn: "Compare between complexity of linear & binary search algorithms",
      concept: `লিনিয়ার সার্চ এবং বাইনারি সার্চের মধ্যে গতির দিক থেকে আকাশ-পাতাল তফাৎ বিদ্যমান। BTEB বোর্ড ফাইনাল পরীক্ষার জন্য এই বিস্তৃত তুলনামূলক ছকটি অত্যন্ত গুরুত্বপূর্ণ।`,
      tableData: {
        headers: ["পার্থক্যের বিষয়", "লিনিয়ার সার্চ (Linear Search)", "বাইনারি সার্চ (Binary Search)"],
        rows: [
          ["ডাটা সর্টিং শর্ত", "ডাটা সর্টেড থাকা বাধ্যতামূলক নয় (Unsorted/Sorted)।", "ডাটা অবশ্যই সর্টেড (Sorted) থাকতে হবে।"],
          ["অনুসন্ধান কৌশল", "পরপর ক্রমানুসারে উপাদান মিলিয়ে দেখা হয়।", "ডিভাইড অ্যান্ড কনকার নীতিতে পরিসর অর্ধেক করা হয়।"],
          ["Worst Case Time", "$O(n)$ (রৈখিক সময়সীমা)", "$O(\\log_2 n)$ (লগারিথমিক সময়সীমা)"],
          ["Best Case Time", "$O(1)$", "$O(1)$"],
          ["ধাপ সংখ্যা (১০০ ডাটা)", "সর্বোচ্চ ১০০টি পদক্ষেপ লাগে।", "সর্বোচ্চ ৭টি পদক্ষেপ লাগে।"],
          ["ধাপ সংখ্যা (১০ লাখ ডাটা)", "সর্বোচ্চ ১০,০০,০০০টি পদক্ষেপ লাগে!", "সর্বোচ্চ মাত্র ২০টি পদক্ষেপ লাগে!"],
          ["বাস্তবায়ন জটিলতা", "খুবই সহজ ও সরল।", "তুলনামূলকভাবে মাঝারি জটিল।"],
          ["প্রয়োগের স্থান", "ছোট ও অবিন্যস্ত ডাটা সেটের জন্য প্রযোজ্য।", "বৃহৎ ও সাজানো ডাটা সেটের জন্য প্রযোজ্য।"]
        ]
      },
      keyPoints: [
        "বড় ডাটা সেটের জন্য বাইনারি সার্চের পারফরম্যান্স লিনিয়ার সার্চের চেয়ে বহুগুণ শ্রেষ্ঠ।",
        "১০ লাখ ডাটাতে লিনিয়ার সার্চে ১০ লাখ কাজ করতে হয়, কিন্তু বাইনারি সার্চে মাত্র ২০ কাজেই ফল পাওয়া যায়।"
      ]
    }
  ],
  practicalPrograms: [
    {
      title: "লিনিয়ার সার্চ (Linear Search) ব্যবহার করে ডাটা খোঁজার C ও Python প্রোগ্রাম।",
      problemStatementBn: "C এবং Python ভাষায় একটি ১D অ্যারে থেকে কাঙ্ক্ষিত মানটি খুঁজে বের করার লিনিয়ার সার্চ প্রোগ্রাম তৈরি ও রান করো।",
      algorithmStepsBn: [
        "ধাপ ১: অ্যারে A, এর সাইজ N এবং কাঙ্ক্ষিত মান ITEM ইনপুট নিই।",
        "ধাপ ২: i = 0 থেকে N-1 পর্যন্ত লুপ চালাই।",
        "ধাপ ৩: যদি A[i] == ITEM হয়, তবে ইনডেক্স i প্রিন্ট করে প্রোগ্রাম শেষ করি।",
        "ধাপ ৪: লুপ শেষ হলেও না পাওয়া গেলে 'Not Found' প্রিন্ট করি।"
      ],
      cCode: `#include <stdio.h>

int main() {
    printf("--- BTEB Chapter 8: Linear Search Program ---\\n");
    int arr[] = {15, 42, 8, 91, 23, 67, 34};
    int size = sizeof(arr) / sizeof(arr[0]);
    int target = 23;
    int foundIndex = -1;

    for (int i = 0; i < size; i++) {
        if (arr[i] == target) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex != -1) {
        printf("✅ মান %d পাওয়া গেছে Index [%d] এ।\\n", target, foundIndex);
    } else {
        printf("❌ মান %d অ্যারেতে পাওয়া যায়নি।\\n", target);
    }
    return 0;
}`,
      pythonCode: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

arr = [15, 42, 8, 91, 23, 67, 34]
target = 23
res = linear_search(arr, target)
if res != -1:
    print(f"✅ মান {target} পাওয়া গেছে Index [{res}] এ।")
else:
    print("❌ মান পাওয়া যায়নি।")`,
      sampleOutput: `--- BTEB Chapter 8: Linear Search Program ---
✅ মান 23 পাওয়া গেছে Index [4] এ।`,
      explanationBn: "প্রোগ্রামটি অ্যারের প্রথম উপাদান থেকে শুরু করে একে একে মান মিলিয়ে কাঙ্ক্ষিত উপাদানটির সঠিক ইনডেক্স বের করেছে।"
    },
    {
      title: "বাইনারি সার্চ (Binary Search) ব্যবহার করে ডাটা খোঁজার C ও Python প্রোগ্রাম।",
      problemStatementBn: "C এবং Python ভাষায় একটি সর্টেড অ্যারেতে ডিভাইড অ্যান্ড কনকার কৌশল প্রয়োগ করে বাইনারি সার্চ প্রোগ্রাম বাস্তবায়ন করো।",
      algorithmStepsBn: [
        "ধাপ ১: সর্টেড অ্যারে, low = 0, high = N - 1 এবং target নিই।",
        "ধাপ ২: low <= high থাকা পর্যন্ত mid = (low + high) / 2 হিসাব করি।",
        "ধাপ ৩: A[mid] == target হলে mid রিটার্ন করি।",
        "ধাপ ৪: A[mid] < target হলে low = mid + 1 করি; অন্যথায় high = mid - 1 করি।"
      ],
      cCode: `#include <stdio.h>

int binarySearch(int arr[], int size, int target) {
    int low = 0, high = size - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

int main() {
    printf("--- BTEB Chapter 8: Binary Search Program ---\\n");
    int sortedArr[] = {10, 18, 25, 34, 42, 55, 68, 77, 85, 99};
    int size = sizeof(sortedArr) / sizeof(sortedArr[0]);
    int target = 68;

    int idx = binarySearch(sortedArr, size, target);
    if (idx != -1) {
        printf("✅ Binary Search সফল! %d পাওয়া গেছে Index [%d] এ।\\n", target, idx);
    } else {
        printf("❌ মান পাওয়া যায়নি।\\n");
    }
    return 0;
}`,
      pythonCode: `def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

sorted_arr = [10, 18, 25, 34, 42, 55, 68, 77, 85, 99]
target = 68
res = binary_search(sorted_arr, target)
print(f"✅ Binary Search সফল! {target} পাওয়া গেছে Index [{res}] এ।")`,
      sampleOutput: `--- BTEB Chapter 8: Binary Search Program ---
✅ Binary Search সফল! 68 পাওয়া গেছে Index [6] এ।`,
      explanationBn: "বাইনারি সার্চ প্রোগ্রামটি সর্টেড অ্যারের পরিসর প্রতি ধাপে অর্ধেক করে খুব দ্রুত সময়ে মানটি খুঁজে বের করেছে।"
    }
  ],
  summaryPoints: [
    "সার্চিং হলো ডাটা স্ট্রাকচার থেকে নির্দিষ্ট টার্গেট ডাটার অবস্থান খুঁজে বের করার প্রক্রিয়া।",
    "লিনিয়ার সার্চ যেকোনো অবিন্যস্ত বা বিন্যস্ত ডাটাতে কাজ করে এবং এর সময়সীমা $O(n)$।",
    "বাইনারি সার্চের জন্য ডাটা অবশ্যই সর্টেড বা সাজানো থাকতে হয়।",
    "বাইনারি সার্চ ডিভাইড অ্যান্ড কনকার নীতিতে কাজ করে এবং সময়সীমা $O(\\log n)$।",
    "১০ লাখ উপাদানের ক্ষেত্রে লিনিয়ার সার্চে ১০ লাখ কাজ লাগলেও বাইনারি সার্চে মাত্র ২০টি কাজ লাগে।",
    "লিনিয়ার সার্চের Best Case $O(1)$ এবং Worst Case $O(n)$।",
    "বাইনারি সার্চের মধ্যবিন্দু নিরূপণের সূত্র: $\\text{MID} = \\lfloor (LOW + HIGH) / 2 \\rfloor$।",
    "হ্যাশিং সার্চ হলো দ্রুততম অনুসন্ধান পদ্ধতি যার সময়সীমা $O(1)$।"
  ],
  boardQuestions: [
    {
      id: "q8-1",
      type: "ati_songkhipto",
      questionBn: "সার্চিং (Searching) অপারেশন কাকে বলে?",
      answerBn: "ডাটা স্ট্রাকচারে সংরক্ষিত ডাটার মধ্যে নির্দিষ্ট কোনো কাঙ্ক্ষিত মান বিদ্যমান আছে কিনা এবং থাকলে তার অবস্থান বের করার প্রক্রিয়াকে সার্চিং বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2018", "BTEB 2015"],
      isImportant: true,
      subtopicRef: "8.1"
    },
    {
      id: "q8-2",
      type: "ati_songkhipto",
      questionBn: "বাইনারি সার্চের প্রধান পূর্বশর্তটি কী?",
      answerBn: "বাইনারি সার্চ প্রয়োগের পূর্বশর্ত হলো অ্যারের ডাটা উপাদানগুলো অবশ্যই ঊর্ধ্বক্রমে বা নিম্নক্রমে সাজানো (Sorted) থাকতে হবে।",
      marks: 1,
      yearsAppeared: ["BTEB 2022", "BTEB 2020", "BTEB 2017"],
      isImportant: true,
      subtopicRef: "8.2"
    },
    {
      id: "q8-3",
      type: "ati_songkhipto",
      questionBn: "বাইনারি সার্চের টাইম কমপ্লেক্সিটি (Time Complexity) কত?",
      answerBn: "বাইনারি সার্চের টাইম কমপ্লেক্সিটি হলো **$O(\\log_2 n)$**।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2019", "BTEB 2016"],
      isImportant: true,
      subtopicRef: "8.4"
    },
    {
      id: "q8-4",
      type: "songkhipto",
      questionBn: "লিনিয়ার সার্চ এবং বাইনারি সার্চের মধ্যে ৩টি মূল পার্থক্য লেখো।",
      answerBn: "১. **ডাটা শর্ত:** লিনিয়ার সার্চে ডাটা অবিন্যস্ত হলেও চলে, কিন্তু বাইনারি সার্চে ডাটা সর্টেড থাকা বাধ্যতামূলক।\n২. **টাইম কমপ্লেক্সিটি:** লিনিয়ার সার্চের সময়সীমা $O(n)$, অপরদিকে বাইনারি সার্চের সময়সীমা $O(\\log n)$।\n৩. **কৌশল:** লিনিয়ার সার্চ সিকোয়েন্সিয়ালি একটির পর একটি ডাটা মেলায়, আর বাইনারি সার্চ ডিভাইড অ্যান্ড কনকার নীতিতে প্রতি ধাপে ডাটা অর্ধেক করে।",
      marks: 3,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2019"],
      isImportant: true,
      subtopicRef: "8.5"
    },
    {
      id: "q8-5",
      type: "rochonamulok",
      questionBn: "বাইনারি সার্চের অ্যালগরিদমটি লেখো এবং ১০টি সর্টেড ডাটা [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] থেকে মান 70 খোঁজার স্টেপ-বাই-স্টেপ ট্রেস টেবিল দেখাও।",
      answerBn: `### বাইনারি সার্চ অ্যালগরিদম:
\`\`\`algo
Algorithm: BINARY_SEARCH(A, N, ITEM, LOC)
Step 1: Set LOW := 0, HIGH := N - 1, LOC := -1.
Step 2: Repeat Steps 3 and 4 while LOW <= HIGH:
Step 3:     Set MID := (LOW + HIGH) / 2.
Step 4:     If A[MID] == ITEM, then: Set LOC := MID and Exit.
            Else If ITEM < A[MID], then: Set HIGH := MID - 1.
            Else: Set LOW := MID + 1.
Step 5: Exit.
\`\`\`

### ট্রেস টেবিল (Target = 70):
| ধাপ (Step) | LOW | HIGH | MID = (LOW+HIGH)/2 | A[MID] | তুলনা (ITEM vs A[MID]) | সিদ্ধান্ত |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **১** | 0 | 9 | 4 | 50 | $70 > 50$ | $LOW = MID + 1 = 5$ |
| **২** | 5 | 9 | 7 | 80 | $70 < 80$ | $HIGH = MID - 1 = 6$ |
| **৩** | 5 | 6 | 5 | 60 | $70 > 60$ | $LOW = MID + 1 = 6$ |
| **৪** | 6 | 6 | 6 | 70 | $70 == 70$ | **FOUND! Index [6]** |

**ফলাফল:** মাত্র ৪টি পদক্ষেপে মান 70 খুঁজে পাওয়া গেছে!`,
      marks: 5,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2018", "BTEB 2015"],
      isImportant: true,
      subtopicRef: "8.4"
    }
  ],
  quizQuestions: [
    {
      id: 1,
      questionBn: "অবিন্যস্ত (Unsorted) ডাটা সেটে কোন সার্চিং কৌশল ব্যবহৃত হয়?",
      options: ["Binary Search", "Linear Search", "Interpolation Search", "Fibonacci Search"],
      correctAnswerIndex: 1,
      explanationBn: "লিনিয়ার সার্চ অবিন্যস্ত ও বিন্যস্ত উভয় ডাটা সেটে কাজ করে।",
      topicRef: "8.1"
    },
    {
      id: 2,
      questionBn: "বাইনারি সার্চ (Binary Search) কোন অ্যালগরিদম ডিজাইন কৌশলে চলে?",
      options: ["Brute Force", "Greedy Method", "Divide and Conquer", "Dynamic Programming"],
      correctAnswerIndex: 2,
      explanationBn: "বাইনারি সার্চ প্রতি ধাপে ডাটা পরিসরকে অর্ধেক করে ডিভাইড অ্যান্ড কনকার নীতিতে কাজ করে।",
      topicRef: "8.2"
    },
    {
      id: 3,
      questionBn: "লিনিয়ার সার্চের Worst Case সময়কাল (Time Complexity) কত?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswerIndex: 2,
      explanationBn: "লিনিয়ার সার্চের Worst Case টাইম কমপ্লেক্সিটি $O(n)$।",
      topicRef: "8.3"
    },
    {
      id: 4,
      questionBn: "বাইনারি সার্চের Worst Case সময়কাল (Time Complexity) কত?",
      options: ["O(n)", "O(log₂ n)", "O(n log n)", "O(1)"],
      correctAnswerIndex: 1,
      explanationBn: "বাইনারি সার্চের টাইম কমপ্লেক্সিটি $O(\\log_2 n)$।",
      topicRef: "8.4"
    },
    {
      id: 5,
      questionBn: "১০০০টি উপাদানবিশিষ্ট সর্টেড অ্যারেতে বাইনারি সার্চে সর্বোচ্চ কতটি তুলনা লাগবে?",
      options: ["১০০০", "৫০০", "১০ (approx)", "১"],
      correctAnswerIndex: 2,
      explanationBn: "$\\log_2 1000 \\approx 9.96$, অর্থাৎ সর্বোচ্চ ১০টি তুলনাই যথেষ্ট!",
      topicRef: "8.4"
    },
    {
      id: 6,
      questionBn: "বাইনারি সার্চের মধ্যবিন্দু নিরূপণের সঠিক সূত্র কোনটি?",
      options: ["MID = (LOW + HIGH) / 2", "MID = LOW + HIGH", "MID = HIGH - LOW", "MID = LOW * HIGH / 2"],
      correctAnswerIndex: 0,
      explanationBn: "বাইনারি সার্চে মধ্যবিন্দু নিরূপণের সূত্র হলো $\\text{MID} = (LOW + HIGH) / 2$।",
      topicRef: "8.4"
    },
    {
      id: 7,
      questionBn: "লিনিয়ার সার্চের Best Case সময়কাল কত?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      correctAnswerIndex: 2,
      explanationBn: "যদি প্রথম উপাদান $A[0]$ তেই কাঙ্ক্ষিত মান পাওয়া যায় তবে সময়সীমা O(1)।",
      topicRef: "8.3"
    },
    {
      id: 8,
      questionBn: "হ্যাশিং সার্চের (Hashing Search) গড় সময়সীমা কত?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      correctAnswerIndex: 2,
      explanationBn: "হ্যাশিং সার্চের গড় সময়সীমা ধ্রুব $O(1)$।",
      topicRef: "8.1"
    },
    {
      id: 9,
      questionBn: "বাইনারি সার্চের সময় যদি target < A[mid] হয়, তবে পরবর্তী পদক্ষেপ কোনটি?",
      options: ["LOW = MID + 1", "HIGH = MID - 1", "LOW = HIGH", "MID = MID + 1"],
      correctAnswerIndex: 1,
      explanationBn: "টার্গেট মান ছোট হলে ডান ভাগ বাদ দিয়ে HIGH = MID - 1 সেট করতে হয়।",
      topicRef: "8.4"
    },
    {
      id: 10,
      questionBn: "বাইনারি সার্চের সময় যদি target > A[mid] হয়, তবে পরবর্তী পদক্ষেপ কোনটি?",
      options: ["LOW = MID + 1", "HIGH = MID - 1", "HIGH = LOW", "MID = MID - 1"],
      correctAnswerIndex: 0,
      explanationBn: "টার্গেট মান বড় হলে বাম ভাগ বাদ দিয়ে LOW = MID + 1 সেট করতে হয়।",
      topicRef: "8.4"
    }
  ]
};
