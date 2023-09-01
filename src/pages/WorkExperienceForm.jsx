import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup'
import { handleAddWorkExperienceDetails } from '../redux/actions/applicationActions';
import { Button, Heading } from '../components';
import { useNavigate } from 'react-router-dom';

const WorkExperienceForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const initialValues = useSelector(state => state.work)
    const formik = useFormik({
        initialValues,
        validationSchema: yup.object().shape({
            work: yup.array().of(
                yup.object().shape({
                    companyName: yup.string().required('Please enter company name'),
                    jobTitle: yup.string().required('Please enter job title'),
                    duration: yup.string().required('Please enter duration'),
                })
            ),
        }),
        onSubmit: (values) => {
            dispatch(handleAddWorkExperienceDetails(values))
            navigate("/4")
        },
    });
    useEffect(() => {
        console.log("called");
    }, [initialValues])


    return (
        <div className='container'>
            <Heading title={"Work Experience"} />
            <form onSubmit={formik.handleSubmit} className='mt-5'>
                <table class="table table-bordered border">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Job Title</th>
                            <th>Duartion (in months)</th>
                            {formik.values.work?.length > 1 && <th>Delete Row</th>}

                        </tr>
                    </thead>
                    <tbody>
                        {formik.values.work?.map((work, index) => (
                            <tr key={`row-${index}`}>
                                <td>
                                    <input
                                        type="text"
                                        name={`work[${index}].companyName`} value={formik.values.work?.[index]?.companyName}
                                        className={formik.errors.work?.[index]?.companyName && formik.touched.work?.[index]?.companyName ? "form-control is-invalid input-border" : "form-control input-border"} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    />
                                    <div className="invalid-feedback">{formik.errors.work?.[index]?.companyName}</div>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name={`work[${index}].jobTitle`} value={formik.values.work?.[index]?.jobTitle}
                                        className={formik.errors.work?.[index]?.jobTitle && formik.touched.work?.[index]?.jobTitle ? "form-control is-invalid input-border" : "form-control input-border"} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    />
                                    <div className="invalid-feedback">{formik.errors.work?.[index]?.jobTitle}</div>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name={`work[${index}].duration`} value={formik.values.work?.[index]?.duration}
                                        className={formik.errors.work?.[index]?.duration && formik.touched.work?.[index]?.duration ? "form-control is-invalid input-border" : "form-control input-border"} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    />
                                    <div className="invalid-feedback">{formik.errors.work?.[index]?.duration}</div>
                                </td>
                                {index > 0 && <td className='text-center text-danger' onClick={() => { formik.setFieldValue('work', [...formik.values.work].filter((item, i) => i !== index)) }}><i class="bi bi-trash3"></i> </td>}

                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='w-100'><button type='button' className='bg-light px-3 py-1   me-0 d-block' onClick={() => { formik.setFieldValue('work', [...formik.values.work, { companyName: '', jobTitle: '', duration: '' }]) }}>+ Add Experience</button></div>

                {/* <button type='submit' className='bg-dark px-3 py-1 text-white'>save</button> */}
                <Button />
                {/* Render your table with input fields */}
            </form>

        </div>
    )
}

export default WorkExperienceForm