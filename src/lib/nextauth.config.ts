import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextAuthOptions: NextAuthOptions = {
  
  callbacks:{

    // cheat the token
    jwt(params) {

      if(params.user){

        params.token.realTokenBackEnd = params.user.realTokenBackEnd

      }

      
      return params.token
    },

  },


  providers: [
    Credentials({
      name: "fresh cart",

      credentials: {
        email: {},
        password: {},
      },


      async authorize(credentials) {

        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            body: JSON.stringify(credentials),

            method: "post",

            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        const finalRes = await res.json();

        if(finalRes.message ==  "success"){

            return {
                id:finalRes.user._id,
                name: finalRes.user.name ,
                email :finalRes.user.email,
                realTokenBackEnd:finalRes.token
            }
        }

        return null; // {}
      },
    }),
  ],

  pages : {

    signIn:"/Login" 
  },


  secret :process.env.NEXTAUTH_SECRET  
  
};
