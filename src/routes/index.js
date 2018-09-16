import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Index from './UserList';
import About from './About';
import Repository from './Repository';
import RepositoryList from './RepositoryList';
import User from './User';

const Main = () => (
    <Switch>
        <Route exact path="/" render={(props) => (<Index {...props}/>)}/>
        <Route path="/about" component={About}/>
        <Route path="/repos" component={RepositoryList} />
        <Route path="/repo/*" component={Repository} />
        <Route path="/user/:id" component={User} />
        <Route render={() => <h1>找不到此页面</h1>}/>
    </Switch>
)

export default Main;