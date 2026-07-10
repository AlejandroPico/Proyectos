const planBText={
  es:{brand:'Portfolio',lab:'Edición experimental · 2026',location:'Barcelona · Full stack, sistemas y producto',projects:'Ver proyectos',cv:'Descargar CV',projectLabel:'Proyecto'},
  ca:{brand:'Portfolio',lab:'Edició experimental · 2026',location:'Barcelona · Full stack, sistemes i producte',projects:'Veure projectes',cv:'Descarregar CV',projectLabel:'Projecte'},
  en:{brand:'Portfolio',lab:'Experimental edition · 2026',location:'Barcelona · Full stack, systems and product',projects:'View projects',cv:'Download CV',projectLabel:'Project'},
  fr:{brand:'Portfolio',lab:'Édition expérimentale · 2026',location:'Barcelone · Full stack, systèmes et produit',projects:'Voir les projets',cv:'Télécharger le CV',projectLabel:'Projet'},
  de:{brand:'Portfolio',lab:'Experimentelle Edition · 2026',location:'Barcelona · Full Stack, Systeme und Produkt',projects:'Projekte ansehen',cv:'CV herunterladen',projectLabel:'Projekt'},
  pt:{brand:'Portfolio',lab:'Edição experimental · 2026',location:'Barcelona · Full stack, sistemas e produto',projects:'Ver projetos',cv:'Baixar CV',projectLabel:'Projeto'},
  it:{brand:'Portfolio',lab:'Edizione sperimentale · 2026',location:'Barcellona · Full stack, sistemi e prodotto',projects:'Vedi progetti',cv:'Scarica CV',projectLabel:'Progetto'}
};
function planBLang(){return document.documentElement.lang||'es'}
function planBApplyText(){const t=planBText[planBLang()]||planBText.es;const brand=document.querySelector('.plan-b-brand span');if(brand)brand.textContent=t.brand;const lab=document.querySelector('[data-plan-b="lab"]');if(lab)lab.textContent=t.lab;const location=document.querySelector('[data-plan-b="location"]');if(location)location.textContent=t.location;const projects=document.querySelector('[data-plan-b="projects"]');if(projects)projects.textContent=t.projects+' ↗';const cv=document.querySelector('[data-plan-b="cv"]');if(cv)cv.textContent=t.cv+' ↓';document.querySelectorAll('.project-index').forEach((node,index)=>node.setAttribute('aria-label',t.projectLabel+' '+String(index+1).padStart(2,'0')))}
function planBEnhance(){
  if(document.body.classList.contains('plan-b'))return;
  document.body.classList.add('plan-b');
  const nav=document.querySelector('.site-nav');
  if(nav){const brand=document.createElement('a');brand.className='plan-b-brand';brand.href='#inicio';brand.innerHTML='<b>AP</b><span>Portfolio</span>';nav.insertBefore(brand,nav.firstChild)}
  const heroInner=document.querySelector('.hero-inner');
  if(heroInner){const consoleBar=document.createElement('div');consoleBar.className='hero-console';consoleBar.innerHTML='<div><small data-plan-b="lab">Edición experimental · 2026</small><br><strong data-plan-b="location">Barcelona · Full stack, sistemas y producto</strong></div><a href="#proyectos" data-plan-b="projects">Ver proyectos ↗</a><a href="CV/CV%20ES%20-%20Alejandro%20Pico.pdf" download data-plan-b="cv">Descargar CV ↓</a>';heroInner.appendChild(consoleBar)}
  const sections=[...document.querySelectorAll('main>.section')];sections.forEach((section,index)=>section.dataset.sectionIndex=String(index+1).padStart(2,'0'));
  document.querySelectorAll('.project-card').forEach((card,index)=>{if(!card.querySelector('.project-index')){const number=document.createElement('span');number.className='project-index';number.textContent=String(index+1).padStart(2,'0');card.appendChild(number)}if(!card.querySelector('.project-launch')){const launch=document.createElement('span');launch.className='project-launch';launch.setAttribute('aria-hidden','true');launch.textContent='↗';card.appendChild(launch)}});
  if(matchMedia('(pointer:fine)').matches){const cursor=document.createElement('div');cursor.className='plan-b-cursor';document.body.appendChild(cursor);window.addEventListener('pointermove',event=>{cursor.style.left=event.clientX+'px';cursor.style.top=event.clientY+'px';document.body.style.setProperty('--pb-x',(event.clientX/window.innerWidth*100).toFixed(1)+'%');document.body.style.setProperty('--pb-y',(event.clientY/window.innerHeight*100).toFixed(1)+'%')},{passive:true});document.addEventListener('pointerover',event=>cursor.classList.toggle('hot',Boolean(event.target.closest('a,button,.project-card,.tech-card'))))}
  planBApplyText();
}
if(document.readyState==='loading')window.addEventListener('DOMContentLoaded',planBEnhance,{once:true});else planBEnhance();
document.addEventListener('portfolio-language-change',()=>setTimeout(planBApplyText,0));
