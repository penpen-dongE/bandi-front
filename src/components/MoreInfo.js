import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import "./../styles/Chat.css";
// import MoreInfo2 from './MoreInfo2';

export default class MoreInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: false,
            data: [],
            thisIs: [],
            moreInfoList: [],
        }
        this._clickButton = this._clickButton.bind(this);

    }
    _clickButton() {

        this.setState({
            token: true,
        })
        //console.log(result)
    }

    render() {
        console.log(this.props);
        let { token } = this.state;

        let data = this.props.messages;

        const moreInfo = () => {

            for (let i = 0; i < data.length; i++) {
                console.log(data[i].from)
                if (data[i].from === 'ai') {
                    let MoreInfoList = data[i].text.split(",")
                    console.log(MoreInfoList)
                }
            }
        }
        //에러에러에러에러
        //  const datalist = moreInfo.MoreInfoList.map((list) => (
        //      <div>
        //          <button id='button'>
        //              {list}
        //          </button>
        //      </div>
        //  ));

        if (!token) {
            return (
                <div className='ai'>
                    관련된 다른 정책이 궁금하신가요?
                <Button title="moreinfo" variant="outlined"
                        color="primary" size="large"
                        onClick={this._clickButton}>궁금해요</Button>
                </div>
            );
        } else {
            return (

                <React.Fragment>
                    <div className='btn'>
                        <button title="moreinfolist" variant="outlined"
                            color="primary" size="large"
                        >
                            정책 3개 보이기
                            {/*datalist*/}
                        </button>

                    </div>
                </React.Fragment>
            );
        }
    }
}
