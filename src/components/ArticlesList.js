import React from 'react';
import Card from './card';
import article from '../ArticleContent';
import './ArticleList.css'
import axios from 'axios';
class ArticlesList extends React.Component {
    constructor(props){
        super(props);
this.state = {
articles:[]
}

    }

    componentDidMount(){
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
  render() {
    return (
        <div className="articles">
            {  this.state.articles.map((item,i) =>   <Card key={i} nom={item.nom} titre={item.titre}  content={item.content}/>)  }
        </div>
    );
  }
}

export default ArticlesList;
