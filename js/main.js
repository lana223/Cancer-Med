$(function() {
'use strict';

var winH   = $ (window). innerHeight(),
    upperH = $ ('.upper-bar').innerHeight(),
    navH   = $ ('.upper-bar').innerHeight();
 $('.slider , .carousel-item').height(winH - ( upperH + navH ));

});



$(window).on('load',function(){
    $(".preloader").fadeOut(10000);
    
})

window.onscroll = function () {
    var header_navbar = document.querySelector(".navbar");
    var sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");
    } else {
        header_navbar.classList.remove("sticky");
    }



    // show or hide the back-top-top button
    var backToTo = document.querySelector(".scroll-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTo.style.display = "block";
    } else {
        backToTo.style.display = "none";
    }
};

new WOW().init();

function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result)
    }
    reader.readAsDataURL(file);
  }