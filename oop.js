// Base Class: Person (Demonstrates Abstraction)
class Person {
    constructor(name, id) {
        this.name = name; // Encapsulation: Private data (via naming convention)
        this.id = id;
    }

    getDetails() {
        return Name: ${this.name}, ID: ${this.id};
    }
}

// Derived Class: Student (Demonstrates Inheritance)
class Student extends Person {
    constructor(name, id) {
        super(name, id); // Calls the constructor of Person
        this.grades = []; // Array to store student grades
    }

    // Encapsulation: Method to add grades
    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
        } else {
            console.log("Grade must be between 0 and 100.");
        }
    }

    // Polymorphism: Overriding getDetails method
    getDetails() {
        const baseDetails = super.getDetails();
        return ${baseDetails}, Average Grade: ${this.getAverageGrade()};
    }

    // Method to calculate average grade
    getAverageGrade() {
        if (this.grades.length === 0) return "No grades available";
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return (sum / this.grades.length).toFixed(2);
    }
}

// Student Management System Class
class StudentManagementSystem {
    constructor() {
        this.students = []; // Array to store students
    }

    // Method to add a new student
    addStudent(name, id) {
        const student = new Student(name, id);
        this.students.push(student);
        console.log(`Student ${name} with ID ${id} has been added.`);
    }

    // Method to find a student by ID
    findStudent(id) {
        return this.students.find(student => student.id === id);
    }

    // Method to display student details
    viewStudentDetails(id) {
        const student = this.findStudent(id);
        if (student) {
            console.log(student.getDetails());
        } else {
            console.log(`Student with ID ${id} not found.`);
        }
    }
}

// Testing the System
const sms = new StudentManagementSystem();

// Adding Students
sms.addStudent("Chinonso Okafor", 1);
sms.addStudent("Adebayo Akinwale", 2);

// Adding Grades
const student1 = sms.findStudent(1);
student1.addGrade(75);
student1.addGrade(88);
student1.addGrade(92);

const student2 = sms.findStudent(2);
student2