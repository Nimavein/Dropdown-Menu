let dropdownButton = document.getElementById("dropdown-button");
let leftCarouselButton = document.getElementById("left-change");
let rightCarouselButton = document.getElementById("right-change");
let leftSlide = document.getElementById("left-slide");
let centerSlide = document.getElementById("middle-slide");
let rightSlide = document.getElementById("right-slide");

dropdownButton.addEventListener("click", function(){
    let dropdown = document.getElementById("navbar-dropdown");
    if (dropdown.classList.contains("invisible")) {
        dropdown.classList.remove("invisible");
    } else {
        dropdown.classList.add("invisible");
    }
    
});


rightCarouselButton.addEventListener("click", function(){
    let leftSlideContent = document.getElementById("left-slide").innerHTML;
    let middleSlideContent = document.getElementById("middle-slide").innerHTML;
    let rightSlideContent = document.getElementById("right-slide").innerHTML;
    leftSlide.innerHTML = middleSlideContent;
    centerSlide.innerHTML = rightSlideContent;
    rightSlide.innerHTML = leftSlideContent;
});

leftCarouselButton.addEventListener("click", function(){
    let leftSlideContent = document.getElementById("left-slide").innerHTML;
    let middleSlideContent = document.getElementById("middle-slide").innerHTML;
    let rightSlideContent = document.getElementById("right-slide").innerHTML;
    leftSlide.innerHTML = rightSlideContent;
    centerSlide.innerHTML = leftSlideContent;
    rightSlide.innerHTML = middleSlideContent;
});