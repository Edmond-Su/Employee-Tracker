INSERT INTO department(id,name)
VALUES (1, "Sales"),
       (2, "Finance"),
       (3, "Legal"),
       (4, "Engineering");

INSERT INTO role(id,title,salary,department_id)
VALUES (1, "Sales Lead", 100000, 1),
       (2, "Salesperson", 80000, 1),
       (3, "Account Manager",160000,2),
       (4, "Accountant",125000,2),
       (5, "Legal Team Lead", 250000,3),
       (6, "Lawyer", 190000,3),
       (7, "Lead Engineer",120000,4),
       (8, "Software Engineer",100000,4);

INSERT INTO employee(id,first_name,last_name,role_id,manager_id)
VALUES (1, "John", "Doe",1,NULL),
       (2, "Mike","Chan",2,1),
       (3, "Ashley","Rodriguez",7,NULL),
       (4, "Kevin","Ng",8,3),
       (5, "Tom","Brady",5 ,NULL),
       (6, "Kunal","Singh",3 ,NULL),
       (7, "Malia","Brown",4 ,6),
       (8, "Sarah","Lourd",6 ,5),
       (9, "Ed","Su",7 ,NULL);