/*
    Crie um algoritimo que transforme as notas 
    do sistema numérico para sistema de notas
    em caracteres tipo ABC

    de 90 para cima : A
    entre 80 e 89   : B
    entre 70 e 79   : C
    entre 60 e 69   : D
    menor que 60    : F
*/

const converterNotas = (notasNumericas) => {

    let notasCaracteres = notasNumericas.map(nota => {
        if (nota >= 90 && nota <= 100) {
            return "A"
        }
        if (nota >= 80 && nota <= 89) {
            return "B"
        }
        if (nota >= 70 && nota <= 79) {
            return "C"
        }
        if (nota >= 60 && nota <= 69) {
            return "D"
        }
        if (nota >= 0 && nota <= 60) {
            return "F"
        }

        return `Nota invalida!`
    })

    for (const indice in notasNumericas) {
        console.log(`Nota ${notasNumericas[indice]} = ${notasCaracteres[indice]}`)
    }

    return
}

const notasSistemaNumerico = [90, 85, 75, 65, 50, 0, 100, 84, 300, -1]

converterNotas(notasSistemaNumerico)
