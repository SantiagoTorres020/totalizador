import { cantItem,precioItem,precioNeto,impuestoEstado, calcularPrecioConImpuesto, calcularImpuesto, calcularPrecioConImpuestoYDescuento } from "./totalizador.js";

const form = document.querySelector("#totalizar-form");

const txtCantidad = document.querySelector("#txtCantidad");
const txtPrecio = document.querySelector("#txtPrecio");
const txtEstado = document.querySelector("#txtEstado");

const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number(txtCantidad.value);
  const precio = Number(txtPrecio.value);
  const estado = txtEstado.value.trim().toUpperCase();

  const cant = cantItem(cantidad);
  const prec = precioItem(precio);
  const neto = precioNeto(cantidad, precio);
  const impuesto = impuestoEstado(estado);
  const impuestoMonetario = calcularImpuesto(neto,impuesto);
  const precioTotalImpuesto = calcularPrecioConImpuesto(estado,cantidad,precio);
  const precioFinal = calcularPrecioConImpuestoYDescuento(estado,cantidad,precio);

  resultado.innerHTML =
    "<p>Cantidad de items: " + cant + "</p>" +
    "<p>Precio por item: $" + prec + "</p>" +
    "<p>Codigo de estado: " + estado + "</p>" +
    "<p>Precio neto (" + cant + "*$" + prec + "): $" + neto + "</p>" +
    "<p>Impuesto para " + estado + "(%" + impuesto + "): $" + impuestoMonetario + "</p>" +
    "<p>Precio total (descuento e impuesto): $" + precioFinal + "</p>";
});