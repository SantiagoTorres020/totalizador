import { cantItem } from "./totalizador.js";
import { precioItem } from "./totalizador.js";
import { precioNeto } from "./totalizador.js";
import { impuestoEstado } from "./totalizador.js";
import { calcularPrecioConImpuesto } from "./totalizador.js";
import { descuento } from "./totalizador.js";
import { calcularDescuento } from "./totalizador.js";
import { calcularPrecioConImpuestoYDescuento } from "./totalizador.js";

describe("Totalizador", () => {
    it("mostrar cantidad de items", () => {
        expect(cantItem(5)).toEqual(5);
    });

    it("mostrar precio por item", () => {
        expect(precioItem(3)).toEqual(3);
    });

    it("mostrar precio neto", () => {
        expect(precioNeto(3,5)).toEqual(15);
    });

    it("mostrar el porcentaje de impuesto que tiene un estado", () => {
        let estado = "TX";
        expect(impuestoEstado(estado)).toEqual(6.25);
    });

    it("Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de CA", () => {
        let estado = "CA";
        expect(calcularPrecioConImpuesto(estado,5,3)).toEqual(16.2375);
    });

    it("Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de AL", () => {
        let estado = "AL";
        expect(calcularPrecioConImpuesto(estado,5,3)).toEqual(15.6);
    });

    it("Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de NV", () => {
        let estado = "NV";
        expect(calcularPrecioConImpuesto(estado,5,3)).toEqual(16.2);
    });

    it("Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de UT", () => {
        let estado = "UT";
        expect(calcularPrecioConImpuesto(estado,5,3)).toEqual(15.9975);
    });

    it("Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de TX", () => {
        let estado = "TX";
        expect(calcularPrecioConImpuesto(estado,5,3)).toEqual(15.9375);
    });

    it("Deberia devolver 3 cuando el neto es 2000", () => {
        expect(descuento(2000)).toEqual(3);
    });

    it("Deberia calcular 60 de descuento para un neto de 2000 con 3%", () => {
        expect(calcularDescuento(2000, 3)).toEqual(60);
    });

    it("Deberia calcular el precio total con impuesto y descuento para un neto de 2000", () => {
        expect(calcularPrecioConImpuestoYDescuento("UT", 1000, 2)).toEqual(2073);
    });

});