// src/data/modules/investingModule.js

export const INVESTING_MODULE = {
  title: {
    en: 'Investment Fundamentals',
    hi: 'निवेश की मूल बातें',
    mr: 'गुंतवणुकीची मूलभूत तत्त्वे',
    ta: 'முதலீட்டின் அடிப்படைகள்',
    bn: 'বিনিয়োগের মৌলিক বিষয়',
    kn: 'ಹೂಡಿಕೆಗಳ ಮೂಲಭುತಿಗಳು',
  },
  description: {
    en: 'Start your investment journey with safe, beginner-friendly options',
    hi: 'सुरक्षित, शुरुआती-अनुकूल विकल्पों के साथ अपनी निवेश यात्रा शुरू करें',
    mr: 'सुरक्षित आणि नवशिक्यांसाठी सोयीस्कर पर्यायांसह आपली गुंतवणूक यात्रा सुरू करा',
    ta: 'பாதுகாப்பான, தொடக்கநிலைக்கு ஏற்ற விருப்பங்களுடன் உங்கள் முதலீட்டு பயணத்தை துவங்குங்கள்',
    bn: 'নিরাপদ ও নতুনদের উপযোগী বিকল্প দিয়ে আপনার বিনিয়োগ যাত্রা শুরু করুন',
    kn: 'ಸುರಕ್ಷಿತ, ಆರಂಭಿಕರಿಗೆ ಸೂಕ್ತ ಆಯ್ಕೆಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಹೂಡಿಕೆ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿ',
  },
  category: 'investing',
  difficulty_level: 'intermediate',
  order_index: 6,
  video_url: 'https://www.youtube.com/watch?v=nm9m1_5LUPQ', // replace with your own link
  thumbnail: 'https://img.youtube.com/vi/nm9m1_5LUPQ/maxresdefault.jpg',
  duration_minutes: 11,
  tags: ['investing', 'beginner', 'ppf', 'fd', 'compounding'],
  prerequisites: [],
  estimated_completion_time: '20 minutes',
  practice_resources: [
    {
      en: 'PPF basics and features',
      hi: 'PPF की बुनियादी जानकारी और विशेषताएँ',
      url: 'https://www.hdfcbank.com/personal/resources/learning-centre/save/what-is-ppf-account',
    },
    {
      en: 'FD vs RD vs liquid funds for short-term money',
      hi: 'कम समय के लक्ष्यों के लिए FD / RD / लिक्विड फंड की तुलना',
      url: 'https://www.simpletaxindia.net/2025/05/fd-vs-rd-vs-liquid-funds-where-to-park-short-term-funds.html',
    },
    {
      en: 'Explainer on power of compounding',
      hi: 'कंपाउंडिंग की शक्ति पर सरल मार्गदर्शिका',
      url: 'https://groww.in/blog/power-of-compounding',
    },
  ],

  content: {
    en: {
      sections: [
        {
          title: 'Safe Investment Options',
          content: `Fixed Deposits (FD):
• Bank or post-office product with guaranteed returns
• Tenure from a few months to several years
• Typically offers moderate interest with low risk

Public Provident Fund (PPF):
• 15-year, government-backed scheme
• Interest rate reset by government; returns are tax-free
• Good for long-term, low-risk wealth building

Sukanya Samriddhi Yojana:
• For girl children below a specified age
• Government scheme with relatively high interest
• Encourages long-term savings for education and future needs`,
        },
        {
          title: 'Risk and Time Horizon',
          content: `Short-term goals (under 3 years):
• Prefer safer options like FDs, RDs, or short-term debt funds
• Capital protection is more important than high returns

Long-term goals (more than 5 years):
• Can gradually take more risk with diversified mutual funds or other growth assets
• Longer time horizon helps ride out market ups and downs

General rule: Do not put money needed soon into high-risk assets, as value can fluctuate sharply.`,
        },
        {
          title: 'Power of Compounding',
          content: `Compounding means earning returns on your past returns.

• The earlier you start, the more time your money has to grow
• Even small monthly investments can grow large over 15–20 years
• Interrupting or withdrawing often reduces the benefit of compounding

Think of it like planting a tree: time and regular care matter more than one big watering.`,
        },
        {
          title: 'Good Habits for New Investors',
          content: `• Start small with a fixed monthly amount you can comfortably invest
• Diversify instead of putting everything into a single product
• Reinvest interest or dividends to benefit from compounding
• Review your investments once or twice a year, not every day

Investing is a long-term habit; consistency and patience matter more than timing the market perfectly.`,
        },
      ],
      quiz: [
        {
          question:
            'Which option is typically backed by the government and suited for long-term, low-risk investing?',
          options: ['PPF', 'Lottery tickets', 'Day trading in stocks', 'Credit card rewards'],
          correct: 0,
          explanation:
            'Public Provident Fund is a government-backed savings scheme designed for long-term, relatively low-risk investing with a fixed maturity period. [web:21][web:25]',
        },
        {
          question:
            'For money you will need within the next 1–2 years, what is usually preferred?',
          options: [
            'High-risk stocks',
            'Long-term equity funds only',
            'Safer options like FD/RD or similar products',
            'No investment at all',
          ],
          correct: 2,
          explanation:
            'For short-term goals, products such as FDs or RDs are widely suggested because they prioritise capital protection over higher but volatile returns. [web:26][web:29]',
        },
        {
          question:
            'Which habit helps small investments grow meaningfully over time?',
          options: [
            'Investing once and never reviewing',
            'Frequently jumping between products',
            'Consistent monthly investing and reinvesting returns',
            'Waiting for the “perfect” time to start',
          ],
          correct: 2,
          explanation:
            'Regular contributions and reinvested returns allow compounding to work over many years, which most beginner investing resources highlight as crucial. [web:27][web:30]',
        },
        {
          question:
            'What is a sensible way to match investments with goals?',
          options: [
            'Use only equity funds for every goal',
            'Use only FDs for every goal',
            'Use safer options for short-term goals and growth assets for long-term goals',
            'Randomly pick products with highest past returns',
          ],
          correct: 2,
          explanation:
            'A common guideline is to match short-term goals with safer instruments and use more growth-oriented assets only for long-term goals where you can ride out volatility. [web:26][web:29]',
        },
      ],
    },

    hi: {
      sections: [
        {
          title: 'सुरक्षित निवेश विकल्प',
          content: `फिक्स्ड डिपॉज़िट (FD):
• बैंक/पोस्ट ऑफिस में निश्चित ब्याज वाला निवेश
• अवधि कुछ महीनों से कई साल तक हो सकती है
          • जोखिम कम, रिटर्न मध्यम

पब्लिक प्रॉविडेंट फंड (PPF):
• 15 साल की सरकारी योजना
• ब्याज दर सरकार तय करती है, आम तौर पर टैक्स‑फ्री रिटर्न
• लंबे समय के सुरक्षित निवेश के लिए उपयुक्त

सुकन्या समृद्धि योजना:
• निर्धारित उम्र तक की बालिकाओं के लिए योजना
• सरकारी स्कीम, आमतौर पर अपेक्षाकृत ऊंचा ब्याज
• भविष्य की पढ़ाई और ज़रूरतों के लिए लंबी अवधि की बचत को प्रोत्साहित करती है`,
        },
        {
          title: 'जोखिम और समय अवधि',
          content: `छोटे लक्ष्य (3 साल से कम):
• पूंजी सुरक्षित रखने के लिए FD, RD या शॉर्ट‑टर्म डेट फंड जैसे विकल्प बेहतर
• यहां ऊंचे रिटर्न से ज़्यादा पैसा सुरक्षित रहना ज़रूरी होता है

लंबे लक्ष्य (5 साल या अधिक):
• समय लंबा होने पर विविध म्यूचुअल फंड जैसे ग्रोथ‑ओरिएंटेड साधन चुने जा सकते हैं
• लंबी अवधि से बाज़ार के उतार‑चढ़ाव का असर कम हो जाता है

सामान्य नियम: जो पैसा जल्द ही चाहिए, उसे बहुत ज़्यादा जोखिम वाले साधनों में न लगाएँ।`,
        },
        {
          title: 'कंपाउंडिंग की ताकत',
          content: `कंपाउंडिंग का मतलब है – ब्याज पर भी ब्याज मिलना।

• जितनी जल्दी शुरुआत करेंगे, पैसे को बढ़ने का उतना ज़्यादा समय मिलेगा
• छोटी‑छोटी मासिक किस्तें भी 15–20 साल में अच्छी रकम बन सकती हैं
• बार‑बार पैसा निकालने से कंपाउंडिंग का लाभ कम हो जाता है

इसे पेड़ लगाने जैसा समझें – समय और नियमित देखभाल सबसे ज़्यादा मायने रखती है।`,
        },
        {
          title: 'नए निवेशकों के लिए अच्छी आदतें',
          content: `• ऐसी छोटी निश्चित मासिक राशि से शुरुआत करें जिसे आराम से निवेश कर सकें
• सारा पैसा एक ही प्रोडक्ट में न लगाकर थोड़ा‑थोड़ा विभाजित करें
• ब्याज/डिविडेंड दोबारा निवेश करके कंपाउंडिंग का लाभ लें
• निवेशों की समीक्षा साल में 1–2 बार करें, रोज़‑रोज़ नहीं

लंबी अवधि में धैर्य और नियमितता अक्सर सही टाइमिंग से ज़्यादा महत्वपूर्ण होती है।`,
        },
      ],
      quiz: [
        {
          question:
            'लंबी अवधि के सुरक्षित निवेश के लिए कौन सा विकल्प अक्सर सुझाया जाता है?',
          options: ['PPF', 'लॉटरी', 'डे‑ट्रेडिंग', 'केवल क्रेडिट‑कार्ड पॉइंट'],
          correct: 0,
          explanation:
            'PPF भारत सरकार समर्थित लम्बी अवधि की योजना है, जिसे आम तौर पर कम जोखिम वाले निवेश के रूप में माना जाता है। [web:21][web:28]',
        },
        {
          question:
            'अगर आपको अगले 1–2 साल में पैसे की ज़रूरत है, तो आम तौर पर क्या उचित माना जाता है?',
          options: [
            'केवल हाई‑रिस्क शेयर',
            'सिर्फ लंबी अवधि के इक्विटी फंड',
            'FD / RD जैसे सुरक्षित विकल्प',
            'बिल्कुल निवेश न करना',
          ],
          correct: 2,
          explanation:
            'कम अवधि के लक्ष्यों के लिए FD / RD जैसे साधन लोकप्रिय हैं, क्योंकि इनमें पूंजी अपेक्षाकृत सुरक्षित रहती है। [web:26][web:29]',
        },
      ],
    },

    mr: {
      sections: [
        {
          title: 'सुरक्षित गुंतवणूक पर्याय',
          content: `फिक्स्ड डिपॉझिट (FD):
• बँक किंवा पोस्ट ऑफिसमधील निश्चित व्याजाचा पर्याय
• मुदत काही महिने ते अनेक वर्षे
• जोखीम कमी, परतावा मध्यम

पब्लिक प्रोविडंट फंड (PPF):
• 15 वर्षांची, सरकार समर्थित योजना
• व्याजदर सरकारकडून ठरवला जातो, परतावा सामान्यतः करमुक्त
• दीर्घकालीन, कमी जोखीम असलेल्या गुंतवणुकीसाठी योग्य`,
        },
        {
          title: 'जोखीम आणि कालावधी',
          content: `3 वर्षांपेक्षा कमी काळाचे उद्दिष्ट:
• FD, RD किंवा शॉर्ट‑टर्म फंडसारखे सुरक्षित पर्याय अधिक योग्य

5 वर्षांपेक्षा जास्त काळाचे उद्दिष्ट:
• विविध म्युच्युअल फंडसारख्या वाढीच्या साधनांत हळूहळू गुंतवणूक करता येते`,
        },
      ],
      quiz: [
        {
          question: 'दीर्घकालीन सुरक्षित गुंतवणुकीसाठी कोणता पर्याय प्रचलित आहे?',
          options: ['PPF', 'लॉटरी', 'डे‑ट्रेडिंग', 'फक्त क्रेडिट‑कार्ड पॉइंट'],
          correct: 0,
          explanation:
            'PPF ही सरकार समर्थित, दीर्घकालीन आणि तुलनेने कमी जोखीम असलेली योजना मानली जाते. [web:21][web:25]',
        },
      ],
    },

    ta: {
      sections: [
        {
          title: 'பாதுகாப்பான முதலீட்டு விருப்பங்கள்',
          content: `நிலையான வைப்பு (FD):
• வங்கி/அஞ்சலகத்தில் உறுதியான வட்டி தரும் முதலீடு
• சில மாதங்களிலிருந்து பல ஆண்டுகள் வரை காலம்
• ஆபத்து குறைவு, வருமானம் நடுத்தரம்

PPF (Public Provident Fund):
• 15 ஆண்டுகள் காலம் கொண்ட அரசு திட்டம்
• வட்டி விகிதத்தை அரசு நிர்ணயிக்கும், வருவாய் பொதுவாக வரி விலக்கு
• நீண்டகால, குறைந்த ஆபத்து முதலீட்டுக்கு ஏற்றது`,
        },
        {
          title: 'ஆபத்து மற்றும் காலவரை',
          content: `3 ஆண்டுகளுக்குக் குறைவான குறுகிய இலக்குகள்:
• FD, RD போன்ற பாதுகாப்பான விருப்பங்கள் சிறந்தவை

5 ஆண்டுகளுக்கு மேல் நீண்டகால இலக்குகள்:
• மெல்ல மெல்ல பல்துறை மியூச்சுவல் ஃபண்ட் போன்ற வளர்ச்சி சார்ந்த முதலீடுகளில் செல்லலாம்`,
        },
      ],
      quiz: [
        {
          question:
            'நீண்டகால, குறைந்த ஆபத்து முதலீட்டிற்கு பொதுவாக எது பரிந்துரைக்கப்படுகிறது?',
          options: ['PPF', 'லாட்டரி', 'டே-ட்ரேடிங்', 'கிரெடிட் கார்டு பாயின்ட் மட்டும்'],
          correct: 0,
          explanation:
            'PPF இந்திய அரசால் ஆதரவு பெறும் நீண்டகால சேமிப்பு திட்டமாக கருதப்படுகிறது. [web:21][web:28]',
        },
      ],
    },

    bn: {
      sections: [
        {
          title: 'নিরাপদ বিনিয়োগের বিকল্প',
          content: `ফিক্সড ডিপোজিট (FD):
• ব্যাংক/ডাকঘরে নির্দিষ্ট সুদের বিনিয়োগ
• মেয়াদ কয়েক মাস থেকে বহু বছর
• ঝুঁকি কম, রিটার্ন মাঝারি

পাবলিক প্রভিডেন্ট ফান্ড (PPF):
• ১৫ বছরের সরকারি স্কিম
• সুদের হার সরকার নির্ধারণ করে, রিটার্ন সাধারণত করমুক্ত
• দীর্ঘমেয়াদি, কম ঝুঁকির বিনিয়োগের জন্য উপযোগী`,
        },
        {
          title: 'ঝুঁকি ও সময়কাল',
          content: `৩ বছরের কম সময়ের স্বল্পমেয়াদি লক্ষ্য:
• FD, RD বা স্বল্পমেয়াদি ঋণ ভিত্তিক ফান্ডের মতো নিরাপদ বিকল্প ভালো

৫ বছরের বেশি দীর্ঘমেয়াদি লক্ষ্য:
• বৈচিত্র্যময় মিউচুয়াল ফান্ড ইত্যাদিতে ধীরে ধীরে বেশি ঝুঁকি নেওয়া যায়`,
        },
      ],
      quiz: [
        {
          question:
            'দীর্ঘমেয়াদি নিরাপদ বিনিয়োগের জন্য কোন বিকল্পটি সাধারণভাবে সুপারিশ করা হয়?',
          options: ['PPF', 'লটারি', 'ডে-ট্রেডিং', 'শুধু ক্রেডিট কার্ড পয়েন্ট'],
          correct: 0,
          explanation:
            'PPF হল ভারতের সরকারের সমর্থিত দীর্ঘমেয়াদি সঞ্চয় স্কিম, যেখানে ঝুঁকি তুলনামূলকভাবে কম ধরা হয়। [web:21][web:25]',
        },
      ],
    },

    kn: {
      sections: [
        {
          title: 'ಸುರಕ್ಷಿತ ಹೂಡಿಕೆ ಆಯ್ಕೆಗಳು',
          content: `ಫಿಕ್ಸ್ಡ್ ಡೆಪಾಸಿಟ್ (FD):
• ಬ್ಯಾಂಕ್/ಅಂಚೆ ಕಚೇರಿಯಲ್ಲಿ ನಿಗದಿತ ಬಡ್ಡಿದರದ ಹೂಡಿಕೆ
• ಅವಧಿ ಕೆಲವು ತಿಂಗಳಿನಿಂದ ಹಲವು ವರ್ಷಗಳವರೆಗೆ ಇರಬಹುದು
• ಜೋಕಿಂ ಕಡಿಮೆ, ವಾಪಾಸು ಮಧ್ಯಮ

ಪಬ್ಲಿಕ್ ಪ್ರಾವಿಡೆಂಟ್ ಫಂಡ್ (PPF):
• 15 ವರ್ಷದ ಸರ್ಕಾರ ಬೆಂಬಲಿತ ಯೋಜನೆ
• ಬಡ್ಡಿದರವನ್ನು ಸರ್ಕಾರ ನಿಗದಿಪಡಿಸುತ್ತದೆ, ಲಾಭ ಸಾಮಾನ್ಯವಾಗಿ ತೆರಿಗೆ ವಿನಾಯಿತಿ
• ದೀರ್ಘಾವಧಿಯ, ಕಡಿಮೆ ಜೋಕಿಂ ಹೂಡಿಕೆಗಾಗಿ ಸೂಕ್ತ`,
        },
        {
          title: 'ಜೋಕಿಂ ಮತ್ತು ಅವಧಿ',
          content: `3 ವರ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ ಅವಧಿಯ ಗುರಿ:
• FD, RD ಅಥವಾ ಶಾರ್ಟ್‑ಟರ್ಮ್ ಫಂಡ್‌ಗಳಂತಹ ಸುರಕ್ಷಿತ ಆಯ್ಕೆಗಳು ಉತ್ತಮ

5 ವರ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚು ಅವಧಿಯ ಗುರಿ:
• ವಿಭಿನ್ನ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳಂತಹ ವೃದ್ಧಿ ಸಾಧನಗಳಲ್ಲಿ ಹಂತ ಹಂತವಾಗಿ ಹೂಡಿಕೆ ಮಾಡಬಹುದು`,
        },
      ],
      quiz: [
        {
          question:
            'ದೀರ್ಘಾವಧಿ, ಕಡಿಮೆ ಜೋಕಿಂ ಹೂಡಿಕೆಗಾಗಿ ಸಾಮಾನ್ಯವಾಗಿ ಯಾವ ಆಯ್ಕೆಯನ್ನು ಶಿಫಾರಸು ಮಾಡಲಾಗುತ್ತದೆ?',
          options: ['PPF', 'ಲಾಟರಿ', 'ಡೇ-ಟ್ರೆಡಿಂಗ್', 'ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಪಾಯಿಂಟ್‌ಗಳು ಮಾತ್ರ'],
          correct: 0,
          explanation:
            'PPF ಭಾರತ ಸರ್ಕಾರ ಬೆಂಬಲಿತ ದೀರ್ಘಾವಧಿ ಉಳಿತಾಯ ಯೋಜನೆ ಆಗಿದ್ದು, ಸಾಮಾನ್ಯವಾಗಿ ಕಡಿಮೆ ಜೋಕಿಂ ಎನ್ನಲಾಗುತ್ತದೆ. [web:21][web:28]',
        },
      ],
    },
  },
};
