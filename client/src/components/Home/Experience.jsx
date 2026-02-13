import { useSelector } from 'react-redux'

import { useState } from 'react';
import SectionTitle from '../SectionTitle'

function Experience() {
    const { portfolioData } = useSelector((state) => state.root)
    const {experiences}=portfolioData

    const [selectedItemIndex, setSelectedItemIndex] = useState(1)
    return (
        <div className='pb-8'>
            <SectionTitle title="Experience" />
            <div className="flex gap-70 mt-6 max-sm:mt-0 max-sm:gap-20 py-10 max-sm:py-5 max-sm:flex-col">
                <div className='flex flex-col gap-5 w-1/3 max-sm:py-0 border-l-2 border-[#0a666b] max-sm:flex-row max-sm:overflow-x-scroll max-sm:w-full'>
                    {experiences.map((exp, index) => (
                        <div key={index} className='p-1 cursor-pointer' onClick={()=>setSelectedItemIndex(index)} >
                            <h1 className={`text-[1.1rem] px-6 max-sm:px-3  ${selectedItemIndex === index ? "text-tertiary border-tertiary border-l-4 -ml-[7px] bg-[#1394904e] py-1" : "text-white"}`}>{exp.period}</h1>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-secondary text-2xl'>{experiences[selectedItemIndex].company}</h2>
                    <h2 className='text-tertiary'>{experiences[selectedItemIndex].title}</h2>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deserunt pariatur dicta quas, eum harum eveniet? Quos vitae quas, ratione ea veritatis minima aliquam quo sequi, accusantium distinctio tempore veniam!</p>
                </div>
            </div>
        </div>
    )
}

export default Experience