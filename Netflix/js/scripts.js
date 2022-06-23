window.addEventListener("scroll", function(){
    var nav = document.querySelector(".navbar");
    nav.classList.toggle("scrolldown", window.scrollY > 0);
})
