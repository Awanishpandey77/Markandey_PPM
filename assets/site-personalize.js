(function () {
  "use strict";

  var id = document.body.dataset.site || "01";
  var profile = {
    "01": {
      name: "Khajani Reading School", nameHi: "खजनी रीडिंग स्कूल",
      tagline: "READ · WONDER · MAKE", taglineHi: "पढ़ें · सोचें · बनाएं",
      motto: "A good question can open a whole world.", mottoHi: "एक अच्छा सवाल नई दुनिया खोल सकता है।",
      lead: "A warm place to read, wonder and make your first big ideas.", leadHi: "पढ़ने, सोचने और अपने नए विचार बनाने की आत्मीय जगह।",
      resource: "The Reading Journal", resourceHi: "पठन डायरी", activityTitle: "Pages turn into projects", activityTitleHi: "किताबों से बनते हैं नए काम",
      welcomeTitle: "A school day with room to wonder", welcomeTitleHi: "जिज्ञासा के लिए खुला स्कूल का दिन",
      welcomeHi: "हम कहानियों, छोटे प्रयोगों और एक और सवाल पूछने के साहस से शुरुआत करते हैं। बच्चे स्नेह और अपनी रुचियाँ खोजने की खुली जगह में सीखते हैं।",
      customEn: ["Storybooks", "Number sense", "Nature study", "Art & making"],
      customHi: ["कहानी पुस्तकें", "गिनती की समझ", "प्रकृति अध्ययन", "कला और निर्माण"],
      activitiesHi: [["कहानी प्रयोगशाला", "कहानियों को चित्रों और छोटे नाटकों में बदलें।"], ["खोज की सैर", "आसपास देखकर सवाल पूछें और अपने निष्कर्ष साझा करें।"], ["रचनात्मक कोना", "संगीत, कला और मिलकर कुछ बनाने का समय।"]],
      achievementsHi: ["बाल विज्ञान मेला", "कक्षा की कहानी प्रदर्शनी", "पठन साथी सप्ताह"],
      statsHi: ["पुस्तक प्रेमी", "पठन मंडल", "शिक्षक"], imageAlt: "A Khajani school reading garden"
    },
    "02": {
      name: "Rapti STEM Academy", nameHi: "राप्ती STEM अकादमी",
      tagline: "DESIGN · BUILD · TEST", taglineHi: "डिज़ाइन · बनाएं · परखें",
      motto: "Build the answer. Test the next question.", mottoHi: "जवाब बनाओ। फिर अगला सवाल परखो।",
      lead: "A hands-on campus where ideas become models, code and useful inventions.", leadHi: "ऐसा प्रयोगशील परिसर जहाँ विचार मॉडल, कोड और उपयोगी आविष्कार बनते हैं।",
      resource: "The Mission Console", resourceHi: "मिशन अध्ययन केंद्र", activityTitle: "Learning, in build mode", activityTitleHi: "सीखना यानी बनाकर देखना",
      welcomeTitle: "Questions are our starting point", welcomeTitleHi: "हर शुरुआत एक सवाल से",
      welcomeHi: "विद्यार्थी मिलकर समाधान की रूपरेखा बनाते, नमूना तैयार करते और उसे परखते हैं। वे विचार सुधारने और अपनी खोज साझा करने का साहस सीखते हैं।",
      customEn: ["Computing", "Physics lab", "Design", "Mathematics"],
      customHi: ["कंप्यूटर अध्ययन", "भौतिकी प्रयोगशाला", "डिज़ाइन", "गणित"],
      activitiesHi: [["रोबोटिक्स पिट", "टीम चुनौती में रोबोट बनाएं, चलाएं और सुधारें।"], ["कोड स्टूडियो", "गेम और रचनात्मक कोडिंग सीखें।"], ["आकाश प्रयोगशाला", "तारों को देखें और अंतरिक्ष के मॉडल बनाएं।"]],
      achievementsHi: ["विद्यार्थी आविष्कार मेला", "रोबोटिक्स टीम चुनौती", "मौसम स्टेशन परियोजना"],
      statsHi: ["निर्माता", "निर्माण दल", "मार्गदर्शक"], imageAlt: "Students building a robotics prototype in Khajani"
    },
    "03": {
      name: "Kusumhi Grove Learning School", nameHi: "कुसम्ही ग्रोव लर्निंग स्कूल",
      tagline: "PLAY · GROW · DISCOVER", taglineHi: "खेलें · बढ़ें · खोजें",
      motto: "Find your spark. Follow it together.", mottoHi: "अपनी चमक खोजो, साथ मिलकर आगे बढ़ो।",
      lead: "A joyful, leafy place for stories, play and small brave discoveries.", leadHi: "कहानियों, खेल और नन्ही खोजों के लिए हरा-भरा, आनंदमय परिसर।",
      resource: "The Curiosity Patch", resourceHi: "जिज्ञासा की क्यारी", activityTitle: "Play is part of the plan", activityTitleHi: "खेल भी सीखने का हिस्सा है",
      welcomeTitle: "Little steps, big-hearted learning", welcomeTitleHi: "छोटे कदम, दिल से सीखना",
      welcomeHi: "बच्चे तब निडर होकर सीखते हैं जब वे सुरक्षित और समझे हुए महसूस करते हैं। खेल, कल्पना, बाहर की गतिविधियाँ और हर बच्चे को अपनी आवाज़ देने वाले काम दिन का हिस्सा हैं।",
      customEn: ["Stories", "Little maths", "Nature play", "Creative studio"],
      customHi: ["कहानी संसार", "छोटी गणित", "प्रकृति खेल", "रचनात्मक कोना"],
      activitiesHi: [["कहानी बग़ीचा", "पात्र गढ़ें और कहानी को छोटे नाटक में बदलें।"], ["नन्हे निर्माता", "कागज़ और बड़े विचारों से कुछ बनाएं।"], ["खेल का मैदान", "दौड़ें, साथ खेलें और बारी लेना सीखें।"]],
      achievementsHi: ["नन्हे निर्माताओं की प्रदर्शनी", "बग़ीचे से थाली तक सप्ताह", "परिवार कहानी मेला"],
      statsHi: ["नन्हे खोजी", "खेल स्टूडियो", "बाल मार्गदर्शक"], imageAlt: "Children exploring a green learning garden"
    },
    "04": {
      name: "Ramgarh Taal International School", nameHi: "रामगढ़ ताल इंटरनेशनल स्कूल",
      tagline: "CONNECT · QUESTION · SHARE", taglineHi: "जुड़ें · पूछें · साझा करें",
      motto: "Many perspectives. One shared future.", mottoHi: "कई नज़रिए, हमारा साझा भविष्य।",
      lead: "A bright meeting place for languages, design and ideas from near and far.", leadHi: "भाषाओं, डिज़ाइन और दूर-दूर के विचारों का उजला मिलन स्थल।",
      resource: "The Learning Atlas", resourceHi: "सीखने का एटलस", activityTitle: "Follow an idea across borders", activityTitleHi: "विचारों के नए रास्ते खोजें",
      welcomeTitle: "A wider lens on every question", welcomeTitleHi: "हर सवाल को कई नज़रियों से देखें",
      welcomeHi: "विद्यार्थी हर सवाल को कई नज़रियों से देखते हैं। खोज, कला, सार्थक बातचीत और दुनिया से जुड़ाव एक आत्मीय स्कूल समुदाय में मिलते हैं।",
      customEn: ["Languages", "Global studies", "Design", "Sciences"],
      customHi: ["भाषाएँ", "विश्व अध्ययन", "डिज़ाइन", "विज्ञान"],
      activitiesHi: [["दुनिया की आवाज़ें", "भाषाएँ सीखें, विचार रखें और ध्यान से सुनें।"], ["आने वाले कल का डिज़ाइन", "विज्ञान और रचनात्मक सोच को जोड़ें।"], ["खुला कला स्टूडियो", "काम बनाएं, प्रस्तुत करें और साझा करें।"]],
      achievementsHi: ["युवा वैश्विक संवाद", "विद्यार्थी डिज़ाइन प्रदर्शनी", "भाषा साथी कार्यक्रम"],
      statsHi: ["वैश्विक विद्यार्थी", "भाषाएँ", "शिक्षक"], imageAlt: "Students sharing ideas in a bright collaborative classroom"
    },
    "05": {
      name: "Gorakhnath Vidya Mandir", nameHi: "गोरखनाथ विद्या मंदिर",
      tagline: "ROOTED · THOUGHTFUL · OPEN", taglineHi: "जड़ों से जुड़ें · सोचें · आगे बढ़ें",
      motto: "Learn with purpose. Live with care.", mottoHi: "उद्देश्य से सीखें, संवेदना से जिएँ।",
      lead: "A thoughtful school rooted in local stories, strong study and shared care.", leadHi: "स्थानीय कहानियों, गंभीर अध्ययन और आपसी संवेदना से जुड़ा विद्यालय।",
      resource: "The Vidya Ledger", resourceHi: "विद्या सूची", activityTitle: "Knowledge lives in what we do", activityTitleHi: "ज्ञान हमारे काम में दिखता है",
      welcomeTitle: "Rooted in learning, open to possibility", welcomeTitleHi: "सीख में जड़ें, संभावनाओं के लिए खुलापन",
      welcomeHi: "हम धैर्य से पढ़ने, समुदाय के सम्मान और खोज की खुशी को महत्व देते हैं। हर विद्यार्थी अच्छी आदतें बनाता है और ज्ञान का सोच-समझकर उपयोग करना सीखता है।",
      customEn: ["Languages", "Mathematics", "Science", "Arts & culture"],
      customHi: ["भाषा और साहित्य", "गणित", "विज्ञान", "कला और संस्कृति"],
      activitiesHi: [["शास्त्रीय कला", "संगीत, नृत्य और सांस्कृतिक कथाएँ सीखें।"], ["ज्ञान गोष्ठी", "साथ पढ़ें, गहरे सवाल पूछें और साझा करें।"], ["सेवा के काम", "सीख को समुदाय की देखभाल से जोड़ें।"]],
      achievementsHi: ["भाषा संवाद सभा", "विरासत सप्ताह प्रदर्शनी", "समुदाय पठन मंडल"],
      statsHi: ["विद्यार्थी", "कला परंपराएँ", "शिक्षक"], imageAlt: "A traditional school building with a shaded courtyard"
    },
    "06": {
      name: "Khajani Greenfield Nature School", nameHi: "खजनी ग्रीनफील्ड नेचर स्कूल",
      tagline: "OBSERVE · CARE · GROW", taglineHi: "देखें · सँभालें · बढ़ें",
      motto: "Grow curious. Grow connected.", mottoHi: "जिज्ञासा बढ़े, जुड़ाव बढ़े।",
      lead: "A living classroom for field notes, garden science and outdoor confidence.", leadHi: "प्रकृति डायरी, बग़ीचे के विज्ञान और खुले आसमान में सीखने का परिसर।",
      resource: "The Field Notebook", resourceHi: "प्रकृति क्षेत्र डायरी", activityTitle: "The living world is our classroom", activityTitleHi: "जीव-जगत हमारी कक्षा है",
      welcomeTitle: "Learning belongs outdoors too", welcomeTitleHi: "सीखना बाहर भी होता है",
      welcomeHi: "प्रकृति अनगिनत सवालों से भरी है। हम कक्षा की पढ़ाई को निरीक्षण, जीवों की देखभाल और करके सीखने के आत्मविश्वास से जोड़ते हैं।",
      customEn: ["Field journal", "Ecology", "Outdoor skills", "Earth science"],
      customHi: ["क्षेत्र डायरी", "पारिस्थितिकी", "खुले मैदान के कौशल", "पृथ्वी विज्ञान"],
      activitiesHi: [["जीवंत प्रयोगशाला", "आवास देखें, बदलाव लिखें और बग़ीचे की देखभाल करें।"], ["पगडंडी दल", "सुरक्षित सैर और खेल से आत्मविश्वास बढ़ाएं।"], ["हरित निर्माता", "दोबारा उपयोग और मरम्मत से नए काम बनाएं।"]],
      achievementsHi: ["विद्यार्थी जैव-विविधता नक्शा", "परिसर खाद परियोजना", "युवा प्रकृति खोज दिवस"],
      statsHi: ["मैदानी खोजी", "जीवंत प्रयोगशालाएँ", "प्रकृति मार्गदर्शक"], imageAlt: "A forest field study beside a green learning trail"
    },
    "07": {
      name: "Betiahata Commons School", nameHi: "बेतियाहाता कॉमन्स स्कूल",
      tagline: "LISTEN · DISCUSS · BUILD", taglineHi: "सुनें · चर्चा करें · बनाएं",
      motto: "Your voice belongs in the room.", mottoHi: "इस कक्षा में आपकी आवाज़ की जगह है।",
      lead: "An open school where evidence, debate and shared work shape the day.", leadHi: "ऐसा खुला विद्यालय जहाँ तर्क, चर्चा और मिलकर काम करना दिन बनाते हैं।",
      resource: "The Commons Index", resourceHi: "कॉमन्स अध्ययन सूची", activityTitle: "Made with the whole community", activityTitleHi: "समुदाय के साथ मिलकर बनाया",
      welcomeTitle: "A seat at the table for every learner", welcomeTitleHi: "हर विद्यार्थी के लिए चर्चा में जगह",
      welcomeHi: "जब कई आवाज़ें सुनी जाती हैं तो सीख और मज़बूत होती है। विद्यार्थी स्पष्ट सवाल पूछना, प्रमाण का उपयोग करना और उपयोगी चीज़ें मिलकर बनाना सीखते हैं।",
      customEn: ["Civic studies", "Debate", "Design", "Shared reading"],
      customHi: ["नागरिक अध्ययन", "वाद-विवाद", "डिज़ाइन", "साझा पठन"],
      activitiesHi: [["कॉमन्स बहस", "ध्यान से सुनें, शोध करें और प्रमाण के साथ बात रखें।"], ["निर्माण सप्ताह", "एक उपयोगी चुनौती पर टीम बनाकर काम करें।"], ["सार्वजनिक कला दीवार", "ऐसा काम बनाएं जो पड़ोस को विद्यालय से जोड़े।"]],
      achievementsHi: ["युवा संसद प्रस्तुति", "विद्यार्थी समावेशन सप्ताह", "समुदाय डिज़ाइन चुनौती"],
      statsHi: ["समुदाय के विद्यार्थी", "विद्यार्थी मंच", "शिक्षक"], imageAlt: "A student-led discussion in a shared school space"
    },
    "08": {
      name: "Geeta Vatika Little Lanterns", nameHi: "गीता वाटिका लिटिल लैंटर्न्स",
      tagline: "READ · MAKE · GLOW", taglineHi: "पढ़ें · बनाएं · चमकें",
      motto: "Little lights. Limitless wonder.", mottoHi: "नन्ही रोशनी, अनगिनत जिज्ञासाएँ।",
      lead: "A gentle first school for stories, movement and joyful discovery.", leadHi: "कहानियों, खेल और आनंदमय खोजों के लिए बच्चों का आत्मीय पहला स्कूल।",
      resource: "The Little Story Shelf", resourceHi: "नन्ही कहानी अलमारी", activityTitle: "Small discoveries, every day", activityTitleHi: "हर दिन एक छोटी खोज",
      welcomeTitle: "A bright start for growing minds", welcomeTitleHi: "बढ़ते मन के लिए उजली शुरुआत",
      welcomeHi: "छोटे बच्चों को स्नेह, लय और खोजने की जगह चाहिए। हमारे दिन कहानियों, खेल, गतिविधियों और आत्मविश्वास बढ़ाने वाली सरल दिनचर्या से बनते हैं।",
      customEn: ["Picture stories", "Sound & language", "Number play", "Creative play"],
      customHi: ["चित्र कहानी", "ध्वनि और भाषा", "संख्या खेल", "रचनात्मक खेल"],
      activitiesHi: [["कहानी और गीत", "किताब, लय और खेल से भाषा व आत्मविश्वास बढ़ाएं।"], ["जिज्ञासु हाथ", "आकार, पानी, रेत और सरल निर्माण से खोजें।"], ["दोस्ती का मैदान", "चलें, हँसें और साथ खेलना सीखें।"]],
      achievementsHi: ["पहली कहानी प्रस्तुति", "परिवार खेल सुबह", "नन्हे खोजियों की गैलरी"],
      statsHi: ["नन्हे विद्यार्थी", "कहानी मंडल", "प्रारंभिक शिक्षक"], imageAlt: "Young children sharing a story and playful school activity"
    },
    "09": {
      name: "Taramandal Northstar School", nameHi: "तारामंडल नॉर्थस्टार स्कूल",
      tagline: "READ DEEPLY · ASK WELL", taglineHi: "ध्यान से पढ़ें · अच्छे सवाल पूछें",
      motto: "A thoughtful education for a changing world.", mottoHi: "बदलती दुनिया के लिए विचारशील शिक्षा।",
      lead: "Quiet focus, strong teaching and generous space to think deeply.", leadHi: "एकाग्रता, सशक्त शिक्षण और गहराई से सोचने की भरपूर जगह।",
      resource: "The Northstar Reading List", resourceHi: "नॉर्थस्टार पठन सूची", activityTitle: "Time and space to think well", activityTitleHi: "अच्छी सोच के लिए समय और जगह",
      welcomeTitle: "Clarity, care and room to think", welcomeTitleHi: "स्पष्टता, संवेदना और सोचने की जगह",
      welcomeHi: "हम ध्यान से पढ़ाने और हर विद्यार्थी के संपूर्ण विकास को महत्व देते हैं। विद्यार्थी गहराई से पढ़ते, सवाल पूछते, सहयोग करते और धीरे-धीरे अपने निर्णय लेना सीखते हैं।",
      customEn: ["Literature", "Research", "Sciences", "Humanities"],
      customHi: ["साहित्य", "शोध", "विज्ञान", "मानविकी"],
      activitiesHi: [["पठन बैठक", "किताबें पढ़ें और विचारशील बातचीत करें।"], ["शोध स्टूडियो", "एक सवाल को मार्गदर्शन के साथ परियोजना बनाएं।"], ["आंदोलन और खेल", "खेल से संतुलन, भरोसा और टीम भावना बढ़ाएं।"]],
      achievementsHi: ["स्वतंत्र शोध संगोष्ठी", "पठन समुदाय सम्मान", "विद्यार्थी कल्याण पहल"],
      statsHi: ["विद्यार्थी", "शोध समूह", "शिक्षक"], imageAlt: "A quiet school library set up for independent reading"
    },
    "10": {
      name: "Surajkund Arts & Science School", nameHi: "सूरजकुंड आर्ट्स एंड साइंस स्कूल",
      tagline: "MAKE · QUESTION · PERFORM", taglineHi: "बनाएं · पूछें · प्रस्तुत करें",
      motto: "A canvas for every kind of bright.", mottoHi: "हर तरह की प्रतिभा के लिए एक कैनवास।",
      lead: "A vivid studio campus where science, sound and art share the same table.", leadHi: "रंगों से भरा स्टूडियो परिसर जहाँ विज्ञान, संगीत और कला साथ आते हैं।",
      resource: "The Studio Catalogue", resourceHi: "स्टूडियो सूची", activityTitle: "Make an idea visible", activityTitleHi: "विचार को आकार दें",
      welcomeTitle: "Make, question, perform, repeat", welcomeTitleHi: "बनाएं, पूछें, प्रस्तुत करें, फिर खोजें",
      welcomeHi: "कला और विज्ञान दोनों जिज्ञासा से शुरू होते हैं। विद्यार्थी विचारों को आकार देते, परखते और प्रदर्शनी, प्रस्तुति व प्रयोगों के माध्यम से अपना काम साझा करते हैं।",
      customEn: ["Visual arts", "Music & theatre", "Studio science", "Design"],
      customHi: ["दृश्य कला", "संगीत और रंगमंच", "स्टूडियो विज्ञान", "डिज़ाइन"],
      activitiesHi: [["चित्र और छवि प्रयोगशाला", "चित्र बनाएं, छापें और प्रदर्शनी सजाएं।"], ["ध्वनि मंच", "संगीत, रंगमंच और मिलकर प्रस्तुति आज़माएं।"], ["कला × विज्ञान स्टूडियो", "निरीक्षण और कल्पना को एक प्रयोग में जोड़ें।"]],
      achievementsHi: ["युवा कलाकार खुला स्टूडियो", "विज्ञान चित्र प्रदर्शनी", "विद्यार्थी फ़िल्म संध्या"],
      statsHi: ["युवा रचनाकार", "स्टूडियो", "कलाकार शिक्षक"], imageAlt: "Students making a colourful art and science project"
    }
  }[id] || {};

  var main = document.querySelector("main");
  if (!main) return;
  var hero = main.querySelector(".hero");
  var contact = main.querySelector(".contact-band");
  if (!hero || !contact) return;

  var originalActivities = Array.from(main.querySelectorAll("#activities .home-card")).map(function (card) {
    return [card.querySelector("h3").textContent, card.querySelector("p").textContent];
  });
  var originalWelcome = main.querySelector("#welcome p:not(.kicker)");
  var originalWelcomeText = originalWelcome ? originalWelcome.textContent : "";
  var originalAchievements = Array.from(main.querySelectorAll(".achievement-strip .achievement-list article")).map(function (card) {
    var badge = card.querySelector("small");
    return { badge: badge ? badge.textContent : "", title: card.textContent.replace(badge ? badge.textContent : "", "").trim() };
  });
  var originalStats = Array.from(main.querySelectorAll(".stats-strip article")).map(function (card) {
    return { value: card.querySelector("[data-total]").dataset.total.replace(/,/g, ""), label: card.querySelector("span").textContent.replace(" · illustrative count", "").replace(" · sample", "") };
  });
  var originalSubjects = Array.from(document.querySelectorAll("#subject option")).map(function (option) { return option.value; }).filter(function (value) { return value && value !== "All subjects"; });

  function convertSection(element, label) {
    if (!element) return null;
    var segment = document.createElement("div");
    segment.className = "section-segment " + element.className.replace(/\bsection\b/g, "").trim();
    segment.dataset.segment = label;
    var style = element.getAttribute("style");
    if (style) segment.setAttribute("style", style);
    while (element.firstChild) segment.appendChild(element.firstChild);
    element.remove();
    return segment;
  }

  function wrapSection(sectionId, className, segments) {
    var section = document.createElement("section");
    section.id = sectionId;
    section.className = "page-core-section " + className;
    segments.filter(Boolean).forEach(function (segment) { section.appendChild(segment); });
    return section;
  }

  var ribbon = main.querySelector(".admission-ribbon");
  if (ribbon) hero.appendChild(ribbon);
  var ticker = main.querySelector(".matrix-ticker,.commons-marquee");
  if (ticker) hero.appendChild(ticker);

  var resources = convertSection(main.querySelector(".resources.section"), "materials");
  var activities = convertSection(main.querySelector("#activities"), "activities");
  var gallery = convertSection(main.querySelector("#gallery"), "gallery");
  var stats = convertSection(main.querySelector(".stats-strip"), "figures");
  var projects = convertSection(main.querySelector(".achievement-strip"), "projects");
  var notices = convertSection(main.querySelector("#notices"), "notices");
  var welcome = convertSection(main.querySelector("#welcome"), "welcome");
  var visit = convertSection(main.querySelector("#visit"), "location");

  var groups = {
    resources: wrapSection("resources", "page-resources", [resources]),
    life: wrapSection("activities", "page-life", [activities, gallery]),
    highlights: wrapSection("highlights", "page-highlights", [stats, projects, notices]),
    campus: wrapSection("campus", "page-campus", [welcome, visit])
  };
  var order = {
    "01": ["resources", "life", "highlights", "campus"],
    "02": ["resources", "highlights", "life", "campus"],
    "03": ["life", "resources", "campus", "highlights"],
    "04": ["resources", "campus", "life", "highlights"],
    "05": ["highlights", "resources", "life", "campus"],
    "06": ["life", "campus", "resources", "highlights"],
    "07": ["campus", "highlights", "resources", "life"],
    "08": ["life", "resources", "highlights", "campus"],
    "09": ["campus", "resources", "highlights", "life"],
    "10": ["highlights", "life", "campus", "resources"]
  };
  hero.id = "home";
  contact.id = "contact";
  contact.classList.add("page-contact");
  main.replaceChildren(hero);
  (order[id] || order["01"]).forEach(function (key) { main.appendChild(groups[key]); });
  main.appendChild(contact);
  Array.from(main.children).forEach(function (element) { element.style.order = "0"; });

  var navTargets = ["#resources", "#activities", "#highlights", "#campus", "#contact"];
  document.querySelectorAll("#links a").forEach(function (link, index) {
    if (navTargets[index]) link.href = navTargets[index];
  });
  document.querySelectorAll('a[href="#welcome"],a[href="#visit"]').forEach(function (link) { link.href = "#campus"; });
  document.querySelectorAll('a[href="#gallery"],a[href="#notices"]').forEach(function (link) { link.href = "#highlights"; });
  var localityEn = {
    "01": "Khajani", "02": "Rapti Nagar", "03": "Kusumhi",
    "04": "Ramgarh Taal", "05": "Gorakhnath", "06": "Khajani",
    "07": "Betiahata", "08": "Geeta Vatika", "09": "Taramandal", "10": "Surajkund"
  };
  var localityHi = {
    "01": "खजनी", "02": "राप्ती नगर", "03": "कुसम्ही",
    "04": "रामगढ़ ताल", "05": "गोरखनाथ", "06": "खजनी",
    "07": "बेतियाहाता", "08": "गीता वाटिका", "09": "तारामंडल", "10": "सूरजकुंड"
  };
  var locationName = (localityEn[id] || "Khajani") + ", Gorakhpur, Uttar Pradesh";
  var locationNameHi = (localityHi[id] || "खजनी") + ", गोरखपुर, उत्तर प्रदेश";
  var englishStats = originalStats;
  var englishActivities = originalActivities;
  var englishAchievements = originalAchievements.map(function (item) { return item.title; });
  var resourceSubjectMap = {};
  profile.customEn.forEach(function (subject, index) { resourceSubjectMap[subject] = profile.customHi[index]; });
  var coreSubjectMap = {
    "English": "अंग्रेज़ी", "Hindi": "हिंदी", "Numbers": "संख्याएँ", "EVS": "पर्यावरण अध्ययन",
    "Creative play": "रचनात्मक खेल", "Mathematics": "गणित", "Art & PE": "कला और शारीरिक शिक्षा",
    "Science": "विज्ञान", "Social Science": "सामाजिक विज्ञान",
    "Physics / Accountancy / History": "भौतिकी / लेखाशास्त्र / इतिहास",
    "Chemistry / Economics": "रसायन विज्ञान / अर्थशास्त्र", "Mathematics / Biology": "गणित / जीव विज्ञान"
  };
  var yearsEnglish = ["Nursery", "LKG", "UKG"].concat(Array.from({ length: 12 }, function (_, index) { return "Class " + (index + 1); }));
  var yearsHindi = ["नर्सरी", "एलकेजी", "यूकेजी"].concat(Array.from({ length: 12 }, function (_, index) { return "कक्षा " + (index + 1); }));
  var currentLanguage = "en";
  var t = {
    en: {
      nav: ["Classes & books", "Student life", "Highlights", "Campus", "Enquire"],
      bands: ["All years", "Early years", "Primary", "Middle", "Secondary", "Senior"],
      choose: "Choose a class", all: "All subjects", search: "Search book or subject…",
      print: "Print / Save as PDF", price: "sample price", details: "View details ↗",
      materialTitle: "Class notes, worksheets and learning PDFs",
      materialNote: "Books, notes and worksheets · sample links only",
      materialButton: "View class materials ↗", sample: "sample",
      level: ["EARLY YEARS", "PRIMARY", "MIDDLE", "SECONDARY", "SENIOR"],
      highlights: "Projects & milestones", highlightsCopy: "Student work and activities from this sample school.",
      campus: "School & community", welcomeBy: "A welcome from the school",
      location: "SAMPLE SCHOOL LOCATION", locationTitle: "Find us in Khajani.",
      locationCopy: "Sample location · verified street address to be added",
      directions: "Explore the sample location ↗", contact: "Talk with our school team.",
      contactCopy: "Sample enquiry link · confirm contact details before publishing.",
      whatsapp: "Start an enquiry ↗", admission: "Admissions enquiry open · sample concept",
      admissionCopy: "Ask about learning, class lists or a visit.",
      footer: "Fictional details and photos"
    },
    hi: {
      nav: ["कक्षाएँ और किताबें", "विद्यार्थी जीवन", "परियोजनाएँ", "परिसर", "पूछताछ"],
      bands: ["सभी कक्षाएँ", "प्रारंभिक", "प्राथमिक", "मध्य", "माध्यमिक", "वरिष्ठ"],
      choose: "कक्षा चुनें", all: "सभी विषय", search: "किताब या विषय खोजें…",
      print: "प्रिंट / PDF में सेव करें", price: "नमूना मूल्य", details: "विवरण देखें ↗",
      materialTitle: "कक्षा नोट्स, अभ्यास पत्र और अध्ययन PDF",
      materialNote: "किताबें, नोट्स और वर्कशीट · केवल नमूना लिंक",
      materialButton: "कक्षा सामग्री देखें ↗", sample: "नमूना",
      level: ["प्रारंभिक", "प्राथमिक", "मध्य", "माध्यमिक", "वरिष्ठ"],
      highlights: "परियोजनाएँ और उपलब्धियाँ", highlightsCopy: "इस नमूना विद्यालय के विद्यार्थियों के काम और गतिविधियाँ।",
      campus: "विद्यालय और समुदाय", welcomeBy: "विद्यालय की ओर से",
      location: "विद्यालय का नमूना स्थान", locationTitle: "खजनी में आपका स्वागत है।",
      locationCopy: "नमूना स्थान · सही पता जोड़ा जाएगा",
      directions: "नमूना स्थान देखें ↗", contact: "हमारी स्कूल टीम से बात करें।",
      contactCopy: "नमूना संपर्क लिंक · प्रकाशित करने से पहले सही विवरण जोड़ें।",
      whatsapp: "पूछताछ शुरू करें ↗", admission: "प्रवेश पूछताछ खुली है · नमूना",
      admissionCopy: "पढ़ाई, कक्षा सूची या विद्यालय भ्रमण के बारे में पूछें।",
      footer: "काल्पनिक जानकारी व तस्वीरें"
    }
  };

  function setText(selector, value) {
    var element = document.querySelector(selector);
    if (element && typeof value === "string") element.textContent = value;
  }
  function classIndex() {
    var name = document.querySelector("#class-name");
    if (!name) return 0;
    var index = yearsEnglish.indexOf(name.textContent);
    if (index < 0) index = yearsHindi.indexOf(name.textContent);
    return Math.max(index, 0);
  }
  function yearName(index) {
    return (currentLanguage === "hi" ? yearsHindi : yearsEnglish)[index] || yearsEnglish[index];
  }
  function labelSubject(subject) {
    if (currentLanguage !== "hi") return subject;
    return resourceSubjectMap[subject] || coreSubjectMap[subject] || subject;
  }
  function translateCards() {
    var hi = currentLanguage === "hi";
    var lang = t[currentLanguage];
    var year = classIndex();
    document.querySelectorAll("#books .book-card").forEach(function (card) {
      var subjectNode = card.querySelector(".book-copy small");
      var subject = card.dataset.englishSubject || (subjectNode ? subjectNode.textContent : "");
      if (!subject) return;
      card.dataset.englishSubject = subject;
      card.dataset.format = id;
      var displaySubject = labelSubject(subject);
      var copyTitle = card.querySelector(".book-copy h4");
      if (copyTitle) copyTitle.textContent = (hi ? profile.resourceHi : profile.resource) + " · " + displaySubject + " · " + yearName(year);
      if (subjectNode) subjectNode.textContent = displaySubject;
      var cover = card.querySelector(".cover");
      if (cover) {
        var coverTitle = cover.querySelector("b");
        var coverLabels = cover.querySelectorAll("span,small");
        if (coverTitle) coverTitle.textContent = displaySubject;
        if (coverLabels[0]) coverLabels[0].textContent = (hi ? localityHi[id] : localityEn[id]) + " · " + (hi ? "नमूना संस्करण" : "SAMPLE EDITION");
        if (coverLabels[1]) coverLabels[1].textContent = yearName(year) + " · " + (hi ? "अध्ययन श्रृंखला" : "LEARNING SERIES");
      }
      var price = card.querySelector(".book-bottom b small");
      if (price) price.textContent = lang.price;
      var action = card.querySelector("[data-pdf]");
      if (action) action.textContent = lang.details;
      card.dataset.searchText = (profile.resource + " " + subject).toLowerCase();
      card.dataset.cardIndex = String(Array.from(card.parentElement.children).indexOf(card) + 1);
    });
    var empty = document.querySelector("#books .empty");
    if (empty) empty.textContent = hi ? "सामग्री नहीं मिली। दूसरा शब्द खोजें।" : "No matching books. Try a different search.";
  }

  function applyLanguage(language) {
    currentLanguage = language === "hi" ? "hi" : "en";
    var hi = currentLanguage === "hi";
    var lang = t[currentLanguage];
    document.documentElement.lang = currentLanguage;
    document.title = (hi ? profile.nameHi : profile.name) + " · " + (hi ? "नमूना विद्यालय" : "school concept");
    var description = document.querySelector('meta[name="description"]');
    if (description) description.content = hi ? profile.nameHi + " · खजनी, गोरखपुर · कक्षा सामग्री और विद्यार्थी जीवन का नमूना" : profile.name + " · Khajani, Gorakhpur · sample classes, materials and student life";
    setText(".brand b", hi ? profile.nameHi : profile.name);
    setText(".brand small", (hi ? locationNameHi : locationName) + (hi ? " · विद्यालय नमूना" : " · SCHOOL WEBSITE CONCEPT"));
    setText(".hero .kicker", hi ? localityHi[id] + " · गोरखपुर · " + profile.taglineHi : profile.tagline + " · " + localityEn[id].toUpperCase() + ", GORAKHPUR");
    setText(".hero h1", hi ? profile.mottoHi : profile.motto);
    setText(".hero h1 + p", hi ? profile.leadHi : profile.lead);
    setText(".crest", profile.name.split(/\s+/).map(function (part) { return part.charAt(0); }).join("").slice(0, 3));
    document.querySelectorAll("#links a").forEach(function (link, index) { if (lang.nav[index]) link.textContent = lang.nav[index]; });
    var ribbon = document.querySelector(".admission-ribbon");
    if (ribbon) {
      setText(".admission-ribbon strong", lang.admission);
      setText(".admission-ribbon span", lang.admissionCopy);
      setText(".admission-ribbon a", hi ? "पूछें ↗" : "Enquire ↗");
    }
    setText(".resource-top .kicker", hi ? "नर्सरी → कक्षा 12 · " + profile.resourceHi : "Nursery → Class 12 · " + profile.resource);
    setText(".resource-top h2", hi ? profile.resourceHi : profile.resource);
    setText(".resource-top p", hi ? profile.nameHi + " की कक्षा सामग्री, पठन सूची और अभ्यास पत्र। कक्षा व विषय चुनकर नमूना सूची देखें।" : "Explore " + profile.name + " sample reading lists, class materials and worksheets.");
    setText("#print", lang.print);
    setText(".year-panel h3", lang.choose);
    setText(".book-heading p", hi ? "इस कक्षा की नमूना सूची · विषय चुनकर छाँटें।" : "Sample class list · choose a subject to filter.");
    var search = document.querySelector("#search");
    if (search) search.placeholder = lang.search;
    document.querySelectorAll("#bands [data-band]").forEach(function (button, index) { button.textContent = lang.bands[index]; });
    document.querySelectorAll("#years [data-year]").forEach(function (button) { button.textContent = yearName(Number(button.dataset.year)); });
    var selector = document.querySelector("#subject");
    if (selector) Array.from(selector.options).forEach(function (option) {
      option.textContent = option.value === "All subjects" ? lang.all : labelSubject(option.value);
    });
    var index = classIndex();
    setText("#class-name", yearName(index));
    var band = index < 3 ? 0 : index < 8 ? 1 : index < 11 ? 2 : index < 13 ? 3 : 4;
    setText("#level", lang.level[band] + (hi ? " · नमूना पुस्तक सूची" : " · SAMPLE BOOK LIST"));
    var strip = document.querySelector(".material-strip");
    if (strip) {
      setText(".material-strip b", "📎 " + lang.materialTitle);
      setText(".material-strip span", lang.materialNote);
      setText(".material-strip button", lang.materialButton);
    }
    setText("#activities .section-title h2", hi ? profile.activityTitleHi : profile.activityTitle);
    setText("#activities .section-title .kicker", hi ? "सीखने के नए रास्ते · " + profile.nameHi : profile.name + " · STUDENT LIFE");
    setText("#activities .section-title p", hi ? "कक्षा के बाहर सीखने के नमूना कार्यक्रम।" : "Sample programmes for learning beyond the classroom.");
    document.querySelectorAll("#activities .home-card").forEach(function (card, index) {
      var activity = hi ? profile.activitiesHi[index] : englishActivities[index];
      if (!activity) return;
      setText("#activities .home-card:nth-child(" + (index + 1) + ") h3", activity[0]);
      setText("#activities .home-card:nth-child(" + (index + 1) + ") p", activity[1]);
      setText("#activities .home-card:nth-child(" + (index + 1) + ") .kicker", hi ? "सीखने का नमूना कार्यक्रम" : profile.name.toUpperCase());
      var activityImage = card.querySelector("img");
      if (activityImage) activityImage.alt = (hi ? activity[0] + " · " + profile.nameHi : activity[0] + " at " + profile.name);
    });
    var galleryLabelsEn = ["Campus life", "Learning spaces", "Student activities", "Our community", "Creative work", "School moments"];
    var galleryLabelsHi = ["परिसर जीवन", "सीखने की जगह", "विद्यार्थी गतिविधियाँ", "हमारा समुदाय", "रचनात्मक काम", "विद्यालय के पल"];
    setText("[data-segment='gallery'] .section-title .kicker", hi ? profile.nameHi + " · परिसर डायरी" : profile.name + " · CAMPUS JOURNAL");
    setText("[data-segment='gallery'] .section-title h2", hi ? localityHi[id] + " की झलकियाँ।" : "Scenes from " + localityEn[id] + ".");
    setText("[data-segment='gallery'] .section-title p", hi ? "विद्यालय जीवन और सीखने की जगहों की नमूना तस्वीरें।" : "Sample photographs of school life and learning spaces.");
    document.querySelectorAll(".photo-grid .gallery-photo span").forEach(function (node, index) { node.textContent = (hi ? galleryLabelsHi : galleryLabelsEn)[index] || ""; });
    document.querySelectorAll(".photo-grid .gallery-photo img").forEach(function (img, index) { img.alt = (hi ? galleryLabelsHi : galleryLabelsEn)[index] + " · " + (hi ? profile.nameHi : profile.name); });
    setText("#highlights .achievement-strip .section-title .kicker", hi ? profile.nameHi + " · विद्यार्थी उपलब्धियाँ" : profile.name + " · STUDENT HIGHLIGHTS");
    setText("#highlights .achievement-strip .section-title h2", hi ? profile.achievementsHi[0] : englishAchievements[0]);
    setText("#highlights .achievement-strip .section-title p", lang.highlightsCopy);
    document.querySelectorAll("#highlights .stats-strip span").forEach(function (node, index) {
      node.textContent = (hi ? profile.statsHi[index] : englishStats[index].label) + " · " + lang.sample;
    });
    document.querySelectorAll("#highlights .achievement-list article").forEach(function (node, index) {
      var badge = node.querySelector("small");
      var title = hi ? profile.achievementsHi[index] : englishAchievements[index];
      if (badge) badge.textContent = hi ? "0" + (index + 1) + " / विद्यालय उपलब्धि" : originalAchievements[index].badge;
      node.childNodes.forEach(function (child) {
        if (child.nodeType === Node.TEXT_NODE) child.textContent = title || "";
      });
    });
    setText("#highlights [data-segment='notices'] .section-title h2", lang.highlights);
    setText("#highlights [data-segment='notices'] .section-title .kicker", hi ? profile.nameHi + " · विद्यालय समाचार" : profile.name + " · WHAT’S HAPPENING");
    setText("#highlights [data-segment='notices'] .section-title p", hi ? "विद्यालय जीवन से जुड़ी नमूना गतिविधियाँ।" : "Sample activities from school life.");
    document.querySelectorAll("#highlights .notice").forEach(function (notice, index) {
      var activity = hi ? profile.activitiesHi[index] : englishActivities[index];
      if (!activity) return;
      setText("#highlights .notice:nth-child(" + (index + 1) + ") b", activity[0]);
      setText("#highlights .notice:nth-child(" + (index + 1) + ") p", activity[1]);
    });
    setText("#campus .welcome h2", hi ? profile.welcomeTitleHi : profile.welcomeTitle);
    setText("#campus .welcome p:not(.kicker)", hi ? profile.welcomeHi : originalWelcomeText);
    setText("#campus .welcome .kicker", hi ? "विद्यालय की ओर से" : "A welcome from the school");
    setText("#campus .welcome b", hi ? "विद्यालय का स्वागत संदेश · नमूना" : "A school welcome · sample message");
    setText("#campus .maps-copy .kicker", hi ? localityHi[id] + " · विद्यालय स्थान" : localityEn[id].toUpperCase() + " · SCHOOL LOCATION");
    setText("#campus .maps-copy h2", hi ? localityHi[id] + " में आपका स्वागत है।" : "Find us in " + localityEn[id] + ".");
    setText("#campus .welcome .welcome-photo span", hi ? "प्रतिनिधि चित्र · नमूना" : "Representative portrait · sample");
    var location = document.querySelector("#campus .maps-copy p");
    if (location) location.innerHTML = "<b>" + (hi ? profile.nameHi : profile.name) + "</b><br>" + (hi ? locationNameHi : locationName) + "<br>" + lang.locationCopy;
    setText("#campus .maps-copy .btn", lang.directions);
    setText(".contact-band h2", lang.contact);
    setText(".contact-band p", lang.contactCopy);
    setText(".wa-button", lang.whatsapp);
    setText(".footer-inner b", hi ? profile.nameHi : profile.name);
    var footer = document.querySelectorAll(".footer-inner span");
    if (footer[0]) footer[0].textContent = (hi ? "विद्यालय नमूना " + id : "School concept " + id) + " · " + lang.footer;
    if (footer[1]) footer[1].textContent = hi ? "मार्कण्डेय पाण्डेय पुस्तक मंदिर की प्रस्तुति" : "Design showcase by Markandey Pandey Pustak Mandir";
    translateCards();
  }

  var map = document.querySelector("#campus iframe");
  if (map) {
    var mapQuery = encodeURIComponent(profile.name + " " + locationName);
    map.src = "https://www.google.com/maps?q=" + mapQuery + "&output=embed";
    map.title = "Sample location for " + profile.name + " in " + localityEn[id] + ", Gorakhpur";
  }
  var directions = document.querySelector("#campus .maps-copy .btn");
  if (directions) directions.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(profile.name + " " + locationName);
  document.querySelectorAll("a[href*='wa.me']").forEach(function (link) {
    link.href = "https://wa.me/919500694579?text=" + encodeURIComponent("Hello, I have an enquiry about " + profile.name + " in " + localityEn[id] + ", Gorakhpur.");
  });
  document.querySelectorAll("img").forEach(function (img) {
    if (img.closest(".hero")) img.alt = profile.imageAlt;
  });
  document.querySelectorAll("[data-total]").forEach(function (node) { node.dataset.total = node.dataset.total.replace(/,/g, ""); });
  var resource = document.querySelector("#resources");
  if (resource) {
    resource.dataset.materialPattern = id;
    resource.classList.add("resource-pattern-" + id);
  }
  var grid = document.querySelector("#books");
  if (grid) grid.classList.add("resource-grid-pattern-" + id);
  Array.from(main.children).forEach(function (element) { element.style.order = "0"; });

  function queryEnglish(query) {
    if (currentLanguage !== "hi") return query;
    var converted = query;
    Object.keys(coreSubjectMap).forEach(function (english) {
      converted = converted.replace(new RegExp(coreSubjectMap[english], "gi"), english);
    });
    Object.keys(resourceSubjectMap).forEach(function (english) {
      converted = converted.replace(new RegExp(resourceSubjectMap[english], "gi"), english);
    });
    converted = converted.replace(new RegExp(profile.resourceHi, "gi"), profile.resource);
    return converted;
  }
  window.applySchoolLanguage = applyLanguage;
  window.schoolPresentation = { translateQuery: queryEnglish };
  var search = document.querySelector("#search");
  var originalSearchHandler = search && search.oninput;
  if (search && originalSearchHandler) {
    search.oninput = function () {
      var shown = search.value;
      search.value = queryEnglish(shown);
      originalSearchHandler.call(search);
      search.value = shown;
      window.setTimeout(translateCards, 0);
    };
  }
  function preserveHindiSearch(event) {
    if (currentLanguage !== "hi") return;
    if (event.type === "click" && !event.target.closest("[data-year],[data-band]")) return;
    if (event.type === "change" && event.target.id !== "subject") return;
    var input = document.querySelector("#search");
    if (!input) return;
    var shown = input.value;
    input.value = queryEnglish(shown);
    window.setTimeout(function () { input.value = shown; translateCards(); }, 0);
  }
  document.addEventListener("click", preserveHindiSearch, true);
  document.addEventListener("change", preserveHindiSearch, true);

  var bookObserver = new MutationObserver(translateCards);
  if (grid) bookObserver.observe(grid, { childList: true });
  var yearList = document.querySelector("#years");
  if (yearList) new MutationObserver(function () {
    yearList.querySelectorAll("[data-year]").forEach(function (button) { button.textContent = yearName(Number(button.dataset.year)); });
  }).observe(yearList, { childList: true });
  var subjectSelect = document.querySelector("#subject");
  if (subjectSelect) new MutationObserver(function () {
    Array.from(subjectSelect.options).forEach(function (option) {
      option.textContent = option.value === "All subjects" ? t[currentLanguage].all : labelSubject(option.value);
    });
  }).observe(subjectSelect, { childList: true });
  var classNameNode = document.querySelector("#class-name");
  if (classNameNode) new MutationObserver(function () {
    var index = classIndex();
    var translated = yearName(index);
    if (classNameNode.textContent !== translated) classNameNode.textContent = translated;
    var bandIndex = index < 3 ? 0 : index < 8 ? 1 : index < 11 ? 2 : index < 13 ? 3 : 4;
    var levelText = t[currentLanguage].level[bandIndex] + (currentLanguage === "hi" ? " · नमूना पुस्तक सूची" : " · SAMPLE BOOK LIST");
    setText("#level", levelText);
  }).observe(classNameNode, { childList: true });
  applyLanguage("en");
})();
