import React, {Component} from 'react';
import './styles/css/main.css';
import Menu from './components/navigation/Menu';

class App extends Component {
  render () {
    return (
      <div id="bg-img" className="App">
        <header>
          <Menu />
        </header>
      </div>
    );
  }
}

export default App;
