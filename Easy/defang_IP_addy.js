/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let defanged = address.replace(/\./g, "[.]")
    return defanged
};