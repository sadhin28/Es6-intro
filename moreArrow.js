const sub=(a,b)=>a-b;
const subtruction=sub(10,5)
console.log(subtruction)

//single or one parameter
const getAge=(person)=>person.age;//implit return
const student={
   name:'sadhin',
   age:347927345987128,

}
const age=getAge(student);
console.log(age)

const getThird =numbers=> numbers[2]; 
const third =getThird([4,5,2,1,3,4,56,76]);
console.log(third)

const dubbleIt = num =>num*2;

//no parameter

const gePI=()=>Math.PI;
console.log(gePI().toFixed(4))

//large arrow function
const doMath = (x,y,z)=>{
    const sum=x+y+z;
    const mul=x*y*x;
    const result = sum+mul;
    return result;//
}

const math=doMath(2,2,2);
console.log(math);