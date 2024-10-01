async function deleteUser(baseURL, id, apiKey) {
    const fullURL = `${baseURL}/${id}`
    const resp = await fetch(fullURL, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey
        }
    })
}

const userId = '0194fdc2-fa2f-4cc0-81d3-ff12045b73c8'
const generatedKey = genereateKey()
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

async function getUsers(url, apiKey) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey
        }
    })
    return response.json()
}

function genereateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

function logUsers(users) {
    console.log("logging user records:")
    for (const user of users) {
        console.log(`User uuid: ${user.id}, Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`)
    }
}

const users = await getUsers(url, generatedKey)
logUsers(users)
console.log('---')

await deleteUser(url, userId, generatedKey)
console.log(`Deleted user with id: ${userId}`)
console.log('---')

const newUsers = await getUsers(url, generatedKey)
logUsers(newUsers)
console.log('---')