import React, { Component } from "react";
import './../styles/Family.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Chat from "./Chat";


// <button><img src="./../../bandibot_asset/img/family1.png"/>한부모가족</button>  이미지가 안나옴 ㅠ
class Family extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatstate: false,
        };
    }

    render() {
        console.log(this.props);

        const familyValues = ['한부모가족', '조손가족', '청소년 한부모가족']

        const familyList = familyValues.map((fam) => (
            <Col span={4}>
                <Link to={`/lifeandfamily/${fam}`}>

                    <button
                        id='button'>
                        {fam}
                    </button>
                </Link>
            </Col>

        ));

        return (
            <Router>

                <React.Fragment>
                    <div className='familySelect'>가족형태를 선택해 주세요</div>
                    <Row className='familyStyle' gutter={20} >
                        {familyList}
                    </Row>
                    <main>
                        <Route path="/lifeandfamily/:family"
                            component={() =>
                                <Chat {...this.props}
                                    onClick={this.props.onClick()} />} />
                    </main>
                </React.Fragment>
            </Router>

        )
    };
}

export default Family;