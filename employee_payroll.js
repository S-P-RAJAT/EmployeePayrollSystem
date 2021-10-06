const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NO_OF_WRK_DAYS = 20;
const MAX_WRK_HRS = 160;


function getWorkHRs(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HRS;

        case IS_FULL_TIME:
            return FULL_TIME_HRS;

        default:
            return 0;
    }
}

function calculateWage(employeeHours) {
    return employeeHours * WAGE_PER_HR;
}

let totalWorkHours = 0, totalWage = 0, employeeCheck = 0, totalWorkingDays = 0;
let employeeDailyWageArray = new Array();
let employeeWageMap = new Map();

while (totalWorkingDays < NO_OF_WRK_DAYS && totalWorkHours <= MAX_WRK_HRS) {
    totalWorkingDays++;
    employeeCheck = Math.floor(Math.random() * 10) % 3;
    employeeHours = getWorkHRs(employeeCheck);
    totalWorkHours += employeeHours;
    employeeDailyWageArray.push(calculateWage(employeeHours));
    employeeWageMap.set(totalWorkingDays, calculateWage(employeeHours));
}

function sum(dailyWage) {
    totalWage += dailyWage;
}

employeeDailyWageArray.forEach(sum);
console.log("Total Days: " + totalWorkingDays + " WorkHrs = "
    + totalWorkHours + " Total Wage = " + totalWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("Employee Wage Map total wage: " ,
Array.from(employeeWageMap.values()).reduce(totalWages, 0));

console.log("Total Wage with reduce = " + employeeDailyWageArray.reduce(totalWages, 0));

let dayCounter = 0;

function mapDayWithWage(dailyWage) {
    dayCounter++;
    return dayCounter + " = " + dailyWage;
}

let mapDayWithWageArray = employeeDailyWageArray.map(mapDayWithWage);
console.log("Daily Wage Map", mapDayWithWageArray);

function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullDayWageArray = mapDayWithWageArray.filter(fulltimeWage);
console.log("Daily Wage Filter When Fulltime Wage Earned", fullDayWageArray);

function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("First time fulltime wage was earned on Day: ",
    mapDayWithWageArray.find(findFulltimeWage));

function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("Check all elements have fulltime wage:",
    fullDayWageArray.every(isAllFulltimeWage));

function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}

console.log("Check if any part time wage " + 
    mapDayWithWageArray.some(isAnyPartTimeWage));

function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays+1;
    return numOfDays;
}

console.log("Number of Days Employee Worked: ",
employeeDailyWageArray.reduce(totalDaysWorked, 0));
