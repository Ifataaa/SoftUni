document.getElementById("submit").addEventListener("submit", addStudent);
const url = "http://localhost:3030/jsonstore/collections/students";
const tableBody = document.querySelector('#results tbody');

const firstName = document.querySelector('input[name="firstName"]').value;
const lastName = document.querySelector('input[name="lastName"]').value;
const facultyNumber = document.querySelector('input[name="facultyNumber"]').value;
const grade = document.querySelector('input[name="grade"]').value;

async function addStudent(ev) {
    ev.preventDefault();
    const headerEl = document.getElementsByTagName('h3')[0];

    try {
        if (!firstName || !lastName || !facultyNumber || !grade) {
            throw new Error("The input is not valid!")
        }

        const student = {
            firstName,
            lastName,
            facultyNumber,
            grade
        }

        const result = await saveStudent(student);
        if (!result.ok) {
            const err = res.json();
            throw new Error(err);
        }

        const studentRow = createStudenRow(student);
        tableBody.appendChild(studentRow);
        Array.from(document.querySelector('div[class="inputs"]').children).forEach(i => i.value = '');


    } catch (error) {
        alert(error);
    }
}

async function saveStudent(ev) {


    try {
        const req = await fetch(url, {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(students)
        })

        if (!req.ok) {
            const err = res.json();
            throw new Error(err);
        }

        return req;
    } catch (error) {
        alert(error);
    }
}

function createStudenRow() {
    let tr = document.createElement("tr");

    let info = [firstName, lastName, facultyNumber, grade];
    for (let command of info) {
        let th = document.createElement("th");
        th.textContent = command;
        tr.appendChild(th);
    }
    return tr;
}

async function displayStudent() {
    try {
        const students = await getStudents();

        tableBody.textContent = "";

        for (let student of students) {
            let tr = createStudenRow(student);
            tableBody.appendChild(tr);
        }

    } catch (error) {
        alert(error);
    }
}

async function getStudents() {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            const err = res.json();
            throw new Error(err);
        }
        const data = await res.json();
        const students = Object.values(data);
    } catch (error) {
        alert(error);
    }
    return students;
}



