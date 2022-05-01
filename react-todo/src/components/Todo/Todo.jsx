import React, { useState } from "react";
import Header from "../Header/Header";
import TodoItem from "../TodoItem/TodoItem";
import TodoList from "../TodoList/TodoList";
import "./Todo.css";
import { nanoid } from "nanoid";
import CompltedTodo from "../CompltedTodo/CompltedTodo";
import CompletedListItem from "../CompletedListItem/CompletedListItem";

const Todo = () => {
  const [todosList, setTodoList] = useState([]);
  const [finishedList, setFinishedList] = useState([]);
  const [showbtn,setshowbtn]=useState(false)
  const getTodoData = (todo) => {
    const data = {
      title: todo,
      status: false,
      id: nanoid(5),
    };
    setTodoList([...todosList, data]);
  };

  const handleToggle = (id) => {
    setTodoList(todosList.map((e) => (e.id === id ? { ...e, status: !e.status } : e)));
    // setFinishedList(todosList.filter((todo) => todo.status !== false));
  };
  const handleDelete = (id) =>{
     setTodoList(todosList.filter((todo) => todo.id !== id));
  }
  const showComplted = () => {
    setshowbtn(!showbtn)
    setFinishedList(todosList.filter((todo) => todo.status !== false));
   
  };
  return (
    <>
      <div className="App-wrapper">
        <div className="header">
          <Header />
        </div>

        <div>
          <TodoItem getTodoData={getTodoData} />
        </div>

        <div>
          {todosList.map((e) => {
            return <TodoList todo={e} handleToggle={handleToggle} handleDelete={handleDelete} />;
          })}
        </div>
        <div>
          <CompltedTodo showComplted={showComplted} finishedList={todosList} />
          {showbtn ? <CompletedListItem finishedList={finishedList} /> : " "}
        </div>
      </div>
    </>
  );
};

export default Todo;
