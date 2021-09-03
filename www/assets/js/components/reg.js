import React, {Component, useState} from 'react';
import CategoryJoke from "./categoryJoke";
import { Formik,Form, Field } from 'formik';



function RegForm ({setTypeForm}){

    const [formData,setFormData] = useState({})
    function setData(event){
        setFormData({...formData, [event.target.id]: event.target.value})
        console.log(formData)
    }

    const validateForm = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        }
        if (!values.password2) {
            errors.password2 = 'Password is required';
        }

        if (values.password !== values.password2){
            errors.password2 = 'Password mismatch';
        }

        if (!values.joke) {
            errors.joke = 'Joke is required';
        }

        return errors;
    };

    return (
        <Formik
            initialValues={{  email: '', password: '',password2: '', joke: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 1000);
            }}
            validate={validateForm}
        >
            {(formik,isSubmitting ) => (
                <Form>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <Field name="email" className={(formik.touched.email && formik.errors.email) ? 'form-control is-invalid' : 'form-control'} type="email" />

                        {formik.touched.email && formik.errors.email ? (
                            <div className="invalid-feedback">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field name="password" className="form-control" type="password" />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="invalid-feedback">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Password again</label>
                        <Field name="password2" className="form-control" type="password" />
                        {formik.touched.password2 && formik.errors.password2 ? (
                            <div className="invalid-feedback">{formik.errors.password2}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="joke">Joke</label>
                        <CategoryJoke setData={setData} />
                        {formik.touched.joke && formik.errors.joke ? (
                            <div className="invalid-feedback">{formik.errors.joke}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Submit"}</button>
                    </div>
                    <p>Уже зарегистрированы? <a onClick={()=> setTypeForm(false)} href={"#login"}>Войти</a>.</p>
                </Form>

            )}
        </Formik>
    );
}

export default RegForm;