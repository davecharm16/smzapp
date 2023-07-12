'use client'
import { AddFormProps, Product } from '@/types'
import { TextField, Button } from '@mui/material'
import React, {useState} from 'react'
import CustomButton from './CustomButton'



const AddForm = ({addProduct} : AddFormProps) => {
  const [product, setProduct] = useState<Product>({
    title: "",
    description: "",
    price: 0,
    stock: 0,
  });

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    // console.log(product);
    addProduct(product)
    setProduct({
      title: "",
      description: "",
      price: 0,
      stock: 0,
    })
  }

  return (
    <form className='flex flex-row min-w-full justify-around items-center flex-wrap mb-5' onSubmit={(e)=> handleSubmit(e)}>
      <TextField 
        required ={true} 
        id="outlined-title" 
        label="ProductTitle" 
        variant="outlined" 
        name="title" 
        value = {product.title}
        onChange={(e)=>{setProduct({...product, [e.target.name]: e.target.value})}}
      />
      <TextField 
        required ={true} 
        id="outlined-description" 
        label="ProductDescription"  
        name="description" 
        variant="outlined"
        value = {product.description}
        onChange={(e)=>{setProduct({...product, [e.target.name]: e.target.value})}}
      />
      <TextField 
        required ={true} 
        id="outlined-price" 
        label="Price" 
        variant="outlined"  
        name="price" 
        type='number'  
        value = {product.price}
        onChange={(e)=>{setProduct({...product, [e.target.name]: e.target.value})}}
      />
      <TextField 
        required ={true} 
        id="outlined-stock" 
        label="Outlined" 
        variant="outlined" 
        name="stock" 
        type='number' 
        value = {product.stock}
        onChange={(e)=>{setProduct({...product, [e.target.name]: e.target.value})}}
      />
      <Button type='submit' variant="contained" color="primary" className='bg-blue-800'>Add Product</Button>
    </form>
  )
}

export default AddForm