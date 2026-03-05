import totalizar from "./totalizador.js";

describe("Totalizador", () => {
    it("mostrar cantidad de items", () => {
        expect(totalizar(5)).toEqual(5);
    });
});