import React, { Component } from "react";
import './../styles/Nickname.css';
import NickButton from './NickButton';
import axios from "axios";

class Nickname extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',

        };
    }

    btnClickedNickname = (e) => {

        axios.post('/chat', {
            value: this.state.value,
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {

        return (
            <React.Fragment>
                <div className='nicknameSelect'>반디봇과 대화할 닉네임을 선택해 주세요</div>
                <div className='wrapper'>
                    <NickButton
                        {...this.props}
                        onclick={
                            this.btnClickedNickname.bind(this)
                        }
                    />
                </div>
            </React.Fragment>
        )

    }
}

export default Nickname;