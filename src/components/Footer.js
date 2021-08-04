import { Box, Container, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box py="2">
      <Container maxW="container.lg">
        <Flex justifyContent="center" alignItems="center">
          <Text>Copyright Company &copy; {new Date().getFullYear()}</Text>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
