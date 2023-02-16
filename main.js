let nombre;
let precio;
let precioIva
const iva = (precio) => precio * 0.21;


function productos(){
    nombre = prompt('Ingrese el nombre del producto que quiere comprar (Productos: crema corporal, crema facial, peptisomas, protector solar)');
    if(nombre === "crema corporal" || nombre === "crema facial" || nombre === "peptisomas" || nombre === "protector solar"){
        switch(nombre){
            case "crema corporal":
                precio = 2000;
                precioIva = iva(precio);
                precio = precio + precioIva;
                break;
            case "crema facial":
                precio = 1000;
                precioIva = iva(precio);
                precio = precio + precioIva;
                break;
            case "peptisomas":
                precio = 1500;
                precioIva = iva(precio);
                precio = precio + precioIva;
                break;
            case "protector solar":
                precio = 900;    
                precioIva = iva(precio);
                precio = precio + precioIva;
                break;
        }
        alert(`Elegiste el producto ${nombre.toUpperCase()} que tiene un valor de $${precio} `);
        alert("Fin del simulador");
    }else{
        alert("Producto inexistente");
    }   
}
    
productos();
