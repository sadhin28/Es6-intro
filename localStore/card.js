const addproduct=()=>{
  const productName =  document.getElementById('product-name').value
  console.log(productName)
  productName.value=''
  const Quantity = document.getElementById('product-quantity').value
  console.log(Quantity)
  Quantity.value=''
 
  displayProduct(productName,Quantity)
  saveProductTolocalStorage(productName,Quantity)
 
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
     const cart = getStoredShopingCart();
     cart[product]= quantity;
     const cardStingifyed = JSON.stringify(cart)
    //  console.log((cardStingifyed))
     localStorage.setItem('cart',cardStingifyed)
}

const displayStoreValue = ()=>{
    const savecart= getStoredShopingCart();
    console.log(savecart)
    for(const product in savecart){
        const quantitys=savecart[product]
        displayProduct(product,quantitys)
    }
}
displayStoreValue()