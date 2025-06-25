# bus-routes
<a href="https://mr-masudrana.github.io/bus-routes/" target="_blank">Website Link</a>


# 🚌 বাংলা বাস রুট অ্যাপ

বাংলাদেশের বাস রুট দেখার জন্য একটি মোবাইল-ফ্রেন্ডলি ও ওয়েব-ভিত্তিক অ্যাপ যেখানে আপনি স্টেশন নাম অনুসারে বাস রুট খুঁজে পেতে পারেন।

---

## 🔥 ফিচারসমূহ

- 🔎 স্টেশন অনুযায়ী রুট সার্চ
- ✍️ ইনপুটে টাইপ করলেই অটো-সাজেশন
- ❌ ইনপুট রিসেট বাটন (টাইপ করলে ভিজিবল হয়)
- 📋 সব রুট একটি কার্ডভিত্তিক লিস্টে প্রদর্শন
- 📱 মোবাইল রেস্পনসিভ ডিজাইন (Bootstrap)

---

## 📁 প্রোজেক্ট ফোল্ডার স্ট্রাকচার

📦 project-root/ ├── index.html ├── stoppage.html ├── main.js ├── style.css ├── routes.json └── README.md

---

## ⚙️ ব্যবহৃত টেকনোলজি

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (Vanilla JS)

---

## 🚀 কিভাবে চালাবেন

1. এই রিপোজিটরি ক্লোন করুন:
   ```bash
   git clone https://github.com/mr-masudrana/bus-route-app.git

2. ফোল্ডারে ঢুকুন:

cd bus-route-app


3. শুধুমাত্র index.html ফাইলটি ব্রাউজারে খুললেই অ্যাপ চালু হবে:

open index.html




---

🗂️ ডেটা ফরম্যাট (routes.json)

[
  {
    "id": 1,
    "name": "গাজীপুর - গুলিস্তান",
    "from": "গাজীপুর",
    "to": "গুলিস্তান",
    "image": "images/bus1.jpg",
    "stoppages": ["গাজীপুর", "চৌরাস্তা", "টঙ্গী", "বনানী", "গুলিস্তান"]
  },
  ...
]


---

📷 স্ক্রিনশট

<img src="screenshots/search.png" width="300">
<img src="screenshots/list.png" width="300">
---

🙌 কৃতজ্ঞতা

এই অ্যাপটি তৈরি করতে ওপেন সোর্স লাইব্রেরি ও ফ্রেমওয়ার্কের সহযোগিতা নেওয়া হয়েছে, যেমন Bootstrap।


---

📝 লাইসেন্স

এই প্রোজেক্টটি MIT License এর অধীনে উন্মুক্ত।

---
