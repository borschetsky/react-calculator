import React, { Component } from 'react';
import './Keys.css';

export default class Keys extends Component {
    // onOne = (args) => {
    //     this.props.handleKey(args);
    // }
    render() {
        return (
            <div className="keys">
                <div className="equals" onClick={ () => this.props.handleKey('eq')}>=</div>
                <div className="zero key common" onClick={ () => this.props.handleKey('0')}>0</div>
                <div className="one key common" onClick={ () => this.props.handleKey('1')}>1</div>
                <div className="two key common" onClick={ () => this.props.handleKey('2')}>2</div>
                <div className="three key common" onClick={ () => this.props.handleKey('3')}>3</div>
                <div className="four key common" onClick={ () => this.props.handleKey('4')}>4</div>
                <div className="five key common" onClick={ () => this.props.handleKey('5')}>5</div>
                <div className="six key common" onClick={ () => this.props.handleKey('6')}>6</div>
                <div className="seven key common" onClick={ () => this.props.handleKey('7')}>7</div>
                <div className="eight key common" onClick={ () => this.props.handleKey('8')}>8</div>
                <div className="nine key common"onClick={ () => this.props.handleKey('9')}>9</div>
                <div className="dot key common"onClick={ () => this.props.handleKey('.')}>.</div>
                <div className="ce key common" onClick={ () => this.props.handleKey('ce')}>CE</div>
                <div className="plus common operators" onClick={ () => this.props.handleKey('+')}>+</div>
                <div className="mult common operators" onClick={ () => this.props.handleKey('*')}>x</div>
                <div className="minus common operators" onClick={ () => this.props.handleKey('-')}>-</div>
                <div className="dev common operators" onClick={ () => this.props.handleKey('/')}>/</div>

            </div>  
            
            );
    }
}