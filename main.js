let cant;
let total = 0;
let totalProducto = 0;
let Productos = [];

const cantidad = (cant, precio) =>{
    return cant * precio;
}



alert("🔶Bienvenido al simulador de comprar productos🔶");
let producto = parseInt(prompt("Ingrese el numero del producto que quiere comprar, si quiere finalizar ingrese 0: \n\n1-crema corporal $900 \n2-peptisoma $1200 \n3-radiante $2000 \n4-hydrapore $1740"));

while(producto != 0){
    switch(producto){
        case 1:
            cant = parseInt(prompt("seleccionaste crema corporal $900, indique la cantidad que desea"));
            total += cantidad(cant, 900);
            totalProducto = cantidad(cant, 900);
            Productos.push({nombre: "crema corporal", precio: 900, cantidad: cant, suma: totalProducto});
            break;
        case 2:
            cant = parseInt(prompt("seleccionaste peptisoma $1200, indique la cantidad que desea"));
            total += cantidad(cant, 1200);
            totalProducto = cantidad(cant, 1200);
            Productos.push({nombre: "peptisoma", precio: 1200, cantidad: cant, suma: totalProducto});
            break;
        case 3:
            cant = parseInt(prompt("seleccionaste radiante $2000, indique la cantidad que desea"));
            total += cantidad(cant, 2000);
            totalProducto = cantidad(cant, 2000);
            Productos.push({nombre: "radiante", precio: 2000, cantidad: cant, suma: totalProducto});
            break;
        case 4:
            cant = parseInt(prompt("seleccionaste hydrapore $1740, indique la cantidad que desea"));
            total += cantidad(cant, 1740);
            totalProducto = cantidad(cant, 1740);
            Productos.push({nombre: "hydrapore", precio: 1740, cantidad: cant, suma: totalProducto});
            break;
        default:
            break;
    }
    producto = parseInt(prompt("Ingrese el numero del producto que quiere comprar, si quiere finalizar ingrese 0: \n\n1-crema corporal $900 \n2-peptisoma $1200 \n3-radiante $2000 \n4-hydrapore $1740"));
}

Productos.forEach((item) => {
    let mensaje = `
    Producto: ${item.nombre}
    Precio: $${item.precio}
    Cantidad: ${item.cantidad}
    total: $${item.suma}
    `;
    alert(`Llevas: ${mensaje}`); 
})

alert(`El total de la compra es de $${total}`);
alert("Fin 😄")