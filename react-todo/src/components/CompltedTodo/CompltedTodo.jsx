import React from 'react'

import "./CompltedTodo.css"

const CompltedTodo = ({ showComplted, finishedList }) => {
  var arr =finishedList.filter((todo) => todo.status !== false);
  return (
    <div className="compltebn">
      <button
        className="button"
        onClick={() => {
          showComplted();
        }}
      >
        CompltedTodo ({arr.length})
      </button>
    </div>
  );
};

export default CompltedTodo