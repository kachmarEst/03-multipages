import React from 'react';
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,

  Link
} from "react-router-dom";
class Card extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (

        <div className="card">
          <div className="cardHeading">
            {this.props.titre}
          </div>
            <div className="textA"> 
              {this.props.nom} 
              <br/>
              
              { this.props.content.substring(1,30)+'...'}
              <Link className="btn btn-success" to={"/articles/"+this.props.nom} >More...</Link>

            </div>
        </div>
    );
  }
}

export default Card;
