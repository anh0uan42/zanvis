
//task 1
const students = [
  "Liam Smith",
  "Olivia Johnson",
  "Noah Williams",
  "Emma Brown",
  "Oliver Jones",
  "Ava Garcia",
  "Elijah Miller",
  "Charlotte Davis",
  "William Rodriguez",
  "Sophia Martinez"
];

//task 2
students.push('Quan Nguyen')
console.log(students);

//task 3
students.pop()
console.log(students);

//task 4
students.shift()
console.log(students);

students.unshift('John Smith')
console.log(students);

//task 5
const employees = [
  { id: 1, name: "Alice Johnson", role: "Frontend Developer", department: "Engineering", salary: 85000 },
  { id: 2, name: "David Smith", role: "Backend Developer", department: "Engineering", salary: 90000 },
  { id: 3, name: "Sarah Lee", role: "UI/UX Designer", department: "Design", salary: 78000 },
  { id: 4, name: "Michael Chen", role: "Product Manager", department: "Product", salary: 95000 },
  { id: 5, name: "Emma Wilson", role: "Data Scientist", department: "Data", salary: 105000 },
  { id: 6, name: "James Taylor", role: "Marketing Specialist", department: "Marketing", salary: 65000 },
  { id: 7, name: "Olivia Martin", role: "HR Manager", department: "Human Resources", salary: 82000 },
  { id: 8, name: "William Brown", role: "Sales Executive", department: "Sales", salary: 70000 },
  { id: 9, name: "Sophia Martinez", role: "DevOps Engineer", department: "Engineering", salary: 98000 },
  { id: 10, name: "Liam Anderson", role: "Financial Analyst", department: "Finance", salary: 80000 }
];

employees.forEach(employee => {
  console.log(employee.name);
});