import React, { Component } from "react";
import axios from "axios";
//import "./../style/client.css"

class Messages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            defaultName: "user",
        }

        axios.get("/chat", { chatText: this.state.chatText })
            .then((response) => {
                // 여기서 채팅 컴포넌트를 하나 만들고, 그때 서버에서 온(실제로는 Dialogflow에서 온) 메시지를 넣어준다

            })
    }
}
export default Messages;