import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



// data
import { todos } from './cursos.json';

// subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  
  //removeTodo(index) {
   // this.setState({
     // todos: this.state.todos.filter((e, i) => {
       // return i !== index
      //})
    //});
  //}
  
  //const Imagen = (props) => {
   // const{ largeImageURL} = props.images;
//return (
   //<div className="col-12">
      //<div className="card">
            //<img src={previewUrl} />
           // <div className="card-body">
            //<a href={largeImageURL} target="_blank" className="btn btn-primary
           // btn-block">Ver imagen</a>
           // </div>
          //</div>
       //</div>  
//)

//}
              //  className="btn btn-danger"
              //  onClick={this.removeTodo.bind(this, i)}>
              //  Eliminar
             // </button>////
  

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const cursos = this.state.todos;
    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className="navbar navbar-ligth bg-">
          <a className="navbar-brand" href="/">
            Cursos 
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-6 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo} cursos={cursos}></TodoForm>
            </div>

            <div className="col-md-6">
              <div className="row">
                {}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
