//data access
const data=[
    {id:1,name:'Taosif',address:'Barishal'},
    {id:2,name:'Redwan',address:'Savar'},
    {id:3,name:'Rayhan',address:'JamalPur'}
]
// console.log(data[2].name)

const products = {
    count: 5000,
    data:[
        {id:1,name:'lenovo',price:75000},
        {id:2,name:'mackbook',price:175000},
        
    ]
}

// console.log(products.data[1].price)


const user= {
    id:5001,
    name:'Shoriful Raj',
    address:{
        Street:{
            first:'54/1 uttor side',
            second:'poribag er goli',
            third:'no dorai'
        },
        city:'dhaka'
    }
}

console.log(user.address.Street.second)