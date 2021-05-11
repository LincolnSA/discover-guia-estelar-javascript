/**
 * Celsius para Fahrenheit
 *
 * Crie uma função que receba uma string em celsius ou fahrenheit
 * e faça a transformação de uma unidade para outra
 *
 *  C = (f - 32) * 5/9
 *  F = ( c * 9/5) + 32
 *
 *  exemplo de entrada : 25 °c ou 25 °f
 */


const converterUnidades = (grau) => {

    let resultado
    const [valor, unidade] = grau.split(` `)

    const celsius = valor => `${(Number(valor) * 9 / 5) + 32} °f`
    const fahrenheit = valor => `${(Number(valor) - 32) * 5 / 9} °c`

    switch (unidade.toUpperCase()) {
        case `°C`:
            resultado = celsius(valor)
            break;

        case `°F`:
            resultado = fahrenheit(valor)
            break;

        default:
            resultado = "Grau nao identificado!"
            break;
    }

    console.log(`
        ${grau} = ${resultado}
    `)
}

converterUnidades("0 °F")