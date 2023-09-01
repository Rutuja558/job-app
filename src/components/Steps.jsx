import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Steps = () => {
    const [step, setStep] = useState(0)
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
        setStep(+location.pathname.charAt(1))

    }, [location])
    let links = [1, 2, 3, 4, 5, 6]
    return (
        <>
            {location.pathname !== "/" && <>
                <div className="container d-flex justify-content-center gap-3 my-5">
                    {links.map(link => <Link to={`/${link}`} className="border rounded-circle px-3 py-2 text-dark text-decoration-none">{link}</Link>)}
                </div>
                <div id="buttons" >
                    {step > 1 && <button className='bg-dark px-2 rounded py-1 prev-button'><Link to={`/${step - 1}`} className='text-decoration-none text-white '><i class="bi bi-chevron-left"></i></Link> </button>}
                    {step < 6 && <button className='bg-dark px-2 rounded py-1 next-button'><Link to={`/${step + 1}`} className='text-decoration-none text-white '><i class="bi bi-chevron-right"></i></Link> </button>}
                </div>
            </>}
        </>
    )
}

export default Steps