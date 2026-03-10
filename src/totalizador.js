/* eslint-disable eqeqeq */
/* eslint-disable quotes */
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

export function calcularPrecioConImpuestoYDescuento(estado, cantidad, precio, categoria) {
    const neto = precioNeto(cantidad, precio);

    const impuestoBase = impuestoEstado(estado);
    const impuestoCategoria = impuestoAdicionalPorCategoria(categoria);
    const impuestoTotal = impuestoBase + impuestoCategoria;

    const montoImpuesto = calcularImpuesto(neto, impuestoTotal);

    const descuentoBase = descuento(neto);
    const descuentoCategoria = descuentoAdicionalPorCategoria(categoria);
    const descuentoTotal = descuentoBase + descuentoCategoria;

    const montoDescuento = calcularDescuento(neto, descuentoTotal);

    return neto + montoImpuesto - montoDescuento;
}

export function impuestoAdicionalPorCategoria(categoria) {
    if (categoria == "Varios") {
        return 0;
    }
    else if (categoria == "Alimentos") {
        return 0;
    }
    else if (categoria == "Bebidas alcoholicas") {
        return 7;
    }
    else if (categoria == "Material de Escritorio") {
        return 0;
    }
    else if (categoria == "Muebles") {
        return 3;
    }
    else if (categoria == "Electronicos") {
        return 4;
    }
    else if (categoria == "Vestimenta") {
        return 2;
    }
    return 0;
}

export function descuentoAdicionalPorCategoria(categoria) {
    if (categoria == "Varios") {
        return 0;
    }
    else if (categoria == "Alimentos") {
        return 2;
    }
    else if (categoria == "Bebidas alcoholicas") {
        return 0;
    }
    else if (categoria == "Material de Escritorio") {
        return 1.5;
    }
    else if (categoria == "Muebles") {
        return 0;
    }
    else if (categoria == "Electronicos") {
        return 1;
    }
    else if (categoria == "Vestimenta") {
        return 0;
    }
    return 0;
}

export function costoEnvioPorUnidad(pesoVolumetrico) {
    if (pesoVolumetrico >= 0 && pesoVolumetrico <= 10) {
        return 0;
    }
    else if (pesoVolumetrico >= 11 && pesoVolumetrico <= 20) {
        return 3.5;
    }
    else if (pesoVolumetrico >= 21 && pesoVolumetrico <= 40) {
        return 5;
    }
    else if (pesoVolumetrico >= 41 && pesoVolumetrico <= 80) {
        return 6;
    }
    return 0;
}