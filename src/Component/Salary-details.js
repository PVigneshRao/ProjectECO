import React, { useState } from 'react';
import "./Salary-details.css";
function Details() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Employee 1', salary: 50000 },
    { id: 2, name: 'Employee 2', salary: 60000 },
    // Add more employees here
  ]);

  const handleSalaryChange = (employeeId, newSalary) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === employeeId ? { ...employee, salary: newSalary } : employee
      )
    );
  };

  return (
    <div>
      <h1>Employee Salary Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>
                <SalaryInput
                  employeeId={employee.id}
                  currentSalary={employee.salary}
                  onSalaryChange={handleSalaryChange}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SalaryInput({ employeeId, currentSalary, onSalaryChange }) {
  const [newSalary, setNewSalary] = useState(currentSalary);

  const handleInputChange = (event) => {
    setNewSalary(event.target.value);
  };

  const handleSave = () => {
    onSalaryChange(employeeId, newSalary);
  };

  return (
    <div>
      <input
        type="number"
        value={newSalary}
        onChange={handleInputChange}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Details;