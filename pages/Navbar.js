import { Box, Flex, Link, Spacer, Text, ChakraProvider } from '@chakra-ui/react';
function Navbar() {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            padding="1rem"
            bg="blue.500"
            color="white"
        >
            <Box>
                <Text fontSize="2xl" fontWeight="bold">
                    My Website
                </Text>
            </Box>

            <Box>
                <Link href="#" marginRight="1rem">
                    Home
                </Link>
                <Link href="#" marginRight="1rem">
                    About
                </Link>
                <Link href="#" marginRight="1rem">
                    Services
                </Link>
                <Link href="#">Contact</Link>
            </Box>
        </Flex>
    );
}

export default Navbar;