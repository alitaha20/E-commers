import { decode } from 'next-auth/jwt'
import { cookies } from 'next/headers'

export default async function getToken() {
 
const myCookies = await cookies()

const getTokenFromCookies =  myCookies.get("next-auth.session-token")?.value

if(getTokenFromCookies == null){

    return null
}

 const getMyTokenAfterDecode =  await decode({ token : getTokenFromCookies ,secret: process.env.NEXTAUTH_SECRET! })


 return getMyTokenAfterDecode?.realTokenBackEnd
}
