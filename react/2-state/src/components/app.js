import React, {Component} from "react";
import {Container, Spinner} from "reactstrap";
import Header from "Comp/header";
import Sort from "Comp/sort";
import List from "Comp/list";

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
         items:null,
         itemsCount : 0
        }
        this.info = this.info.bind(this);
        console.log("------constructor")
    }

    render(){

        let {itemsCount,items} = this.state;
        console.log("------render",itemsCount,items);
        return(
            <Container>
                <Header count={itemsCount} />
                {
                    items!=null ? <List items={items} /> : <Spinner color={"danger"} />

                }
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