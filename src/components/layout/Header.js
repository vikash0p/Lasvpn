"use-client"
import styles from './header.module.css'

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";


const links = [

  {
    id: 1,
    href: 'about',
    name: 'About'
  },
  {
    id: 2,
    href: 'feature',
    name: 'feature'
  },
  {
    id: 3,
    href: 'price',
    name: 'Pricing'
  },
  {
    id: 4,
    href: 'testimonials',
    name: 'Testimonials'
  },


]

const Header = () => {


  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {

    window.addEventListener("scroll", () => { setScrollActive(window.scrollY > 20); });

  }, []);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return (
    <header className={'fixed-top w-100 ' + (scrollActive ? ' bg-light shadow pt-0' : '')}>
      <div className='container-fluid  '  >
        <div className="row">
          <div className="col-10 m-auto">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link className="navbar-brand fs-4  link-danger " href="/">Lasles<span className='fw-bold'>VPN</span></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                  <ul className="navbar-nav  me-auto px-5 mb-2 mb-lg-0">
                    {
                      links && links.map((link, idx) => {

                        return (
                          <>
                            <li className="nav-item">

                              <Link activeClass="active" to={link.href} spy={true} smooth={true} offset={50} duration={500} className={"nav-link   fs-5 px-4"} aria-current="page" scroll={false} key={link.id} >{link.name}</Link>

                            </li>
                          </>

                        )
                      })
                    }
                  </ul>
                  <div>
                    <button type="submit" className="btn btn-outline-danger px-5 rounded-pill ">LogIn</button>

                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
