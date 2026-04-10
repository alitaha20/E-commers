 "use client"
 
 import { CartItemsTypes, CartResTypes } from "@/Typas/cart.itmes"
import { createContext, useState } from "react"

type CartContextType = {
  numberOfCart: number;
  setnumberOfCart: React.Dispatch<React.SetStateAction<number>>;

  cartId: string;
  setcartId: React.Dispatch<React.SetStateAction<string>>;

  cartDataProduct: CartItemsTypes[];
  setcartDataProduct: React.Dispatch<React.SetStateAction<CartItemsTypes[]>>;

  cartDataNumber: number;
  setcartDataNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const cartContext = createContext<CartContextType | null>(null);


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



    const [numberOfCart, setnumberOfCart] = useState <number>(userCart?.numOfCartItems)
    const [cartId, setcartId] = useState <string>(userCart.cartId)
    const [cartDataProduct, setcartDataProduct] = useState <CartItemsTypes []>(userCart?.data?.products)
    const [cartDataNumber, setcartDataNumber] = useState<number>(userCart?.data?.totalCartPrice)

  return (
    <cartContext.Provider value={  { cartId, setcartId, setnumberOfCart , numberOfCart ,cartDataProduct, setcartDataProduct , cartDataNumber, setcartDataNumber }}>
        
        {children}
        
        </cartContext.Provider >
  )
}

