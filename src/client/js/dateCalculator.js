<<<<<<< Updated upstream
let today = new Date();
let currentDate = today.getFullYear()+'-'+("00"+(today.getMonth()+1)).slice(-2)+'-'+("00"+(today.getDate())).slice(-2);
document.getElementById("start").defaultValue = currentDate;
let tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow = tomorrow.getFullYear()+'-'+("00"+(tomorrow.getMonth()+1)).slice(-2)+'-'+("00"+(tomorrow.getDate())).slice(-2);
document.getElementById("end").defaultValue = tomorrow;

// Calculate the time difference between two dates (Start - Today)
const calculateDifference = () => {
  let startDate = new Date (document.getElementById("start").value);
  let endDate = new Date (document.getElementById("end").value);
  let tripLength = tripTotal(startDate, endDate);
=======
var today = new Date();
var currentDate = today.getFullYear()+'-'+("00"+(today.getMonth()+1)).slice(-2)+'-'+("00"+(today.getDate())).slice(-2);
document.getElementById("start").defaultValue = currentDate;

// Calculate the time difference between two dates (Start - Today)
const calculateDifference = () => {
  var startDate = new Date (document.getElementById("start").value);
  var endDate = new Date (document.getElementById("end").value);
  var tripLength = tripTotal(startDate, endDate);
>>>>>>> Stashed changes
  startDate.setDate(startDate.getDate()+1);
  let diffTime =(startDate.getTime() - today.getTime());
  let daysDiff = Math.round(diffTime / (1000 * 3600 * 24));
  console.log("Difference: "+daysDiff);
  return {
<<<<<<< Updated upstream
    daysDiff: daysDiff,
=======
    daysDiff: daysDiff, 
>>>>>>> Stashed changes
    tripLength: tripLength
  };
}

// Calculate trip length
const tripTotal = (startDate, endDate) => {
<<<<<<< Updated upstream
  let diffTime = (endDate.getTime() - startDate.getTime());
  let tripLength = Math.round(diffTime / (1000 * 3600 * 24));
=======
  var diffTime = (endDate.getTime() - startDate.getTime());
  var tripLength = Math.round(diffTime / (1000 * 3600 * 24));
>>>>>>> Stashed changes
  return tripLength;
}

export { calculateDifference }