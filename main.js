import Articulo from "./articulo.js";
import Registro from "./registro.js";

class Main{
    constructor(){
        let registro = new Registro(
            document.querySelector("#tablaInfo")
        )
        
    document.querySelector("#btnAgregar").addEventListener("click",()=>{

        let codigo = document.querySelector("#codigo").value;
        let nombre = document.querySelector("#nombre").value;
        let precio = Number(document.querySelector("#precio").value);
        let cantidad = document.querySelector("#cantidad").value;
        let descripcion = document.querySelector("#descripcion").value;
        let toString = document.querySelector("#toString");
        
        let objArticulo = {
            codigo: codigo,
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
            descripcion: descripcion
        };

        let articulo = new Articulo(objArticulo);
        
            registro.agregar(articulo);
            registro.AgregarEnTabla(articulo);

        toString.textContent = articulo.toString();
        
    });

    document.querySelector("#buscar").addEventListener("click", () =>{
        let codigo = document.querySelector("#codigoBuscado").value
        console.log("halle " + registro.buscarArticulo(codigo))        
    })

    document.querySelector("#borrar").addEventListener("click", () =>{
        let codigo = document.querySelector("#codigoBorrado").value
        console.log("elimine" + registro.eliminarArticulo(codigo))        
    })
    
    }
}

var m = new Main()