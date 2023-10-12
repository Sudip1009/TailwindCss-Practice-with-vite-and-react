import React from 'react'
import Navbar from '../Navbar'
import Category from '../Category'

export default function Wallet() {
  return (
    <>
    <Navbar/>
    <div className='text-4xl p-4 font-bold text-center border-4 border-orange-200'>Wallet</div>
    <Category/>
    </>
  )
}
