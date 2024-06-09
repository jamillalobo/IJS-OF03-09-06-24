const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Retorna qual o pacote de acordo com o número de horas", () => {
  test("Retorna se é um pacote básico", () => {
    const totalHoras = 49;

    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_basico");
  });

  test("Retorna se é um pacote intermediário", () => {
    const totalHoras = 51;

    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_intermediario");
  });

  test("Retorna se é um pacote premmium", () => {
    const totalHoras = 101;

    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_premium");
  });

  test("Retorna se é um pacote premmium", () => {
    const totalHoras = 101;

    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_premium");
  });
});
