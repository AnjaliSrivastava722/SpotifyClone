
import React , {useEffect,useState} from 'react'
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
//Global instance of Spotify Web Api
const spotify=new SpotifyWebApi();

//token -primary 


function App(){
  const [token , setToken] = useState(null);

  useEffect(() => {
     const hash = getTokenFromUrl();
     
     //Remove the acess token from URL
     window.location.hash = ""
     const _token =  hash.access_token ;
     if(_token)
     {
      setToken(_token);
      //giving access token generated to the spotify api
      spotify.setAccessToken(_token);
      //communicating between react and spotify api
        spotify.getMe().then((user)=>{
          console.log("XXX",user);
        }

        );

     }

     console.log('I HAVE A TOKEN>>>>>' , token);
  },[])
  return (
    <div className="app">
      {
        token 
        ?(<Player />)
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
