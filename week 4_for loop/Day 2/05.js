function salary(input) {
    let tabsCount = Number(input.shift());
    let salary = Number(input.shift());

    let tabsOpen = ""

    for (let i = 2; i < input.length; i++) {
        
        tabsOpen = input[i];

        switch (tabsOpen) {
            case "Facebook":
                salary -= 150
                break;
            case "Instagram":
                salary -= 100
                break;
            case "Reddit":
                salary -= 50
                break;
        }
    }

    if (salary <= 0) {
        console.log(`You have lost your salary.`)
    } else if (salary > 0) {
        console.log(salary)
    }
}

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


