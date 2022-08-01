import React from 'react';
import { Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <p>
          Pegar los resultados aca
        </p>
      </Container>
    </div>
  );
};

export default App;
