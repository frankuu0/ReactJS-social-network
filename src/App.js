import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => <Dialogs messages={props.state.dialogsPage.messages} dialogs={props.state.dialogsPage.dialogs}/> }/>
          <Route path='/profile' render={ () => <Profile posts={props.state.profilePage.posts} addPost={props.addPost} newPostText={props.state.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/> }/>
          <Route path='/music' render={ () => <Music/> }/>
          <Route path='/news' render={ () => <News/> }/>
          <Route path='/settings' render={ () => <Settings/> }/>
        </div>

      </div>
      </BrowserRouter>
    );
}

export default App;

// newPostText={props.state.profilePage.newPostText}/>