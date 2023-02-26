import React, { useContext, useEffect } from "react";
import {
  Container,
  LoginButton,
  SpotifyImage,
  SpotifyImageContainer,
} from "./styled";
import { AppContext } from "../../context/AppContextProvider";

const Login = () => {
  const { onLogin, onConnectSpotify } = useContext(AppContext);

  useEffect(() => {
    const haskToken = window.location.hash;
    if (haskToken) {
      const token = haskToken.substring(1).split("=")[1].split("&")[0];
      if (token) {
        onLogin(token);
      }
    }
  }, []);
  return (
    <Container>
      <SpotifyImageContainer>
        <SpotifyImage
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
          alt="spotify"
        />
      </SpotifyImageContainer>
      <LoginButton onClick={onConnectSpotify}>Login With Spotify</LoginButton>
    </Container>
  );
};

export default Login;
