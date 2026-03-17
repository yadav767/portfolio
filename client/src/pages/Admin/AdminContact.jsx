import React from 'react'
import { message } from 'antd';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, setLoading } from '../../redux/rootSlice';
import axios from 'axios';

const AdminContact = () => {
    const { portfolioData } = useSelector((state) => state.root)
    const dispatch = useDispatch()

    const submitHandler = async (values) => {
        try {
            dispatch(setLoading())
            const response = await axios.put("http://localhost:8080/api/portfolio/update-contact", { ...values, _id: portfolioData.contacts[0]._id, })
            dispatch(hideLoading())
            if (response.data.success) {
                message.success(response.data.message)
            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(hideLoading())
            message.error(error.message)

        }
    }


    return (
        <div>
            <Form onFinish={submitHandler} layout='vertical'
                initialValues={portfolioData?.contacts[0]}
            >
                <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input yourname!' }]}>
                    <input type="text" placeholder='Name...' />
                </Form.Item>
                <Form.Item name="age" label="age" rules={[{ required: true, message: 'Please input your age!' }]}>
                    <input type="text" placeholder='Age...' />
                </Form.Item>
                <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please input your Gender!' }]}>
                    <input placeholder='Gender...' />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input your Email!' }]}>
                    <input placeholder='Email...' />
                </Form.Item>
                <Form.Item name="mobile" label="Mobile" rules={[{ required: true, message: 'Please input your Mobile number!' }]}>
                    <input placeholder='Mob.no...' />
                </Form.Item>
                <Form.Item name="address" label="Adress" rules={[{ required: true, message: 'Please input your Adress!' }]}>
                    <input placeholder='Address...' />
                </Form.Item>
                <div className='flex justify-end'>
                    <button type='submit' className='px-10 py-2 bg-gray-800 rounded active:scale-95 transition-all text-white'>SAVE</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminContact