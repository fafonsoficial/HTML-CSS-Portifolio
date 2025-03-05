window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    if (window.scrollY > 50) { // Quando rolar mais de 50px
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});