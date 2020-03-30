import React, { Component } from "react";
import {
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";

import { connect } from 'react-redux';
import { setRecipes} from '../actions'


class SearchRecipes extends Component {
    constructor(){
        super();

        this.state = {
            ingredients: '',
            dish: ''
        }
    }

search(){
    let { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    // console.log('state', this.state, 'url', url)
    fetch (url, {
        method: 'GET'
    })
    .then (response => response.json())
    .then(json => {
      this.props.setRecipes(json.results)
    });
}

  render() {
    return (
      <Form>
        <Form.Group>
          <Container>
            <Row>
              <Col>
                <Form.Label>Ingredients</Form.Label>
                <FormControl type="text" 
                                    placeholder="garlic, chicken, milk" 
                                    onChange = { event => this.setState({ ingredients: event.target.value}) } />
              </Col>{" "}
              <Col>
                <Form.Label>Dish</Form.Label>{" "}
                <FormControl
                  type="text"
                  placeholder="French Cuisine, Italian Parmasean"
                  onChange = { event => this.setState({ dish: event.target.value}) } />
              </Col>{" "}
            </Row>
         
            
            <Button variant="secondary" onClick = {() => this.search()}>
              Submit
            </Button>
           
          </Container>
        </Form.Group>
      </Form>
    );
  }
}

export default connect(null, { setRecipes}) (SearchRecipes);
