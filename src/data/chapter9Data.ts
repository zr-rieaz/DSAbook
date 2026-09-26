import { Chapter } from '../types/syllabus';

export const CHAPTER_9_DATA: Chapter = {
  id: 9,
  code: "28542-CH09",
  titleBn: "সর্টিং অপারেশন (Sorting Operation)",
  titleEn: "Sorting Operation",
  status: "complete",
  learningObjectives: [
    "ডাটা স্ট্রাকচারে সর্টিং (Sorting) অপারেশনের মূল ধারণা, প্রয়োজনীয়তা এবং শ্রেণিবিন্যাস আয়ত্ত করা।",
    "বাবল সর্ট (Bubble Sort), কুইক সর্ট (Quick Sort) এবং মার্জ সর্ট (Merge Sort) অ্যালগরিদমের মূলনীতি জানা।",
    "প্রদেয় ডাটা সেটে বাবল সর্ট প্রয়োগ করে প্রতি পাশের (Pass) পর ডাটার অবস্থা ফ্লোচার্ট ও চিত্রে প্রদর্শন করা।",
    "কুইক সর্টে পাইভট (Pivot) উপাদান নির্বাচন এবং পার্টিশনিং (Partitioning) প্রক্রিয়া ব্যাখ্যা করা।",
    "মার্জ সর্টে 'ডিভাইড অ্যান্ড কনকার' (Divide and Conquer) কৌশলের মাধ্যমে সাব-অ্যারে একত্রিত করার ধাপ অনুধাবন করা।",
    "বাবল সর্ট, কুইক সর্ট ও মার্জ সর্ট অ্যালগরিদমের সময় জটিলতা (Best, Average, Worst Case Time Complexity) এবং স্পেস জটিলতার তুলনামূলক ছক প্রস্তুত করা।",
    "C এবং Python ভাষায় বাবল সর্ট, কুইক সর্ট ও মার্জ সর্টিং অ্যালগরিদম কোড প্রণয়ন করা।"
  ],
  subtopics: [
    {
      id: "9.1",
      titleBn: "সর্টিং কৌশলের তালিকা ও শ্রেণিবিন্যাস",
      titleEn: "List the sorting technics",
      concept: `ডাটা স্ট্রাকচারের সংরক্ষিত বিশৃঙ্খল বা এলোমেলো উপাদানগুলোকে কোনো সুনির্দিষ্ট ক্রমানুসারে (ছোট থেকে বড় বা **Ascending Order: $1, 2, 3...$** অথবা বড় থেকে ছোট **Descending Order: $9, 8, 7...$**) সাজানোর প্রক্রিয়াকে **সর্টিং (Sorting Operation)** বলা হয়।

ডাটা সংগঠনের ধরন ও মেমরি ব্যবহারের ওপর ভিত্তি করে সর্টিং কৌশলকে প্রধানত দুটি শ্রেণিতে ভাগ করা হয়:
১. **ইন্টারনাল সর্টিং (Internal Sorting):** যখন পুরো ডাটা সেট কম্পিউটারের প্রধান মেমরিতে (RAM) স্থান পায় এবং সেখানেই সর্টিং সম্পন্ন হয় (যেমন: Bubble Sort, Insertion Sort, Selection Sort, Quick Sort)।
২. **এক্সটারনাল সর্টিং (External Sorting):** যখন ডাটা সেট মেমরির চেয়েও অনেক বড় হয় এবং সেকেন্ডারি স্টোরেজ (Hard Disk/SSD) ব্যবহার করতে হয় (যেমন: External Merge Sort)।`,
      realLifeAnalogy: `১. পরীক্ষার খাতাগুলোকে রোল নম্বরের ক্রমানুসারে সাজানো = Internal Sorting।
২. একটি বিশাল লাইব্রেরির হাজার হাজার বইকে বিষয় ও বর্ণানুক্রমে সাজানো = External Sorting।`,
      technicalDetails: `সর্টিং অ্যালগরিদমের স্থায়িত্ব ও মেমরি ব্যবহারের ওপর ভিত্তি করে শ্রেণিবিন্যাস:
- **Stable Sorting:** সর্ট করার পর সমান মানসম্পন্ন উপাদানের আপেক্ষিক ইনডেক্স পরিবর্তিত হয় না (যেমন: Merge Sort, Bubble Sort)।
- **Unstable Sorting:** সমান মানসম্পন্ন উপাদানের মূল অবস্থান বদলে যেতে পারে (যেমন: Quick Sort, Heap Sort)।
- **In-Place Sorting:** অতিরিক্ত কোনো বাড়তি মেমরি অ্যারে লাগে না, স্পেস কমপ্লেক্সিটি $O(1)$ (যেমন: Bubble Sort, Quick Sort)।
- **Out-of-Place Sorting:** সর্ট করার জন্য অতিরিক্ত মেমরি অ্যারে প্রয়োজন হয় (যেমন: Merge Sort - $O(n)$ extra space)।`,
      tableData: {
        headers: ["সর্টিং কৌশল", "মেমরি স্থান (Space)", "স্থায়িত্ব (Stability)", "সেরা প্রয়োগ ক্ষেত্র"],
        rows: [
          ["Bubble Sort", "In-Place: $O(1)$", "Stable", "ক্ষুদ্র ও প্রায় সাজানো ডাটা সেটে।"],
          ["Insertion Sort", "In-Place: $O(1)$", "Stable", "ছোট ডাটা সেটে দ্রুততম।"],
          ["Selection Sort", "In-Place: $O(1)$", "Unstable", "কম সোয়াপ (Swap) প্রয়োজন হলে।"],
          ["Quick Sort", "In-Place: $O(\log n)$", "Unstable", "বৃহৎ ডাটা সেটে সর্বাধিক ব্যবহৃত ও দ্রুত।"],
          ["Merge Sort", "Out-of-Place: $O(n)$", "Stable", "গ্যারান্টিযুক্ত $O(n \log n)$ ও লিংকড লিস্টে।"]
        ]
      },
      keyPoints: [
        "সর্টিং ডাটা অনুসন্ধানের (Binary Search) গতি বহুগুণ বাড়িয়ে দেয়।",
        "ইন-প্লেস (In-Place) সর্টিং অতিরিক্ত মেমরি অপচয় কমায়।",
        "কুইক সর্ট বাস্তবিক ব্যবহারে সবচেয়ে দ্রুততম অ্যালগরিদম।"
      ]
    },
    {
      id: "9.2",
      titleBn: "বাবল সর্ট, কুইক সর্ট ও মার্জ সর্ট কৌশলের বিবরণ",
      titleEn: "Describe the technics of bubble sort, quick sort & merge sort",
      concept: `স সিলেবাসভুক্ত তিনটি প্রধান সর্টিং অ্যালগরিদমের বিশদ কার্যপ্রকৃতি:

১. **বাবল সর্ট (Bubble Sort):**
   এটি একটি সরল সর্টিং কৌশল। এতে পাশাপাশি দুটি উপাদান ($A[j]$ এবং $A[j+1]$) তুলনা করা হয়। যদি বামপাশের মান ডানপাশের মানের চেয়ে বড় হয়, তবে তাদের অবস্থান অদল-বদল (Swap) করা হয়। প্রতি পাসে (Pass) সবচেয়ে বড় মানটি বুদবুদের (Bubble) মতো ভেসে তালিকার শেষ প্রান্তে চলে যায়।

২. **কুইক সর্ট (Quick Sort):**
   এটি 'ডিভাইড অ্যান্ড কনকার' (Divide and Conquer) কৌশলে কাজ করে। ডাটা সেট থেকে যেকোনো একটি উপাদানকে **পাইভট (Pivot)** হিসেবে নির্বাচন করা হয়। পাইভটের চেয়ে ছোট মানগুলোকে বামপাশে এবং বড় মানগুলোকে ডানপাশে রেখে ডাটাকে দুটি ভাগে ভাগ (Partition) করা হয়। এরপর উভয় ভাগে রিকার্সিভলি কুইক সর্ট প্রয়োগ করা হয়।

৩. **মার্জ সর্ট (Merge Sort):**
   এটিও একটি ডিভাইড অ্যান্ড কনকার অ্যালগরিদম। এটি প্রদত্ত অ্যারেকে মাঝখান থেকে দুটি সমান ভাগে ভাগ করতে থাকে যতক্ষণ না প্রতিটি ভাগে মাত্র ১টি উপাদান থাকে। এরপর ছোট ছোট সর্টেড সাব-অ্যারেগুলোকে তুলনা করে সঠিকভাবে একত্রিত (Merge) করে পুরো অ্যারে সর্ট করা হয়।`,
      realLifeAnalogy: `১. পানিতে বুদ্বুদ যেভাবে ধীরে ধীরে উপরে ওঠে, বাবল সর্টে বড় সংখ্যাগুলো একইভাবে শেষে পৌঁছায়।
২. কার্ড খেলায় একটা কার্ডকে কেন্দ্রবিন্দু ধরে ছোট কার্ড বামে ও বড় কার্ড ডানে রাখা = Quick Sort।
৩. একঝাঁক কাগজপত্র দুই ভাগে ভাগ করে দুইজনকে গুছাতে দিয়ে শেষে একত্রে সাজানো = Merge Sort।`,
      technicalDetails: `সর্টিং অ্যালগরিদমসমূহের কৌশলগত তুলনা:
- Bubble Sort $\rightarrow$ Repeated Adjacent Comparison & Swapping.
- Quick Sort $\rightarrow$ Partitioning around a Pivot element.
- Merge Sort $\rightarrow$ Divide array into halves $\rightarrow$ Recursive Sort $\rightarrow$ Merge halves.`,
      diagramType: "ascii",
      diagramContent: `=== Bubble Sort Pass 1 Example [5, 2, 8, 1] ===
Step 1: (5, 2) -> Swap -> [2, 5, 8, 1]
Step 2: (5, 8) -> No Swap -> [2, 5, 8, 1]
Step 3: (8, 1) -> Swap -> [2, 5, 1, 8]  <-- 8 In Final Position!

=== Quick Sort Partition Example [4, 2, 7, 3] (Pivot=3) ===
Partition around 3:
Elements < 3: [2]
Pivot: [3]
Elements > 3: [4, 7]
Result: [2] + [3] + [4, 7] = [2, 3, 4, 7]`,
      keyPoints: [
        "বাবল সর্টে $n$ উপাদানের জন্য সর্বোচ্চ $n-1$ টি পাস লাগে।",
        "কুইক সর্টে সঠিক পাইভট নির্বাচন অ্যালগরিদমের কার্যক্ষমতা নির্ধারণ করে।",
        "মার্জ সর্টে সবসময় সুনির্দিষ্ট সময় জটিলতা $O(n \log n)$ বজায় থাকে।"
      ]
    },
    {
      id: "9.3",
      titleBn: "বাবল সর্ট, কুইক সর্ট ও মার্জ সর্ট অ্যালগরিদম",
      titleEn: "Write the algorithms for bubble sort, quick sort & merge sort",
      concept: `সর্টিং অ্যালগরিদমসমূহের সুনির্দিষ্ট অ্যালগরিদম ধাপসমূহ:

### অ্যালগরিদম ১: বাবল সর্ট (Bubble Sort Algorithm)
**ইনপুট:** $n$ আকারের অ্যারে $A[0..n-1]$
১. **Start**
২. $i = 0$ থেকে $n-2$ পর্যন্ত লুপ চালাও (Pass Loop):
   ৩. $j = 0$ থেকে $n-i-2$ পর্যন্ত লুপ চালাও (Comparison Loop):
      ৪. যদি $A[j] > A[j+1]$ হয়, তবে:
         - $A[j]$ এবং $A[j+1]$ এর মান অদল-বদল (Swap) করো।
৫. **End**

---

### অ্যালগরিদম ২: কুইক সর্ট পার্টিশন (Quick Sort Partition Algorithm)
**Partition(A, low, high):**
১. $pivot = A[high]$
২. $i = low - 1$
৩. $j = low$ থেকে $high - 1$ পর্যন্ত লুপ চালাও:
   ৪. যদি $A[j] < pivot$ হয়, তবে:
      - $i = i + 1$
      - $A[i]$ এবং $A[j]$ Swap করো।
৫. $A[i + 1]$ এবং $A[high]$ Swap করো।
৬. Return $i + 1$ (পাইভটের নতুন অবস্থান)।`,
      realLifeAnalogy: `কম্পিউটার প্রোগ্রামে ডাটা প্রসেসিংয়ের পূর্বে বাবল সর্ট বা কুইক সর্ট প্রয়োগ করে মেমরি পয়েন্টারগুলো দ্রুত সাজানো হয়।`,
      syntaxOrFormulas: [
        {
          label: "Bubble Sort Algorithm (Pseudocode)",
          lang: "cpp",
          codeOrFormula: `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}`
        },
        {
          label: "Quick Sort Algorithm (Python Pseudocode)",
          lang: "python",
          codeOrFormula: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)`
        }
      ],
      keyPoints: [
        "বাবল সর্টে দুটি নেস্টেড লুপ ব্যবহৃত হয়।",
        "কুইক সর্টে রিকার্সিভ ফাংশন কলের মাধ্যমে সাব-অ্যারে সর্ট করা হয়।",
        "মার্জ সর্টে ডিভাইড ধাপ $O(\log n)$ এবং মার্জ ধাপ $O(n)$ সময় নেয়।"
      ]
    },
    {
      id: "9.4",
      titleBn: "সর্টিং অ্যালগরিদমসমূহের জটিলতার তুলনামূলক বিশ্লেষণ",
      titleEn: "Compare among complexity of bubble sort, quick sort & merge sort algorithms",
      concept: `পরীক্ষার প্রশ্ন এবং পেশাদার সফটওয়্যার ইঞ্জিনিয়ারিংয়ের জন্য বাবল সর্ট, কুইক সর্ট এবং মার্জ সর্টের সময় জটিলতা (Time Complexity) ও স্পেস জটিলতার (Space Complexity) তুলনামূলক বিশ্লেষণ অত্যন্ত গুরুত্বপূর্ণ।

### সময় জটিলতার কারণ বিশ্লেষণ:
১. **Bubble Sort:** দুটি নেস্টেড লুপের জন্য $n \times n = O(n^2)$ সময় লাগে। কিন্তু ডাটা আগে থেকেই সর্ট করা থাকলে Best Case টাইম $O(n)$ হয়।
২. **Quick Sort:** গড়ে $n$ আকারের অ্যারেকে $\log_2 n$ বার বিভক্ত করা হয়, তাই Average Time $O(n \log n)$। তবে খারাপ পাইভট নির্বাচনে Worst Case $O(n^2)$ হতে পারে।
৩. **Merge Sort:** সবসময় সুনির্দিষ্টভাবে অ্যারে অর্ধেক করা হয়, ফলে Best, Average ও Worst সব ক্ষেত্রেই সময় জটিলতা $O(n \log n)$।`,
      tableData: {
        headers: ["বৈশিষ্ট্য / তুলনার বিষয়", "Bubble Sort", "Quick Sort", "Merge Sort"],
        rows: [
          ["Best Case Time", "$O(n)$", "$O(n \log n)$", "$O(n \log n)$"],
          ["Average Case Time", "$O(n^2)$", "$O(n \log n)$", "$O(n \log n)$"],
          ["Worst Case Time", "$O(n^2)$", "$O(n^2)$ (খারাপ পাইভটে)", "$O(n \log n)$"],
          ["Space Complexity", "$O(1)$ (In-Place)", "$O(\log n)$ (Stack)", "$O(n)$ (অতিরিক্ত অ্যারে)"],
          ["সর্টিং অ্যালগরিদম টাইপ", "Comparison-based", "Divide & Conquer", "Divide & Conquer"],
          ["স্থায়িত্ব (Stability)", "Stable", "Unstable", "Stable"],
          ["সোয়াপ সংখ্যা (Swaps)", "সর্বোচ্চ $O(n^2)$", "কম $O(n \log n)$", "মেমরি কপি $O(n \log n)$"],
          ["বাস্তব প্রয়োগ", "ছোট ডাটা শিক্ষণীয় কাজে", "ইন-মেমরি ফাস্ট সর্টিং", "বড় ডাটা ও লিংকড লিস্টে"]
        ]
      },
      keyPoints: [
        "স্মল ইনপুট সেটে বাবল সর্ট সহজ, কিন্তু লার্জ ইনপুটে মার্জ সর্ট ও কুইক সর্ট শ্রেষ্ঠ।",
        "অতিরিক্ত মেমরির বাধ্যবাধকতা না থাকলে কুইক সর্ট ইন-মেমরি সর্টিংয়ের জন্য সর্বাধিক পছন্দের।",
        "লিংকড লিস্টের ক্ষেত্রে মার্জ সর্ট সবচেয়ে উপযোগী কারণ এতে র‍্যান্ডম এক্সেস লাগে না।"
      ]
    }
  ],
  practicalPrograms: [
    {
      title: "প্রাকটিক্যাল পরীক্ষণ ১০: বাবল সর্ট (Bubble Sort) ব্যবহার করে ডাটা সাজানোর প্রোগ্রাম",
      problemStatementBn: "C এবং Python ভাষায় একটি ১D অ্যারেতে ১০টি অবিন্যস্ত সংখ্যা ইনপুট নিয়ে বাবল সর্ট (Bubble Sort) অ্যালগরিদমের মাধ্যমে ঊর্ধ্বক্রমে (Ascending) ও অধঃক্রমে (Descending) সাজিয়ে আউটপুট দেখাও।",
      algorithmStepsBn: [
        "অ্যারে সাইজ N এবং N-টি সংখ্যা ইনপুট নাও।",
        "বাহ্যিক লুপ i = 0 থেকে N-2 পর্যন্ত চালাও।",
        "অভ্যন্তরীণ লুপ j = 0 থেকে N-i-2 পর্যন্ত চালাও।",
        "যদি arr[j] > arr[j+1] হয়, তবে সংখ্যা দুটি অদল-বদল (Swap) করো।",
        "সাজানো অ্যারে স্ক্রিনে প্রদর্শন করো।"
      ],
      cCode: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    int i, j, temp;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) { // Ascending condition
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("Unsorted Array: ");
    for(int i=0; i<n; i++) printf("%d ", arr[i]);
    
    bubbleSort(arr, n);
    
    printf("\\nSorted Array (Ascending): ");
    for(int i=0; i<n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,
      pythonCode: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# Test Execution
data = [64, 34, 25, 12, 22, 11, 90]
print("Unsorted Data:", data)
sorted_data = bubble_sort(data)
print("Sorted Data (Bubble Sort):", sorted_data)`,
      sampleOutput: `Unsorted Array: 64 34 25 12 22 11 90 
Sorted Array (Ascending): 11 12 22 25 34 64 90`,
      explanationBn: "প্রোগ্রামে পাশাপাশি উপাদান তুলনা করে বড় উপাদানগুলোকে ধাপে ধাপে শেষের দিকে পাঠিয়ে সম্পূর্ণ অ্যারে সাজানো হয়েছে।"
    },
    {
      title: "প্রাকটিক্যাল পরীক্ষণ ১১: কুইক সর্ট (Quick Sort) ও মার্জ সর্ট (Merge Sort) প্রোগ্রাম",
      problemStatementBn: "C এবং Python ভাষায় 'ডিভাইড অ্যান্ড কনকার' কৌশলে কুইক সর্ট এবং মার্জ সর্ট প্রয়োগ করে একটি এলোমেলো অ্যারে দ্রুত সর্ট করার প্রোগ্রাম বাস্তবায়ন করো।",
      algorithmStepsBn: [
        "অ্যারে ইনপুট নাও এবং কুইক সর্ট/মার্জ সর্টিং ফাংশন কল করো।",
        "কুইক সর্টের ক্ষেত্রে পাইভট ধরে পার্টিশনিং সম্পন্ন করো।",
        "মার্জ সর্টের ক্ষেত্রে অ্যারেকে অর্ধেক ভাগ করে সাব-অ্যারেগুলোকে মার্জ করো।",
        "চূড়ান্ত সর্টেড ফলাফল প্রিন্ট করো।"
      ],
      cCode: `#include <stdio.h>

void swap(int* a, int* b) {
    int t = *a; *a = *b; *b = t;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int arr[] = {10, 80, 30, 90, 40, 50, 70};
    int n = sizeof(arr) / sizeof(arr[0]);
    quickSort(arr, 0, n - 1);
    printf("Quick Sorted Array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,
      pythonCode: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

numbers = [10, 80, 30, 90, 40, 50, 70]
print("Quick Sorted (Python):", quick_sort(numbers))`,
      sampleOutput: `Quick Sorted Array: 10 30 40 50 70 80 90`,
      explanationBn: "কুইক সর্টে পাইভট উপাদানের উপর ভিত্তি করে লিনিয়ার টাইম পার্টিশনিং সম্পন্ন করে $O(n \\log n)$ সময়ে ডাটা সাজানো হয়েছে।"
    }
  ],
  summaryPoints: [
    "সর্টিং হলো ডাটা উপাদানগুলোকে ঊর্ধ্বক্রম (Ascending) বা অধঃক্রমে (Descending) সাজানোর প্রক্রিয়া।",
    "সর্টিং কৌশল প্রধানত দুই প্রকার: Internal Sorting (RAM-এ সর্টিং) ও External Sorting (সেকেন্ডারি মেমরিতে)।",
    "Bubble Sort একটি সরল ইন-প্লেস অ্যালগরিদম যার গড় ও সর্বকনিষ্ঠ সময় জটিলতা $O(n^2)$।",
    "Quick Sort অ্যালগরিদম Divide & Conquer কৌশলে পাইভট (Pivot) উপাদান ব্যবহার করে কাজ করে; গড় সময় জটিলতা $O(n \\log n)$।",
    "Merge Sort অ্যালগরিদম রিকার্সিভ উপায়ে সাব-অ্যারেগুলোকে ভাগ ও মার্জ করে কাজ করে; সব ক্ষেত্রে সময় জটিলতা $O(n \\log n)$।",
    "In-place সর্টিং অ্যালগরিদম বাড়তি মেমরি নেয় না, পক্ষান্তরে Out-of-place (যেমন Merge Sort) অতিরিক্ত $O(n)$ মেমরি গ্রহণ করে।",
    "Stable Sorting অ্যালগরিদম সমমানের উপাদানের মূল আপেক্ষিক অবস্থান রক্ষা করে।"
  ],
  boardQuestions: [
    {
      id: "Q901",
      type: "ati_songkhipto",
      questionBn: "সর্টিং (Sorting) কাকে বলে?",
      questionEn: "What is sorting?",
      answerBn: "ডাটা স্ট্রাকচারে এলোমেলো ডাটা উপাদানগুলোকে ছোট থেকে বড় (Ascending) অথবা বড় থেকে ছোট (Descending) সুনির্দিষ্ট ক্রমানুসারে সাজানোর প্রক্রিয়াকে সর্টিং (Sorting) বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2022", "BTEB 2019"],
      isImportant: true,
      subtopicRef: "9.1"
    },
    {
      id: "Q902",
      type: "ati_songkhipto",
      questionBn: "ইন্টারনাল ও এক্সটারনাল সর্টিংয়ের প্রধান পার্থক্য কী?",
      questionEn: "Difference between internal and external sorting?",
      answerBn: "যে সর্টিং প্রক্রিয়ায় সমস্ত ডাটা কম্পিউটারের প্রধান মেমরিতে (RAM) ধরে এবং সেখানেই সর্টিং হয় তাকে ইন্টারনাল সর্টিং বলে। আর মেমরিতে ডাটা না ধরলে সেকেন্ডারি মেমরি ব্যবহার করে সর্ট করাকে এক্সটারনাল সর্টিং বলে।",
      marks: 1,
      yearsAppeared: ["BTEB 2022", "BTEB 2020"],
      isImportant: true,
      subtopicRef: "9.1"
    },
    {
      id: "Q903",
      type: "ati_songkhipto",
      questionBn: "কুইক সর্টের গড় সময় জটিলতা (Average Time Complexity) কত?",
      questionEn: "What is average time complexity of quick sort?",
      answerBn: "কুইক সর্টের গড় সময় জটিলতা হলো $O(n \\log_2 n)$।",
      marks: 1,
      yearsAppeared: ["BTEB 2023", "BTEB 2021"],
      isImportant: true,
      subtopicRef: "9.4"
    },
    {
      id: "Q904",
      type: "songkhipto",
      questionBn: "বাবল সর্টিং অ্যালগরিদমের কার্যপ্রণালী সংক্ষেপে ব্যাখ্যা করো।",
      questionEn: "Explain the working principle of bubble sort algorithm.",
      answerBn: "বাবল সর্ট অ্যালগরিদম অ্যারের প্রথম উপাদান থেকে শুরু করে পাশাপাশি দুটি উপাদান তুলনা করে। যদি প্রথম উপাদান দ্বিতীয়টির চেয়ে বড় হয়, তবে তাদের স্থান অদল-বদল (Swap) করা হয়। এভাবে প্রথম পাসে সবচেয়ে বড় উপাদানটি অ্যারের শেষ প্রান্তে পৌঁছে যায়। এরপর অবশিষ্ট উপাদানের ওপর একই প্রক্রিয়া পুনরাবৃত্তি করে পুরো অ্যারে সাজানো হয়।",
      marks: 3,
      yearsAppeared: ["BTEB 2023", "BTEB 2020", "BTEB 2018"],
      isImportant: true,
      subtopicRef: "9.2"
    },
    {
      id: "Q905",
      type: "songkhipto",
      questionBn: "কুইক সর্টে পাইভট (Pivot) উপাদানের ভূমিকা কী?",
      questionEn: "Role of Pivot element in quick sort?",
      answerBn: "কুইক সর্টে পাইভট হলো এমন একটি রেফারেন্স মান যার ওপর ভিত্তি করে সম্পূর্ণ অ্যারেকে দুটি সাব-অ্যারেতে ভাগ করা হয়। পাইভটের ছোট উপাদানগুলো বামপাশে এবং বড় উপাদানগুলো ডানপাশে বসানো হয়। সঠিক পাইভট নির্বাচন অ্যালগরিদমের সময় জটিলতা $O(n \\log n)$ বজায় রাখতে গুরুত্বপূর্ণ ভূমিকা রাখে।",
      marks: 3,
      yearsAppeared: ["BTEB 2022", "BTEB 2019"],
      isImportant: true,
      subtopicRef: "9.2"
    },
    {
      id: "Q906",
      type: "rochonamulok",
      questionBn: "বাবল সর্ট, কুইক সর্ট এবং মার্জ সর্ট অ্যালগরিদমের মধ্যে বিস্তৃত তুলনামূলক ছক প্রস্তুত করো এবং C ভাষায় বাবল সর্টিং প্রোগ্রাম লেখো।",
      questionEn: "Compare bubble, quick and merge sort algorithms and write a C program for bubble sort.",
      answerBn: "তুলনামূলক ছকে সময় জটিলতা (Best, Average, Worst), স্পেস জটিলতা, স্থায়িত্ব এবং ব্যবহারের দিক তুলে ধরা হয়েছে। C ভাষায় বাবল সর্টের সম্পূর্ণ কার্যকরী কোড উপরিউক্ত ৯.৩ ও ব্যবহারিক অংশ ১০-এ সংযুক্ত করা হয়েছে।",
      marks: 5,
      yearsAppeared: ["BTEB 2023", "BTEB 2021", "BTEB 2018"],
      isImportant: true,
      subtopicRef: "9.4"
    }
  ],
  quizQuestions: [
    {
      id: 1,
      questionBn: "কোন সর্টিং অ্যালগরিদমের সর্বাবস্থায় (Best, Average, Worst) সময় জটিলতা O(n log n)?",
      options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Selection Sort"],
      correctAnswerIndex: 2,
      explanationBn: "Merge Sort অ্যালগরিদমে ডাটা যে অবস্থাতেই থাকুক না কেন, এটি সবসময় সুনির্দিষ্ট $O(n \\log n)$ সময়ে সর্ট সম্পন্ন করে।",
      topicRef: "9.4"
    },
    {
      id: 2,
      questionBn: "কুইক সর্ট (Quick Sort) কোন অ্যালগরিদম ডিজাইনিং স্ট্র্যাটেজি অনুসরণ করে?",
      options: ["Greedy Approach", "Dynamic Programming", "Divide and Conquer", "Backtracking"],
      correctAnswerIndex: 2,
      explanationBn: "Quick Sort অ্যালগরিদম অ্যারেকে পাইভটের মাধ্যমে ছোট ছোট অংশে বিভক্ত করে রিকার্সিভলি সর্ট করার 'Divide and Conquer' নীতি অনুসরণ করে।",
      topicRef: "9.2"
    },
    {
      id: 3,
      questionBn: "ইন-প্লেস (In-Place) সর্টিং অ্যালগরিদমের ক্ষেত্রে অতিরিক্ত মেমরি জটিলতা (Space Complexity) কত?",
      options: ["O(n)", "O(n^2)", "O(1)", "O(log n)"],
      correctAnswerIndex: 2,
      explanationBn: "In-Place সর্টিংয়ে কোনো অতিরিক্ত মেমরি অ্যারের প্রয়োজন হয় না, তাই এর স্পেস কমপ্লেক্সিটি ধ্রুবক $O(1)$।",
      topicRef: "9.1"
    },
    {
      id: 4,
      questionBn: "বাবল সর্টে n-সংখ্যক উপাদানের জন্য সর্বোচ্চ কতটি পাসের (Pass) প্রয়োজন হয়?",
      options: ["n", "n - 1", "n / 2", "log n"],
      correctAnswerIndex: 1,
      explanationBn: "n-টি উপাদান বিশিষ্ট অ্যারে বাবল সর্ট করতে সর্বোচ্চ $n - 1$ টি পাস লাগে।",
      topicRef: "9.2"
    },
    {
      id: 5,
      questionBn: "নিচের কোনটি একটি স্টেবল (Stable) সর্টিং অ্যালগরিদম নয়?",
      options: ["Merge Sort", "Bubble Sort", "Insertion Sort", "Quick Sort"],
      correctAnswerIndex: 3,
      explanationBn: "Quick Sort একটি Unstable সর্টিং অ্যালগরিদম কারণ এতে সমমানের উপাদানের আপেক্ষিক ইনডেক্স সংরক্ষিত নাও থাকতে পারে।",
      topicRef: "9.1"
    },
    {
      id: 6,
      questionBn: "কুইক সর্টের Worst Case টাইম কমপ্লেক্সিটি O(n^2) কখন ঘটে?",
      options: ["ডাটা সুষমভাবে বিভক্ত হলে", "পাইভট উপাদান সবসময় ক্ষুদ্রতম বা বৃহত্তম হলে", "ডাটা এলোমেলো থাকলে", "সব উপাদান ভিন্ন হলে"],
      correctAnswerIndex: 1,
      explanationBn: "যদি নির্বাচিত পাইভট সবসময় অ্যারের ক্ষুদ্রতম বা বৃহত্তম মান হয় (যেমন ইতোমধ্যে সর্ট করা অ্যারেতে), তবে কুইক সর্টের সময় জটিলতা $O(n^2)$ হয়।",
      topicRef: "9.4"
    },
    {
      id: 7,
      questionBn: "নিচের কোন সর্টিং অ্যালগরিদমটি লিংকড লিস্টের (Linked List) জন্য সবচেয়ে বেশি উপযোগী?",
      options: ["Quick Sort", "Merge Sort", "Heap Sort", "Bubble Sort"],
      correctAnswerIndex: 1,
      explanationBn: "Merge Sort এ র‍্যান্ডম এক্সেস লাগে না এবং সিকোয়েনশিয়াল পয়েন্টার পরিবর্তনের মাধ্যমে সহজেই মার্জ করা যায়, তাই এটি লিংকড লিস্টের জন্য সেরা।",
      topicRef: "9.4"
    },
    {
      id: 8,
      questionBn: "বাবল সর্টে পাশাপাশি দুটি উপাদান অদল-বদল করার কৌশলকে কী বলে?",
      options: ["Splitting", "Swapping", "Merging", "Partitioning"],
      correctAnswerIndex: 1,
      explanationBn: "পাশাপাশি দুটি মানের অবস্থান অদল-বদল করাকে Swapping বলে।",
      topicRef: "9.2"
    },
    {
      id: 9,
      questionBn: "RAM-এর ধারণক্ষমতার চেয়ে বেশি ডাটা সর্ট করার প্রক্রিয়াকে কী বলা হয়?",
      options: ["Internal Sorting", "External Sorting", "In-memory Sorting", "Parallel Sorting"],
      correctAnswerIndex: 1,
      explanationBn: "বৃহৎ ডাটা সেট সেকেন্ডারি মেমরির সাহায্য নিয়ে সর্ট করাকে External Sorting বলে।",
      topicRef: "9.1"
    },
    {
      id: 10,
      questionBn: "মার্জ সর্টের মার্জিং (Merging) ধাপের সময় জটিলতা কত?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
      correctAnswerIndex: 2,
      explanationBn: "দুটি সর্টেড সাব-অ্যারে মার্জ করে একটি সর্টেড অ্যারে তৈরিতে $O(n)$ সময় লাগে।",
      topicRef: "9.3"
    }
  ]
};
