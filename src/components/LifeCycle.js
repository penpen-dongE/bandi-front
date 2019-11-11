import React, { Component } from "react";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Messages from "./Messages";

const buttonValues = ['Pregnancy', 'Infant', 'Teenager', 'Youth', 'Mature', 'Senior']
class LifeCycle extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <div className='LifecycleSelect'>생애주기를 선택해 주세요</div>
                    <Row className='LifecycleStyle' gutter={20} >

                        <Col span={4}><button id='button'>
                            <FavoriteBorder /><br />임신출산</button>
                        </Col>

                        <Col span={4}><button id='button'>
                            <FavoriteBorder /><br />영유아</button>
                        </Col>
                        <Col span={4}><button id='button'>
                            <FavoriteBorder /><br />청소년</button>
                        </Col>
                        <Col span={4}><button id='button'>
                            <FavoriteBorder /><br />청년</button>
                        </Col>
                        <Col span={4}><button id='button'>
                            <FavoriteBorder /><br />장년</button>
                        </Col>
                        <Col span={4}><button id='button'>
                            <FavoriteBorder /><br />노인</button>
                        </Col>
                    </Row>
                </React.Fragment >
            </Router >
        )
    }
}

export default LifeCycle;