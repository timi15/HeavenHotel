import React from 'react'

export const Opinion = (props) => {
    return (
        <>
            <p id='opinionContact'>{props.content}</p>

            <i id='fontawesome' className="fa fa-sort-desc fa-lg" aria-hidden="true"></i>

            <p id='opinionName'>{props.name}, {props.whoIs}</p>
        </>
    )
}
