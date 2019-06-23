import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: gray;
  font-size:12px;
  margin-bottom: 8px;
`;

interface Props {
  className?: string;
}

const Address: React.FC<Props> = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);


export default Address;
