
/* --------------------- função botao prato ------------------------*/
let botaoPrato;
function botaoverde (seletor){
    const selecaoverde = document.querySelector(".selecaoprato .verde");
    if (selecaoverde !== null){
selecaoverde.classList.remove("verde");
    }

    const prato = document.querySelector(seletor);
    prato.classList.toggle("verde");

   
    
botaoPrato = prato.innerHTML;
Botaocinzaverde ();
}
/* --------------------- função botao bebida ------------------------*/ 
let botaoBebida;
function botaoverde1 (seletor){
    const selecaoverde = document.querySelector(".selecaobebida .verde");
    if (selecaoverde !== null){
selecaoverde.classList.remove("verde");
    }

    const bebida = document.querySelector(seletor);
    bebida.classList.toggle("verde");

    
    
    botaoBebida = bebida.innerHTML;
    Botaocinzaverde ();
}

/* -------------------- função botao sobremesa ----------------------*/
let botaoSobremesa;
function botaoverde2 (seletor){
    const selecaoverde = document.querySelector(".selecaosobremesa .verde");
    if (selecaoverde !== null){
selecaoverde.classList.remove("verde");
    }

    const sobremesa = document.querySelector(seletor);
    sobremesa.classList.toggle("verde");
    
    botaoSobremesa = sobremesa.innerHTML;
    Botaocinzaverde ();
}


/* --------- condiçoes e função para swap botao cinza/verde -------- */
function Botaocinzaverde () {


    if(botaoPrato !==undefined){
        if(botaoBebida !==undefined){
            if(botaoSobremesa !==undefined){
                // criar uma constante pro botaocinza
const botaoConfirmarCinza = document.querySelector('.botaocinza');
//criar uma constante pro botaoConfirmar
const botaoConfirmarVerde = document.querySelector('.botaoConfirmar');
// fazer botao cinza sumir
botaoConfirmarCinza.style.display = "none";
// fazer botaoConfirmar aparecer
botaoConfirmarVerde.style.display = "flex";

            }
        }
    }

}

/*----------------------- Confirmando pedido ------------------------*/
function confirmarPedido (){
    /* pegar o nome do prato */
    const nomePrato = (document.querySelector('.selecaoprato .verde .h1')).innerHTML;
    /* pegar o nome da bebida */
    const nomeBebida = (document.querySelector('.selecaobebida .verde .h1')).innerHTML;
    /* pegar o nome da sobremesa */
    const nomeSobremesa = (document.querySelector('.selecaosobremesa .verde .h1')).innerHTML;
    /* pegar o preço do prato */
    const precoPrato = (document.querySelector ('.selecaoprato .verde .h3 span')).innerHTML;
    /* transformar em numero */
    let precoPratoNumero = Number(precoPrato);
    /* pegar o preço da bebida */
    const precoBebida = (document.querySelector ('.selecaobebida .verde .h3 span')).innerHTML;
    /* transformar em numero */
    let precoBebidaNumero = Number (precoBebida);
    /* pegar o preço da sobremesa */
    const precoSobremesa = (document.querySelector ('.selecaosobremesa .verde .h3 span')).innerHTML;
    /* transformar em numero */
    let precoSobremesaNumero = Number (precoSobremesa);
    /* somar os valores dos pratos */
    let total = precoPratoNumero + precoBebidaNumero + precoSobremesaNumero
    total = total.toFixed(2)
    /* fazer a msg do wpp */
    let msg = `Olá, gostaria de fazer o pedido:
- Prato: ${nomePrato}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomeSobremesa}
Total: R$ ${total}`

    /*https://wa.me/5535999113164? */
    msg = encodeURIComponent(msg)
    let linkwpp = "https://wa.me/5535999113164?text="+msg;
    window.open(linkwpp);

}


