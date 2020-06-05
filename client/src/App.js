import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/layouts/NavBar';
import HomePage from './components/pages/HomePage';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className='container'>
          <HomePage />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
