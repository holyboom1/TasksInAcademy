import  React from "react"
import { BrowserRouter as Router,
        Switch,
        Route,
        Link} from "react-router-dom"
import HomeContent from "./ContentParts/HomeContent";
import PostsContent from "./ContentParts/PostsContent";
import {connect} from "react-redux";
import CatalogIndex from "./ContentParts/catalog";




function Content(props) {

    return <Switch>
                <Route exact path={"/"} component = {HomeContent} />
                <Route exact path={"/posts"} component = {PostsContent} />
                <Route exact path={"/catalog"} component = {CatalogIndex} />
                {/*<Route exact path={"/posts/id/:id"} component = {Users} />*/}
            </Switch>


//      <NewsPeople/>
//      <NewsAuto/>
//      <NewsTech/>
}
//




const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(Content);