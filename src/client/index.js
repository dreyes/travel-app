import { runRequests } from './js/app'
import { calculateDifference } from './js/dateCalculator'
import './styles/style.scss'

document.getElementById('trip-btn').addEventListener('click', () => {
  Client.runRequests();
});

document.getElementById("app").addEventListener("click", function(e) {
	// e.target was the clicked element
  if (e.target && e.target.matches("div.delete-btn")) {
    e.target.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode);
    console.log("Anchor element clicked!");
	}
});

document.getElementById('start').addEventListener('change', () => {
  let changeDate = document.getElementById('start').value;
  changeDate = new Date(changeDate);
  changeDate.setDate(changeDate.getDate() + 1);
  let newDate = new Date(changeDate);
  newDate.setDate(newDate.getDate() + 1);
  newDate = newDate.getFullYear()+'-'+("00"+(newDate.getMonth()+1)).slice(-2)+'-'+("00"+(newDate.getDate())).slice(-2);
  document.getElementById('end').defaultValue = newDate;
})

export {
  runRequests,
  calculateDifference
}