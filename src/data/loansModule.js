// src/data/modules/loansModule.js

export const LOANS_MODULE = {
  title: {
    en: 'Understanding Loans',
    hi: 'ऋणों को समझना',
    mr: 'कर्ज समजून घेणे',
    ta: 'கடன்களைப் புரிந்துகொள்வது',
    bn: 'ঋণ সম্পর্কে বোঝা',
    kn: 'ಸಾಲಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು',
  },
  description: {
    en: 'Learn about different types of loans and how to borrow responsibly',
    hi: 'विभिन्न प्रकार के ऋणों और जिम्मेदारी से उधार लेने के बारे में जानें',
    mr: 'विविध प्रकारच्या कर्जांविषयी आणि जबाबदारीने कर्ज कसे घ्यावे ते शिका',
    ta: 'வகை வகையான கடன்கள் மற்றும் பொறுப்புடன் கடன் எடுப்பது பற்றி அறிக',
    bn: 'বিভিন্ন প্রকার ঋণ ও দায়িত্বশীলভাবে ঋণ নেওয়া সম্পর্কে জানুন',
    kn: 'ವಿವಿಧ ವಿಧದ ಸಾಲಗಳ ಬಗ್ಗೆ ಮತ್ತು ಜವಾಬ್ದಾರಿಯಿಂದ ಸಾಲ ತೆಗೆದುಕೊಳ್ಳುವುದನ್ನು ಕಲಿಯಿರಿ',
  },
  category: 'loans',
  difficulty_level: 'intermediate',
  order_index: 4,
  video_url: 'https://www.youtube.com/watch?v=5jAOv4qN5zM', // replace with your own link
  thumbnail: 'https://img.youtube.com/vi/5jAOv4qN5zM/maxresdefault.jpg',
  duration_minutes: 9,
  tags: ['loans', 'emi', 'debt-trap', 'credit-score'],
  prerequisites: [],
  estimated_completion_time: '20 minutes',
  practice_resources: [
    {
      en: 'Home loan vs personal loan basics',
      hi: 'होम लोन बनाम पर्सनल लोन – मूल बातें',
      url: 'https://www.airtel.in/blog/personal-loan/personal-loan-vs-home-equity-loan-which-is-better/',
    },
    {
      en: 'EMI to income ratio explainer',
      hi: 'EMI से आय अनुपात को समझें',
      url: 'https://www.shriramfinance.in/financial-faq-what-is-the-emi-to-salary-ratio',
    },
    {
      en: 'What is a debt trap and how to avoid it',
      hi: 'डेट ट्रैप क्या है और इससे कैसे बचें',
      url: 'https://stackwealth.in/blog/finance/what-is-debt-trap',
    },
  ],

  content: {
    en: {
      sections: [
        {
          title: 'Types of Loans',
          content: `Personal Loan:
• For any personal need (wedding, travel, medical)
• Usually unsecured, higher interest rate
• Shorter tenure (1–5 years)

Business Loan (incl. Mudra):
• For starting or growing a small business
• Can offer special schemes and lower rates for women entrepreneurs
• May be collateral‑free up to a limit

Home Loan:
• For buying or building a house
• Secured against the property
• Longer tenure (up to 20–30 years), generally lower interest

Education Loan:
• For higher studies in India or abroad
• Repayment often starts after course completion
• Sometimes subsidised interest for lower‑income students`,
        },
        {
          title: 'Key Loan Terms to Know',
          content: `Principal:
• The amount you actually borrow from the bank

Interest Rate:
• The cost of borrowing, expressed as a percentage per year

Tenure:
• Time you get to repay the loan (in months or years)

EMI (Equated Monthly Instalment):
• Fixed monthly amount that covers both principal and interest

Processing Fees & Other Charges:
• One‑time fee, plus possible penalties for late EMI or pre‑closure`,
        },
        {
          title: 'Smart & Responsible Borrowing',
          content: `• Keep your total EMIs preferably within about 30–40% and not more than 40–50% of your monthly income
• Compare interest, processing fees, foreclosure rules and pre‑payment penalties across lenders
• Borrow mainly for productive or essential needs, not for lifestyle luxuries
• Avoid taking a new loan just to pay an old one; talk to the lender about restructuring if needed

Missing EMIs can hurt your credit score, making future borrowing more expensive or difficult.`,
        },
        {
          title: 'Avoiding a Debt Trap',
          content: `Debt trap:
• A situation where you keep borrowing more just to repay existing loans and interest
• Often caused by multiple high‑interest loans or overuse of credit cards

To stay safe:
• Limit the number of active loans and prioritise repaying high‑interest debt first
• Build a small emergency fund so that one shock does not push you to borrow again
• Seek help or counselling early if EMIs feel unmanageable`,
        },
      ],
      quiz: [
        {
          question: 'Which loan usually has the lowest interest rate for individuals?',
          options: ['Personal loan', 'Home loan', 'Credit card loan', 'Gold loan'],
          correct: 1,
          explanation:
            'Home loans are secured against property and therefore often carry lower interest than unsecured personal or credit‑card loans. [web:34][web:35][web:38]',
        },
        {
          question: 'What is “principal” in a loan?',
          options: [
            'Total interest you pay',
            'Your monthly EMI amount',
            'The original amount you borrow',
            'The processing fee',
          ],
          correct: 2,
          explanation:
            'Principal is the base amount borrowed from the lender; EMIs are structured to recover this principal along with interest over the tenure. [web:34]',
        },
        {
          question: 'Why is it risky to take one loan to repay another?',
          options: [
            'It always reduces interest',
            'It can start a debt trap',
            'Banks do not allow it',
            'It improves your credit score',
          ],
          correct: 1,
          explanation:
            'Rolling old dues into new borrowing can create a “debt trap” where interest and total obligations keep growing and become harder to manage. [web:37][web:40]',
        },
        {
          question:
            'What EMI‑to‑income level is generally seen as safer for most borrowers?',
          options: [
            'Below about 30–40% of income',
            'Around 70–80% of income',
            'Exactly 100% of income',
            'It does not matter',
          ],
          correct: 0,
          explanation:
            'Many lenders look for a debt‑to‑income or EMI‑to‑income ratio below roughly 30–40% so that repayment remains comfortable and risk of default is lower. [web:36][web:39]',
        },
      ],
    },

    hi: {
      sections: [
        {
          title: 'ऋण के मुख्य प्रकार',
          content: `पर्सनल लोन:
• किसी भी व्यक्तिगत काम के लिए (शादी, यात्रा, इलाज)
• आमतौर पर बिना गारंटी, इसलिए ब्याज ज़्यादा
• अवधि 1–5 साल

बिजनेस / मुद्रा लोन:
• छोटे व्यवसाय शुरू या बढ़ाने के लिए
• कई योजनाओं में महिलाओं को विशेष रियायत
• कुछ सीमा तक बिना गारंटी

होम लोन:
• घर खरीदने या बनाने के लिए
• प्रॉपर्टी गिरवी रखनी होती है
• लंबी अवधि (20–30 साल तक) और आमतौर पर कम ब्याज

एजुकेशन लोन:
• भारत या विदेश में उच्च शिक्षा के लिए
• अक्सर पढ़ाई पूरी होने के बाद किस्तें शुरू होती हैं
• कुछ योजनाओं में कम आय वाले छात्रों के लिए ब्याज सब्सिडी भी होती है`,
        },
        {
          title: 'ज़रूरी शब्दावली',
          content: `प्रिंसिपल:
• बैंक से लिया गया मूल ऋण राशि

इंटरस्ट रेट (ब्याज दर):
• ऋण लेने की लागत, सालाना प्रतिशत में

टेन्योर (अवधि):
• कितने समय में लोन चुकाना है – महीनों या सालों में

EMI:
• हर महीने चुकाई जाने वाली तय किस्त, जिसमें मूलधन और ब्याज दोनों शामिल होते हैं

अन्य शुल्क:
• प्रोसेसिंग फीस, लेट फीस, प्री‑क्लोजर चार्ज आदि`,
        },
        {
          title: 'जिम्मेदारी से लोन कैसे लें?',
          content: `• कोशिश करें कि आपकी कुल EMI मिलाकर आय के लगभग 30–40% से ज़्यादा न हो, और 40–50% से ऊपर न जाए
• अलग‑अलग बैंकों/एनबीएफसी के ब्याज, प्रोसेसिंग फीस और प्री‑पेमेंट नियमों की तुलना करें
• ज़रूरी या उत्पादक काम (घर, पढ़ाई, व्यवसाय) के लिए ही ज़्यादातर लोन लें, सिर्फ महंगे शौक पूरा करने के लिए नहीं
• पुराने लोन की EMI भरने के लिए नया लोन लेने की आदत न डालें; मुश्किल हो तो बैंक से री‑शेड्यूल या मोराटोरियम की बात करें

EMI मिस होने से आपका क्रेडिट स्कोर गिर सकता है, जिससे आगे लोन लेना मुश्किल और महंगा हो सकता है।`,
        },
        {
          title: 'डेट ट्रैप से कैसे बचें?',
          content: `डेट ट्रैप:
• जब आप पुराने कर्ज़ चुकाने के लिए बार‑बार नया कर्ज़ लेने लगते हैं
• कई छोटे‑छोटे हाई‑इंटरस्ट लोन और क्रेडिट‑कार्ड बकाया मिलकर बोझ बढ़ा देते हैं

बचाव के तरीके:
• एक ही समय में बहुत सारे लोन न लें; पहले ऊँची ब्याज वाले कर्ज़ जल्दी खत्म करने की कोशिश करें
• छोटा‑सा इमरजेंसी फंड बनाएं ताकि हर झटके में नया लोन न लेना पड़े
• अगर EMI संभालना कठिन लगे तो जल्दी सलाह लें, समस्या बढ़ने का इंतज़ार न करें`,
        },
      ],
      quiz: [
        {
          question: 'किस स्थिति को सुरक्षित माना जाता है?',
          options: [
            'जब आपकी EMI आय का 80% हो',
            'जब EMI आय का लगभग 40–50% से कम हो',
            'जब EMI और क्रेडिट‑कार्ड बिल पूरे वेतन के बराबर हों',
            'कोई फर्क नहीं पड़ता',
          ],
          correct: 1,
          explanation:
            'आमतौर पर सलाह दी जाती है कि कुल EMI मिलाकर आपकी मासिक आय के लगभग 40–50% से ज़्यादा न हो ताकि बाकी ज़रूरी खर्च आराम से निकल सकें। [web:36][web:39]',
        },
        {
          question:
            'पुराना कर्ज़ चुकाने के लिए बार‑बार नया लोन लेने को क्या माना जाता है?',
          options: [
            'अच्छी फाइनेंशियल योजना',
            'डेट ट्रैप (कर्ज़ के जाल) की ओर बढ़ना',
            'क्रेडिट स्कोर बढ़ाने का तरीका',
            'बिल्कुल सुरक्षित',
          ],
          correct: 1,
          explanation:
            'लगातार नया कर्ज़ लेकर पुराना कर्ज़ चुकाने से कुल ब्याज और बोझ बढ़ता जाता है, जिसे आमतौर पर डेट ट्रैप कहा जाता है। [web:37][web:40]',
        },
      ],
    },

    mr: {
      sections: [
        {
          title: 'कर्जाचे प्रकार',
          content: `पर्सनल लोन:
• लग्न, प्रवास, उपचार इ. वैयक्तिक गरजांसाठी
• बहुतेक वेळा बिनतारण, त्यामुळे व्याजदर जास्त
• मुदत साधारण 1–5 वर्षे

होम लोन:
• घर खरेदी किंवा बांधण्यासाठी
• मालमत्तेवर तारण असल्याने व्याजदर तुलनेने कमी आणि मुदत मोठी (20–30 वर्षे)`,
        },
        {
          title: 'कर्ज घेण्याचे शहाणपण',
          content: `• एकूण EMI साधारण मासिक उत्पन्नाच्या 30–40% च्या आत ठेवण्याचा प्रयत्न करा
• व्याजदर, प्रोसेसिंग फी, प्री‑पेमेन्ट नियम यांची तुलना करा
• फक्त जुने कर्ज फेडण्यासाठी नवे कर्ज घेण्याची सवय लावू नका`,
        },
      ],
      quiz: [
        {
          question: 'सुरक्षित EMI‑to‑income प्रमाण किती मानले जाते?',
          options: [
            '30–40% च्या आसपास',
            '70–80%',
            '100%',
            'काही फरक पडत नाही',
          ],
          correct: 0,
          explanation:
            'अनेक कर्जदाता EMI‑to‑income रेशो 30–40% पेक्षा कमी असावा असे पसंत करतात, जेणेकरून परतफेड सोपी राहील. [web:36][web:39]',
        },
      ],
    },

    ta: {
      sections: [
        {
          title: 'முக்கிய கடன் வகைகள்',
          content: `தனிநபர் கடன்:
• திருமணம், பயணம், சிகிச்சை போன்ற தனிப்பட்ட தேவைகளுக்கு
• பொதுவாக அடமானமில்லா, வட்டி விகிதம் அதிகம்

வீட்டு கடன்:
• வீடு வாங்க அல்லது கட்ட
• சொத்து அடமானமாக இருப்பதால் வட்டி விகிதம் குறைவு, அவகாசம் நீளம்`,
        },
        {
          title: 'பொறுப்புடன் கடன் எடுப்பது',
          content: `• மொத்த EMI உங்கள் மாத வருமானத்தின் 30–40% க்குள் இருக்கும்படி கவனிக்கவும்
• வட்டி, கட்டணங்கள், முன்கூட்டிய முடிப்பு விதிகளை ஒப்பிடுங்கள்
• பழைய கடனை அடைக்க புதிய கடன் எடுக்கும் பழக்கம் தவிர்க்கவும்`,
        },
      ],
      quiz: [
        {
          question:
            'EMI‑to‑income விகிதம் எவ்வளவு இருக்கும்போது பாதுகாப்பாக கருதப்படுகிறது?',
          options: [
            'சுமார் 30–40%',
            '70–80%',
            '100%',
            'எவ்வளவு இருந்தாலும் பரவாயில்லை',
          ],
          correct: 0,
          explanation:
            'பல கடன் வழங்குநர்கள் EMI மொத்தம் வருமானத்தின் 30–40% க்குள் இருந்தால் வசதியாக திருப்பிச் செலுத்த முடியும் எனக் கருதுகின்றனர். [web:36][web:39]',
        },
      ],
    },

    bn: {
      sections: [
        {
          title: 'মূল ঋণের ধরন',
          content: `পার্সোনাল লোন:
• বিয়ে, ভ্রমণ, চিকিৎসা ইত্যাদি ব্যক্তিগত কাজে
• সাধারণত আনসিকিউরড, তাই সুদের হার বেশি

হোম লোন:
• বাড়ি কেনা বা বানানোর জন্য
• সম্পত্তি বন্ধক থাকায় সুদের হার তুলনামূলক কম, মেয়াদ বেশি`,
        },
        {
          title: 'দায়িত্বশীলভাবে ঋণ নেওয়া',
          content: `• মোট EMI যেন মাসিক আয়ের প্রায় 30–40% এর মধ্যে থাকে, এদিকে খেয়াল রাখুন
• বিভিন্ন ব্যাংকের সুদ, ফি এবং প্রি‑পেমেন্ট নিয়ম তুলনা করুন
• পুরনো ঋণ শোধ করতে বার বার নতুন ঋণ নেওয়ার অভ্যাস এড়িয়ে চলুন`,
        },
      ],
      quiz: [
        {
          question:
            'EMI‑to‑income অনুপাত কত হলে সাধারণভাবে নিরাপদ ধরা হয়?',
          options: [
            'প্রায় 30–40%',
            '70–80%',
            '100%',
            'যতই হোক সমস্যা নেই',
          ],
          correct: 0,
          explanation:
            'অনেক ঋণদাতা EMI‑to‑income অনুপাত 30–40% এর নিচে থাকলে তা গ্রহণযোগ্য মনে করেন, যাতে কিস্তি দেওয়া সহজ থাকে। [web:36][web:39]',
        },
      ],
    },

    kn: {
      sections: [
        {
          title: 'ಮುಖ್ಯ ಸಾಲಗಳ ವಿಧಗಳು',
          content: `ವೈಯಕ್ತಿಕ ಸಾಲ:
• ಮದುವೆ, ಪ್ರಯಾಣ, ಚಿಕಿತ್ಸೆ ಇತ್ಯಾದಿ ವೈಯಕ್ತಿಕ ಅಗತ್ಯಗಳಿಗೆ
• ಸಾಮಾನ್ಯವಾಗಿ ಬಿನಾತಾಳ, ಆದ್ದರಿಂದ ಬಡ್ಡಿದರ ಜಾಸ್ತಿ

ಮನೆ ಸಾಲ:
• ಮನೆ ಖರೀದಿ ಅಥವಾ ನಿರ್ಮಾಣಕ್ಕಾಗಿ
• ಆಸ್ತಿಯ ಮೇಲೆ ತಾಳ ಇರುವುದರಿಂದ ಬಡ್ಡಿದರ ಕಡಿಮೆ, ಅವಧಿ ಜಾಸ್ತಿ`,
        },
        {
          title: 'ಜವಾಬ್ದಾರಿಯಿಂದ ಸಾಲ ತೆಗೆದುಕೊಳ್ಳುವುದು',
          content: `• ಒಟ್ಟು EMI ನಿಮ್ಮ ಮಾಸಿಕ ಆದಾಯದ 30–40% ಒಳಗೇ ಇರಲು ಪ್ರಯತ್ನಿಸಿ
• ವಿವಿಧ ಸಾಲದಾತರ ಬಡ್ಡಿದರ, ಶುಲ್ಕ, ಪ್ರಿ‑ಪೇಮೆಂಟ್ ನಿಯಮ ಹೋಲಿಸಿ ನೋಡಿ
• ಹಳೆಯ ಸಾಲ ತೀರಿಸಲು ಹೊಸ ಸಾಲ ತೆಗೆದುಕೊಳ್ಳುವ ಚಕ್ರದಲ್ಲಿ ಸಿಲುಕಬೇಡಿ`,
        },
      ],
      quiz: [
        {
          question:
            'EMI‑to‑income ಅನುপাত ಎಷ್ಟು ಇದ್ದರೆ ಸಾಮಾನ್ಯವಾಗಿ ಸುರಕ್ಷಿತ ಎಂದು ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ?',
          options: [
            'ಸುಮಾರು 30–40%',
            '70–80%',
            '100%',
            'ಎಷ್ಟು ಇದ್ದರೂ ಪರವಾಗಿಲ್ಲ',
          ],
          correct: 0,
          explanation:
            'ಅನೇಕ ಸಾಲದಾತರು EMI‑to‑income ಅನುಪಾತ 30–40% ಕ್ಕಿಂತ ಕಡಿಮೆ ಇದ್ದರೆ ಸಾಲ ತೀರಿಸಲು ಸುಲಭವಾಗುತ್ತದೆ ಎಂದು ಪರಿಗಣಿಸುತ್ತಾರೆ. [web:36][web:39]',
        },
      ],
    },
  },
};
