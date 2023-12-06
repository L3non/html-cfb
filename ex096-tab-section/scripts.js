function openTab(evt,nameTab){
   const contentTab = document.getElementsByClassName("tabs-content");
   for (var i=0;i<contentTab.length;i++){
      contentTab[i].style.display="none";
   }
   const btnTab = document.querySelectorAll('[data-Tabsbtn]');
   for (var i=0;i<btnTab.length;i++){
      btnTab[i].classList.remove('active')
   }
   document.getElementById(nameTab).style.display="block";
   evt.currentTarget.classList.add("active");
}

document.getElementById("first").click();