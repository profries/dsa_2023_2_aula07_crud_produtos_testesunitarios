//Ver diferença entre cenários e casos de teste:
//https://www.linkedin.com/pulse/casos-de-uso-vs-cen%C3%A1rios-testes-crit%C3%A9rios-aceite-bruno-sbardelatti/?originalSubdomain=pt

const repository = require('./repository/produto_repository');

const listaInicialEsperada = [
    {id: 1, nome:"Produto1", preco:30, categoria:"Cat1"},
    {id: 2, nome:"Produto2", preco:40, categoria:"Cat1"},
    {id: 3, nome:"Produto3", preco:50, categoria:"Cat2"},
];

beforeEach(()=> {
    repository.deletarTodos();
    //Populando os dados
    repository.inserir({nome:"Produto1", preco:30, categoria:"Cat1"});
    repository.inserir({nome:"Produto2", preco:40, categoria:"Cat1"});
    repository.inserir({nome:"Produto3", preco:50, categoria:"Cat2"});
});

//Cenário: Listar os produtos com sucesso.
test("Listar Produtos retorna a lista inicial esperada",
    () => {
        expect(repository.listar())
            .toEqual(listaInicialEsperada);

        expect(repository.listar().length).toBe(3);
    }
)

//Cenario: Buscar com sucesso o produto com id = 2.
test("Buscar Por Id 2 deve retornar Produto 2",
    () => {
        let produto2 = {
            id: 2, 
            nome:"Produto2", 
            preco:40, 
            categoria:"Cat1"
        };
        expect(repository.buscarPorId(2)).toEqual(produto2);
    }
)

//Cenario: Retornar undefined na busca por id=5
test("Buscar Por Id 5 deve retornar Undefined",
    () => {
        expect(repository.buscarPorId(5)).toBeUndefined();
    }
)

//