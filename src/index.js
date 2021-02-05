import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
    {id: 1, message: 'random post text', likes: '81'},
    {id: 2, message: 'random post text#2', likes: '73'},
  ];

  let dialogs = [
    {id: 1, name: 'Mike'},
    {id: 2, name: 'Anny'},
    {id: 3, name: 'Lisa'},
    {id: 4, name: 'John'},
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hi?'},
    {id: 3, message: 'Who said hi?'},
    {id: 4, message: 'Im said hi.'},
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
