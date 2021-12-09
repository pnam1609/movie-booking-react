import React, { useState } from 'react'
import { Layout } from 'antd';
import withData from '../../../../../hoc/withData'
import { Table } from 'antd';

const { Content } = Layout;

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];

function UserList() {//{ data }

    const [state, setState] = useState({
        filteredInfo: {},
        sortedInfo: {},
    })

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    const clearFilters = () => {
        setState({ ...state, filteredInfo: null });
    };

    const clearAll = () => {
        setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };

    const setAgeSort = () => {
        setState({
            ...state,
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    };
    console.log(data);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            filters: [
                { text: 'Joe', value: 'Joe' },
                { text: 'Jim', value: 'Jim' },
            ],
            filteredValue: state.filteredInfo.name || null,
            onFilter: (value, record) => record.name.includes(value),
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: state.sortedInfo.columnKey === 'name' && state.sortedInfo.order,
            ellipsis: true,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            sortOrder: state.sortedInfo.columnKey === 'age' && state.sortedInfo.order,
            ellipsis: true,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            filters: [
                { text: 'London', value: 'London' },
                { text: 'New York', value: 'New York' },
            ],
            filteredValue: state.filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: state.sortedInfo.columnKey === 'address' && state.sortedInfo.order,
            ellipsis: true,
        },
    ];
    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                <Table columns={columns} dataSource={data} onChange={handleChange} />
            </div>
        </Content>
    )
}

export default withData(UserList, "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06")
