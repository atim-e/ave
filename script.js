// FOR STICKY NAVBAR HEADER

// When the user scrolls the page, execute myFunction

// window.onscroll = function() {myFunction()};

// Get the header

// var header = document.getElementById("stickyHeader");

// Get the offset position of the navbar

// var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }



// FOR HEADER: Toggle between showing & hiding the nav links when user clicks on hamburger icon 

function navFunction() {
  const z = document.getElementById("topNavLinks");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";
  }
}
// JS HEADER ENDS HERE


var slideNum = 1;
showSlides(slideNum);

// Next/previous controls
let changeSlide = (n) => {showSlides(slideNum += n)};

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideNum = 1}
  if (n < 1) {slideNum = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideNum-1].style.display = "block";
  
}
