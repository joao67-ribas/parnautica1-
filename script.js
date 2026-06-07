function openZforceModal() { document.getElementById('zforceModal').style.display='flex'; document.body.style.overflow='hidden'; }
function closeZforceModal() { document.getElementById('zforceModal').style.display='none'; document.body.style.overflow=''; }
document.getElementById('zforceModal').addEventListener('click', function(e){ if(e.target===this) closeZforceModal(); });
const zforceImgs = [
  { src:'assets/img11.jpg', label:'Vista Frontal' },
  { src:'assets/img13.jpg', label:'Bancos Sport' },
  { src:'assets/img14.jpg', label:'Interior – Painel' },
];
function switchZforceImg(idx) {
  const main=document.getElementById('zforceMainImg'), lbl=document.getElementById('zforceImgLabel');
  main.style.opacity='0';
  setTimeout(()=>{ main.src=zforceImgs[idx].src; lbl.textContent=zforceImgs[idx].label; main.style.opacity='1'; },150);
  zforceImgs.forEach((_,i)=>{ document.getElementById('zfThumb'+i).style.border=i===idx?'2px solid #d4271f':'2px solid transparent'; });
}

// ---- GOES TERROX ----
function openGoesModal() { document.getElementById('goesModal').style.display='flex'; document.body.style.overflow='hidden'; }
function closeGoesModal() { document.getElementById('goesModal').style.display='none'; document.body.style.overflow=''; }
document.getElementById('goesModal').addEventListener('click', function(e){ if(e.target===this) closeGoesModal(); });
const goesImgs = [
  { src:'assets/img12.jpg', label:'Vista Frontal' },
  { src:'assets/img15.jpg', label:'Vista Traseira' },
  { src:'assets/img16.jpg', label:'Vista Lateral' },
];
function switchGoesImg(idx) {
  const main=document.getElementById('goesMainImg'), lbl=document.getElementById('goesImgLabel');
  main.style.opacity='0';
  setTimeout(()=>{ main.src=goesImgs[idx].src; lbl.textContent=goesImgs[idx].label; main.style.opacity='1'; },150);
  goesImgs.forEach((_,i)=>{ document.getElementById('goesThumb'+i).style.border=i===idx?'2px solid #d4271f':'2px solid transparent'; });
}

// ---- MODAL GENÉRICO ----
const genericData = {
  atymar: {
    cat:'Lanchas', title:'Lancha Atymar 23',
    img:'assets/img02.jpg',
    imgs:[{src:'assets/img02.jpg',label:'Vista Lateral'},{src:'assets/img31.jpg',label:'Vista Superior'}],
    specs:[['Motor','Evinrude'],['Comprimento','23 pés'],['Categoria','Premium'],['Uso','Lazer & Pesca']],
    desc:'Lancha esportiva de alto padrão, ideal para quem busca desempenho e conforto nas águas. Acabamento premium e motorização Evinrude.',
    wa:'Olá! Tenho interesse na Lancha Atymar 23.'
  },
  bote: {
    cat:'Bote Inflável', title:'Bote Inflável SR 4.20m',
    img:'assets/img03.jpg',
    specs:[['Motor','Mercury 30HP'],['Comprimento','4.20m'],['Capacidade','6 pessoas'],['Ano','2024']],
    desc:'Bote completo e versátil, ideal para pesca e lazer. Acompanha motor Mercury 30HP e todos os equipamentos necessários.',
    wa:'Olá! Tenho interesse no Bote Inflável SR 4.20m.'
  },
traira_plat: {
    cat:'Pesca Profissional', title:'Barco Traíra 600 Plataformado',
    img:'assets/img05.jpg',
    specs:[['Motor','Mercury 60HP'],['Comprimento','6m'],['Tipo','Plataformado'],['Extras','Toldo + Plataforma']],
    desc:'Traíra 600 em versão plataformada profissional. Barco com plataforma de alumínio xadrez, toldo completo, Motor Mercury 60HP 4 tempos e acabamento premium Parnautica. Ideal para pesca profissional.',
    wa:'Olá! Tenho interesse no Barco Traíra 600 Plataformado com Mercury 60HP.'
  },
  traira_plat: {
    cat:'Pesca Profissional', title:'Barco Traíra 600 Plataformado',
    img:'assets/img05.jpg',
    specs:[['Motor','Mercury 60HP'],['Comprimento','6m'],['Tipo','Plataformado'],['Extra','Toldo + Plataforma']],
    desc:'Traíra 600 versão plataformada profissional. Plataforma em alumínio xadrez, toldo completo, Motor Mercury 60HP 4 tempos e acabamento premium Parnautica. Ideal para pesca profissional.',
    wa:'Olá! Tenho interesse no Barco Traíra 600 Plataformado com Mercury 60HP.'
  },
  traira: {
    cat:'Pesca', title:'Barco Traíra 600',
    img:'assets/img04.jpg',
    specs:[['Material','Alumínio'],['Comprimento','6m'],['Motor','Mercury'],['Uso','Pesca']],
    desc:'Barco robusto em alumínio, projetado para a pesca esportiva e amadora. Alta durabilidade e estabilidade em águas abertas.',
    wa:'Olá! Tenho interesse no Barco Traíra 600.'
  },
  cforce450: {
    cat:'Quadriciclo', title:'CFMoto CForce 450L Verde',
    img:'assets/img10.jpg',
    imgs:[{src:'assets/img10.jpg',label:'CForce 450L Verde'}],
    specs:[['Motor','450cc'],['Tração','4x4'],['Transmissão','Automático'],['Cor','Verde']],
    desc:'Quadriciclo CFMoto CForce 450L na cor verde. Potente, confiável e versátil para trilhas e trabalho no campo.',
    wa:'Olá! Tenho interesse no CFMoto CForce 450L Verde.'
  },
  mercury30: {
    cat:'Motores · Mercury', title:'Motor Mercury 30 HP',
    img:'assets/img29.jpg',
    specs:[['Potência','30 HP'],['Ciclo','2 tempos'],['Uso','Pesca & Lazer'],['Garantia','3 anos']],
    desc:'Motor Mercury 30HP, robusto e confiável. Ideal para botes e barcos de alumínio de até 5m. Excelente custo-benefício.',
    wa:'Olá! Tenho interesse no Motor Mercury 30 HP.'
  },
  mercuryProXS: {
    cat:'Motores · Mercury', title:'Motor Mercury 115 HP Pro XS',
    img:'assets/img30.jpg',
    specs:[['Linha','Pro XS'],['Uso','Competição'],['Performance','Racing'],['Tipo','Alta Performance']],
    desc:'Linha Pro XS Mercury para quem exige o máximo. Motores de competição com alta rotação, resposta imediata e máxima eficiência em pista.',
    wa:'Olá! Tenho interesse no Motor Mercury 115 HP Pro XS.'
  },
};

function openGenericModal(key) {
  const d = genericData[key]; if(!d) return;
  document.getElementById('gm-cat').textContent = d.cat;
  document.getElementById('gm-title').textContent = d.title;
  document.getElementById('gm-img').src = d.img;
  document.getElementById('gm-img').alt = d.title;
  document.getElementById('gm-desc').textContent = d.desc;
  document.getElementById('gm-wa').href = 'https://wa.me/5544991112097?text='+encodeURIComponent(d.wa);
  const specsEl = document.getElementById('gm-specs');
  specsEl.innerHTML = d.specs.map(([k,v])=>`<div style="background:#111113;border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:14px;text-align:center;"><span style="display:block;font-size:10px;color:#7a7873;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px;">${k}</span><span style="font-size:14px;color:#f0ede8;font-weight:500;">${v}</span></div>`).join('');
  // Galeria de thumbs se tiver imgs[]
  const thumbsEl = document.getElementById('gm-thumbs');
  if(d.imgs && d.imgs.length > 1) {
    thumbsEl.style.display='grid';
    thumbsEl.innerHTML = d.imgs.map((im,i)=>`<div onclick="switchGmImg(${i},'${key}')" id="gmThumb${i}" style="border-radius:8px;overflow:hidden;cursor:pointer;border:2px solid ${i===0?'#d4271f':'transparent'};aspect-ratio:1;background:#111;"><img src="${im.src}" style="width:100%;height:100%;object-fit:cover;display:block;"></div>`).join('');
  } else {
    thumbsEl.style.display='none';
    thumbsEl.innerHTML='';
  }
  document.getElementById('genericModal').style.display='flex';
  document.body.style.overflow='hidden';
  window._gmCurrentKey = key;
}
function switchGmImg(idx, key) {
  const d = genericData[key||window._gmCurrentKey]; if(!d||!d.imgs) return;
  const main = document.getElementById('gm-img');
  main.style.opacity='0';
  setTimeout(()=>{ main.src=d.imgs[idx].src; main.style.opacity='1'; },150);
  d.imgs.forEach((_,i)=>{ const t=document.getElementById('gmThumb'+i); if(t) t.style.border=i===idx?'2px solid #d4271f':'2px solid transparent'; });
}
function closeGenericModal() { document.getElementById('genericModal').style.display='none'; document.body.style.overflow=''; }
document.getElementById('genericModal').addEventListener('click', function(e){ if(e.target===this) closeGenericModal(); });


const _boteImgs = ['assets/img03.jpg', 'assets/img26.jpg'];

const _cf625srcs = ['assets/img07.jpg','assets/img23.jpg','assets/img24.jpg','assets/img25.jpg'];
const _cf625lbls = ['Vista Frontal', 'Vista Traseira', 'Vista Frontal 2', 'Vista Traseira 2'];
function openCF625Modal(){
  document.getElementById('cf625Modal').style.display='flex';
  document.body.style.overflow='hidden';
}
function closeCF625Modal(){
  document.getElementById('cf625Modal').style.display='none';
  document.body.style.overflow='';
}
document.addEventListener('DOMContentLoaded',()=>{
  const m=document.getElementById('cf625Modal');
  if(m) m.addEventListener('click',function(e){if(e.target===this)closeCF625Modal();});
});
function swCF625(idx){
  const img=document.getElementById('cf625Img');
  const lbl=document.getElementById('cf625Lbl');
  img.style.opacity='0';
  setTimeout(()=>{img.src=_cf625srcs[idx];lbl.textContent=_cf625lbls[idx];img.style.opacity='1';},150);
  [0,1,2,3].forEach(i=>{
    const t=document.getElementById('cf625t'+i);
    if(t) t.style.border=i===idx?'2px solid #d4271f':'2px solid transparent';
  });
}

function openBoteModal() {
  document.getElementById('boteModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeBoteModal() {
  document.getElementById('boteModal').style.display = 'none';
  document.body.style.overflow = '';
}
document.addEventListener('DOMContentLoaded', () => {
  const m = document.getElementById('boteModal');
  if (m) m.addEventListener('click', function(e) { if(e.target===this) closeBoteModal(); });
});
function switchBote(idx) {
  const img = document.getElementById('boteMainImg');
  img.style.opacity = '0';
  setTimeout(() => { img.src = _boteImgs[idx]; img.style.opacity = '1'; }, 150);
  [0,1].forEach(i => {
    const t = document.getElementById('boteThumb'+i);
    if(t) t.style.border = i===idx ? '2px solid #d4271f' : '2px solid transparent';
  });
}

function openCamoModal() {
  document.getElementById('camoModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeCamoModal() {
  document.getElementById('camoModal').style.display = 'none';
  document.body.style.overflow = '';
}
document.getElementById('camoModal').addEventListener('click', function(e) {
  if (e.target === this) closeCamoModal();
});

const camoImgs = [
  { src: 'assets/img09.jpg', label: 'Vista Frontal' },
  { src: 'assets/img20.jpg', label: 'Vista de Cima' },
  { src: 'assets/img18.jpg', label: 'Interior – Bancos Highland' },
  { src: 'assets/img21.jpg', label: 'Volante CFMOTO U10' },
];
function switchCamoImg(idx) {
  const main = document.getElementById('camoMainImg');
  const label = document.getElementById('camoImgLabel');
  main.style.opacity = '0';
  setTimeout(() => { main.src = camoImgs[idx].src; label.textContent = camoImgs[idx].label; main.style.opacity = '1'; }, 150);
  camoImgs.forEach((_, i) => {
    document.getElementById('camoThumb' + i).style.border = i === idx ? '2px solid #d4271f' : '2px solid transparent';
  });
}

function openMercury50Modal() {
  document.getElementById('mercury50Modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeMercury50Modal() {
  document.getElementById('mercury50Modal').style.display = 'none';
  document.body.style.overflow = '';
}
document.getElementById('mercury50Modal').addEventListener('click', function(e) {
  if (e.target === this) closeMercury50Modal();
});

function openUtvModal() {
  const m = document.getElementById('utvModal');
  m.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeUtvModal() {
  document.getElementById('utvModal').style.display = 'none';
  document.body.style.overflow = '';
}

document.getElementById('utvModal').addEventListener('click', function(e) {
  if (e.target === this) closeUtvModal();
});

const utvImgs = [
  { src: 'assets/img06.jpg', label: 'Exterior' },
  { src: 'assets/img17.jpg', label: 'Vista Lateral' },
  { src: 'assets/img18.jpg', label: 'Interior – Bancos Highland' },
  { src: 'assets/img19.jpg', label: 'Volante CFMOTO U10' },
];

function switchUtvImg(idx) {
  const main = document.getElementById('utvMainImg');
  const label = document.getElementById('utvImgLabel');
  main.style.opacity = '0';
  setTimeout(() => {
    main.src = utvImgs[idx].src;
    label.textContent = utvImgs[idx].label;
    main.style.opacity = '1';
  }, 150);
  utvImgs.forEach((_, i) => {
    document.getElementById('utvThumb' + i).style.border = i === idx ? '2px solid #d4271f' : '2px solid transparent';
  });
}

function openModal() {
  const m = document.getElementById('cforceModal');
  m.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('cforceModal').style.display = 'none';
  document.body.style.overflow = '';
}

document.getElementById('cforceModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

function toggleMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('mobileNav').classList.remove('open');
}

function toggleLike(btn) {
  btn.classList.toggle('liked');
  btn.textContent = btn.classList.contains('liked') ? '♥' : '♡';
}

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 60) {
    header.style.height = '60px';
  } else {
    header.style.height = '72px';
  }
});

// Intersection Observer for fade-in
const cards = document.querySelectorAll('.product-card, .feature-item, .stat-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, 80 * (i % 4));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(24px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, box-shadow 0.3s';
  observer.observe(card);
});
const _cf625imgs = [null, 'assets/img27.jpg', 'assets/img28.jpg'];
function switchCF625(idx) {
  const m = document.getElementById('cforce625MainImg');
  const src = idx === 0 ? _cf625imgs[0] || m.src : _cf625imgs[idx];
  if (idx === 0 && !_cf625imgs[0]) {
    // já está na imagem original, não precisa trocar
  } else {
    m.style.opacity='0';
    setTimeout(()=>{ m.src=src; m.style.opacity='1'; },150);
  }
  // Guardar src original na primeira chamada
  if (!_cf625imgs[0]) _cf625imgs[0] = m.src;
  [0,1,2].forEach(i => {
    const t = document.getElementById('cf625t'+i);
    if(t) t.style.border = i===idx ? '2px solid #d4271f' : '2px solid transparent';
  });
}