const numbers = [4,5,6,1,2,66];
const total =numbers.reduce( (prefious, current)=>prefious+current,0 )
console.log(total)

const sum = numbers.reduce((p,c)=>p+c,0)
console.log(sum)