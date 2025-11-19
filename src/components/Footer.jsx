import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-blue-950 h-[30vh] text-white'>
        <div className='grid grid-cols-3 gap-6'>

        <div className='mt-10'>
          <h1>ABOUT US</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem accusantium natus numquam qui quia earum et id impedit. Facere aperiam natus saepe in unde nesciunt impedit doloremque ad commodi maxime.</p>
          
        </div>
        <div className='m-10'>
          <h1>NEWSLETTER</h1>
          <h2>STAY UPDATED WITH OUR LATEST TRENDS</h2>
          <input className='w-100 border-2 border-gray-100 bg-white text-black rounded-xl p-2' type="text"  placeholder='EMAIL ID'/>
        </div>
        <div className='mt-10 '>
          <h1>LET US BE ON SOCIALS</h1>
          <div className='flex gap-5 my-5'>
<FontAwesomeIcon icon={faInstagram}/>
<FontAwesomeIcon icon={faFacebook}/>
<FontAwesomeIcon icon={faTwitter}/>
<FontAwesomeIcon icon={faWhatsapp}/>
          </div>

        </div>
       
        </div>
        <div className='h-[6vh] bg-black text-white text-center'>
          <h1>Copyright © 2023 All rights reserved | This website is made with by  ASHKAR S</h1>

        </div>

        </div>
        

    
    </>
  )
}

export default Footer
