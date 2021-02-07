import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'



const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );

    let messagesElements = props.messages.map( m => <Message message={m.message} id={m.id}/>);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return(
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea cols="80" rows="3" ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;