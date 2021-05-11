/**
 *
 * Sistema  de gastos familiares
 *
 * Crie um objeto que possuirá 2 propriedades, ambas tipo array:
 *  receitas : []
 *  despesas : []
 *
 * Agora, crie uma função que irá calcular o total de receitas
 * e despesas e irá mostrar uma mensagem se a família está com
 * saldo positivo ou negativo, seguido do valor do saldo
 *
 */

const calcularSaldo = (fluxoDeCaixa) => {
    const { receitas, despesas } = fluxoDeCaixa

    const somarValores = (soma, valor) => Math.abs(soma) + Math.abs(valor)

    const totalDeReceitas = receitas.reduce(somarValores).toFixed(2)
    const totalDeDespesas = despesas.reduce(somarValores).toFixed(2)
    const total = (totalDeReceitas - totalDeDespesas).toFixed(2)
    const status = total >= 0 ? `positivo` : `negativo`

    console.log(`
        Total de receitas: R$ ${totalDeReceitas}
        Total de despesas: R$ ${totalDeDespesas}
        Saldo familiar ${status}: R$ ${total}
        `)
    return
}

const fluxoDeCaixaFamiliar = {
    receitas: [1000, 1000],
    despesas: [50, -50]
}

calcularSaldo(fluxoDeCaixaFamiliar)
