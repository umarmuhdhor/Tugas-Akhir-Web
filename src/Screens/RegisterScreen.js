import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import * as yup from "yup";
import { Register,getUser } from '../Services/Product';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"

const RegisterScreen = () => {

    const onClickRegister = async (dataToSend) => {
        try {
            const response = await Register(dataToSend);
            console.log("Register Succses")
            const beautyResponse = JSON.stringify(response.data, null, 2);
            console.log(beautyResponse);
        } catch (error) {
            console.log("Register gagal")

        }
    };

    const validateRegisterForm = yup.object().shape({
        username: yup.string()
            .min(3, ({ min }) => `Username must be at least ${min} characters!`)
            .required("Username is required"),
        password: yup.string()
            .min(6, ({ min }) => `Password must be at least ${min} characters!`)
            .required("Password is required"),
        phone: yup.string()
            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Invalid phone number!")
            .max(13, ({ max }) => `Maximum ${max} characters`)
            .required("Phone is required"),
        email: yup.string()
            .email("Please enter valid email!")
            .required("Email is required"),
        firstName: yup.string()
            .required("First Name is required"),
        lastName: yup.string()
            .required("First Name is required"),
        city: yup.string()
            .required("Last Name is required"),
        street: yup.string()
            .required("Street is required"),
        number: yup.string()
            .required("Number is required"),

    });

    const getAllUser = async () => {
        try {
            const response = await getUser();
            const beautyResponse = JSON.stringify(response.data, null, 2);

            console.log(beautyResponse)

        } catch (error) {
            console.log("error: ");
        }
    };



    useEffect(() => {
        getAllUser()
    })


    return (
        <Formik
            initialValues={{
                email: "",
                username: "",
                password: "",
                phone: "",
                firstName: "",
                lastName: "",
                city: "",
                street: "",
                number: ""
            }}
            validationSchema={validateRegisterForm}
            onSubmit={(data) => onClickRegister(data)}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                touched,
            }) => (
                <div>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
                        <div className="container-fluid">
                            <p className="navbar-brand" href="#">JWmarson</p>
                        </div>
                    </nav>
                    <div className="container d-flex justify-content-center align-items-center min-vh-10">
                        <div className="row border rounded-5 p-3 bg-white shadow justify-content-center d-flex" style={{ width: 500 }}>
                            <div className="row">
                                <div className="header-text mb-4">
                                    <h3 aria-describedby="sign">Sign Up</h3>
                                    <div id="sign" className="form-text"><small>Daftar sekarang untuk menjadi member JWmarson</small>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input
                                        className="form-control form-control-lg fs-6"
                                        id="exampleInputEmail1"
                                        type='email'
                                        onChange={handleChange("email")}
                                        onBlur={handleBlur("email")}
                                        placeholder="Input Email"
                                    />
                                    {
                                        errors.email && touched.email ?
                                            <p style={{
                                                fontSize: 14,
                                                color: "red",
                                                marginBottom: 8,
                                                marginHorizontal: 16
                                            }}>
                                                {errors.email}
                                            </p>
                                            :
                                            null
                                    }
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userName" className="form-label">Username</label>
                                    <input
                                        className="form-control form-control-lg fs-6"
                                        id="userName"
                                        type='text'
                                        onChange={handleChange("username")}
                                        onBlur={handleBlur("username")}
                                        placeholder="Input Username"
                                    />
                                    {
                                        errors.username && touched.username ?
                                            <p style={{
                                                fontSize: 14,
                                                color: "red",
                                                marginBottom: 8,
                                                marginHorizontal: 16
                                            }}>
                                                {errors.username}
                                            </p>
                                            :
                                            null
                                    }
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Create Password</label>
                                    <input
                                        className="form-control form-control-lg fs-6"
                                        id="exampleInputPassword1"
                                        type='password'
                                        onChange={handleChange("password")}
                                        onBlur={handleBlur("password")}
                                        placeholder="Input Password"
                                    />
                                    {
                                        errors.password && touched.password ?
                                            <p style={{
                                                fontSize: 14,
                                                color: "red",
                                                marginBottom: 8,
                                                marginHorizontal: 16
                                            }}>
                                                {errors.password}
                                            </p>
                                            :
                                            null
                                    }
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                    <input
                                        className="form-control form-control-lg fs-6"
                                        id="phoneNumber"
                                        type='text'
                                        onChange={handleChange("phone")}
                                        onBlur={handleBlur("phone")}
                                        placeholder="Input Phone Number"
                                    />
                                    {
                                        errors.phone && touched.phone ?
                                            <p style={{
                                                fontSize: 14,
                                                color: "red",
                                                marginBottom: 8,
                                                marginHorizontal: 16
                                            }}>
                                                {errors.phone}
                                            </p>
                                            :
                                            null
                                    }
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <div className="d-flex justify-content-between" id="name">
                                        <div className="me-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg fs-6"
                                                onChange={handleChange("firstName")}
                                                onBlur={handleBlur("firstName")}
                                                placeholder="First Name"
                                            />
                                            {
                                                errors.firstName && touched.firstName ?
                                                    <p style={{
                                                        fontSize: 14,
                                                        color: "red",
                                                        marginBottom: 8,
                                                        marginHorizontal: 16
                                                    }}>
                                                        {errors.firstName}
                                                    </p>
                                                    :
                                                    null
                                            }
                                        </div>
                                        <div className="me-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg fs-6"
                                                onChange={handleChange("lastName")}
                                                onBlur={handleBlur("lastName")}
                                                placeholder="Last Name"
                                            />
                                            {
                                                errors.lastName && touched.lastName ?
                                                    <p style={{
                                                        fontSize: 14,
                                                        color: "red",
                                                        marginBottom: 8,
                                                        marginHorizontal: 16
                                                    }}>
                                                        {errors.lastName}
                                                    </p>
                                                    :
                                                    null
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <div className="d-flex justify-content-between" id="address">
                                        <div className="me-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg fs-6"
                                                onChange={handleChange("city")}
                                                onBlur={handleBlur("city")}
                                                placeholder="City" />
                                            {
                                                errors.city && touched.city ?
                                                    <p style={{
                                                        fontSize: 14,
                                                        color: "red",
                                                        marginBottom: 8,
                                                        marginHorizontal: 16
                                                    }}>
                                                        {errors.city}
                                                    </p>
                                                    :
                                                    null
                                            }
                                        </div>
                                        <div className="me-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg fs-6"
                                                onChange={handleChange("street")}
                                                onBlur={handleBlur("street")}
                                                placeholder="Street" />
                                            {
                                                errors.street && touched.street ?
                                                    <p style={{
                                                        fontSize: 14,
                                                        color: "red",
                                                        marginBottom: 8,
                                                        marginHorizontal: 16
                                                    }}>
                                                        {errors.street}
                                                    </p>
                                                    :
                                                    null
                                            }
                                        </div>
                                        <div className="me-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg fs-6"
                                                onChange={handleChange("number")}
                                                onBlur={handleBlur("number")}
                                                placeholder="Number" />
                                            {
                                                errors.number && touched.number ?
                                                    <p style={{
                                                        fontSize: 14,
                                                        color: "red",
                                                        marginBottom: 8,
                                                        marginHorizontal: 16
                                                    }}>
                                                        {errors.number}
                                                    </p>
                                                    :
                                                    null
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5 fs-6">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label text-secondary" htmlFor="exampleCheck1">
                                            <small>
                                                Agree to our
                                                <a href="#" className="text-secondary">Terms of use</a>
                                                and
                                                <a href="#" className="text-secondary">Privacy Policy</a>
                                            </small>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                                        <label className="form-check-label text-secondary" htmlFor="exampleCheck2">
                                            <small>
                                                Subscribe to our monthly newsletter
                                            </small>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button
                                        className="btn btn-lg btn-primary w-100 fs-6"
                                        type='submit'
                                        onClick={handleSubmit}
                                    >
                                        Create Account
                                    </button>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-lg btn-light w-100 fs-6">
                                        <img src="data:image/png;base64,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"
                                            style={{ width: 20 }} aria-describedby="emailHelp" />
                                        <small className="me-2">Sign Up with Google</small>
                                    </button>
                                    <div id="emailHelp" className="form-text">Already have an account? <a href="http://localhost:3000/Login">Log In</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            )}

        </Formik >

    )
}

export default RegisterScreen