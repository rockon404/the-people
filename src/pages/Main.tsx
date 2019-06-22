import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
const Wrapper = styled.div`
  
`;

interface Props {

}

const Main: React.FC<Props> = ({}) => {

  return (
    <Wrapper>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Wrapper>
  );
};

export default Main;
