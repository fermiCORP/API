const apiKey = 'a89cc6541957497284c22834dfaa49e3';
const theme = 'action';
const limit = 10;

const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&genres=${theme}&page_size=${limit}`;

function createGameListItem(game) {
    const listItem = document.createElement('li');
    const image = document.createElement('img');

    image.src = game.background_image;
    image.alt = game.name;

    const details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = `<strong>${game.name}</strong><br>Punteggio: ${game.rating}<br>Data di rilascio: ${game.released}`;

    listItem.appendChild(image);
    listItem.appendChild(details);

    return listItem;
}

function displayGames(games) {
    const gameList = document.getElementById('gameList');
    games.forEach(game => {
        const listItem = createGameListItem(game);
        gameList.appendChild(listItem);
    });
}

axios.get(apiUrl)
    .then(response => {
        const games = response.data.results;
        displayGames(games);
    })
    .catch(error => {
        console.error('Errore nella richiesta API:', error);
    });
