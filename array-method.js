const product = [
    {name:'laptop',price:3200,brand:'lenove',color:'siver'},
    {name:'phone',price:70200,brand:'iphone',color:'red'},
    {name:'watch',price:3000,brand:'casio',color:'green'},
    {name:'sunglass',price:33200,brand:'ribon',color:'white'},
   
]
 const brand = product.map(product => product.brand);
//  console.log(brand)

 const names = product.map(product =>product.name)
//  console.log(names);
 const price = product.map(product=>product.price)
//  console.log(price)


 product.forEach(product=>console.log(product.name))
 product.forEach(product=>console.log(product.color))