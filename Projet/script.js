document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { 
            nom: "Gestion de Serveurs de Jeu", 
            description: "Configuration et gestion de serveurs pour des jeux multijoueurs.", 
            image: "https://raw.githubusercontent.com/denisngeu/project/main/serveur/085545.png", 
            url: "https://denisngeu.github.io/project/serveur/serveur.html", 
            video: "https://www.youtube.com/watch?v=ID_DE_LA_VIDEO" 
        },
        { 
            nom: "Création de Scripts pour Jeux", 
            description: "Développement de scripts pour l'automatisation des tâches dans les jeux.", 
            image: "https://raw.githubusercontent.com/denisngeu/project/main/script/090222.png", 
            url: "https://denisngeu.github.io/project/script/script.html", 
            video: "https://www.youtube.com/watch?v=ID_DE_LA_VIDEO" 
        },
        { 
            nom: "Création de Sites Web Statique", 
            description: "Conception et développement de sites web statiques modernes.", 
            image: "https://raw.githubusercontent.com/denisngeu/project/main/web/090355.png", 
            url: "https://denisngeu.github.io/project/web/web.html", 
            video: "https://www.youtube.com/watch?v=ID_DE_LA_VIDEO" 
        }
    ];
    
    const container = document.getElementById('projets-container');
    projects.forEach(projet => {
        const projetCard = document.createElement('div');
        projetCard.className = 'project-card';
        projetCard.innerHTML = `
            <img src="${projet.image}" alt="${projet.nom}">
            <h2>${projet.nom}</h2>
            <p>${projet.description}</p>
            <a href="${projet.url}" target="_blank">Voir les projets</a>
            <br>
            <a href="${projet.video}" target="_blank">Voir la vidéo</a>
        `;
        container.appendChild(projetCard);
    });
});

document.body.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 500);
        e.preventDefault();
    }
});
