import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

function reducer(state, action) {
	console.log(state, action);
	if (state === undefined) {
		return {
			selected_id: 1,
			mode: 'read',
			contents: [
				{id: 1, title: 'HTML', desc: 'HTML is ...'},
				{id: 2, title: 'CSS', desc: 'CSS is ...'},
			],
		};
	}

	if (action.type === 'CREATE') {
		return Object.assign({}, state, {mode: action.mode});
	}

	if (action.type === 'SELECT') {
		return Object.assign({}, state, {
			selected_id: action.id,
			mode: action.mode,
		});
	}

	if (action.type === 'STORE') {
		return Object.assign({}, state, {
			contents: state.contents.concat({
				id: state.contents.length + 1,
				title: action.title,
				desc: action.desc,
			}),
			mode: 'read',
			selected_id: state.contents.length + 1
		});
	}
}

window.store = createStore(reducer, composeWithDevTools(applyMiddleware()));

function subject() {
	document.querySelector('#subject').innerHTML = `
		<header>
			<h1>WEB</h1>
			Hello, WEB!
		</header>
	`;
}
subject();

function TOC() {
	let state = store.getState(),
		i = 0,
		cnt = state.contents.length,
		template = '';

	for (i = 0; i < cnt; i++) {
		template += `
			<li>
				<a onclick="
					event.preventDefault();
					store.dispatch({type: 'SELECT', id: ${state.contents[i].id}, mode: 'read'});
					" 
					href="${state.contents[i].id}">
				${state.contents[i].title}
				</a>
			</li>
			`;
	}

	document.querySelector('#toc').innerHTML = `
		<nav>
			<ol>
			${template}
			</ol>
		</nav>
	`;
}
TOC();

function control() {
	document.querySelector('#control').innerHTML = `
			<ul>
				<li><a onclick="
				event.preventDefault();
				store.dispatch({type: 'CREATE', mode: 'create'})
				" 
				href="/create">create</a></li>
				<li><input type="button" value="delete"></li>
			</ul>
		`;
}
control();

function article() {
	var state = store.getState();

	if (state.mode === 'read') {
		document.querySelector('#article').innerHTML = `
				<article>
					<h2>${state.contents[state.selected_id - 1].title}</h2>
					${state.contents[state.selected_id - 1].desc}
				</article>
			`;
	}

	if (state.mode === 'create') {
		document.querySelector('#article').innerHTML = `
			<article>
				<form onsubmit="
				event.preventDefault();
				store.dispatch({
				  type: 'STORE',
				  title: this.title.value,
				  desc: this.description.value,
				});
				">
					<p><input type="text" name="title" placeholder="Title"></p>
					<p><textarea name="description" placeholder="description"></textarea></p>
					<input type="submit" value="submit">
				</form>
			</article>
		`;
	}
}
article();

store.subscribe(article);
store.subscribe(TOC);
