import  React from "react"
import {connect} from "react-redux";



function CatalogIndex(props) {

    return <h1>CATALOG</h1>



}
//




const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(CatalogIndex);