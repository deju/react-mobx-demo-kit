
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

//import DevTools from 'mobx-react-devtools';

import RouteList from './routes/index';

import Header from './components/layout/header';
import Footer from './components/layout/footer';
import './App.scss';


@withRouter @inject('store') @observer
class App extends Component {

    render() {
        return (
            <div className="main">
                <Header {...this.props.location}/>
                <RouteList/>
                <Footer/>
                {/* <DevTools/> */}
            </div>
        )
    }
}

export default App