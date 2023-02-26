import styled from "@emotion/styled"
import { Button } from "@mui/material"

export const Container = styled.div`
background: #000000;;
width:100%;
height: 100vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 50px;
`

export const SpotifyImageContainer = styled.div`
display: flex;
justify-content: center;
`

export const SpotifyImage = styled.img`
    width: 50%;
`

export const LoginButton = styled(Button)`
 background-color: white;
 color: black;
 border-radius: 6px;
 width: 200px;
 text-transform: capitalize;
 &:hover {
     background-color: rgb(26 178 107);
 }
`