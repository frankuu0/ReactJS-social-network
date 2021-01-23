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

    let dialogsData = [
        {id: 1, name: 'Mike'},
        {id: 2, name: 'Anny'},
        {id: 3, name: 'Lisa'},
        {id: 4, name: 'John'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi?'},
        {id: 3, message: 'Who said hi?'},
        {id: 4, message: 'Im said hi.'},
    ];

    return(
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
                <Message message={messagesData[3].message} id={messagesData[3].id}/>
            </div>
        </div>
    )
}

export default Dialogs;