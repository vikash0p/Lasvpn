import Image from 'next/image'
import React from 'react'

const Pricing = () => {
  return (
    <section className='container ' id='price'>
      <div className='text-center'>
        <h2>Choose Your Plan</h2>
        <p>Let choose the package that is best for you and explore it <br/> happily and cheerfully.</p>
      </div>
      <div className="row  row-cols-1  row-cols-ms-1 row-cols-md-3 row-cols-lg-4 justify-content-center gap-4 " >
      
        <div className="col   rounded border border-2 pb-5 mt-5  ">
           <Image className='mx-auto d-block mt-5 mb-4 ' src="/assets/Free.png" alt="VPN Illustrasi" quality={100} width={120} height={150} />
           <h5 className='text-center'>Free</h5>
           <ul className='ms-5 list-unstyled text-sm-center text-center text-md-0 text-lg-0'>
            <li className='lh-lg'>Unlimited Bandwitch</li>
            <li className='lh-lg'>Encrypted Connection</li>
            <li className='lh-lg'>Encrypted Connection</li>
            <li className='lh-lg'>Works on All Devices</li>
           </ul>
            <div className='text-center mt-5 '> 
              <h4>Free</h4>
              <button className="btn px-5 rounded-pill btn-outline-danger mt-3">select</button>
            </div>
        </div>

        <div className="col   rounded border border-2 gap-5 mt-5">
           <Image className='mx-auto d-block mt-5 mb-4' src="/assets/Standard.png" alt="VPN Illustrasi" quality={100} width={120} height={150} />
           <h5 className='text-center'>Standard</h5>
           <ul className='ms-5 list-unstyled text-sm-center text-center text-md-0 text-lg-0'>
            <li className='lh-lg' >Unlimited Bandwitch</li>
            <li className='lh-lg' >Encrypted Connection</li>
            <li className='lh-lg' >Encrypted Connection</li>
            <li className='lh-lg' >Works on All Devices</li>
            <li className='lh-lg' >Connect Anyware</li>
           </ul>
           <div className='text-center mt-5 '> 
              <h4>$9/mo</h4>
              <button className="btn px-5 rounded-pill btn-outline-danger mt-3">select</button>
            </div>
        </div>
        <div className="col   rounded border border-2 gap-5 pb-5 mt-5 ">
           <Image className='mx-auto d-block mt-5 mb-4' src="/assets/Premium.png" alt="VPN Illustrasi" quality={100} width={120} height={150} />
      
           <h5 className='text-center'>Standard</h5>
           <ul className='ms-5 list-unstyled text-sm-center text-center text-md-0 text-lg-0'>
            <li className='lh-lg' >Unlimited Bandwitch</li>
            <li className='lh-lg' >Encrypted Connection</li>
            <li className='lh-lg' >Encrypted Connection</li>
            <li className='lh-lg' >Works on All Devices</li>
            <li className='lh-lg' >Connect Anyware</li>
            <li className='lh-lg' >Get New Features</li>
           </ul>
     
           <div className='text-center mt-5 '> 
              <h4>$20/mo</h4>
              <button className="btn px-5 rounded-pill btn-outline-danger mt-3">select</button>
            </div>
        </div>
      </div>
      <div className='text-center mt-5'>
            <h4 className='fw-bold'>Huge Global Network <br /> of Fast VPN</h4>
            <p>See LaslesVPN everywhere to make it easier for you when you move <br /> locations.</p>
            </div>
            <Image className='mx-auto d-block mt-5 mb-4 img-fluid' src="/assets/HugeGlobal.svg" alt="VPN Illustrasi" quality={100} width={1200} height={650} />
    </section>

  )
}

export default Pricing
