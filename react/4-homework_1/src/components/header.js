import React from "react";
import {  Row, Col , Button, ButtonGroup } from 'reactstrap';
import DatePicker  from "react-datepicker";


export default class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            start: new Date(),
            end : new Date()
        }
    }

    render(){
        console.log(this.state.start.getTime(),"-----------------", this.state.end.getTime())
        return <Row className={"header"}>
            <Col lg={3}>
                {this.props.count}
                {this.props.sorted}
            </Col>
            <Col lg={6}>
                <ButtonGroup>
                    <Button color={'success'}>Добавить</Button>
                    <Button color={'danger'}>Test</Button>
                </ButtonGroup>
            </Col>

            <Col lg={3}>
                <>
                    <DatePicker selected={this.state.start}
                                startDate={this.state.start}
                                endDate={this.state.end}
                                onChange={date => this.changeDate(date,1)}
                                selectsStart
                    />
                    <DatePicker selected={this.state.end}
                                startDate={this.state.start}
                                endDate={this.state.end}
                                minDate={this.state.start}
                                selectsEnd
                                onChange={date => this.changeDate(date)}/>

                </>
            </Col>
        </Row>
    }


    changeDate = (date, type) =>{
        if(type==1) {
            this.setState({
                start : date
            })
        }
        else {
            this.setState({
                end : date
            })
        }
    }


}