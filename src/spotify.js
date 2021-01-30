export const authEndpoint="https://accounts.spotify.com/authorize";
const clientId="a7b822fb79264c0b8413dd87c848802f";
const redirectUri="http://localhost:3000/";

const scopes=[

];

export const getTokenFromResponse=()=>{

};


export const accessUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}`;