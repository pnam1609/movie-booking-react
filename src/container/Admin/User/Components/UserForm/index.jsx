import { LeftOutlined } from '@ant-design/icons/lib/icons';
import { Button, Input, notification, Row } from 'antd';
import Form from 'antd/lib/form/Form';
import { Content } from 'antd/lib/layout/layout';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { getAcessToken } from '../../../../../utils/getAccessToken';
import { isRequired, validateOneElement, isEmail, isPhoneNumber, minLength, isUsername, isPassword, isConfirmPaswword } from '../../../../../utils/validator';
import { addUserAsync, editUserAsync } from '../../userSplice';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


function UserForm() {

    const dispatch = useDispatch()
    const location = useLocation()
    const [isAdd, setIsAdd] = useState(false)
    const [dataForm, setDataForm] = useState(() => {
        if (location.state) {
            return { ...location.state, maNhom: 'GP02', soDT: location.state.soDt }// thêm 1 truong soDT vi data là soDt
        }

        return {
            taiKhoan: "",
            hoTen: "",
            email: "",
            maNhom: "GP02",
            maLoaiNguoiDung: "KhachHang",
            soDT: "",
            matKhau: "",
            confirmPass: ""
        }
    })

    const [msgError, setMsgError] = useState({
        taiKhoan: "",
        hoTen: "",
        email: "",
        soDT: "",
        matKhau: "",
        confirmPass: ""
    })
    const params = useParams()
    const formRef = useRef({})
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    useEffect(() => {
        (async () => {
            if (params["id"]) {
                // const res = await callApi("QuanLyNguoiDung/ThongTinTaiKhoan", "Post", { taiKhoan: params.id })
                // setDataForm(res.data)
                setIsAdd(false)
            } else {
                setIsAdd(true)
            }
        })()

        // eslint-disable-next-line
    }, [])

    //---------------- Validate --------------------
    const ruleList = {
        taiKhoan: isAdd ? [isRequired(), minLength(6), isUsername()] : [],
        hoTen: [isRequired()],
        email: [isRequired(), isEmail()],
        soDT: [isRequired(), isPhoneNumber()],
        matKhau: isAdd ? [isRequired(), minLength(6), isPassword()] : [],
        confirmPass: isAdd ? [isRequired(), minLength(6), isConfirmPaswword(dataForm.matKhau)] : [],
    }

    const handleBlur = e => {
        const res = validateOneElement(formRef.current[e.target.name].input, ruleList[e.target.name]) ?? ""
        setMsgError({ ...msgError, [e.target.name]: res })
    }

    const handleChange = e => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    }

    const handleInput = e => {
        e.target.style.borderColor = '#d9d9d9'
        setMsgError({ ...msgError, [e.target.name]: "" })
    }

    //-------------------- Modal ---------------------------

    const validateAll = () => {
        let flag = true
        const msg = {}
        for (const [key, value] of Object.entries(ruleList)) {
            if (!formRef.current[key]) continue
            const res = validateOneElement(formRef.current[key].input, value)
            if (res) flag = false
            msg[key] = res ?? ""
        }
        setMsgError(msg)
        if (flag) setVisible(true)
    }


    const handleOk = async () => {
        setConfirmLoading(true);
        const data = {
            body: dataForm,
            token: getAcessToken()
        }
        
        const res = isAdd ? await dispatch(addUserAsync(data)) : await dispatch(editUserAsync(data))
        if (res.payload?.status === 200) {
            notification.open({
                message: "Thông báo",
                description: isAdd ? "Tạo tài khoản thành công" : "Sửa thông tin thành công"
            });
            navigate(-1)
        } else {
            notification.open({
                message: "Thông báo",
                description: res.payload,
            });
        }
        setVisible(false);
        setConfirmLoading(false);
    };

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <Content className="site-layout" style={{ padding: '0 50px 40px 50px', marginTop: 64 }}>
            <h1 style={{ textAlign: 'center' }}>Quản lý User</h1>
            <Form {...layout} name="nest-messages" style={{ backgroundColor: 'white', padding: "20px" }} >
                <Row style={{ margin: '20px' }}>
                    <label htmlFor="">Username:</label>
                    <Input id='taiKhoan' name='taiKhoan' value={dataForm.taiKhoan} type={'text'}
                        onChange={handleChange}
                        onInput={handleInput}
                        onBlur={handleBlur}
                        disabled={isAdd ? false : true}
                        ref={el => formRef.current.taiKhoan = el} />
                    <small style={{ color: 'red' }}>{msgError.taiKhoan}</small>
                </Row>
                <Row style={{ margin: '20px' }}>
                    <label htmlFor="">Họ và tên:</label>
                    <Input id='hoTen' name='hoTen' value={dataForm.hoTen} type={'text'}
                        onChange={handleChange}
                        onInput={handleInput}
                        onBlur={handleBlur}
                        ref={el => formRef.current.hoTen = el} />
                    <small style={{ color: 'red' }}>{msgError.hoTen}</small>
                </Row>
                <Row style={{ margin: '20px' }}>
                    <label htmlFor="email">Email:</label>
                    <Input id='email' name='email' value={dataForm.email} type={'text'}
                        onChange={handleChange}
                        onInput={handleInput}
                        onBlur={handleBlur}
                        ref={el => formRef.current.email = el} />
                    <small style={{ color: 'red' }}>{msgError.email}</small>
                </Row>
                <Row style={{ margin: '20px' }}>
                    <label htmlFor="soDT">Số điện thoại:</label>
                    <Input id='soDT' name='soDT' value={dataForm.soDT} type={'number'}
                        onChange={handleChange}
                        onInput={handleInput}
                        onBlur={handleBlur}
                        ref={el => formRef.current.soDT = el} />
                    <small style={{ color: 'red' }}>{msgError.soDT}</small>
                </Row>
                {/* chỉ thêm tài khoản mới có trường mật khẩu */}
                {isAdd ? <>
                    <Row style={{ margin: '20px' }}>
                        <label htmlFor="matKhau">Mật khẩu:</label>
                        <Input id='matKhau' name='matKhau' value={dataForm.matKhau} type={'password'}
                            onChange={handleChange}
                            onInput={handleInput}
                            onBlur={handleBlur}
                            ref={el => formRef.current.matKhau = el} />
                        <small style={{ color: 'red' }}>{msgError.matKhau}</small>
                    </Row>
                    <Row style={{ margin: '20px' }}>
                        <label htmlFor="confirmPass">Xác nhận mật khẩu:</label>
                        <Input id='confirmPass' name='confirmPass' value={dataForm.confirmPass} type={'password'}
                            onChange={handleChange}
                            onInput={handleInput}
                            onBlur={handleBlur}
                            ref={el => formRef.current.confirmPass = el} />
                        <small style={{ color: 'red' }}>{msgError.confirmPass}</small>
                    </Row>
                </> : ""}
                <Row style={{ display: 'flex', justifyContent: 'space-between', margin: '0 20px' }}>
                    <Button type="text" size={"large"} icon={<LeftOutlined />} onClick={handleBack}>Back</Button>
                    <Button style={{ width: '150px' }} type="primary" shape="round" size={"large"}
                        onClick={() => validateAll()}>
                        Submit
                    </Button>
                </Row>
            </Form>
            <Modal
                title='Confirm'
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={() => setVisible(false)}
            >
                <p>Bạn có chắc chắn {isAdd ? 'thêm' : 'sửa'} user ?</p>
            </Modal>
        </Content>
    );
}

export default UserForm
