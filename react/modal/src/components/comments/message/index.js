import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Message extends React.Component {

    constructor(props) {
        super(props);


    }

    render(){
        return  <div className={"message"}>
            {this.props.message.text}
            {this.props.active}
        </div>
    }

}
Message.defaultProps = {
    active : true
}

Message.propTypes = {
    active : PropTypes.bool.isRequired
}



const mapStateFromProps = (store)=>{

    return {
        message: store.message
    }
}


export default connect(mapStateFromProps)(Message);
