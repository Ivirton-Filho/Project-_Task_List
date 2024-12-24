function adicionarTarefa() {
     let inputTarefa=document.getElementById("input") // aqui estamos conectando com o elemento HTML 
        let Tarefa= inputTarefa.value /*o elemento value, recebe o valor que a variável "inputTarefa" recebeu do input no elemento html, que foi linkado
através do getElementById */
    if (Tarefa == "") {// se estiver vazia, faz isso
        let mensagemerror= "A caixa está vazia"
          document.getElementById("mensagem").textContent = mensagemerror // textContent serve para escrever no HTML oq está escrito na variável depois do'='
      } else { // se não, faz isso
        let mensagem = "Tarefa adicionada com sucesso!"; //atribuindo valor a variável
           document.getElementById("mensagem").textContent = mensagem; // aqui existe mensagem = imput e mensagem = variável
           let Lista= document.getElementById("Listadtarefas")// conectando com a tag <ul>
             let NovaTarefa= document.createElement('li') // serve para criar elementos que estão dentro do () no document "HTML"
              Lista.appendChild(NovaTarefa) // esse appendchild é para criar um elemento filho no elemento pai, que nesse caso é NovaTarefa
               NovaTarefa.textContent = Tarefa
              
      }
        }
       // colocamos no javascript as coisas na ordem que queremos que aconteçam 
      inputTarefa.value ='' //colocamos fora pq indepente de qual seja o caminho esse codigo deve ser executado, no caso ele retira as palavras quando digitaedo