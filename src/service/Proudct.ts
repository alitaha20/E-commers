import { ProductType } from "@/Typas/product.type"

  export  async function getAllproduct () : Promise <ProductType [] | undefined >{

try {
    

    let res =  await fetch(`https://ecommerce.routemisr.com/api/v1/products` , {
      cache : "force-cache",
        next: {
        revalidate: 60*5
       }
    })

    let finalRes = await res.json()

    return finalRes.data

} catch (error) {

    console.log("error" , error);
    
    
}
    
  }



  export async function getPRoductById(id:string) : Promise<ProductType | undefined> {


    try {
    

    let res =  await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}` , {
      cache : "force-cache", 
    })

    let finalRes = await res.json()

    return finalRes.data

} catch (error) {

    console.log("error" , error);
    
    
}
    
    
  }