import { cantItem } from "./totalizador.js";
import { precioItem } from "./totalizador.js";
import { precioNeto } from "./totalizador.js";

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
});