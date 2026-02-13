import React from 'react'
import { message } from 'antd';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, setLoading } from '../../redux/rootSlice';
import axios from 'axios';

const AdminIntro = () => {
    const { portfolioData } = useSelector((state) => state.root)
    const dispatch = useDispatch()

    const submitHandler = async (values) => {
        try {
            dispatch(setLoading())
            const response = await axios.put("http://localhost:8080/api/portfolio/update-intro", { ...values, _id: portfolioData.intros._id, })
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
                initialValues={portfolioData?.intros}
            >
                <Form.Item name="welcomeText" label="Welcome Text:" rules={[{ required: true, message: 'Please input your Welcome text!' }]}>
                    <input type="text" placeholder='Welcome Text...' />
                </Form.Item>
                <Form.Item name="firstName" label="First name:" rules={[{ required: true, message: 'Please input your First name!' }]}>
                    <input type="text" placeholder='First name...' />
                </Form.Item>
                <Form.Item name="lastName" label="Last name:" rules={[{ required: true, message: 'Please input your Last name!' }]}>
                    <input type="text" placeholder='Last name...' />
                </Form.Item>
                <Form.Item name="caption" label="Caption:" rules={[{ required: true, message: 'Please input your Caption!' }]}>
                    <input type="text" placeholder='Caption...' />
                </Form.Item>
                <Form.Item name="description" label="Description:" rules={[{ required: true, message: 'Please input your Description!' }]}>
                    <textarea placeholder='Description...' />
                </Form.Item>
                <div className='flex justify-end'>
                    <button type='submit' className='px-10 py-2 bg-gray-800 rounded active:scale-95 transition-all text-white'>SAVE</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminIntro