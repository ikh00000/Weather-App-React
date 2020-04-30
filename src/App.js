import React from 'react';
import Header from './components/header/Header';
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

  );
}

export default App;
