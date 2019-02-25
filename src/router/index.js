import React, { Component } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';

class Router extends Component {
    render() {
        return (
            <Router history={history}>
                <div >
                    <Switch>
                        <Route exact path="/Home/:gallery" component={Home} />
                        <Route path="/Contacts" component={Contacts} />
                        <Route path="/About" component={About} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Router;
