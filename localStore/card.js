const addproduct=()=>{
  const productName =  document.getElementById('product-name').value
  console.log(productName)
  productName.value=''
  const Quantity = document.getElementById('product-quantity').value
  console.log(Quantity)
  Quantity.value=''
  localStorage.setItem(productName,Quantity)
  displayProduct(productName,Quantity)

 
}  

const displayProduct = (p,q)=>{
    const container = document.getElementById('productContainer')
    const li= document.createElement('li')
    li.innerText=`${p} : ${q}`;
   
    container.appendChild(li);
}
const getStoredShopingCart=()=>{
    const storedCart = localStorage.getItem('cart');
    let cat = {};
    if(storedCart){
        cat = JSON.parse(storedCart);
    }
    return cat;
}
const saveProductTolocalStorage = (product,quantity)=>{

}

localStorage.clear('cart')
