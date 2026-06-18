const tg = window.Telegram?.WebApp;
if (tg) { tg.ready(); tg.expand(); try { tg.setHeaderColor("#c41e3a"); tg.setBackgroundColor("#f5efe7"); } catch (e) {} }

const BOT_TOKEN = "YOUR_BOT_TOKEN_HERE";
const CHAT_ID = "YOUR_CHAT_ID_HERE";

const products = [
  { id:"baland-navli", name:"Baland navli un", image:"images/photo_2026-06-18_13-32-16.jpg", desc:"Eng yuqori sifatli bug'doydan tayyorlangan premium un.", price:"12 000 so'm/kg", protein:"12-14%", gluten:"28-30%", usage:"Non, tort, xamir", origin:"Andijon viloyati", nav:"Baland nav (1-nav)", advantage:"Yuqori kleykovina, yumshoq xamir", bestFor:"Kulcha, non, tort" },
  { id:"birinchi-nav", name:"Birinchi nav un", image:"images/photo_2026-06-18_13-32-29.jpg", desc:"Ko'p maqsadli un, kundalik pishiriqlar uchun ideal.", price:"10 500 so'm/kg", protein:"10-11%", gluten:"24-26%", usage:"Kundalik pishiriq", origin:"Andijon viloyati", nav:"1-nav", advantage:"Universal, tez ko'tariladi", bestFor:"Lepyoshka, non, somsa" },
  { id:"ikkinchi-nav", name:"Ikkinchi nav un", image:"images/photo_2026-06-18_13-32-33.jpg", desc:"Tejamkor variant, sanoat ishlab chiqarishi uchun.", price:"8 500 so'm/kg", protein:"9-10%", gluten:"20-22%", usage:"Sanoat pishiriqlari", origin:"Andijon viloyati", nav:"2-nav", advantage:"Arzon va tejamkor", bestFor:"Kundalik non, sanoat" },
  { id:"semolina", name:"Semolina (Qo'pol un)", image:"images/photo_2026-06-18_13-32-38.jpg", desc:"Qattiq bug'doydan tayyorlangan silliq qo'pol un.", price:"14 000 so'm/kg", protein:"13-14%", gluten:"30-32%", usage:"Makaron, osh", origin:"Andijon viloyati", nav:"Premium", advantage:"Yuqori protein, elastik xamir", bestFor:"Makaron, manti, osh" },
  { id:"kepak", name:"Kepak (Отруби)", image:"images/photo_2026-06-18_13-32-43.jpg", desc:"Sog'lom ovqatlanish uchun kleykovnikali qo'shimcha.", price:"7 000 so'm/kg", protein:"15-16%", gluten:"0%", usage:"Sog'lom ovqatlanish", origin:"Andijon viloyati", nav:"Kepak", advantage:"Kaliy, temir, kaltsiyga boy", bestFor:"Kasha, dietalar" },
  { id:"mayda-kepak", name:"Mayda kepak", image:"images/photo_2026-06-18_13-32-16.jpg", desc:"Chorva mollari uchun to'yimli yem qo'shimchasi.", price:"5 500 so'm/kg", protein:"14%", gluten:"0%", usage:"Chorva uchun yem", origin:"Andijon viloyati", nav:"Yem", advantage:"Yem sifatida yuqori to'yimli", bestFor:"Qoramol, parranda" },
  { id:"un-7", name:"Un navi 7", image:"images/photo_2026-06-18_13-32-16.jpg", desc:"Yuqori sifatli bug'doy un.", price:"11 000 so'm/kg", protein:"11-12%", gluten:"25-27%", usage:"Non va pishiriq", origin:"Andijon viloyati", nav:"1-nav", advantage:"Yumshoq va elastik", bestFor:"Non, lepyoshka" },
  { id:"un-8", name:"Un navi 8", image:"images/photo_2026-06-18_13-32-29.jpg", desc:"Premium sifatli un.", price:"13 000 so'm/kg", protein:"12-13%", gluten:"27-29%", usage:"Tort va pishiriq", origin:"Andijon viloyati", nav:"Premium", advantage:"Yengil va havodor", bestFor:"Tort, keks" },
  { id:"un-9", name:"Un navi 9", image:"images/photo_2026-06-18_13-32-33.jpg", desc:"Kundalik foydalanish uchun un.", price:"9 000 so'm/kg", protein:"10-11%", gluten:"22-24%", usage:"Kundalik non", origin:"Andijon viloyati", nav:"2-nav", advantage:"Tejamkor", bestFor:"Kundalik non" },
  { id:"un-10", name:"Un navi 10", image:"images/photo_2026-06-18_13-32-38.jpg", desc:"Maxsus pishiriqlar uchun un.", price:"15 000 so'm/kg", protein:"14-15%", gluten:"31-33%", usage:"Maxsus pishiriq", origin:"Andijon viloyati", nav:"Premium", advantage:"Yuqori sifat", bestFor:"Pishiriq, xamir" },
  { id:"un-11", name:"Un navi 11", image:"images/photo_2026-06-18_13-32-43.jpg", desc:"Sanoat uchun maxsus un.", price:"8 000 so'm/kg", protein:"9-10%", gluten:"20-22%", usage:"Sanoat", origin:"Andijon viloyati", nav:"2-nav", advantage:"Arzon", bestFor:"Sanoat ishlab chiqarish" },
  { id:"un-12", name:"Un navi 12", image:"images/photo_2026-06-18_13-32-16.jpg", desc:"Elita sifatli un.", price:"16 000 so'm/kg", protein:"15-16%", gluten:"32-34%", usage:"Elita pishiriqlar", origin:"Andijon viloyati", nav:"Elita", advantage:"Eng yuqori sifat", bestFor:"Elita pishiriqlar" },
  { id:"un-13", name:"Un navi 13", image:"images/photo_2026-06-18_13-32-29.jpg", desc:"Yumshoq xamir uchun un.", price:"11 500 so'm/kg", protein:"11-12%", gluten:"25-27%", usage:"Yumshoq xamir", origin:"Andijon viloyati", nav:"1-nav", advantage:"Yumshoq va elastik", bestFor:"Yumshoq non" },
  { id:"un-14", name:"Un navi 14", image:"images/photo_2026-06-18_13-32-33.jpg", desc:"Qattiq xamir uchun un.", price:"12 500 so'm/kg", protein:"13-14%", gluten:"28-30%", usage:"Qattiq xamir", origin:"Andijon viloyati", nav:"1-nav", advantage:"Mustahkam", bestFor:"Qattiq xamir" },
  { id:"un-15", name:"Un navi 15", image:"images/photo_2026-06-18_13-32-38.jpg", desc:"Maxsus non uchun un.", price:"13 500 so'm/kg", protein:"14-15%", gluten:"30-32%", usage:"Maxsus non", origin:"Andijon viloyati", nav:"Premium", advantage:"Maxsus sifat", bestFor:"Maxsus non" },
  { id:"un-16", name:"Un navi 16", image:"images/photo_2026-06-18_13-32-43.jpg", desc:"Tez pishirish uchun un.", price:"10 000 so'm/kg", protein:"10-11%", gluten:"23-25%", usage:"Tez pishiriq", origin:"Andijon viloyati", nav:"1-nav", advantage:"Tez pishadi", bestFor:"Tez pishiriqlar" },
  { id:"un-17", name:"Un navi 17", image:"images/photo_2026-06-18_13-32-16.jpg", desc:"Sog'lom ovqatlanish uchun un.", price:"9 500 so'm/kg", protein:"11-12%", gluten:"24-26%", usage:"Sog'lom ovqat", origin:"Andijon viloyati", nav:"1-nav", advantage:"Sog'lom", bestFor:"Dieta" },
  { id:"un-18", name:"Un navi 18", image:"images/photo_2026-06-18_13-32-29.jpg", desc:"Bolalar uchun maxsus un.", price:"14 500 so'm/kg", protein:"12-13%", gluten:"26-28%", usage:"Bolalar ovqati", origin:"Andijon viloyati", nav:"Premium", advantage:"Xavfsiz", bestFor:"Bolalar pishiriqlari" },
  { id:"un-19", name:"Un navi 19", image:"images/photo_2026-06-18_13-32-33.jpg", desc:"Restoranlar uchun maxsus un.", price:"17 000 so'm/kg", protein:"16-17%", gluten:"33-35%", usage:"Restoran pishiriqlari", origin:"Andijon viloyati", nav:"Elita", advantage:"Elita sifat", bestFor:"Restoran" },
  { id:"un-20", name:"Un navi 20", image:"images/photo_2026-06-18_13-32-38.jpg", desc:"Universal foydalanish uchun un.", price:"10 500 so'm/kg", protein:"11-12%", gluten:"24-26%", usage:"Universal", origin:"Andijon viloyati", nav:"1-nav", advantage:"Universal", bestFor:"Hamma turdagi pishiriqlar" }
];

function renderFeatured(){
  const grid=document.getElementById("featured-grid");
  products.slice(0,4).forEach(p=>{
    const el=document.createElement("div");
    el.className="product-card-mini";
    el.innerHTML=`<img src="${p.image}" alt="${p.name}" style="width:60px;height:60px;object-fit:cover;border-radius:50%;border:2px solid #c41e3a;" /><div class="card-name">${p.name}</div><div class="card-price">${p.price}</div>`;
    el.onclick=()=>goToPage("mahsulotlar");
    grid.appendChild(el);
  });
}

function renderProducts(){
  const list=document.getElementById("product-list");
  products.forEach(p=>{
    const el=document.createElement("div");
    el.className="product-card-full";
    el.innerHTML=`
      <div class="product-card-top">
        <div class="product-card-emoji"><img src="${p.image}" alt="${p.name}" /></div>
        <div class="product-card-info"><h3>${p.name}</h3><div class="price-tag">💰 ${p.price}</div><div style="font-size:12px;color:var(--muted-fg);margin-top:4px;">${p.nav}</div></div>
      </div>
      <div class="product-card-body">
        <p style="font-size:14px;font-weight:500;">${p.desc}</p>
        <div class="product-props">
          <div class="product-prop"><div class="dot">✓</div><span><strong>Protein:</strong> ${p.protein}</span></div>
          <div class="product-prop"><div class="dot">✓</div><span><strong>Kleykovina:</strong> ${p.gluten}</span></div>
          <div class="product-prop"><div class="dot">✓</div><span><strong>Ishlatilishi:</strong> ${p.usage}</span></div>
          <div class="product-prop"><div class="dot">✓</div><span><strong>Afzalligi:</strong> ${p.advantage}</span></div>
          <div class="product-prop"><div class="dot">✓</div><span><strong>Eng yaxshi chiqadi:</strong> ${p.bestFor}</span></div>
          <div class="product-prop"><div class="dot">📍</div><span><strong>Ishlab chiqarilgan:</strong> ${p.origin}</span></div>
        </div>
        <button class="btn btn-full" onclick="orderProduct('${p.id}')">🛒 Zakaz berish</button>
      </div>
    `;
    list.appendChild(el);
  });
}

function renderSelect(){
  const sel=document.getElementById("sel-product");
  products.forEach(p=>{const opt=document.createElement("option");opt.value=p.id;opt.textContent=`${p.name} - ${p.price}`;sel.appendChild(opt);});
}

let currentPage="home";
function goToPage(page){
  document.querySelectorAll(".page").forEach(el=>el.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(el=>el.classList.remove("active"));
  document.getElementById("page-"+page).classList.add("active");
  const navBtn=document.querySelector(`.nav-item[data-page="${page}"]`);
  if(navBtn) navBtn.classList.add("active");
  currentPage=page;
  window.scrollTo({top:0,behavior:"smooth"});
}

function orderProduct(productId){document.getElementById("sel-product").value=productId;goToPage("zakaz");}

function submitOrder(e){
  e.preventDefault();
  const productId=document.getElementById("sel-product").value;
  const qty=document.getElementById("inp-qty").value.trim();
  const name=document.getElementById("inp-name").value.trim();
  const phone=document.getElementById("inp-phone").value.trim();
  const address=document.getElementById("inp-address").value.trim();
  let valid=true;
  function showErr(id,msg){const el=document.getElementById(id);el.textContent=msg;el.classList.add("show");valid=false;}
  function clearErr(id){const el=document.getElementById(id);el.textContent="";el.classList.remove("show");}
  clearErr("err-product");clearErr("err-qty");clearErr("err-name");clearErr("err-phone");clearErr("err-address");
  if(!productId)showErr("err-product","Iltimos, mahsulotni tanlang.");
  if(!qty)showErr("err-qty","Miqdorni kiriting.");
  if(name.length<2)showErr("err-name","Ism-familiyani kiriting.");
  if(phone.length<7)showErr("err-phone","To'g'ri telefon raqam kiriting.");
  if(address.length<5)showErr("err-address","Manzilni aniq kiriting.");
  if(!valid)return;
  const product=products.find(p=>p.id===productId);
  const productName=product?product.name:productId;
  const productPrice=product?product.price:"Ma'lumot yo'q";
  const message=`🌾 YANGI ZAKAZ — Mo'tabar Un Markazi\n\n📦 Mahsulot: ${productName}\n💰 Narxi: ${productPrice}\n📊 Miqdor: ${qty}\n👤 Ism: ${name}\n📞 Telefon: ${phone}\n📍 Manzil: ${address}\n\n📅 Vaqt: ${new Date().toLocaleString('uz-UZ')}`;
  const loading=document.getElementById("loading");
  if(loading)loading.classList.add("show");
  const submitBtn=document.querySelector("#order-form .btn-full");
  if(submitBtn){submitBtn.disabled=true;submitBtn.textContent="⏳ Yuborilmoqda...";}
  sendToTelegram(message).then(()=>{document.getElementById("order-form").reset();showSuccess();if(submitBtn){submitBtn.disabled=false;submitBtn.textContent="Zakazni Yuborish";}if(loading)loading.classList.remove("show");}).catch(()=>{window.open(`https://t.me/optom_unchi?text=${encodeURIComponent(message)}`,"_blank");document.getElementById("order-form").reset();showSuccess();if(submitBtn){submitBtn.disabled=false;submitBtn.textContent="Zakazni Yuborish";}if(loading)loading.classList.remove("show");});
}

function sendToTelegram(message){
  return new Promise((resolve,reject)=>{
    if(BOT_TOKEN==="YOUR_BOT_TOKEN_HERE"||CHAT_ID==="YOUR_CHAT_ID_HERE"){reject(new Error("Bot not configured"));return;}
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:CHAT_ID,text:message,parse_mode:"HTML"})}).then(r=>r.json()).then(d=>{if(d.ok){resolve(d);}else{reject(new Error(d.description));}}).catch(reject);
  });
}

function showSuccess(){const msg=document.getElementById("success-message");if(msg){msg.classList.add("show");setTimeout(()=>{msg.classList.remove("show");},5000);}}

function openMap(){window.open('https://www.google.com/maps?q=40.83012940337612,72.3528414804545','_blank');}
function openTelegram(){window.open('https://t.me/optom_unchi','_blank');}

document.addEventListener('DOMContentLoaded',function(){renderFeatured();renderProducts();renderSelect();console.log("✅ App ishga tushdi!");});
