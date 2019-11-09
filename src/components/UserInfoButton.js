import React, { Component } from "react";



class UserInfoButton extends Component {

    render() {
        return (
            <React.Fragment>
                <p>성별을 선택해 주세요</p>
                <button className="gender"
                    title="남" genderId="1"
                    onClick={function (e) {
                        e.preventDefault();
                        this.props.btnclickedgender();
                    }.bind(this)}
                />
                <button className="gender"
                    title="여" genderId="2"
                    onClick={function (e) {
                        e.preventDefault();
                        this.props.btnclickedgender();
                    }.bind(this)}
                />

                <p>장애여부를 선택해 주세요</p>
                <button className="disorder"
                    title="장애인" disorderId="3"
                    onClick={function (e) {
                        e.preventDefault();
                        this.props.btnclickedDisorder();
                    }.bind(this)}
                />
                <button className="disorder"
                    title="비장애인" disorderId="4"
                    onClick={function (e) {
                        e.preventDefault();
                        this.props.btnclickedDisorder();
                    }.bind(this)}
                />

            </React.Fragment>

        )
    };
}

export default UserInfoButton; 