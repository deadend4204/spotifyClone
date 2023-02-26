import React, { useContext, useEffect, useState } from "react";
import { SidebarContainer, SpotifyImageSidebar } from "../styled";
import { SpotifyImageContainer } from "../../pages/login/styled";
import { IconButton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/LogoutRounded";
import { AppContext } from "../../context/AppContextProvider";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { displayName, profileImage, getUserData, onLogout } =
    useContext(AppContext);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <SidebarContainer>
      <SpotifyImageContainer>
        <SpotifyImageSidebar
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt="spotify"
        />
      </SpotifyImageContainer>
      {profileImage && (
        <SpotifyImageContainer>
          <SpotifyImageSidebar src={profileImage} alt="spotify" />
        </SpotifyImageContainer>
      )}
      {displayName && (
        <Typography
          style={{ background: "green", borderRadius: "22px" }}
          textAlign={"center"}
          variant="h5"
          component="h5"
        >
          {displayName}
        </Typography>
      )}
      <Link to={"/"}>
        {" "}
        <Typography
          textAlign={"center"}
          variant="subtitle1"
          color="white"
          component="h5"
        >
          Home
        </Typography>
      </Link>
      <IconButton onClick={onLogout}>
        <LogoutIcon style={{ color: "#049104", fontSize: "2rem" }} />
      </IconButton>
    </SidebarContainer>
  );
};

export default Sidebar;
