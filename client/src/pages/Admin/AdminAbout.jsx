import React from 'react'
import { message } from 'antd';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, setLoading } from '../../redux/rootSlice';
import axios from 'axios';

const AdminAbout = () => {
    const { portfolioData } = useSelector((state) => state.root)
    const dispatch = useDispatch()

    const submitHandler = async (values) => {
      const tempSkills=values.skills.split(",")
      values.skills=tempSkills
        try {
            dispatch(setLoading())
            const response = await axios.put("http://localhost:8080/api/portfolio/update-about", { ...values, _id: portfolioData.abouts._id, })
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
                initialValues={portfolioData?.abouts}
            >
                <Form.Item name="lottieURL" label="Lottie URL:" rules={[{ required: true, message: 'Please input your URL!' }]}>
                    <input type="text" placeholder='URL...' />
                </Form.Item>
                <Form.Item name="description1" label="Paragraph 1:" rules={[{ required: true, message: 'Please input First paragraph' }]}>
                    <textarea  placeholder='Paragraph 1...' />
                </Form.Item>
                <Form.Item name="description2" label="Paragraph 2:" rules={[{ required: true, message: 'Please input your Second patagraph!' }]}>
                    <textarea placeholder='Paragraph 2...' />
                </Form.Item>
                <Form.Item name="skills" label="Skills:" rules={[{ required: true, message: 'Please input your skills!' }]}>
                    <textarea placeholder='Skills ...' />
                </Form.Item>
                
                <div className='flex justify-end'>
                    <button type='submit' className='px-10 py-2 bg-gray-800 rounded active:scale-95 transition-all text-white'>SAVE</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminAbout