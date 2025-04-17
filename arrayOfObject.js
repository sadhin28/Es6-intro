const products = [
    {id:1, name:'lenovo', price: 65000},
    {id:2, name:'dell', price: 45000},
    {id:3, name:'hp', price: 40000},
    {id:4, name:'mac', price: 165000}
   
]

//map
const names = products.map(products=>products.name)
// console.log(names)
const prices = products.map(products=>products.price);
console.log(prices[1])

//reduced
const total = products.reduce((p,c)=>p+c.price,0)
console.log(total)
//find
const affordable = products.filter(p=>p.price<50000);
console.log(affordable)

//filter
const filters = products.filter(p=>p.price>40000);
console.log(...filters)
