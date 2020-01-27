import MyContext from './MyContext'
import InitialState from './InitialState'
import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }

const ProviderContext = props => {
    
const [state, dispatch] = useReducer(reducer, InitialState)
    return (
      <MyContext.Provider value={{ state, dispatch }}>
        {props.children}
      </MyContext.Provider>
    );
  };

  export default ProviderContext; 