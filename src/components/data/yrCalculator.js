
function calcYrsWorked(startDate) {
    const currentDate = new Date();
    const start = new Date(startDate);
  
    let yearsWorked = currentDate.getFullYear() - start.getFullYear(); // Use 'let' here, not 'const'
  
    // Adjust the year if the current month is earlier than the start month
    if (currentDate.getMonth() < start.getMonth() || 
        (currentDate.getMonth() === start.getMonth() && currentDate.getDate() < start.getDate())) {
      yearsWorked -= 1;
    }
  
    return yearsWorked;
  }
  
  export default calcYrsWorked;
  