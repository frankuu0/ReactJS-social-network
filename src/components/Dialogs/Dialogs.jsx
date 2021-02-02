import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'



const Dialogs = (props) => {

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

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );

    let messagesElements = messages.map( m => <Message message={m.message} id={m.id}/>)

    

    return(
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;