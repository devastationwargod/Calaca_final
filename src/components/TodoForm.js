import React, { Component } from "react";
import ControlledCarousel from "./carousel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      cabeza: 0,
      cuerpo: 0,
      pie: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
  }

  handleInputChange(e, index) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [index]: value
    });
  }

  render() {
    const cabezas = this.props.cursos.filter(function(curso) {
      return curso.type === "cabeza";
    });
     const optionsHead = cabezas.map(function(cabeza, index) {
      return <option value={index}>{cabeza.curso}</option>;
    });

    const torsos = this.props.cursos.filter(function(curso) {
        return curso.type === "torso";
      }).map(function(torso, index) {
        return <option value={index}>{torso.curso}</option>;
      });

    const pies = this.props.cursos.filter(function(curso) {
        return curso.type === "pies";
      }).map(function(pies, index) {
        return <option value={index}>{pies.curso}</option>;
      });

    return (
      <div className="card">
        <Form onSubmit={this.handleSubmit} className="card-body">
          <p>Selecciona tu curso</p>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
              onChange={e => this.handleInputChange(e, "cabeza")}
              as="select"
            >
              {" "}
              {optionsHead}
            </Form.Control>
            <Button onClick={()=>console.log(cabezas[this.state.cabeza])} variant="danger">Ver más</Button>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
              onChange={e => this.handleInputChange(e, "cuerpo")}
              as="select"
            >
              {torsos}
            </Form.Control>
            <Button onClick={()=>console.log(torsos[this.state.cuerpo])} variant="danger">Ver más</Button>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
              onChange={e => this.handleInputChange(e, "pies")}
              as="select"
            >
              {pies}
            </Form.Control>
            <Button onClick={()=>console.log(pies[this.state.pie])} variant="danger">Ver más</Button>
          </Form.Group>
          <button type="submit" className="btn btn-primary">
            Confirmar
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
