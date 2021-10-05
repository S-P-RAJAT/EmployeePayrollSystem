const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NO_OF_WRK_DAYS = 20;
const MAX_WRK_HRS = 160;


function getWorkHRs(empCheck)
{
switch (empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HRS;

    case IS_FULL_TIME:
        return FULL_TIME_HRS;

    default:
        return 0;
}
}
let total_work_hours = 0,total_wage = 0,empCheck = 0,days=0;
while(days<=NO_OF_WRK_DAYS && total_work_hours<=MAX_WRK_HRS)
{
days++;
empCheck = Math.floor(Math.random() * 10) % 3;
total_work_hours += getWorkHRs(empCheck) ;
}
total_wage = WAGE_PER_HR * total_work_hours;
console.log("Wage = "+total_wage+" WorkHrs = "+total_work_hours);