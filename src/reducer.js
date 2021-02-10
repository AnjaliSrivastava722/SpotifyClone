//initial state
//object
export const initialState={

    user: null,
    playlists: [],
    playing: false,
    item: null,

};

const reducer=(state, action)=>{

    console.log(action);
    //debugging tool

    //when we login we dispatch an action at that point 

    switch(action.type)
    {

    }
}

export default reducer;