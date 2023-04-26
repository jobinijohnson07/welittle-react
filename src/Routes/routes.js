import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/sidebar.js'
import Dashboard from '../Components/Dashboard/dashboard.js';

const Routes =  () => (
	<Router>
        <Switch>
			<Route path="/" component={Sidebar} exact />
			<Route path="/dashboard" component={Dashboard} />
		</Switch>
	</Router>
)
export default Routes;


