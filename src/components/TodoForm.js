import React, { Component } from "react";
import ControlledCarousel from "./carousel";
import Form from 'react-bootstrap/Form';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      cabeza: 0,
      cuerpo: 0,
      pies: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      curso: "",
      curso: "",
      curso: "",
      HORARIO: "MATUTINO"
    });
  }

  handleInputChange(e,index) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [index]: value
    });
  }

  render() {
    return (
      <div className="card">
        <Form onSubmit={this.handleSubmit} className="card-body">
          <p>Selecciona tu curso</p>
          
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control onChange={(e)=>this.handleInputChange(e,"cabeza")} as="select" >
              <option value={0}>guitarra</option>
              <option value={1}>fotografía</option>
              <option value={2}>cartonería</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control onChange={(e)=>this.handleInputChange(e,"cuerpo")} as="select" >
              <option>1v</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control onChange={(e)=>this.handleInputChange(e,"pies")} as="select" >
            <option>1</option>
            </Form.Control>
          </Form.Group>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </Form>
        <ControlledCarousel activeIndex={this.state.cabeza} />
        <ControlledCarousel activeIndex={this.state.cuerpo} />
        <ControlledCarousel activeIndex={this.state.pies} />
      </div>
    );
  }
}

export default TodoForm;
