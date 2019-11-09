import React, { Component } from "react";
import './../styles/Family.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


// <button><img src="./../../bandibot_asset/img/family1.png"/>한부모가족</button>  이미지가 안나옴 ㅠ
class Family extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='familySelect'>가족형태를 선택해 주세요</div>
                <Row className='familyStyle' gutter={20} >
                    <Col span={4}><button id='button1'>
                        <FavoriteBorder /><br />한부모<br />가족</button>
                    </Col>
                    <Col span={4}><button id='button2'>
                        <FavoriteBorder /><br />조손가족</button>
                    </Col>
                    <Col span={4}><button id='button3'>
                        <FavoriteBorder /><br />청소년<br />한부모가족</button>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Family;