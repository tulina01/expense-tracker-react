import "./App.css";
import { styled } from "styled-components";
import Tracker from "./components/Tracker";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Main>
      <Tracker />
    </Main>
  );
}

export default App;
