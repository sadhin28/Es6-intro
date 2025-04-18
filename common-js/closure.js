function kitchen(){
    let roast = 0;
    return function(){
        roast ++;
        return roast;
    }
}

const firstServe = kitchen();


const secondServe = kitchen();
console.log(secondServe())
console.log(firstServe())
console.log(secondServe())
console.log(firstServe())
console.log(secondServe())
console.log(firstServe())
console.log(secondServe())
console.log(firstServe())
console.log(secondServe())
console.log(firstServe())
console.log(secondServe())
console.log(firstServe())
console.log(secondServe())
console.log(firstServe())
console.log(secondServe())
console.log(firstServe())
