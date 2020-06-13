import { requestCoordinates } from './js/app'
import './styles/style.scss'

console.log('hello webpack');
document.getElementById('test-btn').addEventListener('click', () => {
  requestCoordinates();
});

export {
  requestCoordinates
}