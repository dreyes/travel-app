import { runRequests } from './js/app'
import { calculateDifference } from './js/dateCalculator'
import './styles/style.scss'

document.getElementById('test-btn').addEventListener('click', () => {
  Client.runRequests();
});

export {
  runRequests,
  calculateDifference
}