import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {Route, Redirect, Link, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import PokemonList from './pokemon-list';
import PokemonDetail from './pokemon-detail';
import MyPokemonList from './my-pokemon-list';
import './index.css';

import reducer from './reducers/index';


function AppRouter() {
	let initialState = {
		names: ["chris"]
	}
	const store = createStore(reducer, initialState)
	console.log("initial", store.getState())

	return (
		<Router>
			<div className="navbar">
				<div className="container">
					<img src="/pokemon_logo.png" className="navbar-logo" alt="Pokemon ball" />
					<ul>
						<li><NavLink to="/pokemon-list" className="nav-link">Pokemon List</NavLink></li>
						<li><NavLink to="/my-pokemon-list" className="nav-link">My Pokemon List</NavLink></li>
					</ul>
				</div>
			</div>
			<Provider store={store}>
				<Switch>
					<Route path="/pokemon-list" component={PokemonList} />
					<Route path="/pokemon-detail/:id" component={PokemonDetail} />
					<Route path="/my-pokemon-list" component={MyPokemonList} />
				</Switch>
			</Provider>	
			<Redirect exact from="/" to="/pokemon-list" />
		</Router>
	)
}


ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
