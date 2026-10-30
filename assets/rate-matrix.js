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
        out.push({publisher:pub,series:item.n,subject:item.s,price:price,key:pub+"|"+item.n+"|"+item.s});
      });
    });
    return out;
  }
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
    document.getElementById("publisherTotals").innerHTML="";
    rows.innerHTML=list.map(function(r){
      return '<tr><td data-label="Select"><input class="rate-select" type="checkbox" data-rate-key="'+encodeURIComponent(r.key)+'" '+(selectedSet().has(r.key)?"checked":"")+' aria-label="Select '+r.series+'"></td><td data-label="Publisher"><span class="publisher-pill">'+r.publisher+'</span></td><td data-label="Series">'+r.series+'</td><td data-label="Subject">'+r.subject+'</td><td data-label="Class rate" class="rate-col '+(r.price==null?"missing":"")+'">'+money(r.price)+'</td></tr>';
    }).join("")||'<tr><td class="empty" colspan="5">No matching catalogue rows. Try another subject or publisher.</td></tr>';
    var chosen=allRows().filter(function(r){return selectedSet().has(r.key)&&r.price!=null});
    var chosenTotal=chosen.reduce(function(sum,r){return sum+Number(r.price)},0);
    var summary=document.getElementById("selectionSummary");
    summary.hidden=!chosen.length;
    summary.innerHTML=chosen.length?'<strong>Selected books · '+chosen.length+' · '+money(chosenTotal)+'</strong><div class="selection-publishers">'+pubs.map(function(pub){var group=chosen.filter(function(r){return r.publisher===pub});if(!group.length)return "";var subtotal=group.reduce(function(sum,r){return sum+Number(r.price)},0);return '<article><span>'+pub+'</span><b>'+group.length+' '+(group.length===1?'book':'books')+'</b><strong>MRP '+money(subtotal)+'</strong></article>'}).join("")+'</div>':"";
    var message=["Class-wise catalogue rate list — Markandey Pandey Pustak Mandir",className];
    chosen.forEach(function(r){message.push(r.publisher+" | "+r.series+" | "+r.subject+": ₹"+Number(r.price).toLocaleString("en-IN"))});
    if(!chosen.length)message.push("No books selected yet. Select rows on the page to build the list.");
    message.push("SELECTED TOTAL: ₹"+chosenTotal.toLocaleString("en-IN"));
    message.push("Publisher totals are catalogue sums; please confirm the school’s adopted books and current rates.");
    var wa=document.getElementById("matrixWhatsApp");wa.textContent="Send "+className+" list on WhatsApp ↗";wa.href="https://wa.me/919500694579?text="+encodeURIComponent(message.join("\n"));
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
  document.getElementById("printMatrix").onclick=function(){window.print()};
  document.getElementById("downloadCsv").onclick=function(){
    var lines=[["Publisher","Series / title","Subject",className+" rate (INR)"].join(",")];
    filteredRows().forEach(function(r){lines.push([r.publisher,r.series,r.subject,r.price==null?"Not listed":r.price].map(function(v){return '"'+String(v).replace(/"/g,'""')+'"'}).join(","))});
    var blob=new Blob(["\ufeff"+lines.join("\r\n")],{type:"text/csv;charset=utf-8"});
    var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=className.toLowerCase().replace(/[^a-z0-9]+/g,"-")+"-subject-rate-matrix.csv";a.click();setTimeout(function(){URL.revokeObjectURL(a.href)},1000);
  };
  render();
})();
