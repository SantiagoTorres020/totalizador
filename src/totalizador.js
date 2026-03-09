export function cantItem(cantidad){
    return cantidad;
}

export function precioItem(precio){
    return precio;
}

export function precioNeto(cantidad,precio){
    return cantItem(cantidad)*precioItem(precio);
}

export function impuestoEstado(estado){
    if(estado == "UT"){
        return 6.65;
    }else if(estado == "NV"){
        return 8.00;
    }else if (estado == "TX"){
        return 6.25;
    }else if (estado == "AL"){
        return 4.00;
    }else if(estado == "CA"){
        return 8.25;
    }
    return 0;
}

export function calcularPrecioImpuesto(estado,cantidad,precio){
    const neto = precioNeto(cantidad,precio);
    const impuesto = impuestoEstado(estado);
    const montoImpuesto = neto * (impuesto / 100);

    return neto + montoImpuesto;
}