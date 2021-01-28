import React, {Component, Fragment} from "react";
import UserItem from "./item";
import UserCreateForm from "./forms/create";
import {Spinner, Row, Col, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {action} from "Action/action";
import {connect} from "react-redux";


class Users extends Component{

    constructor(props){
        super(props);
        this.state={
            items:[],
            modal : false,
        }

    }

    render(){
        let {items,modal} = this.state;
        return(
            <Fragment>
                <Row>
                    <Col lg={6}><h1>Users</h1></Col>
                    <Col lg={6} className={"text-right"}><Button onClick={this.modalToggle}>add user</Button></Col>

                </Row>
                {
                    items.length>0 ?
                        items.map((item)=><UserItem info={item} key={item.id}/>)  :
                        <Spinner />
                }

                {modal ?
                    <Modal isOpen={modal} toggle={this.modalToggle}>
                        <ModalHeader toggle={this.modalToggle}>Add new user</ModalHeader>

                        <ModalBody>

                        </ModalBody>


                    </Modal> : null }
            </Fragment>
        )
    }

    modalToggle = () =>{
        this.props.dispatch({
                type : action.modal.SHOW_MODAL,
                content:  <UserCreateForm fnOk={this.addUser} />,
               buttons: {
                    cancel:"Отмена"
               }
        })
    }

    addUser = (data) =>{
        this.setState({
            items : [{
                username : data.get("username"),
                name : data.get("name"),
            },...this.state.items],

            modal : !this.state.modal
        })
    }



    componentDidMount(){


        fetch("https://jsonplaceholder.typicode.com/users")
            .then(data=>data.json())
            .then(users=>{

                this.setState({
                    items: [...users]
                })
            })
            .catch(error=>console.log(error));

    }




}

const mapStateFromProps = (store)=>{
    return {
        modal: store.modal
    }
}


export default connect(mapStateFromProps)(Users);