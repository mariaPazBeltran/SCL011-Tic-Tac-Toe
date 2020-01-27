import React from 'react';
import InitialState from './InitialState';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const MyContext = React.createContext(InitialState);

export default MyContext;