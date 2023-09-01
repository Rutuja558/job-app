import React from 'react'
import { Button } from '../components'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-4 offset-4 text-center border py-4">
                    <div className="d-flex gap-3 ">
                        <h5>Job Title : </h5>
                        <p>React.Js Developer</p>
                    </div>
                    <div className="d-flex gap-3 ">
                        <h5>Experience : </h5>
                        <p>2 years</p>
                    </div>
                    <div className="text-start">
                        <h5>Job Description : </h5>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, accusamus.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, accusamus.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, accusamus.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, accusamus.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, accusamus.</li>
                        </ul>
                    </div>
                    <div onClick={() => { navigate("/1") }}>

                        <Button text={"Apply Now"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home