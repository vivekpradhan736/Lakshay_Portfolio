import React, { useEffect, useState} from 'react'
import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'

const supabase = createClient(
  "https://xmlanvdscvknywvwcylg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtbGFudmRzY3Zrbnl3dndjeWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMjAwODcsImV4cCI6MjAxMjg5NjA4N30.GbpQ-myv0TYEd8gTQA2C79aByvrKggnevXoKAk8k5ss"
)

const Success = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                // value.data.user
                if(value.data?.user) {
                    console.log(value.data.user)
                    setUser(value.data.user)
                }
            })
        }
        getUserData()
    }, [])

    async function signOutUser() {
      const { error } = await supabase.auth.signOut()
      navigate('/')
    }
  return (
    <div>
      <header className='flex justify-center items-center w-full h-96'>
      { Object.keys(user).length !== 0 ?
        <>
           <h1 className='text-6xl'>Success</h1>
           <button className='bg-red-300 w-24 h-10 rounded-lg' onClick={() => signOutUser()} >Sign Out</button>
        </>
      :
        <>
           <h1 className='text-6xl'>Not Logged In</h1>
           <button className='bg-red-300 w-24 h-10 rounded-lg' onClick={() => {navigate("/login")}} >Login</button>
        </>
      }
      </header>
    </div>
  )
}

export default Success
