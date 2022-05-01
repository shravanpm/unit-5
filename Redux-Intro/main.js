import { addTodo, deleteTodo, toggleTodo } from "./Redux/action";
import { store } from "./Redux/store";


document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("todo_input").value;

  if (title === "") {
    return;
  }

  const todo = {
    
    title: title,
    status: false,
  };

  store.dispatch(addTodo(todo));


  const state = store.getState();
  const todos = state.todos;

  showTodos(todos);
});

function showTodos(todos) {
  console.log(store.getState().todos);

  let container = document.getElementById("listItem");
  container.innerHTML = "";

  todos.map((ele, i) => {
    let div = document.createElement("div");
    div.innerText = i + 1 + ".  " + ele.title;
    div.id = "todo";

    let p = document.createElement("p");
    p.innerText = "Status : " + ele.status;
    div.appendChild(p);

    let deletbtn = document.createElement("button");
    deletbtn.innerText = "Delete";
    deletbtn.id = "deleteTodo";
    deletbtn.addEventListener("click", () => {
      store.dispatch(deleteTodo(ele));
      showTodos(store.getState().todos);
    });
    div.appendChild(deletbtn);

    container.appendChild(div);
  });
}

