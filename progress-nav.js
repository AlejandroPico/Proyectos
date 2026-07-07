function initProgressNavigation(){
  const nav=document.querySelector('.site-nav');
  const links=[...document.querySelectorAll('.nav-links a[href^="#"]')]
    .filter(link=>document.querySelector(link.getAttribute('href')));
  if(!nav||!links.length)return;

  const style=document.createElement('style');
  style.textContent=`
    .site-nav{overflow:hidden;}
    .scroll-progress{position:absolute;left:0;bottom:0;width:100%;height:2px;pointer-events:none;}
    .scroll-progress span{display:block;width:0;height:100%;background:color-mix(in srgb,var(--accent) 55%,var(--muted));opacity:.7;transition:width .08s linear;}
    .nav-links a[href^="#"].active{color:var(--text);background:color-mix(in srgb,var(--surface) 58%,transparent);border-color:color-mix(in srgb,var(--accent) 28%,var(--line));}
    .nav-links a[href^="#"].active::after{content:"";width:.28rem;height:.28rem;border-radius:50%;background:var(--accent);opacity:.55;margin-left:.42rem;}
  `;
  document.head.appendChild(style);

  const progress=document.createElement('div');
  progress.className='scroll-progress';
  progress.innerHTML='<span></span>';
  nav.appendChild(progress);
  const bar=progress.querySelector('span');
  const sections=links.map(link=>({link,section:document.querySelector(link.getAttribute('href'))}));

  function updateProgress(){
    const doc=document.documentElement;
    const max=Math.max(1,doc.scrollHeight-window.innerHeight);
    const value=Math.min(1,Math.max(0,window.scrollY/max));
    bar.style.width=(value*100).toFixed(2)+'%';

    const checkpoint=window.scrollY+(window.innerHeight*.38);
    let current=sections[0];
    sections.forEach(item=>{if(item.section.offsetTop<=checkpoint)current=item;});
    links.forEach(link=>link.classList.remove('active'));
    if(current)current.link.classList.add('active');
  }

  updateProgress();
  window.addEventListener('scroll',updateProgress,{passive:true});
  window.addEventListener('resize',updateProgress);
}

if(document.readyState==='loading'){
  window.addEventListener('DOMContentLoaded',initProgressNavigation,{once:true});
}else{
  initProgressNavigation();
}
