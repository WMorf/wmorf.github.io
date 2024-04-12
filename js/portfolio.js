
// displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

//function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName('mySlides'); //array of myslides
    var dots = document.getElementsByClassName("dot"); //array of dots
    if (n > slides.length) {slideIndex = 1}; //loops to first slide if exceeds length
    if (n < 1) {slideIndex = slides.length}; //loops to last slide if less than 1
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //sets slides in array display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //removes active from dots in array
    }
    slides[slideIndex - 1].style.display = "block" //displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; //adds the active styling to the dot associated with the image
}

