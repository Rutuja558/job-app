import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup'
import { handleAddEducationalDetails } from '../redux/actions/applicationActions';
import { Button, Heading } from '../components';
import { useNavigate } from 'react-router-dom';

const EducationForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialValues = useSelector(state => state.education)
    const formik = useFormik({
        initialValues,
        validationSchema: yup.object().shape({
            education: yup.array().of(
                yup.object().shape({
                    university: yup.string().required('Please enter university'),
                    CGPA: yup.string().required('Please enter CGPA'),
                    passYear: yup.string().required('Please enter passing year'),
                })
            ),
        }),
        onSubmit: (values) => {
            dispatch(handleAddEducationalDetails(values))
            navigate("/3")
        },
    });
    return (

        <div className='container'>
            <Heading title={"Education Details"} />
            <form onSubmit={formik.handleSubmit} className='mt-5'>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>School / institute Name</th>
                            <th>Board / University</th>
                            <th>CGPA</th>
                            <th>Passing Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formik.values.education.map((education, index) => (
                            <tr key={`row-${index}`}>
                                <td>{education.institude}</td>
                                <td>
                                    <input
                                        type="text"
                                        name={`education[${index}].university`}
                                        className={formik.errors.education?.[index]?.university && formik.touched.education?.[index]?.university ? "form-control is-invalid input-border" : "form-control input-border"} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    />
                                    <div className="invalid-feedback">{formik.errors.education?.[index]?.university}</div>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name={`education[${index}].CGPA`} value={formik.values.education?.[index]?.CGPA}
                                        className={formik.errors.education?.[index]?.CGPA && formik.touched.education?.[index]?.CGPA ? "form-control is-invalid input-border" : "form-control input-border"} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    />
                                    <div className="invalid-feedback">{formik.errors.education?.[index]?.CGPA}</div>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name={`education[${index}].passYear`} value={formik.values.education?.[index]?.passYear}
                                        className={formik.errors.education?.[index]?.passYear && formik.touched.education?.[index]?.passYear ? "form-control is-invalid input-border" : "form-control input-border"} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    />
                                    <div className="invalid-feedback">{formik.errors.education?.[index]?.passYear}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* <button>save</button> */}
                <Button />
                {/* Render your table with input fields */}
            </form>
        </div>
    )
}

export default EducationForm