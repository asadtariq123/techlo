import React from 'react'
import Common from './common/Common'
import cont from "./assests/contact.jpg"

const Contact = () => {
    return (
        <div>
            <Common
            name={"Contact"}
            img={cont}
            btn={"Contact Us"}
            link={"/data"}
            
            />
        </div>
    )
}

export default Contact
