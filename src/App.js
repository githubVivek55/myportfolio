import React, {Component} from 'react';
import './styles/css/main.css';
import Menu from './components/navigation/Menu';
import Main from './components/Main';
import PageFooter from './components/PageFooter';

import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <header>
            <Menu />
          </header>
          <Main />
          <PageFooter />
        </div>
      </Provider>
    );
  }
}

export default App;
