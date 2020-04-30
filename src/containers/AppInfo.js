import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from '../containers/Users';
import Login from '../containers/Login';
import asyncComponent from '../hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
    return import('../containers/Pizza.js');
});

class AppInfo extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/users">Users</Link> |
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                  <h1>Welcome My Friend</h1>
                </div>
                <div>
                    <Route path="/users" exact component={Users} />
                    <Route path="/pizza" component={AsyncPizza} />
                </div>
            </div>
        );
    }
}

export default AppInfo;