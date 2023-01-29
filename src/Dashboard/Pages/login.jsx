import React from 'react'
import loginImage from '../head.jpg';

function Login() {
    return (
        <div className='loginform'>
            <form>
                <div className="imgcontainer">
                    <img src={loginImage} />
                </div>

                <div className="login-container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <p>Remember Me <input type="checkbox" name="remember" /></p>
                    <hr />
                    <button type="submit" onClick={(e)=>e.preventDefault}>
                        <a href='admin/dashboard'>
                            Login
                        </a>
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Login;