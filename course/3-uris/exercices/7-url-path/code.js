const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations'

const apiKey = generateKey()
const settings = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
    }
}

fetch(url, settings)
    .then(response => response.json())
    .then(responseData => {
        logLocations(responseData)
    })


function generateKey() {
    const characters = 'ABCDEF012345789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

function logLocations(locations) {
    for (const location of locations) {
        console.log(`Location: ${location.name} Recommended Character Level: ${location.recommendedLevel}`)
    }
}