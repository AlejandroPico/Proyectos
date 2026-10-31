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
const git='<svg class="github-icon" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" stroke="none" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>';
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
<link rel="stylesheet" href="styles.css?v=3"><script src="app.js?v=3" defer></script>
</head><body><div class="page">
<header><h1>Proyectos de <span>Alejandro Pico</span></h1><div class="controls">
<button id="theme" class="theme-button" type="button" aria-label="Tema: Automático. Cambiar a Mañana" title="Automático · Cambiar a Mañana" hidden><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg></button>
<div class="views" role="group" aria-label="Presentación" hidden>
<button type="button" data-view="grid" aria-label="Ver fichas" aria-pressed="true" title="Fichas"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></button>
<button type="button" data-view="list" aria-label="Ver lista" aria-pressed="false" title="Lista"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h1M3 12h1M3 18h1"/></svg></button>
</div>
<details class="about"><summary aria-label="Acerca de este proyecto" title="Acerca de este proyecto"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v1"/></svg></summary><nav aria-label="Acerca de este proyecto"><a href="https://github.com/AlejandroPico/Proyectos">Este proyecto ${arrow}</a><a href="https://alejandropico.github.io/Portfolio/">Portfolio ${arrow}</a></nav></details>
</div></header><main><ul class="grid" id="projects" aria-label="Proyectos, del más reciente al más antiguo">${cards}</ul><section class="private-section" aria-labelledby="private-title"><h2 class="section-title" id="private-title">Privados</h2><ul class="grid" id="private-projects" aria-label="Proyectos privados, del más reciente al más antiguo">${privateCards}</ul></section></main>
</div></body></html>`;
await writeFile(new URL('./index.html',import.meta.url),html);
console.log(projects.length+' proyectos generados.');
