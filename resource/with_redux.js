import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

function reducer(state, action) {
	console.log(state, action);

	if (state === undefined) {
		return {color: 'yellow'};
	}

	var newState;

	if (action.type === 'CHANGE_COLOR') {
		newState = Object.assign({}, state, {color: 'red'});
	}

	return newState;
}

window.store = createStore(reducer, composeWithDevTools(applyMiddleware()));

function red() {
	let state = store.getState();
	document.querySelector('#red').innerHTML = `
				<div class="container" id="component_red" style="background-color: ${state.color}">
					<h1>red</h1>
					<input type="button" value="fire" onclick="store.dispatch({type: 'CHANGE_COLOR', color: 'red'})">
				</div>
			`;
}

red();
