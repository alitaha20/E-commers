"use client"

import { Cartwishlist } from "@/Typas/wishlist"
import { createContext, useState } from "react"



export const wishConstext  = createContext({})


export  function WishContextProvider({children , Wishlist} :{children : React.ReactNode , Wishlist :Cartwishlist})  {

    
    
const [getWishList, setgetWishList] = useState(Wishlist?.data || [])
    
return (

<wishConstext.Provider value={ {getWishList ,setgetWishList} }>

{children}

</wishConstext.Provider>


)
}
