import { calcularPrecioImpuesto, cantItem } from "./totalizador.js";
import { precioItem } from "./totalizador.js";
import { precioNeto } from "./totalizador.js";
import { impuestoEstado } from "./totalizador.js";

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
        expect(calcularPrecioImpuesto(estado,5,3)).toEqual(16.2375);
    });
});