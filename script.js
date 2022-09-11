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

function keyInput(event) {
    var x = event.key;

    if(op == ``) {
        if(x == 1 || x == 2 || x == 3 || x == 4 || x == 5 || x == 6 || x == 7 || x == 8 || x == 9 || x == 0) {
            str1 += `${x}`;
            console.log(str1);
            visor.innerHTML = `<span class="res">${str1}</span><br>`;
        }
    }
    else {
        if(x == 1 || x == 2 || x == 3 || x == 4 || x == 5 || x == 6 || x == 7 || x == 8 || x == 9 || x == 0) {
            str2 += `${x}`;
            console.log(str2);
            visor.innerHTML = `<span class="res">${str2}</span><br>`;
        }
    }

    if(n == `+` || n == `-`|| n == `*`|| n == `/`) {
        operador(n);
    }
    else if(n == `Enter` || n == `=`) {
        resultado();
    }
    else if(n == `c`) {
        reset();
    }
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
    if(str2 != ``) {
        resultado();
    }

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