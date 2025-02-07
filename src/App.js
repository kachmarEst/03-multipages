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
import Login from './components/login';
import NotFound from './pages/notFound';
import axios from 'axios'
class App extends React.Component {
constructor(props){
  super(props);
this.state = {
 textval :'',
 username : '',
password:'',
 loggedIn : false,
 FalseCred : false,
 page:'home',
 counting:false
}
let counts = 0;
 
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
  const cred = {
    username:this.state.username,
    password:this.state.password
  }
axios.post('//localhost:5000/users/login',cred,{
  headers:{
    'Content-Type':'application/json',
    'Accept':'application/json'
  }
})
.then(res=>{
  console.log(res.data)
  this.setState({
    loggedIn : true,
    FalseCred: false,
    counting:true

  })
})
.catch(err=>{
  console.log(err.response.data.msg);
  this.setState({
    FalseCred: true
  
  })
})


  setTimeout(
    function() {
        this.setState({counting: false});
    }
    .bind(this),
    4000
);
}

  render() {

    return(
<div className="container">
       {!this.state.loggedIn ? 
       <div>
                    {this.state.FalseCred ?   <div className='alert alert-danger'>Erreur false credentials</div> :""}
                    <Login sub={this.SignIn} usr={this.onchangeUsr} pass={this.onchangePass} />

       </div>
      
           :  
           <Router>
               <Navbar  />
              { this.state.counting ? <div className="alert alert-success">Logged In successfully</div> : ''}

           <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/articles' component={Articles} />
             <Route exact path='/articles/:nom' component={ArticlesFull} />

             <Route exact path='/about' component={About} />
             <Route  component={NotFound} />

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
