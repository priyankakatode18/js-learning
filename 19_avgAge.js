console.log(`===== WAP to get the average age  ======`);
let sumAge = 0;
arrayPerson.forEach(person => {
    sumAge = sumAge + person.age;
});
let averageAge = sumAge/arrayPerson.length;
console.log(`Average age: ${averageAge}`);