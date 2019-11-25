import React, { Component } from 'react';
import axios from 'axios';
import "./../styles/Chat.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


class Chat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            chatText: '',
            isUserAlreadyReceived: false,
            user: '',
            open: false
        }

        this.textChanged = this.textChanged.bind(this)
        this.onClicked = this.onClicked.bind(this)
        this.setOpen = this.setOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    setOpen() {
        this.setState({
            open: true

        })
        console.log(this.open)
    };

    handleClose() {
        this.setState({
            open: false
        });
    };


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
        if (!this.state.isUserAlreadyReceived) {
            axios.post("http://localhost:5000/test", { chatText: this.state.chatText })
                .then((response) => {
                    console.log(response)

                    let result = response.data.split(',')
                    this.setState(({ messages, chatText }) => (
                        {
                            messages: messages.concat(
                                {
                                    from: 'ai',
                                    text: result[1].slice(2, -2)
                                }
                            )
                        }
                    ))
                })
                .catch((error) => {
                    console.error(error)
                })
            // this.setState({
            //     isUserAlreadyReceived: true
            // })
        }


    }

    render() {
        console.log(this.props.test);
        console.log(this.props);
        return (
            <React.Fragment>
                <div className='wrapper'>
                    <div className='chatwindow'>
                        <div className='bot'>
                            {`${this.props.v} 님 안녕하세요. 반디봇입니다.`}
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
                            <TextField label="질문을 적어주세요." value={this.state.chatText} onChange={this.textChanged}
                                onKeyPress={e => {
                                    console.log('check', e.key);
                                    if (e.key === 'Enter') {
                                        this.textChanged(e);
                                    }
                                }} />
                        </div>

                        <div className='btn'>
                            <ButtonGroup
                                variant="contained"
                                color="primary"
                                aria-label="full-width contained primary button group"
                            >
                                <Button onClick={this.onClicked} >
                                    send</Button>

                                <Button onClick={this.setOpen}>
                                    질문예시</Button>
                                <Snackbar
                                    class='snackbar'
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    open={this.state.open}
                                    autoHideDuration={600000}
                                    onClose={this.handleClose}
                                    ContentProps={{
                                        'aria-describedby': 'message-id',
                                    }}
                                    message={<ui>
                                        <li>저소득 청년들을 위한 정책은 없나요?</li>
                                        <li>유아 교육비관련하여 지원받을 수 있는 정책이 있나요?</li>
                                        <li>여성청소년을 위한 복지정책도 있나요?</li>
                                    </ui>}
                                    action={[
                                        <IconButton
                                            key="close"
                                            aria-label="close"
                                            color="inherit"
                                            onClick={this.handleClose}
                                        >
                                            <CloseIcon />
                                        </IconButton>,
                                    ]}
                                />

                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Chat;
