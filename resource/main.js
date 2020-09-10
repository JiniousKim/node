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
	document.querySelector('#toc').innerHTML = `
		<nav>
			<ol>
				<li><a href="1.html">HTML</a></li>
				<li><a href="2.html">CSS</a></li>
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
