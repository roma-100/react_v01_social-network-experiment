const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
  dialogs: [
    { id: 1, name: "Josefina" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Roman" },
    { id: 4, name: "Greg" },
    { id: 5, name: "Nadya" },
    { id: 6, name: "Masha" },
  ],
  messages: [
    { id: 1, message: "Hi !" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Sheat happens" },
  ]
}

const dialogsReducer = (state=initialState, action) => {
  //debugger
      //*********MESSAGE: SEND_MESSAGE ********/
      if (action.type === SEND_MESSAGE) {
        const stateCopy = {
          ...state,
          messages: [
            ...state.messages, 
            { id: 4, message: action.newMessage }
          ]
        }
        return stateCopy
      }

    return state
}

export const sendMessageCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage});


export default dialogsReducer