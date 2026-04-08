export interface ProductType {

id : string , 
title : string,
slug : string,
images : string [],
price : number,
priceAfterDiscount ? : number,
imageCover : string,
ratingsAverage : string,
description : string,
category : CategoryType,
brand : BrandType
}

export interface CategoryType {
  _id: string,
  name: string,
  slug: string,
  image: string,
}


export interface BrandType {
  _id: string,
  name: string,
  slug: string,
  image: string,
}

