import React, { Component } from "react";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Chat from "./Chat";
import "./../styles/LifeCycle.css"

class LifeCycle extends Component {
    render() {

        let userName = this.props.dvalue.match.params.lifeandfamily;

        const lifeValues = ['임신출산', '영유아', '청소년', '청년', '장년', '노인']

        const lifeList = lifeValues.map((life) => (

            <Col span={4}>
                <Link to={`/${userName}/${life}`}>
                    <button

                        id='button'>
                        {life}
                    </button>
                </Link>
            </Col>
        ));

        return (
            <Router>
                <React.Fragment>
                    <div className='LifecycleSelect'>생애주기 중 하나를 골라주세요</div>
                    <Row className='LifecycleStyle' gutter={30}>
                        {lifeList}
                    </Row>
                    <main>
                        <Route path="/:lifeandfamily/:life"
                            component={() =>
                                <Chat dvalue={this.props.dvalue}
                                    onClick={this.props.onClick(userName)} />} />
                    </main>

                </React.Fragment>
            </Router>
        )
    };
}

export default LifeCycle;