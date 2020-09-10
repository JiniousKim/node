import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

function reducer(state, action) {
	console.log(state, action);

	if (state === undefined) {
		return {color: 'yellow'};
	}

	var newState;

	if (action.type === 'CHANGE_COLOR') {
		newState = Object.assign({}, state, {color: action.color});
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

function blue() {
	let state = store.getState();
	document.querySelector('#blue').innerHTML = `
				<div class="container" id="component_blue" style="background-color: ${state.color}">
					<h1>blue</h1>
					<input type="button" value="fire" onclick="store.dispatch({type: 'CHANGE_COLOR', color: 'blue'})">
				</div>
			`;
}

function green() {
	let state = store.getState();
	document.querySelector('#green').innerHTML = `
				<div class="container" id="component_blue" style="background-color: ${state.color}">
					<h1>green</h1>
					<input type="button" value="fire" onclick="store.dispatch({type: 'CHANGE_COLOR', color: 'green'})">
				</div>
			`;
}

store.subscribe(red);
store.subscribe(blue);
store.subscribe(green);

red();
blue();
green();
