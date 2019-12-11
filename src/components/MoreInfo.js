import React, { Component } from 'react';
import axios from 'axios';
import "./../styles/MoreInfo.css";
import bandi from '../assets/bandi_imo.png';


export default class MoreInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: false,
            thisIs: [],
            chatText: '',
            messages: [],
            p1: '',
            p2: '',
            p3: ''

        }
        this._clickButton = this._clickButton.bind(this);
        this._moreClicked = this._moreClicked.bind(this);
        this.similarity = this.similarity.bind(this)
    }

    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        this.el && this.el.scrollIntoView({ behavior: 'smooth' });
    }

    similarity() {
        for (let i = this.props.messages.length - 1; i >= 0; i--) {
            if (this.props.messages[i].from === 'ai') {
                this.p1 = Math.floor(this.props.messages[i].text[3] * 100);
                this.p2 = Math.floor(this.props.messages[i].text[4] * 100);
                this.p3 = Math.floor(this.props.messages[i].text[5] * 100);
            }
        }

    }

    _clickButton() {
        this.setState({
            token: true,
            thisIs: [],

        })
        for (let i = this.props.messages.length - 1; i >= 0; i--) {
            if (this.props.messages[i].from === 'ai') {
                return this.setState({ thisIs: this.props.messages[i].text })
            }
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
        axios.post("http://bandibotsv.shop:9000/chat", { chatText: m })
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
        this.similarity()
        let a = this.state.thisIs[0];
        let b = this.state.thisIs[1];
        let c = this.state.thisIs[2];

        //const moreButtons = [a, b, c];

        if (!token) {

            return (

                <div className='ai'>
                    <div className='aiQuestion'>
                        <div id='AI'>AI</div>
                        <div id='aiText'>{`인공지능이 문의하신 내용과 최대 70% 일치하는 정책을 찾았어요! 보여드릴까요?`}</div>
                    </div>
                    <button className='aiBtn' onClick={this._clickButton}>보여주세요</button>
                </div>
            );
        } else {
            return (
                <React.Fragment>
                    <div className='wrapper'>

                        <div className='ai' id='ai2'>
                            <div className='aiQuestion'>
                                <div id='AI'>AI</div>
                                <div id='aiText'>{`인공지능이 문의하신 내용과 최대 70% 일치하는 정책을 찾았어요! 보여드릴까요?`}</div>
                            </div>
                        </div>
                        <div className='recombtn'>
                            <button className='recommend' value={a} onClick={() => this._moreClicked(a)}>{a}</button>
                            <div className='percent'>{`70% 일치`}</div>
                        </div>
                        <div className='recombtn'>
                            <button className='recommend' value={b} onClick={() => this._moreClicked(b)}>{b}</button>
                            <div className='percent'>{`${this.p2}% 일치`}</div>
                        </div>
                        <div className='recombtn' id='recommend3'>
                            <button className='recommend' value={c} onClick={() => this._moreClicked(c)}>{c}</button>
                            <div className='percent'>{`${this.p3}% 일치`}</div>
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
                                                    <div className={message.from} key={index} id='nextbot'>
                                                        {message.text}
                                                    </div>
                                                }
                                            </span>

                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }
                        <div ref={el => { this.el = el; }} />
                    </div>
                </React.Fragment>
            );
        }
    }
}
