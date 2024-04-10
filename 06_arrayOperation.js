
var arrayNumber=[2,4,1,7,9,10,11]
console.log(`==========original array=========`);
console.log(arrayNumber);

console.log(`==========removing Last Element=========`);
 arrayNumber.pop()
 console.log (arrayNumber)

//console.log(`==========Add An Element In The Last=========`);
console.log(`==========original array=========`);
console.log(arrayNumber)

console.log(`==========Add An Element In The Last=========`);
arrayNumber.push(100)
console.log(arrayNumber);

console.log(`==========Add An Element In The 0th Index=========`);
console.log(`==========original array=========`);
console.log(arrayNumber);
console.log(`==========Add An Element In The 0th Index=========`);
arrayNumber.unshift(90)
console.log(arrayNumber)

console.log(`==========Add An Element In The 0th Index=========`);
console.log(`==========original array=========`);
console.log(arrayNumber);
console.log(`==========Delete  An Element In The 0th Index=========`);

arrayNumber.shift(90)
console.log(arrayNumber)

console.log(`-------------Slice-----------------------`);
console.log(`==========original array=========`);
console.log(arrayNumber);
console.log(`-------------Slice-----------------------`);

var sliceNumber=arrayNumber.slice(1,5);
console.log(sliceNumber)

console.log(`---------Remove or delete in middle element-----------------------`);
var arrayNumber=[2,4,6,8,10,11];
console.log(`---------Original Array---------`);
console.log(arrayNumber);

const spliceDeleteArray=arrayNumber.splice(1,4)
console.log(`delete Array Is : ${spliceDeleteArray}`)
console.log(`after delete remaining array is:  ${arrayNumber}`)


