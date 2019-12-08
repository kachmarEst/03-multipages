import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {

  render() {
 
    return (
        <div className="container">
            <form >
                <div className="from-group">
            <label for="user">Username</label>
                <input type="text" className="form-control" name="username" id="user" placeholder="username" />
                </div>
                <div className="from-group">
                <label for="pass">Password</label>
                <input type="password" className="form-control" name="password" id="pass" placeholder="password" />
                </div>
                <input type="button" className="btn btn-primary" value="Login" />

            </form>
        </div>
       
    );
  }
}

export default Login;

