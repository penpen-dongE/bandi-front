import React, { Component } from 'react';
import axios from 'axios';
import "./../styles/Chat.css"
import Button from '@material-ui/core/Button';
import MoreInfo from './MoreInfo';
import ddImg1 from '../assets/ddd1.1.png';
import ddImg2 from '../assets/ddd2.1.png';
import ddImg3 from '../assets/ddd3.1.png';
import ddImg4 from '../assets/ddd4.4.png';
import bandi from '../assets/bandi_imo.png';
import send from "../assets/send.png";

class Chat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            chatText: '',
            chatState: false,
            isUserAlreadyReceived: false,
            open: false,
            //userNameF: '',
        }

        this.textChanged = this.textChanged.bind(this);
        this.onClicked = this.onClicked.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    refresh() {
        this.setState({
            messages: [],
        })
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

    //Send 관련함수
    textChanged(e) {
        this.setState({
            chatText: e.target.value
        })
    };

    onClicked() {
        const chatText = this.state.chatText
        this.setState(({ messages, chatText }) => ({
            chatText: '',
            messages: messages.concat({
                from: 'me',
                text: chatText,
            }),
        }))

        axios.post("http://bandibotsv.shop:9000/chat", { chatText: chatText })
            .then((response) => {
                console.log(response)
                let result2 = response.data.split(".")
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
        setTimeout(() => {
            axios.post("http://bandibotsv.shop:5000/test", { chatText: chatText })
                .then((response) => {
                    console.log(response)
                    let result = response.data.split(",")

                    if (result[1] === undefined) {
                        return;
                    }
                    this.setState(({ messages }) => (
                        {
                            messages: messages.concat(
                                {
                                    from: 'ai',
                                    text: [result[1].slice(2, -2), result[3].slice(2, -2), result[5].slice(2, -2),
                                    result[0].slice(2), result[2].slice(2), result[4].slice(2)],

                                }
                            )
                        }
                    ))
                })
                .catch((error) => {
                    console.error(error)
                })
        }, 2000)
        console.log(this.state)
    }

    render() {
        //let userNameF = this.props.value;
        return (
            <React.Fragment >
                <div className='wrapper'>
                    <div className='chatwindow' >
                        <span>
                            <div className='img1st'> <img src={bandi} alt="bandi" /> </div>
                            <div className='bot' id='greeting'> 구민님! 안녕하세요? </div>
                        </span>
                        <span>
                            <div className='img1st'> <img src={bandi} alt="bandi" /></div>
                            <div className='bot' id='greeting'> 다음과 같이 물어볼 수 있습니다. </div>
                        </span>
                        <div className='example' id='ex1'> 저소득 청년들을 위한 정책은 없나요? </div>
                        <div className='example'> 유아 교육비 지원 정책이 있나요? </div>
                        <div className='example' id='ex3'> 여성청소년을 위한 복지정책도 있나요? </div>

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
                                                <MoreInfo {...this.state} />

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
                            <input placeholder="질문을 적어주세요" value={this.state.chatText}
                                onChange={this.textChanged} onKeyPress={this.handleKeyPress} />
                        </div>
                        <div className='btn'>
                            <Button onClick={this.onClicked}>
                                <img src={send} alt="send" />
                            </Button>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default Chat;

