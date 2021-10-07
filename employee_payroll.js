const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NO_OF_WRK_DAYS = 20;
const MAX_WRK_HRS = 160;


function getWorkingHours(empCheck) {
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
let employeeHoursMap = new Map();


while (totalWorkingDays < NO_OF_WRK_DAYS && totalWorkHours <= MAX_WRK_HRS) {
    totalWorkingDays++;
    employeeCheck = Math.floor(Math.random() * 10) % 3;
    employeeHours = getWorkingHours(employeeCheck);
    totalWorkHours += employeeHours;
    employeeDailyWageArray.push(calculateWage(employeeHours));
    employeeHoursMap.set(totalWorkingDays, employeeHours);
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
console.log("Employee Wage Map total wage: ",
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
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}

console.log("Number of Days Employee Worked: ",
    employeeDailyWageArray.reduce(totalDaysWorked, 0));

const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}

let count = 0;
let totalHours = Array.from(employeeHoursMap.values()).reduce(findTotal, 0);
let totalSalary = employeeDailyWageArray.filter(dailyWage => dailyWage > 0)
    .reduce(findTotal, 0);
console.log("Employee wage using arrow functions:\nTotal hours: " + totalHours + " \nTotal wage: " + totalSalary);

let nonWorkingDays = new Array();
let fullWorkingDays = new Array();
let partWorkingDays = new Array();

employeeHoursMap.forEach((value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full working days: " + fullWorkingDays);
console.log("Part working days: " + partWorkingDays);
console.log("Non working days: " + nonWorkingDays);

{
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let employeeDailyHoursAndWageArray = new Array();
    while(totalEmpHrs <= MAX_WRK_HRS && totalWorkingDays < NO_OF_WRK_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        employeeDailyHoursAndWageArray.push(
            {
                dayNum:totalWorkingDays,
                dailyHours:empHrs,
                dailyWage:calculateWage(empHrs),
                toString(){
                    return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage
                },
            }
        );
    }
    console.log("Showing daily hours worked and wage earned: "+employeeDailyHoursAndWageArray);
}