import React from "react";
import '../../App.css'
function Login() {
    return (
        <div>
            <div className="login-container">
                <label htmlFor="chk" aria-hidden="true">Sign In</label>
                <input type="email" name="email" placeholder="Email address" required="" />
                <input type="password" name="pswd" placeholder="Passcode" required="" />
                <button>Sign in</button>
                <a href="#" className="signup-link">Sign Up</a>
            </div>
        </div>
    );
}
export default Login;