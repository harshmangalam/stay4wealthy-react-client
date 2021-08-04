import { Box, Progress, Text, VStack } from "@chakra-ui/react";

function Loading() {
  return (
    <Box h="100vh" w="100%">
      <Box pos="absolute" top="50%" left="50%" transform="translate(-50%,-50%)">
        <VStack>
          <Progress size="sm" isIndeterminate w="150px" />
          <Text>Checking User...</Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default Loading;
