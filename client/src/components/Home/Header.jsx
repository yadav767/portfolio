import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    
  
  return (
    <div className='p-5 bg-primary flex justify-between'>
        <h1 className='text-secondary text-4xl font-semibold'>A</h1>
        <h1 className='text-white text-4xl font-semibold'>DEV</h1>
        <h1 className='text-tertiary text-4xl font-semibold'>Y</h1>

    </div>
  )
}

export default Header