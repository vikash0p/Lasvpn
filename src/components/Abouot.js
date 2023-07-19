import Image from 'next/image'
import React from 'react'
import Reusablethree from './Reusablethree'


const Abouot = () => {
  return (
    <>
    <section className='container ' id='about' >
      <div className="row align-items-center mt-5" style={{ minHeight:'500px'}}>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
          <p className='display-5 fw-bold'>Want anything to be easy with LaslesVPN.</p>
          <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
          <button type="submit" className='btn btn-danger px-5 btn-lg'>Get Started</button>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
        <Image  src="/assets/Illustration1.png"  alt="VPN Illustrasi"  quality={100} width={612} height={383} layout="responsive" className='img-fluid' />
        </div>
      </div>
    </section>
    <Reusablethree/>
    </>
    

  )
}

export default Abouot
