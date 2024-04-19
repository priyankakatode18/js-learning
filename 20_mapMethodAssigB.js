const arrayNumber=[20,11,40,25,23,11,9,31,60,2,19]
//transformation
console.log("Add 10 into each element and log new array result on console")

const arrayNew = arrayNumber.map(value => {
    return value+10
});
console.log(arrayNumber)
console.log(arrayNew)
console.log("---------------------------------------------------------------")
console.log("Cube the each array element")

const arrayCube=arrayNumber.map(cube => {
return cube+cube+cube

});
console.log(arrayNumber)
console.log(arrayCube)

console.log("---------------------------------------------------------------")
console.log("Add the index value into its corresponding each array element")

const newArray=arrayNumber.map((currentValue,index)=>{
return currentValue+index
});
console.log(arrayNumber)
console.log(newArray)
console.log("---------------------------------------------------------------")





