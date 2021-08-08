import {
  Avatar,
  Box,
  Heading,
  HStack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import useAuth from "../store/authStore";
import StripeContainer from "../components/Stripe/StripeContainer";
function Profile() {
  const currentUser = useAuth((state) => state.currentUser);
  return (
    <Box
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%,-50%)"
    >
      <Box p="6" shadow="lg" w={["xs", "sm", "md", "lg"]}>
        <VStack textAlign="center">
          <Avatar size="2xl" />
          <Heading>{currentUser.name}</Heading>
          <Text>Phone :- {currentUser.phone}</Text>
        </VStack>
        <VStack my="4">
          <HStack>
            <Tag size="sm" colorScheme="green">
              Address
            </Tag>
            <address>
              <Text>{currentUser.address}</Text>
            </address>
          </HStack>
          <HStack>
            <Tag size="sm" colorScheme="linkedin">
              Pincode
            </Tag>
            <address>
              <Text>{currentUser.pincode}</Text>
            </address>
          </HStack>
        </VStack>

        <Box mt="8" d="flex" justifyContent="center">
          <StripeContainer />
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
