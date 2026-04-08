"use server"

import getToken from "../utils/getToken"

export async function addProductInWishlist(productid : string) {

    const token = await getToken()

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist` ,{
        headers:{
            token : token as string , 
            "Content-Type": "application/json"

        },
        body : JSON.stringify({productId : productid}) , 
        method : "POST"
    })


    const finalRes = await res.json()

    console.log(finalRes)
    
    return finalRes
    
}


export async function getAllWishlist() {

    const token = await getToken()

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist` ,{
        headers:{
            token : token as string , 
        },
    })


    const finalRes = await res.json()

    
    return finalRes
    
}


export async function deleteItems(id : string) {
    const token = await getToken ()

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}` , {
        headers : {
            token : token as string
        },
        method: "DELETE"
    })

    const finalRes = await res.json()

    console.log(finalRes)

    return finalRes
}