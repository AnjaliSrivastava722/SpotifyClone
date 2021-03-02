
import React , {useEffect,useState} from 'react'
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import {useDataLayerValue} from "./DataLayer";
//Global instance of Spotify Web Api
const spotify=new SpotifyWebApi();

//token -primary 


function App(){
  
  const [{user, token}, dispatch] =useDataLayerValue();//user-object??

  useEffect(() => {
     const hash = getTokenFromUrl();
     
     //Remove the acess token from URL
     window.location.hash = ""
     const _token =  hash.access_token ; 
     if(_token)
     {
        dispatch({
          type: "SET_TOKEN",
          token:_token,
        })

      
      //giving access token generated to the spotify api
      spotify.setAccessToken(_token);
      //communicating between react and spotify api
        spotify.getMe().then((user)=>{
          console.log("XXX",user);

          dispatch(
            {
              type: "SET_USER",
              user: user,
            }
          )
        }

        );

     }

     console.log('I HAVE A TOKEN>>>>>' , token);
  },[])

  console.log(user);
  console.log("the token",token);
  return (
    <div className="app">
      {
        token 
        ?(<Player spotify={spotify}/>)
        :( 
        <div className = "login">
        <Login />
        </div>
        ) 
      }
      
      
    </div>
  );
}

export default App;
