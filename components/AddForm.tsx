'use client'
import { Product } from '@/types'
import { TextField, Button } from '@mui/material'
import React, {useState} from 'react'
import CustomButton from './CustomButton'

const AddForm = () => {
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: "",
    price: 0,
    stock: 0,
  });

  const handleSubmit = () =>{
    
  }

  return (
    <form className='flex flex-row min-w-full justify-around items-center flex-wrap mb-5' onSubmit={handleSubmit}>
      <TextField id="outlined-title" label="ProductTitle" variant="outlined" name="title" onChange={(e)=>{setProduct({...product, [e.target.name]: e.target.value})}}/>
      <TextField id="outlined-description" label="ProductDescription"  name="description" variant="outlined"  onChange={(e)=>{setProduct({...product, [e.target.name]: e.target.value})}}/>
      <TextField id="outlined-price" label="Price" variant="outlined"  name="price" type='number'  onChange={(e)=>{setProduct({...product, [e.target.name]: e.target.value})}}/>
      <TextField id="outlined-stock" label="Outlined" variant="outlined" name="stock" type='number' onChange={(e)=>{setProduct({...product, [e.target.name]: e.target.value})}}/>
      <Button type='submit' variant="contained" color="primary" className='bg-blue-800'>Add Product</Button>
    </form>
  )
}

export default AddForm