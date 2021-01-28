import "./less/style.less";
import User from "./modules/user/User";
import {some2,some1} from "./modules/test";

let user= new User("itstep")
let x = 20;
console.log(`${x+10} hello`);
console.log(user.info(), some2,some1);