import React, { Component } from "react";
import './../styles/Nickname.css';
import NickButton from './NickButton';
import axios from "axios";

class Nickname extends Component {

    btnClickedNickname = (e) => {
        axios.post('/user', {
            value: this.state.value
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
                    <NickButton onclick={
                        this.btnClickedNickname
                    }
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default Nickname;