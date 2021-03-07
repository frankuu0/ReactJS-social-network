import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {
debugger;
    

    // let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );

    // let messagesElements = props.messages.map( m => <Message message={m.message} id={m.id}/>);

    // let newMessageBody = props.newMessageBody;

    // let newMessageElement = React.createRef();
    let onSendMessageClick = () => {
        // let text = newMessageElement.current.value;
        props.dispatch(sendMessageActionCreator());
    }
    let onNewMessageChange = (body) => {
        // let body = e.target.value;
        props.dispatch(updateNewMessageActionCreator(body));
    }

    return(
        <Dialogs updateNewMessage={ onNewMessageChange } sendMessage={ onSendMessageClick } store={props.store} dialogs={props.dialogs} messages={props.messages} />
    )
}

export default DialogsContainer;