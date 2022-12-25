function onTimeForTheExam(input) {
    let hourForExam = Number(input[0]);
    let minutesForExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minutesArrival = Number(input[3]);
    let examTime = (hourForExam * 60) + minutesForExam;
    let arrivalTime = (hourArrival * 60) + minutesArrival;
    let timeDifference =  examTime - arrivalTime;
    let earlyHour;
    let earlyMin;
    let lateHour;
    let lateMin;
    if (timeDifference >= 0 && timeDifference <= 30) {
        if (timeDifference == 0) {
            console.log("On time");
        } else {
            console.log("On time");
            console.log(`${timeDifference} minutes before the start`);  
        }
    } else if(timeDifference > 30){
        earlyHour = Math.floor(timeDifference / 60);
        earlyMin = timeDifference % 60;
        if (timeDifference > 30 && timeDifference <= 59){
            console.log("Early");
            console.log(`${timeDifference} minutes before the start`);
        } else{
            if (earlyMin <= 10) {
                console.log("Early");
                console.log(`${earlyHour}:0${earlyMin} hours before the start`);
            } else{
            console.log("Early");
            console.log(`${earlyHour}:${earlyMin} hours before the start`); 
        }
    }
    } else{
        timeDifference = Math.abs(timeDifference);
        lateHour = Math.floor(timeDifference / 60);
        lateMin = timeDifference % 60;
        if (timeDifference <= 59) {
            console.log("Late");
            console.log(`${timeDifference} minutes after the start`);
        }  else{
            if (lateMin <= 10) {
                console.log("Late");
                console.log(`${lateHour}:0${lateMin} hours after the start`);
            } else{
            console.log("Late");
            console.log(`${lateHour}:${lateMin} hours after the start`); 
        }
    }
}
}