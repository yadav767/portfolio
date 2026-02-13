import React from 'react'

function SectionTitle({title}) {
  return (
    <div className='flex items-center gap-10  max-sm:py-10 max-sm:mb-5'>
      <div className='text-3xl text-secondary
      
      font-semibold'>
        {title}
      </div>
      <div className='w-40 h-[1px] bg-tertiary'></div>
    </div>
  )
}

export default SectionTitle