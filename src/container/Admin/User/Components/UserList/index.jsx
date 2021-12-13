import React, { useState } from 'react'
import { Button, Layout, Space } from 'antd';
import withData from '../../../../../hoc/withData'
import { Table } from 'antd';
import Search from 'antd/lib/input/Search';
import { DeleteOutlined, EditOutlined, UserAddOutlined } from '@ant-design/icons/lib/icons';
import { Link } from 'react-router-dom';

const { Content } = Layout;

function UserList({ data }) {
    const [backUpDate] = useState(data)// giữ lại data lúc đầu
    const [userList, setUserList] = useState(data)

    const handleSearch = value => {
        setUserList(() => {
            const result = backUpDate.filter(params => {
                return params.taiKhoan.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                    params.hoTen.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                    params.email.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                    params.soDt.toLowerCase().indexOf(value.toLowerCase()) !== -1
            })
            return result
        })
    }

    const columns = [
        {
            title: "Tên tài khoản",
            dataIndex: 'taiKhoan'
        },
        {
            title: "Họ và tên",
            dataIndex: 'hoTen'
        },
        {
            title: "Email",
            dataIndex: 'email',
        },
        {
            title: "Số điện thoại",
            dataIndex: 'soDt',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button icon={<EditOutlined />}><Link to={`/admin/user/${record.taiKhoan}`} /></Button>
                    <Button icon={<DeleteOutlined />}></Button>
                </Space>
            ),
        }
    ]
    return (
        <Content className="site-layout" style={{ padding: '0 50px 40px 50px', marginTop: 64 }}>
            <h1 style={{ textAlign: 'center' }}>Quản lý User</h1>
            <div style={{ display: 'flex', justifyContent: 'end', marginBottom: "15px" }}>
                <Button type="primary" shape="round" icon={<UserAddOutlined />} size={"large"} >Thêm</Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'end', marginBottom: "20px" }}>
                <Search placeholder="Type keyword ..." onSearch={(e) => handleSearch(e)}
                    style={{ width: 400 }} size='large' />
            </div>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                <Table columns={columns} dataSource={userList} rowKey={"taiKhoan"}/>
            </div>
        </Content>
    )
}

export default withData(UserList, "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06")
