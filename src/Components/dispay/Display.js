import React, { Component } from 'react';
import './Display.css';
import { evaluate } from 'mathjs';

export default class Display extends Component {
    state = {
        expresion: '0'
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            if(this.props.current === 'ce') {
                this.setState({expresion: '0'});
                return;
            }
            
            const { current } = this.props;
            let { expresion } = this.state;
            if (current === 'eq') {
                const lastChar = expresion.toString().substring(expresion.length - 1);
                if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
                    expresion = expresion.toString().substring(0, expresion.length - 1);
                }
                const result = evaluate(expresion);
                this.setState({expresion: result});
                return;
            }
            if (expresion === '0') {
                if(current === '.' || current === '/' || current === '*' || current === '-' || current === '+') {
                    this.setState({expresion: `${expresion}${current}`})
                }
                else {
                    this.setState({expresion: `${current}`})
                }
            } else {
                if(current === '.') {
                    let indx = 0;
                    for (let i = 0; i < expresion.length - 1; i++) {
                        if(expresion[i] === '+' || 
                            expresion[i] === '/' || 
                            expresion[i] === '*' || 
                            expresion[i] === '-') {
                            indx = i;
                        }
                    }
                    const sbstr = expresion.toString().substring(indx + 1, expresion.length);
                    const check =  sbstr.indexOf(current);
                    if(check > -1) {
                        return;
                    }
                }
                if (current === '+' || current === '-' || current === '*' || current === '/') {
                    const subst = expresion.toString().substring(expresion.length - 1);
                    if(subst === '+' || subst === '-' || subst === '*' || subst === '/') {
                        return;
                    }
                }
                this.setState({expresion: `${expresion}${current}`})
            }
        }
    }

    render() {
        const { expresion } = this.state;

        return (
            <div className="display">
                { expresion  }
            </div>)
    }
}