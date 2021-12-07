import React from 'react'
import FadingDots from "react-cssfx-loading/lib/FadingDots";
import callApi from '../Utils/apiCaller'

function WithData(WarappedComponent, url) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data: []
            }
        }

        componentDidMount() {
            (async () => {
                const res = await callApi(url)
                const data = res.data
                setTimeout(() => {
                    this.setState({ data })
                }, 3000);
            })()
        }
        render() {
            if (this.state.data.length === 0) {
                return <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: '100%' }}>
                    <FadingDots color="#FF0000" width="100px" height="100px" duration="0.5s" />
                </div>
            }
            return <WarappedComponent data={this.state.data} {...this.props} />
        }
    }
}

export default WithData