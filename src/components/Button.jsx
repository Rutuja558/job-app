import React from 'react'

const Button = ({ text = "Continue" }) => {
    return (
        <div className="text-center mt-3">
            <button type='submit' className='bg-dark px-3 py-1 text-white' >{text}</button>
        </div>
    )
}

export default Button