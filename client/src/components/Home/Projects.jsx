import React, { useState } from 'react'
import SectionTitle from '../SectionTitle'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useSelector } from 'react-redux';

const Projects = () => {
    const { portfolioData } = useSelector((state) => state.root)
    const { projects } = portfolioData


    const [selectedItemIndex, setSelectedItemIndex] = useState(1)
    return (
        <div>
            <SectionTitle title="Projects" />
            <div className="flex gap-30 mt-6 max-sm:mt-0 max-sm:gap-10 py-10 max-sm:py-5 max-sm:flex-col">
                <div className='flex flex-col gap-5 w-1/2 max-sm:py-0 border-l-2 border-[#0a666b] max-sm:flex-row max-sm:overflow-x-scroll max-sm:w-full'>
                    {projects.map((project, index) => (
                        <div key={index} className='p-1 cursor-pointer' onClick={() => setSelectedItemIndex(index)} >
                            <h1 className={`text-[1.1rem] px-6 max-sm:px-3  ${selectedItemIndex === index ? "text-tertiary border-tertiary border-l-4 -ml-[7px] bg-[#1394904e] py-1" : "text-white"}`}>{project.title}</h1>
                        </div>
                    ))}
                </div>
                <div className='flex items-center max-sm:flex-col justify-center gap-8 max-sm:gap-5'>
                    <div className=' h-[35vh] max-sm:h-[30vh] flex items-center justify-center'>
                        <a href={projects[selectedItemIndex].link}>
                            <DotLottieReact
                                src={projects[selectedItemIndex].image}
                                loop
                                autoplay
                                style={{ width: 300, height: 300 }}
                            />
                        </a>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h2 className='text-secondary text-2xl'>{projects[selectedItemIndex].title}</h2>

                        <p className='text-white'>{projects[selectedItemIndex].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects