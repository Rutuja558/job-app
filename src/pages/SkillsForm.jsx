import { useFormik } from 'formik';
import * as yup from 'yup'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleAddSkillsAndQualifications } from '../redux/actions/applicationActions';
import { Button, Heading } from '../components';
import { useNavigate } from 'react-router-dom';

const SkillsForm = () => {
    const navigate = useNavigate()
    const initialValues = useSelector(state => state.skillsAndQualification)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues,
        validationSchema: yup.object().shape({
            skills: yup.array().min(1, 'At least one skill should be added'),
            certifications: yup.array().min(1, 'At least one certificate should be added'),
        }),
        onSubmit: (values) => {
            dispatch(handleAddSkillsAndQualifications(values))
            navigate("/5")
        },
    });

    return (
        <div className="container">
            <Heading title={"Skills and Qualifications"} />
            <div className="row">
                <div className="col-sm-4 offset-sm-4">

                    <div className="card mt-5">
                        <div className="card-body alert-dark" style={{ 'boxShadow': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <label htmlFor="skill" className="form-label">Skills :</label>
                                    <div className='input-group'>
                                        <input type="text" name='skill' value={formik.values.skill} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.errors.skills && formik.touched.skills ? "is-invalid form-control" : "form-control"} />
                                        <button type='button' className='border-0 px-3 bg-dark text-white rounded-top rounded-bottom' onClick={() => {
                                            if (formik.values.skill) {
                                                formik.setFieldValue("skills", [...formik.values.skills, formik.values.skill]);
                                                formik.setFieldValue("skill", "");
                                            }
                                        }}><i class="bi bi-plus-circle"></i></button>
                                        {formik.values.skills.length === 0 && <div className='invalid-feedback'>{formik.errors.skills}</div>}

                                    </div>
                                    <div className='d-flex flex-wrap gap-2 w-50 my-3'>
                                        {formik.values.skills.map((skill, index) => <div className='border rounded bg-light py-1 px-2'>{skill} <i className="bi bi-x" onClick={() => {
                                            formik.values.skills.splice(index, 1)
                                            formik.setFieldValue("skills", [...formik.values.skills]);
                                        }}></i></div>)}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="skill" className="form-label">Certifications :</label>
                                    <div className='input-group'>
                                        <input type="text" name='certificate' value={formik.values.certificate} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.errors.certifications && formik.touched.certifications ? "is-invalid form-control" : "form-control"} />
                                        <button type='button' className='border-0 px-3 bg-dark text-white rounded-top rounded-bottom' onClick={() => {
                                            if (formik.values.certificate) {
                                                formik.setFieldValue("certifications", [...formik.values.certifications, formik.values.certificate]);
                                                formik.setFieldValue("certificate", "");
                                            }
                                        }}><i class="bi bi-plus-circle"></i></button>
                                        {formik.values.certifications.length === 0 && <div className='invalid-feedback'>{formik.errors.certifications}</div>}

                                    </div>
                                    <div className='d-flex flex-wrap gap-2 w-50 my-3'>
                                        {formik.values.certifications.map((certificate, index) => <div className='border rounded bg-light py-1 px-2'>{certificate} <i className="bi bi-x" onClick={() => {
                                            formik.values.certifications.splice(index, 1)
                                            formik.setFieldValue("certifications", [...formik.values.certifications]);
                                        }}></i></div>)}
                                    </div>
                                </div>

                                {/* Submit button */}
                                <Button />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsForm