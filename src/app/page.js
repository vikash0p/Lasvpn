
import Abouot from '@/components/Abouot'
import Feature from '@/components/Feature'
import Pricing from '@/components/Pricing'
import Testimonal from '@/components/Testimonal'
import Head from 'next/head'
import React from 'react'




const Home = () => {
  return (
    <>
    <Head>this is home page</Head>
    <Abouot/>
    <Feature/>
    <Pricing/>
    <Testimonal/>
    </>
  )
}

export default Home
