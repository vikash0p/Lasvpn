"use client"
import Footer from '@/components/layout/Footer';
import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Header from '@/components/layout/Header'




export default function RootLayout({ children }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <title >Lasles VPN</title>
  
      
      <body className='bg-light'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
