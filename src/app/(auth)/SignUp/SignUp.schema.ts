import * as z from "zod"



export const SchmeSignUp = z.object({
  name :z.string(),
  email:z.email(),
  password : z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ , "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
  rePassword : z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ , "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
  phone : z.string("accept only egypt phone numbers")
}).refine((parmes)=>{

  return parmes.password===parmes.rePassword
  
},{
  error: " password not matched",
  path : ["rePassword"]
} 

)

  
export type signUPDataType = z.infer< typeof SchmeSignUp>