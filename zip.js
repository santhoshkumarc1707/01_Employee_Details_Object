const employees = [

{
id: "C101",
name: "Varun",
role: "Junior Web Developer",
experience: "2 Years",
payout: "25000",
},

{
id: "C102",
name: "Srinika",
role: "Junior Web Developer",
experience: "1 Year",
payout: "20000",

},

{
id: "C103",
name: "Rakshitha",
role: "Front End Developer",
experience: "3 Years",
payout: "30000",
},

{
id: "C104",
name: "Hema",
role: "Junior Web Developer",
experience: "3 Years",
payout: "25000",
},
{
id: "C105",
name: "Deepak",
role: "Front End Developer",
experience: "4 Years",
payout: "35000",
},
{
id: "C106",
name: "Sakthi",
role: "Back End Developer",
experience: "2 Years",
payout: "30000",
},
{
id: "C107",
name: "Dakshan",
role: "Senior Front End Developer",
experience: "5 Years",
payout: "45000",
},
{
id: "C108",
name: "Ananth",
role: "BDE",
experience: "2 Years",
payout: "20000",
},
{
id: "C109",
name: "Sharaddha",
role: "Business Associate",
experience: "1 Year",
payout: "15000",
},
{
id: "C110",
name: "Dinesh",
role: "Tech Lead",
experience: "4 Years",
payout: "65000",
},
];
const employeeDropdown = document.getElementById("employeeDropdown");
const selectedEmployee = document.getElementById("selectedEmployee");

// Create options for the dropdown from the employee array
employees.forEach(employee => {
  const option = document.createElement("option");
  option.value = employee.id;
  option.text = employee.id;
  employeeDropdown.appendChild(option);
});

// Add an event listener to the dropdown to display employee details
employeeDropdown.addEventListener("change", () => {
  const selectedId = employeeDropdown.value;
  const selectedEmp = employees.find(employee => employee.id === selectedId);

  if (selectedEmp) {
    const details = `employee_name : ${selectedEmp.name}\n`;
    selectedEmployee.value = details;

  } else {
    selectedEmployee.value = ""; // Clear the input if no employee is selected
  }
});