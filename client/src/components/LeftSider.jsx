import React from 'react'

const LeftSider = () => {
    return (
        <div className='fixed left-0 bottom-0 px-8 py-3 max-sm:static'>
            <div className='flex flex-col items-center gap-3'>
                <div className="flex flex-col gap-3 max-sm:flex-row">
                    <a href=""><i className="ri-mail-line text-gray-400 cursor-pointer" ></i></a>
                    <a href="https://www.instagram.com/_ghost_rider_808/"><i className="ri-instagram-line text-gray-400 cursor-pointer" ></i></a>
                    <a href="https://www.linkedin.com/in/ayush-yadav-135964280/"><i className="ri-linkedin-box-line text-gray-400 cursor-pointer" ></i></a>
                    <a href="https://github.com/yadav767"><i className="ri-github-line text-gray-400 cursor-pointer" ></i></a>
                </div>
                <div className='w-[1px] h-30 bg-[#0a7870] max-sm:hidden'></div>

            </div>
        </div>
    )
}

export default LeftSider