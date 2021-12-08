import { Modal } from 'antd';
import React from 'react'
import FadingDots from "react-cssfx-loading/lib/FadingDots";
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
                setTimeout(() => {
                    this.setState({ data })
                }, 3000);
            })()
        }

        //<Modal title="Basic Modal" visible={true} >
        //         <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: '100%' }}>
        //         <FadingDots color="#FF0000" width="100px" height="100px" duration="0.5s" />
        //     </div>
        // </Modal>
        render() {
            if (this.state.data.length === 0) {
                return

            }
            return <WarappedComponent data={this.state.data} {...this.props} />
        }
    }
}

export default WithData