import hello_word from './hello';
import world_word from './world';
import css from '../public/style.css';

document.querySelector('#root').innerHTML = hello_word + ' ' + world_word;