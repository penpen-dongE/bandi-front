import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import "./../styles/Chat.css";

export default class MoreInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            chatText: '',
        }
        this._clickB = this._clickB.bind(this);
    }
    _clickB() {

    }
    render() {
        console.log(this.props)
        return (

            <div className='ai'>
                관련된 다른 정책이 궁금하신가요?
                <Button title="moreinfo" variant="outlined"
                    color="primary" size="large"
                    onClick={this._clickB}>궁금해요</Button>
            </div>

        )
    }
}
