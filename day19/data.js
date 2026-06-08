export const employees = [
  // HR Department
  { id: 1, name: "Emily Martinez", department: "HR", role: "HR Team Lead", active: true },
  { id: 2, name: "Jason Rodriguez", department: "HR", role: "HR Team Lead", active: true },
  { id: 3, name: "James Martin", department: "HR", role: "HR Specialist", active: true },
  { id: 4, name: "Alex Gonzalez", department: "HR", role: "Recruiter", active: true },
  { id: 5, name: "John Williams", department: "HR", role: "HR Coordinator", active: true },

  // Engineer Department
  { id: 6, name: "Marcus Vance", department: "Engineer", role: "Engineering Team Lead", active: true },
  { id: 7, name: "David Kim", department: "Engineer", role: "Engineering Team Lead", active: true },
  { id: 8, name: "Ashley Martinez", department: "Engineer", role: "Frontend Developer", active: true },
  { id: 9, name: "John Smith", department: "Engineer", role: "Backend Developer", active: true },
  { id: 10, name: "Carlos Jackson", department: "Engineer", role: "DevOps Engineer", active: true },

  // Financial Department
  { id: 11, name: "Megan Smith", department: "Financial", role: "Finance Team Lead", active: true },
  { id: 12, name: "Robert Davis", department: "Financial", role: "Finance Team Lead", active: true },
  { id: 13, name: "Elena Rostova", department: "Financial", role: "Financial Analyst", active: true },
  { id: 14, name: "Chloe Jones", department: "Financial", role: "Accountant", active: true },
  { id: 15, name: "Michael Anderson", department: "Financial", role: "Payroll Clerk", active: true },

  // Customer Service Department
  { id: 16, name: "Sarah Jenkins", department: "Customer Service", role: "Customer Service Team Lead", active: true },
  { id: 17, name: "Jessica Taylor", department: "Customer Service", role: "Customer Service Team Lead", active: true },
  { id: 18, name: "Kevin Miller", department: "Customer Service", role: "Support Agent", active: true },
  { id: 19, name: "Brian Thomas", department: "Customer Service", role: "Support Agent", active: true },
  { id: 20, name: "Kevin Hernandez", department: "Customer Service", role: "Success Manager", active: true }
];


export const tasks = [
  // HR Tasks (Employees 1, 5, 9, 13, 17)
  { id: 1, employeeId: 1, title: "Screen resumes for Marketing role", status: "In Progress", priority: "High" },
  { id: 2, employeeId: 1, title: "Conduct phone interview with candidate", status: "Pending", priority: "Medium" },
  { id: 3, employeeId: 5, title: "Post new job opening on LinkedIn", status: "Completed", priority: "Medium" },
  { id: 4, employeeId: 5, title: "Schedule background checks for new hires", status: "In Progress", priority: "High" },
  { id: 5, employeeId: 9, title: "Review annual performance evaluation forms", status: "Pending", priority: "High" },
  { id: 6, employeeId: 9, title: "Update employee handbook policies", status: "In Progress", priority: "Low" },
  { id: 7, employeeId: 13, title: "Organize upcoming team building event", status: "Pending", priority: "Low" },
  { id: 8, employeeId: 13, title: "Coordinate day-one onboarding schedule", status: "Completed", priority: "High" },
  { id: 9, employeeId: 17, title: "Audit internal training completion rates", status: "In Progress", priority: "Medium" },
  { id: 10, employeeId: 17, title: "Source candidates for Senior Developer role", status: "Pending", priority: "High" },

  // Engineer Tasks (Employees 2, 6, 10, 14, 18)
  { id: 11, employeeId: 2, title: "Fix UI bug in login dashboard", status: "In Progress", priority: "High" },
  { id: 12, employeeId: 2, title: "Refactor navigation component layout", status: "Pending", priority: "Medium" },
  { id: 13, employeeId: 6, title: "Optimize AWS database indexing", status: "Completed", priority: "High" },
  { id: 14, employeeId: 6, title: "Update CI/CD pipeline dependencies", status: "In Progress", priority: "Medium" },
  { id: 15, employeeId: 10, title: "Build secure authentication endpoints", status: "Pending", priority: "High" },
  { id: 16, employeeId: 10, title: "Document API schemas using Swagger", status: "Completed", priority: "Low" },
  { id: 17, employeeId: 14, title: "Write automated integration test suite", status: "In Progress", priority: "Medium" },
  { id: 18, employeeId: 14, title: "Log edge-case bugs found in checkout", status: "Completed", priority: "High" },
  { id: 19, employeeId: 18, title: "Approve architecture pull requests", status: "In Progress", priority: "High" },
  { id: 20, employeeId: 18, title: "Lead sprint planning session", status: "Pending", priority: "Medium" },

  // Financial Tasks (Employees 3, 7, 11, 15, 19)
  { id: 21, employeeId: 3, title: "Reconcile monthly bank statements", status: "Completed", priority: "High" },
  { id: 22, employeeId: 3, title: "Process vendor invoices for Q2", status: "In Progress", priority: "Medium" },
  { id: 23, employeeId: 7, title: "Prepare quarterly budget forecast", status: "In Progress", priority: "High" },
  { id: 24, employeeId: 7, title: "Analyze department variance report", status: "Pending", priority: "Medium" },
  { id: 25, employeeId: 11, title: "Sign off on final tax filings", status: "Pending", priority: "High" },
  { id: 26, employeeId: 11, title: "Review executive expense accounts", status: "Completed", priority: "Low" },
  { id: 27, employeeId: 15, title: "Process bi-weekly payroll deposit", status: "In Progress", priority: "High" },
  { id: 28, employeeId: 15, title: "Verify timesheet hours alignment", status: "Completed", priority: "Medium" },
  { id: 29, employeeId: 19, title: "Conduct standard quarterly internal audit", status: "In Progress", priority: "Medium" },
  { id: 30, employeeId: 19, title: "Review compliance document anomalies", status: "Pending", priority: "High" },

  // Customer Service Tasks (Employees 4, 8, 12, 16, 20)
  { id: 31, employeeId: 4, title: "Resolve billing dispute ticket #1042", status: "Completed", priority: "High" },
  { id: 32, employeeId: 4, title: "Follow up on customer email queue", status: "In Progress", priority: "Medium" },
  { id: 33, employeeId: 8, title: "Assign escalated priority tickets", status: "In Progress", priority: "High" },
  { id: 34, employeeId: 8, title: "Review weekly team CSAT scores", status: "Completed", priority: "Medium" },
  { id: 35, employeeId: 12, title: "Answer live chat refund questions", status: "In Progress", priority: "Medium" },
  { id: 36, employeeId: 12, title: "Update standard macro responses", status: "Pending", priority: "Low" },
  { id: 37, employeeId: 16, title: "Conduct onboarding call with VIP client", status: "Completed", priority: "High" },
  { id: 38, employeeId: 16, title: "Draft renewal retention strategy map", status: "Pending", priority: "Medium" },
  { id: 39, employeeId: 20, title: "Investigate broken coupon code issue", status: "In Progress", priority: "High" },
  { id: 40, employeeId: 20, title: "Call back customer regarding shipping delay", status: "Pending", priority: "Medium" }
];
