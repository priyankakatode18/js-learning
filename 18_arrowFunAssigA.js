console.log("*****************Step1**********************")
//1. With no args and no return value, log message on console inside arrow function 
let msg=()=>{
console.log("Good Morning, Today is Monday");
}
msg()

console.log("*****************Step2 (A)**********************")
// 2. with 3 args and no return value, or received 3 parameters perform the multiplication.
let mul=(num1,num2,num3)=>{
    const result=num1*num2*num3
    console.log(`multiplication is : ${result}`);
}
mul(5,5,2)

console.log("*****************Step2(B)**********************")
//Invoke the same arrow function for values => 10,4 [Note: assign default value to 3rd arg as 1 ]
let mul1=(a,b,c=1)=>{
let res=a*b*c
console.log(`multiplication is :${res}`);
}
mul1(10,2)

console.log("*****************Step3**********************")
//With 5 args and return value such as, for received params it should do the addition
//value to be passed=>100,100,200,349,756
let add=(num1,num2,num3,num4,num5)=>{
let res=num1+num2+num3+num4+num5
console.log("num1=100 ,num2=100,num3=200, num4=349, num5=756");
console.log("addition of total number is: ",res);

}
add(100,100,200,349,756)
//invoke the same arrow function for values: "I am","learning","ES6","features","in depth"
let sentence =(sen1,sen2,sen3,sen4,sen5)=>{
let res=(sen1 + sen2 + sen3 + sen4 + sen5)
console.log("addition of total string is :",res);
}
sentence("I am ", " learning ", " ES6 ", " features ", " in depth")
