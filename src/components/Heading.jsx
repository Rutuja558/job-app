import React from 'react'

const Heading = ({ title }) => {
    return (
        <div className='row'>
            <div className="col-sm-12 text-center">
                <h3 className='text-decoration-underline'>{title}</h3>
            </div>
        </div>
    )
}

export default Heading