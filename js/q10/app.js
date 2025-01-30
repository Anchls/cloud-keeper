var students = [];
function isValidInput(input, type) {
  if (type === 'name') {
    return input.trim() !== '';
  } else if (type === 'marks') {
    var marks = parseFloat(input);
    return !isNaN(marks) && marks >= 0 && marks <= 100;
  }
  return false;
}

function calculateTotalAndAverage(marks) {
  var total = 0;
  for (var i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  var average = total / marks.length;
  return {
    total: total,
    average: average.toFixed(2)
  };
}

function addStudent() {
  var name = prompt("Enter student name:");
  if (!isValidInput(name, 'name')) {
    alert("Invalid student name. Please try again.");
    return;
  }

  var marks = [];
  for (var i = 1; i <= 5; i++) {
    var mark = prompt("Enter marks for Subject " + i + " (0-100):");
    if (!isValidInput(mark, 'marks')) {
      alert("Invalid mark for Subject " + i + ". Please enter a number between 0 and 100.");
      return;
    }
    marks.push(parseFloat(mark));
  }

  var result = calculateTotalAndAverage(marks);
  var studentData = {
    name: name,
    marks: marks,
    total: result.total,
    average: result.average
  };
 
  students.push(studentData);
  savedata();
  updateTable();
}


function savedata(){
  localStorage.setItem("students",JSON.stringify(students));

}
function loadData(){
var savedata=localStorage.getItem(students);
if(savedata){
  students=JSON.parse(savedata);
  updateTable();
}
}

function updateTable() {
  var tableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    var row = tableBody.insertRow(tableBody.rows.length);
    row.insertCell(0).textContent = student.name;
    for (var j = 0; j < 5; j++) {
      row.insertCell(j + 1).textContent = student.marks[j];
    }

    row.insertCell(6).textContent = student.total;
    row.insertCell(7).textContent = student.average;
  }
}
window.onload= loadData;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    