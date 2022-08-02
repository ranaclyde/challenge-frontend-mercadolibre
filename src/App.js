import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Container
        alignSelf="center"
        maxWidth="container.xl"
        paddingX={0}
        marginY={4}
      >
        <Outlet />
      </Container>
    </>
  );
};

export default App;
