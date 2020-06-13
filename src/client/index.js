import { runRequests } from './js/app'
import './styles/style.scss'

document.getElementById('test-btn').addEventListener('click', () => {
  Client.runRequests();
});

export {
  runRequests
}