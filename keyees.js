const glass =
 {
    name:'Glass',
    color:'Golden',
    price:40,
    isCleaned:true
};
console.log(glass)

// delete glass.isCleaned;
// console.log(glass)

// const {isCleaned,...shortGlass}=glass


const {color ,isCleaned,...ss}=glass
console.log(ss)

//freeze
// Object.freeze(glass)
glass.source='Bangladesh'
console.log(glass)


//object seal
Object.seal(glass);
glass.size=3;
console.log(glass)

// const key=Object.keys(glass)
// const value=Object.values(glass)
// const pair=Object.entries(glass);

// console.log(key)
// console.log(value)
// for(let i of value){
//     console.log(i)
// }

// console.log(pair)