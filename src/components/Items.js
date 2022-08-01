import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Image, Spacer, Stack, Text } from '@chakra-ui/react';

import { getProducts } from '../api/products';

const Items = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [errorState, setErrorState] = useState({ hasError: false });

  useEffect(() => {
    let query = searchParams.get('search');
    if (query && query.length >= 3) {
      getProducts(query)
        .then((data) => setProducts(data.results.slice(0, 4)))
        .catch(handleError);
    } else {
      setProducts([]);
    }
  }, [searchParams]);

  const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message });
  };

  return (
    <>
      {errorState.hasError && <div>{errorState.message}</div>}
      {products &&
        products.map((product) => (
          <Stack key={product.id} direction="row" backgroundColor="white">
            <Stack
              direction={{base: 'column', md: 'row'}}
              boxShadow="md"
              borderColor="gray.200"
              margin={3}
              width="100%"
              padding={2}
              onClick={() => navigate(`/items/${product.id}`)}
              cursor="pointer"
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
                <Text fontSize="xl" color="gray.600">
                  {product.title}
                </Text>
              </Stack>
              <Spacer />
              <Stack>
                <Text fontSize="xl">{product.address.city_name}</Text>
              </Stack>
            </Stack>
          </Stack>
        ))}
    </>
  );
};

export default Items;
