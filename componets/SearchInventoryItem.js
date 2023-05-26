// components/SearchInventoryItem.js
import React from 'react';

class SearchInventoryItem extends React.Component {
  state = {
    query: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2>Buscar un Artículo en el Inventario</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Búsqueda:
            <input type="text" name="query" onChange={this.handleChange} />
          </label>
          <button type="submit">Buscar</button>
        </form>
      </div>
    );
  }
}

export default SearchInventoryItem;
