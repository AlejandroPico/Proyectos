const grid = document.querySelector('#projects');
const buttons = [...document.querySelectorAll('[data-view]')];
const about = document.querySelector('.about');
const themeSelect = document.querySelector('#theme');
document.querySelector('.views').hidden = false;
document.querySelector('.theme').hidden = false;
themeSelect.value = themeChoice;
themeSelect.addEventListener('change', () => {
  themeChoice = themeSelect.value;
  applyProjectTheme();
  try { localStorage.setItem('project-theme', themeChoice); } catch {}
});
setInterval(() => { if (themeChoice === 'auto') applyProjectTheme(); }, 60000);
document.addEventListener('visibilitychange', () => { if (!document.hidden && themeChoice === 'auto') applyProjectTheme(); });
function setView(view) {
  document.querySelectorAll('.grid').forEach(list => list.classList.toggle('list', view === 'list'));
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
}
for (const button of buttons) button.addEventListener('click', () => {
  setView(button.dataset.view);
  try { localStorage.setItem('project-view', button.dataset.view); } catch {}
});
try { setView(localStorage.getItem('project-view')); } catch {}
for (const image of grid.querySelectorAll('img')) {
  image.addEventListener('load', () => image.classList.add('loaded'), {once:true});
  image.addEventListener('error', () => image.remove(), {once:true});
  if (image.complete) {
    if (image.naturalWidth) image.classList.add('loaded');
    else image.remove();
  }
}
document.addEventListener('keydown', event => { if (event.key === 'Escape') about.open = false; });
document.addEventListener('click', event => { if (!about.contains(event.target)) about.open = false; });
