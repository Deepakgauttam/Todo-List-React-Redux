//views

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, decCounter, resetCounter } from "../actions/index";
import "./counter.css";

const Counter = () => {
  const { amount } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addCounter());
  };
  const handleDec = () => {
    dispatch(decCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <div className="container">
      <h4>Count : {amount}</h4>
      <div className="button-container">
        <button className="button-add" onClick={handleAdd}>
          INC
        </button>
        <button className="button-dec" onClick={handleDec}>
          DEC
        </button>
        <button className="button-rest" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Counter;
