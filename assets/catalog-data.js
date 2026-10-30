(function () {
  var phone = "919500694579";
  var catalogs = [
    {name:"Magic Mind", detail:"A Unit of Galaxy Publication", file:"MAGIC MIND CATA. FOR VIEW.pdf", cover:"assets/catalog-covers/magic-mind.jpg"},
    {name:"Galaxy Publication", detail:"Galaxy Books · Kinderquill Books", file:"GALAXY CATALOGUE DESIGN FOR VIEW.pdf", cover:"assets/catalog-covers/galaxy.jpg"},
    {name:"Coral Publication", detail:"2026–27 catalogue", file:"CORAL CATALOGUE.pdf", cover:"assets/catalog-covers/coral.jpg"}
  ];
  var series = {
    "Magic Mind":[
      {n:"Pebbles of Grammar",s:"English grammar",p:[190,240,250,290,360,400,440,450]},
      {n:"Infopedia",s:"General Knowledge",p:[170,180,180,200,220,240,250,260]},
      {n:"Manasvi Hindi Pathya Pustak",s:"Hindi",p:[240,290,320,340,360,370,380,399]},
      {n:"Manasvi Hindi Vyakaran Pathya Pustak",s:"Hindi grammar",p:[190,220,250,290,320,340,380,425]},
      {n:"Cosmos Beyond",s:"Science",p:[290,320,340,390,460,480,520,540]},
      {n:"Readquest English",s:"English reader",p:[260,280,310,330,360,380,410,440]},
      {n:"Exploring Our Society & World · Part 1",s:"Social Studies",p:[240,270,320,360,440,480,380,380]},
      {n:"Exploring Our Society & World · Part 2",s:"Social Studies",p:[null,null,null,null,null,null,360,400]},
      {n:"Earth Nest",s:"Environmental Studies",p:[340,360,380,400,420]},
      {n:"The Magic of Conversation",s:"Conversation",p:[150,160,170,180,190]}
    ],
    "Galaxy Publication":[
      {n:"Nursery Kit Set",s:"Full class kit",p:{Nursery:1830}},
      {n:"L.K.G. Kit Set",s:"Full class kit",p:{LKG:1850}},
      {n:"U.K.G. Kit Set",s:"Full class kit",p:{UKG:2240}},
      {n:"Translation Compass",s:"Translation",p:[180,180,180,180,180]},
      {n:"Learning Computer",s:"Computer",p:[240,260,280,320,340,400,425,450]},
      {n:"Cursive Time",s:"Handwriting",p:[180,180,180,200,200]},
      {n:"Understanding Social Studies",s:"Social Studies",p:[260,280,320,380,390,440,460,480]},
      {n:"Elegance English Reader",s:"English reader",p:[290,310,340,360,390,410,440,460]},
      {n:"Grow with Nature",s:"Environmental Studies",p:[380,410,460,480,490]},
      {n:"Innovative Basic English Grammar",s:"English grammar",p:[240,260,260,260,280,320,320,340]},
      {n:"My Big Drawing & Craft Book",s:"Art & Craft",p:[180,180,180,200,200,240,260,280]},
      {n:"Olympiad Maths",s:"Mathematics",p:[380,430,460,480,520,540,550,580]},
      {n:"Science for Everyone",s:"Science",p:[295,330,370,410,450,530,550,570]},
      {n:"Concept Based General Knowledge",s:"General Knowledge",p:[190,220,240,260,260,280,280,280]},
      {n:"Hindi Bhasha Pathya Pustak",s:"Hindi",p:[260,280,300,320,340,360,370,380]},
      {n:"Hindi Vyakaran",s:"Hindi grammar",p:[220,240,270,310,330,340,360,380]}
    ],
    "Coral Publication":[
      {n:"Nursery Kit Set",s:"Full class kit",p:{Nursery:1985}},
      {n:"L.K.G. Kit Set",s:"Full class kit",p:{LKG:2085}},
      {n:"U.K.G. Kit Set",s:"Full class kit",p:{UKG:2490}},
      {n:"Excellent Cursive Writing",s:"Handwriting",p:[220,220,220,240,240]},
      {n:"Focus English Grammar",s:"English grammar",p:[280,320,340,360,390,425,450,450]},
      {n:"Phoenix English Reader",s:"English reader",p:[320,340,360,390,425,450,480,495]},
      {n:"Connect with Computer",s:"Computer",p:[290,300,320,360,380,460,480,480]},
      {n:"Art & Craft",s:"Art & Craft",p:[200,200,200,220,220,260,290,320]},
      {n:"My Favourite Book of General Knowledge",s:"General Knowledge",p:[220,240,260,270,280,290,310,330]},
      {n:"Basic Mathematics",s:"Mathematics",p:[380,430,490,510,530]},
      {n:"Periwinkle · A Book of Science & Life",s:"Science",p:[320,360,385,440,480,560,599,599]},
      {n:"Social Studies",s:"Social Studies",p:[320,340,360,385,395,490,495,530]},
      {n:"Swarmini Hindi Pathya Pustak",s:"Hindi",p:[280,320,340,360,390,425,450,480]},
      {n:"Swarmini Hindi Vyakaran",s:"Hindi grammar",p:[280,300,320,340,360,380,480,480]},
      {n:"Sanskrit Shri Pathya Pustak",s:"Sanskrit",p:[200,220,240,260,280,300,320,320]},
      {n:"Eco Tour · A Book of EVS",s:"Environmental Studies",p:[340,360,390,415,440]}
    ]
  };
  window.MPPM_RATE_DATA=series;
  var classes=["Nursery","LKG","UKG"];
  for(var i=1;i<=12;i++)classes.push("Class "+i);
  var wrap=document.querySelector("#books .wrap");
  if(!wrap)return;
  wrap.innerHTML='<span class="eyebrow">01 · Publisher catalogues & class book lists</span><h2>Publisher catalogues, all in one place.</h2><p class="lede">Open or download the three supplied 2026–27 catalogues, then build a price list for multiple classes. Pick publishers, series and subjects; totals use the rates printed in the catalogs.</p><div class="publisher-catalogues">'+catalogs.map(function(c){return '<a class="publisher-catalogue" href="assets/catalogs/'+encodeURIComponent(c.file)+'" target="_blank" rel="noopener"><img src="'+c.cover+'" alt=""><span><small>'+c.detail+'</small><strong>'+c.name+'</strong><b>Open / download PDF ↗</b></span></a>'}).join("")+'</div><div class="builder-school"><label for="builderSchoolName">School name</label><input id="builderSchoolName" placeholder="Enter the school name" autocomplete="organization"></div><div class="builder-class-picker"><div><strong>Add classes to this list</strong><p>Select one or more classes.</p></div><div id="builderClassChecks" class="builder-class-checks"></div><button class="btn" id="addBuilderClasses" type="button">Add selected classes +</button><p id="builderNotice" class="builder-notice" aria-live="polite"></p></div><div id="builderClassList" class="builder-class-list"></div><div class="builder-grand-total"><div><span class="builder-overline">Selected books across all classes</span><strong>Grand total · ₹<span id="builderGrandTotal">0</span></strong><p>WhatsApp includes school, class, publisher, series, selected subjects and class totals.</p></div><a class="btn gold" id="builderWhatsApp" href="#">Send complete list on WhatsApp ↗</a></div><div class="note">Rates transcribed from the supplied catalogue PDFs. A few scanned class-price rows are unclear; those rates appear as “Check catalogue” and do not enter the totals. Confirm edition, stock and final price from the PDF before ordering.</div>';
  var style=document.createElement("style");
  style.textContent='.publisher-catalogues{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:22px 0 28px}.publisher-catalogue{display:flex;align-items:center;gap:12px;min-height:115px;padding:13px;border:1px solid #e7c77d;border-radius:15px;background:#fffaf0;color:#35200d;transition:transform .18s,box-shadow .18s}.publisher-catalogue:hover{transform:translateY(-3px);box-shadow:0 10px 24px #66380018}.publisher-catalogue img{width:68px;height:88px;object-fit:cover;border-radius:6px;background:#eee}.publisher-catalogue span{display:grid;gap:5px}.publisher-catalogue small{font-size:10px;color:#76562d}.publisher-catalogue strong{font:700 17px Georgia,serif}.publisher-catalogue b{font-size:10px;color:#9c4815}.builder-school,.builder-class-picker,.builder-class-card{background:#fff;border:1px solid #efd9af;border-radius:15px;padding:17px;margin:18px 0}.builder-school label{display:block;color:#79695e;font-weight:700;font-size:11px;margin-bottom:8px}.builder-school input{width:100%;height:45px;border:1px solid #e4cfaa;border-radius:9px;padding:0 12px;color:#351609;background:#fffdf8;font:14px "DM Sans",sans-serif}.builder-class-picker>div:first-child strong{font-size:13px}.builder-class-picker>div:first-child p{color:#79695e;font-size:12px;margin:5px 0 14px}.builder-class-checks{display:grid;grid-template-columns:repeat(5,1fr);gap:7px;margin-bottom:14px}.builder-class-check,.builder-check{display:flex;align-items:center;gap:8px;border:1px solid #f0e3cb;border-radius:9px;background:#fffdf8;padding:9px 10px;font-size:11px;line-height:1.35;color:#351609}.builder-class-check input,.builder-check input{accent-color:#a74312;flex:0 0 auto}.builder-notice{font-size:11px;color:#8f3b13;min-height:12px;margin:7px 0 0}.builder-class-card{padding:0;overflow:hidden}.builder-class-heading{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:17px;background:#54210e;color:#fff1ce}.builder-class-heading h3{font:700 22px "Playfair Display",serif;margin:0}.builder-remove{border:1px solid #ffe7b9;background:transparent;color:#fff1ce;border-radius:99px;padding:7px 11px;font-size:10px;font-weight:700;cursor:pointer}.builder-class-content{padding:17px}.builder-subhead{font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:#a45a17;font-weight:700;margin:4px 0 10px}.builder-publisher-checks{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:18px}.builder-publisher-block{border:1px solid #efd9af;border-radius:13px;margin:12px 0;overflow:hidden;background:#fffdf8}.builder-publisher-title{background:#fff2d9;padding:12px 14px;font-weight:700;font-size:13px}.builder-series-list{display:flex;flex-wrap:wrap;gap:8px;padding:12px}.builder-series-list .builder-check{width:auto}.builder-series-block{margin:0 12px 12px;border:1px solid #f0e3cb;border-radius:10px;padding:12px;background:#fff}.builder-subjects{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-top:10px}.builder-prices{width:100%;border-collapse:collapse;margin-top:12px;background:white}.builder-prices th,.builder-prices td{text-align:left;border-bottom:1px solid #f1e6d2;padding:9px;font-size:11px}.builder-prices th{background:#f8eedb;color:#65421e}.builder-prices .money{text-align:right;font-weight:700;white-space:nowrap}.builder-class-total{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;background:#fff0cf;border-top:1px solid #e7bd63;padding:14px 17px;font-weight:700;color:#77310e}.builder-empty{padding:20px;border:1px dashed #ddbd83;border-radius:12px;text-align:center;color:#79695e;font-size:13px}.builder-grand-total{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;background:#4b1b0a;color:#fff3d4;border-radius:16px;padding:22px;margin:20px 0}.builder-overline{display:block;text-transform:uppercase;letter-spacing:.12em;color:#ffd36f;font-size:10px;font-weight:700;margin-bottom:7px}.builder-grand-total strong{font:700 22px "Playfair Display",serif}.builder-grand-total p{color:#ead7bd;font-size:11px;line-height:1.6;margin:7px 0 0;max-width:620px}.builder-grand-total .btn{white-space:nowrap}@media(max-width:760px){.publisher-catalogues{grid-template-columns:1fr}.builder-class-checks{grid-template-columns:repeat(3,1fr)}.builder-publisher-checks{grid-template-columns:repeat(2,1fr)}.builder-subjects{grid-template-columns:repeat(2,1fr)}}@media(max-width:500px){.builder-class-checks{grid-template-columns:repeat(2,1fr)}.builder-class-content{padding:12px}.builder-publisher-checks{grid-template-columns:1fr}.builder-class-heading h3{font-size:19px}.builder-grand-total{padding:17px}.builder-grand-total .btn{width:100%}}';
  document.head.append(style);
  var customStyle=document.createElement("style");customStyle.textContent='.builder-custom-row{display:grid;grid-template-columns:repeat(4,minmax(120px,1fr));gap:9px;align-items:end;margin:12px 0;padding:13px;border:1px solid #efd9af;border-radius:12px;background:#fffaf0}.builder-custom-row label{display:grid;gap:6px;font-size:10px;font-weight:700;color:#79695e}.builder-custom-row input{width:100%;height:40px;border:1px solid #e4cfaa;border-radius:8px;padding:0 10px;background:#fffdf8;color:#351609;font:12px "DM Sans",sans-serif}.builder-custom-controls{grid-column:1/-1;display:flex;gap:8px;flex-wrap:wrap}.builder-remove-light{border:1px solid #e6cda5;border-radius:99px;background:white;color:#71320f;padding:9px 13px;font-size:11px;font-weight:700;cursor:pointer}@media(max-width:650px){.builder-custom-row{grid-template-columns:repeat(2,minmax(0,1fr))}}';document.head.append(customStyle);
  var checkArea=document.getElementById("builderClassChecks");
  classes.forEach(function(n,i){var label=document.createElement("label");label.className="builder-class-check";label.innerHTML='<input type="checkbox" value="'+i+'"><span>'+n+'</span>';checkArea.append(label)});
  var school=document.getElementById("builderSchoolName"),list=document.getElementById("builderClassList"),notice=document.getElementById("builderNotice"),state=new Map(),pubs=Object.keys(series);
  function price(book,cls){if(Array.isArray(book.p))return book.p[cls.indexOf("Class ")===0?Number(cls.slice(6))-1:-1]||null;return book.p[cls]||null}
  function makeCheck(text,on,change){var l=document.createElement("label");l.className="builder-check";var i=document.createElement("input");i.type="checkbox";i.checked=on;i.onchange=function(){change(i.checked)};var s=document.createElement("span");s.textContent=text;l.append(i,s);return l}
  function renderClass(cls){
    var d=state.get(cls),card=document.createElement("article");card.className="builder-class-card";
    var head=document.createElement("div");head.className="builder-class-heading";head.innerHTML="<h3>"+cls+"</h3>";
    var remove=document.createElement("button");remove.className="builder-remove";remove.type="button";remove.textContent="Remove class";remove.onclick=function(){state.delete(cls);renderAll()};head.append(remove);
    var body=document.createElement("div");body.className="builder-class-content";var h=document.createElement("div");h.className="builder-subhead";h.textContent="Select one or more publishers";body.append(h);
    var pg=document.createElement("div");pg.className="builder-publisher-checks";
    pubs.forEach(function(pub){pg.append(makeCheck(pub,d.publishers.has(pub),function(on){on?d.publishers.add(pub):d.publishers.delete(pub);renderAll()}))});body.append(pg);
    var total=0,rows=[],customRows=[];
    pubs.filter(function(p){return d.publishers.has(p)}).forEach(function(pub){
      var box=document.createElement("section");box.className="builder-publisher-block";var title=document.createElement("div");title.className="builder-publisher-title";title.textContent=pub;box.append(title);
      var sg=document.createElement("div");sg.className="builder-series-list";
      series[pub].forEach(function(book){var key=pub+"::"+book.n;sg.append(makeCheck(book.n,d.selected.has(key),function(on){if(on){d.selected.add(key);d.subjects.add(key)}else{d.selected.delete(key);d.subjects.delete(key)}renderAll()}))});box.append(sg);
      series[pub].filter(function(book){return d.selected.has(pub+"::"+book.n)}).forEach(function(book){
        var key=pub+"::"+book.n,amt=price(book,cls),part=document.createElement("div");part.className="builder-series-block";
        var sub=document.createElement("div");sub.className="builder-subjects";sub.append(makeCheck(book.s,d.subjects.has(key),function(on){on?d.subjects.add(key):d.subjects.delete(key);renderAll()}));part.append(sub);
        var table=document.createElement("table");table.className="builder-prices";table.innerHTML="<thead><tr><th>Selected series / subject</th><th class=money>Catalogue rate</th></tr></thead>";
        var tb=document.createElement("tbody"),tr=document.createElement("tr");tr.innerHTML="<td>"+book.n+" · "+book.s+"</td><td class=money>"+(amt===null?"Check catalogue":"₹"+amt.toLocaleString("en-IN"))+"</td>";tb.append(tr);table.append(tb);part.append(table);box.append(part);
        if(d.subjects.has(key)&&amt!==null){total+=amt;rows.push({pub:pub,book:book,price:amt})}
      });body.append(box)
    });
    var customHead=document.createElement("div");customHead.className="builder-subhead";customHead.textContent="Add a subject or book not in these catalogues";body.append(customHead);
    var addCustom=document.createElement("button");addCustom.type="button";addCustom.className="btn";addCustom.textContent="+ Add custom subject";addCustom.onclick=function(){d.custom.push({pub:"",series:"",subject:"",price:""});renderAll()};body.append(addCustom);
    d.custom.forEach(function(item,index){
      var row=document.createElement("div");row.className="builder-custom-row";
      [["Publisher / source","pub"],["Series / book","series"],["Subject","subject"],["Rate ₹","price"]].forEach(function(pair){var label=document.createElement("label");label.textContent=pair[0];var input=document.createElement("input");input.type=pair[1]==="price"?"number":"text";if(pair[1]==="price"){input.min="0";input.step="1"}input.value=item[pair[1]];input.placeholder=pair[1]==="price"?"0":"Enter "+pair[0].toLowerCase();input.oninput=function(){item[pair[1]]=input.value};label.append(input);row.append(label)});
      var controls=document.createElement("div");controls.className="builder-custom-controls";var update=document.createElement("button");update.type="button";update.className="btn";update.textContent="Update class total";update.onclick=renderAll;var remove=document.createElement("button");remove.type="button";remove.className="builder-remove-light";remove.textContent="Remove subject";remove.onclick=function(){d.custom.splice(index,1);renderAll()};controls.append(update,remove);row.append(controls);body.append(row);
      var amount=Number(item.price);if(item.subject.trim()&&item.series.trim()&&Number.isFinite(amount)&&amount>=0){total+=amount;customRows.push(item)}
    });
    var foot=document.createElement("div");foot.className="builder-class-total";foot.innerHTML="<span>"+cls+" total · selected catalogue rates + custom subjects</span><span>₹"+total.toLocaleString("en-IN")+"</span>";card.append(head,body,foot);return {card:card,total:total,rows:rows,customRows:customRows}
  }
  function renderAll(){
    list.replaceChildren();var grand=0,all=[];
    if(!state.size){var e=document.createElement("div");e.className="builder-empty";e.textContent="Select classes above to build a school book list.";list.append(e)}
    classes.filter(function(n){return state.has(n)}).forEach(function(n){var r=renderClass(n);list.append(r.card);grand+=r.total;all.push({cls:n,data:r})});
    document.getElementById("builderGrandTotal").textContent=grand.toLocaleString("en-IN");
    var lines=["Book-list enquiry — Markandey Pandey Pustak Mandir","School: "+(school.value.trim()||"School name not provided")];
    all.forEach(function(x){lines.push("",x.cls+" — subtotal ₹"+x.data.total.toLocaleString("en-IN"));x.data.rows.forEach(function(r){lines.push("• "+r.pub+" / "+r.book.n+" / "+r.book.s+": ₹"+r.price.toLocaleString("en-IN"))});x.data.customRows.forEach(function(r){lines.push("• Custom: "+(r.pub||"Other publisher")+" / "+r.series+" / "+r.subject+": ₹"+Number(r.price).toLocaleString("en-IN"))})});
    lines.push("","GRAND TOTAL: ₹"+grand.toLocaleString("en-IN"),"Prices are from supplied catalogues; please confirm availability and final rates.");
    document.getElementById("builderWhatsApp").href="https://wa.me/"+phone+"?text="+encodeURIComponent(lines.join("\n"));
  }
  document.getElementById("addBuilderClasses").onclick=function(){
    var selected=Array.from(checkArea.querySelectorAll("input:checked")).map(function(i){return classes[Number(i.value)]});
    if(!selected.length){notice.textContent="Choose at least one class first.";return}
    selected.forEach(function(n){if(!state.has(n))state.set(n,{publishers:new Set(),selected:new Set(),subjects:new Set(),custom:[]})});
    notice.textContent=selected.length+" class"+(selected.length===1?"":"es")+" added. Select publishers, series and subjects.";renderAll()
  };
  school.oninput=renderAll;renderAll();
})();
