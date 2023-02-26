import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContextProvider";
import {
  FooterContainer,
  TrackArtistName,
  TrackContainer,
  TrackImage,
  TrackInfoContainer,
  TrackName,
  TrackPlayerContainer,
} from "../styled";
import { IconButton, Typography } from "@mui/material";
import PlayIcon from "@mui/icons-material/PlayCircle";
import PauseIcon from "@mui/icons-material/PauseCircle";
import NextIcon from "@mui/icons-material/SkipNext";
import PrevIcon from "@mui/icons-material/SkipPrevious";

const track = {
  name: "",
  album: {
    images: [{ url: "" }],
  },
  artists: [{ name: "" }],
};

const Footer = () => {
  const { authData, setDevice_id } = useContext(AppContext);
  const [is_paused, setPaused] = useState(false);
  const [player, setPlayer] = useState<any>(undefined);
  const [current_track, setTrack] = useState<null | typeof track>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    (window as any).onSpotifyWebPlaybackSDKReady = () => {
      const player = new (window as any).Spotify.Player({
        name: "dev_test",
        getOAuthToken: (cb: any) => {
          cb(authData);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }: any) => {
        setDevice_id(device_id);
      });

      player.addListener("not_ready", ({ device_id }: any) => {
        // console.log(" offline", device_id);
      });

      player.addListener("player_state_changed", (state: any) => {
        if (!state) {
          return;
        }
        console.log("state track", state);
        setTrack(state.track_window.current_track);
        setPaused(state.paused);
      });
      player.connect();
    };
  }, []);

  return (
    <FooterContainer>
      {current_track && (
        <>
          <TrackContainer>
            <TrackImage
              src={current_track.album.images[0].url}
              alt="current track"
            />
            <TrackInfoContainer>
              <TrackName>{current_track.name}</TrackName>
              <TrackArtistName>
                {current_track.artists
                  .map((artist: any) => artist.name)
                  .join(", ")}
              </TrackArtistName>
            </TrackInfoContainer>
          </TrackContainer>
          <TrackPlayerContainer>
            <IconButton
              onClick={() => {
                player && player.previousTrack();
              }}
            >
              <PrevIcon style={{ color: "white", fontSize: "2rem" }} />
            </IconButton>

            <IconButton
              onClick={() => {
                player && player.togglePlay();
              }}
            >
              {is_paused ? (
                <PlayIcon style={{ color: "white", fontSize: "2rem" }} />
              ) : (
                <PauseIcon style={{ color: "white", fontSize: "2rem" }} />
              )}
            </IconButton>

            <IconButton
              onClick={() => {
                player && player.nextTrack();
              }}
            >
              <NextIcon style={{ color: "white", fontSize: "2rem" }} />
            </IconButton>
          </TrackPlayerContainer>
        </>
      )}
      {/* <WebPlayback /> */}
    </FooterContainer>
  );
};

export default Footer;
