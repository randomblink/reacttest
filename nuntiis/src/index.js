import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Remove lines from auto-built pieces in order to start playing
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);


// comment out following line to customize
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
