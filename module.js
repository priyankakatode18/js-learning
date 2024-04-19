const array = [2, 3, 4, 9, 8];

export const PI = 3.14;
export let show = function(){
    console.log(`Hey buddy. I am inside FE`);
}

export default array;
import array from "./module.js";
import { PI, show } from "./module.js"; 

console.log(array);
console.log(PI);
show();