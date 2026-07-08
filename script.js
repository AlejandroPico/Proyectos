const menuButton=document.querySelector('.menu-button');
const navLinks=document.querySelector('.nav-links');
const year=document.querySelector('#year');
if(year)year.textContent=new Date().getFullYear();
if(menuButton&&navLinks){menuButton.addEventListener('click',()=>{const isOpen=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(isOpen))});navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}))}
function loadCss(href){if(document.querySelector('link[href^="'+href.split('?')[0]+'"]'))return;const link=document.createElement('link');link.rel='stylesheet';link.href=href;document.head.appendChild(link)}
function loadJs(src){if(document.querySelector('script[src^="'+src.split('?')[0]+'"]'))return;const script=document.createElement('script');script.async=false;script.src=src;document.body.appendChild(script)}
function bindProjectCards(){document.querySelectorAll('.project-card[data-url]').forEach(card=>{if(card.dataset.bound)return;card.dataset.bound='true';card.setAttribute('tabindex','0');card.addEventListener('click',event=>{if(event.target.closest('a'))return;window.open(card.dataset.url,'_blank','noopener')});card.addEventListener('keydown',event=>{if(event.key==='Enter')window.open(card.dataset.url,'_blank','noopener')})})}
loadCss('layout-polish.css?v=20260707-1');
loadCss('glass-ui.css?v=20260707-2');
bindProjectCards();
loadJs('i18n/index.js?v=20260708-2');
loadJs('progress-nav.js?v=20260708-2');
