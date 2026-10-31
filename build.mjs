import {readFile,writeFile} from 'node:fs/promises';
const projects=JSON.parse(await readFile(new URL('./projects.json',import.meta.url),'utf8'));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ids=new Set();
for(const p of projects){if(ids.has(p.id)||/^(inversor|geotodo|orbiter|erp|enterpriseresourceplanning|bluemarblecrisis)$/i.test(p.id))throw Error('Proyecto excluido o duplicado');ids.add(p.id);for(const u of [p.url,p.repo,p.icon].filter(Boolean))if(new URL(u).protocol!=='https:')throw Error('URL no válida');if(!Number.isFinite(Date.parse(p.created)))throw Error('Fecha no válida')}
projects.sort((a,b)=>b.created.localeCompare(a.created));
const arrow='<span aria-hidden="true">↗</span>';
const cards=projects.map((p,i)=>`<li class="card"><div class="project"><span class="icon tone-${i%6}"><span aria-hidden="true">${esc(p.name.slice(0,2).toUpperCase())}</span>${p.icon?`<img src="${esc(p.icon)}" alt="" width="32" height="32" loading="lazy" decoding="async" referrerpolicy="no-referrer">`:''}</span><h2>${esc(p.name)}</h2></div><div class="links">${p.url?`<a href="${esc(p.url)}" aria-label="Abrir aplicación ${esc(p.name)}">Aplicación ${arrow}</a>`:''}<a href="${esc(p.repo)}" aria-label="Repositorio de ${esc(p.name)}">GitHub ${arrow}</a></div></li>`).join('\n');
const html=`<!doctype html>
<html lang="es"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#f7f8f5"><meta name="description" content="Acceso directo a los proyectos públicos de Alejandro Pigón.">
<title>Proyectos de Alejandro Pigón</title>
<link rel="icon" type="image/svg+xml" href="favicon.svg"><link rel="stylesheet" href="styles.css"><script src="app.js" defer></script>
</head><body><div class="page">
<header><h1>Proyectos de <span>Alejandro Pigón</span></h1><div class="controls">
<div class="views" role="group" aria-label="Presentación" hidden>
<button type="button" data-view="grid" aria-label="Ver fichas" aria-pressed="true" title="Fichas"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></button>
<button type="button" data-view="list" aria-label="Ver lista" aria-pressed="false" title="Lista"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h1M3 12h1M3 18h1"/></svg></button>
</div>
<details class="about"><summary aria-label="Acerca de este proyecto" title="Acerca de este proyecto"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v1"/></svg></summary><nav aria-label="Acerca de este proyecto"><a href="https://github.com/AlejandroPico/Proyectos">Este proyecto ${arrow}</a><a href="https://alejandropico.github.io/Portfolio/">Portfolio ${arrow}</a></nav></details>
</div></header><main><ul class="grid" id="projects" aria-label="Proyectos, del más reciente al más antiguo">${cards}</ul></main>
</div></body></html>`;
await writeFile(new URL('./index.html',import.meta.url),html);
console.log(projects.length+' proyectos generados.');
