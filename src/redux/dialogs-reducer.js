const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let newMessage = state.newMessageBody;
            let refresh = document.getElementById('typeMessageText');
            refresh.value = '';
            state.messages.push({id: 6, message: newMessage});
            return state;
        default:
            return state;
    }

    // if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //     state.newMessageBody = action.body;
    // } else if (action.type === SEND_MESSAGE) {
    //     let newMessage = state.newMessageBody;
    //     let refresh = document.getElementById('typeMessageText');
    //     refresh.value = '';
    //     state.messages.push({id: 6, message: newMessage});
    // }

    // return state;
}

export const sendMessageActionCreator = () => {
    return {
      type: SEND_MESSAGE
    }
  }
export const updateNewMessageActionCreator = (body) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
  }

export default dialogsReducer;