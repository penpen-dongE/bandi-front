import React, { Component } from 'react'
import axios from 'axios';
//import ReactDOM from 'react-dom';​
//import dialogflow from 'dialogflow';

class Chat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            chatText: []
        }

        this.textChanged = this.textChanged.bind(this)
        this.onClicked = this.onClicked.bind(this)
    }

    textChanged(e) {
        this.setState({
            [e.target.chatText]: e.target.value
        })
    };

    onClicked() {
        axios.get("http://localhost:8000/chat", { chatText: this.state.chatText })
            .then((response) => {
                this.setState(({ chatText }) => (
                    { chatText: chatText.concat(response.data) }))
                console.log(response.data)
                /* 
                    setTimeout(() => {
                    setMessage(mock2.message)
                    }, 3000) 
                */
            })
            .catch((error) => {
                console.error(error)
            })
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input value={this.state.chatText} onChange={this.textChanged} />
                    <button type="button" onClick={this.onClicked}>
                        send
                    </button>
                </div>

                <div className='wrapper'>
                    {this.state.chatText.map((chatText, index) => {
                        return (
                            <div key={index}>
                                {chatText.data}
                            </div>
                        )
                    })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Chat;


/*

프론트에서는 이런식으로 하겠죠...?
axios.get("/chat", { chatText: this.state.blabla })
.then((response) => {
  // 여기서 채팅 컴포넌트를 하나 만들고, 그때 서버에서 온(실제로는 Dialogflow에서 온) 메시지를 넣어준다

})

*/