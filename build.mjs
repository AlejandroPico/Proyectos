import {readFile,writeFile} from 'node:fs/promises';
const projects=JSON.parse(await readFile(new URL('./projects.json',import.meta.url),'utf8'));
const privateProjects=JSON.parse(await readFile(new URL('./private-projects.json',import.meta.url),'utf8'));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ids=new Set();
for(const p of projects){if(ids.has(p.id)||/^(inversor|geotodo|orbiter|erp|enterpriseresourceplanning|bluemarblecrisis)$/i.test(p.id))throw Error('Proyecto excluido o duplicado');ids.add(p.id);for(const u of [p.url,p.repo,p.icon].filter(Boolean))if(new URL(u).protocol!=='https:')throw Error('URL no válida');if(!Number.isFinite(Date.parse(p.created))||!p.description)throw Error('Datos incompletos')}
projects.sort((a,b)=>b.created.localeCompare(a.created));
for(const p of privateProjects){if(p.url||p.icon||!p.repo.startsWith('https://github.com/AlejandroPico/')||ids.has(p.id))throw Error('Enlace privado no válido');ids.add(p.id)}
privateProjects.sort((a,b)=>b.created.localeCompare(a.created));
const arrow='<span aria-hidden="true">↗</span>';
const git='<svg class="git-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" stroke="none" d="M23.55 10.93 13.07.45a1.55 1.55 0 0 0-2.19 0L8.7 2.63l2.76 2.76a1.84 1.84 0 0 1 2.33 2.34l2.66 2.66a1.84 1.84 0 1 1-1.1 1.04l-2.48-2.48v6.53a1.84 1.84 0 1 1-1.52-.05V8.84a1.84 1.84 0 0 1-.99-2.41L7.64 3.7.45 10.88a1.55 1.55 0 0 0 0 2.19l10.48 10.48a1.55 1.55 0 0 0 2.19 0l10.43-10.43a1.55 1.55 0 0 0 0-2.19Z"/></svg>';
const renderCards=items=>items.map(p=>`<li class="card"><a class="project-link" href="${esc(p.url||p.repo)}" aria-label="${esc(p.name)} · ${p.url?'Abrir aplicación':'Abrir repositorio'}"><div class="project-head"><span class="icon"><span aria-hidden="true">${esc(p.name.slice(0,2).toUpperCase())}</span>${p.icon?`<img src="${esc(p.icon)}" alt="" width="28" height="28" loading="lazy" decoding="async" referrerpolicy="no-referrer">`:''}</span><h2>${esc(p.name)}</h2></div><p>${esc(p.description)}</p></a><a class="repo-link" href="${esc(p.repo)}" aria-label="Repositorio de ${esc(p.name)} en GitHub" title="Repositorio de ${esc(p.name)}">${git}</a></li>`).join('\n');
const cards=renderCards(projects);
const privateCards=renderCards(privateProjects);
const html=`<!doctype html>
<html lang="es"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#ffffff"><meta name="description" content="Acceso directo a los proyectos públicos de Alejandro Pico.">
<title>Proyectos de Alejandro Pico</title>
<link rel="icon" type="image/svg+xml" href="favicon.svg">
<script>
function themeForHour(hour){return hour>=6&&hour<14?'morning':hour>=14&&hour<20?'afternoon':'night'}
let themeChoice='auto';
try{const saved=localStorage.getItem('project-theme');if(['auto','morning','afternoon','night'].includes(saved))themeChoice=saved}catch{}
function applyProjectTheme(){const theme=themeChoice==='auto'?themeForHour(new Date().getHours()):themeChoice;document.documentElement.dataset.theme=theme;document.documentElement.dataset.themeMode=themeChoice;document.querySelector('meta[name="theme-color"]').content={morning:'#ffffff',afternoon:'#f2e4d5',night:'#0b0c0f'}[theme]}
applyProjectTheme();
</script>
<link rel="stylesheet" href="styles.css?v=2"><script src="app.js?v=2" defer></script>
</head><body><div class="page">
<header><h1>Proyectos de <span>Alejandro Pico</span></h1><div class="controls">
<label class="theme" hidden><span class="sr-only">Tema</span><select id="theme" aria-label="Tema"><option value="auto">Automático</option><option value="morning">Mañana</option><option value="afternoon">Tarde</option><option value="night">Noche</option></select></label>
<div class="views" role="group" aria-label="Presentación" hidden>
<button type="button" data-view="grid" aria-label="Ver fichas" aria-pressed="true" title="Fichas"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></button>
<button type="button" data-view="list" aria-label="Ver lista" aria-pressed="false" title="Lista"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h1M3 12h1M3 18h1"/></svg></button>
</div>
<details class="about"><summary aria-label="Acerca de este proyecto" title="Acerca de este proyecto"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v1"/></svg></summary><nav aria-label="Acerca de este proyecto"><a href="https://github.com/AlejandroPico/Proyectos">Este proyecto ${arrow}</a><a href="https://alejandropico.github.io/Portfolio/">Portfolio ${arrow}</a></nav></details>
</div></header><main><ul class="grid" id="projects" aria-label="Proyectos, del más reciente al más antiguo">${cards}</ul><section class="private-section" aria-labelledby="private-title"><h2 class="section-title" id="private-title">Privados</h2><ul class="grid" id="private-projects" aria-label="Proyectos privados, del más reciente al más antiguo">${privateCards}</ul></section></main>
</div></body></html>`;
await writeFile(new URL('./index.html',import.meta.url),html);
console.log(projects.length+' proyectos generados.');
