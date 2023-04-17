 // problem 1
let employees = [
    
    {"firstName":"Sam", "department":"Tech", "designation":"manager", "salary": 40000, "raise eligible":"true"},
    {"firstName":"Mary", "department":"Finance", "designation":"trainee", "salary":18500, "raise eligible":"true"},
    {"firstName":"Bill", "department":"HR", "designation":"Executive", "salary":21200, "raise eligible":"false"},
    
]
// problem 2
let company = {"companyName":"Tech Stars", "website":"www.techstars.site", "employees": employees}

// problem 3
let newEmployee = {"firstName":"Anna", "department":"Tech", "designation":"Executive", "salary": 25600 , "raise eligible":"false"}
employees.push(newEmployee)

console.log(employees[3]);
console.log(company.employees[1]);
//problem 4
let totalSalary = company.employees.reduce((acc, employees) => acc + employees.salary, 0)
console.log("Total Salary:", totalSalary)

// Problem 5
function updateSalary(employees) {
    return employees.map((employee) => {
      if (employee.raiseEligible) {
        employee.salary *= 1.1;
        employee.raiseEligible = false;
      }
      return employee;
    });
  }
  
  company.employees = updateSalary(company.employees);
  console.log("Updated salaries:", company);
  
  // Problem 6
  let workingFromHome = ["Anna", "Sam"];
  
  function updateWfhStatus(employees, workingFromHome) {
    return employees.map((employee) => {
      employee.wfh = workingFromHome.includes(employee.firstName);
      return employee;
    });
  }
  
  company.employees = updateWfhStatus(company.employees, workingFromHome);
  console.log("Updated WFH status:", company);





