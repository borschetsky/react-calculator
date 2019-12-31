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
                <div className="zero" onClick={ () => this.props.handleKey('0')}>0</div>
                <div className="one" onClick={ () => this.props.handleKey('1')}>1</div>
                <div className="two" onClick={ () => this.props.handleKey('2')}>2</div>
                <div className="three" onClick={ () => this.props.handleKey('3')}>3</div>
                <div className="four" onClick={ () => this.props.handleKey('4')}>4</div>
                <div className="five" onClick={ () => this.props.handleKey('5')}>5</div>
                <div className="six" onClick={ () => this.props.handleKey('6')}>6</div>
                <div className="seven" onClick={ () => this.props.handleKey('7')}>7</div>
                <div className="eight" onClick={ () => this.props.handleKey('8')}>8</div>
                <div className="nine"onClick={ () => this.props.handleKey('9')}>9</div>
                <div className="dot"onClick={ () => this.props.handleKey('.')}>.</div>
                <div className="ce" onClick={ () => this.props.handleKey('ce')}>CE</div>
                <div className="plus common operators" onClick={ () => this.props.handleKey('+')}>+</div>
                <div className="mult common operators" onClick={ () => this.props.handleKey('*')}>x</div>
                <div className="minus common operators" onClick={ () => this.props.handleKey('-')}>-</div>
                <div className="dev common operators" onClick={ () => this.props.handleKey('/')}>/</div>

            </div>  
            
            );
    }
}