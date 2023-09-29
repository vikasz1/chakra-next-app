import { useState } from "react"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  ChakraProvider,
  Flex
} from '@chakra-ui/react';
import Navbar from "../Navbar"

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <>


      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Box
          maxW="md"
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          boxShadow="md"
          bg="white"
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Text fontSize="xl" fontWeight="bold">
                Login
              </Text>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormControl>
              <Button type="submit" colorScheme="blue">
                Log In
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>

    </>
  )
}
