import React, { Component } from "react";
// import './../styles/Nickname.css';
import UserInfoButton from './UserInfoButton';
import axios from "axios";

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({ value: e.target.value });
    };


    btnClickedGender = (e) => {
        axios.post('http://localhost:9000', {
            value: this.state.value,
            genderId: this.state.genderId,
        }).then((response) => {

            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    btnClickedDisorder = (e) => {
        axios.post('http://localhost:9000', {
            disorderId: this.state.disorderId
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <React.Fragment>
                <h2 >당신에 대해 알고 싶어요 ;-D</h2>

                <p>나이를 입력해 주세요: <br />
                    <input
                        type='number'
                        name='age'
                        value={this.state.value}
                        onChange={this.onChange}
                    />
                </p>
                <UserInfoButton onClick={
                    {/* (() => {
                        if (className === gender) return (this.btnClickedGender);
                        if (className === disorderId) return (this.btnClickedDisorder);

                    })() */}
                }
                />




            </React.Fragment>
        )
    }
}
export default UserInfo;