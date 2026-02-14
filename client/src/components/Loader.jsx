import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center z-[10000]  fixed inset-0 bg-primary'>
        <div className="flex font-semibold max-sm:text-4xl">
            <div className='text-5xl text-secondary first'>a</div>
            <div className='text-5xl text-white second'>yus</div>
            <div className='text-5xl text-tertiary third'>h</div>
        </div>
    </div>
  )
}

export default Loader