const accordionArray = document.getElementsByClassName('accordion');

for (var i=0;i<accordionArray.length;i++){
   accordionArray[i].addEventListener("click",function(){
      this.classList.toggle("selected");
      const panel = this.nextElementSibling;
      if(panel.style.maxHeight){
         panel.style.maxHeight = null;
      } else{
         panel.style.maxHeight = panel.scrollHeight+"px";
      }
   });
}