import styled from "@emotion/styled"
import { Grid, TextField, Typography } from "@mui/material"

export const SpotifyContainer = styled.div`
 width: 100vw;
 height: 100vh;
 display: grid;
 overflow: hidden;
 grid-template-rows: 85vh 15vh;
`

export const SpotifyBodyContainer = styled.div`
 display: grid;
 grid-template-columns: 15vw 85vw;
 width: 100%;
 height: 100%;
 background: linear-gradient(transparent,rgba(0,0,0,1));
 background-color: #181818;
 );
`
export const SpotifyBody = styled.div`
width: 100%;
 height: 100%;
 overflow: auto;
 overflow-x: hidden;
`
export const SpotifyBodyContent = styled.div`
height: 100%;
padding: 20px;
padding-left: 30px;
`

export const SpotifyFooter = styled.div`
background-color: #181818;
z-index: 999;
`
export const SidebarContainer = styled.div`
background-color: black;
color: white;
display: flex;
flex-direction: column;
gap: 20px;

`
export const SpotifyImageSidebar = styled.img`
width: 90%;
margin-top: 20px;
`

export const NavbarContainer = styled.div`
 padding: 20px;
 padding-left: 30px;
`

export const SearchBar = styled(TextField)`
background-color:white;
padding: 5px;
border-radius: 22px;
width: 30%;
min-width: 200px;
    .MuiInputBase-root  {
        &:before, &:after {
            border-bottom: none !important;
        }
        &:hover {
            border-bottom: none !important;
            &:before, &:after {
            border-bottom: none !important;
        }
        }
    }
   
`

export const PlaylistContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    padding-left: 30px;
`

export const PlayListImage = styled.img`
    width: 200px;
`

export const PlayListImageContainer = styled.div`
    display: flex;
    gap: 8px;
`

export const PlaylistTracksContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    /* padding: 10px; */
`

export const PlaylistInfoContainer = styled.div`
  display: flex;
    flex-direction: column;
    gap: 5px;
`

export const FooterContainer = styled.div`
height: 100%;
width: 100%;
display: grid;
grid-template-columns: 1fr 2fr 1fr;
align-items: center;
justify-content: center;
padding: 0 1rem;
border-top: 1px solid #403d3d;
`

export const TrackContainer = styled.div`
display: flex;
gap: 15px;
`
export const TrackImage = styled.img`
width: 80px;
`

export const TrackInfoContainer = styled.div`
display: flex;
gap: 5px;
flex-direction:column;
`

export const TrackPlayerContainer = styled.div`
 width: 100%;
 display:flex;
 gap: 10px;
 justify-content: center;
 align-items: center;
`

export const TrackName = styled(Typography)`
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
  @media (max-width: 850px) {
    white-space: nowrap;
    overflow: hidden;
    max-width: 150px;
    text-overflow: ellipsis;
  }
`
export const TrackArtistName = styled(Typography)`
    color: lightgrey;
    font-size: 0.7rem;
    font-weight: bold;

  @media (max-width: 850px) {
    white-space: nowrap;
    overflow: hidden;
    max-width: 150px;
    text-overflow: ellipsis;
  }
`

export const PlaylistBoxContainer = styled.div`
    display: flex;
    gap: 15px;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 20px;
`
export const PlaylistBox = styled.div`
    background: #172213;
    border-radius: 6px;
    padding: 6px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: fit-content;
    cursor: pointer;
    transition: 0.3s ease-in;
    &:hover {
        background: #304728;
    }
`

export const PlaylistBoxImage = styled.img`
 width: 200px;
`
export const PlaylistBoxName = styled(Typography)`
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
`