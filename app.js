const grid = document.querySelector('#projects');
const buttons = [...document.querySelectorAll('[data-view]')];
const about = document.querySelector('.about');
const themeButton = document.querySelector('#theme');
const modes = ['auto','morning','afternoon','night'];
const labels = {auto:'Automático',morning:'Mañana',afternoon:'Tarde',night:'Noche'};
const paths = {
  auto:'<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/>',
  morning:'<path d="M3 19h18M5 15a7 7 0 0 1 14 0M12 2v3M3 7l2 2m16-2-2 2M12 16V8m-3 3 3-3 3 3"/>',
  afternoon:'<path d="M3 19h18M5 15a7 7 0 0 1 14 0M12 2v3M3 7l2 2m16-2-2 2M12 8v8m-3-3 3 3 3-3"/>',
  night:'<path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z"/>'
};
document.querySelector('.views').hidden = false;
themeButton.hidden = false;
function updateThemeButton() {
  const next = modes[(modes.indexOf(themeChoice)+1)%modes.length];
  themeButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">'+paths[themeChoice]+'</svg>';
  themeButton.setAttribute('aria-label', 'Tema: '+labels[themeChoice]+'. Cambiar a '+labels[next]);
  themeButton.title = labels[themeChoice]+' · Cambiar a '+labels[next];
}
updateThemeButton();
themeButton.addEventListener('click', () => {
  themeChoice = modes[(modes.indexOf(themeChoice)+1)%modes.length];
  applyProjectTheme();
  updateThemeButton();
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
