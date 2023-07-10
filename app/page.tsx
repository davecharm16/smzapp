'use client'
import { Box, Button, TextField } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen min-w-full justify-center align-center'>
      <Box sx={{minWidth: '500px', widht: '700px', display:'flex', flexDirection:'column'}}> 
        <TextField id="email" label="Email" variant="outlined" name='email' type='email' className='m-2'/>
        <TextField id="pass" label="password" variant="outlined" name='pass' type='password' className='m-2'/>
        <Button variant='contained' color="primary" className='m-2 bg-teal-500' sx={{color:'white'}}>Login</Button>
      </Box>
    </main> 
  )
}
