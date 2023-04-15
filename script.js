function calculate(num1, num2, operator) {
  // Use if-else statements to determine which arithmetic operation to perform based on the operator entered.
  // return the final value that you get after operating on num1 and num2 based on what the operator is
  // if operator == "+" then return num1+num2 , else if operator == "-" then return num1-num2 and so on....
  //   write your code here -->

//1.You have been given an array and 4 functions inside the script.js - just write the correct code inside these functions.
      if(operator=='+'){
        return num1+num2;
      }
      else if(operator=='-'){
        return num1-num2;
      }
      else if(operator=='*'){
        return num1*num2;
      }
      else if(operator=='/'){
        return num1/num2;
      }
}

//Employees - Given Data
let employees =  [
  {id:1, name:"john", age:"18", profession:"developer"},
  {id:2, name:"jack", age:"20", profession:"developer"},
  {id:3, name:"karen", age:"19", profession:"admin"}
];

console.log('Array Name - employees', ', Array Length:', employees.length);
employees.forEach(
  (element)=>{
    console.log('ID:',element['id'],', Name:', element['name'], ', Age:', element['age'], ', Profession:', element['profession'])
  }
)

//2.PrintDeveloperbyMap() - console.log all the employees which have the profession of developer using the map function. 
console.log("\n\n\n***Printing all the employees which have the profession of developer using the map function***")

employees.map(
  (element)=>{
    if(element['profession']=='developer')
    console.log('ID:',element['id'],', Name:', element['name'], ', Age:', element['age'], ', Profession:', element['profession'])
  }
)



//3.PrintDeveloperbyForEach() - console.log all the employees which have the profession of developer using the for each function. 
console.log("\n\n\n***Printing all the employees which have the profession of developer using the for each function***")

employees.forEach(
  (element)=>{
    if(element['profession']=='developer')
    console.log('ID:',element['id'],', Name:', element['name'], ', Age:', element['age'], ', Profession:', element['profession'])
  }
)




//4.addData() - In this function make another such employee object and append that in this array. Example - push this in the array - {id:4,name:"susan",age:"20",profession:"intern"} and then console.log it. 


console.log('\n\n\n')
let susan = {id:4,name:"susan",age:"20",profession:"intern"};



addData(susan);     //Function call



function addData(emp_add){
  employees.push(emp_add);
  console.log('\n***New Employee',emp_add['name'],'is added to the employees list using addData() function***');
  console.log('ID:',employees[employees.length-1]['id'],', Name:', employees[employees.length-1]['name'], ', Age:', employees[employees.length-1]['age'], ', Profession:', employees[employees.length-1]['profession'])
}




//5. removeAdmin() - In this function remove the object where the profession is admin. console.log the changed array


function removeAdmin(){
  console.log("\n\n\n***Removing the object where the profession is admin***");


  //Removing necessary object using splice() method
  for(let i in employees){
    if(employees[i]['profession']=='admin'){
      console.log(employees[i]['name'],'is removed');
      employees.splice(i,1);
    }
  }

  console.log('\n***Updated Employee Array***')

  for(let i in employees){
    console.log('ID:',employees[i]['id'],', Name:', employees[i]['name'], ', Age:', employees[i]['age'], ', Profession:', employees[i]['profession'])
  }
}


removeAdmin();  //Function Call



//6. ConcatinateArray() - Make another array with 3 objects just like the one in the above given array. 
console.log('\n\n\n***New Executives Array Created - to be added to the Employees Array***\n\n')
let executives = [
  {id:1001, name:"Hitler", age:"35", profession:"CEO"},
  {id:1002, name:"Stark", age:"38", profession:"CFO"},
  {id:1003, name:"Bruce", age:"39", profession:"COO"}
]
console.log('ArrayName - executives',', Array Length:',executives.length);
//Printing the Array of Executives to be added to the Employees Array
executives.forEach(
  (element)=>{
    console.log('ID:',element['id'],', Name:', element['name'], ', Age:', element['age'], ', Profession:', element['profession'])
  }
)

//Concat the Arrays - executives and employees
let employeeList = employees.concat(executives);



//7.Printing the updated array
console.log('\n\n\n***Arrays Merged - Executives and Employees***\n\n\n')
console.log('ArrayName - employeeList',', Array Length:',employeeList.length);

employeeList.forEach(
  (element)=>{
    console.log('ID:',element['id'],', Name:', element['name'], ', Age:', element['age'], ', Profession:', element['profession'])
  }
)



// ignore the function below
function performOperations() {
  // Get the values of the two input fields and the operator.
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var result = document.getElementById("result");
  var operator = document.getElementById("operator").value;
  // Check if the input values are valid.
  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Please enter valid numbers!";
  }
  if (operator === "") {
    result.textContent = "Please select an operator!";
  }
  const res = calculate(parseFloat(num1), parseFloat(num2), operator);
  result.textContent = "Result is : " + res;
}
