function getDomainNameFromURL(url) {
    const urlObj = new URL(url)
    return urlObj.hostname
}

const bootdevURL = 'http:/boot.dev/learn/learn-python'
const domainName = getDomainNameFromURL(bootdevURL)
console.log(`the domain name for ${bootdevURL} is ${domainName}`)