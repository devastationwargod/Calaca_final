import React, { Component } from 'react'
import axios from 'axios';


class HomeContainer extends Component {
    state = {
        cursos: []
    };

    componentDidMount = () => {
        axios.get('http://f14b8fae.ngrok.io/api/note/').then(response => {
            this.setState({cursos: response.data.results})
        });
    }
    handleCardClick = curso => {
        const url = curso.cabeza;
        axios.get(url).then(response => {
            this.addHomeworldInfo(curso.image, response.data);
        });
    }


    render(){
        return <ul>{this.state.cursos.map(curso=> <li>{curso.name}</li>)}</ul>;
    }

}
    
export default HomeContainer;
