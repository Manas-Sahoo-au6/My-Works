import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Spinner from "./spinner";
import "./Food.css";

//the pizza api to render : https://forkify-api.herokuapp.com/api/search?q=pizza
class Food extends Component {
  constructor() {
    super();
    this.state = {
      recipe: null,
    };
  }

  async componentDidMount() {
    try {
      const apiResponse = await fetch(
        "https://forkify-api.herokuapp.com/api/search?q=carrot"
      );
      const recipe = await apiResponse.json();
      //console.log(recipe);
      this.setState({ recipe: recipe.recipes });
    } catch (err) {
      console.error(err.message);
    }
  }

  render() {
    // return <div>HELLO</div>
    return this.state.recipe === null ? (
      <Spinner />
    ) : (
      <div className="divStyle">
        {this.state.recipe.map((recipe) => (
          // <h2 key={recipe.recipe_id}>{recipe.recipe_id}</h2>
          <Card
            style={{ width: "18rem" }}
            key={recipe.recipe_id}
            className="cardStyle"
          >
            <Card.Img
              variant="top"
              src={recipe.image_url}
              alt="pizza_image"
              className="imgStyle"
            />
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Text>
                <ol>
                  <li>Publisher: {recipe.publisher}</li>
                  <li>Social Rank: {recipe.social_rank}</li>
                </ol>
              </Card.Text>
              <a href={recipe.source_url}>Visit Website</a>
              <br />
              <a href={recipe.publisher_url}>Vist Publisher</a>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
export default Food;
