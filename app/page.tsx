'use client'
import { Box, Button, FormControl, TextField } from '@mui/material'
import Image from 'next/image'
import { signIn } from "next-auth/react";
import { FormEvent, useState } from 'react';
import { redirect } from 'next/navigation'
import { useSession, getSession } from "next-auth/react"


export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { data: session, status } = useSession()

  if(status === "authenticated"){
    redirect('/dashboard')
  }

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username,password);
    const result = await signIn("credentials", { username: username, password: password, redirect: false})

    console.log(result)
    if (result?.error) {
      alert('Wrong Credentials')
    } else {
      redirect('/dashboard');
    }
  }

  return (
    <main className='flex min-h-screen min-w-full justify-center align-center' >
      <form onSubmit={(e)=> handleSubmit(e)}>
        <FormControl sx={{minWidth: '500px', widht: '700px', display:'flex', flexDirection:'column'}}> 
          <TextField id="username" label="Username" variant="outlined" name='username' type='text' className='m-2' onChange={(e)=>{setUsername(e.target.value)}} value={username}/>
          <TextField id="pass" label="password" variant="outlined" name='password' type='password' className='m-2' onChange={(e)=>{setPassword(e.target.value)}} value ={password}/>
          <Button variant='contained' color="primary" className='m-2 bg-teal-500' sx={{color:'white'}} type="submit">Login</Button>
        </FormControl>
      </form>
    </main> 
  )
}
