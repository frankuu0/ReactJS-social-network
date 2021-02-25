const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: Math.floor(Math.random()*1000),
                message: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost);
            let refresh  = document.getElementById('typePostText');
            refresh.value="";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }    
}

export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  }
export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT, newText: text
    }
  }

export default profileReducer;
