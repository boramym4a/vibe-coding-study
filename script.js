let isDarkMode = true;

function toggleTheme() {
    const body = document.body;
    const toggleBtn = document.querySelector('.theme-toggle');
    const buttons = document.querySelectorAll('button:not(.theme-toggle)');
    const links = document.querySelectorAll('a');

    if (isDarkMode) {
        // 라이트모드: 흰 배경
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        toggleBtn.classList.add('active');

        // 버튼과 링크 색상 변경
        buttons.forEach(btn => {
            btn.style.backgroundColor = '#333';
            btn.style.color = 'white';
        });
        links.forEach(link => {
            link.style.backgroundColor = '#333';
            link.style.color = 'white';
        });
    } else {
        // 다크모드: 검은 배경
        body.style.backgroundColor = '#111111';
        body.style.color = 'white';
        toggleBtn.classList.remove('active');

        // 버튼과 링크 색상 변경
        buttons.forEach(btn => {
            btn.style.backgroundColor = 'white';
            btn.style.color = 'black';
        });
        links.forEach(link => {
            link.style.backgroundColor = 'white';
            link.style.color = 'black';
        });
    }

    isDarkMode = !isDarkMode;
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
        toggleBtn.classList.remove('active');
    }
});
