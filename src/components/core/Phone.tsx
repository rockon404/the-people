import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #2996ce;
  font-size:12px;
  margin-bottom: 8px;
`;

interface Props {
  className?: string;
}

const Phone: React.FC<Props> = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);


export default Phone;
