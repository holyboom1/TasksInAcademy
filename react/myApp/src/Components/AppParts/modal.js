import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from "react-redux";

const ModalWindow = (props) => {


    const modal=props.GlobalStore.modal.toggle
    let toggle= ()=>{props.dispatch(
        {
            type : "TOGGLE", text : "" ,})}
    let className=null
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className={className}>

                <ModalHeader toggle={toggle} close={closeBtn}>
                    {props.GlobalStore.modal.text}
                </ModalHeader>

                <ModalBody>

                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>

            </Modal>
        </div>
    );
}


const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(ModalWindow);
