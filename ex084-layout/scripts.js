const elements = document.querySelectorAll('[data-animation]');
const animationClass = 'animation';

function scrollAnimation(){
   const topPage = window.pageYOffset+((window.innerHeight*3)/4); // 3/4 of window
   elements.forEach(function(element){
      if(topPage > element.offsetTop){
         element.classList.add(animationClass);
      }else{
         element.classList.remove(animationClass);
      }
   });
}

if(elements.length){
   window.addEventListener('scroll', function(){
      scrollAnimation();
   })
}

function clickModal(img){
   const windowModal = document.getElementById('modalWindow');
   const imgModal = document.getElementById('modalImg');
   const txtModal = document.getElementById('modalTxt');
   const btnClose = document.getElementById('btnClose');

   windowModal.classList.remove("hidesModalWindow");
   windowModal.classList.add("showModalWindow");

   imgModal.src = img.src;
   imgModal.alt = img.alt;
   txtModal.innerHTML = img.alt;

   btnClose.onclick = function(){
      windowModal.classList.add("hidesModalWindow");
      windowModal.classList.remove("showModalWindow");
   }
}