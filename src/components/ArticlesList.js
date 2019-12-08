import React from 'react';
import Card from './card';
import article from '../ArticleContent';
import './ArticleList.css'
class ArticlesList extends React.Component {
    constructor(props){
        super(props);
this.state = {
articles:article
}

    }
  render() {
    return (
        <div className="articles">
            {  this.state.articles.map((item,i) =>   <Card key={i} nom={item.nom} titre={item.titre}  content={item.content}/>)  }
        </div>
    );
  }
}

export default ArticlesList;
