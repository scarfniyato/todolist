let mainContent = document.querySelector("main");
let data = null;

let response = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    data = json;

    for (let i = 0; i <= data.length; i++) {
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      let p1 = document.createElement("p1");
      let badge = document.createElement("span");
      let deleteButton = document.createElement("button");
      let todo = data[i];

      div.classList.add("todo-container");  
      deleteButton.classList.add("deleteBtn");

      // check todo.completed to determine badge to be displayed
      if (todo.completed) {
        badge.classList.add("badge-success"); 
      } else {
        badge.classList.add("badge-danger"); 
      }

      badge.textContent = todo.completed ? "Completed" : "Incomplete";
      h3.textContent = `Task ${todo.id} : ${todo.title}`;
      p1.textContent = `details here`;
      deleteButton.textContent = "Delete";
      
      h3.appendChild(badge);
      div.appendChild(h3);
      div.appendChild(p1);
      div.appendChild(deleteButton);
      
      mainContent.appendChild(div);
    }
  });
