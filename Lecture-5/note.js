/* 
no.1
///##### Declare Variables:
When you declare a variable, you are essentially telling the JavaScript engine that you intend to use a certain identifier (variable name) to store data. Variable declarations are made using the var, let, or const keywords.

javascript
Copy code
var x;         // Declaration
let y = 10;    // Declaration and initialization
const z = 5;   // Declaration and initialization (constant)
In the above examples, x, y, and z are declared variables. They have been introduced in the code and are ready to store values.


##### ভেরিয়েবল ঘোষণা করুন:
আপনি যখন একটি ভেরিয়েবল ঘোষণা করেন, আপনি মূলত জাভাস্ক্রিপ্ট ইঞ্জিনকে বলছেন যে আপনি ডেটা সঞ্চয় করার জন্য একটি নির্দিষ্ট শনাক্তকারী (ভেরিয়েবল নাম) ব্যবহার করতে চান। পরিবর্তনশীল ঘোষণা var, let, বা const কীওয়ার্ড ব্যবহার করে করা হয়।

জাভাস্ক্রিপ্ট
কোড কপি করুন
var x; // ঘোষণা
যাক y = 10; // ঘোষণা এবং সূচনা
const z = 5; // ঘোষণা এবং সূচনা (ধ্রুবক)
উপরের উদাহরণে, x, y, এবং z-কে ভেরিয়েবল ঘোষণা করা হয়েছে। তারা কোডে চালু করা হয়েছে এবং মান সঞ্চয় করার জন্য প্রস্তুত।

###################### No-2.###########
Not Declare Variables (Implicit Global Variables):
If you assign a value to a variable without declaring it using var, let, or const, JavaScript treats it as an implicit global variable if it's not inside a function. This can lead to unintended consequences and is generally considered bad practice because it can lead to scope-related issues and make your code harder to maintain.

javascript
Copy code
function example() {
    implicitVar = 100;  // This becomes a global variable!
}
In this case, implicitVar becomes a global variable, accessible from anywhere in your code, even outside the example function.


#############NO.-3############ 

Strict Mode:
To prevent accidental creation of global variables and promote better coding practices, you can use "strict mode" in JavaScript.

javascript
Copy code
'use strict';

function example() {
    implicitVar = 100;  // Throws an error in strict mode
}
When you enable strict mode, assigning a value to an undeclared variable will result in a reference error, helping you catch potential issues early.

In summary, it's generally recommended to always declare your variables using var, let, or const to avoid potential bugs and improve code readability. Using strict mode can further enhance the robustness of your code by catching common mistakes. Implicit global variables should be avoided, as they can lead to difficult-to-debug issues.

কঠোর মোড:
গ্লোবাল ভেরিয়েবলের দুর্ঘটনাজনিত সৃষ্টি প্রতিরোধ করতে এবং আরও ভাল কোডিং অনুশীলনের প্রচার করতে, আপনি জাভাস্ক্রিপ্টে "কঠোর মোড" ব্যবহার করতে পারেন।

জাভাস্ক্রিপ্ট
কোড কপি করুন
'কঠোর ব্যবহার করুন';

ফাংশন উদাহরণ() {
    implicitVar = 100; // কঠোর মোডে একটি ত্রুটি নিক্ষেপ করে
}
আপনি যখন কঠোর মোড সক্ষম করেন, তখন একটি অঘোষিত ভেরিয়েবলকে একটি মান বরাদ্দ করার ফলে একটি রেফারেন্স ত্রুটি দেখা দেবে, যা আপনাকে সম্ভাব্য সমস্যাগুলি তাড়াতাড়ি ধরতে সাহায্য করবে৷

সংক্ষেপে, সম্ভাব্য বাগ এড়াতে এবং কোড পঠনযোগ্যতা উন্নত করতে সাধারণত var, let, বা const ব্যবহার করে আপনার ভেরিয়েবল ঘোষণা করার পরামর্শ দেওয়া হয়। কঠোর মোড ব্যবহার করে সাধারণ ভুল ধরার মাধ্যমে আপনার কোডের দৃঢ়তা আরও বৃদ্ধি করতে পারে। অন্তর্নিহিত গ্লোবাল ভেরিয়েবলগুলি এড়ানো উচিত, কারণ এগুলি ডিবাগ থেকে কঠিন সমস্যার দিকে নিয়ে যেতে পারে।


## Mutability vs Immutability
In programming, you have an immutable object if you can’t change the object’s state after you’ve created it. In contrast, a mutable object allows you to modify its internal state after creation. In short, whether you’re able to change an object’s state or contained data is what defines if that object is mutable or immutable.

Immutable objects are common in functional programming, while mutable objects are widely used in object-oriented programming. Because Python is a multiparadigm programming language, it provides mutable and immutable objects for you to choose from when solving a problem.

To understand how mutable and immutable objects work in Python, you first need to understand a few related concepts. To kick things off, you’ll take a look at variables and objects.

## NO. imperative vs declarative programming

Imperative and declarative programming are two contrasting programming paradigms that describe different ways of instructing a computer on how to perform tasks. Each paradigm has its own approach to solving problems and expressing solutions in code.

ইম্পেরেটিভ এবং ডিক্লারেটিভ প্রোগ্রামিং হল দুটি বিপরীত প্রোগ্রামিং প্যারাডাইম যা একটি কম্পিউটারকে কিভাবে কাজ সম্পাদন করতে হয় সে সম্পর্কে নির্দেশ দেওয়ার বিভিন্ন উপায় বর্ণনা করে। প্রতিটি দৃষ্টান্তের সমস্যা সমাধান এবং কোডে সমাধান প্রকাশ করার নিজস্ব পদ্ধতি রয়েছে।


Imperative Programming: -প্রয়োজনীয় প্রোগ্রামিং:
ইম্পেরেটিভ প্রোগ্রামিং কিভাবে ধাপে ধাপে একটি টাস্ক সম্পন্ন করতে হয় সে বিষয়ে কম্পিউটারকে সুস্পষ্ট নির্দেশনা দেওয়ার উপর ফোকাস করে। এটি কম্পিউটারকে ঠিক কোন ক্রিয়াকলাপ সম্পাদন করতে হবে এবং কোন ক্রমানুসারে তা বলে। এই দৃষ্টান্তটি একজন মানুষ যেভাবে একটি সমস্যা সমাধানের বিষয়ে চিন্তা করতে পারে তার সাথে আরও বেশি মিল রয়েছে। এটি প্রায়শই বিবৃতি, লুপ এবং শর্তাবলী ব্যবহার করে মৃত্যুদন্ডের প্রবাহ নিয়ন্ত্রণ করতে।


Example (in Python, an imperative language):

numbers = [1, 2, 3, 4, 5]
sum = 0
for num in numbers:
    sum += num
average = sum / len(numbers)
print("Average:", average)


Declarative Programming: -ঘোষণামূলক প্রোগ্রামিং:
অন্যদিকে, ঘোষণামূলক প্রোগ্রামিং কীভাবে করা যায় তার চেয়ে কী করা দরকার তা বর্ণনা করার উপর ফোকাস করে। স্পষ্ট পদক্ষেপগুলি নির্দিষ্ট করার পরিবর্তে, আপনি পছন্দসই ফলাফল বা ফলাফল সংজ্ঞায়িত করেন এবং প্রোগ্রামিং ভাষা বা কাঠামো কীভাবে সেই ফলাফল অর্জন করতে হয় তা নির্ধারণ করে। এটি প্রায়শই আরও সংক্ষিপ্ত এবং অভিব্যক্তিপূর্ণ কোডের দিকে নিয়ে যায়।

SELECT name, age FROM users WHERE country = 'USA';


*/