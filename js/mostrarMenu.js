function mostrarMenu() {
    var menu = document.getElementById("menu-header");
    var icone = document.getElementById("icone-menu");

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = "flex";
        icone.classList.remove("fa-bars");
        icone.classList.add("fa-times");
<<<<<<< HEAD
        // Muda para times
=======
        // Muda para times 
>>>>>>> 008c25cd45092c45111d01612d21aeacf6ae7836
    } else {
        menu.style.display = "none";
        icone.classList.remove("fa-times");
        icone.classList.add("fa-bars");
<<<<<<< HEAD
        // Muda para Bars
=======
        // Muda para bars
>>>>>>> 008c25cd45092c45111d01612d21aeacf6ae7836
    }
}