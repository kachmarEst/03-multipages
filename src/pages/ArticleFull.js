import React from 'react';
// import Card from './card';
import article from '../ArticleContent';

class ArticlesFull extends React.Component {
  constructor(props){
    super(props);
this.state = {
articles:article
}

}
  render() {
    return (
        <div>
           
           {  this.state.articles.map((item,i) =>  
             <div> 
             {this.props.match.params.nom  == item.nom ? <div>
                <h1>{item.titre}</h1>
              <h4>{item.nom}</h4>
              <p>{item.content}</p>

               </div>
             
             :''} </div>
           )  }
           
        </div>
    );
  }
}

export default ArticlesFull;
