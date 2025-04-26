localStorage.setItem('Card','Mobile')
localStorage.setItem('UserId','027223005101028')

const addToLocalStorage=()=>{
    const idInput = document.getElementById('storage-id');
    const id =idInput.value;
    const valueInput = document.getElementById('storage-value').value;
    const values=valueInput.value;
    //set item in local store
    localStorage.setItem(id,values);
      valueInput.value=''
    idInput.value=''
  
}