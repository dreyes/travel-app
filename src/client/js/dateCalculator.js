let today = new Date();
let currentDate = today.getFullYear()+'-'+("00"+(today.getMonth()+1)).slice(-2)+'-'+("00"+(today.getDate())).slice(-2);
document.getElementById("start").defaultValue = currentDate;
let tomorrow = today.getFullYear()+'-'+("00"+(today.getMonth()+1)).slice(-2)+'-'+("00"+(today.getDate()+1)).slice(-2);
document.getElementById("end").defaultValue = tomorrow;

// Calculate the time difference between two dates (Start - Today)
const calculateDifference = () => {
  let startDate = new Date (document.getElementById("start").value);
  let endDate = new Date (document.getElementById("end").value);
  let tripLength = tripTotal(startDate, endDate);
  startDate.setDate(startDate.getDate()+1);
  let diffTime =(startDate.getTime() - today.getTime());
  let daysDiff = Math.round(diffTime / (1000 * 3600 * 24));
  console.log("Difference: "+daysDiff);
  return {
    daysDiff: daysDiff,
    tripLength: tripLength
  };
}

// Calculate trip length
const tripTotal = (startDate, endDate) => {
  let diffTime = (endDate.getTime() - startDate.getTime());
  let tripLength = Math.round(diffTime / (1000 * 3600 * 24));
  return tripLength;
}

export { calculateDifference }