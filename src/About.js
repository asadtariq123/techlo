import React from 'react'
import Common from './common/Common'
import about from "./assests/about.jpeg"

const About = () => {
    return (
        <div>
           <Common
            name={"About Page"}
            img={about}
            btn={"About us"}
           
            /> 
        </div>
    )
}

export default About
