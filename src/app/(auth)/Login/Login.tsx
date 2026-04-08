"use client"

import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { IoPersonAdd } from 'react-icons/io5'
import { loginDataType, Schmelogin } from './Login.shcme'

export default function LoginPage() {

// validtion zod /// 

const router =  useRouter()

const form = useForm({
    defaultValues:{
    "email":"",
    "password":"",
    },
    
    
    resolver:zodResolver(Schmelogin)

})



async  function handelSignIn (values :loginDataType){

console.log (values)

signIn("credentials" , {
  ...values,
  redirect : true ,
  callbackUrl : "/"
})

}

  return (<>




<form action="" onSubmit={ form.handleSubmit( handelSignIn)} className='pt-6'>



<Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>email</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="enter your email"
        autoComplete="off"
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>


<Controller
  name="password"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>password</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="enter your password"
        autoComplete="off"
        type='password'
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>



<Button className=' cursor-pointer w-full rounded-[8] bg-[#16A34A] text-white font-semibold text-xl text-center my-5'> <IoPersonAdd />sign in</Button>


<div className=' text-center  pt-10'>

    <p>New to FreshCart?<Link href={"/"} className='text-[#16A34A]'> Create an account</Link> </p>
</div>
</form>
  </>
  )
}

