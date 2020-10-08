/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const test = 'https://leetcode.com/problems/design-tinyurl'
    //create obj to match long url with random str //must be global var
let key = {}
var encode = function(longUrl) {
    //generate random string and slice
    let randomChars = Math.random().toString(32).substring(2,8)
    //create key val pair
    key[randomChars] = longUrl
    //return short url
    return `http://tinyUrl.com/${randomChars}`
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */

var decode = function(shortUrl) {
    //split url to get random str
    let randChars = shortUrl.split("com/")
    //access obj to find key val pair
    return key[randChars[randChars.length-1]]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
let url = encode(test)
console.log(url)
console.log(decode(url))