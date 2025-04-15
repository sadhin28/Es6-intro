const max =Math.max(2,4,3,5,12,31,90)
const numbers = [2,4,5,3,6,23,54,56,677,877];
const arrayMax=Math.max(...numbers);
console.log(...numbers)
console.log(arrayMax)
console.log(max)

//use spread operator to compy
const nums = [3,4,5,6];
const nums2=nums;

const dosto=[...nums]
console.log(dosto)
nums2.push(12);
console.log(nums2)

//advanced
const sonkha =[...nums, 9999]//add extre element element while copy
console.log(sonkha)