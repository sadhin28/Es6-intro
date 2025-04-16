const person={
    name:'Taosif',
    age:23,
    home:'Barishal'
}

const {age,name,...others}=person;

console.log(age,name,others)

const friends=['ram','sam','jodu','modhu'];

const [x,,,y]=friends;
console.log(x,y)
console.log(...friends)

const key=Object.keys(person);
console.log(...key)