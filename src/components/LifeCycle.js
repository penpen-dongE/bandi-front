import React, { Component } from "react";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
//import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Chat from "./Chat";

class LifeCycle extends Component {
    render() {

        const lifeValues = ['임신출산', '영유아', '청소년', '청년', '장년', '노인']

        const lifeList = lifeValues.map((life) => (

            <Col span={4}>
                <Link to={`/${life}`}>
                    <button onClick={this.props.btnClickedLife} id='button'>
                        {life}
                    </button>
                </Link>
            </Col>
        ));

        return (
            <Router>
                <React.Fragment>
                    <div className='LifecycleSelect'></div>
                    <Row className='LifecycleStyle' gutter={20} >
                        {lifeList}
                    </Row>
                    <main>
                        <Route path="/:life" component={Chat} />
                    </main>

                </React.Fragment>
            </Router>
        )
    };
}

export default LifeCycle;