async function getUsers(url, apikey) {
    const fullURL = `${url}?sort=level`
    const response = await fetch(fullURL, { 
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apikey
        }
    })
    return response.json()
}

const baseURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

const apikey = generateKey()

const users = await getUsers(baseURL, apikey)
for (const user of users) {
    console.log(`got user with name: ${user.characterName}, and level: ${user.level} `)
}

function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}