import React from 'react';
import ReactDOM from 'react-dom';

class Recipe extends React.Component {
  constructor({props, recipe}) {
    super(props);
    this.state = {
      recipeToFetch: recipe,
      editable: false,
      name: "",
      cookTime: "",
      temperature: "",
      ingredients: "",
      instructions: ""
    };

    this.fetchData()
  }

  fetchData = () => {
    fetch("http://localhost:4000/api/" + this.state.recipeToFetch)
    .then(response => response.json())
    .then(data => {
      this.setState({name: data.name})
      this.setState({cookTime: data.cookTime})
      this.setState({temperature: data.temperature})
      this.setState({ingrediants: data.ingrediants})
      this.setState({instructions: data.instructions})
    })
  }

  toggleState = () => { (this.state.editable) ? this.setState({editable: false}) : this.setState({editable: true}) }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  EditRecipe = () => {
    return(
      <form>  
        <h1>Edit Recipe</h1>
        <label>Recipe Name</label>
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.myChangeHandler}
        />

        <br />
        <label>Cook Time</label>
        <input
          type='text'
          name='cookTime'
          value={this.state.cookTime}
          onChange={this.myChangeHandler}
        />

        <br />
        <label>Temperature</label>
        <input
          type='text'
          name='temperature'
          value={this.state.temperature}
          onChange={this.myChangeHandler}
        />

        <br />
        <label>Ingredients</label><br/>
        <textarea
          name='ingrediants'
          value={this.state.ingrediants}
          onChange={this.myChangeHandler}
        />
        <br />
        <label>Instructions</label> <br/>
        <textarea
          name='instructions'
          value={this.state.instructions}
          onChange={this.myChangeHandler}
        />
          <br/><button onClick={this.toggleState}>Save</button>
      </form>

    )
  }
  
  ShowRecipe = () => {
    return(
      <div>
        <h1> {this.state.name} </h1>
        <h3> Cook Time: {this.state.cookTime} | Temperature: {this.state.temperature}</h3> 
        <h2> Ingredients </h2> <p> {this.state.ingrediants}</p>
        <h2> Instructions </h2> <p> {this.state.instructions}</p>
        <button onClick={this.toggleState}>Edit</button>
      </div>
    );
  }

  render() { 
    return ((this.state.editable) ? <this.EditRecipe /> : <this.ShowRecipe />) 
  }
}

ReactDOM.render(<Recipe recipe="Cookies"/>, document.getElementById('root'));