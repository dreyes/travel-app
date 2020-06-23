var today = new Date();
var currentDate = today.getFullYear()+'-'+("00"+(today.getMonth()+1)).slice(-2)+'-'+("00"+(today.getDate())).slice(-2);
document.getElementById("start").defaultValue = currentDate;

// Calculate the time difference between two dates (Start - Today)
const calculateDifference = () => {
  var startDate = new Date (document.getElementById("start").value);
  var endDate = new Date (document.getElementById("end").value);
  tripLength(startDate, endDate);
  startDate.setDate(startDate.getDate()+1);
  var diffTime =(startDate.getTime() - today.getTime());
  var daysDiff = Math.round(diffTime / (1000 * 3600 * 24)); 
  console.log("Difference: "+daysDiff);
  return daysDiff;
}

// Calculate trip length
const tripLength = (startDate, endDate) => {
  var diffTime = (endDate.getTime() - startDate.getTime());
  var daysDiff = Math.round(diffTime / (1000 * 3600 * 24));
  console.log("Total Trip Length: "+daysDiff);
}

export { calculateDifference }