function sum(a,b,c){
   for(let i of arguments){
    console.log(i)
   }
   const args =[...arguments]
   args.push(55)
   console.log(args)
    const result = a + b + c;
    return result;
}

const total = sum(45,89,12,78, 89, 90,)
console.log(total);