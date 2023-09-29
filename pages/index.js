import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Home = () => {
  return (<>
      <Navbar/> 

    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading mb={6}>Log In</Heading>
        <Input placeholder="vikas@google.com" variant="filled" type="email" mb={3} />
        <Input placeholder="*****" variant="filled" type="password" mb={6} />

        <Button colorScheme="teal">Log In</Button>
      </Flex>

    </Flex>
  </>

  );
}

export default Home;