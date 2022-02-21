//Selecionando a Lista (ul) do meu HTML//
const listaFilme = document.querySelector(".listaFilme")


//Declarando QUE VAI LISTAR OS FILMES//
function listarFilmes() {

        //1 acessar os filmes
        //2 loop para encontrar os filmes
        //3 monstar um template (LI)
        //4 mostrar tela


        console.log(filmes)
        filmes.forEach(function(filme){

            console.log(filme.nome)

        })

}
//Chamando pra executar os passos
listarFilmes() 

//Função criar template(li)
function criarTemplate(filme){
    //1 -Filme 
        //NOME 
        //IMAGEM
    //2 - CRIAR UM LI
    //3 - RETORNAR ESSE TEMPLATE COM O FILME

}
criarTemplate()