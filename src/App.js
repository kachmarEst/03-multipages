import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Login from './components/login';
import Navbar from './components/Navbar';
import About from './pages/About';
import Articles from './pages/Articles';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ArticlesFull from './pages/ArticleFull';

class App extends React.Component {
constructor(props){
  super(props);
this.state = {
 textval :'',
 username : '',
password:'',
 loggedIn : false,
 FalseCred : false,
 page:'home'
}

this.SignIn = this.SignIn.bind(this);
this.onchangeUsr = this.onchangeUsr.bind(this);
this.onchangePass = this.onchangePass.bind(this);

// this.onchangeText = this.onchangeText.bind(this);
}


onchangeUsr(e){
  this.setState({
    username : e.target.value
  })
} 
onchangePass(e){
  this.setState({
    password : e.target.value
  })
}

SignIn(e){
  e.preventDefault();

if(this.state.username == 'yassoub' && this.state.password == 'password'){
  this.setState({
    loggedIn : true,
    FalseCred: false
    

  })

}else{
  this.setState({
    FalseCred: true
    

  })}
}

  render() {

    return(
<div className="container">
       {!this.state.loggedIn ? 
     
         <form   style={{margin: '20%'}} onSubmit={this.SignIn} >
           {this.state.FalseCred ?   <div className='alert alert-danger'>Erreur false credentials</div> :""}
              <div className="from-group">
               <label>Username</label>
                <input type="text" className="form-control" name="username" id="user" onChange={this.onchangeUsr} placeholder="username" />
                </div>
                <div className="from-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" id="pass" onChange={this.onchangePass} placeholder="password" />
                </div>
                <button disabled={this.state.username == "" || this.state.password ==  ""} className="btn btn-primary"  >Signin</button>

          </form>
           :  
           <Router>
               <Navbar  />
               <div className="alert alert-success">Logged In successfully</div>

           <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/articles' component={Articles} />
             <Route exact path='/articles/:nom' component={ArticlesFull} />

             <Route exact path='/about' component={About} />
    
             </Switch>
       
            <div>           
            
           

            </div>
            </Router>
          }
      
      
    

      </div>

    );
  }
}


export default App;
