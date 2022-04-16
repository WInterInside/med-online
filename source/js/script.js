$(window).scroll(function() {
  $('header').toggleClass('header--shadow', $(this).scrollTop() > 0);
});

$(document).ready(function(){
	$('.slider-hero').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:5000,
	});
});

$(document).ready(function(){
	$('.slider-reviews').slick({
		arrows:false,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:5000,
    		responsive:[
			{
				breakpoint: 850,
				settings: {
					slidesToShow:2
				}
			},
      {
				breakpoint: 620,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

(function () {

  const cropElement = document.querySelectorAll('.review__text'), // выбор элементов
        size = 460                                             // кол-во символов
        endCharacter = '...';                                  // окончание

  cropElement.forEach(el => {
      let text = el.innerHTML;

      if (el.innerHTML.length > size) {
          text = text.substr(0, size);
          el.innerHTML = text + endCharacter;
      }
  });

}());

// меню

var menu = document.querySelector(".navigation__menu");
var nav = document.querySelector(".navigation__list");
var body = document.querySelector("body");

nav.classList.add("navigation__list--closed");
menu.classList.add("navigation__menu--off");
body.classList.add("scroll-on")

menu.addEventListener("click", function() {
  if (nav.classList.contains("navigation__list--closed")) {
    nav.classList.remove("navigation__list--closed");
    nav.classList.add("navigation__list--opened");
    menu.classList.remove("navigation__menu--off");
    menu.classList.add("navigation__menu--on");
    body.classList.remove("scroll-on");
    body.classList.add("scroll-stop")
  } else {
    nav.classList.remove("navigation__list--opened");
    nav.classList.add("navigation__list--closed");
    menu.classList.remove("navigation__menu--on");
    menu.classList.add("navigation__menu--off");
    body.classList.remove("scroll-stop");
    body.classList.add("scroll-on")
  }
});

// список услуг

var servicesBtn = document.querySelector(".services__caption");
var servicesList = document.querySelector(".services__list");
var servicesArrow = document.querySelector(".services__arrow");

servicesArrow.classList.add("services__arrow--down");
servicesList.classList.add("services__list--off");

servicesBtn.addEventListener("click", function() {
  if (servicesList.classList.contains("services__list--off")) {
    servicesList.classList.remove("services__list--off");
    servicesList.classList.add("services__list--on");
    servicesArrow.classList.remove("services__arrow--down");
    servicesArrow.classList.add("services__arrow--up");
  } else {
    servicesList.classList.remove("services__list--on");
    servicesList.classList.add("services__list--off");
    servicesArrow.classList.remove("services__arrow--up");
    servicesArrow.classList.add("services__arrow--down");
  }
});

$(document).ready(function(){
  $('a[href^="#"]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top - 150
      }, 1000);
      e.preventDefault();
  });
  return false;
});

// список услуг

var depBtn = document.querySelector(".navigation__item--services");
var depList = document.querySelector(".navigation__services-mobile-list");

depBtn.classList.add("navigation__item--services-off");
depList.classList.add("navigation__services-mobile-list--off");

depBtn.addEventListener("click", function() {
  if (depList.classList.contains("navigation__services-mobile-list--off")) {
    depList.classList.remove("navigation__services-mobile-list--off");
    depList.classList.add("navigation__services-mobile-list--on");
    depBtn.classList.remove("navigation__item--services-off");
    depBtn.classList.add("navigation__item--services-on");
  } else {
    depList.classList.remove("navigation__services-mobile-list--on");
    depList.classList.add("navigation__services-mobile-list--off");
    depBtn.classList.remove("navigation__item--services-on");
    depBtn.classList.add("navigation__item--services-off");
  }
});

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.form__input--tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});
});
