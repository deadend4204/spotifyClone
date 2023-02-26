import React, { useContext, useEffect, useState } from "react";
import {
  PlaylistBox,
  PlaylistBoxContainer,
  PlaylistBoxImage,
  PlaylistBoxName,
  SpotifyBodyContent,
} from "../../components/styled";

import { AppContext } from "../../context/AppContextProvider";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TracksList from "../../components/tracksList";
import Loader from "../../components/loader";
import mainAxios from "../../axiosService/axiosService";
import { spotifyAllPlaylistUrl } from "../../appConstant";

const Home = () => {
  const { startPlayback, authData } = useContext(AppContext);

  const [allPlaylistData, setAllPlaylistData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllPlaylistsData = () => {
    setLoading(true);
    mainAxios
      .get(spotifyAllPlaylistUrl, {
        headers: { Authorization: "Bearer " + authData },
      })
      .then((res) => {
        // console.log("res data", res.data);
        if (res.data) {
          const { items } = res.data;
          if (items.length) {
            const allPlaylistData = items.map((item: any) => ({
              id: item.id,
              name: item.name,
              desc: item.description,
              image: item.images[0].url,
              context_uri: item.uri,
            }));
            setAllPlaylistData(allPlaylistData);
          }
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllPlaylistsData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <SpotifyBodyContent>
      <Typography color="white" variant="h3" fontWeight={"bold"} component="h3">
        Your Playlists
      </Typography>
      <PlaylistBoxContainer>
        {allPlaylistData.length ? (
          allPlaylistData.map((playlist) => {
            return (
              <Link key={playlist.id} to={`/playlist/${playlist.id}`}>
                <PlaylistBox>
                  <PlaylistBoxImage src={playlist.image} />
                  <PlaylistBoxName>{playlist.name}</PlaylistBoxName>
                </PlaylistBox>
              </Link>
            );
          })
        ) : (
          <Typography
            color="white"
            variant="h6"
            component="h6"
            textAlign={"center"}
          >
            No playlist found
          </Typography>
        )}
      </PlaylistBoxContainer>{" "}
    </SpotifyBodyContent>
  );
};

export default Home;
