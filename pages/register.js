import Head from 'next/head';
import { useContext, useEffect, useState, setposition } from 'react';
import SiteContext from '../components/SiteContext';
import Navbar from '../components/Navbar';
import { useFormik, ErrorMessage } from "formik";
import * as Yup from 'yup'

export default function FormValidation(props) {
    const { current,setSwipe, setcurrent, setsections, handleKeyPress, position, setposition } = useContext(SiteContext);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [previousClicked, setPreviousClicked] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    
    useEffect(()=>{
      setSwipe(false)
    },[])
    const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          userName: "",
          //password: "",
          //repassword: "",
          mobileNo: "",
          collegeName: "",
          collegeCity: "",
          collegeState: "",
          degree: "",
          branchName: "",
          semester: "",
          nameOnCertificate: "",
          linkedIn: "",
          github: "",
          discord: "",
        },
        validationSchema: Yup.object({
        firstName: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
        lastName: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
        collegeName: Yup.string()
            .max(100, "Must be 100 characters or less")
            .required("Required"),
        userName: Yup.string()
            .max(100, "Must be 100 characters or less")
            .min(3, "Must be 3 characters or more")
            .required("Required"),
            /*
        password: Yup.string()
            .max(15, "Must be 15 characters or less")
            .min(8, "Must be minimum 8 characters")
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{8,}$/,
              "Must Contain One Uppercase, One Lowercase, One Number and one special Character(@ $ ! % * # ? & _)"
            )
            .required("Required"),
        repassword: Yup.string()
            .when("password", {
              is: (val) => !!(val && val.length > 0),
              then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Both password need to be the same"
              ),
            })
            .required("Required"),
            */
        collegeCity: Yup.string()
            .max(100, "Must be 100 characters or less")
            .required("Required"),
        collegeState: Yup.string()
            .max(100, "Must be 100 characters or less")
            .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        mobileNo: Yup.string()
            .matches(/^[5-9]\d{9}$/, "Invalid Mobile Number")
            .required("Required"),
        degree: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
        branchName: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
        semester: Yup.string()
          .matches(/^([1-9]|1[0-6])$/, "Invalid Semester")
          .required("Required"),
        nameOnCertificate: Yup.string()
            .max(100, "Must be 100 characters or less")
            .required("Required"),
        linkedIn: Yup.string()
            .max(30, "Must be 30 characters or less")
            .min(3, "Must be 3 characters or more")
            .required("Required"),
        github: Yup.string()
            .max(30, "Must be 30 characters or less")
            .min(3, "Must be 3 characters or more")
            .required("Required"),
        discord: Yup.string()
            .max(30, "Must be 30 characters or less")
            .min(3, "Must be 3 characters or more")
            .required("Required"),
        }),
        onSubmit: async (values) => {
            setButtonClicked(true);
            // console.log("HELLO");
            //delete values.repassword;
        },
    });
    const nextPage = () => {
        if (Object.keys(formik.errors).length === 5 || previousClicked) {
          setCurrentStep(1);
          formik.errors.email = "";
          formik.errors.userName = "";
          //formik.errors.password = "";
          //formik.errors.repassword = "";
          formik.errors.linkedIn = "";
          formik.errors.github = "";
          formik.errors.discord = "";
          setPreviousClicked(false);
        } else {
          formik.submitForm();
        }
      };
    

      return (<div>
        {currentStep==0 ? 
        (<div>
            <Head>
            <title>MINeD | Register</title>
            <meta 
          name="author" 
          content="Centre of Excellence in Data Science at Nirma University" />
        <meta 
          name="description" 
          content="MINeD is a national level Hackathon organized by Centre of Excellence in Data Science at Nirma University in collabration with SUNY Binghamton University where you can participate, innovate and win exciting prizes."></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navigation Bar */}
            <Navbar hidePage={true} />

            <div id="register">

            {/* Main Content here */}
            {/* <div id="content" > */}
                <section className='register'>
                <h1>User Registration</h1>  <br/>
                    
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label className="label">First Name</label>
                            <input 
                            type="text" 
                            className={
                                "form-control " +
                                `${
                                  formik.touched.firstName &&
                                  formik.errors.firstName
                                    ? "is-invalid"
                                    : ""
                                }`
                              }
                              placeholder="First Name"
                              name="firstName"
                              onChange={formik.handleChange}
                              value={formik.values.firstName}
                              onBlur={formik.handleBlur}
                            />
                            
                              <div className="invalid-feedback">
                            {formik.touched.firstName &&
                            formik.errors.firstName ? (
                                formik.errors.firstName
                            ) : null} 
                              </div>

                        </div>

                        <div className="form-group">
                            <label className="label">Last Name</label>
                            <input 
                            type="text" 
                            className={
                                "form-control " +
                                `${
                                  formik.touched.lastName &&
                                  formik.errors.lastName
                                    ? "is-invalid"
                                    : ""
                                }`
                              }
                              placeholder="Last Name"
                              name="lastName"
                              onChange={formik.handleChange}
                              value={formik.values.lastName}
                              onBlur={formik.handleBlur}
                            />
                            
                              <div className="invalid-feedback">
                            {formik.touched.lastName &&
                            formik.errors.lastName ? (
                                formik.errors.lastName
                            ) : null} 
                              </div>
                        </div>
                        
                        <div className="form-group">
                            <label className="label">Mobile Number</label>
                            <input 
                            type="number" 
                            className={
                                "form-control " +
                                `${
                                  formik.touched.mobileNo &&
                                  formik.errors.mobileNo
                                    ? "is-invalid"
                                    : ""
                                }`
                              }
                              placeholder="Mobile No"
                              name="mobileNo"
                              onChange={formik.handleChange}
                              value={formik.values.mobileNo}
                              onBlur={formik.handleBlur}
                            />
                            
                              <div className="invalid-feedback">
                            {formik.touched.mobileNo &&
                            formik.errors.mobileNo ? (
                                formik.errors.mobileNo
                            ) : null}
                              </div>
                        </div>

                        <div className="form-group">
                            <label className="label">College Name</label>
                            <input 
                            type="text" 
                            className={
                                "form-control " +
                                `${
                                  formik.touched.collegeName &&
                                  formik.errors.collegeName
                                    ? "is-invalid"
                                    : ""
                                }`
                              }
                              placeholder="College Name"
                              name="collegeName"
                              onChange={formik.handleChange}
                              value={formik.values.collegeName}
                              onBlur={formik.handleBlur}
                            />
                            
                              <div className="invalid-feedback">
                            {formik.touched.collegeName &&
                            formik.errors.collegeName ? (
                                formik.errors.collegeName
                            ) : null} 
                              </div>
                        </div>

                        <div className="form-group">
                            <label className="label">College City</label>
                            <input 
                            type="text" 
                            className={
                                "form-control " +
                                `${
                                  formik.touched.collegeCity &&
                                  formik.errors.collegeCity
                                    ? "is-invalid"
                                    : ""
                                }`
                              }
                              placeholder="College City"
                              name="collegeCity"
                              onChange={formik.handleChange}
                              value={formik.values.collegeCity}
                              onBlur={formik.handleBlur}
                            />
                            <div className="invalid-feedback">
                            {formik.touched.collegeCity &&
                            formik.errors.collegeCity ? (
                                formik.errors.collegeCity
                            ) : null} 
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="label">College State</label>
                            <input 
                            type="text" 
                            className={
                                "form-control " +
                                `${
                                  formik.touched.collegeState &&
                                  formik.errors.collegeState
                                    ? "is-invalid"
                                    : ""
                                }`
                              }
                              placeholder="College State"
                              name="collegeState"
                              onChange={formik.handleChange}
                              value={formik.values.collegeState}
                              onBlur={formik.handleBlur}
                            />
                            
                              <div className="invalid-feedback">
                            {formik.touched.collegeState &&
                            formik.errors.collegeState ? (
                                formik.errors.collegeState
                            ) : null}
                              </div>
                        </div>

                        <div className="form-group">
                            <label className="label">Degree</label>
                            <input type="text" className={
                                "form-control " +
                                `${
                                  formik.touched.degree &&
                                  formik.errors.degree
                                    ? "is-invalid"
                                    : ""
                                }`
                              }
                              placeholder="Degree"
                              name="degree"
                              onChange={formik.handleChange}
                              value={formik.values.degree}
                              onBlur={formik.handleBlur}
                            />
                            
                              <div className="invalid-feedback">
                            {formik.touched.degree &&
                            formik.errors.degree ? (
                                formik.errors.degree
                            ) : null} 
                              </div>
                        </div>

                        <div className="form-group">
                            <label className="label">Branch Name</label>
                            <input 
                            type="text" 
                            className={
                                "form-control " +
                                `${
                                  formik.touched.branchName &&
                                  formik.errors.branchName
                                    ? "is-invalid"
                                    : ""
                                }`
                              }
                              placeholder="Branch Name"
                              name="branchName"
                              onChange={formik.handleChange}
                              value={formik.values.branchName}
                              onBlur={formik.handleBlur}
                            />
                            
                              <div className="invalid-feedback">
                            {formik.touched.branchName &&
                            formik.errors.branchName ? (
                                formik.errors.branchName
                            ) : null} 
                              </div>
                        </div>

                        <div className="form-group">
                            <label className="label">Semester</label>
                            <input 
                            type="number" 
                            className={
                                "form-control " +
                                `${
                                  formik.touched.semester &&
                                  formik.errors.semester
                                    ? "is-invalid"
                                    : ""
                                }`
                              }
                              placeholder="Semester"
                              name="semester"
                              onChange={formik.handleChange}
                              value={formik.values.semester}
                              onBlur={formik.handleBlur}
                            />
                            
                              <div className="invalid-feedback">
                            {formik.touched.semester &&
                            formik.errors.semester ? (
                                formik.errors.semester
                            ) : null} 
                              </div>
                        </div>

                        <div className="form-group">
                            <label className="label">Name On Certificate</label>
                            <input type="text" className={
                                "form-control " +
                                `${
                                  formik.touched.nameOnCertificate &&
                                  formik.errors.nameOnCertificate
                                    ? "is-invalid"
                                    : ""
                                }`
                              }
                              placeholder="Name On Certificate"
                              name="nameOnCertificate"
                              onChange={formik.handleChange}
                              value={formik.values.nameOnCertificate}
                              onBlur={formik.handleBlur}
                            />
                            
                              <div className="invalid-feedback">
                            {formik.touched.nameOnCertificate &&
                            formik.errors.nameOnCertificate ? (
                                formik.errors.nameOnCertificate
                            ) : null}
                              </div>
                        </div>

                        <div className="form-group">
                            <button
                              type="button"
                              className="btn btn-primary form-control"
                              name="next"
                              onClick={nextPage}
                            >
                              Next
                            </button>   
                        </div> 
                    </form>
                </section>

            {/* </main> */}
        </div>
        </div>
        ) :
        (
        <div>
            <Head>
            <title>MINeD | Register</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navigation Bar */}
            <Navbar />

            <div id="register">

            {/* Main Content here */}
            {/* <div id="content" > */}
                <section className='register'>
                 <h1>User Registration</h1>  <br/>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label className="label">Email</label>
                            <input 
                            type="email" 
                            className={
                            "form-control " +
                            `${
                                formik.touched.email &&
                                formik.errors.email
                                ? "is-invalid"
                                : ""
                            }`
                            }
                            placeholder="Email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            />
                            
                                <div className="invalid-feedback">
                            {formik.touched.email &&
                            formik.errors.email ? (
                                formik.errors.email
                            ) : null} 
                                </div>
                        </div>

                        <div className="form-group">
                            <label className="label">UserName</label>
                            <input 
                            type="text" 
                            className={
                                "form-control " +
                                `${
                                    formik.touched.userName &&
                                    formik.errors.userName
                                    ? "is-invalid"
                                    : ""
                                }`
                            }
                            placeholder="UserName"
                            name="userName"
                            onChange={formik.handleChange}
                            value={formik.values.userName}
                            onBlur={formik.handleBlur}
                            />
                            
                                <div className="invalid-feedback">
                            {formik.touched.userName &&
                            formik.errors.userName ? (
                                formik.errors.userName
                            ) : null} 
                                </div>
                        </div>

                      {/*
                        <div className="form-group">
                            <label className="label">Password</label>
                            <input 
                            type="password" 
                            className={
                                "form-control " +
                                `${
                                    formik.touched.password &&
                                    formik.errors.password
                                    ? "is-invalid"
                                    : ""
                                }`
                                }
                                placeholder="Password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                            />
                            
                                <div className="invalid-feedback">
                            {formik.touched.password &&
                            formik.errors.password ? (
                                formik.errors.password
                            ) : null} 
                                </div>
                        </div>

                        <div className="form-group">
                            <label className="label">Confirm Password</label>
                            <input 
                            type="password" 
                            className={
                                "form-control " +
                                `${
                                    formik.touched.repassword &&
                                    formik.errors.repassword
                                    ? "is-invalid"
                                    : ""
                                }`
                                }
                                placeholder="Confirm Password"
                                name="repassword"
                                onChange={formik.handleChange}
                                value={formik.values.repassword}
                                onBlur={formik.handleBlur}
                            />
                      
                                <div className="invalid-feedback">
                            {formik.touched.repassword &&
                            formik.errors.repassword ? (
                                formik.errors.repassword
                            ) : null}
                                </div>
                        </div>
                      */}
                        <div className="form-group">
                            <label className="label">Linkedin</label>
                            <input 
                            type="text" 
                            className={
                                "form-control " +
                                `${
                                    formik.touched.linkedIn &&
                                    formik.errors.linkedIn
                                    ? "is-invalid"
                                    : ""
                                }`
                                }
                                placeholder="LinkedIn"
                                name="linkedIn"
                                onChange={formik.handleChange}
                                value={formik.values.linkedIn}
                                onBlur={formik.handleBlur}
                            />
                            
                                <div className="invalid-feedback">
                            {formik.touched.linkedIn &&
                            formik.errors.linkedIn ? (
                                formik.errors.linkedIn
                            ) : null} 
                                </div>
                        </div>

                        <div className="form-group">
                            <label className="label">Github</label>
                            <input 
                            type="text" 
                            className={
                                "form-control " +
                                `${
                                    formik.touched.github &&
                                    formik.errors.github
                                    ? "is-invalid"
                                    : ""
                                }`
                                }
                                placeholder="GitHub "
                                name="github"
                                onChange={formik.handleChange}
                                value={formik.values.github}
                                onBlur={formik.handleBlur}
                            />
                            
                                <div className="invalid-feedback">
                            {formik.touched.github &&
                            formik.errors.github ? (
                                formik.errors.github
                            ) : null} 
                                </div>
                        </div>

                        <div className="form-group">
                            <label className="label">Discord</label>
                            <input 
                            type="text" 
                            className={
                                "form-control " +
                                `${
                                    formik.touched.discord &&
                                    formik.errors.discord
                                    ? "is-invalid"
                                    : ""
                                }`
                                }
                                placeholder="Discord"
                                name="discord"
                                onChange={formik.handleChange}
                                value={formik.values.discord}
                                onBlur={formik.handleBlur}
                            />
                            
                                <div className="invalid-feedback">
                            {formik.touched.discord &&
                            formik.errors.discord ? (
                                formik.errors.discord
                            ) : null} 
                                </div>
                        </div>

                        <div className="form-group">
                        <input
                              type="button"
                              className="btn btn-secondary form-control"
                              value="previous"
                              name="prev"
                              onClick={() => {
                                setCurrentStep(0);
                                setPreviousClicked(true);
                              }}
                            />   
                        </div>

                        <div className="form-group">
                            <button type="submit">Submit</button>
                        </div> 
                    </form>
                    
                </section>
            {/* </main> */}
            </div>
        </div>
    )}
    </div>)
}
