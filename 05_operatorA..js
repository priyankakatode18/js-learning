function  squareOfWordLength(){

    var  word="javascript"
    var word1="Google Chrome"
    var word2="Developer Smart"
var resultLength=word.length
var square =resultLength**2

console.log( `The length of word is  Javascript:${square}`)
console.log("--------------------------------------------------------------------------")
    
var resultLength1=word1.length
var square1=resultLength1**2
console.log( `The length of word is  Google Chrome:${square1}`)

console.log("--------------------------------------------------------------------------")
var resultLength2=word2.length
var square2=resultLength2**2
console.log( `The length of word is  Developer Smart:${square2}`)
console.log("--------------------------------------------------------------------------")
}

squareOfWordLength()

function divideFunctionWords(){
var sentence="I Am Angular Developer"

var sentenceLength=sentence.length;
var words = sentence.split(' ');
console.log("The String Length and divide by total number words available words in that string is  :",sentenceLength/words.length)
console.log("-------------------------------------------------------------------------------------------------------------------------")

console.log("The String Length and divide by total number words available words in that string is  :",sentenceLength*words.length)




}
  
divideFunctionWords()


