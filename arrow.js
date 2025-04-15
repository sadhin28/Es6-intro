//function declaration

// function add(a,b){
//    const result=a+b;
//     return result;
// }
function add(a,b){
  
    return a+b;

}
// const sum=add(5,10)
// console.log(sum);

//function expression
const add2=function(a, b){
    return a+b;
}

//arrow function 
const add3 = (a,b) => a+b;
const sum=add3(4,5)
console.log(sum)

const add4 =(a,b,c,d)=>a+b+c+d;
const sums=add4(3,3,3,3)
console.log(sums)

const mul=(a,b)=> a*b;
const multiply=mul(5,5);
console.log(multiply)