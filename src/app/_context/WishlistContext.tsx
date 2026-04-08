"use client"

import { createContext, useState } from "react"



export const wishConstext  = createContext({})


export  function WishContextProvider({children , Wishlist})  {

    
    
const [getWishList, setgetWishList] = useState(Wishlist?.data || [])
    
return (

<wishConstext.Provider value={ {getWishList ,setgetWishList} }>

{children}

</wishConstext.Provider>


)
}
