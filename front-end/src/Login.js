import React from 'react';

const Login = props => {
    return(
        <form 
            style={{padding: "300px"}}
            onSubmit = {props.submitLogin}
        >
            <label htmlFor="username">Username:
                <input 
                    type="text"
                    placeholder="Username"
                    label="username" 
                    value={props.username} 
                    onChange={props.handleUsernameChange}
                />
            </label>
            
            <label htmlFor="password">Password:
                <input 
                    type="password" 
                    placeholder="Password"
                    label="username" 
                    value={props.password} 
                    onChange={props.handlePasswordChange}
                />
            </label>
            
            <input type="submit" value="submit" />
        </form>
    );
}

export default Login;