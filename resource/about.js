import hello_word from './hello';
import world_word from './world';
import css from '../resource/style.css';

document.querySelector('#root').innerHTML = world_word + ' ' + hello_word;
