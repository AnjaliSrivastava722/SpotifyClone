export const authEndpoint="https://accounts.spotify.com/authorize";
const clientId="a7b822fb79264c0b8413dd87c848802f";
const redirectUri="http://localhost:3000/";

const scopes=[

    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
// export const getTokenFromResponse=()=>{

// };


 