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
