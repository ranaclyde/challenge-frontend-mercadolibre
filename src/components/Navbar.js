import React, { useState, useEffect } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import logo from '../assets/logo.png';
import {
  Box,
  Container,
  Icon,
  Image,
  Input,
  Stack,
  StackDivider,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.length > 0) {
      navigate({
        pathname: '/items',
        search: `?${createSearchParams({ search: query })}`,
      });
    }
  }, [query]);

  return (
    <>
      <Box backgroundColor="primary.500" paddingY={4} paddingX={{base: 4, md: 0}} boxShadow="sm">
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
    </>
  );
};

export default Navbar;
