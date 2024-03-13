function stringHandsOn(){
console.log("================Step1================");
var sentence="   Hey you are doing good,keep it up    "
console.log(sentence)
console.log("================Step2================");
console.log(`calculate length of the string  :${sentence.length}`)
console.log("================Step3================");
var lengthBeforeTrim=sentence.length
console.log(`${sentence} & total length is :${lengthBeforeTrim}`)
console.log("================Step4================");

var greetAfterTrim=sentence.trim()
var lengthAfterTrim=greetAfterTrim.length
console.log(`${sentence} & total length before is :${lengthBeforeTrim}`)
console.log(`${greetAfterTrim} & total length after trim is :${lengthAfterTrim}`)
console.log(`  Total number of spaces trimmed :${lengthBeforeTrim-lengthAfterTrim}`)
console.log("-------------------------------------------------------------");
console.log("================Step5================");

//console.log(`${sentence} print first and last char :${lastChar}`)
var firstChar=greetAfterTrim.charAt(0)
console.log(` ${sentence}: First Char is :${firstChar}`)
console.log("-------------------------------------------------------------");
var lastChar=greetAfterTrim.charAt(lengthAfterTrim-1)
console.log(`${sentence}:Last Char is     : ${lastChar}`)

//console.log(greetAfterTrim.charAt())
//console.log(` print the first char and last char : ${firstChar}``` +concat,`` `${lastChar}`)

console.log("================Step6========================================");

var countWord=sentence.split(" ")
console.log(countWord)
console.log(` count of total words is: ${countWord.length}`)
console.log("-------------------------------------------------------------");

console.log("================Step7========================================");
let textWord="good"
let word=sentence.indexOf(textWord);
console.log( `${sentence} : index of word is    : ${word}`)
console.log("-------------------------------------------------------------");

console.log("================Step8========================================");
var text=sentence.substring(22)
console.log(`substring starting from index 22 is :${text}`)
console.log("-------------------------------------------------------------");
console.log("================Step9========================================");
var textInclude=sentence.includes("up")
console.log(` Is string end with word "up" :${textInclude}`)
console.log("================Step10========================================");

var textInclude1=sentence.includes("Hey")
console.log(` Is string start with word "Hey" :${textInclude1}`)

}

stringHandsOn()


