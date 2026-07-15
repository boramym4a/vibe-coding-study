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

    let lastScrollY = 0;
    let ticking = false;

    window.addEventListener('scroll', function() {
        lastScrollY = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(updateScrollClass);
            ticking = true;
        }
    });

    function updateScrollClass() {
        if (toggleBtn) {
            if (lastScrollY > 50) {
                toggleBtn.classList.add('scrolled');
            } else {
                toggleBtn.classList.remove('scrolled');
            }
        }
        ticking = false;
    }

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('animationend', function() {
            this.style.animation = 'none';
        });
    });

    let currentPage = 1;

    function showPage(page) {
        currentPage = page;

        projectCards.forEach(card => {
            if (parseInt(card.dataset.page) === page) {
                card.style.display = 'block';
                card.style.animation = 'none';
                void card.offsetWidth;
                card.style.animation = '';
            } else {
                card.style.display = 'none';
            }
        });

        updatePaginationButtons();
    }

    function updatePaginationButtons() {
        document.querySelectorAll('.pagination-number').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.page) === currentPage);
        });

        document.getElementById('prev-btn').disabled = currentPage === 1;
        document.getElementById('next-btn').disabled = currentPage === 2;
    }

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) showPage(currentPage - 1);
        });

        nextBtn.addEventListener('click', () => {
            if (currentPage < 2) showPage(currentPage + 1);
        });

        document.querySelectorAll('.pagination-number').forEach(btn => {
            btn.addEventListener('click', () => {
                showPage(parseInt(btn.dataset.page));
            });
        });

        showPage(1);
    }

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
