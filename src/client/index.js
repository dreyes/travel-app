import { runRequests } from './js/app'
import { calculateDifference } from './js/dateCalculator'
import { Printd } from 'printd'
import './styles/style.scss'

document.getElementById('trip-btn').addEventListener('click', () => {
  Client.runRequests();
});

document.getElementById('print-btn').addEventListener('click', () => {
  let customCSS = 
  `#app {
    margin-left: 0;
  }
  
  .card, .additional {
    background: #2D355F;
  }`;
  const d = new Printd();
  const scripts = "";
  const printCallback = ({ launchPrint }) => launchPrint()
  d.print(document.getElementById('app'), ['./main.css', customCSS], scripts , printCallback);
});

document.getElementById("app").addEventListener("click", function(e) {
	// e.target was the clicked element
  if (e.target && e.target.matches("div.delete-btn")) {
    e.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode.parentNode);
  }
  if (e.target && e.target.matches("div#notes-btn")) {
    if (e.target.innerHTML === "+ add notes") {
      e.target.innerHTML = "- remove notes";
      let n = document.createElement("div");
      n.classList.add('additional');
      n.classList.add('notes');
      n.innerHTML = 
      '<h3>notes: </h3>\n' +
      `<textarea class="inner-ta" placeholder="add some notes here..."></textarea>\n`;
      e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].appendChild(n);
    } else {
      e.target.innerHTML = "+ add notes";
      e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].removeChild(e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.notes'));
    }
  }
  if (e.target && e.target.matches("div#lodging-btn")) {
    if (e.target.innerHTML === "+ add lodging info") {
      e.target.innerHTML = "- remove lodging";
      let l = document.createElement("div");
      l.classList.add('additional');
      l.classList.add('lodging');
      l.innerHTML = 
      '<h3>lodging info: </h3>\n' +
      `<textarea class="inner-ta" placeholder="add some lodging info here..."></textarea>\n`;
      e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].appendChild(l);
    } else {
      e.target.innerHTML = "+ add lodging info";
      e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].removeChild(e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.lodging'));
    }
  }
  if (e.target && e.target.matches("div#packing-btn")) {
    if (e.target.innerHTML === "+ add packing list") {
      e.target.innerHTML = "- remove list";
      let p = document.createElement("div");
      p.classList.add('additional');
      p.classList.add('packing');
      p.innerHTML = 
      '<h3>packing info: </h3>\n' +
      `<textarea class="inner-ta" placeholder="add some packing info here..."></textarea>\n`;
      e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].appendChild(p);
    } else {
      e.target.innerHTML = "+ add packing list";
      e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].removeChild(e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.packing'));
    }
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