import React, { Component } from "react";


class UserInfoButton extends Component {
    render() {
        return (
            <React.Fragment>
                <p>성별을 선택해 주세요</p>
                <button className="gender" title = "남" onClick={function() { alert('click'); }} />
                <button className="gender" title = "여" onClick={function() { alert('click'); }} />

                <p>장애여부를 선택해 주세요</p>
                <button className="gender" title = "장애인" onClick={function() { alert('click'); }} />
                <button className="gender" title = "비장애인" onClick={function() { alert('click'); }} /> 

            </React.Fragment>

        )
    };
}

export default UserInfoButton; 