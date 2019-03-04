import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import List from './components/List';
import {Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Provider store= { store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <List />
          </Container>
          
        </div>
      </Provider>
      
    );
  }
}

export default App;
