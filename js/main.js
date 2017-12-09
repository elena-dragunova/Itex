$(document).ready(function(){

	//Кнопка меню

	$(".toggle-menu").click(function(){
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		return false;
	})

});
