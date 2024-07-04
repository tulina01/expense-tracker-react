import { useEffect, useState, useCallback } from "react";
import { styled } from "styled-components";
import AddTransaction from "./AddTransaction";
import OverviewComponent from "./OverviewComponent";
import TransactionsContainer from "./TransactionsContainer";

const Heading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
  background-color: #fff;
  padding: 30px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px;
`;

const TransactionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
`;

const ExpenseBox = styled.div`
  flex: 1;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #fff;
  & span {
    font-weight: bold;
    font-size: 25px;
    display: block;
    color: ${(props) => (props.isExpense ? "red" : "green")};
  }
`;

const IncomeBox = styled(ExpenseBox)``;

const Tracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const AddTransactions = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    setTransactions(transactionArray);
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const calculateTransactions = useCallback(() => {
    let exp = 0;
    let inc = 0;

    transactions.forEach((item) => {
      item.transType === "expense"
        ? (exp += item.amount)
        : (inc += item.amount);
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  useEffect(() => {
    calculateTransactions();
  }, [transactions, calculateTransactions]);

  return (
    <Container>
      <Heading>Expense Tracker</Heading>
      <OverviewComponent
        toggle={toggle}
        setToggle={setToggle}
        income={income}
        expense={expense}
      />

      {toggle && (
        <AddTransaction
          setToggle={setToggle}
          AddTransactions={AddTransactions}
        />
      )}

      <TransactionDetails>
        <IncomeBox>
          Income <span>Rs.{income}</span>
        </IncomeBox>
        <ExpenseBox isExpense>
          Expense <span>Rs.{expense}</span>
        </ExpenseBox>
      </TransactionDetails>

      <TransactionsContainer
        transactions={transactions}
        removeTransaction={removeTransaction}
      />
    </Container>
  );
};

export default Tracker;
