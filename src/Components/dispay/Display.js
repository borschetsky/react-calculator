import React, { Component } from 'react';
import './Display.css';
import { evaluate } from 'mathjs';

export default class Display extends Component {
    state = {
        expresion: '0'
    }

      

    componentDidUpdate(prevProps, prevState) {
        console.log('debug from dsplay')
        if (prevProps !== this.props) {
            if(this.props.current === 'ce') {
                this.setState({expresion: '0'});
                return;
            }
            
            const { current } = this.props;
            const { expresion } = this.state;
            if (current === 'eq') {
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
            }
            else {
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
                    const sbstr = expresion.substring(indx + 1, expresion.length);
                    const check =  sbstr.indexOf(current);
                    if(check > -1) {
                        return
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