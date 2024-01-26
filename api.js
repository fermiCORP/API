const fetch = require('node-fetch');

const giantBombApiKey = '3003cb8723b35d566703e99f80c026181801939e';
const gameTag = 'angry';

const url = `https://www.giantbomb.com/api/games/?api_key=${giantBombApiKey}&format=json&filter=themes:${gameTag}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        // Manipola i dati come necessario
        console.log(data);
    })
    .catch(error => console.error(error));