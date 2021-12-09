import React from 'react'
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
    FireOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

function SideBar() {
    return (
        <Sider className="site-layout-background" width={"100%"} style={{ height: "100vh" }}>
            <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%' }} >
                <div style={{ fontSize: "42px", padding: "16px", textAlign: "center", color: "red" }}> <FireOutlined /></div>
                <Menu.Item key="1" icon={<UserOutlined />}>CLient</Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>Film</Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>Show Time Film</Menu.Item>
            </Menu>
        </Sider>
    )
}

export default SideBar
