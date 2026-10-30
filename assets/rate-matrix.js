(function(){
  var data=window.MPPM_RATE_DATA;
  var pubs=Object.keys(data||{});
  var className="Class 1";
  var classes=["Nursery","LKG","UKG"];
  for(var cn=1;cn<=8;cn++)classes.push("Class "+cn);
  var catalogMeta={
    "Magic Mind":{detail:"A Unit of Galaxy Publication",file:"MAGIC MIND CATA. FOR VIEW.pdf"},
    "Galaxy Publication":{detail:"Galaxy Books · Kinderquill Books",file:"GALAXY CATALOGUE DESIGN FOR VIEW.pdf"},
    "Coral Publication":{detail:"Coral Publication",file:"CORAL CATALOGUE.pdf"}
  };
  var classTabs=document.getElementById("classTabs");
  var filter=document.getElementById("publisherFilter");
  var search=document.getElementById("searchRates");
  var rows=document.getElementById("rateRows");
  var selectedPublisher="all";
  var selections=new Map();
  function selectedSet(){if(!selections.has(className))selections.set(className,new Set());return selections.get(className)}
  pubs.forEach(function(pub){
    var opt=document.createElement("option");opt.value=pub;opt.textContent=pub;filter.append(opt);
  });
  classes.forEach(function(name,index){
    var b=document.createElement("button");b.type="button";b.textContent=name;b.dataset.class=name;b.className=name===className?"active":"";classTabs.append(b);
  });
  document.getElementById("sourceLinks").innerHTML=pubs.map(function(pub){
    var c=catalogMeta[pub];return '<a class="source-card" href="assets/catalogs/'+encodeURIComponent(c.file)+'" target="_blank" rel="noopener"><span class="source-mark">PDF</span><span><small>'+c.detail+'</small><b>'+pub+'</b><em>Open original catalogue ↗</em></span></a>';
  }).join("");
  function allRows(){
    var out=[];
    pubs.forEach(function(pub){
      (data[pub]||[]).filter(function(item){return Array.isArray(item.p)||(item.p&&typeof item.p==="object")}).forEach(function(item){
        var price=Array.isArray(item.p)?(className.indexOf("Class ")===0?(item.p[Number(className.slice(6))-1]??null):null):(item.p&&Object.prototype.hasOwnProperty.call(item.p,className)?item.p[className]:null);
        if((className==="Nursery"||className==="LKG"||className==="UKG")&&Array.isArray(item.p))return;
        if(price==null&&item.p&& !Array.isArray(item.p)&&!Object.prototype.hasOwnProperty.call(item.p,className))return;
        out.push({publisher:pub,series:item.n,subject:item.s,price:price,items:item.items||null,key:pub+"|"+item.n+"|"+item.s});
      });
    });
    return out;
  }
  function allRowsForClass(name){var previous=className;className=name;var result=allRows();className=previous;return result}
  function money(value){return value==null?"—":"₹"+Number(value).toLocaleString("en-IN")}
  function filteredRows(){
    var q=search.value.trim().toLowerCase();
    return allRows().filter(function(r){
      return (selectedPublisher==="all"||r.publisher===selectedPublisher)&&(!q||(r.publisher+" "+r.series+" "+r.subject).toLowerCase().includes(q));
    }).sort(function(a,b){return pubs.indexOf(a.publisher)-pubs.indexOf(b.publisher)||a.subject.localeCompare(b.subject)||a.series.localeCompare(b.series)});
  }
  function render(){
    var list=filteredRows();
    document.getElementById("classEyebrow").textContent=className.toUpperCase()+" RATE MATRIX";
    document.getElementById("matrixTitle").textContent="All subjects and series";
    document.getElementById("matrixCount").textContent=list.length+" catalogue entries · "+list.filter(function(x){return x.price!=null}).length+" rates listed for "+className;
    rows.innerHTML=list.map(function(r){
      return '<tr><td data-label="Select"><input class="rate-select" type="checkbox" data-rate-key="'+encodeURIComponent(r.key)+'" '+(selectedSet().has(r.key)?"checked":"")+' aria-label="Select '+r.series+'"></td><td data-label="Publisher"><span class="publisher-pill">'+r.publisher+'</span></td><td data-label="Series">'+r.series+'</td><td data-label="Subject">'+r.subject+'</td><td data-label="Class rate" class="rate-col '+(r.price==null?"missing":"")+'">'+money(r.price)+'</td></tr>';
    }).join("")||'<tr><td class="empty" colspan="5">No matching catalogue rows. Try another subject or publisher.</td></tr>';
    var chosenByClass=classes.map(function(name){var set=selections.get(name)||new Set();var items=allRowsForClass(name).filter(function(r){return set.has(r.key)&&r.price!=null});return {name:name,items:items,total:items.reduce(function(sum,r){return sum+Number(r.price)},0)}}).filter(function(x){return x.items.length});
    var chosen=allRows().filter(function(r){return selectedSet().has(r.key)&&r.price!=null});
    var chosenTotal=chosenByClass.reduce(function(sum,x){return sum+x.total},0);
    var summary=document.getElementById("selectionSummary");
    var detailRows=function(book,level){return book.items?book.items.map(function(part){return {publisher:book.publisher,series:part[0],subject:part[0],price:part[1]}}):[book]};
    chosenByClass.forEach(function(group){group.details=group.items.flatMap(function(book){return detailRows(book,group.name)}).sort(function(a,b){return a.subject.localeCompare(b.subject)});group.bookCount=group.details.length});
    var allCount=chosenByClass.reduce(function(sum,x){return sum+x.bookCount},0);
    summary.hidden=!allCount;
    summary.innerHTML=allCount?'<strong>Selected books · '+allCount+' · '+money(chosenTotal)+'</strong><div class="selection-publishers">'+chosenByClass.map(function(group){return '<article class="class-detail"><header><span>'+group.name+'</span><b>'+group.bookCount+' books</b><strong>Class total '+money(group.total)+'</strong></header><ol>'+group.details.map(function(r){return '<li><span>'+r.subject+'</span><b>'+r.series+'</b><strong>'+money(r.price)+'</strong></li>'}).join("")+'</ol></article>'}).join("")+'</div>':"";
    var schoolName=document.getElementById("schoolName").value.trim();
    var message=["Complete class-wise catalogue list — Markandey Pandey Pustak Mandir","School: "+(schoolName||"Not provided")];
    chosenByClass.forEach(function(group){message.push("",group.name+" — "+group.bookCount+" books · class total ₹"+group.total.toLocaleString("en-IN"));group.details.forEach(function(r){message.push("• "+r.subject+" — "+r.series+": ₹"+Number(r.price).toLocaleString("en-IN"))})});
    if(!allCount)message.push("No books selected yet. Select books from each class tab to build the complete list.");
    message.push("","ALL CLASSES TOTAL: ₹"+chosenTotal.toLocaleString("en-IN"));
    var rawNumber=document.getElementById("recipientNumber").value.replace(/\D/g,"");
    var targetNumber=rawNumber.length===10?"91"+rawNumber:rawNumber;
    var validNumber=targetNumber.length>=11&&targetNumber.length<=15;
    var hint=document.getElementById("whatsappHint");
    hint.textContent=!schoolName?"Enter the school name to prepare the message.":!validNumber?"Enter a valid WhatsApp number, including country code if outside India.":"Ready to open WhatsApp with the school name and selected class lists.";
    var wa=document.getElementById("matrixWhatsApp");wa.textContent="Open message in WhatsApp ↗";wa.href=schoolName&&validNumber?"https://wa.me/"+targetNumber+"?text="+encodeURIComponent(message.join("\n")):"#";wa.setAttribute("aria-disabled",String(!(schoolName&&validNumber)));
  }
  classTabs.addEventListener("click",function(e){
    var b=e.target.closest("[data-class]");if(!b)return;className=b.dataset.class;
    classTabs.querySelectorAll("button").forEach(function(x){x.classList.toggle("active",x===b)});render();
  });
  filter.addEventListener("change",function(){selectedPublisher=filter.value;render()});
  search.addEventListener("input",render);
  rows.addEventListener("change",function(e){var input=e.target.closest("[data-rate-key]");if(!input)return;var key=decodeURIComponent(input.dataset.rateKey);input.checked?selectedSet().add(key):selectedSet().delete(key);render()});
  document.getElementById("selectAllRates").onclick=function(){filteredRows().forEach(function(r){if(r.price!=null)selectedSet().add(r.key)});render()};
  document.getElementById("clearRateSelection").onclick=function(){selectedSet().clear();render()};
  document.getElementById("schoolName").addEventListener("input",render);
  document.getElementById("recipientNumber").addEventListener("input",render);
  document.getElementById("printMatrix").onclick=function(){window.print()};
  document.getElementById("downloadCsv").onclick=function(){
    var lines=[["Publisher","Series / title","Subject",className+" rate (INR)"].join(",")];
    filteredRows().forEach(function(r){lines.push([r.publisher,r.series,r.subject,r.price==null?"Not listed":r.price].map(function(v){return '"'+String(v).replace(/"/g,'""')+'"'}).join(","))});
    var blob=new Blob(["\ufeff"+lines.join("\r\n")],{type:"text/csv;charset=utf-8"});
    var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=className.toLowerCase().replace(/[^a-z0-9]+/g,"-")+"-subject-rate-matrix.csv";a.click();setTimeout(function(){URL.revokeObjectURL(a.href)},1000);
  };
  render();
})();
