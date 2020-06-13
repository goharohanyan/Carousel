var slideIndex = 1;

var dots = document.getElementsByClassName("nav");

showSlides(slideIndex);

let prev = document.querySelector(".prev")
prev.addEventListener("click", function(){
  plusSlides(-1);
})

let next = document.querySelector(".next")
next.addEventListener("click", function(){
  plusSlides(1);
})

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(index) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (index > slides.length) {slideIndex = 1}    
  if (index < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}