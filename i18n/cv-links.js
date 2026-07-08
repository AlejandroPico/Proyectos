function fixPortfolioCvLinks(){
  const links=document.querySelectorAll('.cv-actions a');
  if(links[0]){links[0].href='CV/CV%20ES%20-%20Alejandro%20Pico.pdf';links[0].setAttribute('download','CV ES - Alejandro Pico.pdf')}
  if(links[1]){links[1].href='CV/CV%20EN%20-%20Alejandro%20Pico.pdf';links[1].setAttribute('download','CV EN - Alejandro Pico.pdf')}
}
if(document.readyState==='loading')window.addEventListener('DOMContentLoaded',fixPortfolioCvLinks,{once:true});else fixPortfolioCvLinks();
setTimeout(fixPortfolioCvLinks,250);
