const addproduct=()=>{
  const productName =  document.getElementById('product-name').value
  
  const quantity = document.getElementById('product-quantity').value
  

    localStorage.setItem(productName,quantity)
 

}