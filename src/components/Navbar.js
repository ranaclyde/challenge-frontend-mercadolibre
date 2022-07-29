import React from 'react';
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
  return (
    <Box backgroundColor="primary.500" paddingY={4} boxShadow="sm">
      <Container maxWidth="container.xl" paddingX={0}>
        <Stack direction="row">
          <Image src={logo} width="44px" objectFit="contain" marginRight={3} />
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
            />
            <Icon as={AiOutlineSearch} color="gray.500" width={5} height={5} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
