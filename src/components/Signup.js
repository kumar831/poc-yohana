import React, { useState } from "react";
import '../App.css'
function Signup() {
    const [showpasscode, setshowpasscode] = useState(false);
    const [password, setPassword] = useState("**************");
    const handlePasscodeForm = ()=>{
        var email = document.getElementById('emailId').value;
        var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        console.log("test", email.match(reg));
        if(email !== '' && email.match(reg)){
            setshowpasscode(true);
            const randomPassword =
            Math.random().toString(36).slice(2,11);
            setPassword(randomPassword);
        }
        else{
            document.getElementById("emailId").style.borderColor = "red";
        }
    }

    return(
        <div>
            <div className="login-container" style={{marginTop:'10rem'}}>
					{showpasscode ? <label htmlFor="chk" aria-hidden="true">Passcode</label> :
                    <label htmlFor="chk" aria-hidden="true">Sign Up</label>}
					{showpasscode ? <h1 aria-hidden="true">{password}</h1> :
                        <input type="email" id="emailId" name="email" placeholder="Email address" required/>}
					<button style={{marginTop:'5rem'}} onClick={handlePasscodeForm}>Next</button>
                    {showpasscode && <a href="#" className="signin-link">Sign In</a>}
			</div>
        </div>
    );
}
export default Signup;