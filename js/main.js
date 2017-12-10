$(document).ready(function(){

	//Кнопка меню

	$(".toggle-menu").click(function(){
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		return false;
	});

  //Аккордеон

  $(".accordion-button").click(function(){
    $(this).toggleClass("acc-active");
    $(this).next('div').slideToggle(1000);
  });

  //Подсчет суммы заказа

  var checkBoxes = function() {
    var sum = 100000;
    $("input:checked").each(function(){
      sum+= parseInt($(this).val());
      
    });
    var strSum = sum.toString();
    $('.calculated-price').html((strSum.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')) + " р.");
  }
  checkBoxes();
  $("input").click(function() {
    var sum = 100000;
    checkBoxes();
  });

  //Список дел
  $(".confirm-button").click(function() { 
      var newItem = $("input[name=list-item-input]").val();
      
      if (!newItem) {
        alert("Введите текст");
        return false;
      }

      $(".list").append('<li class="list-item"><span class = "list-item-text">'+newItem+
        '</span><button class = "button-edit"><i class="fa fa-pencil" aria-hidden="true"></i></button>'+
        '<button class = "button-remove"><i class="fa fa-times" aria-hidden="true"></i></button></li>');
      $(".list-input").val("");

      $(".button-remove").click(function() { 
        $(this).parents(".list-item").remove();
        return false;
      });

      $(".button-edit").click(function() { 
        $(this).closest("li").find("span").prop("contenteditable", true).focus();
        return false;
      });

      return false;

  });

  $(".clear-button").click(function() { 
        $(".list-input").val("");
        return false;
  });

});

//Слайдер

var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
showCycle();

function showCycle() {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " dot-active"; 
    interval = setTimeout(showCycle, 2000);

}

function showSlides(n) {
  var i;
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" dot-active", "");
  }

  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " dot-active";
}

function plusSlides(n) {
	clearTimeout(interval);
  	showSlides(slideIndex += n);
}