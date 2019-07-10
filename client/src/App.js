import React from 'react';
import './App.css';
import Count from './components/Count';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    upMaker = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    downGoer = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div>
                <Count currentCount={this.state.count} />
                <button onClick={this.upMaker}>+</button>
                <button onClick={this.downGoer}>-</button>
            </div>
        );
    }
}

export default App;
