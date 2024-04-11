class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company; 


     }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

const emp=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
//console.log(emp_sonali.emp_salary)
console.log("*************** Step 1*****************************************************");
console.log("Log only Emp Name and Company Name on Console ");
console.log("--------------------------------------------------------------------------")
emp.forEach(element => {
    if (element.emp_company=="TCS") {      
    console.log("Employee Name is             :",element.emp_name)
console.log ("Employee Company Name is :",element.emp_company);       
    }
});
console.log("*************** Step 2************************************************");
console.log(" Finance Department Employee Log only department and employee Name on Console ");

emp.forEach(element => {
    if (element.emp_dept=="Finance"){
        console.log("Employee Name Is :",element.emp_name)
        console.log("Employee Department is :",element.emp_dept)

    }
});
console.log("*************** Step 3************************************************");
console.log("Employee Name Start With 'R' and log complete employee details on console ")

emp.forEach(name => {
    if (name.emp_name.startsWith("R")) {
        console.log(name)
       
    }
    
});

console.log("*************** Step 4************************************************");
console.log("Find the employees whose salary is greater than 75000 ")
emp.forEach(salary => {
    if (salary.emp_salary>75000){
    console.log("Employee Name is :",salary.emp_name)
    console.log("Company Name is :",salary.emp_company)
    console.log("Salary Name is :",salary.emp_salary) 
    }   
});

console.log("*************** Step 5************************************************");
console.log("Find the emp`s whose salary is greater than or equal 50000 from an 'IT' department")

emp.forEach(salary => {
    if (salary.emp_salary>=50000 && salary.emp_dept=="IT"){
       console.log(salary);
    }
});
console.log("*************** Step 5************************************************");
console.log("Find out all the employees from company 'Infy'");
emp.forEach(company => {
    if (company.emp_company=="Infy"){
        console.log(company)
        
    }
    
});

