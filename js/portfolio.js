

//form functions
//open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

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

//close the contact form when the user clicks off of it
document.addEventListener("click", function(event) { //event listener for any clicks on the website
    // if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not 
    //happen on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false)