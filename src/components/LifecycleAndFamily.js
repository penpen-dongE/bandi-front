import React, { Component } from "react";
import Family from './Family';
import LifeCycle from './LifeCycle';
import Header from './Header';
import './../styles/LifecycleAndFamily.css';


class LifecycleAndFamily extends Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div className="bandibot">

                    <div className="header">
                        <Header />
                    </div>

                    <div className="lifecycle">
                        <LifeCycle />
                    </div>

                    <div className="family">
                        <Family />
                    </div>

                </div>
            </React.Fragment>

        )
    };
}

export default LifecycleAndFamily; 