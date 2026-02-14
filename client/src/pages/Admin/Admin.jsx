import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import Header from '../../components/Home/Header'
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import Experience from './Experience';
import AdminProject from './AdminProject';
import AdminContact from './AdminContact';
import { useNavigate } from 'react-router-dom';


const Admin = () => {
    const navigate=useNavigate()
    const { portfolioData } = useSelector((state) => state.root)

    const items = [
        {
            key: "1",
            label: "Intros",
            children: <AdminIntro />,
        },
        {
            key: "2",
            label: "Abouts",
            children: <AdminAbout />,
        },
        {
            key: "3",
            label: "Exeriences",
            children: <Experience />,
        },
        {
            key: "4",
            label: "Projects",
            children: <AdminProject />,
        },
        {
            key: "5",
            label: "Contacts",
            children: <AdminContact />,
        },

    ];

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/admin-login")
        }
    })
    return (
        <div>
            <Header />
            <div className='flex items-center gap-10 p-2'>
                <div className='text-3xl text-secondaryfont-semibold'>
                    Portfolio Admin
                </div>
                <div className='w-40 h-[1px] bg-gray-500'></div>
            </div>
            {portfolioData && (
                <div className=' text-xl pb-20 p-2 px-11 max-sm:px-5'>
                    <Tabs defaultActiveKey="1" items={items} />
                </div>
            )}
        </div>
    )
}

export default Admin