function hotelRoom(input) {
    let visitingMonth = input.shift();
    let overnightStays = Number(input.shift());
    let studio;
    let apartment;
    

    switch (visitingMonth) {
        case "May":
        case "October":
            studio =  overnightStays * 50;
            apartment = overnightStays * 65;
            if (overnightStays > 7 && overnightStays <= 14) {
                studio *= 0.95
            } else if (overnightStays > 14) {
                studio = studio * 0.7;
                apartment = apartment * 0.9;
            }
        break;
        case "June":
        case "September":
            studio = overnightStays * 75.20;
            apartment = overnightStays * 68.70;
            if (overnightStays > 14) {
                studio *= 0.8;
                apartment *= 0.9;
            }
        break;
        case "July":
        case "August":
            studio = overnightStays * 76;
            apartment = overnightStays * 77;
            if (overnightStays > 14) {
                apartment *= 0.9;
            }
        break;
    }

    apartment = apartment.toFixed(2);
    studio = studio.toFixed(2);

    console.log(`Apartment: ${apartment} lv.`);
    console.log(`Studio: ${studio} lv.`)
}

hotelRoom(["May","15"])


