function generateRaceInfo() {
    let raceNumber = Math.floor(Math.random() * 1000);
    const ageInput = document.getElementById('ageInput');
    const age = parseInt(ageInput.value) || 0; 
    const isRegisteredEarly = true; 

    
    if (age > 18 && isRegisteredEarly) {
      raceNumber += 1000;
    }

    let startTime = "";
    raceNumber = Math.floor(Math.random() * 1000);
    
    if (age > 18 && isRegisteredEarly) {
      raceNumber += 1000;
      startTime = "9:30 am";
    } else if (age > 18 || isRegisteredEarly) {
      startTime = "11:00 am";
    } else {
      raceNumber += 1000; 
      startTime = "12:30 pm";
    }
    document.getElementById('raceNumber').innerText = raceNumber;
    document.getElementById('startTime').innerText = startTime;
  }