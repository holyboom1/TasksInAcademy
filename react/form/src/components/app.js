import React, {Component} from "react";
import {Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Spinner} from "reactstrap";
import Header from "Comp/header";
import Home from "Comp/home";
import Posts from "Comp/posts";
import Users from "Comp/users";
import Page404 from "Comp/404";
import PostInside from "Comp/posts/itemInside";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            items:null,
        }

    }

    render(){


        let {} = this.state;


        return(
            <Router>
                <Container>
                    <Header />

                    <Switch>
                        <Route exact path={"/"} component = {Home} />
                        <Route exact path={"/posts"} component = {()=><Posts title={333333}/>} />
                        <Route exact path={"/posts/id/:id"} component = {PostInside} />
                        <Route exact path={"/users"} component = {Users} />
                        <Route component = {Page404} />

                    </Switch>


                </Container>
            </Router>
        )
    }

    componentDidMount(){
        console.log("------componentDidMount");

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(data=>data.json())
            .then(todos=>{
                    // let date =  this.randomDate(todos)
                    // this.setState({
                    //     items: [... date],
                    //     itemsCount : todos.length,
                    //     sortedItems:[... date],
                    // })
                })
            .catch(error=>console.log(error));

    }




}