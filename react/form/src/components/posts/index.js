import React, {Component} from "react";
import PostItem from "./item";
import {Spinner} from "reactstrap";

export default class Posts extends Component{

    constructor(props){
        super(props);
        this.state={
            items:[]
        }

    }

    render(){
        let {items} = this.state;
        return(
            <div className={"dddddd22222"}>
                <h1>Posts</h1>
                {
                    items.length>0 ?
                        items.map((item)=><PostItem info={item} key={item.id}/>)  :
                        <Spinner />
                }
            </div>
        )
    }

    componentDidMount(){


        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(data=>data.json())
            .then(posts=>{

                this.setState({
                    items: [...posts]
                })
            })
            .catch(error=>console.log(error));

    }




}