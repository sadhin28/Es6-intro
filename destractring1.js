//array destructuring
const numbers = [42,65]
// const x=numbers[0];
// const y=numbers[1];
 //destructuring
const [x,y] =[42,65];
// const [a,b] =numbers;
console.log(x,y)

//object destructuring
const person ={
    names:'sadhin',
    age:13,
    home:'Barishal',
    car:['yamaha','honda','royalReflica']
}

const [car1,car2,car3] = person.car;
console.log(car1,car2,car3)
//object destructuring 
const {names,age}=person
// console.log(names,age)

const personJson = JSON.stringify(person)
// console.log(typeof(personJson))
const personobject =JSON.parse(personJson)
// console.log(typeof(personobject))

//key , values//key add values are given by array
const keys = Object.keys(person)
console.log(keys);
const value =Object.values(person)
console.log(value)
for (let i of value){
    console.log(i)
}

value.forEach(num=>console.log(num))