import { Avatar, Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import useAuth from '../store/authStore'

function Profile() {
    const currentUser = useAuth(state=>state.currentUser)
    return (
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)">
            <Box p="6" shadow="lg" w={["xs","sm","md","lg"]}>
                <VStack textAlign="center">
                    <Avatar size="2xl" />
                    <Heading>{currentUser.name}</Heading>
                    <Text>{currentUser.phone}</Text>
                </VStack>
                <VStack my="4">
                    <address>
                        {currentUser.address}
                    </address>
                    <Text>{currentUser.pincode}</Text>
                </VStack>
            </Box>
      </Box>
    )
}

export default Profile
