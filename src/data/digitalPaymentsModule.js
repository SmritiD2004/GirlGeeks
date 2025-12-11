export const DIGITAL_PAYMENTS_MODULE = {
  title: {
    en: 'Digital Payments Safety',
    hi: 'डिजिटल भुगतान सुरक्षा',
    mr: 'डिजिटल पेमेंट सुरक्षा',
    ta: 'டிஜிட்டல் கட்டண பாதுகாப்பு',
    bn: 'ডিজিটাল পেমেন্ট নিরাপত্তা',
    kn: 'ಡಿಜಿಟಲ್ ಪಾವತಿ ಸುರಕ್ಷತೆ',
  },
  description: {
    en: 'Stay safe while making digital transactions online',
    hi: 'ऑनलाइन डिजिटल लेनदेन करते समय सुरक्षित रहें',
    mr: 'ऑनलाइन डिजिटल व्यवहार करताना सुरक्षित रहा',
    ta: 'ஆன்லைன் டிஜிட்டல் பரிவர்த்தனைகளில் பாதுகாப்பாக இருங்கள்',
    bn: 'অনলাইন ডিজিটাল লেনদেনের সময় নিরাপদ থাকুন',
    kn: 'ಆನ್‌ಲೈನ್ ಡಿಜಿಟಲ್ ವಹಿವಾಟು ಮಾಡುವಾಗ ಸುರಕ್ಷಿತವಾಗಿರಿ',
  },
  category: 'digitalPayments',
  difficulty_level: 'beginner',
  order_index: 2,
  video_url: 'https://www.youtube.com/watch?v=BH8f4oE1b6w', // replace with your own link
  thumbnail: 'https://img.youtube.com/vi/BH8f4oE1b6w/maxresdefault.jpg',
  duration_minutes: 9,
  tags: ['digital-payments', 'upi', 'safety', 'fraud-prevention'],
  prerequisites: [],
  estimated_completion_time: '20 minutes',
  practice_resources: [
    {
      en: 'RBI basic digital payments safety tips',
      hi: 'RBI की बुनियादी डिजिटल भुगतान सुरक्षा सलाह',
      url: 'https://www.rbi.org.in/commonperson/English/Scripts/FAQ_DigitalPayment.aspx',
    },
  ],

  content: {
    en: {
      sections: [
        {
          title: 'Popular Digital Payment Methods',
          content: `UPI (Unified Payments Interface):
• Fast and easy
• Usually no extra charges
• Apps: Google Pay, PhonePe, Paytm, BHIM

Mobile Banking:
• Done through your bank’s official app
• Lets you transfer money, pay bills, and check balance

Digital Wallets:
• Store small balances in apps like Paytm Wallet
• Good for quick QR code and small-value payments`,
        },
        {
          title: 'Safety Rules to Follow',
          content: `DO:
• Use secure WiFi or your mobile data for payments
• Keep your phone lock, UPI PIN, and passwords private
• Double-check the receiver’s name and amount before paying
• Report suspicious SMS, calls, or unknown transactions to your bank

DON'T:
• Share your OTP or UPI PIN with anyone, even if they say they are from the bank
• Use public WiFi (railway station, café) for financial transactions
• Click on unknown payment links from SMS/WhatsApp
• Install payment apps from unofficial or unknown sources`,
        },
        {
          title: 'Common Digital Payment Scams',
          content: `Some common tricks used by fraudsters:

• "Payment receive" scam: They send a collect request but say they are sending you money
• Fake customer care numbers on Google or social media
• Screen‑sharing apps to see your OTP or PIN
• Lottery / reward / cashback messages asking you to click a link

Safe habit: If you are unsure, do not proceed with the payment and call your bank’s official helpline.`,
        },
        {
          title: 'Good Habits for Daily Use',
          content: `Build these daily safety habits:

• Set daily or per‑transaction limits on UPI and cards
• Log out of banking apps when not in use
• Update your payment apps and phone OS regularly
• Check SMS/email alerts for every transaction and report anything unknown immediately`,
        },
      ],
      quiz: [
        {
          question: 'What should you NEVER share with anyone while using UPI?',
          options: ['Your name', 'Your bank name', 'Your OTP/UPI PIN', 'Your city'],
          correct: 2,
          explanation:
            'OTP and UPI PIN are secret authorisation codes; if someone else knows them, they can take money from your account.',
        },
        {
          question: 'Which network is safest for doing digital payments?',
          options: [
            'Public café WiFi',
            'Railway station WiFi',
            'Your own mobile data or home WiFi',
            'Any free WiFi',
          ],
          correct: 2,
          explanation:
            'Personal mobile data or trusted home WiFi is safer than open public WiFi, which can be easily misused.',
        },
        {
          question:
            'You get a collect request on UPI from an unknown person. What should you do?',
          options: [
            'Approve it to see what happens',
            'Enter your PIN and then complain',
            'Ignore or decline the request',
            'Share a screenshot with them',
          ],
          correct: 2,
          explanation:
            'Unknown collect requests are often scam attempts; declining or ignoring them keeps your account safe.',
        },
        {
          question:
            'Someone calls claiming to be from your bank and asks for your OTP to “cancel a transaction”. What is the safest response?',
          options: [
            'Share the OTP quickly so it gets cancelled',
            'Cut the call and call the bank’s official helpline yourself',
            'Ask them to WhatsApp their ID card',
            'Give only the last 4 digits of the OTP',
          ],
          correct: 1,
          explanation:
            'Banks never ask for OTP or UPI PIN on phone; cutting the call and using the official helpline protects you from fraud.',
        },
      ],
    },

    hi: {
      sections: [
        {
          title: 'लोकप्रिय डिजिटल भुगतान तरीके',
          content: `UPI:
• तेज और आसान
• आमतौर पर कोई अतिरिक्त शुल्क नहीं
• ऐप्स: Google Pay, PhonePe, Paytm, BHIM

मोबाइल बैंकिंग:
• आपके बैंक के आधिकारिक ऐप से
• पैसे ट्रांसफर, बिल भुगतान, बैलेंस देख सकते हैं

डिजिटल वॉलेट:
• Paytm Wallet जैसे ऐप में थोड़ी राशि रख सकते हैं
• छोटे और तेज़ QR पेमेंट के लिए उपयोगी`,
        },
        {
          title: 'सुरक्षा के ज़रूरी नियम',
          content: `क्या करें:
• भुगतान के लिए सुरक्षित WiFi या अपना मोबाइल डेटा इस्तेमाल करें
• फोन लॉक, UPI PIN और पासवर्ड गुप्त रखें
• भेजने से पहले प्राप्तकर्ता का नाम और राशि दोबारा जांचें
• संदिग्ध SMS, कॉल या ट्रांज़ैक्शन तुरंत बैंक को बताएं

क्या न करें:
• OTP या UPI PIN किसी को भी न बताएं, चाहे वह खुद को बैंक वाला बताए
• रेलवे स्टेशन, कैफे जैसे पब्लिक WiFi पर पेमेंट न करें
• अज्ञात लिंक पर क्लिक न करें
• अनजान स्रोतों से पेमेंट ऐप इंस्टॉल न करें`,
        },
        {
          title: 'आम डिजिटल पेमेंट ठगी के तरीके',
          content: `कुछ सामान्य धोखाधड़ी के तरीके:

• "पेमेंट रिसीव" ठगी: वे पैसे भेजने का बहाना कर के आपको कलेक्ट रिक्वेस्ट भेजते हैं
• गूगल या सोशल मीडिया पर नकली कस्टमर केयर नंबर
• स्क्रीन‑शेयरिंग ऐप से आपका OTP या PIN देखना
• लॉटरी/रिवार्ड/कैशबैक के नाम पर लिंक भेजकर क्लिक करवाना

सुरक्षित आदत: शक हो तो पेमेंट न करें और केवल बैंक के आधिकारिक नंबर पर ही बात करें।`,
        },
      ],
      quiz: [
        {
          question: 'डिजिटल भुगतान करते समय किस चीज़ को कभी साझा नहीं करना चाहिए?',
          options: ['मोबाइल नंबर', 'बैंक का नाम', 'OTP या UPI PIN', 'शहर का नाम'],
          correct: 2,
          explanation:
            'OTP और UPI PIN आपके खाते से पैसा निकालने की चाबी हैं, इन्हें किसी के साथ साझा नहीं करना चाहिए।',
        },
        {
          question:
            'आपको किसी अनजान नंबर से UPI कलेक्ट रिक्वेस्ट आती है, क्या करना सही है?',
          options: [
            'PIN डालकर रिक्वेस्ट स्वीकार कर लें',
            'पहले पैसे भेजें फिर पूछें',
            'रिक्वेस्ट को नज़रअंदाज़ या डिक्लाइन कर दें',
            'उसका स्क्रीनशॉट भेजकर कन्फर्म करें',
          ],
          correct: 2,
          explanation:
            'अनजान कलेक्ट रिक्वेस्ट अक्सर धोखाधड़ी होती हैं, इन्हें डिक्लाइन या इग्नोर करना ही सुरक्षित है।',
        },
      ],
    },

    mr: {
      sections: [
        {
          title: 'लोकप्रिय डिजिटल पेमेंट पद्धती',
          content: `UPI:
• जलद आणि सोपी
• बहुतांश वेळा अतिरिक्त शुल्क नाही
• अॅप्स: Google Pay, PhonePe, Paytm, BHIM

मोबाइल बँकिंग:
• बँकेच्या अधिकृत अॅपमधून
• पैसे ट्रान्सफर, बिल भरणे, बॅलन्स पाहणे

डिजिटल वॉलेट:
• Paytm Wallet सारख्या अॅपमध्ये थोडी रक्कम ठेवू शकता
• लहान व जलद QR पेमेंटसाठी उपयोगी`,
        },
        {
          title: 'सुरक्षिततेचे नियम',
          content: `करा:
• पेमेंटसाठी सुरक्षित WiFi किंवा स्वतःचे मोबाइल डेटा वापरा
• फोन लॉक, UPI PIN आणि पासवर्ड गुप्त ठेवा
• पैसे पाठवण्यापूर्वी नाव आणि रक्कम नीट तपासा

करू नका:
• OTP किंवा UPI PIN कोणालाही सांगू नका
• सार्वजनिक WiFi वर व्यवहार करू नका
• अज्ञात लिंकवर क्लिक करू नका`,
        },
      ],
      quiz: [
        {
          question: 'UPI वापरताना कोणती माहिती कधीही शेअर करू नये?',
          options: ['नाव', 'बँकेचे नाव', 'OTP किंवा UPI PIN', 'शहर'],
          correct: 2,
          explanation:
            'OTP आणि UPI PIN माहीत झाल्यास कोणीही तुमच्या खात्यातून पैसे काढू शकतो, म्हणून ती माहिती गुप्त ठेवावी.',
        },
      ],
    },

    ta: {
      sections: [
        {
          title: 'பிரபலமான டிஜிட்டல் கட்டண முறைகள்',
          content: `UPI:
• வேகமாகவும் எளிமையாகவும்
• பொதுவாக கூடுதல் கட்டணம் இல்லை
• செயலிகள்: Google Pay, PhonePe, Paytm, BHIM

மொபைல் வங்கிப்பணி:
• உங்கள் வங்கியின் அதிகாரப்பூர்வ செயலி மூலம்
• பணம் அனுப்ப, பில் கட்ட, இருப்பு பார்க்க முடியும்

டிஜிட்டல் வாலெட்:
• Paytm Wallet போன்ற செயலிகளில் சிறிய தொகை வைத்துக் கொள்ளலாம்
• சிறிய, விரைவான QR கட்டணங்களுக்கு உதவும்`,
        },
        {
          title: 'பாதுகாப்பு விதிகள்',
          content: `செய்ய வேண்டியது:
• பாதுகாப்பான WiFi அல்லது உங்கள் மொபைல் டேட்டாவை பயன்படுத்தவும்
• போன் லாக், UPI PIN, கடவுச்சொல் ரகசியமாக வைத்துக் கொள்ளவும்
• பணம் அனுப்பும் முன் பெயர் மற்றும் தொகையை இருமுறை சரிபார்க்கவும்

செய்யக்கூடாதது:
• OTP அல்லது UPI PIN யாரிடமும் கூற வேண்டாம்
• ரெயில் நிலையம், கஃபே போன்ற பொதுப் WiFi யில் பரிவர்த்தனை செய்ய வேண்டாம்
• தெரியாத லிங்குகளை கிளிக் செய்ய வேண்டாம்`,
        },
      ],
      quiz: [
        {
          question: 'UPI பரிவர்த்தனையில் எதை ஒருவருடனும் பகிரக்கூடாது?',
          options: ['பெயர்', 'வங்கி பெயர்', 'OTP அல்லது UPI PIN', 'நகரம்'],
          correct: 2,
          explanation:
            'OTP அல்லது UPI PIN தெரிந்தால், மோசடிக்காரர்கள் உங்கள் கணக்கிலிருந்து பணம் எடுக்கலாம்.',
        },
      ],
    },

    bn: {
      sections: [
        {
          title: 'জনপ্রিয় ডিজিটাল পেমেন্ট পদ্ধতি',
          content: `UPI:
• দ্রুত এবং সহজ
• সাধারণত অতিরিক্ত চার্জ থাকে না
• অ্যাপ: Google Pay, PhonePe, Paytm, BHIM

মোবাইল ব্যাংকিং:
• আপনার ব্যাংকের অফিসিয়াল অ্যাপ দিয়ে
• টাকা ট্রান্সফার, বিল পেমেন্ট, ব্যালেন্স দেখা যায়

ডিজিটাল ওয়ালেট:
• Paytm Wallet-এর মতো অ্যাপে ছোট অঙ্কের টাকা রাখা যায়
• ছোট, দ্রুত QR পেমেন্টের জন্য সুবিধাজনক`,
        },
        {
          title: 'গুরুত্বপূর্ণ নিরাপত্তা নিয়ম',
          content: `যা করবেন:
• নিরাপদ WiFi বা নিজের মোবাইল ডেটা ব্যবহার করুন
• ফোন লক, UPI PIN ও পাসওয়ার্ড গোপন রাখুন
• টাকা পাঠানোর আগে নাম ও টাকার অঙ্ক ঠিক আছে কি না দেখে নিন

যা করবেন না:
• OTP বা UPI PIN কারও সঙ্গে শেয়ার করবেন না
• রেলস্টেশন, ক্যাফের মতো পাবলিক WiFi-তে পেমেন্ট করবেন না
• অজানা লিঙ্কে ক্লিক করবেন না`,
        },
      ],
      quiz: [
        {
          question: 'UPI ব্যবহার করার সময় কোন তথ্য কখনও শেয়ার করা উচিত নয়?',
          options: ['নাম', 'ব্যাংকের নাম', 'OTP বা UPI PIN', 'শহরের নাম'],
          correct: 2,
          explanation:
            'OTP ও UPI PIN জেনে গেলে প্রতারক আপনার অ্যাকাউন্ট থেকে টাকা তুলে নিতে পারে, তাই এগুলো গোপন রাখা জরুরি.',
        },
      ],
    },

    kn: {
      sections: [
        {
          title: 'ಜನಪ್ರಿಯ ಡಿಜಿಟಲ್ ಪಾವತಿ ವಿಧಾನಗಳು',
          content: `UPI:
• ವೇಗವಾದ ಮತ್ತು ಸುಲಭ
• ಸಾಮಾನ್ಯವಾಗಿ ಹೆಚ್ಚುವರಿ ಶುಲ್ಕ ಇಲ್ಲ
• ಅಪ್‌ಗಳು: Google Pay, PhonePe, Paytm, BHIM

ಮೊಬೈಲ್ ಬ್ಯಾಂಕಿಂಗ್:
• ನಿಮ್ಮ ಬ್ಯಾಂಕ್‌ನ ಅಧಿಕೃತ ಅಪ್ ಮೂಲಕ
• ಹಣ ವರ್ಗಾವಣೆ, ಬಿಲ್ ಪಾವತಿ, ಬ್ಯಾಲೆನ್ಸ್ ಪರಿಶೀಲನೆ

ಡಿಜಿಟಲ್ ವಾಲೆಟ್:
• Paytm Wallet ಮುಂತಾದ ಅಪ್‌ಗಳಲ್ಲಿ ಸ್ವಲ್ಪ ಮೊತ್ತ ಇರಿಸಬಹುದು
• ಚಿಕ್ಕ ಮತ್ತು ತ್ವರಿತ QR ಪಾವತಿಗೆ ಉಪಯುಕ್ತ`,
        },
        {
          title: 'ಅಗತ್ಯ ಸುರಕ್ಷತಾ ನಿಯಮಗಳು',
          content: `ಮಾಡಬೇಕಾದವು:
• ಪಾವತಿಗಾಗಿ ಸುರಕ್ಷಿತ WiFi ಅಥವಾ ನಿಮ್ಮ ಮೊಬೈಲ್ ಡೇಟಾ ಬಳಸಿ
• ಫೋನ್ ಲಾಕ್, UPI PIN ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ರಹಸ್ಯವಾಗಿರಲಿ
• ಹಣ ಕಳುಹಿಸುವ ಮೊದಲು ಹೆಸರು ಮತ್ತು ಮೊತ್ತ ಎರಡು ಬಾರಿ ಪರಿಶೀಲಿಸಿ

ಮಾಡಬಾರದವು:
• OTP ಅಥವಾ UPI PIN ಯಾರಿಗೂ ಹೇಳಬೇಡಿ
• ರೈಲು ನಿಲ್ದಾಣ, ಕ್ಯಾಫೆ போன்ற Public WiFi ನಲ್ಲಿ ವ್ಯವಹಾರ ಮಾಡಬೇಡಿ
• ಅಪರಿಚಿತ ಲಿಂಕ್‌ಗಳಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಬೇಡಿ`,
        },
      ],
      quiz: [
        {
          question: 'UPI ಬಳಕೆ ಮಾಡುವಾಗ ಏನನ್ನು ಯಾವತ್ತೂ ಹಂಚಿಕೊಳ್ಳಬಾರದು?',
          options: ['ಹೆಸರು', 'ಬ್ಯಾಂಕ್ ಹೆಸರು', 'OTP ಅಥವಾ UPI PIN', 'ನಗರದ ಹೆಸರು'],
          correct: 2,
          explanation:
            'OTP ಮತ್ತು UPI PIN ಗೊತ್ತಾದರೆ ಮೋಸಗಾರರು ನಿಮ್ಮ ಖಾತೆಯಿಂದ ಹಣ ತೆಗೆದುಕೊಳ್ಳಬಹುದು, ಆದ್ದರಿಂದ ಅವನ್ನು ಗುಪ್ತವಾಗಿರಿಸಬೇಕು.',
        },
      ],
    },
  },
};
