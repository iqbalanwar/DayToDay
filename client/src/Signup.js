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
                    name="regUsername"
                    onChange={props.handleInputChange}
                />
            </label>
            
            <label htmlFor="password">Password:
                <input 
                    type="password" 
                    placeholder="Password"
                    label="password" 
                    value={props.regPassword}
                    name="regPassword"
                    onChange={props.handleInputChange}
                />
            </label>
            
            <input type="submit" value="submit" style={{width:"10vw"}}/>
        </form>
    );
}

export default Signup;