(function(){
  var id=document.body.dataset.site||"01", body=document.body;
  try {
    var saved=localStorage.getItem("mppm-demo-theme");
    if(saved==="dark")body.classList.add("dark-mode");
    if(saved==="light")body.classList.add("light-mode");
  } catch(e) {}
  var mode=document.getElementById("mode");
  if(mode){
    var fresh=mode.cloneNode(true);mode.parentNode.replaceChild(fresh,mode);
    fresh.setAttribute("aria-label","Switch between dark and light appearance");
    fresh.title="Switch appearance";
    fresh.onclick=function(){
      var dark=body.classList.contains("dark-mode")||(!body.classList.contains("light-mode")&&(id==="02"||id==="09"));
      body.classList.remove("dark-mode","light-mode");
      body.classList.add(dark?"light-mode":"dark-mode");
      try{localStorage.setItem("mppm-demo-theme",dark?"light":"dark")}catch(e){}
    };
  }
  document.querySelectorAll("img").forEach(function(img,i){img.decoding="async";if(i>0&&!img.loading)img.loading="lazy"});var heroImage=document.querySelector(".hero img");if(heroImage)heroImage.fetchPriority="high";
  var strings={
    en:{
      "nav0":"Classes & books","nav1":"School life","nav2":"Photos","nav3":"Notices","nav4":"Location",
      "admission":"✦ Admissions enquiry open for 2026–27","admissionCopy":"Ask about classes, book lists or campus visits.","enquire":"Enquire ↗",
      "resourceTitle":"Your class. Your materials.","print":"Print / Save as PDF","choose":"CHOOSE YOUR CLASS","search":"Search title or subject…",
      "activities":"Learning has many doors.","achievements":"Good work, worth sharing.","gallery":"Photos from school life.",
      "notices":"Dates to keep in mind.","location":"Find your way here.","contact":"Ask us on WhatsApp.","whatsapp":"☏  Start an enquiry ↗"
    },
    hi:{
      "nav0":"कक्षाएँ और किताबें","nav1":"स्कूल जीवन","nav2":"तस्वीरें","nav3":"सूचनाएँ","nav4":"स्थान",
      "admission":"✦ 2026–27 के लिए प्रवेश पूछताछ खुली है","admissionCopy":"कक्षाओं, किताबों की सूची या स्कूल भ्रमण के बारे में पूछें।","enquire":"पूछें ↗",
      "resourceTitle":"आपकी कक्षा। आपकी अध्ययन सामग्री।","print":"प्रिंट / PDF में सेव करें","choose":"अपनी कक्षा चुनें","search":"किताब या विषय खोजें…",
      "activities":"सीखने के कई रास्ते हैं।","achievements":"अच्छे काम साझा करें।","gallery":"स्कूल जीवन की तस्वीरें।",
      "notices":"आने वाली महत्वपूर्ण तिथियाँ।","location":"यहाँ पहुँचें।","contact":"WhatsApp पर पूछें।","whatsapp":"☏  पूछताछ शुरू करें ↗"
    }
  };
  var languageButton=document.getElementById("language");
  if(!languageButton)return;
  var current="en";
  try{if(localStorage.getItem("mppm-demo-language")==="hi")current="hi"}catch(e){}
  function apply(){
    var t=strings[current], nav=document.querySelectorAll("#links a");
    nav.forEach(function(a,i){if(i<5)a.textContent=t["nav"+i]});
    var set=function(sel,key){var el=document.querySelector(sel);if(el)el.textContent=t[key]};
    set(".admission-ribbon strong","admission");set(".admission-ribbon span","admissionCopy");set(".admission-ribbon a","enquire");
    set(".resource-top h2","resourceTitle");set("#print","print");set(".year-panel h3","choose");
    var search=document.getElementById("search");if(search)search.placeholder=t.search;
    set("#activities .section-title h2","activities");set(".achievement-strip .section-title h2","achievements");
    set("#gallery .section-title h2","gallery");set("#notices .section-title h2","notices");
    set(".maps-copy h2","location");set(".contact-band h2","contact");set(".wa-button","whatsapp");
    languageButton.textContent=current==="en"?"हिन्दी":"English";document.documentElement.lang=current;
    try{localStorage.setItem("mppm-demo-language",current)}catch(e){}
  }
  var freshLang=languageButton.cloneNode(true);languageButton.parentNode.replaceChild(freshLang,languageButton);
  freshLang.onclick=function(){current=current==="en"?"hi":"en";apply()};
  apply();
})();
