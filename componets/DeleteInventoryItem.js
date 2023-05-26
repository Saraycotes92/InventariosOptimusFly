// components/DeleteInventoryItem.js
import React from 'react';

class DeleteInventoryItem extends React.Component {
  state = {
    id: ''
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
        <h2>Eliminar un Artículo del Inventario</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Eliminar</button>
        </form>
      </div>
    );
  }
}

export default DeleteInventoryItem;
