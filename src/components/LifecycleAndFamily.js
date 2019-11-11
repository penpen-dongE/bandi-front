import React, { Component, setState } from "react";
import Family from './Family';
import LifeCycle from './LifeCycle';
// import Header from './Header';
import Button from '@material-ui/core/Button';
import './../styles/LifecycleAndFamily.css';


class LifecycleAndFamily extends Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        console.log(this.props)
        return (

            <React.Fragment>

                <div className="lifecycle">
                    <button onClick={this.handleClick} id='button'>
                        {this.state.isToggleOn ? '생애주기' : <LifeCycle />}
                    </button>
                </div>

                <div className="family">
                    <button onClick={this.handleClick} id='button'>
                        {this.state.isToggleOn ? '한부모가족' : <Family />}
                    </button>

                </div>

            </React.Fragment>

        )
    };
}

export default LifecycleAndFamily; 