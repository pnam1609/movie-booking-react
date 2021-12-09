import React from 'react'
import SideBar from '../../../../../components/Admin/SideBar'
import TopBar from '../../../../../components/Admin/TopBar'
import UserList from '../../Components/UserList';
import './style.css'

// import { Layout, Breadcrumb } from 'antd';

import { Layout, Col, Row } from 'antd';

const { Content, } = Layout;


function UserPage() {
    return (
        <Layout style={{ height: "100vh" }}>
            <Col span={4} >
                <SideBar />
            </Col>
            <Col span={20}>
                <Row justify="end">
                    <TopBar />
                </Row>
                <Row>
                    <Content style={{ paddingRight: "30px", backgroundColor: "white", float: "right" }}>
                        <Layout className="site-layout-background">
                            {/* <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content> */}
                            <UserList />
                        </Layout>
                    </Content>
                </Row>
            </Col>
        </Layout>
    )
}

export default UserPage
