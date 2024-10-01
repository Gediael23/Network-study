const apiKey = generateKey()
const url = getURL()
const settings = getSettings()

fetch(url, settings)
    .then(response => response.json())
    .then(responseData => {
        logItems(responseData);
    })
    .catch(error => {
        console.error('Erro ao buscar dados:', error);
    });

function getSettings() {
    return {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        }
    }
}

function getURL() {
    return 'https://api.boot.dev/v1/courses_rest_api/learn-http/items'
}

function generateKey() {
    const characters = 'abcdef0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

function logItems(items) {
    for (const item of items) {
        console.log(item.name)
    }
}