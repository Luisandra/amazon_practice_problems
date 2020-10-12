/**
 * @param {string} s
 * @return {boolean}
 */
const t = '0', t2='0.2', t3='2e10', t4='-92e-5'
const f='abc', f2='1 a', f3='1e', f4='99e2.5', f5='--6', f6='e123'
var isNumber = function(s) {
    //remove white space
    s=s.trim()
    //check for +-
    //check for at least one num or
    //at least 1 num "." 0 or more num
    //check for 0 or more num "." at least one num
    //check for "e"
    //check for +-
    //check for at least one num
    //.test to return true false
    console.log(/^[+-]?([0-9]+|[0-9]+\.[0-9]*|[0-9]*\.[0-9]+)(e[+-]?[0-9]+)?$/.test(s))
    return /^[+-]?([0-9]+|[0-9]+\.[0-9]*|[0-9]*\.[0-9]+)(e[+-]?[0-9]+)?$/.test(s)
};
isNumber(f2)