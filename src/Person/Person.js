import React from "react"

const person = (props) => {
    return(
        <div>
            <p>I am {props.name} and i am {props.age} years old.</p>
        </div>
    )
}

export default person