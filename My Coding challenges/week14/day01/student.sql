CREATE TABLE student (
    student_id BIGSERIAL PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL,
    student_age INT NOT NULL,
    parent_id INT,
    class_id INT,
    student_roll_no INT NOT NULL DEFAULT 0,
    student_DOB DATE NOT NULL DEFAULT '2000-01-01',
    student_class VARCHAR(7),
    FOREIGN KEY (parent_id) REFERENCES Parent(parent_id),
    FOREIGN KEY (class_id) REFERENCES Class(class_id)
);

CREATE TABLE Parent (
    parent_id BIGSERIAL PRIMARY KEY,
    parent_name VARCHAR(50),
    parent_number INT
);

CREATE TABLE Class (
    class_id BIGSERIAL PRIMARY KEY,
    class_secton VARCHAR(7)
);

--  CREATE TABLE student2 AS TABLE student WITH NO DATA;

-- INSERT INTO student2 (student_name,student_age)  VALUES ('manas' , 25);

-- INSERT INTO student (student_id, student_name,student_age)  VALUES ('manas' , 25);

-- UPDATE student2 
-- SET student_age = 30
-- WHERE student_id = 2;


