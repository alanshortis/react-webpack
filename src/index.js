import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const StyledText = styled.div`
  color: #ff0000;
`;

const App = () => <StyledText>This is my React app.</StyledText>;

render(<App />, document.getElementById('root'));
