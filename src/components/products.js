
// Import statements comes here.
import React, { Component } from 'react';
import { Table, Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';

// You need to extend the functionality of `Component` to the class created.
class className extends Component {
    constructor() {
        super();

// A state can hold anything dynamically. For example here randomVar is any    variable.
        this.state = {
            products: [
                { "name": "KTM Duke", "img": "1.png", "id": 1, "price":   "2 lakh", "engine": "299 cc" },
                { "name": "KTM RC", "img": "2.jpg", "id": 2, "price": "2.2 lakh",   "engine": "299 cc" },
                { "name": "Ninja", "img": "3.jpg", "id": 3, "price": "3.7 lakh",   "engine": "350 cc" },
                { "name": "BMW S", "img": "4.jpg", "id": 4, "price": "6.8 lakh",   "engine": "800 cc" },
                { "name": "Hayabusa", "img": "5.jpg", "id": 5, "price": "9.2 lakh",   "engine": "1340 cc" },
            ],
            compare: {
                // The arr variable stores the id of selected components
                    arr: []
                }
            }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this)
        }

// METHOD1: This function defines an event handler, bound to this to enabel access to state
    // e is the event. For example here the event is `click`. 
    // This variable has some information like: name, id etc. of the component which fired it.
    handleClick(e) {
        // Creating a duplicate of arr variable of state
        let temparr = this.state.compare.arr;
        // e.target.id returns the id of the button which fired the event.
        //This helps us in identifying the component
        let id = temparr.indexOf(e.target.id)
        //Checking if the component is already present in the arr variable or    not
        if (id != -1) {
        //If present then remove it
            temparr.splice(id, 1)
        }
        else {
        //else push the id to the temparr
            temparr.push(e.target.id)
        }
//RP UP TO HERE = colon allows to drill down beyond a shallow merge})
        //setState function requests an updat to state (which may be batched). It can't be done manually
        this.setState({
            compare: { 
                arr: temparr 
            } 
        });
    } 

// METHOD2: This function renders a component
    render() {

        // Whatever is returned is rendered
        return (
            <Row>
                {this.state.products.map((product, index) => (
                    <Col key={product.id}  md="2" lg="2">
                        <Card body outline engine="primary">
                            <img height="120px" width="240px" src={require("../assets/images/" + product.img)}/>
                            <CardTitle>{product.name}</CardTitle>
                            <Button type="button" id={product.id} onClick=   {this.handleClick}>Button</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
    }
}

export default className;