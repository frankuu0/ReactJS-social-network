const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'random post text', likes: '81'},
                {id: 2, message: 'random post text#2', likes: '73'},
            ],
            // newPostText: 'ggg'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Mike'},
                {id: 2, name: 'Anny'},
                {id: 3, name: 'Lisa'},
                {id: 4, name: 'John'},
            ],
            messages:  [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi?'},
                {id: 3, message: 'Who said hi?'},
                {id: 4, message: 'Im said hi.'},
            ],
            newMessageBody: ""
        }
    },
    getState() {
        return this._state;
    },
    _renderEntireTree() {
        // console.log('eee');
    },
    // addPost() {
    //     let newPost = {
    //         id: Math.floor(Math.random()*1000),
    //         message: this._state.profilePage.newPostText,
    //         likes: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._renderEntireTree(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._renderEntireTree(this._state);
    // },
    subscribe(observer) {
        this._renderEntireTree = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: Math.floor(Math.random()*1000),
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost);
            let refresh  = document.getElementById('typePostText');
            refresh.value="";
            // this._state.profilePage.newPostText = '';   Обновление состояния теперь происходит локально в addPost внутри MyPosts
            this._renderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._renderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._renderEntireTree(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = this._state.dialogsPage.newMessageBody;
            let refresh = document.getElementById('typeMessageText');
            refresh.value = '';
            this._state.dialogsPage.messages.push({id: 6, message: newMessage});
            this._renderEntireTree(this._state);
        }
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
  export const sendMessageActionCreator = () => {
    return {
      type: SEND_MESSAGE
    }
  }
export const updateNewMessageActionCreator = (body) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
  }
window.store = store;
export default store;