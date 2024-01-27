const axios = require('axios');

const apiKey = 'a89cc6541957497284c22834dfaa49e3'; // Sostituisci con la tua chiave API da RAWG
const theme = 'action';
const limit = 10;

const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&genres=${theme}&page_size=${limit}`;

axios.get(apiUrl)
    .then(response => {
        // Gestisci la risposta qui
        const games = response.data.results;
        console.log(`Primi ${limit} giochi con il tema ${theme}:`, games);
    })
    .catch(error => {
        console.error('Errore nella richiesta API:', error);
    });
