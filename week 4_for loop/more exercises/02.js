function hospital(input) {
    let daysOfData = Number(input[0]);
    let patientsEachDay = 0;
  
    let doctorCount = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
  
    for (let i = 1; i < input.length; i++) {
      patientsEachDay = Number(input[i]);
  
      if (i % 3 === 0 && untreatedPatients > treatedPatients) {
        doctorCount++;
      }
  
      if (patientsEachDay <= doctorCount) {
        treatedPatients += patientsEachDay;
      } else if (patientsEachDay > doctorCount) {
        patientsEachDay -= doctorCount;
        treatedPatients += doctorCount;
        untreatedPatients += patientsEachDay;
      }
    }
  
    console.log(`Treated patients: ${treatedPatients}.\nUntreated patients: ${untreatedPatients}.`);
    
  }

hospital(["3", "7", "7", "7"])
