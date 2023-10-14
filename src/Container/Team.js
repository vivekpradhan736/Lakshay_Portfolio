import React from 'react'
import "./Team.css"

const Team = () => {
  return (
    <div className='team'>
      <div className='text'>
        <img className='pic' src="https://yashjain.design/wp-content/uploads/2023/05/4873856.webp" alt="" />
        <h1>Behind Every Great Project is a</h1>
        <h1 className='secondH1'>Team of Amazing People</h1>
        <div className='smallText'>
        <h4>My Journey from Hustling Student to Shy Intern, Startup Founder, Head</h4>
        <h4>of Design, Global Freelancer and Beyond!</h4>
        </div>
      </div>

      <div className='cardss'>
        <div className='cardss1'>
          <img className='picture' src="https://yashjain.design/wp-content/uploads/2023/02/Untitled-design-12.png" alt="" />
          <h1 className='textH1'>Team Think School</h1>
          <h4 className='textH4'>Founder & CEO</h4>
        </div>
        <div className='cardss1'>
          <img className='picture' src="https://yashjain.design/wp-content/uploads/2023/03/Untitled-design-17.webp" alt="" />
          <h1 className='textH1'>Yash Jain</h1>
          <h4 className='textH4'>Founder & CEO</h4>
        </div>
        <div className='cardss1'>
          <img className='picture' src="https://yashjain.design/wp-content/uploads/2023/03/Untitled-design-13.webp" alt="" />
          <h1 className='textH1'>Yash Jain</h1>
          <h4 className='textH4'>Founder & CEO</h4>
        </div>
      </div>
    </div>
  )
}

export default Team
