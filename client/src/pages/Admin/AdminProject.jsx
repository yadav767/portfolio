import React, { useState } from 'react'
import { Form, message, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { hideLoading, setLoading, setReloadData } from '../../redux/rootSlice'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const AdminProject = () => {
    const dispatch = useDispatch()
    const { portfolioData } = useSelector((state) => state.root)
    const { projects } = portfolioData
    const [showAddEditModel, setShowAddEditModel] = useState(false)
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null)
    const [type, setType] = useState("add")

    const onFinish = async (values) => {
        try {
            const temlTechnologies = values.technologies.split(",")
            values.technologies = temlTechnologies
            dispatch(setLoading())
            let response
            if (selectedItemForEdit) {
                response = await axios.put("http://localhost:8080/api/portfolio/update-project", { ...values, _id: selectedItemForEdit._id })
            } else {
                response = await axios.post("http://localhost:8080/api/portfolio/add-project", values)
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
            const response = await axios.post("http://localhost:8080/api/portfolio/delete-project", { _id: item._id })
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
                    setType("add")
                    setSelectedItemForEdit(null)
                    setShowAddEditModel(true)
                }}
                    className='px-4 rounded active:scale-95 transition-all py-2 bg-primary text-white'>Add Project</button>
            </div>
            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5">
                {projects.map((project, idx) => (
                    <div key={idx} className='shadow border flex flex-col justify-between gap-4 p-5 border-gray-700'>
                        <h1 className=' text-primary font-semibold text-xl'>{project.title}</h1>
                        <div className=' h-50  flex items-center justify-center'>
                            <DotLottieReact
                                src={project.image}
                                loop
                                autoplay
                                style={{ width: 300, height: 300 }}
                            />
                        </div>
                        <hr />

                        <h1>{project.description}</h1>
                        <h1 className='font-semibold'>Link : {project.link}</h1>
                        <h1 className='font-semibold'>Skills : {project.technologies.join(" , ")}</h1>
                        <div className='flex justify-end gap-2'>
                            <button onClick={() => { onDelete(project) }} className='px-4 rounded active:scale-95 transition-all py-2 bg-red-500 text-white'>Delete</button>
                            <button onClick={() => {
                                setSelectedItemForEdit(project)
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
                        title={selectedItemForEdit ? "Edit Project" : "Add Project"}
                        onCancel={() => {
                            setShowAddEditModel(false)
                            setSelectedItemForEdit(null)
                        }}

                    >
                        <Form initialValues={{
                            ...selectedItemForEdit,
                            technologies: selectedItemForEdit?.technologies.join(" , ")
                        } || {}} layout='vertical' onFinish={onFinish}>
                            <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input the title of the project' }]}>
                                <input placeholder='Title...' />
                            </Form.Item>
                            <Form.Item name="description" label="Desciption" rules={[{ required: true, message: 'Please input project description!' }]}>
                                <input placeholder='Description...' />
                            </Form.Item>
                            <Form.Item name="image" label="Video" rules={[{ required: true, message: 'Please input image URL' }]}>
                                <input placeholder='Video URL...' />
                            </Form.Item>
                            <Form.Item name="link" label="Link" rules={[{ required: true, message: 'Please input project live URL' }]}>
                                <input placeholder='Project Live URL...' />
                            </Form.Item>
                            <Form.Item name="technologies" label="Technologies" rules={[{ required: true, message: 'Please input technologies used in project' }]}>
                                <textarea placeholder='Technologies...' />
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

export default AdminProject