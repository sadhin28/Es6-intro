const numbers = [12, 34, 45 ,35,46,56,78]
 
let [a,b]=numbers
let temp=a;
a=b;
b=temp;
console.log(a,b)

function doubleThem(a,b){
    return [a*2, b*2]
}
const [x,y]=doubleThem(6,9);
console.log(x,y)