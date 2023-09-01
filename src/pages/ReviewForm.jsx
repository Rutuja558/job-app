import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Heading, InformationBox } from '../components'
import { useNavigate } from 'react-router-dom'
import { handleResetAllForms } from '../redux/actions/applicationActions'

const ReviewForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { personalInformation, education, work, skillsAndQualification, additionalInformation } = useSelector(state => state)

    let personalInfo = [
        {
            title: "Name",
            value: personalInformation.name
        },
        {
            title: "Email",
            value: personalInformation.email
        },
        {
            title: "Phone No",
            value: personalInformation.phone
        },
        {
            title: "Address",
            value: personalInformation.address
        },
    ]
    return (
        <>
            <div className="container mb-5">

                <Heading title={"Please review your application"} />

                {personalInformation.name && <InformationBox heading={"Personal Information"} content={<>
                    {personalInfo.map(info => <div className="col-sm-6 border py-2 d-flex gap-3"><div>{info.title} : </div><h5>{info.value}</h5></div>)}</>} />}

                {education.education[0].university && <InformationBox heading={"Education"} content={<table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>School / institute Name</th>
                            <th>Board / University</th>
                            <th>CGPA</th>
                            <th>Passing Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {education?.education?.map((education, index) => (
                            <tr key={`row-${index}`}>
                                <td>{education.institude}</td>
                                <td>{education.university} </td>
                                <td>{education.CGPA}</td>
                                <td>{education.passYear}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>} />}

                {work.work[0].companyName && <InformationBox heading={"Work Experience"} content={<table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Job Title</th>
                            <th>Duartion (in months)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {work?.work?.map((work, index) => (
                            <tr key={`row-${index}`}>
                                <td>{work.companyName}</td>
                                <td>{work.jobTitle} </td>
                                <td>{work.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>} />
                }

                {skillsAndQualification.skills.length !== 0 && <InformationBox heading={"Skills and Qualifications"} content={<>
                    <div className="col-sm-6 border py-2">
                        <div>Skills</div>
                        <div className='d-flex flex-wrap gap-2 w-50 my-3'>

                            {skillsAndQualification.skills.map((skill, index) => <h5 className='border rounded py-1 px-2'>{skill}</h5>)}
                        </div>
                    </div>
                    <div className="col-sm-6 border py-2">
                        <div>Qualifications</div>
                        <div className='d-flex flex-wrap gap-2 w-50 my-3'>

                            {skillsAndQualification.certifications.map((item, index) => <h5 className='border rounded py-1 px-2'>{item}</h5>)}
                        </div>
                    </div>
                </>} />}


                {additionalInformation.coverLetter !== null && <InformationBox heading={"Additional Information"} content={<>
                    <div className="col-sm-6 border d-flex gap-3 py-2">
                        <div>Cover Letter</div>
                        <h5>{additionalInformation.coverLetter}</h5>

                    </div>
                    <div className="col-sm-6 border d-flex gap-3 py-2">
                        <div>Resume</div>
                        <h5>{additionalInformation.resume}</h5>
                    </div>
                </>} />}

                {personalInformation.name && education.education[0].university && work.work[0].companyName && skillsAndQualification.skills.length !== 0 && additionalInformation.coverLetter !== null ? <div onClick={() => {
                    dispatch(handleResetAllForms())
                    alert("Application Submitted Succuessfully.")
                    navigate("/")

                }}><Button text={"Submit Application"} /> </div> : <p class="alert alert-danger w-50 mx-auto my-5" >Some Information is missing, kindly fill all forms to submit the application</p>}
            </div>
        </>
    )
}

export default ReviewForm