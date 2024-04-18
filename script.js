document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const menuItems = document.getElementById('menuItems');

    function toggleMenu() {
        menuItems.classList.toggle('hidden');
        if (menuItems.classList.contains('hidden')) {
            menuBtn.innerText = 'Menu';
        } else {
            menuBtn.innerText = 'Disable Menu';
        }
    }

    menuBtn.addEventListener('click', toggleMenu);

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
