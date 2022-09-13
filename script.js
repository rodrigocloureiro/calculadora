let str1 = ``; 
let str2 = ``; 
let op = ``;
let visor = document.querySelector('#visor');
let aux = document.querySelectorAll(".btnop");

function reset() {
    str1 = ``; 
    str2 = ``;
    switch(op) {
        case `+`:
            aux[0].classList.remove("btnClick");
            break;
        case `-`:
            aux[1].classList.remove("btnClick");
            break;
        case `*`:
            aux[2].classList.remove("btnClick");
            break;
        case `/`:
            aux[3].classList.remove("btnClick");
            break;
    }
    op = ``;
    visor.classList.remove("resLow");
    visor.innerHTML = ``;
    console.clear();
}

function keyInput(event) {
    var x = event.key;

    if(str1.length < 9) {
        if(op == ``) {
            if(x == 1 || x == 2 || x == 3 || x == 4 || x == 5 || x == 6 || x == 7 || x == 8 || x == 9 || x == 0) {
                str1 += `${x}`;
                console.log(str1);
                visor.innerHTML = `${str1}`;
            }
        }
    }

    if(op != ``) {
        if(str2.length < 9) {
            if(x == 1 || x == 2 || x == 3 || x == 4 || x == 5 || x == 6 || x == 7 || x == 8 || x == 9 || x == 0) {
                str2 += `${x}`;
                console.log(str2);
                visor.innerHTML = `${str2}`;
            }
        }
    }

    if(x == `+` || x == `-`|| x == `*`|| x == `/`) {
        operador(x);
    }
    else if(x == `Enter` || x == `=`) {
        resultado();
    }
    else if(x == `c`) {
        reset();
    }
}

function valor(val) {
    if(str1.length < 9) {
        if(op == ``) {
            str1 += `${val}`;
            console.log(str1);
            visor.innerHTML = `${str1}`;
        }
    }

    if(op != ``) {
        if(str2.length < 9) {
            str2 += `${val}`;
            console.log(str2);
            visor.innerHTML = `${str2}`;
        }
    }
}

function operador(val) {
    if(str2 != ``) {
        resultado();
    }

    if(aux[0] != "btnop") {
        aux[0].classList.remove("btnClick");
    }
    if(aux[1] != "btnop") {
        aux[1].classList.remove("btnClick");
    }
    if(aux[2] != "btnop") {
        aux[2].classList.remove("btnClick");
    }
    if(aux[3] != "btnop") {
        aux[3].classList.remove("btnClick");
    }

    op = `${val}`;
    console.log(op);

    switch(op) {
        case `+`:
            aux[0].classList.add("btnClick");
            break;
        case `-`:
            aux[1].classList.add("btnClick");
            break;
        case `*`:
            aux[2].classList.add("btnClick");
            break;
        case `/`:
            aux[3].classList.add("btnClick");
            break;
    }
}

function resultado() {
    let res = 0;
    let n1 = Number(str1);
    let n2 = Number(str2);

    switch(op) {
        case `+`:
            res = n1 + n2;
            aux[0].classList.remove("btnClick");
            console.log("case +");
            break;
        case `-`:
            res = n1 - n2;
            aux[1].classList.remove("btnClick");
            console.log("case -");
            break;
        case `*`:
            res = n1 * n2;
            aux[2].classList.remove("btnClick");
            console.log("case *");
            break;
        case `/`:
            res = n1 / n2;
            aux[3].classList.remove("btnClick");
            console.log("case /");
            break;
    }
    str1 = `${res}`;
    str2 = ``;
    console.log(res);
    console.log(res.toString().length);
    if(res.toString().length < 9) {
        visor.innerHTML = `${res}`;
    }
    else {
        visor.classList.add("resLow");
        visor.innerHTML = `${res.toFixed(4)}`;
    }
}