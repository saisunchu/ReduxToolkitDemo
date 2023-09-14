import {configureStore} from '@reduxjs/toolkit';
import Reducers from './Reducers';

// let store = createStore(rootReducer);
let store = configureStore({
  reducer: {
    Reducers: Reducers,
  },
});

export default store;
