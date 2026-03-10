/* eslint-disable quotes */
import { cantItem } from "./totalizador.js";
import { precioItem } from "./totalizador.js";
import { precioNeto } from "./totalizador.js";
import { impuestoEstado } from "./totalizador.js";
import { calcularPrecioConImpuesto } from "./totalizador.js";
import { descuento } from "./totalizador.js";
import { calcularDescuento } from "./totalizador.js";
import { calcularPrecioConImpuestoYDescuento } from "./totalizador.js";
import { impuestoAdicionalPorCategoria } from "./totalizador.js";
import { descuentoAdicionalPorCategoria } from "./totalizador.js";
import { costoEnvioPorUnidad } from "./totalizador.js";
import { costoEnvioTotal } from "./totalizador.js";


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

    it("Mostrar el precio total con el Porcentaje de descuento que corresponde a 1000", () => {
        expect(calcularPrecioConImpuestoYDescuento("UT", 1000, 1)).toEqual(1036.5);
    });

    it("Mostrar el precio total con el Porcentaje de descuento que corresponde a 3000", () => {
        expect(calcularPrecioConImpuestoYDescuento("UT", 3000, 1)).toEqual(3049.5);
    });

    it("Mostrar el precio total con el Porcentaje de descuento que corresponde a 7000", () => {
        expect(calcularPrecioConImpuestoYDescuento("UT", 7000, 1)).toEqual(6975.5);
    });

    it("Mostrar el precio total con el Porcentaje de descuento que corresponde a 10000", () => {
        expect(calcularPrecioConImpuestoYDescuento("UT", 10000, 1)).toEqual(9665);
    });

    it("Mostrar el precio total con el Porcentaje de descuento que corresponde a 30000", () => {
        expect(calcularPrecioConImpuestoYDescuento("UT", 30000, 1)).toEqual(27495); 
    });

    it("Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de TX", () => {
        expect(calcularPrecioConImpuestoYDescuento("UT", 30000, 1)).toEqual(27495); 
    });

    it("Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de TX", () => {
        expect(calcularPrecioConImpuestoYDescuento("TX", 4568, 1)).toEqual(4625.1);
    });

    it("Deberia devolver 0 de impuesto adicional para la categoria Varios", () => {
        expect(impuestoAdicionalPorCategoria("Varios")).toEqual(0);
    });

    it("Deberia devolver 0 de impuesto adicional para la categoria Alimentos", () => {
        expect(impuestoAdicionalPorCategoria("Alimentos")).toEqual(0);
    });

    it("Deberia devolver 7 de impuesto adicional para la categoria Bebidas alcoholicas", () => {
        expect(impuestoAdicionalPorCategoria("Bebidas alcoholicas")).toEqual(7);
    });

    it("Deberia devolver 0 de impuesto adicional para la categoria Material de Escritorio", () => {
        expect(impuestoAdicionalPorCategoria("Material de Escritorio")).toEqual(0);
    });

    it("Deberia devolver 3 de impuesto adicional para la categoria Muebles", () => {
        expect(impuestoAdicionalPorCategoria("Muebles")).toEqual(3);
    });

    it("Deberia devolver 4 de impuesto adicional para la categoria Electronicos", () => {
        expect(impuestoAdicionalPorCategoria("Electronicos")).toEqual(4);
    });

    it("Deberia devolver 2 de impuesto adicional para la categoria Vestimenta", () => {
        expect(impuestoAdicionalPorCategoria("Vestimenta")).toEqual(2);
    });

    it("Deberia calcular el precio total con impuesto de estado e impuesto adicional por categoria", () => {
        expect(calcularPrecioConImpuestoYDescuento("CA", 2, 100, "Electronicos")).toEqual(222.5);
    });

    it("Deberia devolver 2 de descuento adicional para la categoria Alimentos", () => {
        expect(descuentoAdicionalPorCategoria("Alimentos")).toEqual(2);
    });

    it("Deberia devolver 1.5 de descuento adicional para la categoria Material de Escritorio", () => {
        expect(descuentoAdicionalPorCategoria("Material de Escritorio")).toEqual(1.5);
    });

    it("Deberia calcular el precio total considerando el descuento e impuesto adicional por categoria", () => {
        expect(calcularPrecioConImpuestoYDescuento("CA", 10, 200, "Alimentos")).toEqual(2065);
    });

    it("Deberia devolver 0 de costo de envio por unidad cuando el peso volumetrico esta entre 0 y 10", () => {
        expect(costoEnvioPorUnidad(10)).toEqual(0);
    });

    it("Deberia devolver 3.5 de costo de envio por unidad cuando el peso volumetrico esta entre 11 y 20", () => {
        expect(costoEnvioPorUnidad(20)).toEqual(3.5);
    });

    it("Deberia devolver 5 de costo de envio por unidad cuando el peso volumetrico esta entre 21 y 40", () => {
        expect(costoEnvioPorUnidad(40)).toEqual(5);
    });

    it("Deberia devolver 6 de costo de envio por unidad cuando el peso volumetrico esta entre 41 y 80", () => {
        expect(costoEnvioPorUnidad(80)).toEqual(6);
    });
    it("Deberia devolver 6.5 de costo de envio por unidad cuando el peso volumetrico esta entre 81 y 100", () => {
        expect(costoEnvioPorUnidad(100)).toEqual(6.5);
    });
    it("Deberia devolver 8 de costo de envio por unidad cuando el peso volumetrico esta entre 101 y 200", () => {
        expect(costoEnvioPorUnidad(200)).toEqual(8);
    });

    it("Deberia devolver 9 de costo de envio por unidad cuando el peso volumetrico es mayor a 201", () => {
        expect(costoEnvioPorUnidad(300)).toEqual(9);
    });

    it("Deberia calcular el costo total de envio multiplicando la cantidad por el costo de envio por unidad", () => {
        expect(costoEnvioTotal(3, 15)).toEqual(10.5);
    });

    it("Deberia calcular el precio total incluyendo costo de envio", () => {
        expect(calcularPrecioConImpuestoYDescuento("CA", 2, 100, "Varios", 15)).toEqual(223.5);
    });
});