import React from "react";
import {  Row, Col , Button, ButtonGroup } from 'reactstrap';


export default function Sort(props) {
    return <Row className={"sort"}>
            <Col lg={12}>
                Сортировка : 
                <ButtonGroup>
                    <Button color={'success'}>done</Button>
                    <Button color={'danger'}>undone</Button>
                </ButtonGroup>
            </Col>
        </Row>
}