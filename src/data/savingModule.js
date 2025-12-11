// src/data/modules/savingModule.js

export const SAVING_MODULE = {
  title: {
    en: 'Saving Money Basics',
    hi: 'पैसे बचाने की मूल बातें',
    mr: 'पैसे वाचवण्याची मूलभूत तत्त्वे',
    ta: 'பணம் சேமிப்பதின் அடிப்படை',
    bn: 'টাকা সঞ্চয়ের मूल বিষয়',
    kn: 'ಹಣ ಉಳಿಸುವ ಮೂಲಭುತಿಗಳು',
  },
  description: {
    en: 'Learn effective strategies to save money',
    hi: 'पैसे बचाने की प्रभावी रणनीतियाँ सीखें',
    mr: 'पैसे वाचवण्याच्या प्रभावी योजना शिका',
    ta: 'பணம் சேமிக்க பயனுள்ள முறைகளை கற்றுக்கொள்ளுங்கள்',
    bn: 'টাকা সঞ্চয়ের কার্যকর কৌশল শিখুন',
    kn: 'ಹಣ ಉಳಿಸಲು ಪರಿಣಾಮಕಾರಿ ಕ್ರಮಗಳನ್ನು ಕಲಿಯಿರಿ',
  },
  category: 'saving',
  difficulty_level: 'beginner',
  order_index: 3,
  video_url: 'https://www.youtube.com/watch?v=ZLpG4r2fX84', // replace with your own link
  thumbnail: 'https://img.youtube.com/vi/ZLpG4r2fX84/maxresdefault.jpg',
  duration_minutes: 8,
  tags: ['saving', 'emergency-fund', 'habits'],
  prerequisites: [],
  estimated_completion_time: '15 minutes',

  content: {
    en: {
      sections: [
        {
          title: 'Why Saving is Important',
          content: `Saving helps you:
• Prepare for emergencies (medical issues, job loss, repairs)
• Reach goals like education, marriage, or buying a vehicle
• Reduce stress about money
• Build wealth over time through interest

Emergency fund goal: Save at least 3–6 months of basic living expenses in a safe account.`,
        },
        {
          title: 'Practical Saving Strategies',
          content: `• Pay yourself first: move money to savings as soon as income comes
• Set up automatic monthly transfers to a savings or RD account
• Use “no‑spend” days where you avoid all non‑essential expenses
• Track small daily spends (tea, snacks, autos) and cut 10–20%

Even saving ₹100 per day adds up to ₹36,500 in a year.`,
        },
        {
          title: 'Where to Keep Your Savings',
          content: `• Savings Account: Easy access; use for short‑term goals and emergencies
• Recurring Deposit (RD): Monthly fixed amount; good discipline, better rate than savings account
• Fixed Deposit (FD): Use for money you do not need for a few months or years

Keep emergency money liquid (savings/RD); lock only surplus in FD.`,
        },
        {
          title: 'Building an Emergency Fund',
          content: `• Start with a small target like 1 month of essential expenses, then grow to 3–6 months
• Keep this money in a separate savings account to avoid spending it by mistake
• Increase contributions when your income rises or other expenses fall

Treat the emergency fund as “do not touch” money except for real emergencies.`,
        },
      ],
      quiz: [
        {
          question:
            'An emergency fund should ideally cover how many months of essential expenses?',
          options: ['1–2 months', '3–6 months', '9–12 months', 'No fixed rule'],
          correct: 1,
          explanation:
            'Many financial planners suggest a separate emergency fund equal to roughly 3–6 months of essential living costs to handle common shocks like job loss or medical bills.[web:41][web:42][web:45]',
        },
        {
          question: 'Which habit makes saving more consistent and easier?',
          options: [
            'Waiting to see what is left at month‑end',
            'Saving only bonuses',
            'Setting up automatic transfers to savings',
            'Keeping all money in cash at home',
          ],
          correct: 2,
          explanation:
            'Automatic transfers into a savings account create a disciplined “set it and forget it” habit, so saving happens regularly without relying on willpower.[web:46][web:49]',
        },
        {
          question:
            'Where is a good place to keep an emergency fund so that it stays safe and accessible?',
          options: [
            'Locked in high‑risk stocks',
            'In a separate savings account or similar low‑risk, liquid option',
            'Only as cash at home',
            'In long‑term investments that are hard to withdraw',
          ],
          correct: 1,
          explanation:
            'Guides on emergency funds usually recommend a dedicated savings account or similar low‑risk, easy‑access place rather than volatile or hard‑to‑withdraw investments.[web:44][web:47]',
        },
      ],
    },

    hi: {
      sections: [
        {
          title: 'बचत क्यों ज़रूरी है?',
          content: `बचत की मदद से आप:
• आपातकाल (बीमारी, नौकरी चली जाना, मरम्मत) के लिए तैयार रहते हैं
• अपने लक्ष्य जैसे पढ़ाई, शादी, वाहन आदि पूरे कर सकते हैं
• पैसों का तनाव कम होता है
• समय के साथ ब्याज के ज़रिए संपत्ति बना सकते हैं

आपातकालीन फंड लक्ष्य: कम से कम 3–6 महीने के ज़रूरी खर्च के बराबर राशि बचाएं।`,
        },
        {
          title: 'बचत बढ़ाने के आसान तरीके',
          content: `• पहले खुद को भुगतान करें: जैसे ही आय आए, थोड़ा हिस्सा सीधे बचत में डालें
• बैंक में ऑटो‑डेबिट सेट करें ताकि हर महीने तय रकम बचत/आरडी में जाए
• महीने में कुछ “नो‑स्पेंड डे” रखें जहाँ गैर‑ज़रूरी खर्च बिल्कुल न करें
• रोज़मर्रा के छोटे खर्च (चाय, स्नैक्स, ऑटो) लिखें और 10–20% घटाएँ

दिन में सिर्फ ₹100 बचाने से साल में ₹36,500 की बचत हो सकती है।`,
        },
        {
          title: 'बचत कहाँ रखें?',
          content: `• सेविंग अकाउंट: तुरंत ज़रूरत के लिए आसान पहुँच; छोटे लक्ष्य और आपातकाल के लिए
• रिकरिंग डिपॉज़िट (RD): हर महीने तय रकम; अनुशासन के लिए अच्छा, आम तौर पर सेविंग से ज़्यादा ब्याज
• फिक्स्ड डिपॉज़िट (FD): कुछ महीने/साल तक न चाहिए ऐसे पैसे के लिए

आपातकालीन फंड के लिए पैसा ज़्यादातर ऐसी जगह रखें जहाँ से तुरंत निकाला जा सके; बहुत लंबी अवधि के लॉक‑इन में सिर्फ अतिरिक्त राशि रखें।`,
        },
        {
          title: 'आपातकालीन फंड कैसे बनाएं?',
          content: `• शुरुआत में 1 महीने के ज़रूरी खर्च जितनी बचत का छोटा लक्ष्य रखें, फिर धीरे‑धीरे 3–6 महीने तक बढ़ाएँ
• इसके लिए अलग बैंक अकाउंट रखें ताकि रोज़मर्रा के खर्च से न मिले
• आय बढ़ने या खर्च घटने पर बचत की मासिक राशि भी थोड़ा‑थोड़ा बढ़ाएँ

इस फंड को “केवल आपात स्थिति के लिए” मानें, सामान्य खरीदारी के लिए इस्तेमाल न करें।`,
        },
      ],
      quiz: [
        {
          question:
            'आपातकालीन फंड के लिए आम तौर पर कितने महीनों के खर्च की सलाह दी जाती है?',
          options: ['1–2 महीने', '3–6 महीने', '9–12 महीने', 'कोई नियम नहीं'],
          correct: 1,
          explanation:
            'कई फाइनेंशियल गाइड 3–6 महीने के ज़रूरी मासिक खर्च जितनी रकम अलग रखने की सलाह देते हैं ताकि आम आपात स्थितियों को संभाला जा सके।[web:41][web:44][web:45]',
        },
        {
          question:
            'बचत को नियमित बनाने के लिए कौन‑सा तरीका सबसे मददगार माना जाता है?',
          options: [
            'महीने के अंत में जो बचे वह बचाना',
            'सिर्फ बोनस मिलने पर बचत करना',
            'हर महीने ऑटो‑ट्रांसफ़र सेट करना',
            'सारा पैसा घर पर नकद रखना',
          ],
          correct: 2,
          explanation:
            'ऑटो‑ट्रांसफ़र से हर महीने स्वतः बचत हो जाती है, इसलिए इसे कई विशेषज्ञ बचत की अच्छी आदत मानते हैं।[web:46][web:49]',
        },
      ],
    },

    mr: {
      sections: [
        {
          title: 'बचत का महत्त्व',
          content: `बचत केल्याने:
• आपत्कालीन प्रसंग (आजारीपणा, नोकरी जाणे, दुरुस्ती) हाताळणे सोपे होते
• शिक्षण, लग्न, वाहन अशा उद्दिष्टांसाठी पैसा साठवता येतो
• पैशांबद्दलची चिंता कमी होते
• व्याजामुळे हळूहळू संपत्ती तयार होते`,
        },
        {
          title: 'सोपे बचत उपाय',
          content: `• उत्पन्न मिळताच आधी थोडी रक्कम बचतीत टाका (Pay yourself first)
• बँकेत ऑटो‑डेडक्ट/स्टँडिंग इन्स्ट्रक्शन सेट करा
• काही दिवस “नो‑स्पेंड डे” ठेवा – अनावश्यक खर्च टाळा`,
        },
      ],
      quiz: [
        {
          question: 'आपत्कालीन फंडासाठी साधारण किती महिन्यांच्या खर्चाइतकी बचत सुचवली जाते?',
          options: ['1–2 महिने', '3–6 महिने', '9–12 महिने', 'कोणताही नियम नाही'],
          correct: 1,
          explanation:
            'अनेक मार्गदर्शिकांमध्ये 3–6 महिन्यांच्या आवश्यक खर्चाइतकी बचत आपत्कालीन फंडासाठी ठेवण्याची सूचना केली जाते.[web:41][web:45]',
        },
      ],
    },

    ta: {
      sections: [
        {
          title: 'சேமிப்பு ஏன் முக்கியம்?',
          content: `சேமிப்பு மூலம்:
• உடனடி அவசரங்கள் (நோய், வேலை இழப்பு, பழுது) சமாளிக்க முடியும்
• கல்வி, திருமணம், வாகனம் போன்ற இலக்குகள் அடைய உதவும்
• பணம் பற்றிய மன அழுத்தம் குறையும்`,
        },
        {
          title: 'சுலபமான சேமிப்பு முறைகள்',
          content: `• வருமானம் வந்தவுடன் முதலில் உங்களுக்கே “பணம் செலுத்தி” ஒரு பகுதியை சேமிப்பில் வையுங்கள்
• வங்கி கணக்கில் இருந்து சேமிப்பு/RD க்கு ஆட்டோ டிரான்ஸ்ஃபர் அமைக்கவும்
• சில நாட்களை “no‑spend day” ஆகக் குறித்து தேவையற்ற செலவுகளைத் தவிர்க்கவும்`,
        },
      ],
      quiz: [
        {
          question:
            'அவசர நிதி பொதுவாக எத்தனை மாதங்களின் அத்தியாவசிய செலவுகளுக்குச் சமமாக இருக்க வேண்டும் என்று கூறப்படுகிறது?',
          options: ['1–2 மாதங்கள்', '3–6 மாதங்கள்', '9–12 மாதங்கள்', 'எந்த விதியும் இல்லை'],
          correct: 1,
          explanation:
            'பல நிதி வழிகாட்டுதல்கள் 3–6 மாத அத்தியாவசிய செலவுகளுக்குச் சமமான தொகையை அவசர நிதியாக வைத்திருக்க பரிந்துரைக்கின்றன.[web:41][web:45]',
        },
      ],
    },

    bn: {
      sections: [
        {
          title: 'সঞ্চয় কেন জরুরি?',
          content: `সঞ্চয়ের মাধ্যমে:
• হঠাৎ জরুরি অবস্থা (অসুস্থতা, চাকরি হারানো, মেরামত) সামলানো সহজ হয়
• শিক্ষা, বিয়ে, গাড়ি ইত্যাদি লক্ষ্যের জন্য টাকা জমানো যায়
• টাকার চিন্তা কিছুটা কমে`,
        },
        {
          title: 'সহজ সঞ্চয়ের কৌশল',
          content: `• আয় হাতে আসতেই আগে নিজেকে “পেমেন্ট” করে এক অংশ সরাসরি সঞ্চয়ে রাখুন
• ব্যাঙ্কে অটো‑ট্রান্সফার/স্ট্যান্ডিং ইন্সট্রাকশন সেট করুন
• কয়েকটি “no‑spend day” রাখুন যেখানে অপ্রয়োজনীয় খরচ একদম করবেন না`,
        },
      ],
      quiz: [
        {
          question:
            'ইমারজেন্সি ফান্ডের জন্য সাধারণত কত মাসের জরুরি খরচ জমানোর পরামর্শ দেওয়া হয়?',
          options: ['১–২ মাস', '৩–৬ মাস', '৯–১২ মাস', 'কোন নিয়ম নেই'],
          correct: 1,
          explanation:
            'অনেক আর্থিক পরামর্শদাতা প্রায় ৩–৬ মাসের প্রয়োজনীয় খরচের সমান টাকা আলাদা করে রাখতে বলেন, যাতে বিপদে তা কাজে লাগে.[web:41][web:44][web:45]',
        },
      ],
    },

    kn: {
      sections: [
        {
          title: 'ಉಳಿತಾಯ ಯಾಕೆ ಮುಖ್ಯ?',
          content: `ಉಳಿತಾಯದಿಂದ:
• ಅಕಸ್ಮಾತ್ ಪರಿಸ್ಥಿತಿ (ಅನಾರೋಗ್ಯ, ಉದ್ಯೋಗ ಹೋಗುವುದು, ರಿಪೇರ್) ನಿಭಾಯಿಸಲು ಸಹಾಯವಾಗುತ್ತದೆ
• ಶಿಕ್ಷಣ, ವಿವಾಹ, ವಾಹನ ಇತ್ಯಾದಿ ಗುರಿಗಳಿಗೆ ಹಣ ಸೇರಿಸಬಹುದು
• ಹಣದ ಬಗ್ಗೆ ಇರುವ ಒತ್ತಡ ಕಡಿಮೆ ಆಗುತ್ತದೆ`,
        },
        {
          title: 'ಸುಲಭ ಉಳಿಸುವ ವಿಧಾನಗಳು',
          content: `• ವೇತನ ಬಂದ ತಕ್ಷಣ ಮೊದಲೇ ಸ್ವಲ್ಪ ಭಾಗವನ್ನು ಉಳಿತಾಯ ಖಾತೆಗೆ ವರ್ಗಾಯಿಸಿ
• ಬ್ಯಾಂಕ್‌ನಲ್ಲಿ ಆಟೋ‑ಟ್ರಾನ್ಸ್‌ಫರ್/ಸ್ಟ್ಯಾಂಡಿಂಗ್ ಇನ್‌ಸ್ಟ್ರಕ್ಷನ್ ಸೆಟ್ ಮಾಡಿ
• ಕೆಲವು “no‑spend day” ಇಟ್ಟು ಅನಗತ್ಯ ಖರ್ಚು ತಪ್ಪಿಸಿ`,
        },
      ],
      quiz: [
        {
          question:
            'ಎಮರ್ಜೆನ್ಸಿ ಫಂಡ್‌ಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಎಷ್ಟು ತಿಂಗಳ ಅಗತ್ಯ ವೆಚ್ಚದಷ್ಟು ಉಳಿಸಿಕೊಳ್ಳಲು ಸಲಹೆ ನೀಡಲಾಗುತ್ತದೆ?',
          options: ['1–2 ತಿಂಗಳು', '3–6 ತಿಂಗಳು', '9–12 ತಿಂಗಳು', 'ಯಾವ ನಿಯಮವೂ ಇಲ್ಲ'],
          correct: 1,
          explanation:
            'ಬಹುತೇಕ ಮಾರ್ಗಸೂಚಿಗಳು 3–6 ತಿಂಗಳ ಅಗತ್ಯ ವೆಚ್ಚದಷ್ಟು ಹಣವನ್ನು ಪ್ರತ್ಯೇಕ ಎಮರ್ಜೆನ್ಸಿ ಫಂಡ್ ಆಗಿ ಇರಿಸಿಕೊಳ್ಳಲು ಶಿಫಾರಸು ಮಾಡುತ್ತವೆ.[web:41][web:45]',
        },
      ],
    },
  },
};
