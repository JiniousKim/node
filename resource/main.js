import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

function reducer(state, action) {
	if (state === undefined) {
		return {
			contents: [
				{id: 1, title: 'HTML', desc: 'HTML is ...'},
				{id: 2, title: 'CSS', desc: 'CSS is ...'},
			],
		};
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
		template += `<li><a href="${state.contents[i].id}">${state.contents[i].title}</a></li>`;
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
				<li><a href="/create">create</a></li>
				<li><input type="button" value="delete"></li>
			</ul>
		`;
}
control();

function article() {
	document.querySelector('#article').innerHTML = `
			<article>
				<h2>HTML</h2>
				HTML is ...
			</article>
		`;
}
article();
