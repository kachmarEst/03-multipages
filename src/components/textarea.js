import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class TexteArea extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
<textarea value={this.props.value} onChange={this.props.onchng} className="form-control" rows={16}></textarea> 
        );
    }
}


export default TexteArea;