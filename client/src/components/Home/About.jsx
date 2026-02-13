import React from 'react'
import SectionTitle from '../SectionTitle'
import { useSelector } from 'react-redux'


function About() {

    const { portfolioData } = useSelector((state) => state.root)
    const { abouts } = portfolioData
    const { description1, description2, lottieURL, skills}=abouts


    // const skills = ["HTML", "Tailwind CSS", "CSS", "JavaScript", "jQuery", "React", "Postman", "Node.js", "Express.js", "MongoDB", "Git", "GitHub"]
    return (
        <div className='mb-[4rem] max-sm:m-4'>
            <SectionTitle title="About" />
            <div className="flex w-full items-start max-sm:flex-col ">
                <div className=' h-[53vh] max-sm:h-[30vh] flex items-center justify-center'>
                    <dotlottie-wc
                        src={lottieURL}
                        style={{ width: "350px", height: " 350px" }}
                        loop
                        autoplay
                    ></dotlottie-wc>
                </div>
                <div className="flex flex-col mt-[5rem] gap-5 text-white max-sm:text-0.7xl justify-center w-1/2 max-sm:w-full">
                    <p>{description1}</p>
                    <p>{description2}</p>
                </div>      
            </div>
            <div className='py-5'>
                <h1 className='text-1.5xl text-tertiary'>Here are few technologies and tools I've working with recently.</h1>
                <div className='flex flex-wrap gap-5 mt-7'>
                    {skills.map((skill, index) => (
                        <div key={index} className='border border-tertiary py-3 px-10'>
                            <h1 className='text-tertiary'>{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About