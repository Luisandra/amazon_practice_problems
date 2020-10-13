/**
 * @param {string[]} words
 * @return {string[]}
 */
const a = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
const b = ["a","b","ab","abc"] //output should only be "ab"
var findAllConcatenatedWordsInADict = function(words) {
    //var to hold output
    let concatWords = []
    //two for loops to compare words
    for(let i=0; i<words.length; i++){
        //creating var to make code easier to read
        let firstWord = words[i]
        let wordsFound = 0
        let temp =[] //temp var to hold matching words
        for(let j = 0; j<words.length; j++){
            //cannot compare same element, Continue to skip j iteration
            if(i===j) continue
            else {
                //set RegExp to use var for regular expression //i is to remove case sensitivity
                let searchFor = RegExp(words[j], 'i')
                //temp var to hold location of word
                let isThere = (firstWord.search(searchFor))
                //if word is found push into temp array
                if(isThere!=-1){
                    temp.push(words[j])
                }

            }

        }
        //if more than one word pushed into temp var, then save comparison word
        if(temp.length>1){
            concatWords.push(firstWord)
        }

    }
    console.log(concatWords)
    return concatWords
};
findAllConcatenatedWordsInADict(a)