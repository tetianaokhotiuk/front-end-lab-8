
function Company(obj) {
    let sumSalary = 0;
    let sumAge = 0;
    let id = 0;
    let listEmployees = [];
    let reservedList = [];
    let timeStart = Date();
    let timeBegin = Date.now() / 1000;
    let finishTime = Date();
    let timeEnd = Date.now() / 1000;
    this.name = obj.name;
    this.owner = obj.owner;
    this.maxCount = obj.maxCompanySize;
    this.addNewCompany = function(employee) {
            employee.company = {};
            employee.company.name = this.name;
            employee.hire(employee, this.name);
            employee.company.timeStart = timeStart;
            employee.company.timeBegin = timeBegin;
            employee.currentTimeStart = timeStart;
            employee.id = id;
            ++id;
            listEmployees.push(employee);
            reservedList.push(employee);
    }

    this.setFinishEndTime = function(value) {
      value.company.finishTime = finishTime;
      value.company.timeEnd = timeEnd;
      value.fire();
    }

    this.addNewEmployee = function(employee) {
        if (employee instanceof Employee) {

        if (this.maxCount > listEmployees.length) {

            this.addNewCompany(employee);

        } else {
            let minSalary = listEmployees[0].salary;
            for (let i = 0; i < listEmployees.length; i++) {
                if (listEmployees[i].salary < minSalary) {
                    minSalary = listEmployees[i].salary;
                }
            }

            for (let i = 0; i < listEmployees.length; i++) {
                if (listEmployees[i].salary === minSalary) {
                    this.addNewCompany(employee);
                    this.setFinishEndTime(reservedList[listEmployees[i].id]);
                    listEmployees.splice(i, 1);
                }
            }
        }

      } else {
           console.log(`Please try to add Employee instance`);
      }
    };

    this.removeEmployee = function(idi) {

        for (let i = 0; i < reservedList.length; i++) {
            if (reservedList[i].id === listEmployees[idi].id) {
                this.setFinishEndTime(reservedList[i]);
            }
        }

        listEmployees.splice(idi, 1);
    }

    this.getAvarageSalary = function() {
        for (let i = 0; i < listEmployees.length; i++) {
            sumSalary = sumSalary + listEmployees[i].salary;
        }

        let avarageSalary = sumSalary / listEmployees.length;
        console.log(avarageSalary);
    }

    this.getAvarageAge = function() {
        for (let i = 0; i < listEmployees.length; i++) {
            sumAge = sumAge + listEmployees[i].age;
        }

        let avarageAge = sumAge / listEmployees.length;
        console.log(avarageAge);
    }

    this.getEmployees = function() {
        let _privateList = listEmployees;
        console.log(_privateList);
    }

    this.getFormattedListOfEmployees = function() {
        for (let i = 0; i < listEmployees.length; i++) {
            console.log(`${listEmployees[i].name} - works in ${this.name} ${parseInt(Date.now()/1000 - listEmployees[i].company.timeBegin)} seconds`)
        }
    }

    this.getHistory = function() {
        let _log = reservedList;
        let creationDate = Date();
        console.log(`${this.name} was created in ${creationDate}`);
        for (let i = 0; i < _log.length; i++) {

            if (_log[i].company.timeStart) {
                console.log(`${_log[i].name} starts working at ${this.name} in ${_log[i].company.timeStart}`)
            }

            if (_log[i].company.finishTime) {
                console.log(`${_log[i].name} ends working at ${this.name} in ${_log[i].company.finishTime}`)
            }
        }
    }
}

function Employee(obj) {

    let workHistory = [];
    this.name = obj.name;
    this.primarySkill = obj.primarySkill;
    this.age = obj.age;
    this.salary = obj.salary;
    this.getSalary = function() {
        return this.salary;
    }

    this.setSalary = function(value) {
        let _salary = this.getSalary();  
        if (Number.isFinite(value) || !isNaN(value)) {
        if (_salary > value) {
            console.log(`try to change salary from ${_salary} to ${value}`)
        } else if (_salary < value) {
            console.log(`change salary from ${_salary} to ${value}`)
        }
      } 
    }

    this.getWorkTimeInSeconds = function() {
        let workingTime = 0;
        for (let i = 0; i < workHistory.length; i++) {
            workingTime = workingTime + workHistory[i].timeEnd - workHistory[i].timeBegin;
        }
        let currentWorkTime = Date.now() / 1000 - this.company.timeBegin;
        let totalTime = workingTime + currentWorkTime;
        console.log(totalTime);
    }

    this.hire = function(employee, name) {
        employee.currentCompany = name;
    }

    this.fire = function() {
        delete this.currentCompany;
        delete this.currentTimeStart;
        workHistory.push(this.company);
    }

    this.getHistory = function() {
        let _log = workHistory;

        for (let i = 0; i < _log.length; i++) {

            if (_log[i].timeStart) {
                console.log(`${this.name} is hired to ${_log[i].name} in ${_log[i].timeStart}`)
            }

            if (_log[i].finishTime) {
                console.log(`${this.name} is fired from ${_log[i].name} in ${_log[i].finishTime}`)
            }
        }

        if (this.currentTimeStart) {
            console.log(`${this.name} is hired to ${this.currentCompany} in ${this.currentTimeStart}`)
        }

        this.setSalary();
    }
}

let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});

let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});
epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);

console.log(epam.getHistory());

epam.removeEmployee(2);

console.log(vasyl.getHistory());

console.log(epam.getAvarageSalary()); 
console.log(epam.getAvarageAge());  
epam.addNewEmployee(5,6,9,5); 

setTimeout(() => {
   epam.removeEmployee(1);
   console.log(artem.getWorkTimeInSeconds()); // -> 5.5744444444444445
}, 5000);

vova.setSalary(900);
vova.setSalary(2200);
console.log(vova.getHistory());





