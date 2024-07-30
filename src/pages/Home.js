import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <header className='flex flex-col justify-center items-center w-full h-96 gap-10'>
        <h1 className='text-6xl'>Home Page</h1>
        <button className='bg-red-300 w-24 h-10 rounded-lg' onClick={() => {navigate("/login")}} >Login</button>
      </header>
  )
}

export default Home
