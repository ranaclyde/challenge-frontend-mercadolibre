import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Image, Spacer, Stack, Text } from '@chakra-ui/react';

import { getProducts } from '../actions/itemAction';
import { connect } from 'react-redux';

import BreadcrumbBar from './BreadcrumbBar';

const Items = ({ items, getProducts }) => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const [errorState, setErrorState] = useState({ hasError: false });

  useEffect(() => {
    let query = searchParams.get('search');
    if (query && query.length >= 3) {
      getProducts(query);
    }
  }, [searchParams]);

  const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message });
  };

  return (
    <>
      <BreadcrumbBar />
      {errorState.hasError && <div>{errorState.message}</div>}
      {items &&
        items.map((product) => (
          <Stack key={product.id} direction="row" backgroundColor="white">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              boxShadow="md"
              borderColor="gray.200"
              margin={3}
              width="100%"
              padding={2}
              onClick={() => navigate(`/items/${product.id}`)}
              cursor="pointer"
            >
              <Image
                src={product.picture}
                width="160px"
                height="160px"
                objectFit="contain"
                marginRight={3}
              />
              <Stack>
                <Text fontSize="4xl">$ {product.price.amount}</Text>
                <Text fontSize="xl" color="gray.600">
                  {product.title}
                </Text>
              </Stack>
              <Spacer />
              <Stack>
                <Text fontSize="xl">{product.condition}</Text>
              </Stack>
            </Stack>
          </Stack>
        ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  items: state.itemReducer.getItems.items,
  categories: state.itemReducer.getItems.categories,
  author: state.itemReducer.getItems.author,
});

export default connect(mapStateToProps, { getProducts })(Items);
