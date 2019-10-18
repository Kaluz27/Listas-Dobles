export default class Registro {
    constructor(tablaInfo) {
        this._primeroArticulo = null;
        this._ultimoArticulo = null;
        this._tablaInfo = tablaInfo;
    }


    agregar(articulo) {
        if (this._primerArticulo == null) {
            this._primerArticulo = articulo;
            this._ultimoArticulo = articulo;
        }else if (articulo > this._primerArticulo) {
            this._agregarArticuloOrdenadamente(articulo);
        } else if (articulo.codigo == this._primeroArticulo.codigo) {
            this.buscarArticulo(articulo)
            if (this._buscar(articulo.codigo) == articulo.codigo) {
                return true
            }
            
        }
        
        else {
            let anterior = this._ultimoArticulo;
            this._ultimoArticulo._siguiente = articulo;
            this._ultimoArticulo = articulo;
            this._ultimoArticulo.anterior = anterior;
        }
        this._ultimoArticulo = articulo;

        console.log(this._primerArticulo);
        //console.log(this._ultimoArticulo);
    }

  
    buscarArticulo(codigo) {
        let encontrar = this._primerArticulo;
        console.log(encontrar);
        while (encontrar.codigo != codigo) {
            encontrar = encontrar.siguiente;
            //console.log(encontrar);
        }
        return encontrar;
    }

    eliminarArticulo(codigo) {
    let borrar = this.buscarArticulo(codigo);
    if (borrar == this._primerArticulo) {
        borrar.siguiente = this._primerArticulo;
        console.log(borrar)
    }
    }
   


   AgregarEnTabla(articulo, objArticulo){
    let row = this._tablaInfo.insertRow(-1);
    let cellCodigo = row.insertCell(0);
    let cellNombre = row.insertCell(1);
    let cellPrecio = row.insertCell(2);
    let cellCantidad = row.insertCell(3);
    let cellDescripcion = row.insertCell(4);
    row.insertCell(5);
    

    cellCodigo.innerHTML = articulo.codigo;
    cellNombre.innerHTML = articulo.nombre;
    cellPrecio.innerHTML = articulo.precio;
    cellCantidad.innerHTML = articulo.cantidad;
    cellDescripcion.innerHTML = articulo.descripcion;

     objArticulo = {
        codigo: articulo.codigo,
        nombre: articulo.nombre,
        precio: articulo.precio,
        cantidad: articulo.cantidad,
        descipcion: articulo.descripcion
    };
    return objArticulo;
  
}
//me quede trabado
_agregarArticuloOrdenadamente(articulo){
    let nuevoArticulo =articulo;
    let primerArticulo = this._primerArticulo;

    if(nuevoArticulo.codigo < primerArticulo.codigo){
        primerArticulo.anterior = nuevoArticulo.codigo;
        nuevoArticulo.siguiente = primerArticulo.codigo;
    }else{
        while (nuevoArticulo.codigo > primerArticulo.codigo) {
            primerArticulo.siguiente = nuevoArticulo.codigo;
            nuevoArticulo.anteior = primerArticulo.codigo;
            if (nuevoArticulo.codigo > primerArticulo.siguiente.codigo) {
                
            }
    }
    }

}
}