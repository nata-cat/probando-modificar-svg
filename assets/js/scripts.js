function cambiarLoica(){

    let cuerpoLoica = document.getElementById('cuerpo');
    cuerpoLoica.setAttribute('id',"cuerpoLoica");
    cuerpoLoica.classList.add('cuerpo');

    let pataLoica = document.getElementById('nariz__pata')
    pataLoica.setAttribute('id',"narizPataLoica")

    let cabezaLoica = document.getElementById('mejilla')
    cabezaLoica.setAttribute('id',"mejillaLoica")

    let alaLoica = document.getElementById('ala')
    alaLoica.setAttribute('id',"alaLoica")


}

function cambiarMartin(){

    let cuerpoMartin = document.getElementById('cuerpo')
    cuerpoMartin.setAttribute('id',"cuerpoMartin")

    let pataMartin = document.getElementById('nariz__pata')
    pataMartin.setAttribute('id',"narizPataMartin")

    let cabezaMartin = document.getElementById('mejilla')
    cabezaMartin.setAttribute('id',"mejillaMartin")

    let alaMartin = document.getElementById('ala')
    alaMartin.setAttribute('id',"alaMartin")

}

function cambiarSiete(){

    let cuerpoSiete = document.getElementById('cuerpo')
    cuerpoSiete.setAttribute('id',"cuerpoSiete")

    let pataSiete = document.getElementById('nariz__pata')
    pataSiete.setAttribute('id',"narizPataSiete")

    let cabezaSiete = document.getElementById('mejilla')
    cabezaSiete.setAttribute('id',"mejillaSiete")

    let alaSiete = document.getElementById('ala')
    alaSiete.setAttribute('id',"alaSiete")

}

let cuerpoOriginal = 'cuerpo';
let pataOriginal = 'nariz__pata';
let cabezaOriginal = 'mejilla';
let alaOriginal = 'ala';


function volver(params) {

    let cuerpoLoica = document.getElementById('cuerpoLoica');
    cuerpoLoica.setAttribute('id', cuerpoOriginal);

    let pataLoica = document.getElementById('narizPataLoica');
    pataLoica.setAttribute('id', pataOriginal);

    let cabezaLoica = document.getElementById('mejillaLoica');
    cabezaLoica.setAttribute('id', cabezaOriginal);

    let alaLoica = document.getElementById('alaLoica');
    alaLoica.setAttribute('id', alaOriginal);

    
}
