import { runRequests } from './js/app'
import { calculateDifference } from './js/dateCalculator'
import './styles/style.scss'

document.getElementById('trip-btn').addEventListener('click', () => {
  Client.runRequests();
});

document.getElementById("app").addEventListener("click",function(e) {
	// e.target was the clicked element
  if (e.target && e.target.matches("div.delete-btn")) {
    e.target.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode);
    console.log("Anchor element clicked!");
	}
});

export {
  runRequests,
  calculateDifference
}