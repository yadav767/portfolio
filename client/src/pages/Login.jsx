import React from 'react'
import { Form, Input, Button, Card, Typography, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { hideLoading, setLoading } from '../redux/rootSlice'

const Login = () => {
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const onFinish = async (values) => {
        const { username, password } = values
        try {
            // dispatch(setLoading())
            const response = await axios.post("https://portfolio-1-bg32.onrender.com/api/portfolio/admin-login", { username, password })
            dispatch(hideLoading())
            if(response.data.success){
                message.success(response.data.message)
                localStorage.setItem("token",JSON.stringify(response.data))
                navigate("/admin")
            }else{
                alert("Invalid details")
            }
            
        } catch (error) {
            message.error("Invalid username or password")
            dispatch(hideLoading())
        }

    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <Card style={{ width: 360 }}>
                <Typography.Title level={3} style={{ textAlign: 'center', marginBottom: 24 }}>
                    Admin Login
                </Typography.Title>
                <Form name="username" layout="vertical" onFinish={onFinish}>
                    <Form.Item name="username" rules={[{ required: true, message: 'Please enter username' }]}>
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item name="password" rules={[{ required: true, message: 'Please enter password' }]}>
                        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login