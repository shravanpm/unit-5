import { useState } from "react";
import React from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 20,
  });
  // Create add and remove functions here that changes the
  // state.

  const handleQunatity = (item, curr, updVal) => {

    if (curr + updVal < 0) {
      return;
    }

    else if (item === "books") {
      setInv({ ...inv, books: curr + updVal });
    } else if (item === "notebooks") {
      setInv({ ...inv, notebooks: curr + updVal });
    } else if (item === "pens") {
      setInv({ ...inv, pens: curr + updVal });
    } else if (item === "inkpens") {
      setInv({ ...inv, inkpens: curr + updVal });
    }

  }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >

      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={() => {handleQunatity("books", inv.books, 1)}}>+</button>
        <button className="circlularButton" onClick={() => {handleQunatity("books", inv.books, -1)}}>-</button>
        <span>{inv.books}</span>
      </div>

      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={() => {
          handleQunatity("notebooks", inv.notebooks, 1)
        }}>+</button>
        <button className="circlularButton" onClick={() => {
          handleQunatity("notebooks", inv.notebooks, -1)
        }}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={() => {
          handleQunatity("pens", inv.pens, 1)
        }}>+</button>
        <button className="circlularButton" onClick={() => {
          handleQunatity("pens", inv.pens, -1)
        }}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={() => {
          handleQunatity("inkpens", inv.inkpens, 1)
        }}>+</button>
        <button className="circlularButton" onClick={() => {
          handleQunatity("inkpens", inv.inkpens, -1)
        }}>-</button>
        <span>{inv.inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks + inv.pens + inv.inkpens}

    </div>
  );
};