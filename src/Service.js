import React from 'react'
import Common from './common/Common'
import ser from "./assests/ser.png"
import Sdata from './Sdata'
import Card from './Card'

const Service = () => {
    return (
        <>
        <div className="text-center my-2">
            <h1>Our Services</h1>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto mt-4">
                    <div className="row gy-4 ">
                        {
                            Sdata.map((item,index)=>{
                                return <Card imgsrc={item.imgsrc} title={item.title} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        
        
        
        
        
        
        
        
        </>
    )
}

export default Service
