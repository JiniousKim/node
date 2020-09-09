import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

function reducer(state, action) {
	console.log(state, action);

	if (state === undefined) {
		return {color: 'yellow'};
	}

	if (action.type === 'CHANGE_COLOR') {
		state.color = 'red';
	}

	return state;
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
