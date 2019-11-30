import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import "./../styles/Chat.css";
import bandi from '../assets/bandi_imo.png';
import ddImg3 from '../assets/ddd3.png';

export default class MoreInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: false,
            thisIs: [],
            chatText: '',
            messages: []
        }
        this._clickButton = this._clickButton.bind(this);
        this._moreClicked = this._moreClicked.bind(this);

    }

    _clickButton() {
        this.setState({
            token: true,
            thisIs: [],

        })
        for (let i = 0; i < this.props.messages.length; i++) {
            if (this.props.messages[i].from === 'ai') return this.setState({ thisIs: this.props.messages[i].text })
        }

    }


    _moreClicked(m) {
        this.setState({
            chatText: m,
        })
        this.setState(({ messages, chatText }) => ({
            chatText: '',
            messages: messages.concat({
                from: 'me',
                text: chatText,
            }),
        }))
        axios.post("http://13.125.247.24:9000/chat", { chatText: m })
            .then((response) => {
                console.log(response.data)

                let result = response.data.split(".")
                this.setState(({ messages }) => (
                    {
                        messages: messages.concat(
                            {
                                from: 'bot',
                                text: result
                            }
                        )
                    }
                ))
            })
            .catch((error) => {
                console.error(error)
            })
    }
    render() {
        let { token } = this.state;

        let a = this.state.thisIs[0];
        let b = this.state.thisIs[1];
        let c = this.state.thisIs[2];

        const moreButtons = [a, b, c];

        if (!token) {
            return (
                <div className='ai' >
                    관련된 다른 정책이 궁금하신가요?
                <Button title="moreinfo" variant="outlined"
                        color="primary" size="large"
                        onClick={this._clickButton}>궁금해요</Button>
                </div>
            );
        } else {
            return (
                <React.Fragment>
                    <div className='wrapper'>
                        <div className='btn'>
                            {
                                moreButtons.map(m => (
                                    <Button title="moreinfolist" variant="outlined"
                                        color="primary" size="large" value={m}
                                        onClick={() => this._moreClicked(m)}>
                                        {m}
                                    </Button>
                                ))
                            }
                        </div>
                        {
                            this.state.messages.map((message, index) => {
                                return (
                                    <React.Fragment>
                                        <div className="chatwindow2">
                                            <span className='dialog1'>
                                                <div className='img1st'>
                                                    {
                                                        (message.from === 'bot') &&
                                                        <img src={bandi} alt="bandi" id="botimg" />
                                                    }
                                                </div>
                                                {
                                                    (message.from === 'bot') &&
                                                    <div className={message.from} key={index}>
                                                        {message.text}
                                                    </div>
                                                }
                                            </span>

                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </React.Fragment>
            );
        }
    }
}
