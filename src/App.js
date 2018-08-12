import React, {Component} from 'react';
import './styles/css/main.css';
import Menu from './components/navigation/Menu';
import Main from './components/Main';
import PageFooter from './components/PageFooter';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header>
          <Menu />
        </header>
        <Main />
        <PageFooter />
      </div>
    );
  }
}

export default App;
