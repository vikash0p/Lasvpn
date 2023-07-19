import Image from 'next/image'
import React from 'react'



const Feature = () => {
  return (
    <>
      <section className='container' id='feature' >
        <div className="row align-items-center m-5" style={{ minHeight: '600px' }}>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <Image src="/assets/Illustration2.png" alt="VPN Illustrasi" quality={100} width={612} height={383} layout="responsive" className='img-fluid' />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-3 mt-sm-3 mt-md-0 ">
            <div className="row ">
              <div className="col-10 col-md-8 m-auto">
                <p className='fs-2 fw-bold lh-1'>We Provide Many Features You Can Use</p>
                <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                <ul className='list-unstyled'>
                  <li>Powerfull online protection.</li>
                  <li>Internet without borders.</li>
                  <li>Supercharged VPN</li>
                  <li>No specific time limits.</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

    </>


  )
}

export default Feature
