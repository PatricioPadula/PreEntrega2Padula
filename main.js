let nombre;
let precio;
let precioIva;
let otro;
let i = 0;
const iva = (precio) => precio * 0.21;


function productos(){
    while(i < 4){
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
        }else{
            alert("Producto inexistente");
        }   

        otro = prompt("¿Quieres comprar otro producto?").toLowerCase();
        if(otro == "si"){
            i++;
        }else{
            break;
        }

    }
    alert("Fin del simulador");
}
    
productos();
