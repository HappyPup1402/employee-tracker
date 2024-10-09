-- Insert departments
INSERT INTO department (name) VALUES ('Engineering'), ('HR'), ('Finance');

-- Insert roles
INSERT INTO role (title, salary, department_id) 
VALUES 
('Software Engineer', 80000, 1), 
('HR Specialist', 60000, 2),
('Accountant', 70000, 3);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, NULL),
('Bob', 'Johnson', 3, 1);
