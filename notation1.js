const person ={
    name:'lal nil holud miya',
    profession: 'Traffic Surgon',
    age:39,
    address:'shahabag'
}
//dot notation
const prof = person.profession;

//bracket notation
const prof2 = person['profession']
console.log(prof2)

//using bracket with variable string

const pName = 'name';
const prof3 = person[pName]
console.log(prof3)