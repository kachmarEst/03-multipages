import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
  constructor(props){
    super(props);
    

  }
  

  render() {
 
    return (
      
            <form style={{margin: '20%'}} onSubmit={this.props.sub} >
                <div className="from-group">
            <label>Username</label>
                <input type="text" className="form-control" onChange={this.props.usr} name="username" id="user" placeholder="username" />
                </div>
                <div className="from-group">
                <label>Password</label>
                <input type="password" className="form-control" onChange={this.props.pass} name="password" id="pass" placeholder="password" />
                </div>
                <button disabled={this.props.disabled} className="btn btn-primary"  >Signin</button>

            </form>
       
    );
  }
}

export default Login;

