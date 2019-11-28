import React, { Component } from 'react';
import axios from 'axios';
import "./../styles/Chat.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MoreInfo from './MoreInfo';
import ddImg1 from '../assets/ddd1.png';
import ddImg2 from '../assets/ddd2.png';
import ddImg3 from '../assets/ddd3.png';
import ddImg4 from '../assets/ddd4.png';
import bandi from '../assets/bandi_imo.png';

class Chat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            chatText: '',
            chatState: false,
            isUserAlreadyReceived: false,
            open: false,
            userNameF: '',
        }

        this.textChanged = this.textChanged.bind(this)
        this.onClicked = this.onClicked.bind(this)
        this.setOpen = this.setOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)

    }

    //Enter 기능 관련 함수
    handleKeyPress(e) {
        if (e.charCode === 13) {
            this.onClicked()
        }
    }
    // auto scroll to bottom    
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        this.el.scrollIntoView({ behavior: 'smooth' });
    }
    //예시질문 관련 함수
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

    //Send 관련함수
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
                console.log(response)
                let result2 = response.data.split(".")
                console.log(result2)
                //for 문으로 result2 결과 하나씩 출력하고 마지막 요소빼고 출력할 때 "합니다." 붙이기 
                if (result2.length > 2) {
                    for (let i = 0; i < result2.length; i++) {
                        this.setState(({ messages }) => (
                            {
                                messages: messages.concat(
                                    {
                                        from: 'bot',
                                        text: result2[i],
                                    }
                                )
                            }
                        ))
                    }
                } else {
                    this.setState(({ messages }) => (
                        {
                            messages: messages.concat(
                                {
                                    from: 'bot',
                                    text: response.data,
                                }
                            )
                        }
                    ))
                }
            })
            .catch((error) => {
                console.error(error)
            })
        axios.post("http://localhost:5000/test", { chatText: this.state.chatText })
            .then((response) => {
                console.log(response.data)

                let result = response.data.split(",")

                this.setState(({ messages }) => (
                    {
                        messages: messages.concat(
                            {
                                from: 'ai',
                                text: [result[1].slice(2, -2), result[3].slice(2, -2), result[5].slice(2, -2)]
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
        // console.log(this.props)
        //let userName = this.props.dvalue.match.params.lifeandfamily;
        let userNameF = this.props.value;

        return (
            <React.Fragment >
                <div className='wrapper'>
                    <div className='chatwindow' >
                        <span>
                            <div className='img1st'>
                                <img src={bandi} alt="bandi" />
                            </div>
                            <div className='bot'>
                                {`${userNameF}님 안녕하세요.`}
                            </div>
                        </span>
                        {
                            this.state.messages.map((message, index) => {
                                return (
                                    <React.Fragment>
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
                                        <div className='dialog2'>
                                            <span >
                                                {
                                                    (message.from === 'me') &&
                                                    <div className={message.from} key={index}>
                                                        {message.text}
                                                    </div>
                                                }
                                                <div className='img2nd'>
                                                    {
                                                        (message.from === 'me') &&
                                                        <img src={ddImg3} alt="Zet" id="nickimg" />
                                                    }
                                                </div>
                                            </span>

                                            {
                                                (message.from === 'ai') &&
                                                <MoreInfo  {...this.state} />
                                            }
                                        </div>

                                    </React.Fragment>

                                )
                            })
                        }
                        <div ref={el => { this.el = el; }} />
                    </div>

                    <div className='input'>
                        <div className='text'>
                            <TextField label="질문을 적어주세요." value={this.state.chatText}
                                onChange={this.textChanged}
                                onKeyPress={this.handleKeyPress} />
                        </div>

                        <div className='btn'>
                            <ButtonGroup
                                variant="contained"
                                color="primary"
                                aria-label="full-width contained primary button group"
                            >
                                <Button onClick={this.onClicked}>
                                    send</Button>

                                <Button onClick={this.setOpen}>
                                    질문예시</Button>
                                <Snackbar id="snackbar"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    open={this.state.open}
                                    // autoHideDuration={6000}
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
            </React.Fragment >
        )
    }
}

export default Chat;

