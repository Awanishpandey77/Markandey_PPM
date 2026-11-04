(function(){
  var id=document.body.dataset.site||"01", body=document.body;
  if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&"IntersectionObserver" in window){
    var revealTargets=document.querySelectorAll(".section-title,.stats-strip article,.home-card,.achievement-list article,.gallery-photo,.notice,.maps-card,.book-panel");
    if(revealTargets.length){body.classList.add("motion-enabled");var revealObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add("is-visible");revealObserver.unobserve(entry.target)}})},{threshold:.12});revealTargets.forEach(function(element){element.classList.add("motion-reveal");revealObserver.observe(element)})}
  }
  try {
    var saved=localStorage.getItem("mppm-demo-theme");
    if(saved==="dark")body.classList.add("dark-mode");
    if(saved==="light")body.classList.add("light-mode");
    if(!saved&&(id==="02"||id==="09"))body.classList.add("dark-mode");
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
      "admission":"✦ School website concept by Markandey Pandey Pustak Mandir","admissionCopy":"Fictional sample details · replace with your school’s approved information.","enquire":"Discuss this design ↗",
      "resourceTitle":"Your class. Your materials.","print":"Print / Save as PDF","choose":"CHOOSE YOUR CLASS","search":"Search title or subject…",
      "activities":"Learning has many doors.","achievements":"Good work, worth sharing.","gallery":"Photos from school life.",
      "notices":"Dates to keep in mind.","location":"Your school, clearly located.","contact":"Make this direction your own.","whatsapp":"☏  Discuss a school website ↗"
    },
    hi:{
      "nav0":"कक्षाएँ और किताबें","nav1":"स्कूल जीवन","nav2":"तस्वीरें","nav3":"सूचनाएँ","nav4":"स्थान",
      "admission":"✦ मार्कण्डेय पाण्डेय पुस्तक मंदिर का वेबसाइट नमूना","admissionCopy":"काल्पनिक नमूना विवरण · स्कूल की स्वीकृत जानकारी से बदलें।","enquire":"डिज़ाइन पर चर्चा करें ↗",
      "resourceTitle":"आपकी कक्षा। आपकी अध्ययन सामग्री।","print":"प्रिंट / PDF में सेव करें","choose":"अपनी कक्षा चुनें","search":"किताब या विषय खोजें…",
      "activities":"सीखने के कई रास्ते हैं।","achievements":"अच्छे काम साझा करें।","gallery":"स्कूल जीवन की तस्वीरें।",
      "notices":"आने वाली महत्वपूर्ण तिथियाँ।","location":"स्कूल का स्थान यहाँ दिखाएँ।","contact":"इस डिज़ाइन को अपने स्कूल के लिए अपनाएँ।","whatsapp":"☏  स्कूल वेबसाइट पर चर्चा करें ↗"
    }
  };
  var languageButton=document.getElementById("language");
  if(!languageButton)return;
  var current="en";
  try{if(localStorage.getItem("mppm-demo-language")==="hi")current="hi"}catch(e){}
  function apply(){
    var t=strings[current], nav=document.querySelectorAll("#links a");
    nav.forEach(function(a,i){if(i<5)a.textContent=t["nav"+i]});
    var set=function(sel,key){var el=document.querySelector(sel);if(el)el.textContent=(current==="en"&&el.dataset.en)||t[key]};
    set(".admission-ribbon strong","admission");set(".admission-ribbon span","admissionCopy");set(".admission-ribbon a","enquire");
    set(".resource-top h2","resourceTitle");set("#print","print");set(".year-panel h3","choose");
    var search=document.getElementById("search");if(search)search.placeholder=t.search;
    set("#activities .section-title h2","activities");set(".achievement-strip .section-title h2","achievements");
    set("#gallery .section-title h2","gallery");set("#notices .section-title h2","notices");
    set(".maps-copy h2","location");set(".contact-band h2","contact");set(".wa-button","whatsapp");
    if(window.applySchoolLanguage)window.applySchoolLanguage(current);
    freshLang.textContent=current==="en"?"हिन्दी":"English";document.documentElement.lang=current;
    try{localStorage.setItem("mppm-demo-language",current)}catch(e){}
  }
  var freshLang=languageButton.cloneNode(true);languageButton.parentNode.replaceChild(freshLang,languageButton);
  freshLang.onclick=function(){current=current==="en"?"hi":"en";apply()};
  apply();
})();
