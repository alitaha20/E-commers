"use server"

export async function getAllCategoris() {

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`)

    const finalRes = await res.json()

    return finalRes
    
}

