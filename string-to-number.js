
const input ='700'
console.log(typeof(input));
const strToNumber = +input;
console.log(typeof(strToNumber))

//

const isActive = false;
const showUser =()=>console.log('display User');
const hideUser =()=>console.log('hide user');

// isActive ? showUser() : hideUser();
//use && if the left side is true then right side will be executed
isActive && showUser() 
//use || if the left side is false right side will be executed
isActive || hideUser();

