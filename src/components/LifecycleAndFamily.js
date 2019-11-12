import React, { Component } from "react";
import Family from './Family';
import LifeCycle from './LifeCycle';
import axios from 'axios';
// import Header from './Header';
import './../styles/LifecycleAndFamily.css';


class LifecycleAndFamily extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: true,
            lifeValue: "",
            familyValue: "",
            appear: true,
        };
        this._checkedButton = this._checkedButton.bind(this);
        this.selectAppear = this.selectAppear.bind(this);
    }

    _checkedButton = () => this.setState({ clicked: false });

    selectAppear = () => this.setState({ appear: false });

    btnClickedLife = (e) => {
        axios.post('http://localhost:8000', {
            lifeValue: this.state.lifeValue
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    btnClickedFamily = (e) => {
        axios.post('http://localhost:8000', {
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
                생애주기와 한부모 가족 중 한가지를 선택해 주세요!
                <div className="lifecycle">
                    {
                        this.state.clicked
                            ? <button title="생애주기" onClick={this._checkedButton}>생애주기</button>
                            : <LifeCycle onClick={this.btnClickedLife.bind(this)} />
                    }
                </div>

                <div className="family">
                    {
                        this.state.appear
                            ? <button title="한부모가족" onClick={this.selectAppear}>한부모가족</button>
                            : <Family onClick={this.btnClickedFamily.bind(this)} />
                    }
                </div>
            </React.Fragment>

        )
    };
}

export default LifecycleAndFamily; 