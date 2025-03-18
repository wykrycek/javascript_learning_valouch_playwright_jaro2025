const students = [
    { name: "John", marks: 80 },
    { name: "Jane", marks: 90 },
    { name: "Bob", marks: 50 },
    { name: "Alice", marks: 85 },
    { name: "Charlie", marks: 75 },
    { name: "Emily", marks: 95 },
    { name: "Michael", marks: 65 },
    { name: "Sophia", marks: 65 },
    { name: "Oliver", marks: 70 },
    { name: "Isabella", marks: 90 },
    { name: "Ethan", marks: 70 },
    { name: "Emma", marks: 95 },
    { name: "Liam", marks: 75 },
    { name: "Ava", marks: 85 },
    { name: "Noah", marks: 90 },
    { name: "Mia", marks: 100 },
    { name: "Lucas", marks: 95 },
    { name: "Sophia", marks: 65 },
    { name: "Oliver", marks: 70 },
];

const minimumMarks = 75;
const redDiploma = 95;

for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= redDiploma) {
        console.log(`${students[i].name} s červeným diplomem`);
    } else if (students[i].marks >= minimumMarks) {
        console.log(`${students[i].name} prospěl/a`);
    } else {
        console.log(`${students[i].name} neprospěl/a`);
    }
}


students.forEach((student) => {
    let clasification = "";
    if (student.marks >= redDiploma) {
        clasification = "Prosěl/a s červeným diplomem";
    } else if (student.marks >= minimumMarks) {
        clasification = "Prospěl/a";
    } else {
        clasification = "Neprospěl/a";
    }

    console.log(`${student.name} ${clasification} s počtem ${student.marks} bodů.`);
});

