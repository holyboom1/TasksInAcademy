import React from "react";
import {
    Card, CardBody,
    CardTitle, Badge, Button, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

import { FaTrashAlt, FaEdit, FaInfo } from "react-icons/fa";

export default class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal : false,
            user:null
            //info: this.props.info
        }



        //this.modalToggle = this.modalToggle.bind(this);
    }

    render(){
        let {info} = this.props;
        let {modal,user} = this.state;
        return  <Card>
            <CardBody>
                <CardTitle tag="h5">
                    #{info.id} {info.title}  {new Date(info.date_create).toLocaleString()}
                    {
                        info.completed ? <Badge color={"success"}>Ok</Badge> : <Badge color={"danger"}>:(</Badge>
                    }
                    {
                        user!=null ? <Badge color={"success"}>{user.name} {user.username}</Badge> : null
                    }
                    <div>
                        <ButtonGroup>
                            <Button color={'primary'} onClick={this.remove}><FaTrashAlt /></Button>
                            <Button color={'success'}><FaEdit /></Button>
                            <Button color={'danger'} onClick={this.modalToggle}><FaInfo   /></Button>
                        </ButtonGroup>

                    </div>
                </CardTitle>
            </CardBody>

            {modal ?
            <Modal isOpen={modal} toggle={this.modalToggle}>
                <ModalHeader toggle={this.modalToggle}>User Info  #{info.id}</ModalHeader>
                <ModalBody>
                    <p># {user.id}</p>
                    <p> {user.name} {user.username}</p>
                    <p> {user.email}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.modalToggle}>Cancel</Button>
                </ModalFooter>
            </Modal> : null }
        </Card>
    }

    modalToggle = () => {
        this.setState({
            modal : !this.state.modal
        })

    }

    remove = () =>{
        this.props.remove(this.props.info.id);
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.info.userId}`)
            .then(data=>data.json())
            .then(user=>this.setState({
                user:user
            }))
    }
}