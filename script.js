let gradeValues = {
    "A+": 4.00,
    "A": 3.75,
    "B+": 3.50,
    "B": 3.25,
    "C+": 3.00,
    "C": 2.75,
    "D+": 2.50,
    "D": 2.25,
    "F": 0.00
};

let courseCount = 1;
let semesterCount = 1;

function addCourse() {
    courseCount++;
    let newCourse = document.createElement('div');
    newCourse.classList.add('course');
    newCourse.id = `course${courseCount}`;
    newCourse.innerHTML = `
        <label>Course ${courseCount}: Grade</label>
        <input type="text" id="grade${courseCount}" placeholder="A+, A, B+, B, C, D etc.">
        <label>Credit</label>
        <input type="number" id="credit${courseCount}" placeholder="Enter Credits">
        <button onclick="removeCourse(this)" class="remove-button">Remove</button>
    `;
    let buttonGroup = document.querySelector('#semester-cgpa-form .button-group');
    document.getElementById('semester-cgpa-form').insertBefore(newCourse, buttonGroup);
}

function addSemester() {
    semesterCount++;
    let newSemester = document.createElement('div');
    newSemester.classList.add('semester');
    newSemester.id = `semester${semesterCount}`;
    newSemester.innerHTML = `
        <label>Semester ${semesterCount}: CGPA</label>
        <input type="number" step="0.01" id="sem-cgpa${semesterCount}" placeholder="Enter CGPA">
        <label>Credit</label>
        <input type="number" id="sem-credit${semesterCount}" placeholder="Enter Credits">
        <button onclick="removeSemester(this)" class="remove-button">Remove</button>
    `;
    let buttonGroup = document.querySelector('#overall-cgpa-form .button-group');
    document.getElementById('overall-cgpa-form').insertBefore(newSemester, buttonGroup);
}

function removeCourse(button) {
    let course = button.parentElement;
    course.remove();
    renumberCourses();
    calculateSemesterGPA();
}

function removeSemester(button) {
    let semester = button.parentElement;
    semester.remove();
    renumberSemesters();
    calculateOverallCGPA();
}

function renumberCourses() {
    const courses = document.querySelectorAll('#semester-cgpa-form .course');
    courses.forEach((course, index) => {
        course.querySelector('label').innerText = `Course ${index + 1}: Grade`;
        course.querySelector('input[type="text"]').id = `grade${index + 1}`;
        course.querySelector('input[type="number"]').id = `credit${index + 1}`;
    });
    courseCount = courses.length;
}

function renumberSemesters() {
    const semesters = document.querySelectorAll('#overall-cgpa-form .semester');
    semesters.forEach((semester, index) => {
        semester.querySelector('label').innerText = `Semester ${index + 1}: CGPA`;
        semester.querySelector('input[type="number"]').id = `sem-cgpa${index + 1}`;
        semester.querySelector('input[type="number"]').id = `sem-credit${index + 1}`;
    });
    semesterCount = semesters.length;
}

function calculateSemesterGPA() {
    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 1; i <= courseCount; i++) {
        let grade = document.getElementById(`grade${i}`)?.value.toUpperCase();
        let credit = parseFloat(document.getElementById(`credit${i}`)?.value);

        if (gradeValues[grade] !== undefined && !isNaN(credit)) {
            totalPoints += gradeValues[grade] * credit;
            totalCredits += credit;
        }
    }

    if (totalCredits === 0) {
        document.getElementById('semester-gpa-result').innerText = `Semester CGPA: 0.00`;
        document.getElementById('semester-total-credits').innerText = `Total Credits: 0`;
    } else {
        let semesterGPA = totalPoints / totalCredits;
        document.getElementById('semester-gpa-result').innerText = `Semester CGPA: ${semesterGPA.toFixed(2)}`;
        document.getElementById('semester-total-credits').innerText = `Total Credits: ${totalCredits}`;
    }
}

function calculateOverallCGPA() {
    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 1; i <= semesterCount; i++) {
        let cgpaElement = document.getElementById(`sem-cgpa${i}`);
        let creditElement = document.getElementById(`sem-credit${i}`);

        if (cgpaElement && creditElement) {
            let cgpa = parseFloat(cgpaElement.value);
            let credit = parseFloat(creditElement.value);

            if (!isNaN(cgpa) && !isNaN(credit)) {
                totalPoints += cgpa * credit;
                totalCredits += credit;
            }
        }
    }

    if (totalCredits === 0) {
        document.getElementById('overall-cgpa-result').innerText = `Overall CGPA: 0.00`;
        document.getElementById('overall-total-credits').innerText = `Completed Credits: 0`;
    } else {
        let overallCGPA = totalPoints / totalCredits;
        document.getElementById('overall-cgpa-result').innerText = `Overall CGPA: ${overallCGPA.toFixed(2)}`;
        document.getElementById('overall-total-credits').innerText = `Completed Credits: ${totalCredits}`;
    }
}

function resetSemesterGPA() {
    document.getElementById('semester-cgpa-form').innerHTML = `
        <div class="course">
            <label>Course 1: Grade</label>
            <input type="text" id="grade1" placeholder="A+, A, B+, B, etc.">
            <label>Credit</label>
            <input type="number" id="credit1" placeholder="3">
            <button onclick="removeCourse(this)" class="remove-button">Remove</button>
        </div>
        <div class="button-group">
            <button onclick="addCourse()">Add Course</button>
            <button onclick="calculateSemesterGPA()">Calculate Semester GPA</button>
            <button onclick="resetSemesterGPA()">Reset</button>
        </div>
        <h3 id="semester-gpa-result"></h3>
        <h3 id="semester-total-credits"></h3>
    `;
    courseCount = 1;
}

function resetOverallCGPA() {
    document.getElementById('overall-cgpa-form').innerHTML = `
        <div class="semester">
            <label>Semester 1: CGPA</label>
            <input type="number" step="0.01" id="sem-cgpa1" placeholder="3.8">
            <label>Credit</label>
            <input type="number" id="sem-credit1" placeholder="15">
            <button onclick="removeSemester(this)" class="remove-button">Remove</button>
        </div>
        <div class="button-group">
            <button onclick="addSemester()">Add Semester</button>
            <button onclick="calculateOverallCGPA()">Calculate Overall CGPA</button>
            <button onclick="resetOverallCGPA()">Reset</button>
        </div>
        <h3 id="overall-cgpa-result"></h3>
        <h3 id="overall-total-credits"></h3>
    `;
    semesterCount = 1;
}
