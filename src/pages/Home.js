import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../store/authStore";
function Home() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const currentUser = useAuth((state) => state.currentUser);
  return (
    <Box
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%,-50%)"
    >
      <VStack spacing={["3", "4", "5", "6"]}>
        <Heading
          letterSpacing="tighter"
          textAlign="center"
          fontWeight="extrabold"
          fontSize={["3xl", "4xl", "5xl", "6xl"]}
        >
          Add Your Heading Text Here
        </Heading>
        <Text
          fontSize={["sm", "md", "lg"]}
          color="gray.500"
          textAlign="center"
          fontWeight="bold"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </Text>
        {!isAuthenticated ? (
          <HStack spacing="6">
            <Button
              as={Link}
              to="/signup"
              rightIcon={<FaArrowRight />}
              size="md"
              colorScheme="twitter"
            >
              Register Now
            </Button>
            <Button size="md" as={Link} to="/login" colorScheme="orange">
              Login
            </Button>
          </HStack>
        ) : (
          <Button as={Link} to="/profile" colorScheme="twitter">Hello , {currentUser.name}</Button>
        )}
      </VStack>
    </Box>
  );
}

export default Home;
