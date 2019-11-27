import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import "./../styles/Chat.css";

export default class MoreInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: false,
            thisIs: [],
        }
        this._clickButton = this._clickButton.bind(this);

    }
    _clickButton() {

        this.setState({
            token: true,
        })
        for (let i = 0; i < this.props.messages.length; i++) {
            if (this.props.messages[i].from === 'ai') return this.setState({ thisIs: this.props.messages[i].text })
        }
    }
    _moreClicked() {
        this.setState({

        })
    }

    render() {
        let { token } = this.state;

        console.log(this.state.thisIs)

        const a = this.state.thisIs[0];
        const b = this.state.thisIs[1];
        const c = this.state.thisIs[2];


        if (!token) {
            return (
                <div className='ai'>
                    관련된 다른 정책이 궁금하신가요?
                <Button title="moreinfo" variant="outlined"
                        color="primary" size="large"
                        onClick={this._clickButton}>궁금해요</Button>
                </div>
            );
        } else {
            return (

                <React.Fragment>
                    <div className='btn'>
                        <Button title="moreinfolist" variant="outlined"
                            color="primary" size="large"
                            onClick={}>
                            {a}
                        </Button>
                        <Button title="moreinfolist" variant="outlined"
                            color="primary" size="large">
                            {b}
                        </Button>
                        <Button title="moreinfolist" variant="outlined"
                            color="primary" size="large">
                            {c}
                        </Button>
                    </div>
                </React.Fragment>
            );
        }
    }
}
