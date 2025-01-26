# OOP-part-2
Explanation of OOP Principles:
 1. Encapsulation:
 • Student details (e.g., name, ID, grades) are encapsulated within the Student class.
 • Methods like addGrade ensure grades are validated before being added.
 2. Abstraction:
 • The Person class abstracts basic attributes and behaviors, hiding unnecessary implementation details.
 • Users of the system interact with high-level methods like addStudent or viewStudentDetails.
 3. Inheritance:
 • The Student class extends the Person class, inheriting its properties and methods while adding specific functionality.
 4. Polymorphism:
 • The getDetails method in the Student class overrides the one in the Person class to include grades and average grade information.

Output Example:

Student Chinonso Okafor with ID 1 has been added.
Student Adebayo Akinwale with ID 2 has been added.
Name: Chinonso Okafor, ID: 1, Average Grade: 84.33
Name: Adebayo Akinwale, ID: 2, Average Grade: 90.00
Student with ID 3 not found.

