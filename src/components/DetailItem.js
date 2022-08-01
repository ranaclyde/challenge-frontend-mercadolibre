import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Image,
  Spacer,
  Stack,
  Text,
  Heading,
  Flex,
  Button,
} from '@chakra-ui/react';

import { getItem } from '../api/products';

const Prices = ({ price }) => {
  const salePrice = String(price.amount).split('.');

  return (
    <Flex>
      <Text textTransform="capitalize" fontSize="5xl">
        $ {salePrice[0]}
      </Text>
      <Text textTransform="capitalize" fontSize="xl" mt="15px">
        {salePrice[1] || '00'}
      </Text>
    </Flex>
  );
};

const DetailItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [errorState, setErrorState] = useState({ hasError: false });

  useEffect(() => {
    getItem(id)
      .then((data) => setProduct(data.item))
      .catch(handleError);
  }, []);

  const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message });
  };

  return (
    <Stack
      direction={{ base: 'column', md: 'column' }}
      boxShadow="md"
      borderColor="gray.200"
      backgroundColor="white"
      width="100%"
      padding={6}
    >
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Stack
          direction={{ base: 'row', md: 'column' }}
          marginBottom={5}
          maxWidth={{ md: '70%' }}
        >
          <Image
            src={product.picture}
            objectFit="contain"
            maxWidth={{ base: '100%', md: '500px' }}
            height={{ base: '300px', md: '500px' }}
            width={{ base: '200px', md: 'auto' }}
          />
        </Stack>
        <Spacer />
        <Stack maxWidth={{ md: '25%' }} spacing={4}>
          <Text textTransform="capitalize" color="gray.500">
            {product.condition} - {product.sold_quantity} vendidos
          </Text>
          <Text textTransform="capitalize" fontSize="lg" fontWeight="bold">
            {product.title}
          </Text>
          {product.price && <Prices price={product.price} />}
          <Button
            colorScheme="blue"
            backgroundColor="#3483fa"
            borderColor="transparent"
            color="white"
          >
            Comprar
          </Button>
        </Stack>
      </Stack>
      <Stack paddingTop={5} maxWidth={{ md: '70%' }}>
        <Heading as="h2" size="lg">
          Descripcion del producto
        </Heading>
        <Text fontSize="lg" color="gray.500">
          {product.description}
        </Text>
      </Stack>
    </Stack>
  );
};

export default DetailItem;
