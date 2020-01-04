import React, { Component } from 'react';
import './Calc.css';
import Display from '../dispay';
import Keys from '../keys';


export default class Calc extends Component {
    state = {
        current: null
    }

    handleKey = (args) => {
        if(args === 'ce') {
            this.setState({current: 'ce'});
            return;
        }
        this.setState({current: args});
    }

    render(){
        return (
            <div className="calc">
                <Display current={ this.state.current}/>
                <Keys handleKey={this.handleKey}/>
            </div>    
        );
    }
}
