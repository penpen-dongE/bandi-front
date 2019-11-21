import React, { Component } from 'react';
import axios from 'axios';
import "./../styles/Chat.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Chat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            chatText: '',
            chatState: false,
            isUserAlreadyReceived: false
        }

        this.textChanged = this.textChanged.bind(this)
        this.onClicked = this.onClicked.bind(this)
    }

    textChanged(e) {
        this.setState({
            chatText: e.target.value
        })
    };

    onClicked() {
        this.setState(({ messages, chatText }) => ({
            chatText: '',
            messages: messages.concat({
                from: 'me',
                text: chatText,
            }),
        }))
        axios.post("http://localhost:5000/test", { chatText: this.state.chatText })
            .then((response) => {
                console.log(response)
                this.setState(({ messages, chatText }) => (
                    {
                        messages: messages.concat(
                            {
                                from: 'ai',
                                text: response.data,
                            }
                        )
                    }
                ))
            })
            .catch((error) => {
                console.error(error)
            })
        axios.post("http://localhost:9000/chat", { chatText: this.state.chatText })
            .then((response) => {
                this.setState(({ messages, chatText }) => (
                    {
                        messages: messages.concat(
                            {
                                from: 'bot',
                                text: response.data,
                            }
                        )
                    }
                ))
                //console.log(this.state.messages[0].from)
            })
            .catch((error) => {
                console.error(error)
            })

        //if (!this.state.isUserAlreadyReceived) {
        //    axios
        //    true로
        //}
    }

    render() {
        return (
            <React.Fragment>
                <div className='wrapper'>
                    <div className='chatwindow'>
                        <div className='bot'>
                            {`${this.props.v} 님 안녕하세요.`}
                        </div>
                        {
                            this.state.messages.map((message, index) => {
                                return (
                                    <div className={message.from} key={index}>
                                        {message.text}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='input'>
                        <div className='text'>
                            <TextField label="질문을 적어주세요." value={this.state.chatText} onChange={this.textChanged} />
                        </div>
                        <div className='btn'>
                            <Button variant="contained" color="primary" onClick={this.onClicked} >
                                send</Button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Chat;
