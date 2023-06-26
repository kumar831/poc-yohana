import React from "react";
import '../../App.css'
import Signup from "./Signup";
import { useEffect, useState } from 'react';

function Login() {
    const [showSignUpPopup, setShowSignUpPopup] = useState(false);
    const handleOpenSignUp = () => {
        setShowSignUpPopup(true);
    }
    return (
        <div>
            {
                !showSignUpPopup &&
                <div className="login-container">
                    <label htmlFor="chk" aria-hidden="true">Sign In</label>
                    <input type="email" name="email" placeholder="Email address" required="" />
                    <input type="password" name="pswd" placeholder="Passcode" required="" />
                    <button>Sign in</button>
                    <a href="#" className="signup-link" onClick={handleOpenSignUp}>Sign Up</a>
                </div>
            }
            {
                showSignUpPopup && <Signup />
            }
        </div>
    );
}
export default Login;