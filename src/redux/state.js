let renderEntireTree = () => {
    // console.log('eee');
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: Math.floor(Math.random()*1000),
        message: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;