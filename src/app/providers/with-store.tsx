import { Provider } from 'react-redux';
import React from 'react';
import { store } from '@src/app/store';

export const withStore = (component: () => React.ReactNode) => () => (
  <Provider store={store}>{component()}</Provider>
);
