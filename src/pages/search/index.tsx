import React, { useContext } from "react";
import { SpotifyBodyContent } from "../../components/styled";

import { AppContext } from "../../context/AppContextProvider";
import { Typography } from "@mui/material";

import TracksList from "../../components/tracksList";
import Loader from "../../components/loader";

const Search = () => {
  const { searchData, startPlayback, appLoading } = useContext(AppContext);

  if (appLoading) {
    return <Loader />;
  }

  return (
    <SpotifyBodyContent>
      {!searchData ? (
        <></>
      ) : (
        <>
          <Typography
            color="white"
            variant="h3"
            fontWeight={"bold"}
            component="h3"
            style={{ marginBottom: 20 }}
          >
            Your Search Results
          </Typography>
          {searchData.map((track) => (
            <TracksList
              key={track.id}
              track={track}
              startPlayback={startPlayback}
            />
          ))}
        </>
      )}
    </SpotifyBodyContent>
  );
};

export default Search;
