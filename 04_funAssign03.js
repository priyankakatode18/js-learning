
console.log("function with no arguments and no return type")
console.log("-------------------------------------------------")

function Name(){
    console.log("Priyanka");
    console.log("katode");
}Name();

console.log("--------------------------------------------------")
function personalDetails(firstName,lastName,collegeName){

    console.log("First Name:" ,firstName);
    console.log("Last Name :",lastName);
    console.log("College Name :", collegeName);
    
}
personalDetails("priyanka",  "katode",   "BDCE");
console.log("--------------------------------------------------")
console.log("=================Before Swapping==================")
console.log("=================Step 3==================")


var  arg1="virat"; 
var arg2="anushka";
var a=1000;
var b=2000;
//console.log("before swap :",arg1 ,  arg2)

function swapValues(arg1,arg2)
{  
console.log("before swap :",arg1 , arg2)
console.log("before swap :",a , b)

 var temp 
 temp = arg1;
 arg1 = arg2;
 arg2=temp;

 temp=a
 a=b
 b=temp
 console.log("after swapping inside swapping:",arg1 ,  arg2);
 console.log("after swapping inside swapping:",a ,  b);

}
swapValues(arg1, arg2)

console.log("=================Step 4==================")

function addThreeValues(val1, val2,val3) {

var add=val1+val2+val3
console.log("value of A is :",val1)


console.log("value of B is :",val2)

console.log("value of C is :",val3)

console.log("-----------------------------------------")
console.log("addition is:-",add)
console.log("-----------------------------------------")

}
addThreeValues(10.23,600,40)
addThreeValues("Hello", "Good", "Morning");


