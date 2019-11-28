import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import "./../styles/Chat.css";

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
        })
        for (let i = 0; i < this.props.messages.length; i++) {
            if (this.props.messages[i].from === 'ai') return this.setState({ thisIs: this.props.messages[i].text })
        }
    }

    _moreClicked(m) {
        this.setState ({
            chatText: m
        })
        console.log(this.state.chatText)
        axios.post("http://localhost:9000/chat", { chatText: this.state.chatText })
            .then((response) => {
                console.log(response.data)

                let result = response.data.split(".")
                this.setState(({ messages }) => (
                    {
                        messages: messages.concat(
                            {
                                from: 'ai',
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

        //console.log(this.state.thisIs)

        let a = this.state.thisIs[0];
        let b = this.state.thisIs[1];
        let c = this.state.thisIs[2];

        const moreButtons = [a, b, c];

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
                </React.Fragment>
            );
        }
    }
}
