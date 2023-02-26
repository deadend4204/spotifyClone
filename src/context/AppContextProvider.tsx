import React, { ReactNode, createContext, useState } from "react";
import { IAuthContext } from "./type";
import {
  authSpotifyUrl,
  clientId,
  redirectUrl,
  scope,
  spotifySearchUrl,
  spotifyStartSong,
  spotifyTransferPlayback,
  spotifyUserDataUrl,
} from "../appConstant";
import mainAxios from "../axiosService/axiosService";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext<IAuthContext>(undefined!);
const { Provider } = AppContext;

type AppContextProviderType = {
  children: ReactNode;
};

const AppContextProvider: React.FC<AppContextProviderType> = (props) => {
  const [authState, setAuthState] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [device_id, setDevice_id] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>(
    "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [appLoading, setAppLoading] = useState<boolean>(true);

  const [searchData, setSearchData] = useState<null | any[]>(null);
  const navigate = useNavigate();
  const onConnectSpotify = () => {
    window.location.href = `${authSpotifyUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  const onLogin = (token: string) => {
    localStorage.setItem("token", token);
    setAuthState(token);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    setAuthState("");
  };

  const getUserData = () => {
    mainAxios
      .get(spotifyUserDataUrl, {
        headers: { Authorization: "Bearer " + authState },
      })
      .then((res) => {
        if (res.data?.display_name) {
          setDisplayName(res.data.display_name);
        }
        if (res.data?.images.length) {
          setProfileImage(res.data.images[0].url);
        }
      });
  };
  const getSearchData = (search: string) => {
    setAppLoading(true);
    mainAxios
      .get(spotifySearchUrl + `&q=${search}&type=track`, {
        headers: { Authorization: "Bearer " + authState },
      })
      .then((res) => {
        if (res.data) {
          if (res.data.tracks) {
            navigate("/search");
            const tracks = res.data.tracks.items.map((track: any) => {
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
            });
            setSearchData(tracks);
          }
        }
      })
      .finally(() => {
        setAppLoading(false);
      });
  };

  const transferPlaback = (device_id: string) => {
    mainAxios
      .put(
        spotifyTransferPlayback,
        {
          device_ids: [device_id],
          play: false,
        },
        {
          headers: { Authorization: "Bearer " + authState },
        }
      )
      .then((res) => {
        // console.log("res transfer", res.data);
      })
      .catch((err) => console.log("err trabfser", err));
  };

  const startPlayback = (context_uri: string, track_uri?: string) => {
    const data: any = {
      context_uri: context_uri,
      position_ms: 0,
    };
    if (track_uri) {
      data.offset = { uri: track_uri };
    }
    mainAxios
      .put(spotifyStartSong + `?device_id=${device_id}`, data, {
        headers: { Authorization: "Bearer " + authState },
      })
      .then((res: any) => {
        if (res.response.data.error.status === 403) {
          alert(
            res.response.data.error.status.message || "Premium is required"
          );
        }
      })
      .catch((err) => console.log("err trabfser", err));
  };

  const checkLocalStorage = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthState(token);
      setLoading(false);
      return;
    }
    setAuthState("");
    setLoading(false);
  };

  React.useEffect(() => {
    checkLocalStorage();
  }, []);

  return (
    <Provider
      value={{
        authData: authState,
        authStateLoading: loading,
        setAuthState,
        onLogin,
        onConnectSpotify,
        getUserData,
        profileImage,
        displayName,
        transferPlaback,
        startPlayback,
        getSearchData,
        setDevice_id,
        searchData,
        setSearchData,
        appLoading,
        onLogout,
      }}
      {...props}
    />
  );
};

export default AppContextProvider;
