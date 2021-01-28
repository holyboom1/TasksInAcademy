import {combineReducers} from "redux"
import message from "./message";
import modal from "./modal";
import posts from "./posts";

//import users from "./users";
//import modal from "./modal";

const reducers = combineReducers({
    message:message, //message,posts
    posts:posts,
    modal:modal,
    //users:users,
    //users:users,
})

export {reducers}