// This is for My Hamburger_____________________//
function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.zIndex = "11";
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

// ____________________________________________________________________________//
// _____________________________Slide Show_____________________________________//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// ____________________________________________________________________________//