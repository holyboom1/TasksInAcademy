import React, {Component} from "react";
import {Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Spinner} from "reactstrap";
import Header from "Comp/header";
import Sort from "Comp/sort";
import List from "Comp/list";
import ShowToast from "Comp/parts/toast";

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            items:null,
            flag:null,
            itemsCount : 0,
            sortedItems:[],
            modal:false,
            modalText : "",
            modalOk : null,
            toastShow: false,
            toastText: ""
        }
        this.info = this.info.bind(this);
        console.log("------constructor")
    }
    sortItems=(button)=>{
        if(button == 1){
            this.setState({
                flag:true,
                //sortedItems:[...this.state.items.filter((item)=>item.completed?true:false)]
            })
        }else if(button == 2){
            this.setState({
                flag:false,
                //sortedItems:[...this.state.items.filter((item)=>!item.completed?true:false)]
            })
        }else  {
            this.setState({
                flag:null,
                //sortedItems:[...this.state.items]
            })
        }
    }
       // sortItems= (param)=>{
       //  if(param){
       //      this.setState({
       //          items:[... this.state.items.sort((a)=>{
       //              if(a.completed){
       //                  return -1;
       //              }else{
       //                  return 1;
       //              }
       //          })]
       //      })
       //  }else{
       //      this.setState({
       //          items:[... this.state.items.sort((a)=>{
       //              if(a.completed){
       //                  return 1;
       //              }else{
       //                  return -1;
       //              }
       //          })]
       //      })
       //  }
       // }
    render(){
        console.log(this.state.sortedItems,1111111111111);

        let {itemsCount,items, modal,modalText, modalOk} = this.state;

        console.log("------render",itemsCount,items);
        return(
            <Container>
                <Header count={itemsCount} sorted={this.state.sortedItems.length} />
                <Sort sortItems={this.sortItems}/>
                {
                    items!=null ? <List items={this.state.items}
                                        remove={this.removeItem}
                                        status={this.status}
                                        show={this.state.flag}
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
                {this.state.toastShow ? <ShowToast  text={this.state.toastText}/> : null }
            </Container>
        )
    }

    componentDidMount(){
        console.log("------componentDidMount");

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(data=>data.json())
            .then(todos=>{
                    let date =  this.randomDate(todos)
                    this.setState({
                        items: [... date],
                        itemsCount : todos.length,
                        sortedItems:[... date],
                    })}
            )
            .catch(error=>console.log(error));

    }

    removeItem = (id) =>{
        this.setState({
            items: [... this.state.items.filter((item)=>item.id!=id ? true : false)],
            modal:false,
            toastShow: true,
            toastText: `Удалена запись с id ${id}`
        }, ()=>{this.removeToast(3000)})


    }

    someFunction =() =>{

    }


    removeToast (time){
        setTimeout(()=>{this.setState({toastShow : false})}, time)
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