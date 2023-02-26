export const clientId = `194ace5ac8094b88873ad7a41137e808`;
export const redirectUrl = `http://localhost:3000/login`;
export const authSpotifyUrl = `https://accounts.spotify.com/authorize`;
export const spotifyUserDataUrl = `https://api.spotify.com/v1/me`;
export const spotifyTransferPlayback = "https://api.spotify.com/v1/me/player";
export const spotifyStartSong = "https://api.spotify.com/v1/me/player/play";
export const spotifyCurrentPlayingUrl = `https://api.spotify.com/v1/me/player/currently-playing`;
export const spotifyPlaylistUrl = `https://api.spotify.com/v1/playlists/`;
export const spotifyAllPlaylistUrl = `https://api.spotify.com/v1/me/playlists`;
export const spotifySearchUrl = `https://api.spotify.com/v1/search?include_external=audio`;

export const scope = [
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-playback-position",
    "user-top-read",
    "user-read-recently-played",
    "streaming",
    "app-remote-control"
];