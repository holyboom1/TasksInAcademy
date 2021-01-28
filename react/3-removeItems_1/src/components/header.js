import React from "react";
import {  Row, Col , Button, ButtonGroup } from 'reactstrap';


export default function Header(props) {
    return <Row className={"header"}>
            <Col lg={3}>
                {props.count}
            </Col>
            <Col lg={9}>
                <ButtonGroup>
                    <Button color={'success'}>Добавить</Button>
                    <Button color={'danger'}>Test</Button>
                </ButtonGroup>
            </Col>
        </Row>
}