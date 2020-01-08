import React from 'react';
// import Card from './card';
import article from '../ArticleContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class ArticlesFull extends React.Component {
  constructor(props){
    super(props);
this.state = {
articles:[],
article:{}
}



}

loadAll = ()=>{
  axios.get('//localhost:5000/articles')
  .then(res => {
      this.setState({
        articles:res.data
      })
  })
  .catch(err =>{
    console.log(err)
  })
 
}
loadOne =()=>{
  const name= this.props.match.params.nom;

  axios.get('//localhost:5000/articles/'+name)
  .then(res => {
      this.setState({
        article:res.data
      })
      console.log(this.state.article)
  })
  .catch(err =>{
    console.log(err)
  })
}
loadOn =(name)=>{

  axios.get('//localhost:5000/articles/'+name)
  .then(res => {
      this.setState({
        article:res.data
      })
      console.log(this.state.article)
  })
  .catch(err =>{
    console.log(err)
  })
}
componentDidMount(){
this.loadAll();
this.loadOne();

}
clicked = (name)=>{
this.loadOn(name);
}
addVotes = (name)=>{
  axios.get('//localhost:5000/articles/vote/'+name)
  .then(res => {
      this.setState({
        article:res.data
      })
  })
  .catch(err =>{
    console.log(err)
  })
}
  render() {
    const name= this.props.match.params.nom;

    return (
       
        <div>
       <h1>{this.state.article.titre} <span className="badge badge-pill badge-secondary">{this.state.article.votes}</span></h1>
       <button onClick={()=> this.addVotes(this.state.article.nom)} type="button" className="btn btn-outline-primary">vote</button>

           <h4>{this.state.article.nom}</h4>
     <p>{this.state.article.content}</p>
<div >    related Articles: 
{this.state.articles.map((item,i) => 
  <div>
 {item.nom != name ? <Link onClick={()=> this.clicked(item.nom)} to={"/articles/"+item.nom}>{item.nom}</Link>:''}
</div>
  )}</div>
        </div>
    );
  }
}

export default ArticlesFull;
