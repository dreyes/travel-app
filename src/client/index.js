import { testFunction } from './js/app'
import './styles/style.scss'

console.log('hello webpack');
document.getElementById('test-btn').addEventListener('click', () => {
  testFunction();
});

export {
  testFunction
}