import React, { useRef } from "react";
import Input from "../../../UI/Input/input";
import "./itemForm.css";
import { useState } from "react";

const ItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    // 通用第一步上传报表，防止brower default behavior
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    // convert string number to number
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter amount between 1 and 5</p>}
    </form>
  );
};

export default ItemForm;
