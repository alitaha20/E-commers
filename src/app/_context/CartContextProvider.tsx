 "use client"
 
 import { CartItemsTypes, CartResTypes } from "@/Typas/cart.itmes"
import { createContext, useState } from "react"

 export const cartContext =   createContext( {})


export default function CartContextProvider( {children , userCart} : {children : React.ReactNode , userCart :CartResTypes}   ) {

//  async function getDataFromApi (){
//   const cartData =   await getUserCart()
//   console.log(cartData)
//   setnumberOfCart(cartData.numOfCartItems)

// }


// useEffect(()=>{
//   getDataFromApi()
// },
  
  
//   [])



    const [numberOfCart, setnumberOfCart] = useState(userCart?.numOfCartItems)
    const [cartId, setcartId] = useState(userCart.cartId)
    const [cartDataProduct, setcartDataProduct] = useState <CartItemsTypes []>(userCart?.data?.products)
    const [cartDataNumber, setcartDataNumber] = useState(userCart?.data?.totalCartPrice)

  return (
    <cartContext.Provider value={  { cartId, setcartId, setnumberOfCart , numberOfCart ,cartDataProduct, setcartDataProduct , cartDataNumber, setcartDataNumber }}>
        
        {children}
        
        </cartContext.Provider >
  )
}

