import React, { useState } from 'react'
import { Form, message, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { hideLoading, setLoading, setReloadData } from '../../redux/rootSlice'

const Experience = () => {
    const dispatch = useDispatch()
    const { portfolioData } = useSelector((state) => state.root)
    const { experiences } = portfolioData
    const [showAddEditModel, setShowAddEditModel] = useState(false)
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null)
    const [type, setType] = useState("add")

    const onFinish = async (values) => {
        try {
            dispatch(setLoading())
            let response
            if (selectedItemForEdit) {
                response = await axios.put("http://localhost:8080/api/portfolio/update-experience", { ...values, _id: selectedItemForEdit._id })
            } else {
                response = await axios.post("http://localhost:8080/api/portfolio/add-experience", values)
            }
            dispatch(hideLoading())
            if (response.data.success) {
                message.success(response.data.message)
                setShowAddEditModel(false);
                dispatch(setReloadData(true))
                dispatch(hideLoading())
                setSelectedItemForEdit(null)
            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(hideLoading())
            message.error(error.message)

        }
    }

    const onDelete = async (item) => {
        try {
            dispatch(setLoading())
            const response = await axios.post("http://localhost:8080/api/portfolio/delete-experience", { _id: item._id })
            dispatch(hideLoading())
            if (response.data.success) {
                message.success(response.data.message)
                dispatch(hideLoading())
                dispatch(setReloadData(true))

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
            <div className=" mb-2 flex justify-end">
                <button onClick={() => {
                    setSelectedItemForEdit(null)
                    setShowAddEditModel(true)
                }}
                    className='px-4 rounded active:scale-95 transition-all py-2 bg-primary text-white'>Add Experience</button>
            </div>
            <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5">
                {experiences.map((experience, idx) => (
                    <div key={idx} className='shadow border flex flex-col justify-between gap-4 p-5 border-gray-700'>
                        <h1 className=' text-secondary font-semibold text-xl'>{experience.period}</h1>
                        <h1 className='font-bold text-xl'>{experience.company}</h1>
                        <hr />
                        <h1 className='font-semibold'>{experience.title}</h1>
                        <h1>{experience.description}</h1>
                        <div className='flex justify-end gap-2'>
                            <button onClick={() => { onDelete(experience) }} className='px-4 rounded active:scale-95 transition-all py-2 bg-red-500 text-white'>Delete</button>
                            <button onClick={() => {
                                setSelectedItemForEdit(experience)
                                setShowAddEditModel(true)
                                setType("edit")
                            }} className='px-4 rounded active:scale-95 transition-all py-2 bg-primary text-white'>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
            {
                (type == "add" || selectedItemForEdit) && (
                    <Modal
                        footer={null}
                        open={showAddEditModel}
                        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
                        onCancel={() => {
                            setShowAddEditModel(false)
                            setSelectedItemForEdit(null)
                        }}

                    >
                        <Form initialValues={selectedItemForEdit} layout='vertical' onFinish={onFinish}>
                            <Form.Item name="period" label="Period" rules={[{ required: true, message: 'Please input years of experience!' }]}>
                                <input placeholder='Period...' />
                            </Form.Item>
                            <Form.Item name="company" label="Company" rules={[{ required: true, message: 'Please input your company name!' }]}>
                                <input placeholder='Company...' />
                            </Form.Item>
                            <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input your jon title!' }]}>
                                <input placeholder='Title...' />
                            </Form.Item>
                            <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please input your job description!' }]}>
                                <input placeholder='Description...' />
                            </Form.Item>
                            <div className="flex justify-end gap-2">
                                <button type='submit' className='px-4 rounded active:scale-95 transition-all py-2 bg-primary text-white'>{selectedItemForEdit ? "Update" : "Add"}</button>
                            </div>
                        </Form>
                    </Modal>
                )
            }
        </div>
    )
}

export default Experience