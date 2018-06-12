import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import {loadCourses} from './actions/courseActions'
import CoursesPage from './components/CoursesPage';
import registerServiceWorker from './registerServiceWorker';


const store = configureStore();
store.dispatch(loadCourses());

//ReactDOM.render(<CoursesPage />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <CoursesPage />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
