import './App.css';
import React from 'react';
import Forms from './Views';

import { Provider } from 'react-redux';
import { store } from '../store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Forms />
    </Provider>
  );
}

export default App;
