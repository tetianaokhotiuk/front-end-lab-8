var sumSalary = 0;
var sumAge = 0;
var id = 0;

function Company(obj) {
    var listEmployees = [];
    var reservedList = [];
    this.name = obj.name;
    this.owner = obj.owner;
    this.maxCount = obj.maxCompanySize;
    this.addNewEmployee = function(employee) {
        if (typeof(employee) === 'number') {
            console.log(`Please try to add Employee instance`);
        }

        if (this.maxCount > listEmployees.length) {

            employee.company = {};
            employee.company.name = this.name;
            employee.hire(employee, this.name);
            employee.company.timeStart = Date();
            employee.company.timeBegin = Date.now() / 1000;
            employee.id = id;
            ++id;


            listEmployees.push(employee);
            reservedList.push(employee);

        } else {
            var minSalary = listEmployees[0].salary;
            for (var i = 0; i < listEmployees.length; i++) {
                if (listEmployees[i].salary < minSalary) {
                    minSalary = listEmployees[i].salary;

                }
            }

            for (var i = 0; i < listEmployees.length; i++) {
                if (listEmployees[i].salary === minSalary) {
                    employee.company = {};
                    employee.company.name = this.name;
                    employee.hire(employee, this.name);
                    employee.company.timeStart = Date();
                    employee.company.timeBegin = Date.now() / 1000;
                    employee.id = id;
                    ++id;
                    reservedList.push(employee);
                    reservedList[listEmployees[i].id].company.finishTime = Date();
                    reservedList[listEmployees[i].id].company.timeEnd = Date.now() / 1000;
                    reservedList[listEmployees[i].id].fire();
                    listEmployees.splice(i, 1, employee);
                }
            }
        }

    };

    this.removeEmployee = function(idi) {


        for (var i = 0; i < reservedList.length; i++) {
            if (reservedList[i].id === listEmployees[idi].id) {
                reservedList[i].company.finishTime = Date();
                reservedList[i].company.timeEnd = Date.now() / 1000;
                reservedList[i].fire();
            }
        }

        listEmployees.splice(idi, 1);
    }

    this.getAvarageSalary = function() {
        for (var i = 0; i < listEmployees.length; i++) {
            sumSalary = sumSalary + listEmployees[i].salary;
        }

        var avarageSalary = sumSalary / listEmployees.length;
        console.log(avarageSalary);
    }

    this.getAvarageAge = function() {
        for (var i = 0; i < listEmployees.length; i++) {
            sumAge = sumAge + listEmployees[i].age;
        }

        var avarageAge = sumAge / listEmployees.length;
        console.log(avarageAge);
    }

    this.getEmployees = function() {
        var _privateList = listEmployees
        console.log(_privateList);
    }

    this.getFormattedListOfEmployees = function() {
        for (var i = 0; i < listEmployees.length; i++) {
            console.log(`${listEmployees[i].name} - works in ${this.name} ${parseInt(Date.now()/1000 - listEmployees[i].company.timeBegin)} seconds`)
        }
    }

    this.getHistory = function() {
        var _log = reservedList;
        var creationDate = Date();
        console.log(`${this.name} was created in ${creationDate}`);
        for (var i = 0; i < _log.length; i++) {

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

    var workHistory = [];
    this.name = obj.name;
    this.primarySkill = obj.primarySkill;
    this.age = obj.age;
    this.salary = obj.salary;

    this.getSalary = function() {
        return this.salary;
    }

    this.setSalary = function(value) {
        var _salary = this.getSalary();
        if (!isFinite(this.salary)) {
            return console.log('salary error')
        }

        if (_salary > value) {

            console.log(`try to change salary from ${_salary} to ${value}`)
        } else if (_salary < value) {
            console.log(`change salary from ${_salary} to ${value}`)
        }

    }

    this.getWorkTimeInSeconds = function() {
        var workingTime = 0;
        for (var i = 0; i < workHistory.length; i++) {
            workingTime = workingTime + workHistory[i].timeEnd - workHistory[i].timeBegin;
        }
        var currentWorkTime = Date.now() / 1000 - this.company.timeBegin;
        var totalTime = workingTime + currentWorkTime;
        console.log(totalTime);
    }

    this.hire = function(employee, name) {
        employee.currentCompany = name;
        employee.currentTimeStart = Date();
    }

    this.fire = function() {
        delete this.currentCompany;
        workHistory.push(this.company);
        delete this.currentTimeStart;

    }

    this.getHistory = function() {
        var _log = workHistory;

        if (this.currentTimeStart) {
            console.log(`${this.name} is hired to ${this.currentCompany} in ${this.currentTimeStart}`)
        }


        for (var i = 0; i < _log.length; i++) {
            if (_log[i].timeStart) {
                console.log(`${this.name} is hired to ${this.company.name} in ${this.company.timeStart}`)
            }

            if (_log[i].finishTime) {
                console.log(`${this.name} is fired from ${this.company.name} in ${this.company.finishTime}`)
            }
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
// epam.addNewEmployee(5,6,9,5); 

setTimeout(() => {
   epam.removeEmployee(1);
   console.log(artem.getWorkTimeInSeconds()); // -> 5.5744444444444445
}, 5000);

vova.setSalary(900);
vova.setSalary(2200);
console.log(vova.getHistory());




