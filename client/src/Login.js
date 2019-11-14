import React from 'react';

const Login = (props) => {
    return(
        <form 
            style={{
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                width: "20vw"
            }}
            onSubmit = {props.submitLogin}
        >
            <h3>Login</h3>
            <label htmlFor="username">Username:
                <input 
                    type="text"
                    placeholder="Username"
                    label="username" 
                    value={props.username} 
                    name="username"
                    onChange={props.handleInputChange}
                />
            </label>
            
            <label htmlFor="password">Password:
                <input 
                    type="password" 
                    placeholder="Password"
                    label="password"
                    name="password" 
                    value={props.password} 
                    onChange={props.handleInputChange}
                />
            </label>
            
            <input type="submit" value="submit" style={{width:"10vw"}}/>
        </form>
    );
}

export default Login;