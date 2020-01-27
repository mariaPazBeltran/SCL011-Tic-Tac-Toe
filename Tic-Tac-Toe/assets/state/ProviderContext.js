import MyContext from './MyContext'
import InitialState from './InitialState'

const ProviderContext = props => {
    
const [state, dispatch] = useReducer(reducer, InitialState)
    return (
      <MyContext.Provider value={{ state, dispatch }}>
        {props.components}
      </MyContext.Provider>
    );
  };

  export default ProviderContext; 