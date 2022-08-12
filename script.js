function botaoverde (seletor){
    const selecaoverde = document.querySelector(".selecaoprato .verde");
    if (selecaoverde !== null){
selecaoverde.classList.remove("verde");
    }

    const prato = document.querySelector(seletor);
    prato.classList.toggle("verde");

    const v = document.querySelector(".verificado");
    v.classList.toggle("verde verificado");
    

}

function botaoverde1 (seletor){
    const selecaoverde = document.querySelector(".selecaobebida .verde");
    if (selecaoverde !== null){
selecaoverde.classList.remove("verde");
    }

    const bebida = document.querySelector(seletor);
    bebida.classList.toggle("verde");

    const v = document.querySelector(".verificado");
    v.classList.toggle("verde verificado");
    
    
}

function botaoverde2 (seletor){
    const selecaoverde = document.querySelector(".selecaosobremesa .verde");
    if (selecaoverde !== null){
selecaoverde.classList.remove("verde");
    }

    const sobremesa = document.querySelector(seletor);
    sobremesa.classList.toggle("verde");
    
}

/* -------------------------------------- */

