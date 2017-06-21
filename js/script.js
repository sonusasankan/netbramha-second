var select = document.getElementsByTagName('select');
Array.prototype.forEach.call(select, function(el, i, ar){
 var children = el.children;
 var numberOfOptions = children.length;

 el.classList.add("select-hidden");
 var wraper = "<div class='select'>" + el.outerHTML + "</div>";
 el.outerHTML = wraper;

 wraper = document.getElementsByClassName('select');
 var select_styled = document.createElement("div");
 var select_list = document.createElement("ul");
 var value = el.children[0].value;
 var visible_icon = el.children[0].dataset.icon;

 for(var i = 0; i < wraper.length; i++){
   wraper[i].appendChild(select_styled);
   select_styled.classList.add("select-styled");
   select_styled.innerHTML='<i class="fa '+visible_icon+' "></i>'+ value;
   wraper[i].appendChild(select_list);
   select_list.classList.add("select-options");
 }
 for(var j = 0; j < el.children.length; j++){
   var icon = el.children[j].dataset.icon;
    iconTag = '<i class="fa '+ icon +'"></i>';
    options = document.createElement("li");
    options.innerHTML = iconTag + el.children[j].innerHTML;
    options.setAttribute('rel',el.children[j].value);
    select_list.appendChild(options);

    options.addEventListener("click", function(element){
       select_styled.innerHTML= element.target.innerHTML;
       document.querySelector('select').value= element.target.getAttribute('rel');
       select_list.style.display = "none";
    });
  }

 select_list.style.display = "none";
  select_styled.addEventListener("click", function(){
     if(select_list.style.display == "none"){
       select_list.style.display = "block";
     } else{
        select_list.style.display = "none";
      }
  });


});
