import { ProductType } from "./product.type"

export interface CartResTypes {
    cartId : string    
    message : string    
    status : string    
    numOfCartItems : number
    data : {
        totalCartPrice : number
        products : CartItemsTypes []
    }    
} 
 
export interface CartItemsTypes {
 count : number 
 price : number
 product : ProductType

 }