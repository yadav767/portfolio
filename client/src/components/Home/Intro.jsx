import React from 'react'
import { useSelector } from 'react-redux'

const Intro = () => {

  const { portfolioData } = useSelector((state) => state.root)
  const { intros } = portfolioData
  const { firstName, lastName, description, caption, welcomeText } = intros
  return (
    <div className='h-[80vh] py-10 max-sm:h-[60vh] bg-primary flex flex-col items-start justify-center gap-10'>
      <h1 className='text-white '>{welcomeText || ''}</h1>
      <h1 className='text-secondary text-7xl max-sm:text-3xl font-semibold'>{firstName || ''} {lastName || ''}</h1>
      <h1 className='text-white text-5xl max-sm:text-3xl font-medium'>{caption || ' '}</h1>
      <p className='text-white w-2/5 max-sm:w-4/5'>
        {description || ''} <br />to create fast and user-friendly applications.
      </p>
      <button className='px-8 py-3  bg-primary border-2 border-tertiary text-tertiary'>Get Started </button>
    </div>
  )
}

export default Intro