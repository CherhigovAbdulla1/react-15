import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Input from './components/Input';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


//store
//reducer
//dispath


const initialState = 0

const reducer = (state = initialState, action) => {

  if(action.type === 'PLUS'){
    return state + 1
  }

   if(action.type === 'MINUS'){
    return state - 1
  }

   if(action.type === 'RESET'){
     return (0);
  }


  return state
}

const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   <App/>  
  </Provider>
);
 
 

 