import React from 'react'
import { Link } from 'react-router-dom'
import pic from "../assests/need.png"

const Common = (props) => {
    return (
        <div>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 d-flex flex-column justify-content-center">
                            <h1>Welcome <br></br> <p id="brand">{props.name} Techloset</p></h1>
                            <p>We are team of telented developer making websites</p>
                            <div><Link id="btn1" to={props.link}>{props.btn}</Link></div>    
                            
                            </div>
                            <div className="col-6 order-1 order-lg-2 header-img ">
                                <img src={props.img} alt="hello" id="img1" className="animation"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        </div>
    )
}

export default Common
