document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for the header background
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const parallaxSpeed = 0.5;
        const offset = scrollPosition * parallaxSpeed;
        header.style.backgroundPositionY = `${offset}px`;
    });

    // Hide cursor for main name after 5 seconds
    setTimeout(() => {
        const name = document.querySelector('.hero-content h1');
        name.style.borderRight = 'none'; // Remove cursor
    }, 5000); // 5 seconds (2s animation + 3s delay)

    // Existing code for portfolio item clicks
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            const videoUrl = item.getAttribute('data-video');
            if (videoUrl) {
                window.open(videoUrl, '_blank');
            }
        });
    });
});