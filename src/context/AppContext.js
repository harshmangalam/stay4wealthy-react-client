import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
axios.defaults.withCredentials = true;

function AppContext({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ChakraProvider>
  );
}

export default AppContext;
