import React, { useState } from 'react'
import SectionTitle from '../SectionTitle'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useSelector } from 'react-redux';

const Projects = () => {
    const { portfolioData } = useSelector((state) => state.root)
    const {projects}=portfolioData  
    //     {
    //         technologies: [],
    //         title: "Kanban Task Manager",
    //         image: "https://lottie.host/610ac0ac-09ec-4a0f-989a-50d23a6c0046/ljTUoYtfgx.lottie",
    //         description: "A kanban board app for managing tasks with drag drop",
    //         link: "https://kanban-demo.vercel.app"
    //     },
    //     {
    //         technologies: [],
    //         title: "Recipe Finder App",
    //         image: "https://lottie.host/8a98c68b-0bea-45f5-9a34-cd053d53799b/Xw0tFtJwIq.lottie",
    //         description: "Find recipes easily based on ingredients using simple search",
    //         link: "https://recipe-finder.netlify.app"
    //     },
    //     {
    //         technologies: [],
    //         title: "Productivity Dashboard",
    //         image: "https://lottie.host/014131fd-c8d5-48c2-b788-9772fdaab26f/Q6jWrhbBQt.lottie",
    //         description: "All in one dashboard for tasks time goals productivity",
    //         link: "https://productivity-dashboard.vercel.app"
    //     },
    //     {
    //         technologies: [],
    //         title: "Portfolio Website",
    //         image: "https://lottie.host/88a7bfa9-39d4-4d8a-9474-6a15387e8cd0/waMsFL3LS2.lottie",
    //         description: "Personal portfolio website showcasing skills projects and contact",
    //         link: "https://ayush-portfolio.vercel.app"
    //     }
    // ];

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
                        <DotLottieReact
                            src={projects[selectedItemIndex].image}
                            loop
                            autoplay
                            style={{ width: 300, height: 300 }}
                        />
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h2 className='text-secondary text-2xl'>{projects[selectedItemIndex].title}</h2>

                        <p className='text-white'>{projects[selectedItemIndex].description}</p>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto mollitia tempora molestiae dolore temporibus ipsam voluptatibus at nulla placeat, eius libero facilis quod natus odit magnam, alias ab quo quidem?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects