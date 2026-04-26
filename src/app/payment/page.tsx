"use client"
import React, { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Sidebar from '../cart/Sidebar'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { shippingAddressType, Value } from '@/Typas/order.type'
import { cartCashOrder, cartVisaOrder } from '../_action/order.action'
import { cartContext } from '../_context/CartContextProvider'
import { toast, Toaster } from 'sonner'
import { Toast } from 'radix-ui'
import { useCart } from '../_context/usecart'

export default function Paymentpage() {


    const form  =  useForm({
        defaultValues:{
             details: " ",
               phone: "",
               city: "",
               postalCode: "",
               type : ""
            
        }
    })

    const {cartId , cartDataNumber ,numberOfCart } = useCart()

     console.log("cartId" ,cartId)


    async function  handelPayment (value:Value){

        const userData : shippingAddressType = { 
          shippingAddress : {
            city : value.city , 
            details : value.details ,
            phone : value.phone ,
            type : value.type ,

          }
        }

        if(value.type == "cash" ){

         const res = await cartCashOrder( cartId ,userData)

          if(res.message == "success"){
            toast.success("order created successfully")
          }
        }

         else if (value.type == "visa"){

          const res = await cartVisaOrder(cartId , userData)
                   console.log(res)

          window.open(res?.session.url)
         }

    }




  return (<>

  <div className=' w-10/12 mx-auto '>

  <div className=' grid grid-cols-12'>

    <div className=' grid col-span-8 text-center'>
        <div><h1 className=' font-bold text-3xl'> payment</h1></div>

        <div>
            <form onSubmit={ form.handleSubmit(handelPayment)}>



            
<Controller
  name="city"
  control={form.control}
  render={({ field, fieldState }) => (
      <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>city</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="enter your city"
        autoComplete="off"
        />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>


            
<Controller
  name="details"
  control={form.control}
  render={({ field, fieldState }) => (
      <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>details</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="enter your details"
        autoComplete="off"
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
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>


<Controller
  name="postalCode"
  control={form.control}
  render={({ field, fieldState }) => (
      <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>postalCode</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="enter your postalCode"
        autoComplete="off"
        />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Controller
  name="type"
  control={form.control}
  render={({ field, fieldState }) => (
      <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>type</FieldLabel>
      <div className=' w-full gap-4 flex flex-wrap my-3' > 
        <label className='w-full text-start' >
            <input  className="me-2 " type="radio" value={"cash"} checked={field.value =="cash"} onChange={field.onChange}/>
            cash
        </label>
          <label className='w-full text-start '>
            <input  className="me-2 " type="radio" value={"visa"} checked={field.value =="visa"} onChange={field.onChange}/>
             visa
        </label>


      </div>
      
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Button className=' w-full p-2 my-2 text-2xl font-bold cursor-pointer'> to pay</Button>

        </form>
        </div>

    </div>

    <div className=' grid col-span-4'><Sidebar cartDataNumber={cartDataNumber} numberOfCart={numberOfCart}/> </div>

  </div>


  </div>
  
  
  
  
  </>
  )
}
