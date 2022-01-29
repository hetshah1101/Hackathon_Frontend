import Head from 'next/head';
import { useContext, useEffect, useState, setposition } from 'react';
import SiteContext from '../components/SiteContext';
import Navbar from '../components/Navbar';
import { useFormik, ErrorMessage } from "formik";
import * as Yup from 'yup'
import axios from 'axios'
import { useRouter } from 'next/router';

export default function FormValidation(props) {
    const { current,setSwipe, setcurrent, setsections, handleKeyPress, position, setposition } = useContext(SiteContext);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [previousClicked, setPreviousClicked] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const router = useRouter();
    useEffect(()=>{
      setSwipe(false)
    },[])
    const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          //wantAutoTeamAssign: "",
          mobile: "",
          collegeName: "",
          collageCity: "",
          collageState: "",
          degree: "",
          branch: "",
          semester: "",
          nameOnCertificate: "",
          linkedIn: "",
          github: "",
          discordId: "",
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
        /*
        wantAutoTeamAssign: Yup.string()
            .max(100, "Must be 100 characters or less")
            .min(3, "Must be 3 characters or more")
            .required("Required"),
            
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
        collageCity: Yup.string()
            .max(100, "Must be 100 characters or less")
            .required("Required"),
        collageState: Yup.string()
            .max(100, "Must be 100 characters or less")
            .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        mobile: Yup.string()
            .matches(/^[5-9]\d{9}$/, "Invalid Mobile Number")
            .required("Required"),
        degree: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
        branch: Yup.string()
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
        discordId: Yup.string()
            .max(30, "Must be 30 characters or less")
            .min(3, "Must be 3 characters or more")
            .required("Required"),
        }),
        onSubmit: async (values) => {
            setButtonClicked(true);
            console.log(values)
            axios.post(`https://apis.mined2022.tech/api/registrations`, values)
            .then(res => {
              alert(res.data.message)
              router.push('/')
            })
            .catch(err => {
              alert('Something Went Wrong!')
            })
            // console.log("HELLO");
            //delete values.repassword;
        },
    });
    const nextPage = () => {
        if (Object.keys(formik.errors).length === 5 || previousClicked) {
          setCurrentStep(1);
          formik.errors.email = "";
          formik.errors.wantAutoTeamAssign = "";
          //formik.errors.password = "";
          //formik.errors.repassword = "";
          formik.errors.linkedIn = "";
          formik.errors.github = "";
          formik.errors.discordId = "";
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
                                  formik.touched.mobile &&
                                  formik.errors.mobile
                                    ? "is-invalid"
                                    : ""
                                }`
                              }
                              placeholder="Mobile No"
                              name="mobile"
                              onChange={formik.handleChange}
                              value={formik.values.mobile}
                              onBlur={formik.handleBlur}
                            />
                            
                              <div className="invalid-feedback">
                            {formik.touched.mobile &&
                            formik.errors.mobile ? (
                                formik.errors.mobile
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
                                  formik.touched.collageCity &&
                                  formik.errors.collageCity
                                    ? "is-invalid"
                                    : ""
                                }`
                              }
                              placeholder="College City"
                              name="collageCity"
                              onChange={formik.handleChange}
                              value={formik.values.collageCity}
                              onBlur={formik.handleBlur}
                            />
                            <div className="invalid-feedback">
                            {formik.touched.collageCity &&
                            formik.errors.collageCity ? (
                                formik.errors.collageCity
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
                                  formik.touched.collageState &&
                                  formik.errors.collageState
                                    ? "is-invalid"
                                    : ""
                                }`
                              }
                              placeholder="College State"
                              name="collageState"
                              onChange={formik.handleChange}
                              value={formik.values.collageState}
                              onBlur={formik.handleBlur}
                            />
                            
                              <div className="invalid-feedback">
                            {formik.touched.collageState &&
                            formik.errors.collageState ? (
                                formik.errors.collageState
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
                                  formik.touched.branch &&
                                  formik.errors.branch
                                    ? "is-invalid"
                                    : ""
                                }`
                              }
                              placeholder="Branch Name"
                              name="branch"
                              onChange={formik.handleChange}
                              value={formik.values.branch}
                              onBlur={formik.handleBlur}
                            />
                            
                              <div className="invalid-feedback">
                            {formik.touched.branch &&
                            formik.errors.branch ? (
                                formik.errors.branch
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
                        
                      {/*
                        <div className="form-group">
                            <label className="label">wantAutoTeamAssign</label>
                            <input 
                            type="text" 
                            className={
                                "form-control " +
                                `${
                                    formik.touched.wantAutoTeamAssign &&
                                    formik.errors.wantAutoTeamAssign
                                    ? "is-invalid"
                                    : ""
                                }`
                            }
                            placeholder="wantAutoTeamAssign"
                            name="wantAutoTeamAssign"
                            onChange={formik.handleChange}
                            value={formik.values.wantAutoTeamAssign}
                            onBlur={formik.handleBlur}
                            />
                            
                                <div className="invalid-feedback">
                            {formik.touched.wantAutoTeamAssign &&
                            formik.errors.wantAutoTeamAssign ? (
                                formik.errors.wantAutoTeamAssign
                            ) : null} 
                                </div>
                        </div>

                      
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
                            <label className="label">DiscordId</label>
                            <input 
                            type="text" 
                            className={
                                "form-control " +
                                `${
                                    formik.touched.discordId &&
                                    formik.errors.discordId
                                    ? "is-invalid"
                                    : ""
                                }`
                                }
                                placeholder="DiscordId"
                                name="discordId"
                                onChange={formik.handleChange}
                                value={formik.values.discordId}
                                onBlur={formik.handleBlur}
                            />
                            
                                <div className="invalid-feedback">
                            {formik.touched.discordId &&
                            formik.errors.discordId ? (
                                formik.errors.discordId
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
