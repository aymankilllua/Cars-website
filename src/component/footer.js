import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import fristimg from "./pic/fristimg.jpg";
import FindCar from "./FindCar"
  import RentCar from "./RentCar"
  import Dealer from "./Dealer"
  import Home from "./Home"

export default class Footer extends Component {
    render() {
        return (
            <Router>
                

            <div className="container-fluid bg-dark p-md-5 p-sm-0 footer">
            <div className="styling d-none d-md-block">{" "}</div>

                <h1 className="text-center text-light"><span className="text-danger">C</span>ar<span className="text-danger">S</span>hop</h1>
                <div className="container mt-5">
                <div className="row">
               <div className="col-md-3 col-sm-12 text-center"><Link  className="links" to="/Home">Home</Link></div>
               <div className="col-md-3 col-sm-12 text-center"><Link className="links"  to="/FindCar">Find Car</Link></div>
               <div className="col-md-3 col-sm-12 text-center"><Link className="links"  to="/RentCar">Rent Car</Link></div>
               <div className="col-md-3 col-sm-12 text-center"><Link className="links"  to="/Dealer">Dealer</Link></div>
                </div>
                <p className="text-center text-secondary mt-5 pl-5 pr-5">Lorem Ipsum is simply
                 dummy text of the printing and typesetting industry. 
                 Lorem Ipsum has been the industry's standard dummy 
                 text ever sincLorem Ipsum is simply dummy text of 
                 the printing and typesetting industry. Lorem Ipsum has 
                 been the industry's standard dummy text ever since the 
                 1500s, when an unknown printer took a galley of type and 
                 scrambled it to make a type specimen booke the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                
            </div>
            <div className="bg-light container-fluid pt-md-2">
                <div className="row">
                    <p className="text-left col-md-4 col-sm-12 ">aymankillua@gmail.com</p>
                    <p className=" col-md-4 col-sm-12 text-center">@Copyright@aymankillua.com</p>
                    
                    </div>
                </div>
            </Router>
        )
    }
}



