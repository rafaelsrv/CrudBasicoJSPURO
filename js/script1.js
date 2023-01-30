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
        this.cancelar();
    }   

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i=0; i<this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;     //Adicionando texto no id da tabela.
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].preco;

            td_id.classList.add('center');  //Adicionando classe no td_id.

            let imgEdit = document.createElement('img'); 
            imgEdit.src = "img/edit.png";
            
            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png';

            td_acoes.appendChild(imgDelete);
            td_acoes.appendChild(imgEdit);

        }
    }
    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++
        console.log(produto)
        console.log(produto)

    }    
    cancelar(){
        document.getElementById('produto').value = ''
        document.getElementById('preco').value = ''
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

    
    
}

var produto = new Produto()