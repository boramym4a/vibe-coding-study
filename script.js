let isDarkMode = true;

function toggleTheme() {
    const body = document.body;
    const toggleBtn = document.querySelector('.theme-toggle');

    if (isDarkMode) {
        // 라이트모드: 흰 배경
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        body.classList.add('light-mode');
        toggleBtn.classList.add('active');
    } else {
        // 다크모드: 검은 배경
        body.style.backgroundColor = '#111111';
        body.style.color = 'white';
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
            this.style.animation = '';
        });
    });
});
