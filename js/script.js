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
 for(var i = 0; i < wraper.length; i++){
   wraper[i].appendChild(select_styled);
   select_styled.classList.add("select-styled");
   select_styled.innerHTML="<span>"+ value +"</span>";
   wraper[i].appendChild(select_list);
   select_list.classList.add("select-options");
 }
 for(var i = 0; i < el.children.length; i++){
    options = document.createElement("li");
    options.innerText = el.children[i].value;
    select_list.appendChild(options);
    options.addEventListener("click", function(el){
       select_styled.innerHTML="<span>"+ el.target.innerText +"</span>";
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
/*
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
*/
