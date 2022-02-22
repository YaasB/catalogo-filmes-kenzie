//Selecionando a Lista (ul) do meu HTML//
const listaFilme = document.querySelector(".listaFilme")


//Declarando QUE VAI LISTAR OS FILMES//
function listarFilmes(colecaoFilmes) {

        //1 acessar os filmes
        //2 loop para encontrar os filmes
        //3 monstar um template (LI)
        //4 mostrar tela

        listaFilme.innerHTML = ""

        // acessando a ccolecao de filmes (array) -> passando para funcao template
        colecaoFilmes.forEach(function(filme){
            // passando cada filme =>para criar  o template para cada filme
            const template = criarTemplate(filme)
            // adicionando os filmes de forma visual no HTML
            listaFilme.appendChild(template)
        })

}
//Chamando pra executar os passos
listarFilmes(filmes) 

//Função criar template(li)
function criarTemplate(filme){
    //1 -Filme 
        //NOME 
        //IMAGEM
    //2 - CRIAR UM LI
    //3 - RETORNAR ESSE TEMPLATE COM O FILME

    //filme.nome
    //filme.url

    // criando um template do tipo html
        const li = document.createElement("li")

        //adicionando uma estrutura html pra dentro do (li)
        li.innerHTML = `
        <figure>
            <img src="${filme.url}" alt="${filme.nome}" /> 
        </figure>
        <h2>${filme.nome}</h2>
        `

        return li

}

//filtrar filme por categoria
function filtrarFilme(filtroCatergoria){

    const filmesFiltrados = filmes.filter(function(filme){

        console.log(filme.categoria)
        console.log(filtroCatergoria)

        // se a categoria buscada for === a do filme atual mostre o filme ou retorne
        if(filtroCatergoria == filme.categoria){
            // retorne o filme
            return filme

        }

    })

        listarFilmes(filmesFiltrados)

}

const categorias = document.querySelector(".categorias")

categorias.addEventListener("click", function(event){

    event.preventDefault()

    const categoriaSelecionada = event.target.text
    if(categoriaSelecionada == "Mostrar Todos"){
        listarFilmes(filmes)
        console.log("Mostre todas")
        listarFilme(filmes)
    }else{
        console.log("Filtre por "+ categoriaSelecionada) 
        filtrarFilme(categoriaSelecionada)

    }
})