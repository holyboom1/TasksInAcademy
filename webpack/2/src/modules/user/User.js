import modal from "Comp/modal/index"

class User {
    constructor(name){
        this.name = name;
    }

    info(){
        return this.name + modal(1500)+'222222222222222222';
    }
}

export default User;