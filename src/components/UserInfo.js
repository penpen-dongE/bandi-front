import React, { Component } from "react";
// import './../styles/Nickname.css';
import UserInfoButton from './UserInfoButton';

class UserInfo extends Component {

    render() {
        return (
            <React.Fragment>
                <h2 >당신에 대해 알고 싶어요 ;-D</h2>

                <p>나이를 입력해 주세요:
                <input
                        type='text'
                        name='age'
                    />
                </p>
                <UserInfoButton />
                
            </React.Fragment>
            )
    }
}
export default UserInfo;