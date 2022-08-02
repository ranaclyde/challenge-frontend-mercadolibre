import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { Provider } from 'react-redux';
import store from './store';

import App from './App';
import DetailItem from './components/DetailItem';
import Items from './components/Items';
import theme from './theme';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/items" element={<Items />} />
              <Route path="/items/:id" element={<DetailItem />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
