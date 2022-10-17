import profileReducer from './reducer-profile'
import dialogsReducer from './reducer-dialogs'
import sidebarReducer from './reducer-sidebar'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "This is my first post.", likesCount: 12 },
        { id: 1, message: "Second post. Hello everybody", likesCount: 11 },
      ],
      newPostText: "it-kamasutra",
    },
    dialogsPage: {
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
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("State has changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) { //{ type: 'ADD-POST' }
    profileReducer(this._state.profilePage, action)
    dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state);
  },

//****///////////////**** */
  xd_dispatch(action) { //{ type: 'ADD-POST' }
    //debugger
    //********* POST: ADD_POST ********/
    if (action.type === ADD_POST) {
      const newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
  
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
      return 1;
    }
    //*********POST: UPDATE_NEW_POST_TEXT ********/
    if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
      return 1;
    }
    //*********MESSAGE: UPDATE_NEW_MESSAGE_BODY ********/
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      //console.log(action.messageBody)
      this._state.dialogsPage.newMessageBody = action.messageBody;
      this._callSubscriber(this._state);
      return 1;
    }
    //*********MESSAGE: SEND_MESSAGE ********/
    if (action.type === SEND_MESSAGE) {
      const messageBody = this._state.dialogsPage.newMessageBody
      this._state.dialogsPage.messages.push({ id: 5, message: messageBody })
      /* ************* messages: [
        { id: 1, message: "Hi !" }, */
      this._state.dialogsPage.newMessageBody = '';
      this._callSubscriber(this._state);
      return 1;
    }
    return 0;
  },
};





export default store;
