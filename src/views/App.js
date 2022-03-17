
import React from 'react';

import Views from './Views';

import { Provider } from 'react-redux';
import { store } from '../store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Views />
    </Provider>
  );
}

export default App;
