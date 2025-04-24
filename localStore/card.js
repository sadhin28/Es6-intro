const addproduct=()=>{
  const productName =  document.getElementById('product-name').value
  console.log(productName)
  productName.value=''
  const Quantity = document.getElementById('product-quantity').value
  console.log(Quantity)
  Quantity.value=''

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
    let cart = {};
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const saveProductTolocalStorage = (product,quantity)=>{

}

localStorage.clear('cart')
