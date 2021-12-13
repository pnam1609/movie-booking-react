import { Button, Input, InputNumber } from 'antd';
import Form from 'antd/lib/form/Form';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import callApi from '../../../../../apis/callApi'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

function UserForm() {

    const [isAdd, setIsAdd] = useState(false)
    const [userData, setUserData] = useState({
        "taiKhoan": "",
        "hoTen": "",
        "email": "",
        "maNhom": "GP02",
        "maLoaiNguoiDung": "KhachHang",
        "soDT": "",
    })
    const params = useParams()

    useEffect(() => {
        (async () => {
            if (params["id"]) {
                const res = await callApi("QuanLyNguoiDung/ThongTinTaiKhoan", "Post", { taiKhoan: params.id })
                setUserData(res.data)
                setIsAdd(false)
            } else {
                setIsAdd(true)
            }
        })()

        // eslint-disable-next-line
    }, [])
    // console.log(userData);
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        // <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        //     <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        //         <Input />
        //     </Form.Item>
        //     <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        //         <Input />
        //     </Form.Item>
        //     <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        //         <InputNumber />
        //     </Form.Item>
        //     <Form.Item name={['user', 'website']} label="Website">
        //         <Input />
        //     </Form.Item>
        //     <Form.Item name={['user', 'introduction']} label="Introduction">
        //         <Input.TextArea />
        //     </Form.Item>
        //     <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        //         <Button type="primary" htmlType="submit">
        //             Submit
        //         </Button>
        //     </Form.Item>
        // </Form>
        <Form {...layout} name="nest-messages">
            <Form.Item name={['user', 'name']} label="Name" >
                <Input />
            </Form.Item>
        </Form>
    );
}

export default UserForm
