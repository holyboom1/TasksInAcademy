import React, {Component} from "react";
import {Spinner, Row, Col, Container} from "reactstrap";
import RenderItems from "./userItem";

export default class Users extends Component{

    constructor(props){
        super(props);
        this.state = {
            users:null
        }

    }

    render(){

        return(

        this.state.users!=null ? this.state.users.map((item)=><RenderItems item={item} key={item.id}/>) : <Spinner/>


        )

    }

    componentDidMount(){

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(data=>data.json())
            .then(users=>{
                this.setState(
                    {
                        users: users
                    }
                )
            })
            .catch(error=>console.log(error));

    }




}