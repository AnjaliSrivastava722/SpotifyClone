//initial state
//object
export const initialState={

    user: null,
    playlists: [],
    playing: false,
    item: null,
    token:null,

};

const reducer=(state, action)=>{

    console.log(action);
    //debugging tool

    //when we login we dispatch an action at that point 

    switch(action.type)
    {

        case "SET_USER":
            return{
                ...state,
                user:action.user,
            }

        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }

            default:
                return state;

    }
}

export default reducer;