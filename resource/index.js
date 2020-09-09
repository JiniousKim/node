import hello_word from './hello';
import world_word from './world';
import _ from 'lodash';
import css from '../resource/style.css';

document.querySelector('#root').innerHTML = _.join(
	[hello_word, world_word, 'test'],
	' ',
);
// immutability test

// var o1 = {name: 'Kim', score: [1, 2]},
// 	o2 = Object.assign({}, o1);
//
// console.log('o2 concat = ', o2.score.concat());
// o2.score = o2.score.concat();
// console.log('o1 score = ', o1.score);
// o2.score.push(3);
// console.log('o2 score = ', o2.score);

// function fn(person) {
// 	person = Object.assign({}, person);
// 	person.name = 'lee';
//
// 	return person;
// }
//
// var o1 = {name: 'kim'};
// var o2 = fn(o1);
// console.log(o1, o2);

var score = [1,2,3];
score.push(4); // score 값을 직접적으로 변경
console.log(score);
