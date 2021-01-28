import React, {Fragment} from "react"
import Header from "./header";
import Content from "./Content";
import Footer from "./Footer";
import {Container, Button} from "reactstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ModalWindow from "./AppParts/modal";
import {connect} from "react-redux";

class MainApp extends React.Component{
    constructor(props) {
        super(props)

    }

    render() {
        return <Router>


                    <Container>
                        <ModalWindow/>
                        
                        <Header/>

                        <Content/>

                        <Footer/>
                    </Container>
                </Router>


    }

    componentDidMount() {

    }

}
const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(MainApp);