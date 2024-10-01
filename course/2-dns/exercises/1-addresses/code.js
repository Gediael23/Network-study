async function fetchIpAddress(domain) {
    const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
        headers: {
            'accept': 'application/dns-json'
        }
    })
    const respObject = await resp.json()

    return respObject.Answer[0].data
}

const domain = 'api.boot.dev'

fetchIpAddress(domain)
    .then(ipAddress => {
        if (!ipAddress) {
            console.log('something went wrong in fetchIpAddress')
        } else {
            console.log(`found IP address for domain ${domain}: ${ipAddress}`)
        }
    })