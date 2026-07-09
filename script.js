let isDarkMode = true;

function toggleTheme() {
    const body = document.body;
    const toggleBtn = document.querySelector('.theme-toggle');

    if (isDarkMode) {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        toggleBtn.classList.add('active');
    } else {
        body.style.backgroundColor = '#111111';
        body.style.color = 'white';
        toggleBtn.classList.remove('active');
    }

    isDarkMode = !isDarkMode;
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
        toggleBtn.classList.remove('active');
    }
});
