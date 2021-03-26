let dropdownButton = document.getElementById("dropdown-button");
let leftCarouselButton = document.getElementById("left-change");
let rightCarouselButton = document.getElementById("right-change");
let leftSlide = document.getElementById("left-slide");
let centerSlide = document.getElementById("middle-slide");
let rightSlide = document.getElementById("right-slide");
let dotOne = document.getElementById("dot1");
let dotTwo = document.getElementById("dot2");
let dotThree = document.getElementById("dot3");
let dots = [dotOne, dotTwo, dotThree];

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
    for (let i = 0; dots.length; i++) {
        if (i === dots.length-1) {
            dots[i].classList.remove("dot-active");
            dots[0].classList.add("dot-active")
            break;
        }
        if (dots[i].classList.contains("dot-active")){
            
            dots[i].classList.remove("dot-active");
            dots[i+1].classList.add("dot-active")
            break;
        }
    }
});

leftCarouselButton.addEventListener("click", function(){
    let leftSlideContent = document.getElementById("left-slide").innerHTML;
    let middleSlideContent = document.getElementById("middle-slide").innerHTML;
    let rightSlideContent = document.getElementById("right-slide").innerHTML;
    leftSlide.innerHTML = rightSlideContent;
    centerSlide.innerHTML = leftSlideContent;
    rightSlide.innerHTML = middleSlideContent;
    for (let i = 0; dots.length; i++) {
        if (dots[0].classList.contains("dot-active")){
            dots[0].classList.remove("dot-active");
            dots[2].classList.add("dot-active")
            break;
        };
        if (dots[i].classList.contains("dot-active")){
            
            dots[i].classList.remove("dot-active");
            dots[i-1].classList.add("dot-active")
            break;
        };
    };
});

