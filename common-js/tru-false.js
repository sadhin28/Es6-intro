/**
 * any number (+v or -v all value are truthy)
 * any string is truthy but emty string is false 
 * white space are truthy
 * 0 falese but '0' is truthy
 * undefined 
 * null
 * {},[] is truthy 
 */

const x=[];
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is false')
}

//optional
//check falsy
let y= ''
if(!y){
    console.log('value of x is false')
}
else{
    console.log('value of x is truthy');
}
if(!!y){
    console.log('value of x is false')
}
else{
    console.log('value of x is truthy');
}