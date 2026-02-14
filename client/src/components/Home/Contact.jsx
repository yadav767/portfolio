import React from 'react'
import SectionTitle from '../SectionTitle'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useSelector } from 'react-redux';

const Contact = () => {
    const { portfolioData } = useSelector((state) => state.root)
    const {contacts}=portfolioData
    const contact=contacts[0]

    // const user = {
       
    //     name: "Ayush Yadav",
    //     age: "22",
    //     gender: "Male",
    //     email: "yyadavaayush767@gmail.com",
    //     mobile: "9305483582",
    //     country: "India"
    // }
    return (
        <div className='mt-3'>
            <SectionTitle title="Say Hello!" />
            <div className="flex items-center justify-between px-30 max-sm:px-0 max-sm:flex-col">
                <div className="flex flex-col max-sm:px-7 gap-1">
                    <h1 className='text-tertiary'>{"{"}</h1>
                    {Object.keys(contact).filter(key => key !== "_id").map((key,idx) => (
                        <h1 key={idx} className='text-tertiary  ml-6'>
                            <span>{key} : </span>
                            <span>{contact[key]} ,</span>
                        </h1>
                    ))}
                    <h1 className='text-tertiary'>{"}"}</h1>
                </div>
                <div className='h-[45vh] max-sm:h-[42vh] flex items-center justify-center'>
                    <DotLottieReact
                        src="https://lottie.host/30ebcc69-ac36-4183-a0bd-24e08883027a/vR0KiX3AbR.lottie"
                        loop
                        autoplay
                        style={{ width: 350, height: 350 }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact