import { cantItem,precioItem,precioNeto,impuestoEstado, calcularPrecioImpuesto } from "./totalizador.js";

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
  const precioTotalImpuesto = calcularPrecioImpuesto(estado,cantidad,precio);

  resultado.innerHTML =
    "<p>Cantidad de items: " + cant + "</p>" +
    "<p>Precio por item: " + prec + "</p>" +
    "<p>Codigo de estado: " + estado + "</p>" +
    "<p>Precio neto: " + neto + "</p>" +
    "<p>Impuesto para " + estado + ": " + impuesto + "%</p>" +
    "<p>Precio total con impuesto " + precioTotalImpuesto + "</p>";
});