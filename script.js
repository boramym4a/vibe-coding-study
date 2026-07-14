let isDarkMode = true;

function toggleTheme() {
    const body = document.body;
    const toggleBtn = document.querySelector('.theme-toggle');

    if (isDarkMode) {
        body.classList.add('light-mode');
        toggleBtn.classList.add('active');
    } else {
        body.classList.remove('light-mode');
        toggleBtn.classList.remove('active');
    }

    isDarkMode = !isDarkMode;
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
        toggleBtn.classList.remove('active');
    }

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('animationend', function() {
            this.style.animation = 'none';
        });
    });

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            if (navMenu.classList.contains('active')) {
                hamburgerBtn.textContent = '✕';
            } else {
                hamburgerBtn.textContent = '☰';
            }
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburgerBtn.textContent = '☰';
            });
        });
    }

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('문의가 접수되었습니다. 감사합니다!');
                form.reset();
            }
        });
    }
});
