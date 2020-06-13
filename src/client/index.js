import { runRequests } from './js/app'
import './styles/style.scss'

console.log('hello webpack');
document.getElementById('test-btn').addEventListener('click', () => {
  Client.runRequests();
});

export {
  runRequests
}