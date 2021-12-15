import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
    FireFilled,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

function SideBar() {
    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    return (
        <Sider className="site-layout-background" style={{ height: "100vh", maxWidth: "160px" }}
            collapsible collapsed={collapsed} onCollapse={onCollapse} theme='light'  >
            <div style={{ fontSize: "42px", padding: "16px", textAlign: "center", color: "red", backgroundColor: "white" }}>
                <FireFilled />
            </div>
            <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%' }} >
                <Menu.Item key="1" icon={<UserOutlined />}><Link to="/admin/user">User</Link></Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}><Link to="/admin/film">Film</Link></Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}><Link to="/admin/show-film">Show the film</Link></Menu.Item>
            </Menu>
        </Sider>
    )
}

export default SideBar
