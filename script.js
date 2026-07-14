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
});
