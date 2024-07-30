// import React from 'react'
// import { createClient } from '@supabase/supabase-js'
// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'
// import { useNavigate } from 'react-router-dom'

// const supabase = createClient(
//   "https://xmlanvdscvknywvwcylg.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtbGFudmRzY3Zrbnl3dndjeWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMjAwODcsImV4cCI6MjAxMjg5NjA4N30.GbpQ-myv0TYEd8gTQA2C79aByvrKggnevXoKAk8k5ss"
// )

// const Login = () => {
//     const navigate = useNavigate();

//     supabase.auth.onAuthStateChange(async (event) => {
//         if (event === "SIGNED_IN") {
//             navigate("/success")
//         } else {
//             // navigate("/")
//         }
//     })
//   return (
//     <div>
//       <header className='flex justify-center items-center w-full h-96'>
//         <Auth 
//             supabaseClient={supabase}
//             appearance={{ theme: ThemeSupa}}
//             providers={['discord']}
//             theme='dark'
//         />
//       </header>
//     </div>
//   )
// }

// export default Login

import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://xmlanvdscvknywvwcylg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtbGFudmRzY3Zrbnl3dndjeWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMjAwODcsImV4cCI6MjAxMjg5NjA4N30.GbpQ-myv0TYEd8gTQA2C79aByvrKggnevXoKAk8k5ss"
);

function Login() {

  // Insert Operation
  // const [title, setTitle] = useState(null);
  // const [description, setDescription] = useState(null)
  const [datas, setDatas] = useState(null)
  
  // create one row
  // async function handleSubmit(e) {
  //   e.preventDefault();
    
  //   const { data, error } = await supabase.from('project1').insert({ title: title, description: description });
  //   console.log(data, error);
  // };
  
  // Delete Operation
  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData(){
    const {datas, error} = await supabase.from('project1').select('*')
    console.log(datas, error)
    setDatas(datas)
  }


  return (
    // <div className="bg-green-200">
    // <h1 className='text-3xl'>01. Insert Operation.</h1>
    //  <form action="" onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-5'>
    //   <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter the title' className='bg-gray-300 w-44 h-8 rounded-lg border-black'/>
    //   <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter the description' className='bg-gray-300 w-44 h-8 rounded-lg border-black'/>
    //   <button type='submit' className='bg-red-300 w-24 h-10 rounded-lg'>Submit</button>
    //  </form>
    //  <h1 className='text-3xl'>02. Read Operation.</h1>
    //   <div className='flex flex-col gap-5'>
    //     {datas?.map((item) => (
    //       <div className='flex flex-col gap-5'>
    //         <h1 className='text-2xl'>{item.title}</h1>
    //         <h1 className='text-2xl'>{item.description}</h1>
    //       </div>
    //     ))}
    //     </div>
    // </div>
    <>
      {
        datas ? (
          <>
            {datas.map((post) => (
              <>
                {post.id} {post.title}
              </>
            ))}
          </>
        ) : (
          "Loading"
        )
      }
    </>
  );
}

export default Login;
