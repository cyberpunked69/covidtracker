import React, {Component} from 'react';
import {Button, Card} from 'react-bootstrap';
import StateData from './Statedata';

import Axios from 'axios';

class India extends Component{
    constructor(){
        super()
        this.state={data:{}}
    }

    componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries/india").then(response =>{
            this.setState({data:response.data})
        })
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <img alt=" the indian flag"src="https://www.countryflags.io/in/shiny/64.png"/>
                    <h3>India</h3>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                        <Card className = "badge badge-primary"style={{ width: '15rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>TOTAL CASES</Card.Title>
                            <h3>{this.state.data.cases}</h3>
                        </Card.Body>
                        </Card>
                        </div>

                        <div className="col-md-3">
                        <Card className = "badge badge-warning"style={{ width: '15rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>ACTIVE CASES</Card.Title>
                            <h3>{this.state.data.active}</h3>
                        </Card.Body>
                        </Card>
                        </div>

                        <div className="col-md-3">
                        <Card className = "badge badge-success"style={{ width: '15rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>TOTAL RECOVERED</Card.Title>
                            <h3>{this.state.data.recovered}</h3>
                        </Card.Body>
                        </Card>
                        </div>

                        <div className="col-md-3">
                        <Card className = "badge badge-danger"style={{ width: '15rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>TOTAL DEATHS</Card.Title>
                            <h3>{this.state.data.deaths}</h3>
                        </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <Button variant="primary" className="p-2 m-2">Total number of test done : {this.state.data.tests}</Button>
                    <StateData/>
                </div>
            </div>
        )
    }
}

export default India;