import React, {Component} from "react";
import {Spinner, Row, Col, Container} from "reactstrap";

export default function RenderItems(props){
    let item=props.item
    console.log(item)
    return <Container >
        <Row>
            <Col>
                Name : {item.name}
            </Col>
        </Row>
        <Row>
            <Col>
                username : {item.username}
            </Col>
        </Row>
        <Row>
            <Col>
                email : {item.email}
            </Col>
        </Row>
        <Row>
            address :
            <Col>

                city: {item.address.city},
                street: {item.address.street},
                suite: {item.address.suite},
                zipcode: {item.address.zipcode}
            </Col>
        </Row>
        <Row>
            <Col>
                phone : {item.phone}
            </Col>
        </Row>
    </Container>
}