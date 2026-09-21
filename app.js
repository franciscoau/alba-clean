const products=[
{id:1,n:'ALCASOL 90',c:'Mantención industrial',d:'Detergente industrial multiuso para cerámica y azulejos. Potente eliminador de grasa.',f:'5, 20 y 220 L',t:'7 días'},
{id:2,n:'ALCASOL-K',c:'Mantención industrial',d:'Desengrasante alcalino extra concentrado para grasas pesadas y tintas.',f:'5, 20 y 220 L',t:'7 días'},
{id:3,n:'SOLVENT ULTRA',c:'Mantención industrial',d:'Solvente dieléctrico de seguridad, secado ultra rápido, para motores y tableros.',f:'5, 20 y 220 L',t:'7 días'},
{id:4,n:'LUBRITEC 40',c:'Mantención industrial',d:'Lubricante desagripante a granel, alternativa a WD-40.',f:'5 y 20 L',t:'7 días'},
{id:5,n:'Ácido clorhídrico',c:'Mantención industrial',d:'Producto para eliminación de sarro y concreto.',f:'20 L',t:'Consultar'},
{id:6,n:'Alcohol isopropílico',c:'Mantención industrial',d:'Para limpieza de superficies y placas electrónicas.',f:'1, 5, 20 y 200 L',t:'7 días'},
{id:7,n:'Cloro granulado piscina 60%',c:'Mantención industrial',d:'Dicloruroisocianurato 60%, desinfectante para hipercloración de piscinas.',f:'50 kg',t:'4 días'},
{id:8,n:'HANDE Manzana',c:'Higiene',d:'Jabón de manos aroma manzana, para limpieza y enjuague con agua.',f:'5, 20 y 220 L',t:'5 días'},
{id:9,n:'HANDE Crema',c:'Higiene',d:'Jabón de manos aroma crema, para limpieza y enjuague con agua.',f:'5, 20 y 220 L',t:'5 días'},
{id:10,n:'HANDE K',c:'Higiene',d:'Jabón concentrado de uso mecánico, enjuague con agua.',f:'5, 20 y 220 L',t:'5 días'},
{id:11,n:'HANDE SHARF',c:'Higiene',d:'Jabón mecánico abrasivo en crema.',f:'500 cc',t:'7 días'},
{id:12,n:'CONTAC CLEANER',c:'Mantención industrial',d:'Limpiador de contactos en spray.',f:'300 cc',t:'4 días'},
{id:13,n:'SANI CLEAN',c:'Limpieza',d:'Desinfectante de pisos y superficies base amonio cuaternario, aroma menta.',f:'5 L',t:'5 días'},
{id:14,n:'SANI CLOR 10%',c:'Limpieza',d:'Hipoclorito de sodio concentrado al 10%.',f:'5, 20 y 220 L',t:'7 días'},
{id:15,n:'SANI CLOR 5%',c:'Limpieza',d:'Cloro concentrado al 5%.',f:'5, 20 y 220 L',t:'7 días'},
{id:16,n:'CLEANING Lavalozas',c:'Limpieza',d:'Detergente neutro para superficies y vajillas, aroma limón.',f:'5 L',t:'4 días'},
{id:17,n:'DETER MATIC',c:'Limpieza',d:'Detergente de ropa sin colorante, hipoalergénico.',f:'5 L',t:'4 días'},
{id:19,n:'Cloro Gel',c:'Limpieza',d:'Detergente clorado de alta espuma.',f:'5 L',t:'4 días'},
{id:20,n:'Alcohol Gel',c:'Higiene',d:'Desinfectante de manos base alcohol 70%.',f:'5 L',t:'4 días'},
{id:22,n:'CIF Crema',c:'Limpieza',d:'Limpiador en crema para superficies.',f:'500 cc',t:'4 días',img:'doc_image_2.jpg'},
{id:23,n:'TEDDY 5 en 1',c:'Limpieza',d:'Desodorante ambiental: elimina olores, aromatiza y entrega fragancia duradera.',f:'400 ml · pack 12',t:'4 días',img:'doc_image_3.jpg'},
{id:24,n:'GLASS',c:'Limpieza',d:'Limpia vidrios diseñado para eliminar suciedad, manchas y grasa.',f:'5 L',t:'7 días'},
{id:25,n:'SILICON CREMA',c:'Limpieza',d:'Protege, abrillanta y renueva plástico, goma, cuero, madera y vinilo.',f:'5 L',t:'7 días'},
{id:26,n:'DETERFLOO',c:'Limpieza',d:'Mantenedor para limpieza de pisos sin dañar sus capas protectoras.',f:'5 L',t:'7 días'},
{id:27,n:'CAR WASH',c:'Limpieza',d:'Shampoo de carrocería para lavar sin dañar pintura ni recubrimientos.',f:'5 L',t:'5 días'},
{id:28,n:'Paño de esponja multiuso',c:'Aseo',d:'Paño húmedo para eliminar suciedad en una gran variedad de superficies.',f:'3 unidades',t:'5 días',img:'doc_image_4.jpg'},
{id:29,n:'Escobillón plástico',c:'Aseo',d:'Liviano y resistente, para pisos de madera, flexit y cerámica.',f:'1 unidad',t:'5 días',img:'doc_image_5.jpg'},
{id:31,n:'Escoba de rama artesanal',c:'Aseo',d:'Escoba de rama artesanal de 5 costuras.',f:'1 unidad',t:'5 días',img:'doc_image_6.png'},
{id:32,n:'Bolsa basura 50×70',c:'Aseo',d:'Bolsa plástica para almacenar, transportar y desechar residuos.',f:'10 unidades',t:'4 días',img:'doc_image_7.png'},
{id:33,n:'Bolsa basura',c:'Aseo',d:'Bolsa plástica para almacenamiento y eliminación de residuos.',f:'10 unidades',t:'4 días',img:'doc_image_8.jpg'},
{id:34,n:'Bolsa basura municipal 100×120',c:'Aseo',d:'Bolsa contenedora de gran formato para residuos.',f:'1 unidad',t:'4 días',img:'doc_image_9.png'},
{id:35,n:'Paño amarillo',c:'Aseo',d:'Paño de fibras sintéticas absorbentes para líquidos y suciedad.',f:'1 unidad',t:'4 días',img:'doc_image_10.jpg'},
{id:36,n:'Esponja amarillo/verde',c:'Aseo',d:'Esponja de doble acción con dos texturas para remover suciedad.',f:'1 unidad',t:'4 días',img:'doc_image_11.png'},
{id:37,n:'Trapero con ojal',c:'Aseo',d:'Paño textil para lavado y secado de pisos con perforación central reforzada.',f:'1 unidad',t:'4 días',img:'doc_image_12.png'},
{id:38,n:'Papel higiénico Jumbo',c:'Papelería',d:'Pack de papel higiénico Jumbo.',f:'4 rollos de 500 m',t:'Consultar'},
{id:40,n:'Toalla interfoliada',c:'Papelería',d:'Caja de toalla interfoliada.',f:'10 paquetes',t:'Consultar'},
{id:44,n:'Dispensador jabón metálico',c:'Dispensadores',d:'Dispensador metálico para jabón.',f:'500 cc',t:'Consultar'},
{id:49,n:'Guante látex',c:'Protección personal',d:'Guante de protección personal.',f:'Consultar',t:'Consultar'},
{id:51,n:'Guante nitrilo',c:'Protección personal',d:'Guante de protección personal.',f:'Consultar',t:'Consultar'},
{id:55,n:'Mascarilla 3 pliegues',c:'Protección personal',d:'Mascarilla desechable de tres pliegues.',f:'Consultar',t:'Consultar'},
{id:57,n:'Buzo desechable',c:'Protección personal',d:'Buzo desechable con gorro y cubre cierre.',f:'Consultar',t:'Consultar'},
{id:68,n:'Cono de seguridad',c:'Seguridad',d:'Elemento de señalización y seguridad.',f:'Consultar',t:'Consultar'},
{id:71,n:'Letrero piso húmedo',c:'Seguridad',d:'Señalización preventiva para zonas con piso húmedo.',f:'Consultar',t:'Consultar'}];
let quantities={}, active='Todos';const $=s=>document.querySelector(s);const categories=['Todos',...new Set(products.map(p=>p.c))];
const isSelected=id=>(quantities[id]||0)>0;
function renderFilters(){ $('#filters').innerHTML=categories.map(c=>`<button class="${c===active?'active':''}" data-c="${c}">${c}</button>`).join(''); document.querySelectorAll('#filters button').forEach(b=>b.onclick=()=>{active=b.dataset.c;renderFilters();renderProducts()}) }
function renderProducts(){let q=$('#search').value.toLowerCase();let list=products.filter(p=>(active==='Todos'||p.c===active)&&(`${p.n} ${p.d} ${p.c}`.toLowerCase().includes(q)));$('#products').innerHTML=list.map(p=>`<article class="card"><div class="photo">${p.img?`<img src="${p.img}" alt="${p.n}">`:'<span class="placeholder">✦</span>'}</div><div class="cardBody"><span class="category">${p.c}</span><h3>${p.n}</h3><p>${p.d}</p><div class="meta"><b>Formato:</b> ${p.f}<br><b>Despacho:</b> ${p.t}</div><button class="add ${isSelected(p.id)?'selected':''}" data-id="${p.id}">${isSelected(p.id)?`✓ Agregado · ${quantities[p.id]} un.`:'Agregar a cotización'}</button></div></article>`).join('')||'<p>No encontramos productos con esa búsqueda.</p>';document.querySelectorAll('.add').forEach(b=>b.onclick=()=>addProduct(+b.dataset.id))}
function addProduct(id){quantities[id]=(quantities[id]||0)+1;renderProducts();renderQuote()}
function changeQty(id,delta){let next=(quantities[id]||0)+delta;if(next<=0)delete quantities[id];else quantities[id]=next;renderProducts();renderQuote()}
function removeProduct(id){delete quantities[id];renderProducts();renderQuote()}
function renderQuote(){let arr=products.filter(p=>isSelected(p.id));$('#quoteCount').textContent=arr.reduce((sum,p)=>sum+quantities[p.id],0);$('#quoteItems').innerHTML=arr.length?arr.map(p=>`<div class="qItem"><div class="qInfo"><b>${p.n}</b><small>${p.f}</small><div class="qty"><button data-minus="${p.id}" aria-label="Disminuir">−</button><span>${quantities[p.id]}</span><button data-plus="${p.id}" aria-label="Aumentar">+</button><span class="units">unidades</span></div></div><button class="remove" data-r="${p.id}" aria-label="Eliminar">✕</button></div>`).join(''):'<p style="color:#627384">Aún no has agregado productos.</p>';document.querySelectorAll('[data-minus]').forEach(b=>b.onclick=()=>changeQty(+b.dataset.minus,-1));document.querySelectorAll('[data-plus]').forEach(b=>b.onclick=()=>changeQty(+b.dataset.plus,1));document.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>removeProduct(+b.dataset.r))}
function openDrawer(v=true){$('#drawer').classList.toggle('open',v);$('#overlay').classList.toggle('open',v)}
$('#search').oninput=renderProducts;$('#openQuote').onclick=()=>openDrawer();$('#closeQuote').onclick=()=>openDrawer(false);$('#overlay').onclick=()=>openDrawer(false);$('#clearQuote').onclick=()=>{quantities={};renderProducts();renderQuote()};$('#sendQuote').onclick=()=>{let arr=products.filter(p=>isSelected(p.id));if(!arr.length)return alert('Agrega al menos un producto.');let msg='Hola Alba Clean, quisiera solicitar cotización por:\n\n'+arr.map(p=>'• '+p.n+' ('+p.f+') — Cantidad: '+quantities[p.id]+' unidad'+(quantities[p.id]===1?'':'es')).join('\n')+'\n\nQuedo atento/a. Gracias.';window.open('https://wa.me/56962093275?text='+encodeURIComponent(msg),'_blank')};renderFilters();renderProducts();renderQuote();
