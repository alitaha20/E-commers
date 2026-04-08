"use client"

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { IoPersonAdd } from 'react-icons/io5'
import { toast } from 'sonner'
import { SchmeSignUp, signUPDataType } from './SignUp.schema'


export default function FormSignUP() {

// validtion zod /// 

const router =  useRouter() // navgtions

const form = useForm({
    defaultValues:{
    "name": "",
    "email":"",
    "password":"",
    "rePassword":"",
    "phone":""
    },
    
    
    resolver:zodResolver(SchmeSignUp)

})



async  function handelSignUp (values : signUPDataType){

console.log (values)

const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup",{

  body: JSON.stringify(values) ,

  method :"post" ,
  
  headers:{

  "Content-Type": "application/json"  
  }

})


const finalRes = await res.json()

console.log( "finalRes" , finalRes)

if(res.ok){

  toast.success(" Sign UP successfully" , {
    position :"top-center",
    richColors: true

  })

  router.push("/Login")

}else (
    toast.error(finalRes.message , {
    position :"top-center",
    richColors: true
  })

)

}

  return (<>




<form action="" onSubmit={ form.handleSubmit( handelSignUp  ) } className='pt-6'>

    
<Controller
  name="name"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="enter your name"
        autoComplete="off"
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>



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


<Controller
  name="rePassword"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>rePassword</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="enter your rePassword"
        autoComplete="off"
        type='password'
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>


<Controller
  name="phone"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>phone</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="enter your phone"
        autoComplete="off"
        type='tel'
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<div className=' py-5'>

        <FieldGroup className="w-full">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic"  />
        <FieldLabel htmlFor="terms-checkbox-basic">
            <p className='text-xl font-medium'> I agree to the <span className='text-[#16A34A]'> Terms of Service </span> and <span className='text-[#16A34A]'>Privacy Policy</span> *</p>
        </FieldLabel>
      </Field>
    </FieldGroup>
</div>

<Button className=' cursor-pointer w-full rounded-[8] bg-[#16A34A] text-white font-semibold text-xl text-center'> <IoPersonAdd />Create My Account</Button>


<div className=' text-center  pt-10'>

    <p>Already have an account?<Link href={"/Login"} className='text-[#16A34A]'> Sign In</Link> </p>
</div>
</form>
  </>
  )
}

