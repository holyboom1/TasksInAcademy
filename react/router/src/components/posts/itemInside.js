import React from "react";
import {
    Row, Col,
    Card, CardBody,
    CardTitle, Badge, Button, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader, Spinner
} from 'reactstrap';

import {Link} from "react-router-dom";
import PostItem from "./item";


export default class PostInside extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal : false,
            item:null,
            comments: null
        }

    }

    render(){
        let {item} = this.state;



        return  <Card>
            {
                item !=null ?
                    <CardBody >
                        <CardTitle tag="div">
                            <Row>
                                <Col lg={8}>
                                    #{item.id} : {item.title}
                                </Col>
                                <Col lg={12}>
                                    {item.body}
                                </Col>
                                <Col lg={12}>
                                    <Link to={"/posts"}><Button color={'success'}>К списку</Button></Link>
                                </Col>
                            </Row>
                        </CardTitle>
                    </CardBody> : <Spinner />
            }


                { this.state.comments!=null ?
                    this.state.comments.map((item)=>
                    <CardBody key={item.id}>
                        <Row>
                            <Col> {item.id}</Col>
                            <Col lg={8}>{item.name}</Col>
                        </Row>
                        <Row>
                            <Col lg={12}>{item.body}</Col>
                        </Row>
                    </CardBody>)
                    : <Spinner/> }


        </Card>
    }



    componentDidMount() {
        let {id} = this.props.match.params;
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((data) => data.json())
            .then((item) => this.setState({
                item: item
            }))

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((data) => data.json())
            .then((item) => item.filter((item) => {
                    if (item.postId === this.state.item.id) {
                        return true
                    } else {
                        return false
                    }
                }
            ))
            .then(items => this.setState({comments: items}))


    }}