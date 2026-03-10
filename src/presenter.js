/* eslint-disable quotes */
import {
    precioNeto,
    impuestoEstado,
    calcularImpuesto,
    descuento,
    calcularDescuento,
    calcularPrecioConImpuestoYDescuento,
    impuestoAdicionalPorCategoria,
    descuentoAdicionalPorCategoria,
    costoEnvioPorUnidad,
    costoEnvioTotal,
    descuentoEnvioCliente,
    costoEnvioFinal,
    descuentoFijoPorCliente
} from "./totalizador.js";

const form = document.querySelector("#totalizar-form");
const txtCantidad = document.querySelector("#txtCantidad");
const txtPrecio = document.querySelector("#txtPrecio");
const txtEstado = document.querySelector("#txtEstado");
const txtCategoria = document.querySelector("#txtCategoria");
const txtPesoVolumetrico = document.querySelector("#txtPesoVolumetrico");
const txtTipoCliente = document.querySelector("#txtTipoCliente");
const divResultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const cantidad = Number(txtCantidad.value);
    const precio = Number(txtPrecio.value);
    const estado = txtEstado.value;
    const categoria = txtCategoria.value;
    const pesoVolumetrico = Number(txtPesoVolumetrico.value);
    const tipoCliente = txtTipoCliente.value;

    const neto = precioNeto(cantidad, precio);

    const porcentajeImpuestoEstado = impuestoEstado(estado);
    const porcentajeImpuestoCategoria = impuestoAdicionalPorCategoria(categoria);
    const porcentajeImpuestoTotal = porcentajeImpuestoEstado + porcentajeImpuestoCategoria;
    const montoImpuesto = calcularImpuesto(neto, porcentajeImpuestoTotal);

    const porcentajeDescuentoMonto = descuento(neto);
    const porcentajeDescuentoCategoria = descuentoAdicionalPorCategoria(categoria);
    const porcentajeDescuentoTotal = porcentajeDescuentoMonto + porcentajeDescuentoCategoria;
    const montoDescuento = calcularDescuento(neto, porcentajeDescuentoTotal);

    const envioUnidad = costoEnvioPorUnidad(pesoVolumetrico);
    const envioTotal = costoEnvioTotal(cantidad, pesoVolumetrico);

    const porcentajeDescuentoEnvio = descuentoEnvioCliente(tipoCliente);
    const envioFinal = costoEnvioFinal(tipoCliente, cantidad, pesoVolumetrico);

    const descuentoFijo = descuentoFijoPorCliente(tipoCliente, neto, categoria);

    const total = calcularPrecioConImpuestoYDescuento(
        estado,
        cantidad,
        precio,
        categoria,
        pesoVolumetrico,
        tipoCliente
    );

    divResultado.innerHTML =
        "<p>Cantidad de items: " + cantidad + "</p>" +
        "<p>Precio por item: $" + precio + "</p>" +
        "<p>Codigo de estado: " + estado + "</p>" +
        "<p>Categoria de producto: " + categoria + "</p>" +
        "<p>Peso volumétrico por unidad: " + pesoVolumetrico + "</p>" +
        "<p>Tipo de cliente: " + tipoCliente + "</p>" +

        "<p>Precio neto (" + cantidad + "*$" + precio + "): $" + neto + "</p>" +

        "<p>Impuesto del estado para " + estado + " (%" + porcentajeImpuestoEstado + "): $" +
        calcularImpuesto(neto, porcentajeImpuestoEstado) + "</p>" +

        "<p>Impuesto adicional por categoria " + categoria + " (%" + porcentajeImpuestoCategoria + "): $" +
        calcularImpuesto(neto, porcentajeImpuestoCategoria) + "</p>" +

        "<p>Impuesto total aplicado (%" + porcentajeImpuestoTotal + "): $" + montoImpuesto + "</p>" +

        "<p>Descuento por monto (%" + porcentajeDescuentoMonto + "): $" +
        calcularDescuento(neto, porcentajeDescuentoMonto) + "</p>" +

        "<p>Descuento adicional por categoria " + categoria + " (%" + porcentajeDescuentoCategoria + "): $" +
        calcularDescuento(neto, porcentajeDescuentoCategoria) + "</p>" +

        "<p>Descuento total aplicado (%" + porcentajeDescuentoTotal + "): $" + montoDescuento + "</p>" +

        "<p>Costo de envio por unidad: $" + envioUnidad + "</p>" +
        "<p>Costo de envio total: $" + envioTotal + "</p>" +

        "<p>Descuento en envio para cliente " + tipoCliente + " (%" + porcentajeDescuentoEnvio + "): $" +
        (envioTotal - envioFinal) + "</p>" +

        "<p>Costo de envio final: $" + envioFinal + "</p>" +

        "<p>Descuento fijo por tipo de cliente: $" + descuentoFijo + "</p>" +

        "<p>Precio total (descuento, impuesto y envio): $" + total + "</p>";
});