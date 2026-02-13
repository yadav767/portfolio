import React from 'react'
import { Tabs } from 'antd';
import Header from '../../components/Home/Header'
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';


const Admin = () => {
    const { portfolioData } = useSelector((state) => state.root)

    const items = [
        {
            key: "1",
            label: "Intro",
            children: <AdminIntro />,
        },
        {
            key: "2",
            label: "Users",
            children: <AdminAbout />,
        },

    ];
    return (
        <div>
            <Header />
            {portfolioData && (
                <div className=' text-xl p-2 px-11'>
                    <Tabs defaultActiveKey="1" items={items} />
                </div>
            )}
        </div>
    )
}

export default Admin