import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

 
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <App/>  
   </BrowserRouter>
   
   
);
 
 

 





























// //store
// //reducer
// //dispath

// const store = createStore(reducer)


// const initialState = [
//   {
//     id: 'I',
//     text: 'Js',
//     completed: true
//   },
//    {
//     id: '2',
//     text: 'React',
//     completed: false
//   }
// ]

// const reducer = (state = initialState, action) => {

 
//   switch(action.type){
//     case 'DELETE ':
//       return state.filter(item => item.id !== action.payload) 
//     case 'ADD':
//       return[...state, action.payload]

    
//     default:
//        return state
//   }

  // if(action.type === 'PLUS'){
  //   return state + 1
  // }

  //  if(action.type === 'MINUS'){
  //   return state - 1
  // }

  //  if(action.type === 'RESET'){
  //    return (0);
  // }


   
// }
