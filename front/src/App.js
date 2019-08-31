import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


// data
//import { todos } from './cursos.json';

// subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  componentDidMount = () => {
    axios.get('http://localhost:8000/api/note/').then(response => {

        this.setState({todos: response.data.objects})

    
    });
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

        <nav className="navbar bg-warning" id="navlogo">
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
        <h1><strong>Calaca A.C.</strong></h1>
        </div>
        </nav>
        <div className="container text-center">
              <TodoForm onAddTodo={this.handleAddTodo} cursos={cursos}></TodoForm>
        </div>
      </div>
    );
  }
}

export default App;
