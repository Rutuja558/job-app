import React from 'react'

const InformationBox = ({ heading, content }) => {
    return (
        <div className="row border border-2 mt-5">
            <div className="col-sm-12 my-3 text-secondary"><h3>{heading}</h3></div>
            {content}
        </div>
    )
}

export default InformationBox