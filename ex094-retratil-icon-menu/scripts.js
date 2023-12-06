const menus = document.querySelectorAll('[data-menu]');
const cssActive = 'active';

menus.forEach(function(e){
   e.addEventListener('click',function(){
      for(i=0;i<menus.length;i++){
         menus[i].classList.remove(cssActive);
      }
      e.classList.add(cssActive);
   });
});

const btnMenu = document.getElementsByClassName('btnMenu')[0];
const menu = document.getElementsByClassName('menu')[0];
btnMenu.addEventListener('click',function(){
   menu.classList.toggle('menuOpen');
});