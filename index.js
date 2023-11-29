function calcularNivelRankeadas(vitorias, derrotas) {
    if (!Number.isInteger(vitorias) || !Number.isInteger(derrotas) || vitorias < 0 || derrotas < 0) {
        return "Por favor, forneça valores válidos para vitórias e derrotas.";
    }


    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}


let resultado = calcularNivelRankeadas(25, 5);
console.log(resultado);
