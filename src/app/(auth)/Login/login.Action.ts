"use server"

import { cookies } from "next/headers"
import { loginDataType } from "./Login.shcme"

 export async function loginAction(values:loginDataType) {


    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",{

  body: JSON.stringify(values) ,

  method :"post" ,
  
  headers:{

  "Content-Type": "application/json"  
  }

})

const finalRes = await res.json()

console.log( "finalRes" , finalRes)


const myCookies= await cookies()

    myCookies.set( "token" , finalRes.token , {
      httpOnly :true , 
      maxAge : 60*60*24 ,
      sameSite:"strict",
      secure: true   
    })

return res.ok
 }