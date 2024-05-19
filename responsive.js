document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('header nav');
    const toggleButton = document.querySelector('#toggle-button');

    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('flex');
        nav.classList.toggle('flex-column');
    });
});