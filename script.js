const features = document.getElementById("features");
const featuresMenu = document.getElementById("features-menu");
const company = document.getElementById("company");
const companyMenu = document.getElementById("company-menu");

let toggleMenu = {features: false, company: false};

function makeDropDownButton (buttonElement, menuElement){

    const openMenu = () => {
        buttonElement.children[0].src="images/icon-arrow-up.svg";
        buttonElement.children[0].style.filter="brightness(0)";
        menuElement.style.display = "block";
    }

    const closeMenu = () => {
        menuElement.style.display = "none";
        buttonElement.children[0].src="images/icon-arrow-down.svg";
        buttonElement.children[0].style.filter="brightness(1)";
    }

    if(window.screen.width > 550){
        buttonElement.addEventListener("mouseover", () => {
            openMenu()
        });
    
        buttonElement.addEventListener("mouseleave", () => {
            closeMenu()
        });
    } else { // Mobile menu
        buttonElement.addEventListener("click", () => {

            if(buttonElement.id === "features"){
                if(toggleMenu.features) closeMenu();
                else openMenu();
                toggleMenu.features = !toggleMenu.features;
            } else {
                if(toggleMenu.company) closeMenu();
                else openMenu();
                toggleMenu.company = !toggleMenu.company
            }
        });
    }

}

makeDropDownButton(features, featuresMenu);

makeDropDownButton(company, companyMenu);


// Mobile menu

const mobileMenu = document.getElementById("mobile-menu");
const backgroundElement = document.getElementById("background");
const navOptionsElement = document.getElementById("nav-options");
const closeMenuElement = document.getElementById("close-menu");


function openMenu(){
    navOptionsElement.style.padding = "1rem";
    navOptionsElement.style.width = "65%";
    backgroundElement.style.zIndex = "0";
    backgroundElement.style.opacity = ".2";
}

function closeMenu(){
    navOptionsElement.style.padding = "0";
    navOptionsElement.style.width = "0";
    backgroundElement.style.zIndex = "-1"
    backgroundElement.style.opacity = "0";
}


mobileMenu.addEventListener("click", () => {
    openMenu();
});

backgroundElement.addEventListener("click", () => {
    closeMenu();
});

closeMenuElement.addEventListener("click", () => {
    closeMenu();
});
