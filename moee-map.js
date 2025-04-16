const numbers = [12, 10, 8, 15, 7];

const double = numbers.map(n=>n*2);

// console.log(double)

const fuveBonus = numbers.map(num=>num+5);
console.log(fuveBonus)
// for(const i of fuveBonus){
//     const a= i*2;
//     if(a === 40 ){
//        break
//     }
//     console.log(a)
// }

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];
const length = friends.map(frnd => frnd.length)
console.log(length)

const firstLetter = friends.map(friend => friend[0])
console.log(firstLetter)