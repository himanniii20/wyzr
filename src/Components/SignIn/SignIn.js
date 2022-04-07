import React, { useState } from 'react';
import Search from '../Search/Search';
import "./SignIn.css";

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function SignIn () {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
    const database = [
    {
        mail: "him@gmail.com",
        password: "himhim"
    },
    {
        mail: "hihi@gmail.com",
        password: "himani"
    }
    ];

    const errors = {
    email: "invalid emailID",
    pass: "invalid password"
    };
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { email, pass } = document.forms[0];
    
        // Find user login info
        const userData = database.find((user) => user.mail === email.value);
    
        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
        } else {
            setIsSubmitted(true);
        }
        } else {
          // Username not found
            setErrorMessages({ name: "email", message: errors.email });
        }
    };
    
      // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    
      // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
            <div className="input-container">
                <label>Email </label>
                <input type="email" name="email" required />
                {renderErrorMessage("email")}
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
                {renderErrorMessage("pass")}
            </div>
            <div class="g-signin2" data-onsuccess="onSignIn"></div>
            <div className="button-container">
                <input type="submit" />
            </div>
            </form>
        </div>
    );
    
        return (
        <div className="app">
            <div className="login-form">
            <div className="title">Sign In</div>
            {isSubmitted ? <div><Search/> </div>  : renderForm}
            </div>
        </div>
        );
}


export default SignIn;