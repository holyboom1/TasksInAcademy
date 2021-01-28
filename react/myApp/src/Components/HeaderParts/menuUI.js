import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react"


export default function MenuUI(props) {


    return <Row >
        <Col xs={2}>
            <Link to={"/"}>Home</Link>
        </Col>
        <Col xs={2}>
            <Link to={"/posts"}>News</Link>
        </Col>

        <Col xs={2}>
            <Link to={"/catalog"}>Catalog</Link>
        </Col>
    </Row>
}