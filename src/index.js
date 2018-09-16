
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react';
import { configure } from 'mobx';
import * as stores from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './assets/styles/index.scss';

configure({ enforceActions: 'observed' })

ReactDOM.render(
    <Provider store={stores}>
        <Router>
        <App/>
        </Router>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
