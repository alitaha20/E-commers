import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import React from 'react'

export default async function proxy( req: NextRequest) {

 const jwt = await getToken({req})


 if( jwt == null){


    return NextResponse.redirect("http://localhost:3000/Login")
 }


 return NextResponse.next()
}


export const config = {
    matcher : [ "/cart" ]
}