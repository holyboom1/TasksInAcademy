export default (state = {
    toggle: false,
    text : null
} , action) => {
    switch (action.type) {
        case  "TOGGLE" : {
            return Object.assign({},{
                toggle: !state.toggle,
                text : action.text,
            })
        }

        case  "HIDE" : {
            return Object.assign({},{
                toggle: false,
                text : null,
            })
        }

        default : {
            return  state
        }
    }


}