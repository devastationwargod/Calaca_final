import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();
    
    ObtenerDatos = (e) => {
        e.preventDefault();

        // tomamos el valor del input 
        const termino = (this.busquedaRef.current.value);

        // lo mandamos al componente principal
        this.props.datosBusqueda(termino);

    }
    render() {
        return (
            <form onSubmit={this.ObtenerDatos}>
              <div className="row">

               <div className ="form-group col-md-8">
                  <input ref={this.busquedaRef} type="text"
                  className="form-control form-control-lg"
                  placeholder="Busca tu Imagen. Ejemplo: Futbol" />
                </div>
                <div className ="form-group col-md-4">
                  <input type="submit" ClassName="btn btn-lg 
                  btn-danger btn-block" value="Buscar.."/>
                </div>
                </div>

                </form>
                
            
        );
    }
}

export default Buscador;