import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/state';



const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );

    let messagesElements = props.messages.map( m => <Message message={m.message} id={m.id}/>);

    let newMessageBody = props.newMessageBody;

    let newMessageElement = React.createRef();
    let onSendMessageClick = () => {
        // let text = newMessageElement.current.value;
        props.dispatch(sendMessageActionCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageActionCreator(body));
    }

    return(
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea cols="80" rows="3" ref={newMessageElement} onChange={onNewMessageChange} value={newMessageBody} id='typeMessageText'></textarea>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;