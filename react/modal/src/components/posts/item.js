import React from "react";
import {action} from "Action/action";
import {
    Row, Col,
    Card, CardBody,
    CardTitle, Badge, Button, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

import {Link} from "react-router-dom";

import { FaTrashAlt, FaEdit, FaInfo } from "react-icons/fa";
import {connect} from "react-redux";

class PostItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal : false,
            user:null
        }

    }

    render(){
        let {info} = this.props;
        let {modal,user} = this.state;
        return  <Card>
            <CardBody>
                <CardTitle tag="div">
                    <Row>
                        <Col lg={8}>
                            #{info.id}
                            <Link to={`/posts/id/${info.id}`}>{info.title}</Link>
                        </Col>
                        {/*<Col lg={8}>*/}
                        {/*    {*/}
                        {/*        user!=null ? <Badge color={"success"}>{user.name} {user.username}</Badge> : null*/}
                        {/*    }*/}
                        {/*</Col>*/}
                        {/*<Col lg={4} className={"text-right"}>*/}
                        {/*    {*/}
                        {/*        info.completed ? <Badge color={"success"}*/}
                        {/*                                onClick={()=>*/}
                        {/*                                    this.props.message(info.id,"Хотите изменить статус",this.props.status)}>*/}
                        {/*                                Ok*/}
                        {/*                        </Badge> :*/}
                        {/*            <Badge color={"danger"}*/}
                        {/*                   onClick={()=> this.props.message(info.id,"Хотите изменить статус",this.props.status)}>undone</Badge>*/}
                        {/*    }*/}
                        {/*</Col>*/}
                    </Row>



                    <div>
                        <ButtonGroup>
                            <Button color={'primary'} onClick={()=>this.props.dispatch({
                                type:action.modal.SHOW_MODAL,
                                content:`Хотите удалить запись с id ${info.id}`,
                                buttons :{
                                    ok : "Удалить",
                                    cancel : "Отменить удаление"
                                },
                                fnOk:()=>this.remove(info.id)

                            })}><FaTrashAlt /></Button>
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

    remove = (id) =>{
        this.props.dispatch({
            type:"REMOVE_POST",
            id : id
        })

        this.props.dispatch({
            type:action.modal.HIDE_MODAL,
        })

        this.props.dispatch({
            type:action.message.SHOW_MESSAGE,
            text : `Запись с id ${id} удалена`
        })

        setTimeout(()=>{
            this.props.dispatch({
                type:action.message.HIDE_MESSAGE,
            })
        },4000)
    }

    componentDidMount() {
        // fetch(`https://jsonplaceholder.typicode.com/users/${this.props.info.userId}`)
        //     .then(data=>data.json())
        //     .then(user=>this.setState({
        //         user:user
        //     }))
    }
}

const mapStateFromProps = (store)=>{


    return {
        posts: store.posts
    }
}


export default connect(mapStateFromProps)(PostItem);