import React from 'react';
// import Card from './card';
import article from '../ArticleContent';
import 'bootstrap/dist/css/bootstrap.min.css';
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
articles:article
}

}
  render() {
    const name= this.props.match.params.nom;
    let article = this.state.articles.find((articl) => {
      return articl.nom == name ;});
    return (
        // <div>
           
        //    {  this.state.articles.map((item,i) =>  
        //      <div> 
        //      {this.props.match.params.nom  == item.nom ? <div>
        //         <h1>{item.titre}</h1>
        //       <h4>{item.nom}</h4>
        //       <p>{item.content}</p>

        //        </div>
             
        //      :''} </div>
        //    )  }
           
        // </div><
        <div>
       <h1>{article.titre}</h1>
           <h4>{article.nom}</h4>
     <p>{article.content}</p>
<div className="row">{this.state.articles.map((item,i) => 
  <div>
 {item.nom != name ? <Link to={"/article/"+item.nom}>{item.nom}</Link>:''}
</div>
  )}</div>
        </div>
    );
  }
}

export default ArticlesFull;
