"use client"
import Footer from '@/components/layout/Footer';
import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Header from '@/components/layout/Header'
import Head from 'next/head';

export const metadata = {
  title: 'Lasles VPN',
  description: 'VPN stands for "Virtual Private Network" and describes the opportunity to establish a protected network connection when using public networks. VPNs encrypt your internet traffic and disguise your online identity. This makes it more difficult for third parties to track your activities online and steal data. The encryption takes place in real time.',

}

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
