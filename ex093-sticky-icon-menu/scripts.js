const menu = document.querySelectorAll('[data-menu]');
const cssActive = 'active';

menu.forEach(function(e){
   e.addEventListener('click',function(){
      for(i=0;i<menu.length;i++){
         menu[i].classList.remove(cssActive);
      }
      e.classList.add(cssActive);
   })
});