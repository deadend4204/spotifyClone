import * as React from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";
import {
  SpotifyBody,
  SpotifyBodyContainer,
  SpotifyContainer,
  SpotifyFooter,
} from "../components/styled";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

type PrivateRouteType = {
  Component: React.ElementType;
  isDashboard: boolean;
  isPrivate: boolean;
};
export const PrivateRoute: React.FC<PrivateRouteType> = ({
  Component,
  isDashboard,
  isPrivate,
}) => {
  const authContext = React.useContext(AppContext);
  const { authData, authStateLoading } = authContext;

  if (authStateLoading || !Component) {
    return <div>Loading...</div>;
  }

  if (!isPrivate && authData) {
    return <Navigate to={"/"} replace />;
  }
  if (!isPrivate && !authData) {
    return <Component />;
  }

  if (!authData) {
    return <Navigate to={"/login"} replace />;
  }
  if (isDashboard) {
    return (
      <SpotifyContainer>
        <SpotifyBodyContainer>
          <Sidebar />
          <SpotifyBody>
            <Navbar />
            <Component />
          </SpotifyBody>
        </SpotifyBodyContainer>
        <SpotifyFooter>
          <Footer />
        </SpotifyFooter>
      </SpotifyContainer>
    );
  }
  return <Component />;
};
