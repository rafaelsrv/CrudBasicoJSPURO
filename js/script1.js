class Produto{

    constructor(){
        this.id = 1;
        this.arrayProdutos = [];


    }
    salvar(){
        
        let produto = this.lerDados() //Ler os dados dos inputs usando GetElementByID

        if(this.validaCampos(produto)){     //Validando se existem dados nos inputs.
            this.adicionar(produto);        //Chamando função que adiciona produtos no array.
        }
        this.listaTabela();
    }   

    listaTabela(){
        let tbody = document.getElementById('tbody');

        for(let i=0; i<this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();
        }
    }
    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++
        console.log(produto)
        console.log(produto)

    }    
    
    lerDados(){
        let produto = {}
        
        produto.id = this.id        //Setando id de cada objeto.
        produto.nomeProduto = document.getElementById('produto').value
        produto.preco = document.getElementById('preco').value
        
        return produto;             //Retornando o produto.
    }
    validaCampos(produto){
        let msg = ''
        if(produto.nomeProduto == ''){
            msg += '-Informe o Nome do Produto \n'
        }
        
        if(produto.preco == ''){
            msg += '-Informe o Preço do Produto \n'
        }
        if(msg !=''){
            alert(msg)
            return false
        }
        return true

    }

    
    cancelar(){
        alert('Vamos deletar um produto')
    }
}

var produto = new Produto()