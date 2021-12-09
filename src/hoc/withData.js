import { Spin } from 'antd';
import React from 'react'
import style from './withData.module.css';
import callApi from '../apis/callApi'

function WithData(WarappedComponent, url) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data: [],
                isModalVisible: true
            }
        }
        showModal = () => {
            this.setState({ isModalVisible: true })
        };

        componentDidMount() {
            (async () => {
                const res = await callApi(url)
                const data = res.data
                this.setState({ data })
            })()
        }


        render() {
            if (this.state.data.length === 0) {
                return <div className={style.example} >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Spin size={"large"} />
                    </div>
                </div>
            }
            return <WarappedComponent data={this.state.data} {...this.props} />
        }
    }
}

export default WithData