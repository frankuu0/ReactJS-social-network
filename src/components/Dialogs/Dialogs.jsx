import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id; 

    return(
        <div className={s.dialog}><NavLink to={path}>{props.name}</NavLink></div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return(
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                <DialogItem name='Mike' id='1'/>
                <DialogItem name='Anny' id='2'/>
                <DialogItem name='Lisa' id='3'/>
                <DialogItem name='John' id='4'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='how are you?'/>
                <Message message='aoaoaoa mmmmm'/>
                <Message message='hmhm'/>
            </div>
        </div>
    )
}

export default Dialogs;