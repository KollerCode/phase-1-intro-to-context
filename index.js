function createEmployeeRecord(sampleEmployee) {
    let payRollArray = []
    return payRollArray =
    {
      firstName: sampleEmployee[0],
      familyName: sampleEmployee[1],
      title: sampleEmployee[2],
      payPerHour: sampleEmployee[3],
      timeInEvents: [],
      timeOutEvents: [],
    }

}

function createEmployeeRecords(payRollArray) {
 return payRollArray.map(createEmployeeRecord)
}

function createTimeInEvent(employee, date) {
  const obj = {
      type: "TimeIn",
      hour: parseInt(date.split(' ')[1]),
      date: date.split(' ')[0]
    }
  
  employee.timeInEvents.push(obj)
  return employee
}

function createTimeOutEvent(employee, date) {
  const obj = {
    type: "TimeOut",
    hour: parseInt(date.split(" ")[1]),
    date: date.split(" ")[0],
  };

  employee.timeOutEvents.push(obj);
  return employee;
}

function hoursWorkedOnDate() {}

function wagesEarnedOnDate() {}

function allWagesFor() {}

function calculatePayroll() {}
