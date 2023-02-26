import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import { millisToMinutesAndSeconds } from "../../util";
import PlayIcon from "@mui/icons-material/PlayCircle";

type TracksListType = {
  track: any;
  startPlayback: (id: string, trackId?: string | undefined) => void;
};

const TracksList: React.FC<TracksListType> = ({ track, startPlayback }) => {
  return (
    <Grid alignItems={"center"} container spacing={2}>
      <Grid item xs={1} md={1}>
        <IconButton
          onClick={() => startPlayback(track.context_uri, track.track_uri)}
        >
          <PlayIcon style={{ color: "#2fb22f", fontSize: "2rem" }} />
        </IconButton>
      </Grid>
      <Grid item xs={4} md={4}>
        <Typography
          color="white"
          variant="subtitle2"
          fontWeight={"bold"}
          component="h5"
        >
          {track?.name ? track.name : ""}
        </Typography>
      </Grid>
      <Grid item xs={4} md={4}>
        <Typography
          color="white"
          variant="subtitle2"
          fontWeight={"bold"}
          component="h5"
        >
          {track?.album ? track.album : ""}
        </Typography>
      </Grid>
      <Grid item xs={3} md={3}>
        <Typography
          color="white"
          variant="subtitle2"
          fontWeight={"bold"}
          component="h5"
        >
          {track?.duration ? millisToMinutesAndSeconds(track.duration) : ""}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TracksList;
