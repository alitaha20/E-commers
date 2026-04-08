"use server"

import { shippingAddressType } from "@/Typas/order.type";
import getToken from "../utils/getToken";

export async function cartCashOrder(cartId : string , shippingAddress: shippingAddressType ) {

const token = await getToken()

    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${cartId}` , {
        headers : {
            token : token as string,
            "Content-Type" :  "application/json"
        },

        method : "POST",
        body : JSON.stringify(shippingAddress)
    })

    const finalRes = await res.json()

    return finalRes
    
}


export async function cartVisaOrder(cartId : string , shippingAddress: shippingAddressType ) {

const token = await getToken()

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000` , {
        headers : {
            token : token as string,
            "Content-Type" :  "application/json"
        },

        method : "POST",
        body : JSON.stringify(shippingAddress)
    })

    const finalRes = await res.json()

    return finalRes
    
}




export async function getAllDataFromUser(userId:string) {

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
    
}