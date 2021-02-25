import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";




let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'random post text', likes: '81'},
                {id: 2, message: 'random post text#2', likes: '73'},
            ],
            newPostText: ''
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
    
    subscribe(observer) {
        this._renderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);


        this._renderEntireTree(this._state);

        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: Math.floor(Math.random()*1000),
        //         message: this._state.profilePage.newPostText,
        //         likes: 0
        //     }
        //     this._state.profilePage.posts.push(newPost);
        //     let refresh  = document.getElementById('typePostText');
        //     refresh.value="";
        //     // this._state.profilePage.newPostText = '';   Обновление состояния теперь происходит локально в addPost внутри MyPosts
        //     this._renderEntireTree(this._state);
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText;
        //     this._renderEntireTree(this._state);
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageBody = action.body;
        //     this._renderEntireTree(this._state);
        // } else if (action.type === SEND_MESSAGE) {
        //     let newMessage = this._state.dialogsPage.newMessageBody;
        //     let refresh = document.getElementById('typeMessageText');
        //     refresh.value = '';
        //     this._state.dialogsPage.messages.push({id: 6, message: newMessage});
        //     this._renderEntireTree(this._state);
        // }
    }
}


window.store = store;
export default store;




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