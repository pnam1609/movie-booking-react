import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Layout, Menu, Row } from 'antd';
import { DownOutlined, LogoutOutlined, NotificationOutlined, SwapOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

function TopBar() {
    const [dataUser, setDataUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userInfo'))
        if(!data){
            navigate("/sign-in")
        }
        setDataUser(data)
        // eslint-disable-next-line
    }, [])
    const handleClick = e => {
        if (e.key === '3') {
            localStorage.removeItem('userInfo')
            navigate("/sign-in")
        }
    }

    const menu = (
        <Menu onClick={handleClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Tài khoản
            </Menu.Item>
            <Menu.Item key="2" icon={<SwapOutlined />}>
                Đổi mật khẩu
            </Menu.Item>
            <Menu.Item key="3" icon={<LogoutOutlined />}>
                Đăng xuất
            </Menu.Item>
        </Menu>
    );


    return (
        <Header className="header" style={{ width: "100%", backgroundColor: "white" }} >
            <Row style={{ padding: "12px", justifyContent: "flex-end", paddingRight: "20px", }}>
                <Button style={{ border: "none" }}>
                    <NotificationOutlined />
                </Button>
                <Dropdown overlay={menu}>
                    <Button style={{ border: "none" }}>
                        {dataUser.hoTen} <DownOutlined />
                    </Button>
                </Dropdown>
            </Row>
        </Header>
    )
}

export default TopBar
