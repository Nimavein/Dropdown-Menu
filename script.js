let dropdownButton = document.getElementById("dropdown-button");

dropdownButton.addEventListener("click", function(){
    let dropdown = document.getElementById("navbar-dropdown");
    if (dropdown.classList.contains("invisible")) {
        dropdown.classList.remove("invisible");
    } else {
        dropdown.classList.add("invisible");
    }
    
});