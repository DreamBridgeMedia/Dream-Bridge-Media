document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        updateThemeIcon(savedTheme === 'dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        body.className = isDark ? 'light-mode' : 'dark-mode';
        localStorage.setItem('theme', isDark ? 'light-mode' : 'dark-mode');
        updateThemeIcon(!isDark);
    });

    function updateThemeIcon(isDark) {
        const moonIcon = themeToggle.querySelector('.fa-moon');
        const sunIcon = themeToggle.querySelector('.fa-sun');
        moonIcon.style.display = isDark ? 'none' : 'inline';
        sunIcon.style.display = isDark ? 'inline' : 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Add intersection observer for role cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all role cards
    document.querySelectorAll('.role-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });

    // Add hover effect for role icons
    document.querySelectorAll('.role-icon').forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.1)';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
        });
    });
});