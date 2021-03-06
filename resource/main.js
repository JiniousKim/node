import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

function reducer(state, action) {
	if (state === undefined) {
		return {
			selected_id: 1,
			mode: 'welcome',
			max_id: 2,
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
		var maxId = state.max_id + 1;
		return Object.assign({}, state, {
			contents: state.contents.concat({
				id: maxId,
				title: action.title,
				desc: action.desc,
			}),
			mode: 'read',
			selected_id: maxId,
			max_id: maxId,
		});
	}

	if (action.type === 'DELETE') {
		var newContents = [];
		for (var i = 0; i < state.contents.length; i++) {
			if (action.selected_id !== state.contents[i].id) {
				newContents.push(state.contents[i]);
			}
		}

		return Object.assign({}, state, {
			contents: newContents,
			type: 'SELECT',
			mode: 'welcome',
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
	var state = store.getState();
	document.querySelector('#control').innerHTML = `
			<ul>
				<li><a onclick="
				event.preventDefault();
				store.dispatch({type: 'CREATE', mode: 'create'})
				" 
				href="/create">create</a></li>
				<li><input
				onclick="
					store.dispatch({type: 'DELETE', selected_id: ${state.selected_id}});
				" 
				type="button" value="delete"></li>
			</ul>
		`;
}
control();

function article() {
	var state = store.getState();

	if (state.mode === 'welcome') {
		document.querySelector('#article').innerHTML = `
			<article>
				<h2>Welcome Redux!</h2>
				Welcome Redux Example~~~
			</article>
		`;
	}

	if (state.mode === 'read') {
		var i = 0,
			cnt = state.contents.length,
			content = {};

		for (i = 0; i < cnt; i++) {
			if (state.contents[i].id === state.selected_id) {
				content = state.contents[i];
				break;
			}
		}

		document.querySelector('#article').innerHTML = `
				<article>
					<h2>${content.title}</h2>
					${content.desc}
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
store.subscribe(control);
