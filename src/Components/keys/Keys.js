import React, { Component } from 'react';
import './Keys.css';

export default class Keys extends Component {
    onOne = (args) => {
        this.props.handleKey(args);
    }
    render() {
        return (
            <div className="keys">
                <div className="equals" onClick={ () => this.props.handleKey('eq')}>=</div>
                <div className="zero common" onClick={ () => this.props.handleKey('0')}>0</div>
                <div className="one common" onClick={ () => this.props.handleKey('1')}>1</div>
                <div className="two common" onClick={ () => this.props.handleKey('2')}>2</div>
                <div className="three common" onClick={ () => this.props.handleKey('3')}>3</div>
                <div className="four common" onClick={ () => this.props.handleKey('4')}>4</div>
                <div className="five common" onClick={ () => this.props.handleKey('5')}>5</div>
                <div className="six common" onClick={ () => this.props.handleKey('6')}>6</div>
                <div className="seven common" onClick={ () => this.props.handleKey('7')}>7</div>
                <div className="eight common" onClick={ () => this.props.handleKey('8')}>8</div>
                <div className="nine common"onClick={ () => this.props.handleKey('9')}>9</div>
                <div className="dot common"onClick={ () => this.props.handleKey('.')}>.</div>
                <div className="ce common" onClick={ () => this.props.handleKey('ce')}>CE</div>
                <div className="plus common operators" onClick={ () => this.props.handleKey('+')}>+</div>
                <div className="mult common operators" onClick={ () => this.props.handleKey('*')}>x</div>
                <div className="minus common operators" onClick={ () => this.props.handleKey('-')}>-</div>
                <div className="dev common operators" onClick={ () => this.props.handleKey('/')}>/</div>

            </div>  
            
            );
    }
}