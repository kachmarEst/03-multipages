import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import marked from 'marked'
class MarkedArea extends React.Component {
    constructor(props){
        super(props);
    }
    getMarkdownText(text){
        var rawMarkup = marked(text,{sanitize: true});
        return { __html: rawMarkup};
      }
    render(){
        return(
            <div className="col-sm-6" dangerouslySetInnerHTML={this.getMarkdownText(this.props.dnghtml)}></div>

        );
    }
}
export default MarkedArea;