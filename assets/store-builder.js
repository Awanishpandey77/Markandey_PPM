(() => {
  const phone = "919500694579";
  const publishers = [
    "NCERT", "S. Chand", "Oxford University Press", "Madhubun", "Ratna Sagar",
    "Orient BlackSwan", "Evergreen Publications", "Full Marks", "Oswaal Books", "Together With"
  ];
  const seriesByPublisher = {
    "NCERT": ["Learning Path", "Smart Steps"],
    "S. Chand": ["Foundation", "Success Track", "Bright Minds"],
    "Oxford University Press": ["New Pathways", "Explore & Learn"],
    "Madhubun": ["Skill Builder", "Smart Start", "EduWorld"],
    "Ratna Sagar": ["Living Science", "Learning Ladder"],
    "Orient BlackSwan": ["New Sparks", "Progressive Learning", "Active Learner"],
    "Evergreen Publications": ["Evergreen Series", "Knowledge Tree"],
    "Full Marks": ["Full Marks Series", "Exam Ready", "Achievers"],
    "Oswaal Books": ["Practice Books", "Question Bank"],
    "Together With": ["Together With Series", "Score More", "Study Companion"]
  };
  const subjects = ["English", "Hindi", "Mathematics", "Science / EVS", "Social Studies", "Computer Studies", "General Knowledge"];
  const classes = ["Nursery", "LKG", "UKG", ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`)];

  const bookSection = document.querySelector("#books .wrap");
  bookSection.innerHTML = `
    <span class="eyebrow">01 · Build your school book list</span>
    <h2>Build a complete book list for your school.</h2>
    <p class="lede">Enter the school, add one or more classes, then select multiple publishers, series and subjects inside each class. The page totals each class and the full list.</p>
    <div class="builder-school"><label for="builderSchoolName">School name</label><input id="builderSchoolName" type="text" placeholder="Enter the school name" autocomplete="organization"></div>
    <div class="builder-class-picker"><div><strong>Add classes to this list</strong><p>Select as many classes as you need.</p></div><div id="builderClassChecks" class="builder-class-checks"></div><button class="btn" id="addBuilderClasses" type="button">Add selected classes +</button><p id="builderNotice" class="builder-notice" aria-live="polite"></p></div>
    <div id="builderClassList" class="builder-class-list"></div>
    <div class="builder-grand-total"><div><span class="builder-overline">Complete selected book list</span><strong>Grand total · sample estimate ₹<span id="builderGrandTotal">0</span></strong><p>WhatsApp will include the school, each class, every selected publisher and series, subject prices, class totals and grand total.</p></div><a class="btn gold" id="builderWhatsApp" href="#">Build WhatsApp price list ↗</a></div>
    <div class="note">This is a sample calculator. Publisher series labels and prices are illustrative examples, not confirmed editions or quotations. Replace them with your actual book names and price list before taking orders.</div>`;

  const extraStyle = document.createElement("style");
  extraStyle.textContent = `
    .builder-school,.builder-class-picker,.builder-class-card{background:#fff;border:1px solid #efd9af;border-radius:15px;padding:17px;margin:18px 0}
    .builder-school label{display:block;color:#79695e;font-weight:700;font-size:11px;margin-bottom:8px}
    .builder-school input{width:100%;height:45px;border:1px solid #e4cfaa;border-radius:9px;padding:0 12px;color:#351609;background:#fffdf8;font:14px "DM Sans",sans-serif}
    .builder-class-picker>div:first-child strong{font-size:13px}.builder-class-picker>div:first-child p{color:#79695e;font-size:12px;margin:5px 0 14px}
    .builder-class-checks{display:grid;grid-template-columns:repeat(5,1fr);gap:7px;margin-bottom:14px}
    .builder-class-check,.builder-check{display:flex;align-items:center;gap:8px;border:1px solid #f0e3cb;border-radius:9px;background:#fffdf8;padding:9px 10px;font-size:11px;line-height:1.35;color:#351609}
    .builder-class-check input,.builder-check input{accent-color:#a74312;flex:0 0 auto}
    .builder-notice{font-size:11px;color:#8f3b13;min-height:12px;margin:7px 0 0}
    .builder-class-card{padding:0;overflow:hidden}.builder-class-heading{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:17px;background:#54210e;color:#fff1ce}.builder-class-heading h3{font:700 22px "Playfair Display",serif;margin:0}.builder-remove{border:1px solid #ffe7b9;background:transparent;color:#fff1ce;border-radius:99px;padding:7px 11px;font-size:10px;font-weight:700;cursor:pointer}
    .builder-class-content{padding:17px}.builder-subhead{font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:#a45a17;font-weight:700;margin:4px 0 10px}
    .builder-publisher-checks{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:18px}.builder-publisher-block{border:1px solid #efd9af;border-radius:13px;margin:12px 0;overflow:hidden;background:#fffdf8}.builder-publisher-title{background:#fff2d9;padding:12px 14px;font-weight:700;font-size:13px}.builder-series-list{display:flex;flex-wrap:wrap;gap:8px;padding:12px}.builder-series-list .builder-check{width:auto}.builder-series-block{margin:0 12px 12px;border:1px solid #f0e3cb;border-radius:10px;padding:12px;background:#fff}.builder-subjects{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-top:10px}.builder-prices{width:100%;border-collapse:collapse;margin-top:12px;background:white}.builder-prices th,.builder-prices td{text-align:left;border-bottom:1px solid #f1e6d2;padding:9px;font-size:11px}.builder-prices th{background:#f8eedb;color:#65421e}.builder-prices .money{text-align:right;font-weight:700;white-space:nowrap}.builder-class-total{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;background:#fff0cf;border-top:1px solid #e7bd63;padding:14px 17px;font-weight:700;color:#77310e}.builder-empty{padding:20px;border:1px dashed #ddbd83;border-radius:12px;text-align:center;color:#79695e;font-size:13px}
    .builder-grand-total{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;background:#4b1b0a;color:#fff3d4;border-radius:16px;padding:22px;margin:20px 0}.builder-overline{display:block;text-transform:uppercase;letter-spacing:.12em;color:#ffd36f;font-size:10px;font-weight:700;margin-bottom:7px}.builder-grand-total strong{font:700 22px "Playfair Display",serif}.builder-grand-total p{color:#ead7bd;font-size:11px;line-height:1.6;margin:7px 0 0;max-width:620px}.builder-grand-total .btn{white-space:nowrap}
    @media(max-width:760px){.builder-class-checks{grid-template-columns:repeat(3,1fr)}.builder-publisher-checks{grid-template-columns:repeat(2,1fr)}.builder-subjects{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:500px){.builder-class-checks{grid-template-columns:repeat(2,1fr)}.builder-class-content{padding:12px}.builder-publisher-checks{grid-template-columns:1fr}.builder-class-heading h3{font-size:19px}.builder-grand-total{padding:17px}.builder-grand-total .btn{width:100%}}
  `;
  document.head.append(extraStyle);

  const classCheckArea = document.getElementById("builderClassChecks");
  classes.forEach((className, index) => {
    const label = document.createElement("label");
    label.className = "builder-class-check";
    label.innerHTML = `<input type="checkbox" value="${index}"><span>${className}</span>`;
    classCheckArea.append(label);
  });

  const schoolInput = document.getElementById("builderSchoolName");
  const classList = document.getElementById("builderClassList");
  const notice = document.getElementById("builderNotice");
  const classState = new Map();

  function classRank(className) {
    const n = Number(className.replace("Class ", ""));
    if (Number.isFinite(n)) return n + 2;
    return className === "Nursery" ? 0 : className === "LKG" ? 1 : 2;
  }
  function getSeries(classData, publisher) {
    if (!classData.series.has(publisher)) classData.series.set(publisher, new Set([seriesByPublisher[publisher][0]]));
    return classData.series.get(publisher);
  }
  function getSubjects(classData, publisher, series) {
    const key = `${publisher}::${series}`;
    if (!classData.subjects.has(key)) classData.subjects.set(key, new Set(subjects));
    return classData.subjects.get(key);
  }
  function samplePrice(className, publisher, series, subject) {
    const c = classRank(className);
    const p = publishers.indexOf(publisher);
    const s = seriesByPublisher[publisher].indexOf(series);
    const b = subjects.indexOf(subject);
    return 95 + c * 13 + (p % 4) * 11 + s * 9 + b * 9;
  }
  function makeCheck(text, checked, onChange) {
    const label = document.createElement("label");
    label.className = "builder-check";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = checked;
    const span = document.createElement("span");
    span.textContent = text;
    input.addEventListener("change", () => onChange(input.checked));
    label.append(input, span);
    return label;
  }
  function renderClass(className) {
    const state = classState.get(className);
    const card = document.createElement("article");
    card.className = "builder-class-card";
    const heading = document.createElement("div");
    heading.className = "builder-class-heading";
    heading.innerHTML = `<h3>${className}</h3>`;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "builder-remove";
    remove.textContent = "Remove class";
    remove.addEventListener("click", () => { classState.delete(className); renderAll(); });
    heading.append(remove);
    const content = document.createElement("div");
    content.className = "builder-class-content";
    const publisherLabel = document.createElement("div");
    publisherLabel.className = "builder-subhead";
    publisherLabel.textContent = "Choose one or more publishers";
    content.append(publisherLabel);
    const publisherGrid = document.createElement("div");
    publisherGrid.className = "builder-publisher-checks";
    publishers.forEach((publisher) => {
      publisherGrid.append(makeCheck(publisher, state.publishers.has(publisher), (selected) => {
        if (selected) state.publishers.add(publisher);
        else state.publishers.delete(publisher);
        renderAll();
      }));
    });
    content.append(publisherGrid);

    let classTotal = 0;
    const priceRows = [];
    publishers.filter((publisher) => state.publishers.has(publisher)).forEach((publisher) => {
      const publisherBlock = document.createElement("section");
      publisherBlock.className = "builder-publisher-block";
      const publisherTitle = document.createElement("div");
      publisherTitle.className = "builder-publisher-title";
      publisherTitle.textContent = publisher;
      publisherBlock.append(publisherTitle);
      const seriesLabel = document.createElement("div");
      seriesLabel.className = "builder-subhead";
      seriesLabel.style.padding = "12px 12px 0";
      seriesLabel.textContent = "Select series (multiple allowed)";
      publisherBlock.append(seriesLabel);
      const seriesGrid = document.createElement("div");
      seriesGrid.className = "builder-series-list";
      seriesByPublisher[publisher].forEach((series) => {
        seriesGrid.append(makeCheck(series, getSeries(state, publisher).has(series), (selected) => {
          const selectedSeries = getSeries(state, publisher);
          if (selected) selectedSeries.add(series);
          else selectedSeries.delete(series);
          renderAll();
        }));
      });
      publisherBlock.append(seriesGrid);
      const selectedSeries = [...getSeries(state, publisher)];
      selectedSeries.forEach((series) => {
        const seriesBlock = document.createElement("div");
        seriesBlock.className = "builder-series-block";
        const seriesTitle = document.createElement("div");
        seriesTitle.className = "builder-subhead";
        seriesTitle.textContent = `${series} · choose subjects`;
        seriesBlock.append(seriesTitle);
        const subjectGrid = document.createElement("div");
        subjectGrid.className = "builder-subjects";
        subjects.forEach((subject) => {
          subjectGrid.append(makeCheck(subject, getSubjects(state, publisher, series).has(subject), (selected) => {
            const selectedSubjects = getSubjects(state, publisher, series);
            if (selected) selectedSubjects.add(subject);
            else selectedSubjects.delete(subject);
            renderAll();
          }));
        });
        seriesBlock.append(subjectGrid);
        const selectedSubjects = [...getSubjects(state, publisher, series)];
        const table = document.createElement("table");
        table.className = "builder-prices";
        table.innerHTML = "<thead><tr><th>Selected subject</th><th class=money>Sample price</th></tr></thead>";
        const tbody = document.createElement("tbody");
        let seriesTotal = 0;
        selectedSubjects.forEach((subject) => {
          const price = samplePrice(className, publisher, series, subject);
          seriesTotal += price;
          const tr = document.createElement("tr");
          tr.innerHTML = `<td>${subject}</td><td class="money">₹${price.toLocaleString("en-IN")}</td>`;
          tbody.append(tr);
          priceRows.push({ publisher, series, subject, price });
        });
        if (!selectedSubjects.length) {
          const tr = document.createElement("tr");
          tr.innerHTML = '<td colspan="2">No subjects selected for this series.</td>';
          tbody.append(tr);
        }
        table.append(tbody);
        seriesBlock.append(table);
        const total = document.createElement("div");
        total.className = "builder-class-total";
        total.innerHTML = `<span>${series} subject total</span><span>₹${seriesTotal.toLocaleString("en-IN")}</span>`;
        seriesBlock.append(total);
        classTotal += seriesTotal;
        publisherBlock.append(seriesBlock);
      });
      content.append(publisherBlock);
    });

    const footer = document.createElement("div");
    footer.className = "builder-class-total";
    footer.innerHTML = `<span>${className} total · all selected publishers and series</span><span>₹${classTotal.toLocaleString("en-IN")}</span>`;
    card.append(heading, content, footer);
    return { card, total: classTotal, priceRows };
  }

  function renderAll() {
    classList.replaceChildren();
    let grandTotal = 0;
    const allRows = [];
    if (!classState.size) {
      const empty = document.createElement("div");
      empty.className = "builder-empty";
      empty.textContent = "Select one or more classes above to start building the school book list.";
      classList.append(empty);
    }
    classes.filter((name) => classState.has(name)).forEach((className) => {
      const result = renderClass(className);
      classList.append(result.card);
      grandTotal += result.total;
      allRows.push({ className, rows: result.priceRows, total: result.total });
    });
    document.getElementById("builderGrandTotal").textContent = grandTotal.toLocaleString("en-IN");
    const school = schoolInput.value.trim() || "School name not provided";
    const lines = ["School book-list request — Markandey Pandey Pustak Mandir", `School: ${school}`];
    allRows.forEach(({ className, rows, total }) => {
      lines.push("", `${className} — class total ₹${total.toLocaleString("en-IN")}`);
      let lastPair = "";
      rows.forEach(({ publisher, series, subject, price }) => {
        const pair = `${publisher} / ${series}`;
        if (pair !== lastPair) lines.push(`  ${pair}:`);
        lines.push(`    • ${subject}: ₹${price.toLocaleString("en-IN")}`);
        lastPair = pair;
      });
    });
    lines.push("", `SAMPLE ESTIMATE GRAND TOTAL: ₹${grandTotal.toLocaleString("en-IN")}`, "Please confirm actual editions, availability and current prices.");
    const whatsapp = document.getElementById("builderWhatsApp");
    whatsapp.href = `https://wa.me/${phone}?text=${encodeURIComponent(lines.join("\n"))}`;
    whatsapp.setAttribute("aria-label", `Send full selected book price list on WhatsApp; sample total rupees ${grandTotal}`);
  }

  document.getElementById("addBuilderClasses").addEventListener("click", () => {
    const selected = [...classCheckArea.querySelectorAll("input:checked")].map((input) => classes[Number(input.value)]);
    if (!selected.length) {
      notice.textContent = "Choose at least one class first.";
      return;
    }
    selected.forEach((className) => {
      if (!classState.has(className)) {
        classState.set(className, {
          publishers: new Set([publishers[0]]),
          series: new Map([[publishers[0], new Set([seriesByPublisher[publishers[0]][0]])]]),
          subjects: new Map()
        });
      }
    });
    notice.textContent = `${selected.length} class${selected.length === 1 ? "" : "es"} added. Choose publishers, series and subjects in each class panel.`;
    renderAll();
  });
  schoolInput.addEventListener("input", renderAll);
  renderAll();
})();

(() => {
  const gallery = document.querySelector("#uniforms .uniforms");
  if (!gallery) return;
  const references = [
    ["Navy pinafore over white shirt", "Girls · pinafore", "https://tiimg.tistatic.com/fp/1/003/963/girls-school-uniform-821.jpg", "https://www.tradeindia.com/products/girls-school-uniform-3963821.html"],
    ["Classic Indian boys' and girls' uniform range", "Mixed · school set", "https://tiimg.tistatic.com/fp/1/009/329/school-uniform-628.jpg", "https://www.tradeindia.com/products/school-uniform-9329628.html"],
    ["Red check shirt with navy bottoms", "Checked · shirt and skirt", "https://tiimg.tistatic.com/fp/2/009/295/girls-boys-school-uniforms-415.jpg", "https://www.tradeindia.com/products/girls-and-boys-school-uniforms-9295415.html"],
    ["Blue check shirt with trousers and skirt", "Checked · coordinated set", "https://s.alicdn.com/@sc04/kf/S1ffb8c3ae6374510bec2a9792cea1621S.png_640x640.png", "https://www.accio.com/plp/best-school-uniform-in-india"],
    ["Purple check shirt with navy bottoms", "Checked · senior uniform", "https://www.gubbacciuniform.com/cdn/shop/files/uniform-set-high-school-uniform-style-2-29189291114670_1_1200x1200.png?v=1697447653", "https://www.gubbacciuniform.com/products/high-school-uniform-style-2"],
    ["Grey check shirt with skirt and trousers", "Checked · school set", "https://cpimg.tistatic.com/3995560/b/4/students-school-uniform.jpg", "https://www.tradeindia.com/products/students-school-uniform-c3995560.html"],
    ["Purple check shirt with solid bottoms", "Checked · primary and senior", "https://cpimg.tistatic.com/10186038/b/4/Private-School-Uniform..jpg", "https://www.tradeindia.com/products/private-school-uniform-c10186038.html"],
    ["Red and green checked DAV uniform", "Checked · shorts and pinafore", "https://tatadav.com/File/327/ZLC_uniform3.jpg", "https://tatadav.com/1522315E-7501-43BD-9846-761202B748AE/CMS/Page/School-Uniform"],
    ["Kendriya Vidyalaya class-wise uniform styles", "Class range · checked shirt", "https://suryasports.com/wp-content/uploads/2021/09/kv-uni-1.jpg", "https://suryasports.com/product/kv-school-uniforms/"],
    ["Brown check shirts with skirts and trousers", "Checked · mixed set", "https://tiimg.tistatic.com/fp/1/003/860/school-uniform-for-boys-girls-353.jpg", "https://www.tradeindia.com/products/school-uniform-for-boys-and-girls-3860353.html"],
    ["School uniform fabric and student styling", "School · uniform reference", "https://www.uniformunicorn.in/uploaded-files/category/images/School-%26-College-Uniform-Fabric-9-46.jpg", "https://www.uniformunicorn.in/mauritius/school-uniform-fabric.htm"],
    ["Grey check high-school uniform", "Senior · shirt and skirt", "https://www.gubbacciuniform.com/cdn/shop/files/uniform-set-high-school-uniform-style-12-29594818216110_700x700.png?v=1697631984", "https://www.gubbacciuniform.com/products/high-school-uniform-style-12"],
    ["Blue, white and red check uniform", "Primary · shorts and pinafore", "https://tiimg.tistatic.com/fp/1/009/097/body-and-girls-school-uniform-209.jpg", "https://www.tradeindia.com/products/girls-blue-and-white-collared-neck-cap-sleeves-plain-stitched-school-uniform-7441563.html"],
    ["Blue and red check schoolgirls' uniform", "Girls · checked uniform", "https://www.rasmi.org/images/s2.jpg", "https://rasmi.org/"],
    ["Red check senior uniform on campus", "Senior · shirt and trousers", "https://vbpsjammu.com/admin_panel/photo/semi/80813204811201720013777.JPG", "https://vbpsjammu.com/"],
    ["Red plaid sports-day school uniform", "Activity day · checked set", "https://tvmmumbai.in/site_2012/images/events/annual_sports_day/2012/sports110.jpg", "https://www.tvmmumbai.in/site_2012/annual_sports_day.html"],
    ["Red and green checked school dress", "Girls · checked dress", "https://svpsbalasore.org.in/images/Uniform/2.jpg", "https://svpsbalasore.org.in/SchoolUniform.aspx"],
    ["Indian students in checked school uniforms", "School · group reference", "https://www.airtel.in/airtel-annual-report-2019-20/img/airtel-quest/_1.png", "https://www.airtel.in/airtel-annual-report-2019-20/airtels-quest-for-care.php"],
    ["Check shirt, skirt and trouser combinations", "Mixed · cotton check", "https://img2.exportersindia.com/product_images/bc-full/2024/2/5027745/unnamed--1-1708594070_7305978_2029773.jpg", "https://www.exportersindia.com/product-detail/school-uniforms-9411399895.htm"],
    ["Navy shirt with check skirt uniform", "Girls · shirt and skirt", "https://5.imimg.com/data5/SELLER/Default/2021/7/FF/DK/MC/27931222/photo-2021-07-07-10-31-03-2--500x500.jpg", "https://www.schooldressmanufacturer.com/school-uniform.html"]
  ];
  document.querySelector("#uniforms h2").textContent = "Indian school uniform styles.";
  document.querySelector("#uniforms .lede").textContent = "See familiar Indian schoolwear references: checked shirts, skirts, pinafores, trousers, shorts and school-specific combinations.";
  const count = document.querySelector("#uniforms .uniform-count");
  if (count) count.textContent = "20 Indian school-uniform photo references · live department";
  const galleryNote = document.querySelector("#uniforms .uniform-gallery-intro .lede");
  if (galleryNote) galleryNote.textContent = "Indian school and uniform-provider reference photos. They are examples only and do not represent confirmed stock or a school's approved design.";
  gallery.innerHTML = references.map(([name, type, image, source], index) => `
    <article class="item">
      <img loading="lazy" referrerpolicy="no-referrer" src="${image}" alt="Indian school uniform reference: ${name}" onerror="this.alt='Indian school uniform photo reference unavailable';this.src='https://tiimg.tistatic.com/fp/1/009/329/school-uniform-628.jpg'">
      <div class="pad"><div class="meta">Indian uniform · ${String(index + 1).padStart(2, "0")} · ${type}</div><h3>${name}</h3><p>Sample visual only · <a href="${source}" target="_blank" rel="noopener noreferrer">View photo source ↗</a></p></div>
    </article>`).join("");
})();
