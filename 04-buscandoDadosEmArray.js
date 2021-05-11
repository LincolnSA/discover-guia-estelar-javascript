/**
 *  Buscando e encontrando dados em array
 * 
 *  -contar o número de categorias e o número de livros em cada categoria
 *  -contar o número de autores
 *  -mostrar livros do autor augusto cury
 *  -transformar a função acima em uma função que irá receber o nome
 *  e devolver os livros desse autor
 * 
 */

const livrosPorCategorias = [
    {
        categoria: 'Riqueza',
        livros: [
            {
                titulo: "Os segredos da mente milionária",
                autor: "T. Harv Eker"
            },
            {
                titulo: "O homem mais rico da babilônia",
                autor: "George S. Clason"
            },
            {
                titulo: "Pai rico, pai pobre",
                autor: "Robert T. Kiyosaki e Sharon L. Lechter"
            },
        ]
    },
    {
        categoria: 'Inteligência Emocional',
        livros: [
            {
                titulo: "Você é insubstituível",
                autor: "Augusto Cury"
            },
            {
                titulo: "Ansiedade - Como enfrentar o mal do século",
                autor: "Augusto Cury"
            },
            {
                titulo: "Os 7 hábitos das pessoas altamente eficazes",
                autor: "Stephen R. Covey"
            },
        ]
    }
]

const totalDeCategorias = livrosPorCategorias.length

const totalDeLivrosPorCategoria = (index) => {
    const { categoria, livros } = livrosPorCategorias[index]

    console.log(`Categoria: ${categoria}, Total de livros: ${livros.length}`)
}

const totalDeAutoresPorCategoria = (index) => {
    const { livros } = livrosPorCategorias[index]
    let totalDeAutores = []

    for (const { autor } of livros) {

        if (!totalDeAutores.includes(autor)) {
            totalDeAutores.push(autor)
        }
    }

    console.log(`Total de autores: ${totalDeAutores.length}, Nomes: ${totalDeAutores}`)

}

const livroDoAutorEspecifico = (autor) => {
    let livrosPorAutor = []

    for (const { livros } of livrosPorCategorias) {

        for (const livro of livros) {

            if (livro.autor.includes(autor)) {
                livrosPorAutor.push(livro)
            }
        }

    }
    if (livrosPorAutor.length === 0) {
        console.log("Autor não encontrado!")
        return
    }

    for (const { titulo, autor } of livrosPorAutor) {

        console.log(`Autor: ${autor}, Título: ${titulo}`)
    }

}

(() => {

    for (const index in livrosPorCategorias) {

        totalDeLivrosPorCategoria(index)
        totalDeAutoresPorCategoria(index)
    }

    const buscarPorAutor = 'Augusto Cury'
    livroDoAutorEspecifico(buscarPorAutor)

})()