import styled from "styled-components";
import Generator from "./Generator";

const Title= styled.h1`
  text-align: center;
`;

const AppContainer = styled.div`
  position: relative;
  margin: 0 auto;
  border: 1px solid black;
  width: 100%;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;
const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;


function App() {
  return (
    <div className="App">
      <Title>Cat generator </Title>
      <AppContainer>
        <Content>
          <Generator />
        </Content>
      </AppContainer>

    </div>
  );
}

export default App;
