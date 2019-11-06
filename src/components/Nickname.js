import React, {Component} from "react";
import './../styles/Nickname.css';
import NickButton from './NickButton';

class Nickname extends Component {
    render() {
        return(
            <React.Fragment>
                <div className='nicknameSelect'>반디봇과 대화할 닉네임을 선택해 주세요</div>
                <div className= 'wrapper'>
                    <NickButton/>
                 </div>
            </React.Fragment>
        )
    }
}

export default Nickname;