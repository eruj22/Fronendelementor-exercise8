// expand mobile navigation
const nav = document.getElementById('nav-menu');
const toggle = document.getElementById('header-toggle');

toggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
});

// active and remove mobile navigation