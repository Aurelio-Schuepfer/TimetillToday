function calculateTime() {
    const startDateInput = document.getElementById("startDate").value;

    if (!startDateInput) {
        alert("Please enter a date.");
        return;
    }

    const startDate = new Date(startDateInput);
    const today = Date.now();

    if (startDate > today) {
        alert("The date you entered is in the future. Please enter a date that is today or in the past.");
        return;
    }
  
    const timeMilliseconds = today - startDate;
  
    const timeDifferenceSeconds = Math.floor(timeMilliseconds / 1000);
    const timeDifferenceMinutes = Math.floor(timeDifferenceSeconds / 60);
    const timeDifferenceHours = Math.floor(timeDifferenceMinutes / 60);
    const timeDifferenceDays = Math.floor(timeDifferenceHours / 24);
    const timeDifferenceMonths = Math.floor(timeDifferenceDays / 30);
    const timeDifferenceYears = Math.floor(timeDifferenceDays / 365);
  
    let calculatedTime = document.getElementById("calculatedTime");
    calculatedTime.textContent = "Since " + startDate.toLocaleDateString() + " it has been: " +
        timeDifferenceYears + " years, or " + timeDifferenceMonths + " months, or " + timeDifferenceDays + " days, " +
        timeDifferenceHours + " hours, or " + timeDifferenceMinutes + " minutes, or " + timeDifferenceSeconds + " seconds, or " + timeMilliseconds + " milliseconds.";
}
  
document.getElementById("calculateButton").addEventListener("click", function(event) {
    event.preventDefault(); 
    calculateTime();
});
