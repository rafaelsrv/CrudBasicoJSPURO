class Produto{

    constructor(){
        this.id = 1;
        this.arrayProdutos = [];
        this.editID = null;


    }
    salvar(){
        
        let produto = this.lerDados() //Ler os dados dos inputs usando GetElementByID

        if(this.validaCampos(produto)){ 
            if(this.editID == null){    //Validando se existem dados nos inputs.
            this.adicionar(produto);
        }else{
            this.atualizar(this.editID, produto)
        }        //Chamando função que adiciona produtos no array.
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
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;       //ALterando nomeProduto
            td_valor.innerText = this.arrayProdutos[i].preco;

            td_id.classList.add('center');  //Adicionando classe no td_id.

            let imgEdit = document.createElement('img'); 
            imgEdit.src = "img/edit.png";
            imgEdit.setAttribute("onClick","produto.prepararEdicao("+JSON.stringify(this.arrayProdutos[i])+")")
            imgEdit.classList.add('cursor')
            
            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png';
            imgDelete.setAttribute("onClick","produto.deletar("+ this.arrayProdutos[i].id+")") //setAttribute("evento","ação") Quando/Oque.
            imgDelete.classList.add('cursor')

            td_acoes.appendChild(imgDelete);
            td_acoes.appendChild(imgEdit);
            

        }
    }
    prepararEdicao(dados){
        this.editID = dados.id                                          //Buscando ID para edição
        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('preco').value = dados.preco;

        document.getElementById('btn1').innerText = 'Atualizar'  // atualizando valores
        
    }
    adicionar(produto){
        
        produto.preco = parseFloat(produto.preco)       //commit
        this.arrayProdutos.push(produto);               //Adicionando no arraydsadas321321
        this.id++                           //
        

    }    
    atualizar(id, produto){
        for (let i=0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].preco = produto.preco;
            }
        }


    }
    cancelar(){
        document.getElementById('produto').value = ''
        document.getElementById('preco').value = ''

        document.getElementById('btn1').innerText='Salvar'
        this.editID = null;
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
    deletar(id){
        
        let tbody = document.getElementById('tbody');
        
        if(confirm(`Deseja deletar o produto ${id}?`)){

            for(let i = 0; i <this.arrayProdutos.length; i++){      //Percorrendo o array para verificação
                if(this.arrayProdutos[i].id == id){                 //Se o id do array for igual ao id retornado quando clica em deletar
                    this.arrayProdutos.splice(i,1)                  //Dar um splice no array, retirando o elemento
                    tbody.deleteRow(i)
    
                }                                                   //Da prosição i, 1 elemento só.
            }
        }

        
        console.log(this.arrayProdutos)//Quitando do projeto
    }

    
    
}

var produto = new Produto()