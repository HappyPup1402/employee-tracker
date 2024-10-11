# Employee Tracker

## Description

The Employee Tracker is a command-line application designed to manage a company's employee database. It allows users to interact with the database to view, add, and update company departments, roles, and employees. The application is built using Node.js, Inquirer, and PostgreSQL, providing a simple interface for managing employee information and organizational structure.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Demo](#demo)
- [Questions](#questions)

## Installation

To get started, clone the repository to your local machine and follow the steps below:

1. Clone my repo: 
    ```
    git clone git@github.com:HappyPup1402/employee-tracker.git
    ```

2. Navigate to the project directory.
    ```
    cd employee-tracker
    ```

3. Set up your PostgreSQL database by running the SQL files in pgAdmin4:
    ```
   - Run `schema.sql` to create/delete the database.
   - Run `query.sql` to create tables.
   - Run `seed.sql` to populate the database with initial data.
   ```

4. Install the required dependencies by running (should be installed already):
    ```
    npm install
    npm install inquirer
    npm install pg
    ```


5. Ensure that your PostgreSQL credentials and database information are configured in an `.env` file:
    ```
    DB_NAME=your_database_name
    DB_USER=your_username
    DB_PASSWORD=your_password
    ```

5. Start the application:
    ```
    node src/index.js
    ```

## Usage

Once the application is running, you'll be prompted with the following options to manage your company's database:

- **View All Departments**: Displays a formatted table showing department names and IDs.
- **View All Roles**: Shows job titles, role IDs, department associations, and salaries.
- **View All Employees**: Lists employees with their IDs, names, job titles, departments, salaries, and managers.
- **Add a Department**: Prompts the user to input a department name to add it to the database.
- **Add a Role**: Collects details for the role (name, salary, department) and inserts it into the database.
- **Add an Employee**: Prompts for the employee's first name, last name, role, and manager to create a new employee entry.
- **Update an Employee Role**: Allows the user to select an employee and update their role.
- **Update Employee Managers**: Allows the user to update an employee's manager.
- **View Employees by Manager**: Displays employees based on their managers.
- **View Employees by Department**: Displays employees grouped by their department.
- **Delete Departments, Roles, and Employees**: Allows the user to delete existing departments, roles, or employees from the database.
- **View Total Utilized Budget of a Department**: Displays the combined salaries of all employees in a department.


## Features

- Manage company departments, roles, and employees.
- View organized tables of department, role, and employee data.
- Add new departments, roles, and employees.
- Update employee roles quickly and easily.
- Update employee managers.
- View employees by manager.
- View employees by department.
- Delete departments, roles, and employees.
- View the total utilized budget of a department.

## Demo

Demo video of the project: https://app.screencastify.com/v3/watch/ZZJ2Hw6Uo5IhEkCFzpK0

## Questions

If you have any questions, please reach out to me at [izaacramirez1402@gmail.com](mailto:izaacramirez1402@gmail.com) or visit my GitHub profile at [HappyPup1402](https://github.com/HappyPup1402).
