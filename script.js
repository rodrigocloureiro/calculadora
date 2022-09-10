let str1 = ``; 
let str2 = ``; 
let op = ``;
let visor = document.querySelector('#visor');

function reset() {
    str1 = ``; 
    str2 = ``; 
    op = ``;
    visor.innerHTML = `<span class="res">0</span><br>`;
    console.clear();
}

function valor(val) {
    if(op == ``) {
        str1 += `${val}`;
        console.log(str1);
        visor.innerHTML = `<span class="res">${str1}</span><br>`;
    }
    else {
        str2 += `${val}`;
        console.log(str2);
        visor.innerHTML = `<span class="res">${str2}</span><br>`;
    }
}

function operador(val) {
    op = `${val}`;
    console.log(op);
}

function resultado() {
    let resultado = 0;
    let n1 = Number(str1);
    let n2 = Number(str2);

    switch(op) {
        case `+`:
            resultado = n1 + n2;
            break;
        case `-`:
            resultado = n1 - n2;
            break;
        case `*`:
            resultado = n1 * n2;
            break;
        case `/`:
            resultado = n1 / n2;
            break;
    }
    str1 = `${resultado}`;
    str2 = ``;
    console.log(resultado);
    visor.innerHTML = `<span class="res">${resultado}</span><br>`;
}