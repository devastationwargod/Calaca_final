import React, { Component } from 'react';
import ControlledCarousel from './carousel';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      CURSO1: '',
      CURSO2: '',
      CURSO3: '',
      HORARIO: 'MATUTINO'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      curso: '',
      curso: '',
      curso: '',
      HORARIO: 'MATUTINO'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  } 

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
        <p>Selecciona tu curso</p>
        
          <div className="form-group">
          <select
              name="curso1"
              className="form-control"
              value={this.state.curso1}
              onChange={this.handleInputChange}
            >
            <option>fotografia</option>
            <option>Guitarra</option>
            <option>cartoneria</option>
          </select>
        </div>
          <div className="form-group">
          <select
              name="curso2"
              className="form-control"
              value={this.state.curso2}
              onChange={this.handleInputChange}
            >
            <option>fotografia</option>
            <option>Guitarra</option>
            <option>cartoneria</option>
          </select>
        </div>
          <div className="form-group">
            <select
                name="curso3"
                className="form-control"
                value={this.state.curso3}
                onChange={this.handleInputChange}
              >
              <option>fotografia</option>
              <option>Guitarra</option>
              <option>cartoneria</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
        <ControlledCarousel/>
      </div>
    
      
    )
  }

}

export default TodoForm;
