import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 1rem;
`

const Heading = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`

const Image = styled.img`
  max-width: 30rem;
`


const Graph = ({ name, image }) => {
  return (
    <Container>
      <Heading>{name}</Heading>
      <Image src={image} alt={name} />
    </Container>
  );
}

export default Graph;
