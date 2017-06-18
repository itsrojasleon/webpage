// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import firebase from 'firebase';
import Routes from './routes';
import './index.css';
import { Provider }  from 'react-redux';
import { createStore } from 'redux';
import cheet from 'cheet.js';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import messages from './messages.json';

addLocaleData([...en, ...es]);
const locale = navigator.languages.indexOf('es') >= 0 ? 'es' : 'en';

//Configuración de firebase
const config = {
  apiKey: "AIzaSyD_oT-RF6Wtsi-cymESpZQ2BeVekoXCplc",
  authDomain: "webpage-5d432.firebaseapp.com",
  databaseURL: "https://webpage-5d432.firebaseio.com",
  projectId: "webpage-5d432",
  storageBucket: "webpage-5d432.appspot.com",
  messagingSenderId: "945436307857"
};
firebase.initializeApp(config);

const initialState = {
  colorHeader: '',
  isAnimated: false,
  isAnimatedSpace: false,
}

function reducer(state, action) {
  switch(action.type) {
    case 'UPDATE_PROPS': {
      const newProps = action.payload.props
      return {...state, ...newProps}
    }
    default:
    return state
  }
}

const store = createStore(reducer, initialState)

const easter = {
  colorHeader: 'headerAnimated',
  isAnimated: 'isAnimated',
  isAnimatedSpace: 'isAnimatedSpace'
}

cheet('w e b p a g e', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter
    }
  })
})

cheet('a t r a s', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: initialState
    }
  })
})

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <Provider store={store}>
      <Routes history={browserHistory} />
    </Provider>
  </IntlProvider>,
  document.getElementById('root')
);
