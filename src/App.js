import { lazy, Suspense } from "react";
import { Box, Container } from "@chakra-ui/react";
import { Redirect, Route, Switch } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./store/authStore";

import AuthLoading from "./components/AuthLoading";
import AppContext from "./context/AppContext";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import LoadingPage from "./components/LoadingPage";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const dispatch = useAuth((store) => store.dispatch);
  const [loading, setLoading] = useState(true);

  async function fetchCurrentUser() {
    try {
      const res = await axios.get("/user/me");
      dispatch({ type: "AUTHENTICATED", payload: true });
      dispatch({ type: "CURRENT_USER", payload: res.data.data.user });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (loading) {
    return <AuthLoading />;
  }

  return (
    <AppContext>
      <Box
        minH="100vh"
        w="100%"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Box>
          {/* <Notice /> */}
          <Box display={["none", "none", "block"]}>
            <Navbar />
          </Box>
          <Box display={["block", "block", "none"]}>
            <MobileNav />
          </Box>
        </Box>
        <Box flexGrow="1" position="relative" py="4">
          <Container maxW="container.lg">
            <Suspense fallback={<LoadingPage />}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route
                  exact
                  path="/profile"
                  render={(props) =>
                    isAuthenticated ? (
                      <Profile {...props} />
                    ) : (
                      <Redirect to="/" />
                    )
                  }
                />

                <Route
                  exact
                  path="/login"
                  render={(props) =>
                    isAuthenticated ? <Redirect to="/" /> : <Login {...props} />
                  }
                />
                <Route
                  exact
                  path="/signup"
                  render={(props) =>
                    isAuthenticated ? (
                      <Redirect to="/" />
                    ) : (
                      <Signup {...props} />
                    )
                  }
                />
              </Switch>
            </Suspense>
          </Container>
        </Box>

        <Footer />
      </Box>
    </AppContext>
  );
}

export default App;
