document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('projects-button');
    button.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = "https://denisngeu.github.io/Portfolio/Projet/index.html";
        }, 500);
    });
});

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    const scrollPercent = Math.min(scrollPosition / maxScroll, 1);

    // Modifier le fond de la page
    document.body.style.background = `linear-gradient(
        to bottom,
        rgba(106, 17, 203, ${1 - scrollPercent}),
        rgba(37, 117, 252, ${scrollPercent})
    )`;

    // Modifier le fond des sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.style.background = `linear-gradient(
            to bottom,
            rgba(255, 255, 255, ${1 - scrollPercent}),
            rgba(240, 240, 240, ${scrollPercent})
        )`;
    });
});
