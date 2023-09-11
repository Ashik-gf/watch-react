const getStoragecart = () =>{
    const storadeString = localStorage.getItem('cart')
    if(storadeString){
        return JSON.parse(storadeString)
    }
    return []
}

const saveToLs = (cart)=>{
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify)
}

const setToLS = (id) =>{
const cart = getStoragecart()
cart.push(id)
// now need to save to local stored
saveToLs(cart)
}
export {setToLS, getStoragecart }