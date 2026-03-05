export function cantItem(cantidad){
    return cantidad;
}

export function precioItem(precio){
    return precio;
}

export function precioNeto(cant,precio){
    return cantItem(cant)*precioItem(precio);
}