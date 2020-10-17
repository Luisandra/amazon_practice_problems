/**
 * @param {string} s
 * @return {string}
 */
const a = "Let's take LeetCode contest"
var reverseWords = function(s) {
    //split
    s=s.split(" ")
    //loop to rev letters
    for(let i=0; i<s.length; i++){
        s[i]=s[i].split("").reverse().join("")
    }
    //join array to single string
    s=s.join(" ")
    console.log(s)
    return s
};
reverseWords(a)