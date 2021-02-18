let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'random post text', likes: '81'},
                {id: 2, message: 'random post text#2', likes: '73'},
            ],
            newPostText: 'Hi! Write some cool text here =)'
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
            ]
        }
    },
    getState() {
        return this._state;
    },
    _renderEntireTree() {
        // console.log('eee');
    },
    addPost() {
        let newPost = {
            id: Math.floor(Math.random()*1000),
            message: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._renderEntireTree(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._renderEntireTree(this._state);
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    }
}


export default store;