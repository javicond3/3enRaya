import { Provider } from 'react-redux';
import GlobalState from './../reducers/reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { JUGADORX, JUGADOR0, TABLERO } from '../constants/constants';
import App from './App';
export default class ReduxProvider extends React.Component {
	constructor(props) {
		super(props);
		this.initialState = {tablero: TABLERO, turno: JUGADORX, contador: 0};
		this.store = this.configureStore();
	}
	render() {
		return (
			<AppContainer>
			<Provider store={ this.store }>
			<div style={{ height: '100%' }}>
			<App store={ this.store } />
			</div>
			</Provider>
			</AppContainer>
			);
	}
	configureStore() {
		const store = createStore(GlobalState, this.initialState, devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));
		if (module.hot) {
			module.hot.accept('./../reducers/reducers', () => {
				const nextRootReducer = require('./../reducers/reducers').default;
				store.replaceReducer(nextRootReducer);
			});
		}
		return store;
	}
}