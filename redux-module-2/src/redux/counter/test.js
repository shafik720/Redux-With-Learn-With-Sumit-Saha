const initialState = []; // array of post objects

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "posts/add":
            return state.push(action.payload); // assuming we are getting post object in action.payload

        default:
            return state;
    }
}