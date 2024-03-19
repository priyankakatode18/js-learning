var word="javascript"

for (let i = 0; i <word.length; i++) {
    let ch=word.charAt(i);
    console.log(ch);
    
}

console.log(`==== WAP to count the char a ===`);
var word = "JavaScript";
var count = 0;
for (let index = 0; index<word.length; index++) {
    var char = word.charAt(index);
    if (char=='a') {
        count = count+1;
    }  
}
console.log(`Char a count is: ${count}`);

