import inquirer from 'inquirer';
import { pool, connectToDb } from './connection'; // Make sure to adjust the import path for your db file

// Connect to the database
connectToDb();

// Function to view all departments
const viewDepartments = async () => {
    const result = await pool.query('SELECT id, name FROM department');
    console.table(result.rows);
};

// Function to view all roles
const viewRoles = async () => {
    const result = await pool.query(`
        SELECT role.id, role.title, role.salary, department.name AS department
        FROM role
        JOIN department ON role.department_id = department.id
    `);
    console.table(result.rows);
};

// Function to view all employees
const viewEmployees = async () => {
    const result = await pool.query(`
        SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, 
               department.name AS department, role.salary, 
               (SELECT CONCAT(m.first_name, ' ', m.last_name) FROM employee m WHERE m.id = employee.manager_id) AS manager
        FROM employee
        JOIN role ON employee.role_id = role.id
        JOIN department ON role.department_id = department.id
    `);
    console.table(result.rows);
};

// Function to add a department
const addDepartment = async (name: string) => {
    await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
    console.log(`Department '${name}' added successfully.`);
};

// Function to add a role
const addRole = async (title: string, salary: number, departmentId: number) => {
    await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
    console.log(`Role '${title}' added successfully.`);
};

// Function to add an employee
const addEmployee = async (firstName: string, lastName: string, roleId: number, managerId: number | null) => {
    await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [firstName, lastName, roleId, managerId]);
    console.log(`Employee '${firstName} ${lastName}' added successfully.`);
};

// Function to update an employee's role
const updateEmployeeRole = async (employeeId: number, newRoleId: number) => {
    await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [newRoleId, employeeId]);
    console.log(`Employee ID ${employeeId} role updated successfully.`);
};

// Function to update an employee's manager
const updateEmployeeManager = async (employeeId: number, newManagerId: number | null) => {
    await pool.query('UPDATE employee SET manager_id = $1 WHERE id = $2', [newManagerId, employeeId]);
    console.log(`Employee ID ${employeeId} manager updated successfully.`);
};

// Function to view employees by manager
const viewEmployeesByManager = async (managerId: number) => {
    const result = await pool.query('SELECT * FROM employee WHERE manager_id = $1', [managerId]);
    console.table(result.rows);
};

// Function to view employees by department
const viewEmployeesByDepartment = async (departmentId: number) => {
    const result = await pool.query(`
        SELECT employee.id, employee.first_name, employee.last_name
        FROM employee
        JOIN role ON employee.role_id = role.id
        WHERE role.department_id = $1
    `, [departmentId]);
    console.table(result.rows);
};

// Function to delete a department
const deleteDepartment = async (departmentId: number) => {
    await pool.query('DELETE FROM department WHERE id = $1', [departmentId]);
    console.log(`Department ID ${departmentId} deleted successfully.`);
};

// Function to delete a role
const deleteRole = async (roleId: number) => {
    await pool.query('DELETE FROM role WHERE id = $1', [roleId]);
    console.log(`Role ID ${roleId} deleted successfully.`);
};

// Function to delete an employee
const deleteEmployee = async (employeeId: number) => {
    await pool.query('DELETE FROM employee WHERE id = $1', [employeeId]);
    console.log(`Employee ID ${employeeId} deleted successfully.`);
};

// Function to view total utilized budget of a department
const viewDepartmentBudget = async (departmentId: number) => {
    const result = await pool.query(`
        SELECT SUM(role.salary) AS total_budget
        FROM employee
        JOIN role ON employee.role_id = role.id
        WHERE role.department_id = $1
    `, [departmentId]);
    console.log(`Total utilized budget for department ID ${departmentId}: $${result.rows[0].total_budget}`);
};