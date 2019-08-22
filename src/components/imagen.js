import React from 'react';

const Imagen = (props) => {
         const{ largeImageURL} = props.images;
    return (
        <div className="col-12">
           <div className="card">
                 <img src={previewUrl} />
                 <div className="card-body">
                 <a href={largeImageURL} target="_blank" className="btn btn-primary
                 btn-block">Ver imagen</a>
                 </div>
               </div>
            </div>  
    )

}

export default Imagen;