import React from 'react';
<<<<<<< HEAD
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.scss';
import WeatherSearchAndShow from './components/WeatherSearchAndShow/WeatherSearchAndShow';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <WeatherSearchAndShow />
        <Footer />
      </div>
    </Provider>

=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> parent of 32bb832... redux, axios, components
  );
}

export default App;
