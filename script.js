var taskId = 1; // Initialize task ID

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var addedTasksTable = document.getElementById("addedTasks");
    var completedTasksTable = document.getElementById("completedTasks");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    // Add task to the task list
    var li = document.createElement("li");
    var taskIdSpan = document.createElement("span");
    taskIdSpan.textContent = "Step " + taskId + ": ";
    li.appendChild(taskIdSpan);

    var taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskInput.value;
    li.appendChild(taskTextSpan);

    var deleteButton = document.createElement("span");
    deleteButton.textContent = "❌";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(deleteButton);

    var doneButton = document.createElement("span");
    doneButton.textContent = "✔️";
    doneButton.className = "doneButton";
    doneButton.onclick = function() {
        taskTextSpan.classList.toggle("done");
        if (taskTextSpan.classList.contains("done")) {
            // If task is marked as done, add it to the completed tasks table
            var newRow = completedTasksTable.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            cell1.textContent = "Step " + taskId;
            cell2.textContent = taskInput.value;
        } else {
            // If task is unmarked, remove it from the completed tasks table
            var rows = completedTasksTable.rows;
            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].cells;
                if (cells[1].textContent === taskInput.value) {
                    completedTasksTable.deleteRow(i);
                    break;
                }
            }
        }
    };
    li.appendChild(doneButton);

    taskList.appendChild(li);

    // Add task to the added tasks table
    var newRow = addedTasksTable.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.textContent = "Step " + taskId;
    cell2.textContent = taskInput.value;

    taskInput.value = "";
    taskId++; // Increment task ID for the next task
}
