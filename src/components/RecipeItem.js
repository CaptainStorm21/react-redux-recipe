import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../index.css";

class RecipeItem extends Component {
  render() {
    let { recipe } = this.props;

    return (
      <Card className="card-top-bottom">
          <Card.Header>
        <Card.Title className="title">        
          <h4>{recipe.title}</h4>            
        </Card.Title>      
        </Card.Header>  
        <Card.Body>          
        <Card.Img className = "image-size" src={recipe.thumbnail} alt={recipe.title} />           
        <Card.Text className = "ing-text">{recipe.ingredients}</Card.Text>     
          </Card.Body>
          <Card.Footer>
          <button>
            <a href={recipe.href}> Grab a Recipe </a>
          </button>
          </Card.Footer>
      </Card>
    );
  }
}

export default RecipeItem;
