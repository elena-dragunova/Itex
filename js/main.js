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