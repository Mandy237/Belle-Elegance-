
// Burger Icon
function toggleMenu() {
    const navMain= document.querySelector(".nav-link");
    const burgericon= document.querySelector(".burger i");

    navMain.classList.toggle('active');
   
if(burgericon.classList.contains("fa-bars")){

    burgericon.classList.remove("fa-bars");
    burgericon.classList.add("fa-xmark");
}else{

    burgericon.classList.remove("fa-xmark")
    burgericon.classList.add("fa-bars")
}
}