import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>If you see this text, it means that the connection was successful</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));