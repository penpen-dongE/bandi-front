import React, { Component } from "react";
import Family from './Family';
import LifeCycle from './LifeCycle';
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
        };

        this._checkedButton = this._checkedButton.bind(this);
        this.selectAppear = this.selectAppear.bind(this);
    }

    _checkedButton = () => this.setState({ clicked: false, })
    selectAppear = () => this.setState({ appear: false, });

    render() {
        return (

            <React.Fragment>
                <div className="select">생애주기와 한부모 가족 중 한가지를 선택해 주세요!</div>
                <div className='btn'>
                    <div className="btn1">
                        {
                            this.state.clicked
                                ? this.state.appear && <Button title="생애주기" onClick={this._checkedButton}
                                    variant="outlined" color="primary" size="large">생애주기</Button>
                                : <LifeCycle {...this.props}
                                    onClick={this.props.onChange} />

                        }
                    </div>
                    <div className="btn2">
                        {
                            this.state.appear
                                ? this.state.clicked && <Button title="한부모가족" onClick={this.selectAppear}
                                    variant="outlined" color="primary" size="large">한부모가족</Button>
                                : <Family {...this.props}
                                    onClick={this.props.onChange} />
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

export default LifecycleAndFamily; 