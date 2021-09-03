import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {ADD_USER, LOAD_USERS} from "./redux/actions";
import {addUser, loadUsers} from "./redux/actionCreators";


let initialState = {users: []};
const reducer = (state= initialState, action) => {

    switch (action.type) {
        case LOAD_USERS :
            return {...state, users: [...action.payload]}
        case ADD_USER :
            let newUser = action.payload;
            let newUsersArray = {...state.users, newUser}
            return {...state, users: [...newUsersArray]}
        default :
            return state;
    }
}

let store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
