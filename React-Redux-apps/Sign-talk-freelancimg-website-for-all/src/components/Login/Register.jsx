import React, { Component } from "react";
import "./Register.css";
import Axios from "axios";
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      formSubmit:"",
      formErrors: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
       
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstname}
        Last Name: ${this.state.lastname}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
      let data = Axios({
        method: "post",
        url: "https://whispering-lake-75400.herokuapp.com/Register/interpreter",
    
      
        data: {
          email: this.state.email,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          password: this.state.password,
          
        },
      });
  
      data
        .then((res) => {
          
          if (res) {
            setTimeout(() => {
              
              // alert(mssg);
              alert(`Registered   sucessfully: ${res.data.message}`)
              console.log(res.data.message)
  
            }, 500);
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Already Registered")
          // alert(mssg);
          
          console.log(err)
        });

         


    } else {
      
      alert(`FORM INVALID -\n ${this.state.formErrors.firstname} `)
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstname":
        formErrors.firstname =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastname":
        formErrors.lastname =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="some">
        <div className="form-wrapper">
          <h4>Create InterPreter Account </h4>
          <form  noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstname.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstname"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstname.length > 0 && (
                <span className="errorMessage">{formErrors.firstname}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastname.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastname"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastname.length > 0 && (
                <span className="errorMessage">{formErrors.lastname}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button onClick={this.handleSubmit} type="submit">Create Account</button>
               <button style={{backgroundColor:"white"}}>Already Have an Account?</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
