import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup'
import { handleAddAdditionalDetails } from '../redux/actions/applicationActions';
import { Button, Heading } from '../components';
import { useNavigate } from 'react-router-dom';

const AdditionalnfoForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            coverLetter: null,
            resume: null
        },
        validationSchema: yup.object().shape({
            coverLetter: yup.string().required('Please select cover letter'),
            resume: yup.string().required('Please select resume')
        }),
        onSubmit: values => {
            dispatch(handleAddAdditionalDetails(values))
            navigate("/6")
        }
    })
    return (
        <div className="container">
            <Heading title={"Additional Information"} />
            <div className="row">
                <div className="col-sm-4 offset-sm-4">
                    <div className="card mt-5">
                        <div className="card-body alert-dark" style={{ 'boxShadow': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <label htmlFor="coverLetter" className="form-label">Cover Letter</label>
                                    <input type="file" name='coverLetter' accept='.pdf' className={formik.errors.coverLetter && formik.touched.coverLetter ? "form-control is-invalid" : "form-control"} onChange={(e) => {
                                        formik.setFieldValue('coverLetter', URL.createObjectURL(e.target.files[0]))
                                    }} onBlur={formik.handleBlur}
                                    />
                                    <div className="invalid-feedback">{formik.errors.coverLetter}</div>
                                </div>
                                <div>
                                    <label htmlFor="resume" className="form-label">Resume</label>
                                    <input type="file" name='resume' accept='.pdf' className={formik.errors.resume && formik.touched.resume ? "form-control is-invalid" : "form-control"} onChange={(e) => {
                                        formik.setFieldValue('resume', URL.createObjectURL(e.target.files[0]))
                                    }} onBlur={formik.handleBlur}
                                    />
                                    <div className="invalid-feedback">{formik.errors.resume}</div>
                                </div>


                                <Button />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalnfoForm