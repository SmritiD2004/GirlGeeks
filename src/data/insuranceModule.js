// src/data/modules/insuranceModule.js

export const INSURANCE_MODULE = {
  title: {
    en: 'Insurance Basics',
    hi: 'बीमा की मूल बातें',
    mr: 'विमा मूलभूत माहिती',
    ta: 'காப்பீட்டின் அடிப்படைகள்',
    bn: 'বিমা সম্পর্কিত মৌলিক ধারণা',
    kn: 'ವಿಮೆಯ ಮೂಲಭುತಿಗಳು',
  },
  description: {
    en: 'Understand why insurance matters for financial security',
    hi: 'समझें कि बीमा वित्तीय सुरक्षा के लिए क्यों महत्वपूर्ण है',
    mr: 'विमा आर्थिक सुरक्षेसाठी का महत्वाचा आहे ते समजून घ्या',
    ta: 'நிதி பாதுகாப்பிற்கு காப்பீடு ஏன் முக்கியம் என்பதை அறிக',
    bn: 'আর্থিক নিরাপত্তার জন্য বিমা কেন গুরুত্বপূর্ণ তা বুঝুন',
    kn: 'ಆರ್ಥಿಕ ಭದ್ರತೆಗೆ ವಿಮೆ ಏಕೆ ಮುಖ್ಯವೆಂದು ತಿಳಿದುಕೊಳ್ಳಿ',
  },
  category: 'insurance',
  difficulty_level: 'intermediate',
  order_index: 5,
  video_url: 'https://www.youtube.com/watch?v=7qO4tL9pK8M', // replace with your own link
  thumbnail: 'https://img.youtube.com/vi/7qO4tL9pK8M/maxresdefault.jpg',
  duration_minutes: 10,
  tags: ['insurance', 'term-insurance', 'health-insurance', 'risk-management'],
  prerequisites: [],
  estimated_completion_time: '20 minutes',
  practice_resources: [
    {
      en: 'How much term insurance do you need? (guide)',
      hi: 'कितना टर्म इंश्योरेंस कवर लें? (गाइड)',
      url: 'https://www.kotaklife.com/insurance-guide/protection/how-much-term-life-insurance-cover-do-i-need-in-india',
    },
    {
      en: 'Health insurance coverage thumb rules',
      hi: 'हेल्थ इंश्योरेंस कवर के सामान्य नियम',
      url: 'https://www.policybazaar.com/health-insurance/general-info/articles/how-much-health-insurance-do-you-need-in-india/',
    },
  ],

  content: {
    en: {
      sections: [
        {
          title: 'Why Insurance Matters',
          content: `Insurance protects you and your family from large, unexpected expenses.

Health insurance:
• Pays part or all of hospital, surgery and treatment bills
• Helps you avoid using up your savings in a medical emergency

Life insurance:
• Provides money to your family if you die during the policy term
• Can replace income and help repay loans or other big obligations

Property and vehicle insurance:
• Covers damage or loss to your house, shop or vehicle
• Third‑party motor insurance is legally required for vehicles in India.`,
        },
        {
          title: 'How Much Cover Do You Need?',
          content: `Health insurance:
• Aim for coverage roughly equal to at least half to 1–2 years of your essential expenses or income
• Family floater plans can cover multiple members under one sum insured

Life insurance (term plan):
• Common guideline: about 10–15 times your annual income, plus big loans
• Higher cover may be needed if you have many dependants or large liabilities

Premium rule of thumb:
• Total premiums for life + health should be affordable, usually under 10% of your yearly income.`,
        },
        {
          title: 'Smart Insurance Practices',
          content: `• Prioritise pure term life insurance and a good health policy before investment products
• Disclose all illnesses and habits honestly in proposal forms
• Compare features: waiting periods, room rent limits, exclusions, claim‑settlement record
• Avoid mixing insurance and investment; ULIP/endowment plans are usually more complex and costly

Good coverage plus an emergency fund forms the base of a strong financial plan.`,
        },
        {
          title: 'Term Insurance vs ULIP',
          content: `Term insurance:
• Pure protection; pays your family if you die during the term
• Very high cover available at low premium compared with other plans

ULIP (Unit Linked Insurance Plan):
• Combines investment and insurance in one product
• Charges and complexity are usually higher; cover per rupee of premium is lower

If you mainly want to protect your family, a simple term plan is usually the most cost‑effective choice.`,
        },
      ],
      quiz: [
        {
          question: 'What is the main purpose of health insurance?',
          options: [
            'To grow your money aggressively',
            'To cover medical and hospital expenses',
            'To pay for daily groceries',
            'To avoid paying any tax at all',
          ],
          correct: 1,
          explanation:
            'Health insurance is designed to reduce the financial burden of medical treatment so that large hospital bills do not wipe out your savings. [web:17]',
        },
        {
          question:
            'Which type of life insurance is usually best for pure protection at low cost?',
          options: ['ULIP', 'Endowment plan', 'Whole‑life with bonus', 'Term insurance'],
          correct: 3,
          explanation:
            'Term insurance focuses only on protection, so the premium per rupee of cover is typically much lower than mixed insurance‑investment products. [web:13]',
        },
        {
          question:
            'Roughly how much life cover do many advisers suggest for a basic thumb rule?',
          options: [
            'Equal to 1 year of income',
            'Equal to 3 years of income',
            'About 10–15 times annual income',
            'Same as your monthly expenses',
          ],
          correct: 2,
          explanation:
            'A common rule of thumb is life cover of about 10–15× annual income, plus any big outstanding loans, so your family can maintain their lifestyle. [web:16][web:19]',
        },
        {
          question:
            'Which combination is usually recommended as the foundation of a good protection plan?',
          options: [
            'ULIP + credit card',
            'Term life insurance + health insurance',
            'Gold + real estate',
            'Only savings account',
          ],
          correct: 1,
          explanation:
            'A basic term life policy for income protection plus adequate health insurance for medical costs forms the core of most protection plans. [web:13][web:17]',
        },
      ],
    },

    hi: {
      sections: [
        {
          title: 'बीमा क्यों ज़रूरी है?',
          content: `बीमा बड़े अचानक आने वाले खर्चों से आपको और आपके परिवार को बचाता है।

हेल्थ इंश्योरेंस:
• अस्पताल, ऑपरेशन और इलाज के बिल का बड़ा हिस्सा कवर कर सकता है
• मेडिकल इमरजेंसी में आपकी सालों की बचत खत्म होने से बचाती है

लाइफ इंश्योरेंस (टर्म प्लान):
• कमाने वाले व्यक्ति की मृत्यु होने पर परिवार को एकमुश्त रकम या मासिक आय देता है
• इससे घर का खर्च और लोन की किस्तें चलती रह सकती हैं

प्रॉपर्टी और वाहन बीमा:
• घर, दुकान या वाहन के नुकसान/चोरी को कवर कर सकता है
• थर्ड‑पार्टी मोटर इंश्योरेंस भारत में गाड़ियों के लिए ज़रूरी है।`,
        },
        {
          title: 'कितना बीमा लेना चाहिए?',
          content: `हेल्थ इंश्योरेंस:
• सामान्य रूप से सालाना आय का कम से कम आधा या 1–2 साल के ज़रूरी खर्च के बराबर कवर लेना उपयोगी माना जाता है
• फैमिली फ्लोटर पॉलिसी में एक ही सम‑इंश्योर्ड पर पूरा परिवार कवर हो सकता है

लाइफ इंश्योरेंस (टर्म):
• आम गाइडलाइन: सालाना आय का लगभग 10–15 गुना कवर
• होम लोन जैसे बड़े कर्ज़ हों तो उन्हें जोड़कर कवर बढ़ाएँ

ध्यान रखने की बात:
• जीवन और स्वास्थ्य बीमा के प्रीमियम मिलाकर आम तौर पर सालाना आय के लगभग 10% से कम ही रखना बेहतर है, ताकि प्रीमियम बोझ न बने।`,
        },
        {
          title: 'समझदारी से बीमा कैसे लें?',
          content: `• सबसे पहले टर्म लाइफ और अच्छी हेल्थ पॉलिसी को प्राथमिकता दें, फिर निवेश वाले प्रोडक्ट देखें
• फॉर्म भरते समय बीमारी, धूम्रपान जैसी सभी जानकारी पूरी ईमानदारी से दें
• पॉलिसी चुनते समय वेटिंग पीरियड, रूम रेंट लिमिट, एक्सक्लूज़न और क्लेम सेटलमेंट रिकॉर्ड ज़रूर देखें
• इंश्योरेंस और निवेश को मिलाने वाले ULIP / एंडोमेंट प्लान अक्सर महंगे और जटिल होते हैं, इसलिए केवल सुरक्षा के लिए टर्म प्लान साधारण और सस्ता होता है।

अच्छा बीमा कवरेज और इमरजेंसी फंड मिलकर मजबूत वित्तीय सुरक्षा जाल बनाते हैं।`,
        },
      ],
      quiz: [
        {
          question: 'हेल्थ इंश्योरेंस का मुख्य फायदा क्या है?',
          options: [
            'शेयर बाज़ार में ज़्यादा रिटर्न',
            'अस्पताल और इलाज के बड़े खर्च से सुरक्षा',
            'किराने का पूरा खर्च उठाना',
            'टैक्स बिल्कुल न देना',
          ],
          correct: 1,
          explanation:
            'हेल्थ इंश्योरेंस का उद्देश्य मेडिकल खर्च को कवर करना और आपकी जमा पूंजी को बचाना होता है। [web:17]',
        },
        {
          question: 'लाइफ इंश्योरेंस के लिए आमतौर पर कितना कवर सुझाया जाता है?',
          options: [
            'सिर्फ 1 साल की आय के बराबर',
            'लगभग 3 साल की आय के बराबर',
            'सालाना आय का लगभग 10–15 गुना',
            'सिर्फ महीने के खर्च के बराबर',
          ],
          correct: 2,
          explanation:
            'कई वित्तीय सलाहकार जीवन बीमा कवर को सालाना आय के लगभग 10–15 गुना और बड़े कर्ज़ जोड़कर रखने की सलाह देते हैं। [web:16][web:19]',
        },
      ],
    },

    mr: {
      sections: [
        {
          title: 'विमा का महत्व काय?',
          content: `विमा मोठ्या आणि अचानक आलेल्या खर्चापासून तुम्हाला आणि तुमच्या कुटुंबाला संरक्षण देतो.

हेल्थ इन्शुरन्स:
• हॉस्पिटलायझेशन, ऑपरेशन आणि उपचार खर्चाचा मोठा भाग भरतो
• वैद्यकीय आपत्कालीन परिस्थितीत बचत वाचवण्यास मदत होते

लाइफ इन्शुरन्स (टर्म):
• कमावणाऱ्या व्यक्तीच्या मृत्यू झाल्यास कुटुंबाला रक्कम मिळते
• घरखर्च, लोन EMI चालू ठेवण्यास मदत होऊ शकते.`,
        },
        {
          title: 'किती कवर घ्यायला पाहिजे?',
          content: `हेल्थ इन्शुरन्स:
• साधारणपणे वार्षिक उत्पन्नाच्या किमान अर्ध्या ते 1–2 वर्षांच्या गरजेच्या खर्चाइतका कवर ठेवणे उपयोगी ठरते

लाइफ इन्शुरन्स (टर्म):
• सामान्य नियम: वार्षिक उत्पन्नाच्या सुमारे 10–15 पट कवर
• मोठे कर्ज (होम लोन इ.) असल्यास तेही कव्हरमध्ये धरावे.`,
        },
      ],
      quiz: [
        {
          question: 'हेल्थ इन्शुरन्सचा मुख्य उद्देश काय आहे?',
          options: [
            'शेअर बाजारात जास्त परतावा देणे',
            'रुग्णालय आणि उपचार खर्च कमी करणे',
            'दररोजच्या किराणा खर्चासाठी',
            'पूर्णपणे कर वाचवण्यासाठी',
          ],
          correct: 1,
          explanation:
            'हेल्थ इन्शुरन्स मोठ्या मेडिकल बिलांपासून आर्थिक संरक्षण देण्यासाठी असतो.',
        },
      ],
    },

    ta: {
      sections: [
        {
          title: 'காப்பீடு ஏன் முக்கியம்?',
          content: `காப்பீடு திடீர், பெரிய செலவுகளிலிருந்து உங்களையும் குடும்பத்தையும் பாதுகாக்கிறது.

அரோக்கிய காப்பீடு:
• மருத்துவமனை, அறுவை சிகிச்சை செலவுகளின் பெரும்பகுதியை மூட உதவும்
• அவசர சிகிச்சையில் உங்கள் சேமிப்பை முழுவதும் பயன்படுத்த வேண்டிய நிலையைத் தவிர்க்கிறது

உயிர்காப்பீடு (டெர்ம்பிளான்):
• சம்பாதிப்பவர் மரணமடைந்தால் குடும்பத்துக்கு ஒரு தொகை வழங்குகிறது
• வீடு, கல்வி போன்ற கடன்களைத் திருப்பி செலுத்த உதவலாம்.`,
        },
        {
          title: 'எவ்வளவு கவர் தேவை?',
          content: `அரோக்கிய காப்பீடு:
• பொதுவாக ஆண்டுவருமானத்தின் குறைந்தது பாதி முதல் 1–2 ஆண்டுகளுக்கு தேவையான செலவுக்குச் சமமான கவர் உதவும்

உயிர்காப்பீடு (டெர்ம்பிளான்):
• ஒரு வழக்கமான வழிகாட்டுதல்: வருட வருமானத்தின் 10–15 மடங்கான கவர்
• வீட்டு கடன் போன்ற பெரிய கடன்கள் இருந்தால் அதை சேர்த்துக் கொள்ள வேண்டும்.`,
        },
      ],
      quiz: [
        {
          question: 'அரோக்கிய காப்பீட்டின் முக்கிய நோக்கம் என்ன?',
          options: [
            'பங்கு சந்தையில் லாபம் பெற',
            'மருத்துவ மற்றும் மருத்துவமனைச் செலவுகளைத் தாங்க',
            'மளிகைச் செலவை முழுவதும் ஏற்க',
            'வரி முற்றிலும் தவிர்க்க',
          ],
          correct: 1,
          explanation:
            'அரோக்கிய காப்பீடு பெரிய மருத்துவ செலவுகளால் சேமிப்பு நாசமடையாமல் காப்பாற்ற உதவுகிறது.',
        },
      ],
    },

    bn: {
      sections: [
        {
          title: 'বিমা কেন দরকার?',
          content: `বিমা হঠাৎ হওয়া বড় খরচ থেকে আপনাকে এবং আপনার পরিবারকে রক্ষা করে।

হেলথ ইন্স্যুরেন্স:
• হাসপাতাল, অপারেশন ও চিকিত্সা খরচের বড় অংশ কভার করতে পারে
• মেডিকেল ইমারজেন্সিতে আপনার সঞ্চয় দ্রুত শেষ হয়ে যাওয়া থেকে বাঁচায়

লাইফ ইন্স্যুরেন্স (টার্ম প্ল্যান):
• উপার্জনকারী ব্যক্তির মৃত্যু হলে পরিবারকে এককালীন অর্থ বা আয় দেয়
• বাড়ির খরচ ও ঋণের কিস্তি চালিয়ে যেতে সাহায্য করে।`,
        },
        {
          title: 'কতটা কভার নেবেন?',
          content: `হেলথ ইন্স্যুরেন্স:
• সাধারণভাবে বার্ষিক আয়ের অন্তত অর্ধেক থেকে ১–২ বছরের প্রয়োজনীয় খরচের সমান কভার রাখা উপকারী

লাইফ ইন্স্যুরেন্স (টার্ম):
• প্রচলিত নিয়ম: বার্ষিক আয়ের প্রায় ১০–১৫ গুণ কভার
• বড় হোম লোন ইত্যাদি থাকলে তা হিসাবের সঙ্গে যোগ করতে হবে।`,
        },
      ],
      quiz: [
        {
          question: 'হেলথ ইন্স্যুরেন্সের মূল উদ্দেশ্য কী?',
          options: [
            'টাকা দ্রুত বাড়ানো',
            'হাসপাতাল ও চিকিত্সা খরচ বহন করা',
            'প্রতিদিনের বাজার খরচ দেওয়া',
            'একেবারেই কর না দেওয়া',
          ],
          correct: 1,
          explanation:
            'হেলথ ইন্স্যুরেন্সের লক্ষ্য বড় মেডিকেল বিল থেকে আর্থিক সুরক্ষা দেওয়া।',
        },
      ],
    },

    kn: {
      sections: [
        {
          title: 'ವಿಮೆ ಯಾಕೆ ಮುಖ್ಯ?',
          content: `ವಿಮೆ ದೊಡ್ಡ, ಅಕಸ್ಮಾತ್ ಖರ್ಚುಗಳಿಂದ ನಿಮ್ಮನ್ನೂ ನಿಮ್ಮ ಕುಟುಂಬವನ್ನೂ ರಕ್ಷಿಸುತ್ತದೆ.

ಆರೋಗ್ಯ ವಿಮೆ:
• ಆಸ್ಪತ್ರೆಗೆ ದಾಖಲಾಗುವುದು, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮತ್ತು ಚಿಕಿತ್ಸಾ ವೆಚ್ಚದ ಬಹುಭಾಗವನ್ನು ಹೊತ್ತುಕೊಳ್ಳಬಹುದು
• ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ನಿಮ್ಮ ಜಮಾ ಹಣ ಸಂಪೂರ್ಣ ಖಾಲಿಯಾಗುವುದನ್ನು ತಡೆಯುತ್ತದೆ

ಜೀವ ವಿಮೆ (ಟರ್ಮ್ ಪ್ಲಾನ್):
• ಆದಾಯ ತಂದೆ/ತಾಯಿಯ ಮರಣವಾದರೆ ಕುಟುಂಬಕ್ಕೆ ಮೊತ್ತ ನೀಡುತ್ತದೆ
• ಮನೆ, ಶಿಕ್ಷಣ ಇತ್ಯಾದಿ ಸಾಲ ತೀರಿಸಲು ಸಹಾಯ ಮಾಡಬಹುದು.`,
        },
        {
          title: 'ಎಷ್ಟು ಕವರ್ ಬೇಕು?',
          content: `ಆರೋಗ್ಯ ವಿಮೆ:
• ಸಾಮಾನ್ಯವಾಗಿ ವಾರ್ಷಿಕ ಆದಾಯದ ಕನಿಷ್ಠ ಅರ್ಧ ಭಾಗದಷ್ಟು ಅಥವಾ 1–2 ವರ್ಷಗಳ ಅಗತ್ಯ ಖರ್ಚಿಗೆ ಸಮನಾದ ಕವರ್ ಉಪಯುಕ್ತ

ಜೀವ ವಿಮೆ (ಟರ್ಮ್):
• ಸಾಮಾನ್ಯ ಮಾರ್ಗಸೂಚಿ: ವಾರ್ಷಿಕ ಆದಾಯದ ಸುಮಾರು 10–15 ಪಟ್ಟು ಕವರ್
• ದೊಡ್ಡ ಗೃಹ ಸಾಲ ಇತ್ಯಾದಿ ಇದ್ದರೆ ಅದನ್ನೂ ಸೇರಿಸಬೇಕು.`,
        },
      ],
      quiz: [
        {
          question: 'ಹೆಲ್ತ್ ಇನ್ಶುರನ್ಸ್‌ನ ಮುಖ್ಯ ಉದ್ದೇಶ ಏನು?',
          options: [
            'ಹಣವನ್ನು ಬೇಗ ಹೆಚ್ಚಿಸುವುದು',
            'ಆಸ್ಪತ್ರೆ ಮತ್ತು ವೈದ್ಯಕೀಯ ವೆಚ್ಚವನ್ನು ಭರಿಸುವುದು',
            'ಪ್ರತಿದಿನದ ತರಕಾರಿ ಖರ್ಚು',
            'ಸಂಪೂರ್ಣ ತೆರಿಗೆ ತಪ್ಪಿಸುವುದು',
          ],
          correct: 1,
          explanation:
            'ಹೆಲ್ತ್ ಇನ್ಶುರನ್ಸ್ ದೊಡ್ಡ ವೈದ್ಯಕೀಯ ವೆಚ್ಚಗಳಿಂದ ಆರ್ಥಿಕ ರಕ್ಷಣೆ ನೀಡಲು ಇರುವದು.',
        },
      ],
    },
  },
};
