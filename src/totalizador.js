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

export function calcularImpuesto(neto, impuesto){
    return neto * (impuesto / 100);
}

export function calcularPrecioConImpuesto(estado,cantidad,precio){
    const neto = precioNeto(cantidad,precio);
    const impuesto = impuestoEstado(estado);

    const montoImpuesto = calcularImpuesto(neto, impuesto);

    return neto + montoImpuesto;
}

export function descuento(neto){
    if (neto >= 30000){
        return 15;
    } else if (neto >= 10000){
        return 10;
    } else if (neto >= 7000){
        return 7;
    } else if (neto >= 3000){
        return 5;
    } else if (neto >= 1000){
        return 3;
    }
    return 0;
}


export function calcularDescuento(neto, porcentajeDescuento){
    return neto * (porcentajeDescuento / 100);
}

export function calcularPrecioConImpuestoYDescuento(estado,cantidad,precio){
    const neto = precioNeto(cantidad,precio);
    const impuesto = impuestoEstado(estado);
    const montoImpuesto = calcularImpuesto(neto, impuesto);
    const porcentajeDescuento = descuento(neto);
    const montoDescuento = calcularDescuento(neto,porcentajeDescuento);

    return neto + montoImpuesto - montoDescuento;
}

export function impuestoAdicionalPorCategoria(categoria) {
    if (categoria == "Varios") {
        return 0;
    }
    else if (categoria = "Alimentos") {
        return 0;
    }
    return 0;
}