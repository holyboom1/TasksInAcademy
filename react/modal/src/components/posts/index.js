import React, {Component, Suspense, Profiler} from "react";
const  PostItem = React.lazy(()=>import(/* webpackChunkName: "Posts" */ "./item"));

//import PostItem from "./item";
import {Spinner} from "reactstrap";
import {connect} from "react-redux";

class Posts extends Component{

    constructor(props){
        super(props);


    }

    render(){
        let {posts} = this.props;
        return(
            <div className={"dddddd22222"}>
                <Profiler id={"posts"} onRender={this.log}>
                <h1>Posts</h1>
                <Suspense fallback={<Spinner />}>
                    {
                        posts.length>0 ?
                            posts.map((item)=><PostItem info={item} key={item.id}/>)  :
                            <Spinner />
                    }
                </Suspense>
                </Profiler>
            </div>
        )
    }

    log = (id,phase,time, cache)=>{
        console.log(id,phase,time,cache)
    }

    componentDidMount(){

        if(this.props.posts.length==0) {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(data=>data.json())
                .then(posts=>{
                    this.props.dispatch({
                        type : "ADD_LIST",
                        data : [...posts]
                    })


                })
                .catch(error=>console.log(error));
        }


    }




}

const mapStateFromProps = (store)=>{


    return {
        posts: store.posts
    }
}


export default connect(mapStateFromProps)(Posts);