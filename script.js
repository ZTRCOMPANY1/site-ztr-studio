document.addEventListener("DOMContentLoaded", function () {
    // Obtém os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const nomeArtista = urlParams.get("nome");
    const nomeJogo = urlParams.get("nome");

    // Página do Artista
    if (document.body.classList.contains("artista-page")) {
        const tituloArtista = document.getElementById("artista-nome");
        const musicasContainer = document.getElementById("musicas-container");

        // Simulação de músicas lançadas pelo artista
        const musicas = {
            "DJ Julio Beat": [
                { titulo: "Vibe do Beat", spotify: "https://open.spotify.com/track/123" },
                { titulo: "Remix Insano", spotify: "https://open.spotify.com/track/456" }
            ],
            "DJ Jhonatas Felipe": [
                { titulo: "Batida Perfeita", spotify: "https://open.spotify.com/track/789" },
                { titulo: "Euforia Sonora", spotify: "https://open.spotify.com/track/321" }
            ]
        };

        if (nomeArtista && musicas[nomeArtista]) {
            tituloArtista.innerText = nomeArtista;

            musicas[nomeArtista].forEach(musica => {
                let card = document.createElement("div");
                card.classList.add("musica-card");
                card.innerHTML = `
                    <p>${musica.titulo}</p>
                    <a href="${musica.spotify}" target="_blank">▶ Ouvir no Spotify</a>
                `;
                musicasContainer.appendChild(card);
            });
        } else {
            tituloArtista.innerText = "Artista não encontrado";
        }
    }

    // Página do Jogo (Trilhas Sonoras)
    if (document.body.classList.contains("jogo-page")) {
        const tituloJogo = document.getElementById("jogo-nome");
        const trilhasContainer = document.getElementById("trilhas-container");

        // Simulação de trilhas sonoras
        const trilhas = {
            "Parkour Space": [
                
                { titulo: "Corrida Espacial", spotify: "https://open.spotify.com/intl-pt/track/5bb8LXzI3mxdVatndLgsyX" },
                { titulo: "Salto Dimensional", spotify: "https://open.spotify.com/track/888" }
            ],
            "Cyber Quest": [
                { titulo: "Cyber Groove", spotify: "https://open.spotify.com/track/777" },
                { titulo: "Neon Dreams", spotify: "https://open.spotify.com/track/666" }
            ]
        };

        if (nomeJogo && trilhas[nomeJogo]) {
            tituloJogo.innerText = nomeJogo;

            trilhas[nomeJogo].forEach(trilha => {
                let card = document.createElement("div");
                card.classList.add("trilha-card");
                card.innerHTML = `
                    <p>${trilha.titulo}</p>
                    <a href="${trilha.spotify}" target="_blank">▶ Ouvir no Spotify</a>
                `;
                trilhasContainer.appendChild(card);
            });
        } else {
            tituloJogo.innerText = "Jogo não encontrado";
        }
    }
});