import React, { useState } from "react";
import { styled } from "styled-components";

const Input = styled.input`
  width: 80%;
  padding: 15px 20px;
  outline: none;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid #000;
`;

const Container = styled.div`
  text-align: center;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 25px;
`;

const RadioConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RadioBtn = styled(RadioConatiner)`
  margin: 10px 20px 10px 0;
`;

const Label = styled.label`
  margin-left: 10px;
  cursor: pointer;
`;

const SubmitBtn = styled.button`
  background-color: #44e610;
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #44e610;
  }
`;

function AddTransaction({ AddTransactions }) {
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [transType, setTransType] = useState("expense");

  const AddTransactionData = () => {
    AddTransactions({
      amount: Number(amount),
      details,
      transType,
      id: Date.now(),
    });
  };

  return (
    <Container>
      <Input
        type={"number"}
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      ></Input>

      <Input
        type={"text"}
        placeholder="Enter Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      ></Input>

      <RadioConatiner>
        <RadioBtn>
          <input
            type="radio"
            id="income"
            name="type"
            value={"income"}
            checked={transType === "income"}
            onChange={(e) => setTransType(e.target.value)}
          />
          <Label htmlFor="income">Income</Label>
        </RadioBtn>
        <RadioBtn>
          <input
            type="radio"
            id="expense"
            name="type"
            value={"expense"}
            checked={transType === "expense"}
            onChange={(e) => setTransType(e.target.value)}
          />
          <Label htmlFor="expense">Expense</Label>
        </RadioBtn>
      </RadioConatiner>
      <SubmitBtn onClick={AddTransactionData}>Add Transaction</SubmitBtn>
    </Container>
  );
}

export default AddTransaction;
