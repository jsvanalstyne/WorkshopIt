import React from "react";
import signupImg from "../../images/register.svg";
import "./Login.scss"

class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="base-container">
                <div className="header"></div>
                <div className="content">
                    <div className="image">
                        <img src={signupImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                    </div>
                    <div className="footerSubmit">
                        <button type="button" className="btn" >Register</button>
                    </div>

                </div>
            </div>
        )
    }
}
export default Register;