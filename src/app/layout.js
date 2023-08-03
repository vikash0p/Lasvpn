
import Footer from '@/components/layout/Footer';
import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Header from '@/components/layout/Header'




export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
    
      <body className='bg-light'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
