import { CategoryType } from "@/Typas/product.type"



export async function GetCategory(): Promise < CategoryType[]> {

    const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories")

   const finalres = await res.json()

   return finalres.data


}