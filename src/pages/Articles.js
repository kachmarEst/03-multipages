import React from 'react';
import ArticlesList from '../components/ArticlesList';
class Articles extends React.Component {
  
  render() {
    return (
        <div className="container-fluid">
    <ArticlesList />
            </div>
    );
  }
}

export default Articles;
