"use server"

import { CartResTypes } from "@/Typas/cart.itmes"
import getToken from "../utils/getToken"


export async function addProductToCart ( id : string): Promise<CartResTypes>{

    const token = await getToken()

    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart` , {
      method : "POST" ,
      body : JSON.stringify({productId : id}),

      headers :{

        "Content-Type" : "application/json",

        token : token as string
      }

    })


    const finalRes = await res.json()

    console.log(finalRes)

    return finalRes

}



export async function getUserCart() : Promise<CartResTypes>{

  const token = await getToken()

const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart" , {
  headers : {
      token : token as string

  } 
})



const finalRes = await res.json()


return finalRes
  
}



export async function deleteItemFromShop(productId : string) : Promise<CartResTypes>{

  const token = await getToken()

const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`, {
  method : "DELETE",
  headers : {
      token : token as string

  } 
})



const finalRes = await res.json()

console.log(finalRes)

return finalRes
  
}





export async function upDataPRoductCard ( id : string , count : number): Promise<CartResTypes>{

    const token = await getToken()

    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${id}` , {
      method : "PUT" ,
      body : JSON.stringify({count }),

      headers :{

        "Content-Type" : "application/json",

        token : token as string
      }

    })


    const finalRes = await res.json()

    console.log(finalRes)

    return finalRes

}
