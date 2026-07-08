var portfolioThemeMode='auto';
try{portfolioThemeMode=localStorage.getItem('portfolio-theme')||'auto'}catch(e){}
function portfolioAutoTheme(){var h=new Date().getHours();return h>=7&&h<20?'light':'dark'}
function portfolioApplyTheme(){var t=portfolioThemeMode==='auto'?portfolioAutoTheme():portfolioThemeMode;document.body.setAttribute('data-theme',t);var b=document.getElementById('themeButton');if(b)b.textContent=portfolioThemeMode==='auto'?'Auto':portfolioThemeMode==='light'?'Claro':'Oscuro'}
window.addEventListener('DOMContentLoaded',function(){var b=document.getElementById('themeButton');portfolioApplyTheme();if(b)b.addEventListener('click',function(){portfolioThemeMode=portfolioThemeMode==='auto'?'light':portfolioThemeMode==='light'?'dark':'auto';try{localStorage.setItem('portfolio-theme',portfolioThemeMode)}catch(e){}portfolioApplyTheme()});var l=document.getElementById('languageSelect');if(l)l.addEventListener('change',function(){document.documentElement.lang=l.value;try{localStorage.setItem('portfolio-language',l.value)}catch(e){}})});
setInterval(function(){if(portfolioThemeMode==='auto')portfolioApplyTheme()},60000);
