import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContextProvider";
import {
  PlayListImage,
  PlayListImageContainer,
  PlaylistContainer,
  PlaylistInfoContainer,
} from "../../components/styled";
import { Grid, IconButton, Typography } from "@mui/material";
import PlayIcon from "@mui/icons-material/PlayCircle";
import TracksList from "../../components/tracksList/index";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import mainAxios from "../../axiosService/axiosService";
import { spotifyPlaylistUrl } from "../../appConstant";

const Playlist = () => {
  const { startPlayback, authData } = useContext(AppContext);
  const params = useParams();
  const [playListData, setPlayListData] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getPlaylistData = (id: string) => {
    setLoading(true);
    mainAxios
      .get(spotifyPlaylistUrl + id, {
        headers: { Authorization: "Bearer " + authData },
      })
      .then((res) => {
        const playlistData = {
          id: res.data.id,
          name: res.data.name,
          desc: res.data.description,
          image: res.data.images[0].url,
          context_uri: res.data.uri,
          tracks: res.data.tracks.items.map(({ track }: any) => {
            // console.log("track", track);
            if (track) {
              return {
                id: track.id,
                name: track.name,
                artists: track.artists
                  .map((artist: any) => artist.name)
                  .join(", "),
                duration: track.duration_ms,
                album: track.album.name,
                context_uri: track.album.uri,
                track_uri: track.uri,
                track_number: track.track_number,
              };
            }
          }),
        };
        setPlayListData(playlistData);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (params.id) {
      getPlaylistData(params.id);
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!playListData && !loading) {
    return (
      <Typography color="white" variant="h2" fontWeight={"bold"} component="h2">
        No playlist data found
      </Typography>
    );
  }

  return (
    <PlaylistContainer>
      <PlayListImageContainer>
        <PlayListImage src={playListData.image} />
        <PlaylistInfoContainer>
          <Typography color="white" variant="subtitle1" component="p">
            PLAYLIST
          </Typography>
          <Typography
            color="white"
            variant="h2"
            fontWeight={"bold"}
            component="h2"
          >
            {playListData.name}
          </Typography>

          <IconButton onClick={() => startPlayback(playListData.context_uri)}>
            <PlayIcon style={{ color: "#2fb22f", fontSize: "6rem" }} />
          </IconButton>
        </PlaylistInfoContainer>
      </PlayListImageContainer>
      <Grid container spacing={2}>
        <Grid item xs={1} md={1}>
          <Typography
            color="white"
            variant="subtitle2"
            fontWeight={"bold"}
            component="h5"
          ></Typography>
        </Grid>
        <Grid item xs={4} md={4}>
          <Typography
            color="white"
            variant="subtitle2"
            fontWeight={"bold"}
            component="h5"
          >
            Title
          </Typography>
        </Grid>
        <Grid item xs={4} md={4}>
          <Typography
            color="white"
            variant="subtitle2"
            fontWeight={"bold"}
            component="h5"
          >
            Album
          </Typography>
        </Grid>
        <Grid item xs={3} md={3}>
          <Typography
            color="white"
            variant="subtitle2"
            fontWeight={"bold"}
            component="h5"
          >
            Duration
          </Typography>
        </Grid>
      </Grid>
      {/* tracks*/}

      {playListData.tracks.map(
        (track: any) =>
          track && (
            <TracksList
              key={track.id}
              track={track}
              startPlayback={startPlayback}
            />
          )
      )}
    </PlaylistContainer>
  );
};

export default Playlist;
