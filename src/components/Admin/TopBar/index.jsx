import React from 'react'
import { Button, Dropdown, Layout, Menu, message, Row } from 'antd';
import { DownOutlined, LogoutOutlined, NotificationOutlined, SwapOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;



function TopBar() {

    const menu = (
        <Menu onClick={handleMenuClick}>
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

    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }


    return (
        <Header className="header" style={{ width: "100%", backgroundColor: "white" }} >
            <Row style={{ padding: "12px", justifyContent: "flex-end", paddingRight: "20px", }}>
                <Button style={{ border: "none" }}>
                    <NotificationOutlined />
                </Button>
                <Dropdown overlay={menu}>
                    <Button style={{ border: "none" }}>
                        Hoàng Phương Nam <DownOutlined />
                    </Button>
                </Dropdown>
            </Row>
        </Header>
    )
}

export default TopBar
