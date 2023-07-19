import Image from 'next/image'
import React from 'react'

const Reusablethree = () => {
    return (
        <section className='container  py-5 rounded  border  shadow mt-5 '>
            <div className='d-flex justify-content-evenly  align-items-center'>
                <div className='d-flex'>
                    <Image src="/assets/Icon/heroicons_sm-user.svg" alt="VPN Illustrasi" quality={100} width={50} height={50} />
                    <div className='ps-3'>
                        <h5 className=''>360+</h5>
                        <p className='lh-1'>users</p>
                    </div>
                </div>
                <div className="d-flex text-danger fw-bold" style={{height : '5rem'}}>
                    <div className="vr"></div>
                </div>
                <div className='d-flex'>
                    <Image src="/assets/Icon/gridicons_location.svg" alt="VPN Illustrasi" quality={100} width={50} height={50} />
                    <div className='ps-3'>
                        <h5 className=''>30+</h5>
                        <p  className='lh-1'>Location</p>
                    </div>
                </div>
                <div className="d-flex text-danger" style={{height : '5rem'}}>
                    <div className="vr"></div>
                </div>
                <div className='d-flex'>
                    <Image src="/assets/Icon/bx_bxs-server.svg" alt="VPN Illustrasi" quality={100} width={50} height={50} />
                    <div className='ps-3'>
                        <h5 className=''>60+</h5>
                        <p className='lh-1'>Servers</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Reusablethree
