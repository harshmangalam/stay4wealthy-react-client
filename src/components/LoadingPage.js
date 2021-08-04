import { Box, Spinner } from "@chakra-ui/react"

function LoadingPage() {
    return (
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)">
            <Spinner size="xl" colorScheme="twitter" />
        </Box>
    )
}

export default LoadingPage
