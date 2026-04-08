"use server"

export async function getAllBrands() {

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`)

    const finalRes = await res.json()

    return finalRes
    
}

