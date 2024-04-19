document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector(".nav-menu-moblie");
    const navMenu = document.querySelector(".nav-menu");
    toggleBtn.addEventListener("click", function(){
    console.log("clicked");
    toggleBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    });

    function toggleMenu() {
        menuItems.classList.toggle('hidden');
        if (menuItems.classList.contains('hidden')) {
            menuBtn.innerText = 'Menu';
        } else {
            menuBtn.innerText = 'Disable Menu';
        }
    }


    function updateMenuVisibility() {
        if (window.innerWidth >= 1024) {
            menuItems.classList.add('hidden');
            menuBtn.style.display = 'none';
        } else {
            menuItems.classList.remove('hidden');
            menuBtn.style.display = 'block';
        }
    }

    updateMenuVisibility();

    window.addEventListener('resize', function () {
        updateMenuVisibility();
    });
});










