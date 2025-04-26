localStorage.setItem('Card','Mobile')
localStorage.setItem('UserId','027223005101028')

const addToLocalStorage=()=>{
    const idInput = document.getElementById('storage-id');
    const id =idInput.value;
    const valueInput = document.getElementById('storage-value');
    const values=valueInput.value;
    //set item in local store
    localStorage.setItem(id,values);
      valueInput.value=''
    idInput.value=''
  
}
const clearLocalStore = () =>{
    localStorage.clear()
}

const number = [10,30,50,80,90]
const strNumber = JSON.stringify(number)
localStorage.setItem("number Array",strNumber)
 const numArray = localStorage.getItem('number Array')
 console.log(typeof(numArray))
 const strToObject = JSON.parse(numArray)
console.log(strToObject)

const person ={
    name:'Sadhin',
    age:23,
    home:'Barishal'
}

const strObject = JSON.stringify(person);
localStorage.setItem('person',strObject)

const getPerson = localStorage.getItem('person')
 const getPerstonStrtoObj = JSON.parse(getPerson)
 console.log(getPerstonStrtoObj.name)