function search(){
   var input,filter,menu,menuItems,links;
   input = document.getElementById("search");
   filter = input.value.toUpperCase();
   menu = document.getElementById("menu");
   menuItems = menu.getElementsByTagName("li");
   for(var i=0;i<menuItems.length;i++){
      links = menuItems[i].getElementsByTagName("a")[0];
      if(links.innerHTML.toUpperCase().indexOf(filter)>-1){
         menuItems[i].style.display="";
      }else{
         menuItems[i].style.display="none";
      }
   }
}