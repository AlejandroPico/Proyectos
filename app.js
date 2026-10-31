const grid = document.querySelector('#projects');
const buttons = [...document.querySelectorAll('[data-view]')];
const about = document.querySelector('.about');
document.querySelector('.views').hidden = false;
function setView(view) {
  grid.classList.toggle('list', view === 'list');
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
}
for (const button of buttons) button.addEventListener('click', () => {
  setView(button.dataset.view);
  try { localStorage.setItem('project-view', button.dataset.view); } catch {}
});
try { setView(localStorage.getItem('project-view')); } catch {}
for (const image of grid.querySelectorAll('img')) {
  image.addEventListener('error', () => image.remove(), {once:true});
  if (image.complete && !image.naturalWidth) image.remove();
}
document.addEventListener('keydown', event => { if (event.key === 'Escape') about.open = false; });
document.addEventListener('click', event => { if (!about.contains(event.target)) about.open = false; });
