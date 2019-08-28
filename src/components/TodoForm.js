import React, { Component } from "react";
import ControlledCarousel from "./carousel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      cabeza: 0,
      torso: 0,
      pies: 0,
      modalShown: " "
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick = (curso)=> {
    this.setState({
      modalShown: curso,
      
    });
  };

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
      return curso.tipo === "cabeza";
    });
    const optionsHead = cabezas.map(function(cabeza, index) {
      return <option value={index}>{cabeza.title}</option>;
    });

    const torsos = this.props.cursos.filter(function(curso) {
      return curso.tipo === "torso";
    });
    const optionsBody = torsos.map(function(torso, index) {
      return <option value={index}>{torso.title}</option>;
    });

    const pies = this.props.cursos.filter(function(curso) {
      return curso.tipo === "pies";
    });

    const optionsFeet = pies.map(function(pies, index) {
      return <option value={index}>{pies.title}</option>;
    });
    // en el arreglo "descriptions" se almacena el mapeo de los cursos
    const descriptions = this.props.cursos.map(curso => {
      return (
    <Modal show={this.state.modalShown === curso.curso}>
    <Modal.Title>{curso.title}</Modal.Title>
    <Modal.Body>
    <p>
    {curso.description}
    </p>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={()=>this.handleClick("")}>Close</Button>
    </Modal.Footer>
    </Modal>
   );
    });

    return (
      <div className="card">
        {descriptions}
        <Form onSubmit={this.handleSubmit} className="card-body">
          <p>Selecciona tu curso</p>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
              onChange={e => this.handleInputChange(e, "cabeza")}
              as="select"
            >
              {optionsHead}
            </Form.Control>
            <Button
              variant="danger"
              onClick={()=>this.handleClick(cabezas[this.state.cabeza].curso)}
            >
              Detalles
            </Button>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
              onChange={e => this.handleInputChange(e, "torso")}
              as="select"
            >
              {""}
              {optionsBody}
            </Form.Control>
            <Button
              variant="danger"
              onClick={() => this.handleClick(torsos[this.state.torso].curso)}
            >
              Detalles
            </Button>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
              onChange={e => this.handleInputChange(e, "pies")}
              as="select"
            >
              {""}
              {optionsFeet}
            </Form.Control>
            <Button
              onClick={()=>this.handleClick(pies[this.state.pies].curso)}
              variant="danger"
            >
              Detalles
            </Button>
          </Form.Group>
          <button type="submit" className="btn btn-primary">
            Confirmar
          </button>

        </Form>
        <ControlledCarousel activeIndex={this.state.cabeza} cursos={cabezas} />
        <ControlledCarousel activeIndex={this.state.cuerpo} cursos={torsos} />
        <ControlledCarousel activeIndex={this.state.pies} cursos={pies} />
      </div>
    );
  }
}

export default TodoForm;
