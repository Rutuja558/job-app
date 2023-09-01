import { useFormik } from 'formik';
import * as yup from 'yup'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleAddPersonalInformation } from '../redux/actions/applicationActions';
import { Button, Heading } from '../components';
import { useNavigate } from 'react-router-dom';

const PersonalInfoForm = () => {
    const navigate = useNavigate()
    const initialValues = useSelector(state => state.personalInformation)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues,
        validationSchema: yup.object({
            name: yup.string().required('Please enter your name'),
            email: yup.string().email("Please enter valid email").required('Please enter your email'),
            phone: yup.string().matches(/^[6789]\d{9}$/, 'Please enter valid phone number')
                .required('Please enter your phone number'),
            address: yup.string().required('Please enter your address'),
        }),
        onSubmit: values => {
            dispatch(handleAddPersonalInformation(values))
            navigate("/2")
        }
    })
    return (
        <div className="container">
            <Heading title={"Personal Information"} />
            <div className="row">
                <div className="col-sm-4 offset-sm-4">
                    <div className="card mt-5">
                        <div className="card-body alert-dark" style={{ 'boxShadow': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="form-label">First Name</label>
                                    <input type="text" name='name' value={formik.values.name} className={formik.errors.name && formik.touched.name ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    />
                                    <div className="invalid-feedback">{formik.errors.name}</div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="email" className="form-label"> Email</label>
                                    <input
                                        type="text" name='email' value={formik.values.email} className={formik.errors.email && formik.touched.email ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    />
                                    <div className="invalid-feedback">{formik.errors.email}.</div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="phone" className="form-label"> Phone No.</label>
                                    <input
                                        type="number" name='phone' value={formik.values.phone} className={formik.errors.phone && formik.touched.phone ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    />
                                    <div className="invalid-feedback">{formik.errors.phone}.</div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="address" className="form-label"> Address</label>
                                    <input
                                        type="text" name='address' value={formik.values.address} className={formik.errors.address && formik.touched.address ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    />
                                    <div className="invalid-feedback">{formik.errors.address}.</div>
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

export default PersonalInfoForm