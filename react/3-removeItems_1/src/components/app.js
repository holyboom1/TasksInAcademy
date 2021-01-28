import React, {Component} from "react";
import {Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Spinner} from "reactstrap";
import Header from "Comp/header";
import Sort from "Comp/sort";
import List from "Comp/list";

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            items:null,
            itemsCount : 0,
            modal:false,
            modalText : "",
            modalOk : null
        }
        this.info = this.info.bind(this);
        console.log("------constructor")
    }

    render(){

        let {itemsCount,items, modal,modalText, modalOk} = this.state;

        console.log("------render",itemsCount,items);
        return(
            <Container>
                <Header count={itemsCount} />
                <Sort />
                {
                    items!=null ? <List items={items}
                                        remove={this.removeItem}
                                        status={this.status}
                                        message={this.message}
                                        /> : <Spinner color={"danger"} />

                }

                {modal ?
                    <Modal isOpen={modal} toggle={this.modalToggle}>

                        <ModalBody>
                            {modalText}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={()=>modalOk()}>Ok</Button>
                            <Button color="secondary" onClick={this.modalToggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal> : null }
            </Container>
        )
    }

    componentDidMount(){
        console.log("------componentDidMount");

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(data=>data.json())
            .then(todos=>
                    this.setState({
                        items: [... this.randomDate(todos)],
                        itemsCount : todos.length
                    })
            )
            .catch(error=>console.log(error));
    }

    removeItem = (id) =>{
        this.setState({
            items: [... this.state.items.filter((item)=>item.id!=id ? true : false)],
            modal:false
        })


    }

    someFunction =() =>{

    }

    status = (id) =>{
        // this.setState({
        //     items: [... this.state.items.filter((item)=>{
        //         if(item.id==id) {
        //             item.completed = !item.completed;
        //         }
        //
        //         return true;
        //     })],
        // })
       let copy = [].concat(this.state.items);

        for (let i=0;i<copy.length;i++) {
            if(copy[i].id==id) {
                copy[i].completed = !copy[i].completed;
            }
        }

        this.setState({
            items:copy,
            modal:false
        })

    }

    message = (id,text,fn)=>{
        this.setState({
            modal:true,
            modalText: text,
            modalOk: ()=>fn(id)
        })
    }

    randomDate(arr) {
        arr=[].concat(arr);
        let date = new Date();
        let msMax = date.getTime();
            date.setFullYear(date.getFullYear()-1);
        let msMin = date.getTime();

        return arr.map((item)=>{
                item.date_create = this.random(msMin,msMax);
                return item;
            })
    }

    info(){
        //this.state.itemsCount = this.state.itemsCount+1
        this.setState({
            itemsCount:this.random(1,50)
        },()=>{
            console.log('callback');
        })

    }

    modalToggle = ()=>{
        this.setState({
            modal : !this.state.modal
        })
    }

    random(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    // componentWillMount(){
    //     console.log("------componentWillMount");
    // }




    // return <Container>
    //     <Header count={15} />
    //     <Sort />
    //     <List items={data} />
    // </Container>
}