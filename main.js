const produtoRepository = require('./repository/produto_repository')



function main() {
    console.log(produtoRepository.listar());
    
    const produto1 = new Object();
    produto1.nome = "arroz";
    produto1.categoria = "alimento";
    produto1.preco = 5;
    produtoRepository.inserir(produto1);

    const produto2 = {
        nome: "refrigerante",
        categoria: "bebida",
        preco: 8
    };
    produtoRepository.inserir(produto2);

    const produto3 = {
        nome: "feijao",
        categoria: "alimento",
        preco: 9
    };
    produtoRepository.inserir(produto3);
   
    console.log("Listar: ", produtoRepository.listar());

    console.log("Pesquisar pela categoria 'alimento", 
        produtoRepository.pesquisarPorCategoria('alimento'));

    console.log("Pesquisar pelo nome like 'E", 
        produtoRepository.pesquisarPorLikeNome('E'));
        
    const produtoBuscarId3 = produtoRepository.buscarPorId(3);
    console.log("BuscarPorId3: ", produtoBuscarId3);
    
    const produtoBuscarId1 = produtoRepository.buscarPorId(1);
    console.log("BuscarPorId1: ", produtoBuscarId1);

    produtoRepository.atualizar(2, { 
        nome: "suco", 
        categoria: "bebida", 
        preco: 9.9
    });

    produtoRepository.deletar(3);

    console.log("Listar: ", produtoRepository.listar());

}

main();