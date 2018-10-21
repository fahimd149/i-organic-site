import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`

const Heading = styled.h1`
  margin-right: 0.5rem;
`

export default ({ title, price }) => (
  <Header>
    <Heading>{title}</Heading>
    <h2>({price})</h2>
  </Header>
)
