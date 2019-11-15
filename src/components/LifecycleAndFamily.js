import React, { Component } from "react";
import Family from './Family';
import LifeCycle from './LifeCycle';
import axios from 'axios';
import './../styles/LifecycleAndFamily.css';
import Button from '@material-ui/core/Button';

class LifecycleAndFamily extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: true,
            lifeValue: "",
            familyValue: "",
            appear: true,
            toggle: false,
        };
        this._checkedButton = this._checkedButton.bind(this);
        this.selectAppear = this.selectAppear.bind(this);
        //this._buttonDisappear = this._buttonDisappear.bind(this);
        //this.selectDisapper = this.selectDisapper.bind(this);
    }

    _checkedButton = () => this.setState({ clicked: false, appear: true })
    //_buttonDisappear = () => this.setState({ clicked: true });

    selectAppear = () => this.setState({ appear: false, clicked: true });
    //selectDisapper = () => this.setState({ appear: true });

    btnClickedLife = (e) => {
        axios.post('http://localhost:9000', {
            lifeValue: this.state.lifeValue
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    btnClickedFamily = (e) => {
        axios.post('http://localhost:9000', {
            familyValue: this.state.familyValue
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {

        console.log(this.props)

        return (

            <React.Fragment>
                <div className="select">생애주기와 한부모 가족 중 한가지를 선택해 주세요!</div>
                <div className="button">

                    {
                        this.state.clicked
                            ? <Button title="생애주기" onClick={this._checkedButton} variant="outlined" color="primary" size="large">생애주기</Button>
                            : <LifeCycle {...this.props.state} onClick={this.btnClickedLife.bind(this)} />

                    }
                    {
                        this.state.appear
                            ? <Button title="한부모가족" onClick={this.selectAppear} variant="outlined" color="primary" size="large">한부모가족</Button>
                            : <Family {...this.props.state} onClick={this.btnClickedFamily.bind(this)} />
                    }
                </div>
            </React.Fragment>
        )
    };
}

export default LifecycleAndFamily; 