import React from 'react';

const Signup = (props) => {
    return(
        <form 
            style={{
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                width: "20vw"
            }}
            onSubmit = {props.submitSignup}
        >
            <h3>Sign up</h3>
            <label htmlFor="username">Username:
                <input 
                    type="text"
                    placeholder="Username"
                    label="username" 
                    value={props.regUsername} 
                    onChange={props.handleSignupUsernameChange}
                />
            </label>
            
            <label htmlFor="password">Password:
                <input 
                    type="password" 
                    placeholder="Password"
                    label="username" 
                    value={props.regPassword} 
                    onChange={props.handleSignupPasswordChange}
                />
            </label>
            
            <input type="submit" value="submit" style={{width:"10vw"}}/>
        </form>
    );
}

export default Signup;