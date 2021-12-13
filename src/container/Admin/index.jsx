import React from 'react'
import { Col, Row, Layout } from 'antd'
import SideBar from '../../components/Admin/SideBar'
import TopBar from '../../components/Admin/TopBar'
import { Route, Routes } from 'react-router-dom'
import User from './User'
import NotFound from '../../components/Common/NotFound'

function Admin() {
    return (
        <Layout style={{ height: "100vh" }}>
            <Col>
                <SideBar />
            </Col>
            <Col style={{ width: "100%"}}>
                <Row justify="end">
                    <TopBar />
                </Row>
                <Routes>
                    <Route path={"/user/*"} element={<User />} />
                    <Route path={"/film/*"} element={<User />} />
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </Col>
        </Layout>
    )
}

export default Admin
