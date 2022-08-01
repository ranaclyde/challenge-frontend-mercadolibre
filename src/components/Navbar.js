import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import {
  Box,
  Container,
  Icon,
  Image,
  Input,
  Spacer,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

import { getProducts } from '../api/products';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [errorState, setErrorState] = useState({ hasError: false });

  useEffect(() => {
    if (query.length >= 3) {
    getProducts(query)
      .then((data) => setProducts(data.results.slice(0, 4)))
      .catch(handleError);
    }
  }, [query]);

  const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message });
  };

  return (
    <>
      <Box backgroundColor="primary.500" paddingY={4} boxShadow="sm">
        <Container maxWidth="container.xl" paddingX={0}>
          <Stack direction="row">
            <Image
              src={logo}
              width="44px"
              objectFit="contain"
              marginRight={3}
            />
            <Stack
              backgroundColor="white"
              direction="row"
              divider={<StackDivider />}
              width="100%"
              padding={2}
              borderRadius="sm"
              boxShadow="sm"
              alignItems="center"
            >
              <Input
                variant="unstyled"
                width="100%"
                placeholder="Nunca dejes de buscar..."
                _placeholder={{ color: 'gray.400' }}
                paddingX={2}
                onChange={(event) => setQuery(event.target.value)}
              />
              <Icon
                as={AiOutlineSearch}
                color="gray.500"
                width={5}
                height={5}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0} marginY={4}>
        {errorState.hasError && <div>{errorState.message}</div>}
        {products &&
          products.map((product) => (
            <Stack key={product.id} direction="row" backgroundColor="white">
              <Stack
                direction="row"
                boxShadow="md"
                borderColor="gray.200"
                margin={3}
                width="100%"
                padding={2}
              >
                <Image
                  src={product.thumbnail}
                  width="160px"
                  height="160px"
                  objectFit="contain"
                  marginRight={3}
                />
                <Stack>
                  <Text fontSize="4xl">$ {product.price}</Text>
                  <Text fontSize="xl" color="gray.600">{product.title}</Text>
                </Stack>
                <Spacer />
                <Stack>
                  <Text fontSize="xl">{product.address.city_name}</Text>
                </Stack>
              </Stack>
            </Stack>
          ))}
      </Container>
    </>
  );
};

export default Navbar;
